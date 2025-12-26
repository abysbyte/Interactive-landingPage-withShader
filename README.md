# Interactive Landing Page with Fluid Shader


> A stunning, interactive landing page featuring real-time fluid simulation with GPU-accelerated shader effects. Move your mouse to paint the screen with dynamic fluid physics.

![Three.js](https://img.shields.io/badge/Three.js-black?style=flat-square&logo=three.js)
![WebGL](https://img.shields.io/badge/WebGL-FF6B35?style=flat-square&logo=webgl)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)

** check out page - ** https://landing-page-with-shader.vercel.app

## ✨ Features

- **Real-time Fluid Simulation** – GPU-powered fluid dynamics using ping-pong render targets
- **Interactive Drawing** – Mouse and touch support for intuitive canvas painting
- **Dual-Image Blending** – Smooth transitions between two images using the fluid map as a mask
- **Performance Optimized** – WebGL render targets and efficient shader-based processing
- **Responsive Design** – Automatically adapts to window resizing
- **Customizable Brush** – Adjustable stroke width and intensity for creative control

## 🎨 How It Works

The application uses **GPU-accelerated shader programming** to create a mesmerizing fluid effect:

1. **Fluid Simulation** (`fluidFragmentShader`)
   - Tracks mouse movement and renders trails to a render target
   - Applies decay over time for a fading effect
   - Computes distance-based brush intensity for smooth strokes

2. **Display Rendering** (`displayFragmentShader`)
   - Samples the fluid map to generate a displacement value
   - Blends between two images using the fluid as a mix factor
   - Handles aspect ratio correction with `getCoverUV` function

3. **Ping-Pong Rendering**
   - Alternates between two render targets to maintain history
   - Previous frame's state feeds into the current simulation
   - Enables temporal effects like trails and decay

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Interactive-landingPage-withShader

# Install dependencies
npm install
```

### Development

```bash
# Start the Vite dev server
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (Vite will display the exact URL).

### Production Build

```bash
npm run build
```

## 🎮 Usage

1. **Move Your Mouse** over the canvas to paint with fluid
2. **Touch Support** – Works seamlessly on mobile devices
3. **Interactive Blending** – Watch the two background images blend as you draw

### Customization

Edit the brush appearance in `script.js`:

```javascript
uLineWidth: { value: 0.02 },      // Smaller = thinner stroke
uBrushStrength: { value: 0.28 },  // 0.0–1.0 intensity scale
```

Adjust the decay rate for longer/shorter trails:

```javascript
uDecay: { value: 0.97 },  // Higher = longer persistence
```

## 📁 Project Structure

```
Interactive-landingPage-withShader/
├── index.html              # Entry point
├── script.js               # Main application logic
├── shaders.js              # GLSL vertex and fragment shaders
├── style.css               # Styling and layout
├── package.json            # Dependencies and scripts
├── public/
│   └── assests/
│       └── images/
│           ├── sci-fi-person.jpeg
│           └── sci-fi-2.png
└── README.md              # This file
```

## 🔧 Technology Stack

| Technology | Purpose |
|------------|---------|
| **Three.js** | 3D graphics library and WebGL abstraction |
| **WebGL 2.0** | GPU shader execution and render targets |
| **Vite** | Fast build tool and dev server |
| **GLSL** | Vertex and fragment shader programming |
| **Canvas API** | Image loading and texture creation |

## 🎯 Core Components

### `script.js`
- Initializes Three.js renderer and scene
- Manages shader materials (`trailMaterial`, `displayMaterial`)
- Handles mouse and touch events
- Implements animation loop with ping-pong rendering
- Loads and processes images asynchronously

### `shaders.js`
- **Vertex Shader** – Passes UV coordinates to fragment shader
- **Fluid Fragment Shader** – Simulates brush trails with decay
- **Display Fragment Shader** – Blends images using fluid as mask

### `style.css`
- Canvas fullscreen layout
- Navigation and footer styling
- Responsive typography and spacing

## 🔨 Key Functions

### `createPlaceholderTexture(width, height, color)`
Creates a solid-color placeholder texture before real images load.

### `loadImage(url, targetTexture, textureSizeVector)`
Asynchronously loads an image, resizes it if necessary (max 4096px), and updates the display material.

### `onMouseMove(event)` & `onTouchMove(event)`
Track pointer position and update the simulation uniforms.

### `animate()`
Main render loop:
1. Update simulation uniforms from pointer state
2. Render fluid simulation to ping-pong target
3. Render final scene with blended images

## 📊 Performance Tips

- **Simulation Size** – Currently 500×500. Reduce for better performance on low-end devices.
- **Decay Value** – Higher decay (~0.99) preserves trails longer but uses more GPU memory.
- **Image Resolution** – Auto-scales to 4096px max; ensure source images are reasonably sized.
- **Browser Support** – Works on all modern browsers with WebGL 2.0 support.

## 🐛 Troubleshooting

### Images Not Showing
- Verify images exist in `public/assests/images/`
- Check browser console for 404 errors
- Ensure Vite is serving the `public` folder correctly

### Rendering Issues
- Update GPU drivers (especially Intel/AMD)
- Test on a different browser (Chrome, Firefox, Safari)
- Check that WebGL is enabled in browser settings

### Performance Slow
- Reduce `uLineWidth` for faster rendering
- Decrease simulation resolution (`size` variable in `script.js`)
- Close other tabs to free GPU memory

## 📝 License

This project is open source. Feel free to use it as a template or reference.

## 🤝 Contributing

Improvements and enhancements are welcome! Consider:

- Particle effects on brush strokes
- Color channels for multi-channel fluid
- Preset brush shapes and patterns
- Undo/redo functionality
- Screenshot/save canvas

## 🎓 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Shader Art](https://www.shadertoy.com/)
- [Fluid Simulation Articles](https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods)

---

**Made with ❤️ and GPU acceleration.**
