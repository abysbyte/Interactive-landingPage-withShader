import * as THREE from "three";
import {
    vertexShader,
    fluidFragmentShader,
    displayFragmentShader
} from "./shaders.js";

window.addEventListener("load", init);

function init() {
    const canvas = document.querySelector("canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        precision: "highp",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const mouse = new THREE.Vector2(0.5, 0.5);
    const uPrevMouse = new THREE.Vector2(0.5, 0.5);
    let isMoving = false;
    let lastMoveTime = 0;
    let mouseInCanvas = false;

    // fluid simulation render targets
    const size = 500;
    const pingPongTarget = [
        new THREE.WebGLRenderTarget(size, size, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
        }),
        new THREE.WebGLRenderTarget(size, size, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
        }),
    ];
    let currentTarget = 0;

    const topTexture = createPlaceholderTexture(512, 512, "#0000ff"); // Blue "#0000ff"
    const bottomTexture = createPlaceholderTexture(512, 512, "#ff0000"); // Red "#ff0000"

    const topTextureSize = new THREE.Vector2(1,1);
    const bottomTextureSize = new THREE.Vector2(1,1);

    // Display material: blends top and bottom textures using the fluid map
    const displayMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uFluid: { value: pingPongTarget[0].texture },
            uTopTexture: { value: topTexture },
            uBottomTexture: { value: bottomTexture },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uDpr: { value: window.devicePixelRatio || 1 },
            uTopTextureSize: { value: topTextureSize },
            uBottomTextureSize: { value: bottomTextureSize },
        },
        vertexShader,
        fragmentShader: displayFragmentShader,
    });

    const trailMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uPrevTrails: { value: null },
            uMouse: { value: mouse },
            uPrevMouse: { value: uPrevMouse },
            uResolution: { value: new THREE.Vector2(size, size) },
            uDecay: { value: 0.97 },
            // Simulation uniforms: brush width and intensity
            uLineWidth: { value: 0.02 },
            uBrushStrength: { value: 0.28 },
            uIsMoving: { value: isMoving },
        },
        vertexShader,
        fragmentShader: fluidFragmentShader,
    });

    // Load textures from public assets (served at /assests/)
    loadImage("/assests/images/fci6.jpeg", topTexture, topTextureSize);
    loadImage("/assests/images/fci10.png", bottomTexture, bottomTextureSize);

    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    const displayMesh = new THREE.Mesh(planeGeometry, displayMaterial);
    scene.add(displayMesh);

    const simMesh = new THREE.Mesh(planeGeometry, trailMaterial);
    const simScene = new THREE.Scene();
    simScene.add(simMesh);

    renderer.setRenderTarget(pingPongTarget[0]);
    renderer.clear();

    renderer.setRenderTarget(pingPongTarget[1]);
    renderer.clear();

    renderer.setRenderTarget(null);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", onWindowResize);

    animate();

    // Create a solid-color placeholder texture (used until real image loads)
    function createPlaceholderTexture(width, height, color) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const texture = new THREE.Texture(canvas);
        texture.minFilter = THREE.LinearFilter;
        return texture;
    }

    function loadImage(url, targetTexture, textureSizeVector) {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = function () {
            const originWidth = img.width;
            const originHeight = img.height;
            textureSizeVector.set(originWidth, originHeight);

            console.log(`Loaded texture: ${url} (${originWidth}x${originHeight})`);

            const maxSize = 4096;
            let newWidth = originWidth;
            let newHeight = originHeight;

            if (originWidth > maxSize || originHeight > maxSize) {
                    // console.log(`Image exceeds max texture size, resizing...`);
                if (originWidth > originHeight) {
                    newWidth = maxSize;
                    newHeight = Math.floor(originHeight * (maxSize / originWidth));
                } else {
                    newHeight = maxSize;
                    newWidth = Math.floor(originWidth * (maxSize / originHeight));
                }
            }

            const canvas = document.createElement("canvas");
            canvas.width = newWidth;
            canvas.height = newHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            const newTexture = new THREE.Texture(canvas);
            newTexture.minFilter = THREE.LinearFilter;
            newTexture.magFilter = THREE.LinearFilter;
            newTexture.needsUpdate = true; // ensure GPU updates with the new image

            // Assign the new texture to the correct display uniform based on the passed targetTexture
            if (targetTexture === topTexture) {
                displayMaterial.uniforms.uTopTexture.value = newTexture;
            } else if (targetTexture === bottomTexture) {
                displayMaterial.uniforms.uBottomTexture.value = newTexture;
            } else {
                // Fallback: if targetTexture isn't recognized, assign to bottom texture
                displayMaterial.uniforms.uBottomTexture.value = newTexture;
            }

            // Also update the placeholder texture reference so other code can check/replace it
            if (targetTexture) {
                try { targetTexture.image = canvas; targetTexture.needsUpdate = true; } catch (e) {}
            }

            // Notify material to recompile/use updated uniforms
            displayMaterial.needsUpdate = true;
        };

        img.onerror = function (err) {
            console.error(`Error loading image ${url}:`, err);
        };
        img.src = url;
    }

    function onMouseMove(event) {
        const canvasRect = canvas.getBoundingClientRect();

        if (
            event.clientX >= canvasRect.left &&
            event.clientX <= canvasRect.right &&
            event.clientY >= canvasRect.top &&
            event.clientY <= canvasRect.bottom
        ) {
            uPrevMouse.copy(mouse);

            mouse.x = (event.clientX - canvasRect.left) / canvasRect.width;
            mouse.y = 1 - (event.clientY - canvasRect.top) / canvasRect.height;

            isMoving = true;
            lastMoveTime = performance.now();
        } else {
            isMoving = false;
        }
    }

    function onTouchMove(event) {
        if (event.touches.length > 0) {
            event.preventDefault();

            const canvasRect = canvas.getBoundingClientRect();
            const touchX = event.touches[0].clientX;
            const touchY = event.touches[0].clientY;

            if (
                touchX >= canvasRect.left &&
                touchX <= canvasRect.right &&
                touchY >= canvasRect.top &&
                touchY <= canvasRect.bottom
            ) {
                uPrevMouse.copy(mouse);

                mouse.x = (touchX - canvasRect.left) / canvasRect.width;
                mouse.y = 1 - (touchY - canvasRect.top) / canvasRect.height;

                isMoving = true;
                lastMoveTime = performance.now();
            } else {
                isMoving = false;
            }
        }
    }

    function onWindowResize() {
        renderer.setSize(window.innerWidth, window.innerHeight);

        displayMaterial.uniforms.uResolution.value.set(
            window.innerWidth,
            window.innerHeight
        );
        displayMaterial.uniforms.uDpr.value = window.devicePixelRatio;
    }

    function animate() {
        requestAnimationFrame(animate);

        if (isMoving && performance.now() - lastMoveTime > 100) {
            isMoving = false;
        }

        // Ping-pong render: render simulation into the next target, then display it
        const prevIndex = currentTarget;
        const nextIndex = (currentTarget + 1) % 2;

        // Provide previous state texture to the simulation shader
        trailMaterial.uniforms.uPrevTrails.value = pingPongTarget[prevIndex].texture;
        trailMaterial.uniforms.uMouse.value.copy(mouse);
        trailMaterial.uniforms.uPrevMouse.value.copy(uPrevMouse);
        trailMaterial.uniforms.uIsMoving.value = isMoving;

        // Render simulation into the next target
        renderer.setRenderTarget(pingPongTarget[nextIndex]);
        renderer.render(simScene, camera);

        // Display uses the freshly rendered texture
        displayMaterial.uniforms.uFluid.value = pingPongTarget[nextIndex].texture;

        renderer.setRenderTarget(null);
        renderer.render(scene, camera);

        // Advance ping-pong for next frame, and update previous mouse position for trajectory
        currentTarget = nextIndex;
        uPrevMouse.copy(mouse);
    }
}