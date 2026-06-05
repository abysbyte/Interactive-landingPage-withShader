(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function i1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sp={exports:{}},fu={},op={exports:{}},Dt={};var Ev;function r1(){if(Ev)return Dt;Ev=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(F,se,Me){this.props=F,this.context=se,this.refs=E,this.updater=Me||v}x.prototype.isReactComponent={},x.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=x.prototype;function b(F,se,Me){this.props=F,this.context=se,this.refs=E,this.updater=Me||v}var P=b.prototype=new S;P.constructor=b,M(P,x.prototype),P.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,U={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function z(F,se,Me){var Ce,ke={},ee=null,ue=null;if(se!=null)for(Ce in se.ref!==void 0&&(ue=se.ref),se.key!==void 0&&(ee=""+se.key),se)N.call(se,Ce)&&!L.hasOwnProperty(Ce)&&(ke[Ce]=se[Ce]);var _e=arguments.length-2;if(_e===1)ke.children=Me;else if(1<_e){for(var Ue=Array(_e),Oe=0;Oe<_e;Oe++)Ue[Oe]=arguments[Oe+2];ke.children=Ue}if(F&&F.defaultProps)for(Ce in _e=F.defaultProps,_e)ke[Ce]===void 0&&(ke[Ce]=_e[Ce]);return{$$typeof:o,type:F,key:ee,ref:ue,props:ke,_owner:U.current}}function T(F,se){return{$$typeof:o,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function V(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Me){return se[Me]})}var j=/\/+/g;function Q(F,se){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):se.toString(36)}function ne(F,se,Me,Ce,ke){var ee=typeof F;(ee==="undefined"||ee==="boolean")&&(F=null);var ue=!1;if(F===null)ue=!0;else switch(ee){case"string":case"number":ue=!0;break;case"object":switch(F.$$typeof){case o:case e:ue=!0}}if(ue)return ue=F,ke=ke(ue),F=Ce===""?"."+Q(ue,0):Ce,A(ke)?(Me="",F!=null&&(Me=F.replace(j,"$&/")+"/"),ne(ke,se,Me,"",function(Oe){return Oe})):ke!=null&&(C(ke)&&(ke=T(ke,Me+(!ke.key||ue&&ue.key===ke.key?"":(""+ke.key).replace(j,"$&/")+"/")+F)),se.push(ke)),1;if(ue=0,Ce=Ce===""?".":Ce+":",A(F))for(var _e=0;_e<F.length;_e++){ee=F[_e];var Ue=Ce+Q(ee,_e);ue+=ne(ee,se,Me,Ue,ke)}else if(Ue=_(F),typeof Ue=="function")for(F=Ue.call(F),_e=0;!(ee=F.next()).done;)ee=ee.value,Ue=Ce+Q(ee,_e++),ue+=ne(ee,se,Me,Ue,ke);else if(ee==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ue}function J(F,se,Me){if(F==null)return F;var Ce=[],ke=0;return ne(F,Ce,"","",function(ee){return se.call(Me,ee,ke++)}),Ce}function $(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(Me){(F._status===0||F._status===-1)&&(F._status=1,F._result=Me)},function(Me){(F._status===0||F._status===-1)&&(F._status=2,F._result=Me)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var X={current:null},H={transition:null},re={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function I(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:J,forEach:function(F,se,Me){J(F,function(){se.apply(this,arguments)},Me)},count:function(F){var se=0;return J(F,function(){se++}),se},toArray:function(F){return J(F,function(se){return se})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Dt.Component=x,Dt.Fragment=t,Dt.Profiler=r,Dt.PureComponent=b,Dt.StrictMode=n,Dt.Suspense=d,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Dt.act=I,Dt.cloneElement=function(F,se,Me){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ce=M({},F.props),ke=F.key,ee=F.ref,ue=F._owner;if(se!=null){if(se.ref!==void 0&&(ee=se.ref,ue=U.current),se.key!==void 0&&(ke=""+se.key),F.type&&F.type.defaultProps)var _e=F.type.defaultProps;for(Ue in se)N.call(se,Ue)&&!L.hasOwnProperty(Ue)&&(Ce[Ue]=se[Ue]===void 0&&_e!==void 0?_e[Ue]:se[Ue])}var Ue=arguments.length-2;if(Ue===1)Ce.children=Me;else if(1<Ue){_e=Array(Ue);for(var Oe=0;Oe<Ue;Oe++)_e[Oe]=arguments[Oe+2];Ce.children=_e}return{$$typeof:o,type:F.type,key:ke,ref:ee,props:Ce,_owner:ue}},Dt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Dt.createElement=z,Dt.createFactory=function(F){var se=z.bind(null,F);return se.type=F,se},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(F){return{$$typeof:c,render:F}},Dt.isValidElement=C,Dt.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:$}},Dt.memo=function(F,se){return{$$typeof:h,type:F,compare:se===void 0?null:se}},Dt.startTransition=function(F){var se=H.transition;H.transition={};try{F()}finally{H.transition=se}},Dt.unstable_act=I,Dt.useCallback=function(F,se){return X.current.useCallback(F,se)},Dt.useContext=function(F){return X.current.useContext(F)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(F){return X.current.useDeferredValue(F)},Dt.useEffect=function(F,se){return X.current.useEffect(F,se)},Dt.useId=function(){return X.current.useId()},Dt.useImperativeHandle=function(F,se,Me){return X.current.useImperativeHandle(F,se,Me)},Dt.useInsertionEffect=function(F,se){return X.current.useInsertionEffect(F,se)},Dt.useLayoutEffect=function(F,se){return X.current.useLayoutEffect(F,se)},Dt.useMemo=function(F,se){return X.current.useMemo(F,se)},Dt.useReducer=function(F,se,Me){return X.current.useReducer(F,se,Me)},Dt.useRef=function(F){return X.current.useRef(F)},Dt.useState=function(F){return X.current.useState(F)},Dt.useSyncExternalStore=function(F,se,Me){return X.current.useSyncExternalStore(F,se,Me)},Dt.useTransition=function(){return X.current.useTransition()},Dt.version="18.3.1",Dt}var Mv;function xg(){return Mv||(Mv=1,op.exports=r1()),op.exports}var Tv;function s1(){if(Tv)return fu;Tv=1;var o=xg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,m={},_=null,v=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(v=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(m[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:v,props:m,_owner:r.current}}return fu.Fragment=t,fu.jsx=u,fu.jsxs=u,fu}var wv;function o1(){return wv||(wv=1,sp.exports=s1()),sp.exports}var k=o1(),Ft=xg();const a1=i1(Ft);var cf={},ap={exports:{}},Oi={},lp={exports:{}},up={};var Av;function l1(){return Av||(Av=1,(function(o){function e(H,re){var I=H.length;H.push(re);e:for(;0<I;){var F=I-1>>>1,se=H[F];if(0<r(se,re))H[F]=re,H[I]=se,I=F;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var re=H[0],I=H.pop();if(I!==re){H[0]=I;e:for(var F=0,se=H.length,Me=se>>>1;F<Me;){var Ce=2*(F+1)-1,ke=H[Ce],ee=Ce+1,ue=H[ee];if(0>r(ke,I))ee<se&&0>r(ue,ke)?(H[F]=ue,H[ee]=I,F=ee):(H[F]=ke,H[Ce]=I,F=Ce);else if(ee<se&&0>r(ue,I))H[F]=ue,H[ee]=I,F=ee;else break e}}return re}function r(H,re){var I=H.sortIndex-re.sortIndex;return I!==0?I:H.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,m=null,_=3,v=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var re=t(h);re!==null;){if(re.callback===null)n(h);else if(re.startTime<=H)n(h),re.sortIndex=re.expirationTime,e(d,re);else break;re=t(h)}}function A(H){if(E=!1,P(H),!M)if(t(d)!==null)M=!0,$(N);else{var re=t(h);re!==null&&X(A,re.startTime-H)}}function N(H,re){M=!1,E&&(E=!1,S(z),z=-1),v=!0;var I=_;try{for(P(re),m=t(d);m!==null&&(!(m.expirationTime>re)||H&&!V());){var F=m.callback;if(typeof F=="function"){m.callback=null,_=m.priorityLevel;var se=F(m.expirationTime<=re);re=o.unstable_now(),typeof se=="function"?m.callback=se:m===t(d)&&n(d),P(re)}else n(d);m=t(d)}if(m!==null)var Me=!0;else{var Ce=t(h);Ce!==null&&X(A,Ce.startTime-re),Me=!1}return Me}finally{m=null,_=I,v=!1}}var U=!1,L=null,z=-1,T=5,C=-1;function V(){return!(o.unstable_now()-C<T)}function j(){if(L!==null){var H=o.unstable_now();C=H;var re=!0;try{re=L(!0,H)}finally{re?Q():(U=!1,L=null)}}else U=!1}var Q;if(typeof b=="function")Q=function(){b(j)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,J=ne.port2;ne.port1.onmessage=j,Q=function(){J.postMessage(null)}}else Q=function(){x(j,0)};function $(H){L=H,U||(U=!0,Q())}function X(H,re){z=x(function(){H(o.unstable_now())},re)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){M||v||(M=!0,$(N))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(H){switch(_){case 1:case 2:case 3:var re=3;break;default:re=_}var I=_;_=re;try{return H()}finally{_=I}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,re){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var I=_;_=H;try{return re()}finally{_=I}},o.unstable_scheduleCallback=function(H,re,I){var F=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?F+I:F):I=F,H){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=I+se,H={id:p++,callback:re,priorityLevel:H,startTime:I,expirationTime:se,sortIndex:-1},I>F?(H.sortIndex=I,e(h,H),t(d)===null&&H===t(h)&&(E?(S(z),z=-1):E=!0,X(A,I-F))):(H.sortIndex=se,e(d,H),M||v||(M=!0,$(N))),H},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(H){var re=_;return function(){var I=_;_=re;try{return H.apply(this,arguments)}finally{_=I}}}})(up)),up}var Cv;function u1(){return Cv||(Cv=1,lp.exports=l1()),lp.exports}var Rv;function c1(){if(Rv)return Oi;Rv=1;var o=xg(),e=u1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function _(i){return d.call(m,i)?!0:d.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function v(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||v(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,l,f,g,y,R){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=y,this.removeEmptyString=R}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,b);x[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,b);x[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,b);x[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,f){var g=x.hasOwnProperty(s)?x[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,f)&&(l=null),f||g===null?_(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,f=g.attributeNamespace,l===null?i.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),H=Symbol.iterator;function re(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var I=Object.assign,F;function se(i){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var Me=!1;function Ce(i,s){if(!i||Me)return"";Me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var f=fe}Reflect.construct(i,[],s)}else{try{s.call()}catch(fe){f=fe}i.call(s.prototype)}else{try{throw Error()}catch(fe){f=fe}i()}}catch(fe){if(fe&&f&&typeof fe.stack=="string"){for(var g=fe.stack.split(`
`),y=f.stack.split(`
`),R=g.length-1,B=y.length-1;1<=R&&0<=B&&g[R]!==y[B];)B--;for(;1<=R&&0<=B;R--,B--)if(g[R]!==y[B]){if(R!==1||B!==1)do if(R--,B--,0>B||g[R]!==y[B]){var Y=`
`+g[R].replace(" at new "," at ");return i.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",i.displayName)),Y}while(1<=R&&0<=B);break}}}finally{Me=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?se(i):""}function ke(i){switch(i.tag){case 5:return se(i.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case L:return"Fragment";case U:return"Portal";case T:return"Profiler";case z:return"StrictMode";case Q:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case j:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return s=i.displayName||null,s!==null?s:ee(i.type)||"Memo";case $:s=i._payload,i=i._init;try{return ee(i(s))}catch{}}return null}function ue(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(s);case 8:return s===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Oe(i){var s=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,y=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(R){f=""+R,y.call(this,R)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(R){f=""+R},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function ft(i){i._valueTracker||(i._valueTracker=Oe(i))}function Ut(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Ue(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function Xe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function lt(i,s){var l=s.checked;return I({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function St(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=_e(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ot(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function oe(i,s){ot(i,s);var l=_e(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Vt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Vt(i,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function W(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Vt(i,s,l){(s!=="number"||Xe(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var yt=Array.isArray;function at(i,s,l,f){if(i=i.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=s.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&f&&(i[l].defaultSelected=!0)}else{for(l=""+_e(l),s=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function We(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function O(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(yt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:_e(l)}}function w(i,s){var l=_e(s.value),f=_e(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function q(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Ge=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function we(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(i){qe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),je[s]=je[i]})});function Ee(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||je.hasOwnProperty(i)&&je[i]?(""+s).trim():s+"px"}function Re(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=Ee(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,g):i[l]=g}}var Ye=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(i,s){if(s){if(Ye[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ae(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ie=null,xe=null,Le=null;function ve(i){if(i=Kl(i)){if(typeof Ie!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Tc(s),Ie(i.stateNode,i.type,s))}}function ge(i){xe?Le?Le.push(i):Le=[i]:xe=i}function Pe(){if(xe){var i=xe,s=Le;if(Le=xe=null,ve(i),s)for(i=0;i<s.length;i++)ve(s[i])}}function st(i,s){return i(s)}function kt(){}var ze=!1;function tt(i,s,l){if(ze)return i(s,l);ze=!0;try{return st(i,s,l)}finally{ze=!1,(xe!==null||Le!==null)&&(kt(),Pe())}}function vt(i,s){var l=i.stateNode;if(l===null)return null;var f=Tc(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Fe=!1;if(c)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{Fe=!1}function rt(i,s,l,f,g,y,R,B,Y){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(l,fe)}catch(ye){this.onError(ye)}}var gt=!1,cn=null,Tt=!1,Ht=null,Mn={onError:function(i){gt=!0,cn=i}};function on(i,s,l,f,g,y,R,B,Y){gt=!1,cn=null,rt.apply(Mn,arguments)}function en(i,s,l,f,g,y,R,B,Y){if(on.apply(this,arguments),gt){if(gt){var fe=cn;gt=!1,cn=null}else throw Error(t(198));Tt||(Tt=!0,Ht=fe)}}function At(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ti(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Kt(i){if(At(i)!==i)throw Error(t(188))}function Xn(i){var s=i.alternate;if(!s){if(s=At(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var g=l.return;if(g===null)break;var y=g.alternate;if(y===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===l)return Kt(g),i;if(y===f)return Kt(g),s;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=y;else{for(var R=!1,B=g.child;B;){if(B===l){R=!0,l=g,f=y;break}if(B===f){R=!0,f=g,l=y;break}B=B.sibling}if(!R){for(B=y.child;B;){if(B===l){R=!0,l=y,f=g;break}if(B===f){R=!0,f=y,l=g;break}B=B.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function li(i){return i=Xn(i),i!==null?Tn(i):null}function Tn(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Tn(i);if(s!==null)return s;i=i.sibling}return null}var wn=e.unstable_scheduleCallback,Rn=e.unstable_cancelCallback,Nr=e.unstable_shouldYield,Bs=e.unstable_requestPaint,Ct=e.unstable_now,D=e.unstable_getCurrentPriorityLevel,Z=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,le=e.unstable_NormalPriority,te=e.unstable_LowPriority,be=e.unstable_IdlePriority,Be=null,Ne=null;function He(i){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(Be,i,void 0,(i.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Rt,_t=Math.log,ut=Math.LN2;function Rt(i){return i>>>=0,i===0?32:31-(_t(i)/ut|0)|0}var Wt=64,an=4194304;function rn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Yt(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,g=i.suspendedLanes,y=i.pingedLanes,R=l&268435455;if(R!==0){var B=R&~g;B!==0?f=rn(B):(y&=R,y!==0&&(f=rn(y)))}else R=l&~g,R!==0?f=rn(R):y!==0&&(f=rn(y));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,y=s&-s,g>=y||g===16&&(y&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-Ze(s),g=1<<l,f|=i[l],s&=~g;return f}function ct(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zt(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,y=i.pendingLanes;0<y;){var R=31-Ze(y),B=1<<R,Y=g[R];Y===-1?((B&l)===0||(B&f)!==0)&&(g[R]=ct(B,s)):Y<=s&&(i.expiredLanes|=B),y&=~B}}function Ot(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ui(){var i=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),i}function Xr(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function kn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ze(s),i[s]=l}function Po(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-Ze(l),y=1<<g;s[g]=0,f[g]=-1,i[g]=-1,l&=~y}}function Qt(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-Ze(l),g=1<<f;g&s|i[f]&s&&(i[f]|=s),l&=~g}}var Et=0;function yi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var jn,Yn,xa,jr,r0,Pd=!1,uc=[],zs=null,Vs=null,Gs=null,Il=new Map,Ul=new Map,Hs=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s0(i,s){switch(i){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Vs=null;break;case"mouseover":case"mouseout":Gs=null;break;case"pointerover":case"pointerout":Il.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(s.pointerId)}}function Ol(i,s,l,f,g,y){return i===null||i.nativeEvent!==y?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[g]},s!==null&&(s=Kl(s),s!==null&&Yn(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function AE(i,s,l,f,g){switch(s){case"focusin":return zs=Ol(zs,i,s,l,f,g),!0;case"dragenter":return Vs=Ol(Vs,i,s,l,f,g),!0;case"mouseover":return Gs=Ol(Gs,i,s,l,f,g),!0;case"pointerover":var y=g.pointerId;return Il.set(y,Ol(Il.get(y)||null,i,s,l,f,g)),!0;case"gotpointercapture":return y=g.pointerId,Ul.set(y,Ol(Ul.get(y)||null,i,s,l,f,g)),!0}return!1}function o0(i){var s=No(i.target);if(s!==null){var l=At(s);if(l!==null){if(s=l.tag,s===13){if(s=ti(l),s!==null){i.blockedOn=s,r0(i.priority,function(){xa(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function cc(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Dd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);mt=f,l.target.dispatchEvent(f),mt=null}else return s=Kl(l),s!==null&&Yn(s),i.blockedOn=l,!1;s.shift()}return!0}function a0(i,s,l){cc(i)&&l.delete(s)}function CE(){Pd=!1,zs!==null&&cc(zs)&&(zs=null),Vs!==null&&cc(Vs)&&(Vs=null),Gs!==null&&cc(Gs)&&(Gs=null),Il.forEach(a0),Ul.forEach(a0)}function Fl(i,s){i.blockedOn===s&&(i.blockedOn=null,Pd||(Pd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,CE)))}function kl(i){function s(g){return Fl(g,i)}if(0<uc.length){Fl(uc[0],i);for(var l=1;l<uc.length;l++){var f=uc[l];f.blockedOn===i&&(f.blockedOn=null)}}for(zs!==null&&Fl(zs,i),Vs!==null&&Fl(Vs,i),Gs!==null&&Fl(Gs,i),Il.forEach(s),Ul.forEach(s),l=0;l<Hs.length;l++)f=Hs[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Hs.length&&(l=Hs[0],l.blockedOn===null);)o0(l),l.blockedOn===null&&Hs.shift()}var Sa=A.ReactCurrentBatchConfig,fc=!0;function RE(i,s,l,f){var g=Et,y=Sa.transition;Sa.transition=null;try{Et=1,Nd(i,s,l,f)}finally{Et=g,Sa.transition=y}}function bE(i,s,l,f){var g=Et,y=Sa.transition;Sa.transition=null;try{Et=4,Nd(i,s,l,f)}finally{Et=g,Sa.transition=y}}function Nd(i,s,l,f){if(fc){var g=Dd(i,s,l,f);if(g===null)$d(i,s,f,dc,l),s0(i,f);else if(AE(g,i,s,l,f))f.stopPropagation();else if(s0(i,f),s&4&&-1<wE.indexOf(i)){for(;g!==null;){var y=Kl(g);if(y!==null&&jn(y),y=Dd(i,s,l,f),y===null&&$d(i,s,f,dc,l),y===g)break;g=y}g!==null&&f.stopPropagation()}else $d(i,s,f,null,l)}}var dc=null;function Dd(i,s,l,f){if(dc=null,i=G(f),i=No(i),i!==null)if(s=At(i),s===null)i=null;else if(l=s.tag,l===13){if(i=ti(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return dc=i,null}function l0(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D()){case Z:return 1;case ce:return 4;case le:case te:return 16;case be:return 536870912;default:return 16}default:return 16}}var Ws=null,Ld=null,hc=null;function u0(){if(hc)return hc;var i,s=Ld,l=s.length,f,g="value"in Ws?Ws.value:Ws.textContent,y=g.length;for(i=0;i<l&&s[i]===g[i];i++);var R=l-i;for(f=1;f<=R&&s[l-f]===g[y-f];f++);return hc=g.slice(i,1<f?1-f:void 0)}function pc(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function mc(){return!0}function c0(){return!1}function ji(i){function s(l,f,g,y,R){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=y,this.target=R,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(y):y[B]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?mc:c0,this.isPropagationStopped=c0,this}return I(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=mc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=mc)},persist:function(){},isPersistent:mc}),s}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=ji(ya),Bl=I({},ya,{view:0,detail:0}),PE=ji(Bl),Ud,Od,zl,gc=I({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==zl&&(zl&&i.type==="mousemove"?(Ud=i.screenX-zl.screenX,Od=i.screenY-zl.screenY):Od=Ud=0,zl=i),Ud)},movementY:function(i){return"movementY"in i?i.movementY:Od}}),f0=ji(gc),NE=I({},gc,{dataTransfer:0}),DE=ji(NE),LE=I({},Bl,{relatedTarget:0}),Fd=ji(LE),IE=I({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),UE=ji(IE),OE=I({},ya,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),FE=ji(OE),kE=I({},ya,{data:0}),d0=ji(kE),BE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GE(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=VE[i])?!!s[i]:!1}function kd(){return GE}var HE=I({},Bl,{key:function(i){if(i.key){var s=BE[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=pc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?zE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(i){return i.type==="keypress"?pc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),WE=ji(HE),XE=I({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h0=ji(XE),jE=I({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),YE=ji(jE),qE=I({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),$E=ji(qE),KE=I({},gc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=ji(KE),QE=[9,13,27,32],Bd=c&&"CompositionEvent"in window,Vl=null;c&&"documentMode"in document&&(Vl=document.documentMode);var JE=c&&"TextEvent"in window&&!Vl,p0=c&&(!Bd||Vl&&8<Vl&&11>=Vl),m0=" ",g0=!1;function _0(i,s){switch(i){case"keyup":return QE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ea=!1;function eM(i,s){switch(i){case"compositionend":return v0(s);case"keypress":return s.which!==32?null:(g0=!0,m0);case"textInput":return i=s.data,i===m0&&g0?null:i;default:return null}}function tM(i,s){if(Ea)return i==="compositionend"||!Bd&&_0(i,s)?(i=u0(),hc=Ld=Ws=null,Ea=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return p0&&s.locale!=="ko"?null:s.data;default:return null}}var nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x0(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!nM[i.type]:s==="textarea"}function S0(i,s,l,f){ge(f),s=yc(s,"onChange"),0<s.length&&(l=new Id("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Gl=null,Hl=null;function iM(i){k0(i,0)}function _c(i){var s=Ca(i);if(Ut(s))return i}function rM(i,s){if(i==="change")return s}var y0=!1;if(c){var zd;if(c){var Vd="oninput"in document;if(!Vd){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),Vd=typeof E0.oninput=="function"}zd=Vd}else zd=!1;y0=zd&&(!document.documentMode||9<document.documentMode)}function M0(){Gl&&(Gl.detachEvent("onpropertychange",T0),Hl=Gl=null)}function T0(i){if(i.propertyName==="value"&&_c(Hl)){var s=[];S0(s,Hl,i,G(i)),tt(iM,s)}}function sM(i,s,l){i==="focusin"?(M0(),Gl=s,Hl=l,Gl.attachEvent("onpropertychange",T0)):i==="focusout"&&M0()}function oM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return _c(Hl)}function aM(i,s){if(i==="click")return _c(s)}function lM(i,s){if(i==="input"||i==="change")return _c(s)}function uM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Dr=typeof Object.is=="function"?Object.is:uM;function Wl(i,s){if(Dr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!d.call(s,g)||!Dr(i[g],s[g]))return!1}return!0}function w0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function A0(i,s){var l=w0(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=w0(l)}}function C0(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?C0(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function R0(){for(var i=window,s=Xe();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Xe(i.document)}return s}function Gd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function cM(i){var s=R0(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&C0(l.ownerDocument.documentElement,l)){if(f!==null&&Gd(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,y=Math.min(f.start,g);f=f.end===void 0?y:Math.min(f.end,g),!i.extend&&y>f&&(g=f,f=y,y=g),g=A0(l,y);var R=A0(l,f);g&&R&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),y>f?(i.addRange(s),i.extend(R.node,R.offset)):(s.setEnd(R.node,R.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var fM=c&&"documentMode"in document&&11>=document.documentMode,Ma=null,Hd=null,Xl=null,Wd=!1;function b0(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wd||Ma==null||Ma!==Xe(f)||(f=Ma,"selectionStart"in f&&Gd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Xl&&Wl(Xl,f)||(Xl=f,f=yc(Hd,"onSelect"),0<f.length&&(s=new Id("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ma)))}function vc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Ta={animationend:vc("Animation","AnimationEnd"),animationiteration:vc("Animation","AnimationIteration"),animationstart:vc("Animation","AnimationStart"),transitionend:vc("Transition","TransitionEnd")},Xd={},P0={};c&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function xc(i){if(Xd[i])return Xd[i];if(!Ta[i])return i;var s=Ta[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in P0)return Xd[i]=s[l];return i}var N0=xc("animationend"),D0=xc("animationiteration"),L0=xc("animationstart"),I0=xc("transitionend"),U0=new Map,O0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xs(i,s){U0.set(i,s),a(s,[i])}for(var jd=0;jd<O0.length;jd++){var Yd=O0[jd],dM=Yd.toLowerCase(),hM=Yd[0].toUpperCase()+Yd.slice(1);Xs(dM,"on"+hM)}Xs(N0,"onAnimationEnd"),Xs(D0,"onAnimationIteration"),Xs(L0,"onAnimationStart"),Xs("dblclick","onDoubleClick"),Xs("focusin","onFocus"),Xs("focusout","onBlur"),Xs(I0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pM=new Set("cancel close invalid load scroll toggle".split(" ").concat(jl));function F0(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,en(f,s,void 0,i),i.currentTarget=null}function k0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],g=f.event;f=f.listeners;e:{var y=void 0;if(s)for(var R=f.length-1;0<=R;R--){var B=f[R],Y=B.instance,fe=B.currentTarget;if(B=B.listener,Y!==y&&g.isPropagationStopped())break e;F0(g,B,fe),y=Y}else for(R=0;R<f.length;R++){if(B=f[R],Y=B.instance,fe=B.currentTarget,B=B.listener,Y!==y&&g.isPropagationStopped())break e;F0(g,B,fe),y=Y}}}if(Tt)throw i=Ht,Tt=!1,Ht=null,i}function hn(i,s){var l=s[th];l===void 0&&(l=s[th]=new Set);var f=i+"__bubble";l.has(f)||(B0(s,i,2,!1),l.add(f))}function qd(i,s,l){var f=0;s&&(f|=4),B0(l,i,f,s)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Yl(i){if(!i[Sc]){i[Sc]=!0,n.forEach(function(l){l!=="selectionchange"&&(pM.has(l)||qd(l,!1,i),qd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Sc]||(s[Sc]=!0,qd("selectionchange",!1,s))}}function B0(i,s,l,f){switch(l0(s)){case 1:var g=RE;break;case 4:g=bE;break;default:g=Nd}l=g.bind(null,s,l,i),g=void 0,!Fe||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,l,{capture:!0,passive:g}):i.addEventListener(s,l,!0):g!==void 0?i.addEventListener(s,l,{passive:g}):i.addEventListener(s,l,!1)}function $d(i,s,l,f,g){var y=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var R=f.tag;if(R===3||R===4){var B=f.stateNode.containerInfo;if(B===g||B.nodeType===8&&B.parentNode===g)break;if(R===4)for(R=f.return;R!==null;){var Y=R.tag;if((Y===3||Y===4)&&(Y=R.stateNode.containerInfo,Y===g||Y.nodeType===8&&Y.parentNode===g))return;R=R.return}for(;B!==null;){if(R=No(B),R===null)return;if(Y=R.tag,Y===5||Y===6){f=y=R;continue e}B=B.parentNode}}f=f.return}tt(function(){var fe=y,ye=G(l),Te=[];e:{var Se=U0.get(i);if(Se!==void 0){var Ke=Id,et=i;switch(i){case"keypress":if(pc(l)===0)break e;case"keydown":case"keyup":Ke=WE;break;case"focusin":et="focus",Ke=Fd;break;case"focusout":et="blur",Ke=Fd;break;case"beforeblur":case"afterblur":Ke=Fd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=f0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=DE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=YE;break;case N0:case D0:case L0:Ke=UE;break;case I0:Ke=$E;break;case"scroll":Ke=PE;break;case"wheel":Ke=ZE;break;case"copy":case"cut":case"paste":Ke=FE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=h0}var nt=(s&4)!==0,bn=!nt&&i==="scroll",ie=nt?Se!==null?Se+"Capture":null:Se;nt=[];for(var K=fe,ae;K!==null;){ae=K;var De=ae.stateNode;if(ae.tag===5&&De!==null&&(ae=De,ie!==null&&(De=vt(K,ie),De!=null&&nt.push(ql(K,De,ae)))),bn)break;K=K.return}0<nt.length&&(Se=new Ke(Se,et,null,l,ye),Te.push({event:Se,listeners:nt}))}}if((s&7)===0){e:{if(Se=i==="mouseover"||i==="pointerover",Ke=i==="mouseout"||i==="pointerout",Se&&l!==mt&&(et=l.relatedTarget||l.fromElement)&&(No(et)||et[cs]))break e;if((Ke||Se)&&(Se=ye.window===ye?ye:(Se=ye.ownerDocument)?Se.defaultView||Se.parentWindow:window,Ke?(et=l.relatedTarget||l.toElement,Ke=fe,et=et?No(et):null,et!==null&&(bn=At(et),et!==bn||et.tag!==5&&et.tag!==6)&&(et=null)):(Ke=null,et=fe),Ke!==et)){if(nt=f0,De="onMouseLeave",ie="onMouseEnter",K="mouse",(i==="pointerout"||i==="pointerover")&&(nt=h0,De="onPointerLeave",ie="onPointerEnter",K="pointer"),bn=Ke==null?Se:Ca(Ke),ae=et==null?Se:Ca(et),Se=new nt(De,K+"leave",Ke,l,ye),Se.target=bn,Se.relatedTarget=ae,De=null,No(ye)===fe&&(nt=new nt(ie,K+"enter",et,l,ye),nt.target=ae,nt.relatedTarget=bn,De=nt),bn=De,Ke&&et)t:{for(nt=Ke,ie=et,K=0,ae=nt;ae;ae=wa(ae))K++;for(ae=0,De=ie;De;De=wa(De))ae++;for(;0<K-ae;)nt=wa(nt),K--;for(;0<ae-K;)ie=wa(ie),ae--;for(;K--;){if(nt===ie||ie!==null&&nt===ie.alternate)break t;nt=wa(nt),ie=wa(ie)}nt=null}else nt=null;Ke!==null&&z0(Te,Se,Ke,nt,!1),et!==null&&bn!==null&&z0(Te,bn,et,nt,!0)}}e:{if(Se=fe?Ca(fe):window,Ke=Se.nodeName&&Se.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Se.type==="file")var it=rM;else if(x0(Se))if(y0)it=lM;else{it=oM;var ht=sM}else(Ke=Se.nodeName)&&Ke.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(it=aM);if(it&&(it=it(i,fe))){S0(Te,it,l,ye);break e}ht&&ht(i,Se,fe),i==="focusout"&&(ht=Se._wrapperState)&&ht.controlled&&Se.type==="number"&&Vt(Se,"number",Se.value)}switch(ht=fe?Ca(fe):window,i){case"focusin":(x0(ht)||ht.contentEditable==="true")&&(Ma=ht,Hd=fe,Xl=null);break;case"focusout":Xl=Hd=Ma=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,b0(Te,l,ye);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":b0(Te,l,ye)}var pt;if(Bd)e:{switch(i){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ea?_0(i,l)&&(xt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(p0&&l.locale!=="ko"&&(Ea||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ea&&(pt=u0()):(Ws=ye,Ld="value"in Ws?Ws.value:Ws.textContent,Ea=!0)),ht=yc(fe,xt),0<ht.length&&(xt=new d0(xt,i,null,l,ye),Te.push({event:xt,listeners:ht}),pt?xt.data=pt:(pt=v0(l),pt!==null&&(xt.data=pt)))),(pt=JE?eM(i,l):tM(i,l))&&(fe=yc(fe,"onBeforeInput"),0<fe.length&&(ye=new d0("onBeforeInput","beforeinput",null,l,ye),Te.push({event:ye,listeners:fe}),ye.data=pt))}k0(Te,s)})}function ql(i,s,l){return{instance:i,listener:s,currentTarget:l}}function yc(i,s){for(var l=s+"Capture",f=[];i!==null;){var g=i,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=vt(i,l),y!=null&&f.unshift(ql(i,y,g)),y=vt(i,s),y!=null&&f.push(ql(i,y,g))),i=i.return}return f}function wa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function z0(i,s,l,f,g){for(var y=s._reactName,R=[];l!==null&&l!==f;){var B=l,Y=B.alternate,fe=B.stateNode;if(Y!==null&&Y===f)break;B.tag===5&&fe!==null&&(B=fe,g?(Y=vt(l,y),Y!=null&&R.unshift(ql(l,Y,B))):g||(Y=vt(l,y),Y!=null&&R.push(ql(l,Y,B)))),l=l.return}R.length!==0&&i.push({event:s,listeners:R})}var mM=/\r\n?/g,gM=/\u0000|\uFFFD/g;function V0(i){return(typeof i=="string"?i:""+i).replace(mM,`
`).replace(gM,"")}function Ec(i,s,l){if(s=V0(s),V0(i)!==s&&l)throw Error(t(425))}function Mc(){}var Kd=null,Zd=null;function Qd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Jd=typeof setTimeout=="function"?setTimeout:void 0,_M=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,vM=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(i){return G0.resolve(null).then(i).catch(xM)}:Jd;function xM(i){setTimeout(function(){throw i})}function eh(i,s){var l=s,f=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){i.removeChild(g),kl(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);kl(s)}function js(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function H0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Aa=Math.random().toString(36).slice(2),Yr="__reactFiber$"+Aa,$l="__reactProps$"+Aa,cs="__reactContainer$"+Aa,th="__reactEvents$"+Aa,SM="__reactListeners$"+Aa,yM="__reactHandles$"+Aa;function No(i){var s=i[Yr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[cs]||l[Yr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=H0(i);i!==null;){if(l=i[Yr])return l;i=H0(i)}return s}i=l,l=i.parentNode}return null}function Kl(i){return i=i[Yr]||i[cs],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ca(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Tc(i){return i[$l]||null}var nh=[],Ra=-1;function Ys(i){return{current:i}}function pn(i){0>Ra||(i.current=nh[Ra],nh[Ra]=null,Ra--)}function fn(i,s){Ra++,nh[Ra]=i.current,i.current=s}var qs={},ci=Ys(qs),Ni=Ys(!1),Do=qs;function ba(i,s){var l=i.type.contextTypes;if(!l)return qs;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in l)g[y]=s[y];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Di(i){return i=i.childContextTypes,i!=null}function wc(){pn(Ni),pn(ci)}function W0(i,s,l){if(ci.current!==qs)throw Error(t(168));fn(ci,s),fn(Ni,l)}function X0(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,ue(i)||"Unknown",g));return I({},l,f)}function Ac(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||qs,Do=ci.current,fn(ci,i),fn(Ni,Ni.current),!0}function j0(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=X0(i,s,Do),f.__reactInternalMemoizedMergedChildContext=i,pn(Ni),pn(ci),fn(ci,i)):pn(Ni),fn(Ni,l)}var fs=null,Cc=!1,ih=!1;function Y0(i){fs===null?fs=[i]:fs.push(i)}function EM(i){Cc=!0,Y0(i)}function $s(){if(!ih&&fs!==null){ih=!0;var i=0,s=Et;try{var l=fs;for(Et=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}fs=null,Cc=!1}catch(g){throw fs!==null&&(fs=fs.slice(i+1)),wn(Z,$s),g}finally{Et=s,ih=!1}}return null}var Pa=[],Na=0,Rc=null,bc=0,hr=[],pr=0,Lo=null,ds=1,hs="";function Io(i,s){Pa[Na++]=bc,Pa[Na++]=Rc,Rc=i,bc=s}function q0(i,s,l){hr[pr++]=ds,hr[pr++]=hs,hr[pr++]=Lo,Lo=i;var f=ds;i=hs;var g=32-Ze(f)-1;f&=~(1<<g),l+=1;var y=32-Ze(s)+g;if(30<y){var R=g-g%5;y=(f&(1<<R)-1).toString(32),f>>=R,g-=R,ds=1<<32-Ze(s)+g|l<<g|f,hs=y+i}else ds=1<<y|l<<g|f,hs=i}function rh(i){i.return!==null&&(Io(i,1),q0(i,1,0))}function sh(i){for(;i===Rc;)Rc=Pa[--Na],Pa[Na]=null,bc=Pa[--Na],Pa[Na]=null;for(;i===Lo;)Lo=hr[--pr],hr[pr]=null,hs=hr[--pr],hr[pr]=null,ds=hr[--pr],hr[pr]=null}var Yi=null,qi=null,mn=!1,Lr=null;function $0(i,s){var l=vr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function K0(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Yi=i,qi=js(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Yi=i,qi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Lo!==null?{id:ds,overflow:hs}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=vr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Yi=i,qi=null,!0):!1;default:return!1}}function oh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ah(i){if(mn){var s=qi;if(s){var l=s;if(!K0(i,s)){if(oh(i))throw Error(t(418));s=js(l.nextSibling);var f=Yi;s&&K0(i,s)?$0(f,l):(i.flags=i.flags&-4097|2,mn=!1,Yi=i)}}else{if(oh(i))throw Error(t(418));i.flags=i.flags&-4097|2,mn=!1,Yi=i}}}function Z0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Yi=i}function Pc(i){if(i!==Yi)return!1;if(!mn)return Z0(i),mn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Qd(i.type,i.memoizedProps)),s&&(s=qi)){if(oh(i))throw Q0(),Error(t(418));for(;s;)$0(i,s),s=js(s.nextSibling)}if(Z0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){qi=js(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}qi=null}}else qi=Yi?js(i.stateNode.nextSibling):null;return!0}function Q0(){for(var i=qi;i;)i=js(i.nextSibling)}function Da(){qi=Yi=null,mn=!1}function lh(i){Lr===null?Lr=[i]:Lr.push(i)}var MM=A.ReactCurrentBatchConfig;function Zl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var g=f,y=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(R){var B=g.refs;R===null?delete B[y]:B[y]=R},s._stringRef=y,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Nc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function J0(i){var s=i._init;return s(i._payload)}function e_(i){function s(ie,K){if(i){var ae=ie.deletions;ae===null?(ie.deletions=[K],ie.flags|=16):ae.push(K)}}function l(ie,K){if(!i)return null;for(;K!==null;)s(ie,K),K=K.sibling;return null}function f(ie,K){for(ie=new Map;K!==null;)K.key!==null?ie.set(K.key,K):ie.set(K.index,K),K=K.sibling;return ie}function g(ie,K){return ie=io(ie,K),ie.index=0,ie.sibling=null,ie}function y(ie,K,ae){return ie.index=ae,i?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<K?(ie.flags|=2,K):ae):(ie.flags|=2,K)):(ie.flags|=1048576,K)}function R(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,K,ae,De){return K===null||K.tag!==6?(K=Jh(ae,ie.mode,De),K.return=ie,K):(K=g(K,ae),K.return=ie,K)}function Y(ie,K,ae,De){var it=ae.type;return it===L?ye(ie,K,ae.props.children,De,ae.key):K!==null&&(K.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&J0(it)===K.type)?(De=g(K,ae.props),De.ref=Zl(ie,K,ae),De.return=ie,De):(De=tf(ae.type,ae.key,ae.props,null,ie.mode,De),De.ref=Zl(ie,K,ae),De.return=ie,De)}function fe(ie,K,ae,De){return K===null||K.tag!==4||K.stateNode.containerInfo!==ae.containerInfo||K.stateNode.implementation!==ae.implementation?(K=ep(ae,ie.mode,De),K.return=ie,K):(K=g(K,ae.children||[]),K.return=ie,K)}function ye(ie,K,ae,De,it){return K===null||K.tag!==7?(K=Go(ae,ie.mode,De,it),K.return=ie,K):(K=g(K,ae),K.return=ie,K)}function Te(ie,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Jh(""+K,ie.mode,ae),K.return=ie,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return ae=tf(K.type,K.key,K.props,null,ie.mode,ae),ae.ref=Zl(ie,null,K),ae.return=ie,ae;case U:return K=ep(K,ie.mode,ae),K.return=ie,K;case $:var De=K._init;return Te(ie,De(K._payload),ae)}if(yt(K)||re(K))return K=Go(K,ie.mode,ae,null),K.return=ie,K;Nc(ie,K)}return null}function Se(ie,K,ae,De){var it=K!==null?K.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return it!==null?null:B(ie,K,""+ae,De);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case N:return ae.key===it?Y(ie,K,ae,De):null;case U:return ae.key===it?fe(ie,K,ae,De):null;case $:return it=ae._init,Se(ie,K,it(ae._payload),De)}if(yt(ae)||re(ae))return it!==null?null:ye(ie,K,ae,De,null);Nc(ie,ae)}return null}function Ke(ie,K,ae,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return ie=ie.get(ae)||null,B(K,ie,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case N:return ie=ie.get(De.key===null?ae:De.key)||null,Y(K,ie,De,it);case U:return ie=ie.get(De.key===null?ae:De.key)||null,fe(K,ie,De,it);case $:var ht=De._init;return Ke(ie,K,ae,ht(De._payload),it)}if(yt(De)||re(De))return ie=ie.get(ae)||null,ye(K,ie,De,it,null);Nc(K,De)}return null}function et(ie,K,ae,De){for(var it=null,ht=null,pt=K,xt=K=0,Kn=null;pt!==null&&xt<ae.length;xt++){pt.index>xt?(Kn=pt,pt=null):Kn=pt.sibling;var qt=Se(ie,pt,ae[xt],De);if(qt===null){pt===null&&(pt=Kn);break}i&&pt&&qt.alternate===null&&s(ie,pt),K=y(qt,K,xt),ht===null?it=qt:ht.sibling=qt,ht=qt,pt=Kn}if(xt===ae.length)return l(ie,pt),mn&&Io(ie,xt),it;if(pt===null){for(;xt<ae.length;xt++)pt=Te(ie,ae[xt],De),pt!==null&&(K=y(pt,K,xt),ht===null?it=pt:ht.sibling=pt,ht=pt);return mn&&Io(ie,xt),it}for(pt=f(ie,pt);xt<ae.length;xt++)Kn=Ke(pt,ie,xt,ae[xt],De),Kn!==null&&(i&&Kn.alternate!==null&&pt.delete(Kn.key===null?xt:Kn.key),K=y(Kn,K,xt),ht===null?it=Kn:ht.sibling=Kn,ht=Kn);return i&&pt.forEach(function(ro){return s(ie,ro)}),mn&&Io(ie,xt),it}function nt(ie,K,ae,De){var it=re(ae);if(typeof it!="function")throw Error(t(150));if(ae=it.call(ae),ae==null)throw Error(t(151));for(var ht=it=null,pt=K,xt=K=0,Kn=null,qt=ae.next();pt!==null&&!qt.done;xt++,qt=ae.next()){pt.index>xt?(Kn=pt,pt=null):Kn=pt.sibling;var ro=Se(ie,pt,qt.value,De);if(ro===null){pt===null&&(pt=Kn);break}i&&pt&&ro.alternate===null&&s(ie,pt),K=y(ro,K,xt),ht===null?it=ro:ht.sibling=ro,ht=ro,pt=Kn}if(qt.done)return l(ie,pt),mn&&Io(ie,xt),it;if(pt===null){for(;!qt.done;xt++,qt=ae.next())qt=Te(ie,qt.value,De),qt!==null&&(K=y(qt,K,xt),ht===null?it=qt:ht.sibling=qt,ht=qt);return mn&&Io(ie,xt),it}for(pt=f(ie,pt);!qt.done;xt++,qt=ae.next())qt=Ke(pt,ie,xt,qt.value,De),qt!==null&&(i&&qt.alternate!==null&&pt.delete(qt.key===null?xt:qt.key),K=y(qt,K,xt),ht===null?it=qt:ht.sibling=qt,ht=qt);return i&&pt.forEach(function(n1){return s(ie,n1)}),mn&&Io(ie,xt),it}function bn(ie,K,ae,De){if(typeof ae=="object"&&ae!==null&&ae.type===L&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case N:e:{for(var it=ae.key,ht=K;ht!==null;){if(ht.key===it){if(it=ae.type,it===L){if(ht.tag===7){l(ie,ht.sibling),K=g(ht,ae.props.children),K.return=ie,ie=K;break e}}else if(ht.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&J0(it)===ht.type){l(ie,ht.sibling),K=g(ht,ae.props),K.ref=Zl(ie,ht,ae),K.return=ie,ie=K;break e}l(ie,ht);break}else s(ie,ht);ht=ht.sibling}ae.type===L?(K=Go(ae.props.children,ie.mode,De,ae.key),K.return=ie,ie=K):(De=tf(ae.type,ae.key,ae.props,null,ie.mode,De),De.ref=Zl(ie,K,ae),De.return=ie,ie=De)}return R(ie);case U:e:{for(ht=ae.key;K!==null;){if(K.key===ht)if(K.tag===4&&K.stateNode.containerInfo===ae.containerInfo&&K.stateNode.implementation===ae.implementation){l(ie,K.sibling),K=g(K,ae.children||[]),K.return=ie,ie=K;break e}else{l(ie,K);break}else s(ie,K);K=K.sibling}K=ep(ae,ie.mode,De),K.return=ie,ie=K}return R(ie);case $:return ht=ae._init,bn(ie,K,ht(ae._payload),De)}if(yt(ae))return et(ie,K,ae,De);if(re(ae))return nt(ie,K,ae,De);Nc(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,K!==null&&K.tag===6?(l(ie,K.sibling),K=g(K,ae),K.return=ie,ie=K):(l(ie,K),K=Jh(ae,ie.mode,De),K.return=ie,ie=K),R(ie)):l(ie,K)}return bn}var La=e_(!0),t_=e_(!1),Dc=Ys(null),Lc=null,Ia=null,uh=null;function ch(){uh=Ia=Lc=null}function fh(i){var s=Dc.current;pn(Dc),i._currentValue=s}function dh(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function Ua(i,s){Lc=i,uh=Ia=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Li=!0),i.firstContext=null)}function mr(i){var s=i._currentValue;if(uh!==i)if(i={context:i,memoizedValue:s,next:null},Ia===null){if(Lc===null)throw Error(t(308));Ia=i,Lc.dependencies={lanes:0,firstContext:i}}else Ia=Ia.next=i;return s}var Uo=null;function hh(i){Uo===null?Uo=[i]:Uo.push(i)}function n_(i,s,l,f){var g=s.interleaved;return g===null?(l.next=l,hh(s)):(l.next=g.next,g.next=l),s.interleaved=l,ps(i,f)}function ps(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ks=!1;function ph(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ms(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Zs(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Xt&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,ps(i,l)}return g=f.interleaved,g===null?(s.next=s,hh(f)):(s.next=g.next,g.next=s),f.interleaved=s,ps(i,l)}function Ic(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Qt(i,l)}}function r_(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?g=y=R:y=y.next=R,l=l.next}while(l!==null);y===null?g=y=s:y=y.next=s}else g=y=s;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Uc(i,s,l,f){var g=i.updateQueue;Ks=!1;var y=g.firstBaseUpdate,R=g.lastBaseUpdate,B=g.shared.pending;if(B!==null){g.shared.pending=null;var Y=B,fe=Y.next;Y.next=null,R===null?y=fe:R.next=fe,R=Y;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==R&&(B===null?ye.firstBaseUpdate=fe:B.next=fe,ye.lastBaseUpdate=Y))}if(y!==null){var Te=g.baseState;R=0,ye=fe=Y=null,B=y;do{var Se=B.lane,Ke=B.eventTime;if((f&Se)===Se){ye!==null&&(ye=ye.next={eventTime:Ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var et=i,nt=B;switch(Se=s,Ke=l,nt.tag){case 1:if(et=nt.payload,typeof et=="function"){Te=et.call(Ke,Te,Se);break e}Te=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=nt.payload,Se=typeof et=="function"?et.call(Ke,Te,Se):et,Se==null)break e;Te=I({},Te,Se);break e;case 2:Ks=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,Se=g.effects,Se===null?g.effects=[B]:Se.push(B))}else Ke={eventTime:Ke,lane:Se,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(fe=ye=Ke,Y=Te):ye=ye.next=Ke,R|=Se;if(B=B.next,B===null){if(B=g.shared.pending,B===null)break;Se=B,B=Se.next,Se.next=null,g.lastBaseUpdate=Se,g.shared.pending=null}}while(!0);if(ye===null&&(Y=Te),g.baseState=Y,g.firstBaseUpdate=fe,g.lastBaseUpdate=ye,s=g.shared.interleaved,s!==null){g=s;do R|=g.lane,g=g.next;while(g!==s)}else y===null&&(g.shared.lanes=0);ko|=R,i.lanes=R,i.memoizedState=Te}}function s_(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var Ql={},qr=Ys(Ql),Jl=Ys(Ql),eu=Ys(Ql);function Oo(i){if(i===Ql)throw Error(t(174));return i}function mh(i,s){switch(fn(eu,s),fn(Jl,i),fn(qr,Ql),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:me(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=me(s,i)}pn(qr),fn(qr,s)}function Oa(){pn(qr),pn(Jl),pn(eu)}function o_(i){Oo(eu.current);var s=Oo(qr.current),l=me(s,i.type);s!==l&&(fn(Jl,i),fn(qr,l))}function gh(i){Jl.current===i&&(pn(qr),pn(Jl))}var _n=Ys(0);function Oc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _h=[];function vh(){for(var i=0;i<_h.length;i++)_h[i]._workInProgressVersionPrimary=null;_h.length=0}var Fc=A.ReactCurrentDispatcher,xh=A.ReactCurrentBatchConfig,Fo=0,vn=null,Bn=null,qn=null,kc=!1,tu=!1,nu=0,TM=0;function fi(){throw Error(t(321))}function Sh(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Dr(i[l],s[l]))return!1;return!0}function yh(i,s,l,f,g,y){if(Fo=y,vn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fc.current=i===null||i.memoizedState===null?RM:bM,i=l(f,g),tu){y=0;do{if(tu=!1,nu=0,25<=y)throw Error(t(301));y+=1,qn=Bn=null,s.updateQueue=null,Fc.current=PM,i=l(f,g)}while(tu)}if(Fc.current=Vc,s=Bn!==null&&Bn.next!==null,Fo=0,qn=Bn=vn=null,kc=!1,s)throw Error(t(300));return i}function Eh(){var i=nu!==0;return nu=0,i}function $r(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qn===null?vn.memoizedState=qn=i:qn=qn.next=i,qn}function gr(){if(Bn===null){var i=vn.alternate;i=i!==null?i.memoizedState:null}else i=Bn.next;var s=qn===null?vn.memoizedState:qn.next;if(s!==null)qn=s,Bn=i;else{if(i===null)throw Error(t(310));Bn=i,i={memoizedState:Bn.memoizedState,baseState:Bn.baseState,baseQueue:Bn.baseQueue,queue:Bn.queue,next:null},qn===null?vn.memoizedState=qn=i:qn=qn.next=i}return qn}function iu(i,s){return typeof s=="function"?s(i):s}function Mh(i){var s=gr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Bn,g=f.baseQueue,y=l.pending;if(y!==null){if(g!==null){var R=g.next;g.next=y.next,y.next=R}f.baseQueue=g=y,l.pending=null}if(g!==null){y=g.next,f=f.baseState;var B=R=null,Y=null,fe=y;do{var ye=fe.lane;if((Fo&ye)===ye)Y!==null&&(Y=Y.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),f=fe.hasEagerState?fe.eagerState:i(f,fe.action);else{var Te={lane:ye,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};Y===null?(B=Y=Te,R=f):Y=Y.next=Te,vn.lanes|=ye,ko|=ye}fe=fe.next}while(fe!==null&&fe!==y);Y===null?R=f:Y.next=B,Dr(f,s.memoizedState)||(Li=!0),s.memoizedState=f,s.baseState=R,s.baseQueue=Y,l.lastRenderedState=f}if(i=l.interleaved,i!==null){g=i;do y=g.lane,vn.lanes|=y,ko|=y,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Th(i){var s=gr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,g=l.pending,y=s.memoizedState;if(g!==null){l.pending=null;var R=g=g.next;do y=i(y,R.action),R=R.next;while(R!==g);Dr(y,s.memoizedState)||(Li=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,f]}function a_(){}function l_(i,s){var l=vn,f=gr(),g=s(),y=!Dr(f.memoizedState,g);if(y&&(f.memoizedState=g,Li=!0),f=f.queue,wh(f_.bind(null,l,f,i),[i]),f.getSnapshot!==s||y||qn!==null&&qn.memoizedState.tag&1){if(l.flags|=2048,ru(9,c_.bind(null,l,f,g,s),void 0,null),$n===null)throw Error(t(349));(Fo&30)!==0||u_(l,s,g)}return g}function u_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=vn.updateQueue,s===null?(s={lastEffect:null,stores:null},vn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function c_(i,s,l,f){s.value=l,s.getSnapshot=f,d_(s)&&h_(i)}function f_(i,s,l){return l(function(){d_(s)&&h_(i)})}function d_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Dr(i,l)}catch{return!0}}function h_(i){var s=ps(i,1);s!==null&&Fr(s,i,1,-1)}function p_(i){var s=$r();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iu,lastRenderedState:i},s.queue=i,i=i.dispatch=CM.bind(null,vn,i),[s.memoizedState,i]}function ru(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=vn.updateQueue,s===null?(s={lastEffect:null,stores:null},vn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function m_(){return gr().memoizedState}function Bc(i,s,l,f){var g=$r();vn.flags|=i,g.memoizedState=ru(1|s,l,void 0,f===void 0?null:f)}function zc(i,s,l,f){var g=gr();f=f===void 0?null:f;var y=void 0;if(Bn!==null){var R=Bn.memoizedState;if(y=R.destroy,f!==null&&Sh(f,R.deps)){g.memoizedState=ru(s,l,y,f);return}}vn.flags|=i,g.memoizedState=ru(1|s,l,y,f)}function g_(i,s){return Bc(8390656,8,i,s)}function wh(i,s){return zc(2048,8,i,s)}function __(i,s){return zc(4,2,i,s)}function v_(i,s){return zc(4,4,i,s)}function x_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function S_(i,s,l){return l=l!=null?l.concat([i]):null,zc(4,4,x_.bind(null,s,i),l)}function Ah(){}function y_(i,s){var l=gr();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Sh(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function E_(i,s){var l=gr();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Sh(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function M_(i,s,l){return(Fo&21)===0?(i.baseState&&(i.baseState=!1,Li=!0),i.memoizedState=l):(Dr(l,s)||(l=ui(),vn.lanes|=l,ko|=l,i.baseState=!0),s)}function wM(i,s){var l=Et;Et=l!==0&&4>l?l:4,i(!0);var f=xh.transition;xh.transition={};try{i(!1),s()}finally{Et=l,xh.transition=f}}function T_(){return gr().memoizedState}function AM(i,s,l){var f=to(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},w_(i))A_(s,l);else if(l=n_(i,s,l,f),l!==null){var g=Mi();Fr(l,i,f,g),C_(l,s,f)}}function CM(i,s,l){var f=to(i),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(w_(i))A_(s,g);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var R=s.lastRenderedState,B=y(R,l);if(g.hasEagerState=!0,g.eagerState=B,Dr(B,R)){var Y=s.interleaved;Y===null?(g.next=g,hh(s)):(g.next=Y.next,Y.next=g),s.interleaved=g;return}}catch{}l=n_(i,s,g,f),l!==null&&(g=Mi(),Fr(l,i,f,g),C_(l,s,f))}}function w_(i){var s=i.alternate;return i===vn||s!==null&&s===vn}function A_(i,s){tu=kc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function C_(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Qt(i,l)}}var Vc={readContext:mr,useCallback:fi,useContext:fi,useEffect:fi,useImperativeHandle:fi,useInsertionEffect:fi,useLayoutEffect:fi,useMemo:fi,useReducer:fi,useRef:fi,useState:fi,useDebugValue:fi,useDeferredValue:fi,useTransition:fi,useMutableSource:fi,useSyncExternalStore:fi,useId:fi,unstable_isNewReconciler:!1},RM={readContext:mr,useCallback:function(i,s){return $r().memoizedState=[i,s===void 0?null:s],i},useContext:mr,useEffect:g_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Bc(4194308,4,x_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Bc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Bc(4,2,i,s)},useMemo:function(i,s){var l=$r();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=$r();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=AM.bind(null,vn,i),[f.memoizedState,i]},useRef:function(i){var s=$r();return i={current:i},s.memoizedState=i},useState:p_,useDebugValue:Ah,useDeferredValue:function(i){return $r().memoizedState=i},useTransition:function(){var i=p_(!1),s=i[0];return i=wM.bind(null,i[1]),$r().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=vn,g=$r();if(mn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),$n===null)throw Error(t(349));(Fo&30)!==0||u_(f,s,l)}g.memoizedState=l;var y={value:l,getSnapshot:s};return g.queue=y,g_(f_.bind(null,f,y,i),[i]),f.flags|=2048,ru(9,c_.bind(null,f,y,l,s),void 0,null),l},useId:function(){var i=$r(),s=$n.identifierPrefix;if(mn){var l=hs,f=ds;l=(f&~(1<<32-Ze(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=nu++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=TM++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},bM={readContext:mr,useCallback:y_,useContext:mr,useEffect:wh,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:v_,useMemo:E_,useReducer:Mh,useRef:m_,useState:function(){return Mh(iu)},useDebugValue:Ah,useDeferredValue:function(i){var s=gr();return M_(s,Bn.memoizedState,i)},useTransition:function(){var i=Mh(iu)[0],s=gr().memoizedState;return[i,s]},useMutableSource:a_,useSyncExternalStore:l_,useId:T_,unstable_isNewReconciler:!1},PM={readContext:mr,useCallback:y_,useContext:mr,useEffect:wh,useImperativeHandle:S_,useInsertionEffect:__,useLayoutEffect:v_,useMemo:E_,useReducer:Th,useRef:m_,useState:function(){return Th(iu)},useDebugValue:Ah,useDeferredValue:function(i){var s=gr();return Bn===null?s.memoizedState=i:M_(s,Bn.memoizedState,i)},useTransition:function(){var i=Th(iu)[0],s=gr().memoizedState;return[i,s]},useMutableSource:a_,useSyncExternalStore:l_,useId:T_,unstable_isNewReconciler:!1};function Ir(i,s){if(i&&i.defaultProps){s=I({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Ch(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:I({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Gc={isMounted:function(i){return(i=i._reactInternals)?At(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Mi(),g=to(i),y=ms(f,g);y.payload=s,l!=null&&(y.callback=l),s=Zs(i,y,g),s!==null&&(Fr(s,i,g,f),Ic(s,i,g))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Mi(),g=to(i),y=ms(f,g);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=Zs(i,y,g),s!==null&&(Fr(s,i,g,f),Ic(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Mi(),f=to(i),g=ms(l,f);g.tag=2,s!=null&&(g.callback=s),s=Zs(i,g,f),s!==null&&(Fr(s,i,f,l),Ic(s,i,f))}};function R_(i,s,l,f,g,y,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,y,R):s.prototype&&s.prototype.isPureReactComponent?!Wl(l,f)||!Wl(g,y):!0}function b_(i,s,l){var f=!1,g=qs,y=s.contextType;return typeof y=="object"&&y!==null?y=mr(y):(g=Di(s)?Do:ci.current,f=s.contextTypes,y=(f=f!=null)?ba(i,g):qs),s=new s(l,y),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gc,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=y),s}function P_(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Gc.enqueueReplaceState(s,s.state,null)}function Rh(i,s,l,f){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},ph(i);var y=s.contextType;typeof y=="object"&&y!==null?g.context=mr(y):(y=Di(s)?Do:ci.current,g.context=ba(i,y)),g.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Ch(i,s,y,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Gc.enqueueReplaceState(g,g.state,null),Uc(i,l,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Fa(i,s){try{var l="",f=s;do l+=ke(f),f=f.return;while(f);var g=l}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:s,stack:g,digest:null}}function bh(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Ph(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var NM=typeof WeakMap=="function"?WeakMap:Map;function N_(i,s,l){l=ms(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){$c||($c=!0,Xh=f),Ph(i,s)},l}function D_(i,s,l){l=ms(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;l.payload=function(){return f(g)},l.callback=function(){Ph(i,s)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Ph(i,s),typeof f!="function"&&(Js===null?Js=new Set([this]):Js.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})}),l}function L_(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new NM;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(l)||(g.add(l),i=XM.bind(null,i,s,l),s.then(i,i))}function I_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function U_(i,s,l,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ms(-1,1),s.tag=2,Zs(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var DM=A.ReactCurrentOwner,Li=!1;function Ei(i,s,l,f){s.child=i===null?t_(s,null,l,f):La(s,i.child,l,f)}function O_(i,s,l,f,g){l=l.render;var y=s.ref;return Ua(s,g),f=yh(i,s,l,f,y,g),l=Eh(),i!==null&&!Li?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,gs(i,s,g)):(mn&&l&&rh(s),s.flags|=1,Ei(i,s,f,g),s.child)}function F_(i,s,l,f,g){if(i===null){var y=l.type;return typeof y=="function"&&!Qh(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,k_(i,s,y,f,g)):(i=tf(l.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(y=i.child,(i.lanes&g)===0){var R=y.memoizedProps;if(l=l.compare,l=l!==null?l:Wl,l(R,f)&&i.ref===s.ref)return gs(i,s,g)}return s.flags|=1,i=io(y,f),i.ref=s.ref,i.return=s,s.child=i}function k_(i,s,l,f,g){if(i!==null){var y=i.memoizedProps;if(Wl(y,f)&&i.ref===s.ref)if(Li=!1,s.pendingProps=f=y,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Li=!0);else return s.lanes=i.lanes,gs(i,s,g)}return Nh(i,s,l,f,g)}function B_(i,s,l){var f=s.pendingProps,g=f.children,y=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},fn(Ba,$i),$i|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,fn(Ba,$i),$i|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,fn(Ba,$i),$i|=f}else y!==null?(f=y.baseLanes|l,s.memoizedState=null):f=l,fn(Ba,$i),$i|=f;return Ei(i,s,g,l),s.child}function z_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Nh(i,s,l,f,g){var y=Di(l)?Do:ci.current;return y=ba(s,y),Ua(s,g),l=yh(i,s,l,f,y,g),f=Eh(),i!==null&&!Li?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,gs(i,s,g)):(mn&&f&&rh(s),s.flags|=1,Ei(i,s,l,g),s.child)}function V_(i,s,l,f,g){if(Di(l)){var y=!0;Ac(s)}else y=!1;if(Ua(s,g),s.stateNode===null)Wc(i,s),b_(s,l,f),Rh(s,l,f,g),f=!0;else if(i===null){var R=s.stateNode,B=s.memoizedProps;R.props=B;var Y=R.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=mr(fe):(fe=Di(l)?Do:ci.current,fe=ba(s,fe));var ye=l.getDerivedStateFromProps,Te=typeof ye=="function"||typeof R.getSnapshotBeforeUpdate=="function";Te||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==f||Y!==fe)&&P_(s,R,f,fe),Ks=!1;var Se=s.memoizedState;R.state=Se,Uc(s,f,R,g),Y=s.memoizedState,B!==f||Se!==Y||Ni.current||Ks?(typeof ye=="function"&&(Ch(s,l,ye,f),Y=s.memoizedState),(B=Ks||R_(s,l,B,f,Se,Y,fe))?(Te||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(s.flags|=4194308)):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=Y),R.props=f,R.state=Y,R.context=fe,f=B):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{R=s.stateNode,i_(i,s),B=s.memoizedProps,fe=s.type===s.elementType?B:Ir(s.type,B),R.props=fe,Te=s.pendingProps,Se=R.context,Y=l.contextType,typeof Y=="object"&&Y!==null?Y=mr(Y):(Y=Di(l)?Do:ci.current,Y=ba(s,Y));var Ke=l.getDerivedStateFromProps;(ye=typeof Ke=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==Te||Se!==Y)&&P_(s,R,f,Y),Ks=!1,Se=s.memoizedState,R.state=Se,Uc(s,f,R,g);var et=s.memoizedState;B!==Te||Se!==et||Ni.current||Ks?(typeof Ke=="function"&&(Ch(s,l,Ke,f),et=s.memoizedState),(fe=Ks||R_(s,l,fe,f,Se,et,Y)||!1)?(ye||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(f,et,Y),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(f,et,Y)),typeof R.componentDidUpdate=="function"&&(s.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof R.componentDidUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=et),R.props=f,R.state=et,R.context=Y,f=fe):(typeof R.componentDidUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),f=!1)}return Dh(i,s,l,f,y,g)}function Dh(i,s,l,f,g,y){z_(i,s);var R=(s.flags&128)!==0;if(!f&&!R)return g&&j0(s,l,!1),gs(i,s,y);f=s.stateNode,DM.current=s;var B=R&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&R?(s.child=La(s,i.child,null,y),s.child=La(s,null,B,y)):Ei(i,s,B,y),s.memoizedState=f.state,g&&j0(s,l,!0),s.child}function G_(i){var s=i.stateNode;s.pendingContext?W0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&W0(i,s.context,!1),mh(i,s.containerInfo)}function H_(i,s,l,f,g){return Da(),lh(g),s.flags|=256,Ei(i,s,l,f),s.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Ih(i){return{baseLanes:i,cachePool:null,transitions:null}}function W_(i,s,l){var f=s.pendingProps,g=_n.current,y=!1,R=(s.flags&128)!==0,B;if((B=R)||(B=i!==null&&i.memoizedState===null?!1:(g&2)!==0),B?(y=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),fn(_n,g&1),i===null)return ah(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(R=f.children,i=f.fallback,y?(f=s.mode,y=s.child,R={mode:"hidden",children:R},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=R):y=nf(R,f,0,null),i=Go(i,f,l,null),y.return=s,i.return=s,y.sibling=i,s.child=y,s.child.memoizedState=Ih(l),s.memoizedState=Lh,i):Uh(s,R));if(g=i.memoizedState,g!==null&&(B=g.dehydrated,B!==null))return LM(i,s,R,f,B,g,l);if(y){y=f.fallback,R=s.mode,g=i.child,B=g.sibling;var Y={mode:"hidden",children:f.children};return(R&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=Y,s.deletions=null):(f=io(g,Y),f.subtreeFlags=g.subtreeFlags&14680064),B!==null?y=io(B,y):(y=Go(y,R,l,null),y.flags|=2),y.return=s,f.return=s,f.sibling=y,s.child=f,f=y,y=s.child,R=i.child.memoizedState,R=R===null?Ih(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},y.memoizedState=R,y.childLanes=i.childLanes&~l,s.memoizedState=Lh,f}return y=i.child,i=y.sibling,f=io(y,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Uh(i,s){return s=nf({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Hc(i,s,l,f){return f!==null&&lh(f),La(s,i.child,null,l),i=Uh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function LM(i,s,l,f,g,y,R){if(l)return s.flags&256?(s.flags&=-257,f=bh(Error(t(422))),Hc(i,s,R,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(y=f.fallback,g=s.mode,f=nf({mode:"visible",children:f.children},g,0,null),y=Go(y,g,R,null),y.flags|=2,f.return=s,y.return=s,f.sibling=y,s.child=f,(s.mode&1)!==0&&La(s,i.child,null,R),s.child.memoizedState=Ih(R),s.memoizedState=Lh,y);if((s.mode&1)===0)return Hc(i,s,R,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var B=f.dgst;return f=B,y=Error(t(419)),f=bh(y,f,void 0),Hc(i,s,R,f)}if(B=(R&i.childLanes)!==0,Li||B){if(f=$n,f!==null){switch(R&-R){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|R))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,ps(i,g),Fr(f,i,g,-1))}return Zh(),f=bh(Error(t(421))),Hc(i,s,R,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=jM.bind(null,i),g._reactRetry=s,null):(i=y.treeContext,qi=js(g.nextSibling),Yi=s,mn=!0,Lr=null,i!==null&&(hr[pr++]=ds,hr[pr++]=hs,hr[pr++]=Lo,ds=i.id,hs=i.overflow,Lo=s),s=Uh(s,f.children),s.flags|=4096,s)}function X_(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),dh(i.return,s,l)}function Oh(i,s,l,f,g){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=g)}function j_(i,s,l){var f=s.pendingProps,g=f.revealOrder,y=f.tail;if(Ei(i,s,f.children,l),f=_n.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&X_(i,l,s);else if(i.tag===19)X_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(fn(_n,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)i=l.alternate,i!==null&&Oc(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),Oh(s,!1,g,l,y);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Oc(i)===null){s.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}Oh(s,!0,l,null,y);break;case"together":Oh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function gs(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ko|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=io(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=io(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function IM(i,s,l){switch(s.tag){case 3:G_(s),Da();break;case 5:o_(s);break;case 1:Di(s.type)&&Ac(s);break;case 4:mh(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;fn(Dc,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(fn(_n,_n.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?W_(i,s,l):(fn(_n,_n.current&1),i=gs(i,s,l),i!==null?i.sibling:null);fn(_n,_n.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return j_(i,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),fn(_n,_n.current),f)break;return null;case 22:case 23:return s.lanes=0,B_(i,s,l)}return gs(i,s,l)}var Y_,Fh,q_,$_;Y_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Fh=function(){},q_=function(i,s,l,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,Oo(qr.current);var y=null;switch(l){case"input":g=lt(i,g),f=lt(i,f),y=[];break;case"select":g=I({},g,{value:void 0}),f=I({},f,{value:void 0}),y=[];break;case"textarea":g=We(i,g),f=We(i,f),y=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Mc)}$e(l,f);var R;l=null;for(fe in g)if(!f.hasOwnProperty(fe)&&g.hasOwnProperty(fe)&&g[fe]!=null)if(fe==="style"){var B=g[fe];for(R in B)B.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(r.hasOwnProperty(fe)?y||(y=[]):(y=y||[]).push(fe,null));for(fe in f){var Y=f[fe];if(B=g?.[fe],f.hasOwnProperty(fe)&&Y!==B&&(Y!=null||B!=null))if(fe==="style")if(B){for(R in B)!B.hasOwnProperty(R)||Y&&Y.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in Y)Y.hasOwnProperty(R)&&B[R]!==Y[R]&&(l||(l={}),l[R]=Y[R])}else l||(y||(y=[]),y.push(fe,l)),l=Y;else fe==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(y=y||[]).push(fe,Y)):fe==="children"?typeof Y!="string"&&typeof Y!="number"||(y=y||[]).push(fe,""+Y):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(r.hasOwnProperty(fe)?(Y!=null&&fe==="onScroll"&&hn("scroll",i),y||B===Y||(y=[])):(y=y||[]).push(fe,Y))}l&&(y=y||[]).push("style",l);var fe=y;(s.updateQueue=fe)&&(s.flags|=4)}},$_=function(i,s,l,f){l!==f&&(s.flags|=4)};function su(i,s){if(!mn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function di(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function UM(i,s,l){var f=s.pendingProps;switch(sh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return di(s),null;case 1:return Di(s.type)&&wc(),di(s),null;case 3:return f=s.stateNode,Oa(),pn(Ni),pn(ci),vh(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Pc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Lr!==null&&(qh(Lr),Lr=null))),Fh(i,s),di(s),null;case 5:gh(s);var g=Oo(eu.current);if(l=s.type,i!==null&&s.stateNode!=null)q_(i,s,l,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return di(s),null}if(i=Oo(qr.current),Pc(s)){f=s.stateNode,l=s.type;var y=s.memoizedProps;switch(f[Yr]=s,f[$l]=y,i=(s.mode&1)!==0,l){case"dialog":hn("cancel",f),hn("close",f);break;case"iframe":case"object":case"embed":hn("load",f);break;case"video":case"audio":for(g=0;g<jl.length;g++)hn(jl[g],f);break;case"source":hn("error",f);break;case"img":case"image":case"link":hn("error",f),hn("load",f);break;case"details":hn("toggle",f);break;case"input":St(f,y),hn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},hn("invalid",f);break;case"textarea":O(f,y),hn("invalid",f)}$e(l,y),g=null;for(var R in y)if(y.hasOwnProperty(R)){var B=y[R];R==="children"?typeof B=="string"?f.textContent!==B&&(y.suppressHydrationWarning!==!0&&Ec(f.textContent,B,i),g=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(y.suppressHydrationWarning!==!0&&Ec(f.textContent,B,i),g=["children",""+B]):r.hasOwnProperty(R)&&B!=null&&R==="onScroll"&&hn("scroll",f)}switch(l){case"input":ft(f),W(f,y,!0);break;case"textarea":ft(f),q(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=Mc)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{R=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=R.createElement(l,{is:f.is}):(i=R.createElement(l),l==="select"&&(R=i,f.multiple?R.multiple=!0:f.size&&(R.size=f.size))):i=R.createElementNS(i,l),i[Yr]=s,i[$l]=f,Y_(i,s,!1,!1),s.stateNode=i;e:{switch(R=Ae(l,f),l){case"dialog":hn("cancel",i),hn("close",i),g=f;break;case"iframe":case"object":case"embed":hn("load",i),g=f;break;case"video":case"audio":for(g=0;g<jl.length;g++)hn(jl[g],i);g=f;break;case"source":hn("error",i),g=f;break;case"img":case"image":case"link":hn("error",i),hn("load",i),g=f;break;case"details":hn("toggle",i),g=f;break;case"input":St(i,f),g=lt(i,f),hn("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=I({},f,{value:void 0}),hn("invalid",i);break;case"textarea":O(i,f),g=We(i,f),hn("invalid",i);break;default:g=f}$e(l,g),B=g;for(y in B)if(B.hasOwnProperty(y)){var Y=B[y];y==="style"?Re(i,Y):y==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&Ge(i,Y)):y==="children"?typeof Y=="string"?(l!=="textarea"||Y!=="")&&we(i,Y):typeof Y=="number"&&we(i,""+Y):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(r.hasOwnProperty(y)?Y!=null&&y==="onScroll"&&hn("scroll",i):Y!=null&&P(i,y,Y,R))}switch(l){case"input":ft(i),W(i,f,!1);break;case"textarea":ft(i),q(i);break;case"option":f.value!=null&&i.setAttribute("value",""+_e(f.value));break;case"select":i.multiple=!!f.multiple,y=f.value,y!=null?at(i,!!f.multiple,y,!1):f.defaultValue!=null&&at(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Mc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return di(s),null;case 6:if(i&&s.stateNode!=null)$_(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Oo(eu.current),Oo(qr.current),Pc(s)){if(f=s.stateNode,l=s.memoizedProps,f[Yr]=s,(y=f.nodeValue!==l)&&(i=Yi,i!==null))switch(i.tag){case 3:Ec(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ec(f.nodeValue,l,(i.mode&1)!==0)}y&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Yr]=s,s.stateNode=f}return di(s),null;case 13:if(pn(_n),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(mn&&qi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Q0(),Da(),s.flags|=98560,y=!1;else if(y=Pc(s),f!==null&&f.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Yr]=s}else Da(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;di(s),y=!1}else Lr!==null&&(qh(Lr),Lr=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(_n.current&1)!==0?zn===0&&(zn=3):Zh())),s.updateQueue!==null&&(s.flags|=4),di(s),null);case 4:return Oa(),Fh(i,s),i===null&&Yl(s.stateNode.containerInfo),di(s),null;case 10:return fh(s.type._context),di(s),null;case 17:return Di(s.type)&&wc(),di(s),null;case 19:if(pn(_n),y=s.memoizedState,y===null)return di(s),null;if(f=(s.flags&128)!==0,R=y.rendering,R===null)if(f)su(y,!1);else{if(zn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(R=Oc(i),R!==null){for(s.flags|=128,su(y,!1),f=R.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)y=l,i=f,y.flags&=14680066,R=y.alternate,R===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=R.childLanes,y.lanes=R.lanes,y.child=R.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=R.memoizedProps,y.memoizedState=R.memoizedState,y.updateQueue=R.updateQueue,y.type=R.type,i=R.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return fn(_n,_n.current&1|2),s.child}i=i.sibling}y.tail!==null&&Ct()>za&&(s.flags|=128,f=!0,su(y,!1),s.lanes=4194304)}else{if(!f)if(i=Oc(R),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),su(y,!0),y.tail===null&&y.tailMode==="hidden"&&!R.alternate&&!mn)return di(s),null}else 2*Ct()-y.renderingStartTime>za&&l!==1073741824&&(s.flags|=128,f=!0,su(y,!1),s.lanes=4194304);y.isBackwards?(R.sibling=s.child,s.child=R):(l=y.last,l!==null?l.sibling=R:s.child=R,y.last=R)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=Ct(),s.sibling=null,l=_n.current,fn(_n,f?l&1|2:l&1),s):(di(s),null);case 22:case 23:return Kh(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?($i&1073741824)!==0&&(di(s),s.subtreeFlags&6&&(s.flags|=8192)):di(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function OM(i,s){switch(sh(s),s.tag){case 1:return Di(s.type)&&wc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Oa(),pn(Ni),pn(ci),vh(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return gh(s),null;case 13:if(pn(_n),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Da()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return pn(_n),null;case 4:return Oa(),null;case 10:return fh(s.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var Xc=!1,hi=!1,FM=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function ka(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){An(i,s,f)}else l.current=null}function kh(i,s,l){try{l()}catch(f){An(i,s,f)}}var K_=!1;function kM(i,s){if(Kd=fc,i=R0(),Gd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var R=0,B=-1,Y=-1,fe=0,ye=0,Te=i,Se=null;t:for(;;){for(var Ke;Te!==l||g!==0&&Te.nodeType!==3||(B=R+g),Te!==y||f!==0&&Te.nodeType!==3||(Y=R+f),Te.nodeType===3&&(R+=Te.nodeValue.length),(Ke=Te.firstChild)!==null;)Se=Te,Te=Ke;for(;;){if(Te===i)break t;if(Se===l&&++fe===g&&(B=R),Se===y&&++ye===f&&(Y=R),(Ke=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Ke}l=B===-1||Y===-1?null:{start:B,end:Y}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zd={focusedElem:i,selectionRange:l},fc=!1,Qe=s;Qe!==null;)if(s=Qe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Qe=i;else for(;Qe!==null;){s=Qe;try{var et=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var nt=et.memoizedProps,bn=et.memoizedState,ie=s.stateNode,K=ie.getSnapshotBeforeUpdate(s.elementType===s.type?nt:Ir(s.type,nt),bn);ie.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){An(s,s.return,De)}if(i=s.sibling,i!==null){i.return=s.return,Qe=i;break}Qe=s.return}return et=K_,K_=!1,et}function ou(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var y=g.destroy;g.destroy=void 0,y!==void 0&&kh(s,l,y)}g=g.next}while(g!==f)}}function jc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Bh(i){var s=i.ref;if(s!==null){var l=i.stateNode;i.tag,i=l,typeof s=="function"?s(i):s.current=i}}function Z_(i){var s=i.alternate;s!==null&&(i.alternate=null,Z_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Yr],delete s[$l],delete s[th],delete s[SM],delete s[yM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Q_(i){return i.tag===5||i.tag===3||i.tag===4}function J_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Q_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function zh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Mc));else if(f!==4&&(i=i.child,i!==null))for(zh(i,s,l),i=i.sibling;i!==null;)zh(i,s,l),i=i.sibling}function Vh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Vh(i,s,l),i=i.sibling;i!==null;)Vh(i,s,l),i=i.sibling}var ni=null,Ur=!1;function Qs(i,s,l){for(l=l.child;l!==null;)ev(i,s,l),l=l.sibling}function ev(i,s,l){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(Be,l)}catch{}switch(l.tag){case 5:hi||ka(l,s);case 6:var f=ni,g=Ur;ni=null,Qs(i,s,l),ni=f,Ur=g,ni!==null&&(Ur?(i=ni,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):ni.removeChild(l.stateNode));break;case 18:ni!==null&&(Ur?(i=ni,l=l.stateNode,i.nodeType===8?eh(i.parentNode,l):i.nodeType===1&&eh(i,l),kl(i)):eh(ni,l.stateNode));break;case 4:f=ni,g=Ur,ni=l.stateNode.containerInfo,Ur=!0,Qs(i,s,l),ni=f,Ur=g;break;case 0:case 11:case 14:case 15:if(!hi&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var y=g,R=y.destroy;y=y.tag,R!==void 0&&((y&2)!==0||(y&4)!==0)&&kh(l,s,R),g=g.next}while(g!==f)}Qs(i,s,l);break;case 1:if(!hi&&(ka(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){An(l,s,B)}Qs(i,s,l);break;case 21:Qs(i,s,l);break;case 22:l.mode&1?(hi=(f=hi)||l.memoizedState!==null,Qs(i,s,l),hi=f):Qs(i,s,l);break;default:Qs(i,s,l)}}function tv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new FM),s.forEach(function(f){var g=YM.bind(null,i,f);l.has(f)||(l.add(f),f.then(g,g))})}}function Or(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var y=i,R=s,B=R;e:for(;B!==null;){switch(B.tag){case 5:ni=B.stateNode,Ur=!1;break e;case 3:ni=B.stateNode.containerInfo,Ur=!0;break e;case 4:ni=B.stateNode.containerInfo,Ur=!0;break e}B=B.return}if(ni===null)throw Error(t(160));ev(y,R,g),ni=null,Ur=!1;var Y=g.alternate;Y!==null&&(Y.return=null),g.return=null}catch(fe){An(g,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)nv(s,i),s=s.sibling}function nv(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Or(s,i),Kr(i),f&4){try{ou(3,i,i.return),jc(3,i)}catch(nt){An(i,i.return,nt)}try{ou(5,i,i.return)}catch(nt){An(i,i.return,nt)}}break;case 1:Or(s,i),Kr(i),f&512&&l!==null&&ka(l,l.return);break;case 5:if(Or(s,i),Kr(i),f&512&&l!==null&&ka(l,l.return),i.flags&32){var g=i.stateNode;try{we(g,"")}catch(nt){An(i,i.return,nt)}}if(f&4&&(g=i.stateNode,g!=null)){var y=i.memoizedProps,R=l!==null?l.memoizedProps:y,B=i.type,Y=i.updateQueue;if(i.updateQueue=null,Y!==null)try{B==="input"&&y.type==="radio"&&y.name!=null&&ot(g,y),Ae(B,R);var fe=Ae(B,y);for(R=0;R<Y.length;R+=2){var ye=Y[R],Te=Y[R+1];ye==="style"?Re(g,Te):ye==="dangerouslySetInnerHTML"?Ge(g,Te):ye==="children"?we(g,Te):P(g,ye,Te,fe)}switch(B){case"input":oe(g,y);break;case"textarea":w(g,y);break;case"select":var Se=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var Ke=y.value;Ke!=null?at(g,!!y.multiple,Ke,!1):Se!==!!y.multiple&&(y.defaultValue!=null?at(g,!!y.multiple,y.defaultValue,!0):at(g,!!y.multiple,y.multiple?[]:"",!1))}g[$l]=y}catch(nt){An(i,i.return,nt)}}break;case 6:if(Or(s,i),Kr(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,y=i.memoizedProps;try{g.nodeValue=y}catch(nt){An(i,i.return,nt)}}break;case 3:if(Or(s,i),Kr(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{kl(s.containerInfo)}catch(nt){An(i,i.return,nt)}break;case 4:Or(s,i),Kr(i);break;case 13:Or(s,i),Kr(i),g=i.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(Wh=Ct())),f&4&&tv(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(hi=(fe=hi)||ye,Or(s,i),hi=fe):Or(s,i),Kr(i),f&8192){if(fe=i.memoizedState!==null,(i.stateNode.isHidden=fe)&&!ye&&(i.mode&1)!==0)for(Qe=i,ye=i.child;ye!==null;){for(Te=Qe=ye;Qe!==null;){switch(Se=Qe,Ke=Se.child,Se.tag){case 0:case 11:case 14:case 15:ou(4,Se,Se.return);break;case 1:ka(Se,Se.return);var et=Se.stateNode;if(typeof et.componentWillUnmount=="function"){f=Se,l=Se.return;try{s=f,et.props=s.memoizedProps,et.state=s.memoizedState,et.componentWillUnmount()}catch(nt){An(f,l,nt)}}break;case 5:ka(Se,Se.return);break;case 22:if(Se.memoizedState!==null){sv(Te);continue}}Ke!==null?(Ke.return=Se,Qe=Ke):sv(Te)}ye=ye.sibling}e:for(ye=null,Te=i;;){if(Te.tag===5){if(ye===null){ye=Te;try{g=Te.stateNode,fe?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(B=Te.stateNode,Y=Te.memoizedProps.style,R=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=Ee("display",R))}catch(nt){An(i,i.return,nt)}}}else if(Te.tag===6){if(ye===null)try{Te.stateNode.nodeValue=fe?"":Te.memoizedProps}catch(nt){An(i,i.return,nt)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;ye===Te&&(ye=null),Te=Te.return}ye===Te&&(ye=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Or(s,i),Kr(i),f&4&&tv(i);break;case 21:break;default:Or(s,i),Kr(i)}}function Kr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Q_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(we(g,""),f.flags&=-33);var y=J_(i);Vh(i,y,g);break;case 3:case 4:var R=f.stateNode.containerInfo,B=J_(i);zh(i,B,R);break;default:throw Error(t(161))}}catch(Y){An(i,i.return,Y)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function BM(i,s,l){Qe=i,iv(i)}function iv(i,s,l){for(var f=(i.mode&1)!==0;Qe!==null;){var g=Qe,y=g.child;if(g.tag===22&&f){var R=g.memoizedState!==null||Xc;if(!R){var B=g.alternate,Y=B!==null&&B.memoizedState!==null||hi;B=Xc;var fe=hi;if(Xc=R,(hi=Y)&&!fe)for(Qe=g;Qe!==null;)R=Qe,Y=R.child,R.tag===22&&R.memoizedState!==null?ov(g):Y!==null?(Y.return=R,Qe=Y):ov(g);for(;y!==null;)Qe=y,iv(y),y=y.sibling;Qe=g,Xc=B,hi=fe}rv(i)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,Qe=y):rv(i)}}function rv(i){for(;Qe!==null;){var s=Qe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:hi||jc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!hi)if(l===null)f.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Ir(s.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&s_(s,y,f);break;case 3:var R=s.updateQueue;if(R!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}s_(s,R,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var Y=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&l.focus();break;case"img":Y.src&&(l.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var ye=fe.memoizedState;if(ye!==null){var Te=ye.dehydrated;Te!==null&&kl(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hi||s.flags&512&&Bh(s)}catch(Se){An(s,s.return,Se)}}if(s===i){Qe=null;break}if(l=s.sibling,l!==null){l.return=s.return,Qe=l;break}Qe=s.return}}function sv(i){for(;Qe!==null;){var s=Qe;if(s===i){Qe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Qe=l;break}Qe=s.return}}function ov(i){for(;Qe!==null;){var s=Qe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{jc(4,s)}catch(Y){An(s,l,Y)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(Y){An(s,g,Y)}}var y=s.return;try{Bh(s)}catch(Y){An(s,y,Y)}break;case 5:var R=s.return;try{Bh(s)}catch(Y){An(s,R,Y)}}}catch(Y){An(s,s.return,Y)}if(s===i){Qe=null;break}var B=s.sibling;if(B!==null){B.return=s.return,Qe=B;break}Qe=s.return}}var zM=Math.ceil,Yc=A.ReactCurrentDispatcher,Gh=A.ReactCurrentOwner,_r=A.ReactCurrentBatchConfig,Xt=0,$n=null,Ln=null,ii=0,$i=0,Ba=Ys(0),zn=0,au=null,ko=0,qc=0,Hh=0,lu=null,Ii=null,Wh=0,za=1/0,_s=null,$c=!1,Xh=null,Js=null,Kc=!1,eo=null,Zc=0,uu=0,jh=null,Qc=-1,Jc=0;function Mi(){return(Xt&6)!==0?Ct():Qc!==-1?Qc:Qc=Ct()}function to(i){return(i.mode&1)===0?1:(Xt&2)!==0&&ii!==0?ii&-ii:MM.transition!==null?(Jc===0&&(Jc=ui()),Jc):(i=Et,i!==0||(i=window.event,i=i===void 0?16:l0(i.type)),i)}function Fr(i,s,l,f){if(50<uu)throw uu=0,jh=null,Error(t(185));kn(i,l,f),((Xt&2)===0||i!==$n)&&(i===$n&&((Xt&2)===0&&(qc|=l),zn===4&&no(i,ii)),Ui(i,f),l===1&&Xt===0&&(s.mode&1)===0&&(za=Ct()+500,Cc&&$s()))}function Ui(i,s){var l=i.callbackNode;Zt(i,s);var f=Yt(i,i===$n?ii:0);if(f===0)l!==null&&Rn(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&Rn(l),s===1)i.tag===0?EM(lv.bind(null,i)):Y0(lv.bind(null,i)),vM(function(){(Xt&6)===0&&$s()}),l=null;else{switch(yi(f)){case 1:l=Z;break;case 4:l=ce;break;case 16:l=le;break;case 536870912:l=be;break;default:l=le}l=gv(l,av.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function av(i,s){if(Qc=-1,Jc=0,(Xt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Va()&&i.callbackNode!==l)return null;var f=Yt(i,i===$n?ii:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ef(i,f);else{s=f;var g=Xt;Xt|=2;var y=cv();($n!==i||ii!==s)&&(_s=null,za=Ct()+500,zo(i,s));do try{HM();break}catch(B){uv(i,B)}while(!0);ch(),Yc.current=y,Xt=g,Ln!==null?s=0:($n=null,ii=0,s=zn)}if(s!==0){if(s===2&&(g=Ot(i),g!==0&&(f=g,s=Yh(i,g))),s===1)throw l=au,zo(i,0),no(i,f),Ui(i,Ct()),l;if(s===6)no(i,f);else{if(g=i.current.alternate,(f&30)===0&&!VM(g)&&(s=ef(i,f),s===2&&(y=Ot(i),y!==0&&(f=y,s=Yh(i,y))),s===1))throw l=au,zo(i,0),no(i,f),Ui(i,Ct()),l;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Vo(i,Ii,_s);break;case 3:if(no(i,f),(f&130023424)===f&&(s=Wh+500-Ct(),10<s)){if(Yt(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Mi(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Jd(Vo.bind(null,i,Ii,_s),s);break}Vo(i,Ii,_s);break;case 4:if(no(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var R=31-Ze(f);y=1<<R,R=s[R],R>g&&(g=R),f&=~y}if(f=g,f=Ct()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*zM(f/1960))-f,10<f){i.timeoutHandle=Jd(Vo.bind(null,i,Ii,_s),f);break}Vo(i,Ii,_s);break;case 5:Vo(i,Ii,_s);break;default:throw Error(t(329))}}}return Ui(i,Ct()),i.callbackNode===l?av.bind(null,i):null}function Yh(i,s){var l=lu;return i.current.memoizedState.isDehydrated&&(zo(i,s).flags|=256),i=ef(i,s),i!==2&&(s=Ii,Ii=l,s!==null&&qh(s)),i}function qh(i){Ii===null?Ii=i:Ii.push.apply(Ii,i)}function VM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],y=g.getSnapshot;g=g.value;try{if(!Dr(y(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function no(i,s){for(s&=~Hh,s&=~qc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Ze(s),f=1<<l;i[l]=-1,s&=~f}}function lv(i){if((Xt&6)!==0)throw Error(t(327));Va();var s=Yt(i,0);if((s&1)===0)return Ui(i,Ct()),null;var l=ef(i,s);if(i.tag!==0&&l===2){var f=Ot(i);f!==0&&(s=f,l=Yh(i,f))}if(l===1)throw l=au,zo(i,0),no(i,s),Ui(i,Ct()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Vo(i,Ii,_s),Ui(i,Ct()),null}function $h(i,s){var l=Xt;Xt|=1;try{return i(s)}finally{Xt=l,Xt===0&&(za=Ct()+500,Cc&&$s())}}function Bo(i){eo!==null&&eo.tag===0&&(Xt&6)===0&&Va();var s=Xt;Xt|=1;var l=_r.transition,f=Et;try{if(_r.transition=null,Et=1,i)return i()}finally{Et=f,_r.transition=l,Xt=s,(Xt&6)===0&&$s()}}function Kh(){$i=Ba.current,pn(Ba)}function zo(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,_M(l)),Ln!==null)for(l=Ln.return;l!==null;){var f=l;switch(sh(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&wc();break;case 3:Oa(),pn(Ni),pn(ci),vh();break;case 5:gh(f);break;case 4:Oa();break;case 13:pn(_n);break;case 19:pn(_n);break;case 10:fh(f.type._context);break;case 22:case 23:Kh()}l=l.return}if($n=i,Ln=i=io(i.current,null),ii=$i=s,zn=0,au=null,Hh=qc=ko=0,Ii=lu=null,Uo!==null){for(s=0;s<Uo.length;s++)if(l=Uo[s],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,y=l.pending;if(y!==null){var R=y.next;y.next=g,f.next=R}l.pending=f}Uo=null}return i}function uv(i,s){do{var l=Ln;try{if(ch(),Fc.current=Vc,kc){for(var f=vn.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}kc=!1}if(Fo=0,qn=Bn=vn=null,tu=!1,nu=0,Gh.current=null,l===null||l.return===null){zn=1,au=s,Ln=null;break}e:{var y=i,R=l.return,B=l,Y=s;if(s=ii,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var fe=Y,ye=B,Te=ye.tag;if((ye.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=ye.alternate;Se?(ye.updateQueue=Se.updateQueue,ye.memoizedState=Se.memoizedState,ye.lanes=Se.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ke=I_(R);if(Ke!==null){Ke.flags&=-257,U_(Ke,R,B,y,s),Ke.mode&1&&L_(y,fe,s),s=Ke,Y=fe;var et=s.updateQueue;if(et===null){var nt=new Set;nt.add(Y),s.updateQueue=nt}else et.add(Y);break e}else{if((s&1)===0){L_(y,fe,s),Zh();break e}Y=Error(t(426))}}else if(mn&&B.mode&1){var bn=I_(R);if(bn!==null){(bn.flags&65536)===0&&(bn.flags|=256),U_(bn,R,B,y,s),lh(Fa(Y,B));break e}}y=Y=Fa(Y,B),zn!==4&&(zn=2),lu===null?lu=[y]:lu.push(y),y=R;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var ie=N_(y,Y,s);r_(y,ie);break e;case 1:B=Y;var K=y.type,ae=y.stateNode;if((y.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Js===null||!Js.has(ae)))){y.flags|=65536,s&=-s,y.lanes|=s;var De=D_(y,B,s);r_(y,De);break e}}y=y.return}while(y!==null)}dv(l)}catch(it){s=it,Ln===l&&l!==null&&(Ln=l=l.return);continue}break}while(!0)}function cv(){var i=Yc.current;return Yc.current=Vc,i===null?Vc:i}function Zh(){(zn===0||zn===3||zn===2)&&(zn=4),$n===null||(ko&268435455)===0&&(qc&268435455)===0||no($n,ii)}function ef(i,s){var l=Xt;Xt|=2;var f=cv();($n!==i||ii!==s)&&(_s=null,zo(i,s));do try{GM();break}catch(g){uv(i,g)}while(!0);if(ch(),Xt=l,Yc.current=f,Ln!==null)throw Error(t(261));return $n=null,ii=0,zn}function GM(){for(;Ln!==null;)fv(Ln)}function HM(){for(;Ln!==null&&!Nr();)fv(Ln)}function fv(i){var s=mv(i.alternate,i,$i);i.memoizedProps=i.pendingProps,s===null?dv(i):Ln=s,Gh.current=null}function dv(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=UM(l,s,$i),l!==null){Ln=l;return}}else{if(l=OM(l,s),l!==null){l.flags&=32767,Ln=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{zn=6,Ln=null;return}}if(s=s.sibling,s!==null){Ln=s;return}Ln=s=i}while(s!==null);zn===0&&(zn=5)}function Vo(i,s,l){var f=Et,g=_r.transition;try{_r.transition=null,Et=1,WM(i,s,l,f)}finally{_r.transition=g,Et=f}return null}function WM(i,s,l,f){do Va();while(eo!==null);if((Xt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(Po(i,y),i===$n&&(Ln=$n=null,ii=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Kc||(Kc=!0,gv(le,function(){return Va(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=_r.transition,_r.transition=null;var R=Et;Et=1;var B=Xt;Xt|=4,Gh.current=null,kM(i,l),nv(l,i),cM(Zd),fc=!!Kd,Zd=Kd=null,i.current=l,BM(l),Bs(),Xt=B,Et=R,_r.transition=y}else i.current=l;if(Kc&&(Kc=!1,eo=i,Zc=g),y=i.pendingLanes,y===0&&(Js=null),He(l.stateNode),Ui(i,Ct()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)g=s[l],f(g.value,{componentStack:g.stack,digest:g.digest});if($c)throw $c=!1,i=Xh,Xh=null,i;return(Zc&1)!==0&&i.tag!==0&&Va(),y=i.pendingLanes,(y&1)!==0?i===jh?uu++:(uu=0,jh=i):uu=0,$s(),null}function Va(){if(eo!==null){var i=yi(Zc),s=_r.transition,l=Et;try{if(_r.transition=null,Et=16>i?16:i,eo===null)var f=!1;else{if(i=eo,eo=null,Zc=0,(Xt&6)!==0)throw Error(t(331));var g=Xt;for(Xt|=4,Qe=i.current;Qe!==null;){var y=Qe,R=y.child;if((Qe.flags&16)!==0){var B=y.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var fe=B[Y];for(Qe=fe;Qe!==null;){var ye=Qe;switch(ye.tag){case 0:case 11:case 15:ou(8,ye,y)}var Te=ye.child;if(Te!==null)Te.return=ye,Qe=Te;else for(;Qe!==null;){ye=Qe;var Se=ye.sibling,Ke=ye.return;if(Z_(ye),ye===fe){Qe=null;break}if(Se!==null){Se.return=Ke,Qe=Se;break}Qe=Ke}}}var et=y.alternate;if(et!==null){var nt=et.child;if(nt!==null){et.child=null;do{var bn=nt.sibling;nt.sibling=null,nt=bn}while(nt!==null)}}Qe=y}}if((y.subtreeFlags&2064)!==0&&R!==null)R.return=y,Qe=R;else e:for(;Qe!==null;){if(y=Qe,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ou(9,y,y.return)}var ie=y.sibling;if(ie!==null){ie.return=y.return,Qe=ie;break e}Qe=y.return}}var K=i.current;for(Qe=K;Qe!==null;){R=Qe;var ae=R.child;if((R.subtreeFlags&2064)!==0&&ae!==null)ae.return=R,Qe=ae;else e:for(R=K;Qe!==null;){if(B=Qe,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:jc(9,B)}}catch(it){An(B,B.return,it)}if(B===R){Qe=null;break e}var De=B.sibling;if(De!==null){De.return=B.return,Qe=De;break e}Qe=B.return}}if(Xt=g,$s(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(Be,i)}catch{}f=!0}return f}finally{Et=l,_r.transition=s}}return!1}function hv(i,s,l){s=Fa(l,s),s=N_(i,s,1),i=Zs(i,s,1),s=Mi(),i!==null&&(kn(i,1,s),Ui(i,s))}function An(i,s,l){if(i.tag===3)hv(i,i,l);else for(;s!==null;){if(s.tag===3){hv(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Js===null||!Js.has(f))){i=Fa(l,i),i=D_(s,i,1),s=Zs(s,i,1),i=Mi(),s!==null&&(kn(s,1,i),Ui(s,i));break}}s=s.return}}function XM(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Mi(),i.pingedLanes|=i.suspendedLanes&l,$n===i&&(ii&l)===l&&(zn===4||zn===3&&(ii&130023424)===ii&&500>Ct()-Wh?zo(i,0):Hh|=l),Ui(i,s)}function pv(i,s){s===0&&((i.mode&1)===0?s=1:(s=an,an<<=1,(an&130023424)===0&&(an=4194304)));var l=Mi();i=ps(i,s),i!==null&&(kn(i,s,l),Ui(i,l))}function jM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),pv(i,l)}function YM(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),pv(i,l)}var mv;mv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Ni.current)Li=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Li=!1,IM(i,s,l);Li=(i.flags&131072)!==0}else Li=!1,mn&&(s.flags&1048576)!==0&&q0(s,bc,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Wc(i,s),i=s.pendingProps;var g=ba(s,ci.current);Ua(s,l),g=yh(null,s,f,i,g,l);var y=Eh();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Di(f)?(y=!0,Ac(s)):y=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,ph(s),g.updater=Gc,s.stateNode=g,g._reactInternals=s,Rh(s,f,i,l),s=Dh(null,s,f,!0,y,l)):(s.tag=0,mn&&y&&rh(s),Ei(null,s,g,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Wc(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=$M(f),i=Ir(f,i),g){case 0:s=Nh(null,s,f,i,l);break e;case 1:s=V_(null,s,f,i,l);break e;case 11:s=O_(null,s,f,i,l);break e;case 14:s=F_(null,s,f,Ir(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Ir(f,g),Nh(i,s,f,g,l);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Ir(f,g),V_(i,s,f,g,l);case 3:e:{if(G_(s),i===null)throw Error(t(387));f=s.pendingProps,y=s.memoizedState,g=y.element,i_(i,s),Uc(s,f,null,l);var R=s.memoizedState;if(f=R.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){g=Fa(Error(t(423)),s),s=H_(i,s,f,l,g);break e}else if(f!==g){g=Fa(Error(t(424)),s),s=H_(i,s,f,l,g);break e}else for(qi=js(s.stateNode.containerInfo.firstChild),Yi=s,mn=!0,Lr=null,l=t_(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Da(),f===g){s=gs(i,s,l);break e}Ei(i,s,f,l)}s=s.child}return s;case 5:return o_(s),i===null&&ah(s),f=s.type,g=s.pendingProps,y=i!==null?i.memoizedProps:null,R=g.children,Qd(f,g)?R=null:y!==null&&Qd(f,y)&&(s.flags|=32),z_(i,s),Ei(i,s,R,l),s.child;case 6:return i===null&&ah(s),null;case 13:return W_(i,s,l);case 4:return mh(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=La(s,null,f,l):Ei(i,s,f,l),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Ir(f,g),O_(i,s,f,g,l);case 7:return Ei(i,s,s.pendingProps,l),s.child;case 8:return Ei(i,s,s.pendingProps.children,l),s.child;case 12:return Ei(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,y=s.memoizedProps,R=g.value,fn(Dc,f._currentValue),f._currentValue=R,y!==null)if(Dr(y.value,R)){if(y.children===g.children&&!Ni.current){s=gs(i,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var B=y.dependencies;if(B!==null){R=y.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===f){if(y.tag===1){Y=ms(-1,l&-l),Y.tag=2;var fe=y.updateQueue;if(fe!==null){fe=fe.shared;var ye=fe.pending;ye===null?Y.next=Y:(Y.next=ye.next,ye.next=Y),fe.pending=Y}}y.lanes|=l,Y=y.alternate,Y!==null&&(Y.lanes|=l),dh(y.return,l,s),B.lanes|=l;break}Y=Y.next}}else if(y.tag===10)R=y.type===s.type?null:y.child;else if(y.tag===18){if(R=y.return,R===null)throw Error(t(341));R.lanes|=l,B=R.alternate,B!==null&&(B.lanes|=l),dh(R,l,s),R=y.sibling}else R=y.child;if(R!==null)R.return=y;else for(R=y;R!==null;){if(R===s){R=null;break}if(y=R.sibling,y!==null){y.return=R.return,R=y;break}R=R.return}y=R}Ei(i,s,g.children,l),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,Ua(s,l),g=mr(g),f=f(g),s.flags|=1,Ei(i,s,f,l),s.child;case 14:return f=s.type,g=Ir(f,s.pendingProps),g=Ir(f.type,g),F_(i,s,f,g,l);case 15:return k_(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Ir(f,g),Wc(i,s),s.tag=1,Di(f)?(i=!0,Ac(s)):i=!1,Ua(s,l),b_(s,f,g),Rh(s,f,g,l),Dh(null,s,f,!0,i,l);case 19:return j_(i,s,l);case 22:return B_(i,s,l)}throw Error(t(156,s.tag))};function gv(i,s){return wn(i,s)}function qM(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(i,s,l,f){return new qM(i,s,l,f)}function Qh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function $M(i){if(typeof i=="function")return Qh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===J)return 14}return 2}function io(i,s){var l=i.alternate;return l===null?(l=vr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function tf(i,s,l,f,g,y){var R=2;if(f=i,typeof i=="function")Qh(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case L:return Go(l.children,g,y,s);case z:R=8,g|=8;break;case T:return i=vr(12,l,s,g|2),i.elementType=T,i.lanes=y,i;case Q:return i=vr(13,l,s,g),i.elementType=Q,i.lanes=y,i;case ne:return i=vr(19,l,s,g),i.elementType=ne,i.lanes=y,i;case X:return nf(l,g,y,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:R=10;break e;case V:R=9;break e;case j:R=11;break e;case J:R=14;break e;case $:R=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=vr(R,l,s,g),s.elementType=i,s.type=f,s.lanes=y,s}function Go(i,s,l,f){return i=vr(7,i,f,s),i.lanes=l,i}function nf(i,s,l,f){return i=vr(22,i,f,s),i.elementType=X,i.lanes=l,i.stateNode={isHidden:!1},i}function Jh(i,s,l){return i=vr(6,i,null,s),i.lanes=l,i}function ep(i,s,l){return s=vr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function KM(i,s,l,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function tp(i,s,l,f,g,y,R,B,Y){return i=new KM(i,s,l,B,Y),s===1?(s=1,y===!0&&(s|=8)):s=0,y=vr(3,null,null,s),i.current=y,y.stateNode=i,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ph(y),i}function ZM(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function _v(i){if(!i)return qs;i=i._reactInternals;e:{if(At(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Di(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Di(l))return X0(i,l,s)}return s}function vv(i,s,l,f,g,y,R,B,Y){return i=tp(l,f,!0,i,g,y,R,B,Y),i.context=_v(null),l=i.current,f=Mi(),g=to(l),y=ms(f,g),y.callback=s??null,Zs(l,y,g),i.current.lanes=g,kn(i,g,f),Ui(i,f),i}function rf(i,s,l,f){var g=s.current,y=Mi(),R=to(g);return l=_v(l),s.context===null?s.context=l:s.pendingContext=l,s=ms(y,R),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Zs(g,s,R),i!==null&&(Fr(i,g,R,y),Ic(i,g,R)),R}function sf(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function xv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function np(i,s){xv(i,s),(i=i.alternate)&&xv(i,s)}function QM(){return null}var Sv=typeof reportError=="function"?reportError:function(i){console.error(i)};function ip(i){this._internalRoot=i}of.prototype.render=ip.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));rf(i,s,null,null)},of.prototype.unmount=ip.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Bo(function(){rf(null,i,null,null)}),s[cs]=null}};function of(i){this._internalRoot=i}of.prototype.unstable_scheduleHydration=function(i){if(i){var s=jr();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Hs.length&&s!==0&&s<Hs[l].priority;l++);Hs.splice(l,0,i),l===0&&o0(i)}};function rp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function af(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function yv(){}function JM(i,s,l,f,g){if(g){if(typeof f=="function"){var y=f;f=function(){var fe=sf(R);y.call(fe)}}var R=vv(s,f,i,0,null,!1,!1,"",yv);return i._reactRootContainer=R,i[cs]=R.current,Yl(i.nodeType===8?i.parentNode:i),Bo(),R}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var B=f;f=function(){var fe=sf(Y);B.call(fe)}}var Y=tp(i,0,!1,null,null,!1,!1,"",yv);return i._reactRootContainer=Y,i[cs]=Y.current,Yl(i.nodeType===8?i.parentNode:i),Bo(function(){rf(s,Y,l,f)}),Y}function lf(i,s,l,f,g){var y=l._reactRootContainer;if(y){var R=y;if(typeof g=="function"){var B=g;g=function(){var Y=sf(R);B.call(Y)}}rf(s,R,i,g)}else R=JM(l,s,i,g,f);return sf(R)}jn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=rn(s.pendingLanes);l!==0&&(Qt(s,l|1),Ui(s,Ct()),(Xt&6)===0&&(za=Ct()+500,$s()))}break;case 13:Bo(function(){var f=ps(i,1);if(f!==null){var g=Mi();Fr(f,i,1,g)}}),np(i,1)}},Yn=function(i){if(i.tag===13){var s=ps(i,134217728);if(s!==null){var l=Mi();Fr(s,i,134217728,l)}np(i,134217728)}},xa=function(i){if(i.tag===13){var s=to(i),l=ps(i,s);if(l!==null){var f=Mi();Fr(l,i,s,f)}np(i,s)}},jr=function(){return Et},r0=function(i,s){var l=Et;try{return Et=i,s()}finally{Et=l}},Ie=function(i,s,l){switch(s){case"input":if(oe(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var g=Tc(f);if(!g)throw Error(t(90));Ut(f),oe(f,g)}}}break;case"textarea":w(i,l);break;case"select":s=l.value,s!=null&&at(i,!!l.multiple,s,!1)}},st=$h,kt=Bo;var e1={usingClientEntryPoint:!1,Events:[Kl,Ca,Tc,ge,Pe,$h]},cu={findFiberByHostInstance:No,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:cu.bundleType,version:cu.version,rendererPackageName:cu.rendererPackageName,rendererConfig:cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=li(i),i===null?null:i.stateNode},findFiberByHostInstance:cu.findFiberByHostInstance||QM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uf.isDisabled&&uf.supportsFiber)try{Be=uf.inject(t1),Ne=uf}catch{}}return Oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1,Oi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(s))throw Error(t(200));return ZM(i,s,null,l)},Oi.createRoot=function(i,s){if(!rp(i))throw Error(t(299));var l=!1,f="",g=Sv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=tp(i,1,!1,null,null,l,!1,f,g),i[cs]=s.current,Yl(i.nodeType===8?i.parentNode:i),new ip(s)},Oi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=li(s),i=i===null?null:i.stateNode,i},Oi.flushSync=function(i){return Bo(i)},Oi.hydrate=function(i,s,l){if(!af(s))throw Error(t(200));return lf(null,i,s,!0,l)},Oi.hydrateRoot=function(i,s,l){if(!rp(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,y="",R=Sv;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),s=vv(s,null,i,1,l??null,g,!1,y,R),i[cs]=s.current,Yl(i),f)for(i=0;i<f.length;i++)l=f[i],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new of(s)},Oi.render=function(i,s,l){if(!af(s))throw Error(t(200));return lf(null,i,s,!1,l)},Oi.unmountComponentAtNode=function(i){if(!af(i))throw Error(t(40));return i._reactRootContainer?(Bo(function(){lf(null,null,i,!1,function(){i._reactRootContainer=null,i[cs]=null})}),!0):!1},Oi.unstable_batchedUpdates=$h,Oi.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!af(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return lf(i,s,l,!1,f)},Oi.version="18.3.1-next-f1338f8080-20240426",Oi}var bv;function f1(){if(bv)return ap.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ap.exports=c1(),ap.exports}var Pv;function d1(){if(Pv)return cf;Pv=1;var o=f1();return cf.createRoot=o.createRoot,cf.hydrateRoot=o.hydrateRoot,cf}var h1=d1();function Ms(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function yS(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}var lr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hu={duration:.5,overwrite:!1,delay:0},Sg,oi,gn,wr=1e8,un=1/wr,tm=Math.PI*2,p1=tm/4,m1=0,ES=Math.sqrt,g1=Math.cos,_1=Math.sin,ei=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="function"},Ls=function(e){return typeof e=="number"},yg=function(e){return typeof e>"u"},ls=function(e){return typeof e=="object"},zi=function(e){return e!==!1},Eg=function(){return typeof window<"u"},ff=function(e){return Cn(e)||ei(e)},MS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Si=Array.isArray,v1=/random\([^)]+\)/g,x1=/,\s*/g,Nv=/(?:-?\.?\d|\.)+/gi,TS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ll=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wS=/[+-]=-?[.\d]+/,S1=/[^,'"\[\]\s]+/gi,y1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Sn,Qr,nm,Mg,cr={},ad={},AS,CS=function(e){return(ad=Sl(e,cr))&&Xi},Tg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wu=function(e,t){return!t&&console.warn(e)},RS=function(e,t){return e&&(cr[e]=t)&&ad&&(ad[e]=t)||cr},Xu=function(){return 0},E1={suppressEvents:!0,isStart:!0,kill:!1},jf={suppressEvents:!0,kill:!1},M1={suppressEvents:!0},wg={},yo=[],im={},bS,er={},fp={},Dv=30,Yf=[],Ag="",Cg=function(e){var t=e[0],n,r;if(ls(t)||Cn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Yf.length;r--&&!Yf[r].targetTest(t););n=Yf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ZS(e[r],n)))||e.splice(r,1);return e},aa=function(e){return e._gsap||Cg(Ar(e))[0]._gsap},PS=function(e,t,n){return(n=e[t])&&Cn(n)?e[t]():yg(n)&&e.getAttribute&&e.getAttribute(t)||n},Vi=function(e,t){return(e=e.split(",")).forEach(t)||e},Pn=function(e){return Math.round(e*1e5)/1e5||0},xn=function(e){return Math.round(e*1e7)/1e7||0},fl=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},T1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ld=function(){var e=yo.length,t=yo.slice(0),n,r;for(im={},yo.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Rg=function(e){return!!(e._initted||e._startAt||e.add)},NS=function(e,t,n,r){yo.length&&!oi&&ld(),e.render(t,n,!!(oi&&t<0&&Rg(e))),yo.length&&!oi&&ld()},DS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(S1).length<2?t:ei(e)?e.trim():e},LS=function(e){return e},fr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},w1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Sl=function(e,t){for(var n in t)e[n]=t[n];return e},Lv=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ls(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ud=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Nu=function(e){var t=e.parent||Sn,n=e.keyframes?w1(Si(e.keyframes)):fr;if(zi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},A1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},IS=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},yd=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},To=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},la=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},C1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rm=function(e,t,n,r){return e._startAt&&(oi?e._startAt.revert(jf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},R1=function o(e){return!e||e._ts&&o(e.parent)},Iv=function(e){return e._repeat?yl(e._tTime,e=e.duration()+e._rDelay)*e:0},yl=function(e,t){var n=Math.floor(e=xn(e/t));return e&&n===e?n-1:n},cd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ed=function(e){return e._end=xn(e._start+(e._tDur/Math.abs(e._ts||e._rts||un)||0))},Md=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ed(e),n._dirty||la(n,e)),e},US=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=cd(e.rawTime(),t),(!t._dur||ic(0,t.totalDuration(),n)-t._tTime>un)&&t.render(n,!0)),la(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-un}},ts=function(e,t,n,r){return t.parent&&To(t),t._start=xn((Ls(n)?n:n||e!==Sn?Sr(e,n,t):e._time)+t._delay),t._end=xn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),IS(e,t,"_first","_last",e._sort?"_start":0),sm(t)||(e._recent=t),r||US(e,t),e._ts<0&&Md(e,e._tTime),e},OS=function(e,t){return(cr.ScrollTrigger||Tg("scrollTrigger",t))&&cr.ScrollTrigger.create(t,e)},FS=function(e,t,n,r,a){if(Pg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!oi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bS!==nr.frame)return yo.push(e),e._lazy=[a,r],1},b1=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},sm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},P1=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&b1(e)&&!(!e._initted&&sm(e))||(e._ts<0||e._dp._ts<0)&&!sm(e))?0:1,c=e._rDelay,d=0,h,p,m;if(c&&e._repeat&&(d=ic(0,e._tDur,t),p=yl(d,c),e._yoyo&&p&1&&(u=1-u),p!==yl(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||oi||r||e._zTime===un||!t&&e._zTime){if(!e._initted&&FS(e,t,r,n,d))return;for(m=e._zTime,e._zTime=t||(n?un:0),n||(n=t&&!m),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&rm(e,t,n,!0),e._onUpdate&&!n&&sr(e,"onUpdate"),d&&e._repeat&&!n&&e.parent&&sr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&To(e,1),!n&&!oi&&(sr(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},N1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},El=function(e,t,n,r){var a=e._repeat,u=xn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:xn(u*(a+1)+e._rDelay*a):u,c>0&&!r&&Md(e,e._tTime=e._tDur*c),e.parent&&Ed(e),n||la(e.parent,e),e},Uv=function(e){return e instanceof Bi?la(e):El(e,e._dur)},D1={_start:0,endTime:Xu,totalDuration:Xu},Sr=function o(e,t,n){var r=e.labels,a=e._recent||D1,u=e.duration()>=wr?a.endTime(!1):e._dur,c,d,h;return ei(t)&&(isNaN(t)||t in r)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(d=d/100*(Si(n)?n[0]:n).totalDuration()),c>1?o(e,t.substr(0,c-1),n)+d:u+d)):t==null?u:+t},Du=function(e,t,n){var r=Ls(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,d;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,d=n;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=zi(d.vars.inherit)&&d.parent;u.immediateRender=zi(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new On(t[0],u,t[a+1])},bo=function(e,t){return e||e===0?t(e):t},ic=function(e,t,n){return n<e?e:n>t?t:n},vi=function(e,t){return!ei(e)||!(t=y1.exec(e))?"":t[1]},L1=function(e,t,n){return bo(n,function(r){return ic(e,t,r)})},om=[].slice,kS=function(e,t){return e&&ls(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ls(e[0]))&&!e.nodeType&&e!==Qr},I1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return ei(r)&&!t||kS(r,1)?(a=n).push.apply(a,Ar(r)):n.push(r)})||n},Ar=function(e,t,n){return gn&&!t&&gn.selector?gn.selector(e):ei(e)&&!n&&(nm||!Ml())?om.call((t||Mg).querySelectorAll(e),0):Si(e)?I1(e,n):kS(e)?om.call(e,0):e?[e]:[]},am=function(e){return e=Ar(e)[0]||Wu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ar(t,n.querySelectorAll?n:n===e?Wu("Invalid scope")||Mg.createElement("div"):e)}},BS=function(e){return e.sort(function(){return .5-Math.random()})},zS=function(e){if(Cn(e))return e;var t=ls(e)?e:{each:e},n=ua(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,d=isNaN(r)||c,h=t.axis,p=r,m=r;return ei(r)?p=m={center:.5,edges:.5,end:1}[r]||0:!c&&d&&(p=r[0],m=r[1]),function(_,v,M){var E=(M||t).length,x=u[E],S,b,P,A,N,U,L,z,T;if(!x){if(T=t.grid==="auto"?0:(t.grid||[1,wr])[1],!T){for(L=-wr;L<(L=M[T++].getBoundingClientRect().left)&&T<E;);T<E&&T--}for(x=u[E]=[],S=d?Math.min(T,E)*p-.5:r%T,b=T===wr?0:d?E*m/T-.5:r/T|0,L=0,z=wr,U=0;U<E;U++)P=U%T-S,A=b-(U/T|0),x[U]=N=h?Math.abs(h==="y"?A:P):ES(P*P+A*A),N>L&&(L=N),N<z&&(z=N);r==="random"&&BS(x),x.max=L-z,x.min=z,x.v=E=(parseFloat(t.amount)||parseFloat(t.each)*(T>E?E-1:h?h==="y"?E/T:T:Math.max(T,E/T))||0)*(r==="edges"?-1:1),x.b=E<0?a-E:a,x.u=vi(t.amount||t.each)||0,n=n&&E<0?Y1(n):n}return E=(x[_]-x.min)/x.max||0,xn(x.b+(n?n(E):E)*x.v)+x.u}},lm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=xn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ls(n)?0:vi(n))}},VS=function(e,t){var n=Si(e),r,a;return!n&&ls(e)&&(r=n=e.radius||wr,e.values?(e=Ar(e.values),(a=!Ls(e[0]))&&(r*=r)):e=lm(e.increment)),bo(t,n?Cn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=wr,p=0,m=e.length,_,v;m--;)a?(_=e[m].x-c,v=e[m].y-d,_=_*_+v*v):_=Math.abs(e[m]-c),_<h&&(h=_,p=m);return p=!r||h<=r?e[p]:u,a||p===u||Ls(u)?p:p+vi(u)}:lm(e))},GS=function(e,t,n,r){return bo(Si(e)?!t:n===!0?!!(n=0):!r,function(){return Si(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},U1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},O1=function(e,t){return function(n){return e(parseFloat(n))+(t||vi(n))}},F1=function(e,t,n){return WS(e,t,0,1,n)},HS=function(e,t,n){return bo(n,function(r){return e[~~t(r)]})},k1=function o(e,t,n){var r=t-e;return Si(e)?HS(e,o(0,e.length),t):bo(n,function(a){return(r+(a-e)%r)%r+e})},B1=function o(e,t,n){var r=t-e,a=r*2;return Si(e)?HS(e,o(0,e.length-1),t):bo(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},ju=function(e){return e.replace(v1,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(x1);return GS(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},WS=function(e,t,n,r,a){var u=t-e,c=r-n;return bo(a,function(d){return n+((d-e)/u*c||0)})},z1=function o(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var u=ei(e),c={},d,h,p,m,_;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(Si(e)&&!Si(t)){for(p=[],m=e.length,_=m-2,h=1;h<m;h++)p.push(o(e[h-1],e[h]));m--,a=function(M){M*=m;var E=Math.min(_,~~M);return p[E](M-E)},n=t}else r||(e=Sl(Si(e)?[]:{},e));if(!p){for(d in t)bg.call(c,e,d,"get",t[d]);a=function(M){return Lg(M,c)||(u?e.p:e)}}}return bo(n,a)},Ov=function(e,t,n){var r=e.labels,a=wr,u,c,d;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},sr=function(e,t,n){var r=e.vars,a=r[t],u=gn,c=e._ctx,d,h,p;if(a)return d=r[t+"Params"],h=r.callbackScope||e,n&&yo.length&&ld(),c&&(gn=c),p=d?a.apply(h,d):a.call(h),gn=u,p},Eu=function(e){return To(e),e.scrollTrigger&&e.scrollTrigger.kill(!!oi),e.progress()<1&&sr(e,"onInterrupt"),e},ul,XS=[],jS=function(e){if(e)if(e=!e.name&&e.default||e,Eg()||e.headless){var t=e.name,n=Cn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Xu,render:Lg,add:bg,kill:iT,modifier:nT,rawVars:0},u={targetTest:0,get:0,getSetter:Dg,aliases:{},register:0};if(Ml(),e!==r){if(er[t])return;fr(r,fr(ud(e,a),u)),Sl(r.prototype,Sl(a,ud(e,u))),er[r.prop=t]=r,e.targetTest&&(Yf.push(r),wg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}RS(t,r),e.register&&e.register(Xi,r,Gi)}else XS.push(e)},ln=255,Mu={aqua:[0,ln,ln],lime:[0,ln,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ln],navy:[0,0,128],white:[ln,ln,ln],olive:[128,128,0],yellow:[ln,ln,0],orange:[ln,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ln,0,0],pink:[ln,192,203],cyan:[0,ln,ln],transparent:[ln,ln,ln,0]},dp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ln+.5|0},YS=function(e,t,n){var r=e?Ls(e)?[e>>16,e>>8&ln,e&ln]:0:Mu.black,a,u,c,d,h,p,m,_,v,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mu[e])r=Mu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ln,r&ln,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ln,e&ln]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(Nv),!t)d=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=dp(d+1/3,a,u),r[1]=dp(d,a,u),r[2]=dp(d-1/3,a,u);else if(~e.indexOf("="))return r=e.match(TS),n&&r.length<4&&(r[3]=1),r}else r=e.match(Nv)||Mu.transparent;r=r.map(Number)}return t&&!M&&(a=r[0]/ln,u=r[1]/ln,c=r[2]/ln,m=Math.max(a,u,c),_=Math.min(a,u,c),p=(m+_)/2,m===_?d=h=0:(v=m-_,h=p>.5?v/(2-m-_):v/(m+_),d=m===a?(u-c)/v+(u<c?6:0):m===u?(c-a)/v+2:(a-u)/v+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},qS=function(e){var t=[],n=[],r=-1;return e.split(Eo).forEach(function(a){var u=a.match(ll)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},Fv=function(e,t,n){var r="",a=(e+r).match(Eo),u=t?"hsla(":"rgba(",c=0,d,h,p,m;if(!a)return e;if(a=a.map(function(_){return(_=YS(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(p=qS(e),d=n.c,d.join(r)!==p.c.join(r)))for(h=e.replace(Eo,"1").split(ll),m=h.length-1;c<m;c++)r+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(Eo),m=h.length-1;c<m;c++)r+=h[c]+a[c];return r+h[m]},Eo=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mu)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),V1=/hsl[a]?\(/,$S=function(e){var t=e.join(" "),n;if(Eo.lastIndex=0,Eo.test(t))return n=V1.test(t),e[1]=Fv(e[1],n),e[0]=Fv(e[0],n,qS(e[1])),!0},Yu,nr=(function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,u=a,c=[],d,h,p,m,_,v,M=function E(x){var S=o()-r,b=x===!0,P,A,N,U;if((S>e||S<0)&&(n+=S-t),r+=S,N=r-n,P=N-u,(P>0||b)&&(U=++m.frame,_=N-m.time*1e3,m.time=N=N/1e3,u+=P+(P>=a?4:a-P),A=1),b||(d=h(E)),A)for(v=0;v<c.length;v++)c[v](N,_,U,x)};return m={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return _/(1e3/(x||60))},wake:function(){AS&&(!nm&&Eg()&&(Qr=nm=window,Mg=Qr.document||{},cr.gsap=Xi,(Qr.gsapVersions||(Qr.gsapVersions=[])).push(Xi.version),CS(ad||Qr.GreenSockGlobals||!Qr.gsap&&Qr||{}),XS.forEach(jS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&m.sleep(),h=p||function(x){return setTimeout(x,u-m.time*1e3+1|0)},Yu=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),Yu=0,h=Xu},lagSmoothing:function(x,S){e=x||1/0,t=Math.min(S||33,e)},fps:function(x){a=1e3/(x||240),u=m.time*1e3+a},add:function(x,S,b){var P=S?function(A,N,U,L){x(A,N,U,L),m.remove(P)}:x;return m.remove(x),c[b?"unshift":"push"](P),Ml(),P},remove:function(x,S){~(S=c.indexOf(x))&&c.splice(S,1)&&v>=S&&v--},_listeners:c},m})(),Ml=function(){return!Yu&&nr.wake()},zt={},G1=/^[\d.\-M][\d.\-,\s]/,H1=/["']/g,W1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,d,h;a<u;a++)d=n[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[r]=isNaN(h)?h.replace(H1,"").trim():+h,r=d.substr(c+1).trim();return t},X1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},j1=function(e){var t=(e+"").split("("),n=zt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[W1(t[1])]:X1(e).split(",").map(DS)):zt._CE&&G1.test(e)?zt._CE("",e):n},Y1=function(e){return function(t){return 1-e(1-t)}},ua=function(e,t){return e&&(Cn(e)?e:zt[e]||j1(e))||t},va=function(e,t,n,r){n===void 0&&(n=function(d){return 1-t(1-d)}),r===void 0&&(r=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return Vi(e,function(c){zt[c]=cr[c]=a,zt[u=c.toLowerCase()]=n;for(var d in a)zt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=zt[c+"."+d]=a[d]}),a},KS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hp=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/tm*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*_1((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:KS(c);return a=tm/a,d.config=function(h,p){return o(e,h,p)},d},pp=function o(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:KS(n);return r.config=function(a){return o(e,a)},r};Vi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;va(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;va("Elastic",hp("in"),hp("out"),hp());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?o*c*c:c<n?o*Math.pow(c-1.5/e,2)+.75:c<r?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};va("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);va("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});va("Circ",function(o){return-(ES(1-o*o)-1)});va("Sine",function(o){return o===1?1:-g1(o*p1)+1});va("Back",pp("in"),pp("out"),pp());zt.SteppedEase=zt.steps=cr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-un;return function(c){return((r*ic(0,u,c)|0)+a)*n}}};Hu.ease=zt["quad.out"];Vi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ag+=o+","+o+"Params,"});var ZS=function(e,t){this.id=m1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:PS,this.set=t?t.getSetter:Dg},qu=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,El(this,+t.duration,1,1),this.data=t.data,gn&&(this._ctx=gn,gn.data.push(this)),Yu||nr.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,El(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ml(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Md(this,n),!a._dp||a.parent||US(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ts(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===un||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),NS(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Iv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Iv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?yl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-un?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?cd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-un?0:this._rts,this.totalTime(ic(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Ed(this),C1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ml(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==un&&(this._tTime-=un)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=xn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ts(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cd(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=M1);var r=oi;return oi=n,Rg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),oi=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Uv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Uv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Sr(this,n),zi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,zi(r)),this._dur||(this._zTime=-un),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-un:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-un,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-un)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(u){var c=Cn(n)?n:LS,d=function(){var p=r.then;r.then=null,a&&a(),Cn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),u(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?d():r._prom=d})},e.kill=function(){Eu(this)},o})();fr(qu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-un,_prom:0,_ps:!1,_rts:1});var Bi=(function(o){yS(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=zi(n.sortChildren),Sn&&ts(n.parent||Sn,Ms(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&OS(Ms(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return Du(0,arguments,this),this},t.from=function(r,a,u){return Du(1,arguments,this),this},t.fromTo=function(r,a,u,c){return Du(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,Nu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new On(r,a,Sr(this,u),1),this},t.call=function(r,a,u){return ts(this,On.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new On(r,u,Sr(this,d)),this},t.staggerFrom=function(r,a,u,c,d,h,p){return u.runBackwards=1,Nu(u).immediateRender=zi(u.immediateRender),this.staggerTo(r,a,u,c,d,h,p)},t.staggerFromTo=function(r,a,u,c,d,h,p,m){return c.startAt=u,Nu(c).immediateRender=zi(c.immediateRender),this.staggerTo(r,a,c,d,h,p,m)},t.render=function(r,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:xn(r),m=this._zTime<0!=r<0&&(this._initted||!h),_,v,M,E,x,S,b,P,A,N,U,L;if(this!==Sn&&p>d&&r>=0&&(p=d),p!==this._tTime||u||m){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),_=p,A=this._start,P=this._ts,S=!P,m&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,x=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,u);if(_=xn(p%x),p===d?(E=this._repeat,_=h):(N=xn(p/x),E=~~N,E&&E===N&&(_=h,E--),_>h&&(_=h)),N=yl(this._tTime,x),!c&&this._tTime&&N!==E&&this._tTime-N*x-this._dur<=0&&(N=E),U&&E&1&&(_=h-_,L=1),E!==N&&!this._lock){var z=U&&N&1,T=z===(U&&E&1);if(E<N&&(z=!z),c=z?0:p%h?h:p,this._lock=1,this.render(c||(L?0:xn(E*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&sr(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,N=E),c&&c!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,T&&(this._lock=2,c=z?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=N1(this,xn(c),xn(_)),b&&(p-=_-(_=b._start))),this._tTime=p,this._time=_,this._act=!!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&h&&!a&&!N&&(sr(this,"onStart"),this._tTime!==p))return this;if(_>=c&&r>=0)for(v=this._first;v;){if(M=v._next,(v._act||_>=v._start)&&v._ts&&b!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(_-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(_-v._start)*v._ts,a,u),_!==this._time||!this._ts&&!S){b=0,M&&(p+=this._zTime=-un);break}}v=M}else{v=this._last;for(var C=r<0?r:_;v;){if(M=v._prev,(v._act||C<=v._end)&&v._ts&&b!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(C-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(C-v._start)*v._ts,a,u||oi&&Rg(v)),_!==this._time||!this._ts&&!S){b=0,M&&(p+=this._zTime=C?-un:un);break}}v=M}}if(b&&!a&&(this.pause(),b.render(_>=c?0:-un)._zTime=_>=c?1:-1,this._ts))return this._start=A,Ed(this),this.render(r,a,u);this._onUpdate&&!a&&sr(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(A===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&To(this,1),!a&&!(r<0&&!c)&&(p||c||!d)&&(sr(this,p===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(Ls(a)||(a=Sr(this,a,r)),!(r instanceof qu)){if(Si(r))return r.forEach(function(c){return u.add(c,a)}),this;if(ei(r))return this.addLabel(r,a);if(Cn(r))r=On.delayedCall(0,r);else return this}return this!==r?ts(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-wr);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof On?a&&d.push(h):(u&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return ei(r)?this.removeLabel(r):Cn(r)?this.killTweensOf(r):(r.parent===this&&yd(this,r),r===this._recent&&(this._recent=this._last),la(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xn(nr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=Sr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=On.delayedCall(0,a||Xu,u);return c.data="isPause",this._hasPause=1,ts(this,c,Sr(this,r))},t.removePause=function(r){var a=this._first;for(r=Sr(this,r);a;)a._start===r&&a.data==="isPause"&&To(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),d=c.length;d--;)mo!==c[d]&&c[d].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=Ar(r),d=this._first,h=Ls(a),p;d;)d instanceof On?T1(d._targets,c)&&(h?(!mo||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=Sr(u,r),d=a,h=d.startAt,p=d.onStart,m=d.onStartParams,_=d.immediateRender,v,M=On.to(u,fr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||un,onStart:function(){if(u.pause(),!v){var x=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());M._dur!==x&&El(M,x,0,1).render(M._time,!0,!0),v=1}p&&p.apply(M,m||[])}},a));return _?M.render(0):M},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,fr({startAt:{time:Sr(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ov(this,Sr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ov(this,Sr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+un)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(r=xn(r);c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=r);return la(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),la(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,d=wr,h,p,m;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(m=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,ts(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!m&&!u._dp||m&&m.smoothChildTiming)&&(u._start+=xn(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;El(u,u===Sn&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(Sn._ts&&(NS(Sn,cd(r,Sn)),bS=nr.frame),nr.frame>=Dv){Dv+=lr.autoSleep||120;var a=Sn._first;if((!a||!a._ts)&&lr.autoSleep&&nr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||nr.sleep()}}},e})(qu);fr(Bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var q1=function(e,t,n,r,a,u,c){var d=new Gi(this._pt,e,t,0,1,iy,null,a),h=0,p=0,m,_,v,M,E,x,S,b;for(d.b=n,d.e=r,n+="",r+="",(S=~r.indexOf("random("))&&(r=ju(r)),u&&(b=[n,r],u(b,e,t),n=b[0],r=b[1]),_=n.match(cp)||[];m=cp.exec(r);)M=m[0],E=r.substring(h,m.index),v?v=(v+1)%5:E.substr(-5)==="rgba("&&(v=1),M!==_[p++]&&(x=parseFloat(_[p-1])||0,d._pt={_next:d._pt,p:E||p===1?E:",",s:x,c:M.charAt(1)==="="?fl(x,M)-x:parseFloat(M)-x,m:v&&v<4?Math.round:0},h=cp.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=c,(wS.test(r)||S)&&(d.e=0),this._pt=d,d},bg=function(e,t,n,r,a,u,c,d,h,p){Cn(r)&&(r=r(a||0,e,u));var m=e[t],_=n!=="get"?n:Cn(m)?h?e[t.indexOf("set")||!Cn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,v=Cn(m)?h?J1:ty:Ng,M;if(ei(r)&&(~r.indexOf("random(")&&(r=ju(r)),r.charAt(1)==="="&&(M=fl(_,r)+(vi(_)||0),(M||M===0)&&(r=M))),!p||_!==r||um)return!isNaN(_*r)&&r!==""?(M=new Gi(this._pt,e,t,+_||0,r-(_||0),typeof m=="boolean"?tT:ny,0,v),h&&(M.fp=h),c&&M.modifier(c,this,e),this._pt=M):(!m&&!(t in e)&&Tg(t,r),q1.call(this,e,t,_,r,v,d||lr.stringFilter,h))},$1=function(e,t,n,r,a){if(Cn(e)&&(e=Lu(e,a,t,n,r)),!ls(e)||e.style&&e.nodeType||Si(e)||MS(e))return ei(e)?Lu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=Lu(e[c],a,t,n,r);return u},QS=function(e,t,n,r,a,u){var c,d,h,p;if(er[e]&&(c=new er[e]).init(a,c.rawVars?t[e]:$1(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=d=new Gi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==ul))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},mo,um,Pg=function o(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,d=r.lazy,h=r.onUpdate,p=r.runBackwards,m=r.yoyoEase,_=r.keyframes,v=r.autoRevert,M=e._dur,E=e._startAt,x=e._targets,S=e.parent,b=S&&S.data==="nested"?S.vars.targets:x,P=e._overwrite==="auto"&&!Sg,A=e.timeline,N=r.easeReverse||m,U,L,z,T,C,V,j,Q,ne,J,$,X,H;if(A&&(!_||!a)&&(a="none"),e._ease=ua(a,Hu.ease),e._rEase=N&&(ua(N)||e._ease),e._from=!A&&!!r.runBackwards,e._from&&(e.ratio=1),!A||_&&!r.stagger){if(Q=x[0]?aa(x[0]).harness:0,X=Q&&r[Q.prop],U=ud(r,wg),E&&(E._zTime<0&&E.progress(1),t<0&&p&&c&&!v?E.render(-1,!0):E.revert(p&&M?jf:E1),E._lazy=0),u){if(To(e._startAt=On.set(x,fr({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!E&&zi(d),startAt:null,delay:0,onUpdate:h&&function(){return sr(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(oi||!c&&!v)&&e._startAt.revert(jf),c&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&M&&!E){if(t&&(c=!1),z=fr({overwrite:!1,data:"isFromStart",lazy:c&&!E&&zi(d),immediateRender:c,stagger:0,parent:S},U),X&&(z[Q.prop]=X),To(e._startAt=On.set(x,z)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(oi?e._startAt.revert(jf):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,un,un);else if(!t)return}for(e._pt=e._ptCache=0,d=M&&zi(d)||d&&!M,L=0;L<x.length;L++){if(C=x[L],j=C._gsap||Cg(x)[L]._gsap,e._ptLookup[L]=J={},im[j.id]&&yo.length&&ld(),$=b===x?L:b.indexOf(C),Q&&(ne=new Q).init(C,X||U,e,$,b)!==!1&&(e._pt=T=new Gi(e._pt,C,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(re){J[re]=T}),ne.priority&&(V=1)),!Q||X)for(z in U)er[z]&&(ne=QS(z,U,e,$,C,b))?ne.priority&&(V=1):J[z]=T=bg.call(e,C,z,"get",U[z],$,b,0,r.stringFilter);e._op&&e._op[L]&&e.kill(C,e._op[L]),P&&e._pt&&(mo=e,Sn.killTweensOf(C,J,e.globalTime(t)),H=!e.parent,mo=0),e._pt&&d&&(im[j.id]=1)}V&&ry(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!H,_&&t<=0&&A.render(wr,!0,!0)},K1=function(e,t,n,r,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,_,v;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,v=e._targets.length;v--;){if(p=_[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return um=1,e.vars[t]="+=0",Pg(e,c),um=0,d?Wu(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(v=h.length;v--;)m=h[v],p=m._pt||m,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,m.e&&(m.e=Pn(n)+vi(m.e)),m.b&&(m.b=p.s+vi(m.b))},Z1=function(e,t){var n=e[0]?aa(e[0]).harness:0,r=n&&n.aliases,a,u,c,d;if(!r)return t;a=Sl({},t);for(u in r)if(u in a)for(d=r[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},Q1=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(Si(t))c=n[e]||(n[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Lu=function(e,t,n,r,a){return Cn(e)?e.call(t,n,r,a):ei(e)&&~e.indexOf("random(")?ju(e):e},JS=Ag+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ey={};Vi(JS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ey[o]=1});var On=(function(o){yS(e,o);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=o.call(this,u?r:Nu(r))||this;var d=c.vars,h=d.duration,p=d.delay,m=d.immediateRender,_=d.stagger,v=d.overwrite,M=d.keyframes,E=d.defaults,x=d.scrollTrigger,S=r.parent||Sn,b=(Si(n)||MS(n)?Ls(n[0]):"length"in r)?[n]:Ar(n),P,A,N,U,L,z,T,C;if(c._targets=b.length?Cg(b):Wu("GSAP target "+n+" not found. https://gsap.com",!lr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,M||_||ff(h)||ff(p)){r=c.vars;var V=r.easeReverse||r.yoyoEase;if(P=c.timeline=new Bi({data:"nested",defaults:E||{},targets:S&&S.data==="nested"?S.vars.targets:b}),P.kill(),P.parent=P._dp=Ms(c),P._start=0,_||ff(h)||ff(p)){if(U=b.length,T=_&&zS(_),ls(_))for(L in _)~JS.indexOf(L)&&(C||(C={}),C[L]=_[L]);for(A=0;A<U;A++)N=ud(r,ey),N.stagger=0,V&&(N.easeReverse=V),C&&Sl(N,C),z=b[A],N.duration=+Lu(h,Ms(c),A,z,b),N.delay=(+Lu(p,Ms(c),A,z,b)||0)-c._delay,!_&&U===1&&N.delay&&(c._delay=p=N.delay,c._start+=p,N.delay=0),P.to(z,N,T?T(A,z,b):0),P._ease=zt.none;P.duration()?h=p=0:c.timeline=0}else if(M){Nu(fr(P.vars.defaults,{ease:"none"})),P._ease=ua(M.ease||r.ease||"none");var j=0,Q,ne,J;if(Si(M))M.forEach(function($){return P.to(b,$,">")}),P.duration();else{N={};for(L in M)L==="ease"||L==="easeEach"||Q1(L,M[L],N,M.easeEach);for(L in N)for(Q=N[L].sort(function($,X){return $.t-X.t}),j=0,A=0;A<Q.length;A++)ne=Q[A],J={ease:ne.e,duration:(ne.t-(A?Q[A-1].t:0))/100*h},J[L]=ne.v,P.to(b,J,j),j+=J.duration;P.duration()<h&&P.to({},{duration:h-P.duration()})}}h||c.duration(h=P.duration())}else c.timeline=0;return v===!0&&!Sg&&(mo=Ms(c),Sn.killTweensOf(b),mo=0),ts(S,Ms(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(m||!h&&!M&&c._start===xn(S._time)&&zi(m)&&R1(Ms(c))&&S.data!=="nested")&&(c._tTime=-un,c.render(Math.max(0,-p)||0)),x&&OS(Ms(c),x),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,d=this._tDur,h=this._dur,p=r<0,m=r>d-un&&!p?d:r<un?0:r,_,v,M,E,x,S,b,P;if(!h)P1(this,r,a,u);else if(m!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=m,P=this.timeline,this._repeat){if(E=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(E*100+r,a,u);if(_=xn(m%E),m===d?(M=this._repeat,_=h):(x=xn(m/E),M=~~x,M&&M===x?(_=h,M--):_>h&&(_=h)),S=this._yoyo&&M&1,S&&(_=h-_),x=yl(this._tTime,E),_===c&&!u&&this._initted&&M===x)return this._tTime=m,this;M!==x&&this.vars.repeatRefresh&&!S&&!this._lock&&_!==E&&this._initted&&(this._lock=u=1,this.render(xn(E*M),!0).invalidate()._lock=0)}if(!this._initted){if(FS(this,p?r:_,u,a,m))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&M!==x))return this;if(h!==this._dur)return this.render(r,a,u)}if(this._rEase){var A=_<c;if(A!==this._inv){var N=A?c:h-c;this._inv=A,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=N?(A?-1:1)/N:0,this._invScale=A?-this.ratio:1-this.ratio,this._invEase=A?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(_/h);if(this._from&&(this.ratio=b=1-b),this._tTime=m,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&m&&!a&&!x&&(sr(this,"onStart"),this._tTime!==m))return this;for(v=this._pt;v;)v.r(b,v.d),v=v._next;P&&P.render(r<0?r:P._dur*P._ease(_/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&rm(this,r,a,u),sr(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!a&&this.parent&&sr(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&rm(this,r,!0,!0),(r||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&To(this,1),!a&&!(p&&!c)&&(m||c||S)&&(sr(this,m===d?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,d){Yu||nr.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Pg(this,h),p=this._ease(h/this._dur),K1(this,r,a,u,c,p,h,d)?this.resetTo(r,a,u,c,1):(Md(this,0),this.parent||IS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Eu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!oi),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,mo&&mo.vars.overwrite!==!0)._first||Eu(this),this.parent&&u!==this.timeline.totalDuration()&&El(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=r?Ar(r):c,h=this._ptLookup,p=this._pt,m,_,v,M,E,x,S;if((!a||a==="all")&&A1(c,d))return a==="all"&&(this._pt=0),Eu(this);for(m=this._op=this._op||[],a!=="all"&&(ei(a)&&(E={},Vi(a,function(b){return E[b]=1}),a=E),a=Z1(c,a)),S=c.length;S--;)if(~d.indexOf(c[S])){_=h[S],a==="all"?(m[S]=a,M=_,v={}):(v=m[S]=m[S]||{},M=a);for(E in M)x=_&&_[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&yd(this,x,"_pt"),delete _[E]),v!=="all"&&(v[E]=1)}return this._initted&&!this._pt&&p&&Eu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Du(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return Du(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return Sn.killTweensOf(r,a,u)},e})(qu);fr(On.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vi("staggerTo,staggerFrom,staggerFromTo",function(o){On[o]=function(){var e=new Bi,t=om.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Ng=function(e,t,n){return e[t]=n},ty=function(e,t,n){return e[t](n)},J1=function(e,t,n,r){return e[t](r.fp,n)},eT=function(e,t,n){return e.setAttribute(t,n)},Dg=function(e,t){return Cn(e[t])?ty:yg(e[t])&&e.setAttribute?eT:Ng},ny=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},iy=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Lg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},nT=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},iT=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yd(this,t,"_pt"):t.dep||(n=1),t=r;return!n},rT=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ry=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Gi=(function(){function o(t,n,r,a,u,c,d,h,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||ny,this.d=d||this,this.set=h||Ng,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=rT,this.m=n,this.mt=a,this.tween=r},o})();Vi(Ag+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return wg[o]=1});cr.TweenMax=cr.TweenLite=On;cr.TimelineLite=cr.TimelineMax=Bi;Sn=new Bi({sortChildren:!1,defaults:Hu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});lr.stringFilter=$S;var ca=[],qf={},sT=[],kv=0,oT=0,mp=function(e){return(qf[e]||sT).map(function(t){return t()})},cm=function(){var e=Date.now(),t=[];e-kv>2&&(mp("matchMediaInit"),ca.forEach(function(n){var r=n.queries,a=n.conditions,u,c,d,h;for(c in r)u=Qr.matchMedia(r[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),d&&t.push(n))}),mp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),kv=e,mp("matchMedia"))},sy=(function(){function o(t,n){this.selector=n&&am(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oT++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){Cn(n)&&(a=r,r=n,n=Cn);var u=this,c=function(){var h=gn,p=u.selector,m;return h&&h!==u&&h.data.push(u),a&&(u.selector=am(a)),gn=u,m=r.apply(u,arguments),Cn(m)&&u._r.push(m),gn=h,u.selector=p,u.isReverted=!1,m};return u.last=c,n===Cn?c(u,function(d){return u.add(null,d)}):n?u[n]=c:c},e.ignore=function(n){var r=gn;gn=null,n(this),gn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof On&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),d=a.data.length;d--;)h=a.data[d],h instanceof Bi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof On)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=ca.length;u--;)ca[u].id===this.id&&ca.splice(u,1)},e.revert=function(n){this.kill(n||{})},o})(),aT=(function(){function o(t){this.contexts=[],this.scope=t,gn&&gn.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){ls(n)||(n={matches:n});var u=new sy(0,a||this.scope),c=u.conditions={},d,h,p;gn&&!u.selector&&(u.selector=gn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(h in n)h==="all"?p=1:(d=Qr.matchMedia(n[h]),d&&(ca.indexOf(u)<0&&ca.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(cm):d.addEventListener("change",cm)));return p&&r(u,function(m){return u.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o})(),fd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return jS(r)})},timeline:function(e){return new Bi(e)},getTweensOf:function(e,t){return Sn.getTweensOf(e,t)},getProperty:function(e,t,n,r){ei(e)&&(e=Ar(e)[0]);var a=aa(e||{}).get,u=n?LS:DS;return n==="native"&&(n=""),e&&(t?u((er[t]&&er[t].get||a)(e,t,n,r)):function(c,d,h){return u((er[c]&&er[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,n){if(e=Ar(e),e.length>1){var r=e.map(function(p){return Xi.quickSetter(p,t,n)}),a=r.length;return function(p){for(var m=a;m--;)r[m](p)}}e=e[0]||{};var u=er[t],c=aa(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var m=new u;ul._pt=0,m.init(e,n?p+n:p,ul,0,[e]),m.render(1,m),ul._pt&&Lg(1,ul)}:c.set(e,d);return u?h:function(p){return h(e,d,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=Xi.to(e,fr((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return Sn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ua(e.ease,Hu.ease)),Lv(Hu,e||{})},config:function(e){return Lv(lr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!er[c]&&!cr[c]&&Wu(t+" effect requires "+c+" plugin.")}),fp[t]=function(c,d,h){return n(Ar(c),fr(d||{},a),h)},u&&(Bi.prototype[t]=function(c,d,h){return this.add(fp[t](c,ls(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){zt[e]=ua(t)},parseEase:function(e,t){return arguments.length?ua(e,t):zt},getById:function(e){return Sn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bi(e),r,a;for(n.smoothChildTiming=zi(e.smoothChildTiming),Sn.remove(n),n._dp=0,n._time=n._tTime=Sn._time,r=Sn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof On&&r.vars.onComplete===r._targets[0]))&&ts(n,r,r._start-r._delay),r=a;return ts(Sn,n,0),n},context:function(e,t){return e?new sy(e,t):gn},matchMedia:function(e){return new aT(e)},matchMediaRefresh:function(){return ca.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||cm()},addEventListener:function(e,t){var n=qf[e]||(qf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:k1,wrapYoyo:B1,distribute:zS,random:GS,snap:VS,normalize:F1,getUnit:vi,clamp:L1,splitColor:YS,toArray:Ar,selector:am,mapRange:WS,pipe:U1,unitize:O1,interpolate:z1,shuffle:BS},install:CS,effects:fp,ticker:nr,updateRoot:Bi.updateRoot,plugins:er,globalTimeline:Sn,core:{PropTween:Gi,globals:RS,Tween:On,Timeline:Bi,Animation:qu,getCache:aa,_removeLinkedListItem:yd,reverting:function(){return oi},context:function(e){return e&&gn&&(gn.data.push(e),e._ctx=gn),gn},suppressOverwrites:function(e){return Sg=e}}};Vi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return fd[o]=On[o]});nr.add(Bi.updateRoot);ul=fd.to({},{duration:0});var lT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uT=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=lT(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},gp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,u){u._onInit=function(c){var d,h;if(ei(a)&&(d={},Vi(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}uT(c,a)}}}},Xi=fd.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,d;this.tween=n;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)oi?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gp("roundProps",lm),gp("modifiers"),gp("snap",VS))||fd;On.version=Bi.version=Xi.version="3.15.0";AS=1;Eg()&&Ml();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;var Bv,go,dl,Ig,ia,zv,Ug,cT=function(){return typeof window<"u"},Is={},Zo=180/Math.PI,hl=Math.PI/180,Ga=Math.atan2,Vv=1e8,Og=/([A-Z])/g,fT=/(left|right|width|margin|padding|x)/i,dT=/[\s,\(]\S/,ns={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},oy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ay=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_T=function(e,t,n){return e.style[t]=n},vT=function(e,t,n){return e.style.setProperty(t,n)},xT=function(e,t,n){return e._gsap[t]=n},ST=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yT=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},ET=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},En="transform",Hi=En+"Origin",MT=function o(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in Is&&a){if(this.tfm=this.tfm||{},e!=="transform")e=ns[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Ts(r,c)}):this.tfm[e]=u.x?u[e]:Ts(r,e),e===Hi&&(this.tfm.zOrigin=u.zOrigin);else return ns.transform.split(",").forEach(function(c){return o.call(n,c,t)});if(this.props.indexOf(En)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Hi,t,"")),e=En}(a||t)&&this.props.push(e,t,a[e])},ly=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TT=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Og,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Ug(),(!a||!a.isStart)&&!n[En]&&(ly(n),r.zOrigin&&n[Hi]&&(n[Hi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},uy=function(e,t){var n={target:e,props:[],revert:TT,save:MT};return e._gsap||Xi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},cy,dm=function(e,t){var n=go.createElementNS?go.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):go.createElement(e);return n&&n.style?n:go.createElement(e)},or=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Og,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,Tl(t)||t,1)||""},Gv="O,Moz,ms,Ms,Webkit".split(","),Tl=function(e,t,n){var r=t||ia,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(Gv[u]+e in a););return u<0?null:(u===3?"ms":u>=0?Gv[u]:"")+e},hm=function(){cT()&&window.document&&(Bv=window,go=Bv.document,dl=go.documentElement,ia=dm("div")||{style:{}},dm("div"),En=Tl(En),Hi=En+"Origin",ia.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cy=!!Tl("perspective"),Ug=Xi.core.reverting,Ig=1)},Hv=function(e){var t=e.ownerSVGElement,n=dm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),dl.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),dl.removeChild(n),a},Wv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fy=function(e){var t,n;try{t=e.getBBox()}catch{t=Hv(e),n=1}return t&&(t.width||t.height)||n||(t=Hv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wv(e,["x","cx","x1"])||0,y:+Wv(e,["y","cy","y1"])||0,width:0,height:0}:t},dy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fy(e))},wo=function(e,t){if(t){var n=e.style,r;t in Is&&t!==Hi&&(t=En),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Og,"-$1").toLowerCase())):n.removeAttribute(t)}},_o=function(e,t,n,r,a,u){var c=new Gi(e._pt,t,n,0,1,u?ay:oy);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},Xv={deg:1,rad:1,turn:1},wT={grid:1,flex:1},Ao=function o(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=ia.style,d=fT.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),m=100,_=r==="px",v=r==="%",M,E,x,S;if(r===u||!a||Xv[r]||Xv[u])return a;if(u!=="px"&&!_&&(a=o(e,t,n,"px")),S=e.getCTM&&dy(e),(v||u==="%")&&(Is[t]||~t.indexOf("adius")))return M=S?e.getBBox()[d?"width":"height"]:e[p],Pn(v?a/M*m:a/100*M);if(c[d?"width":"height"]=m+(_?u:r),E=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,S&&(E=(e.ownerSVGElement||{}).parentNode),(!E||E===go||!E.appendChild)&&(E=go.body),x=E._gsap,x&&v&&x.width&&d&&x.time===nr.time&&!x.uncache)return Pn(a/x.width*m);if(v&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=m+r,M=e[p],b?e.style[t]=b:wo(e,t)}else(v||u==="%")&&!wT[or(E,"display")]&&(c.position=or(e,"position")),E===e&&(c.position="static"),E.appendChild(ia),M=ia[p],E.removeChild(ia),c.position="absolute";return d&&v&&(x=aa(E),x.time=nr.time,x.width=E[p]),Pn(_?M*a/m:M&&a?m/M*a:0)},Ts=function(e,t,n,r){var a;return Ig||hm(),t in ns&&t!=="transform"&&(t=ns[t],~t.indexOf(",")&&(t=t.split(",")[0])),Is[t]&&t!=="transform"?(a=Ku(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:hd(or(e,Hi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=dd[t]&&dd[t](e,t,n)||or(e,t)||PS(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Ao(e,t,a,n)+n:a},AT=function(e,t,n,r){if(!n||n==="none"){var a=Tl(t,e,1),u=a&&or(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=or(e,"borderTopColor"))}var c=new Gi(this._pt,e.style,t,0,1,iy),d=0,h=0,p,m,_,v,M,E,x,S,b,P,A,N;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=or(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(E=e.style[t],e.style[t]=r,r=or(e,t)||r,E?e.style[t]=E:wo(e,t)),p=[n,r],$S(p),n=p[0],r=p[1],_=n.match(ll)||[],N=r.match(ll)||[],N.length){for(;m=ll.exec(r);)x=m[0],b=r.substring(d,m.index),M?M=(M+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(M=1),x!==(E=_[h++]||"")&&(v=parseFloat(E)||0,A=E.substr((v+"").length),x.charAt(1)==="="&&(x=fl(v,x)+A),S=parseFloat(x),P=x.substr((S+"").length),d=ll.lastIndex-P.length,P||(P=P||lr.units[t]||A,d===r.length&&(r+=P,c.e+=P)),A!==P&&(v=Ao(e,t,E,P)||0),c._pt={_next:c._pt,p:b||h===1?b:",",s:v,c:S-v,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=d<r.length?r.substring(d,r.length):""}else c.r=t==="display"&&r==="none"?ay:oy;return wS.test(r)&&(c.e=0),this._pt=c,c},jv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=jv[n]||n,t[1]=jv[r]||r,t.join(" ")},RT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,d,h;if(a==="all"||a===!0)r.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Is[c]&&(d=1,c=c==="transformOrigin"?Hi:En),wo(n,c);d&&(wo(n,En),u&&(u.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ku(n,1),u.uncache=1,ly(r)))}},dd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Gi(e._pt,t,n,0,0,RT);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},$u=[1,0,0,1,0,0],hy={},py=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Yv=function(e){var t=or(e,En);return py(t)?$u:t.substr(7).match(TS).map(Pn)},Fg=function(e,t){var n=e._gsap||aa(e),r=e.style,a=Yv(e),u,c,d,h;return n.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?$u:a):(a===$u&&!e.offsetParent&&e!==dl&&!n.svg&&(d=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,dl.appendChild(e)),a=Yv(e),d?r.display=d:wo(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):dl.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},pm=function(e,t,n,r,a,u){var c=e._gsap,d=a||Fg(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,m=c.xOffset||0,_=c.yOffset||0,v=d[0],M=d[1],E=d[2],x=d[3],S=d[4],b=d[5],P=t.split(" "),A=parseFloat(P[0])||0,N=parseFloat(P[1])||0,U,L,z,T;n?d!==$u&&(L=v*x-M*E)&&(z=A*(x/L)+N*(-E/L)+(E*b-x*S)/L,T=A*(-M/L)+N*(v/L)-(v*b-M*S)/L,A=z,N=T):(U=fy(e),A=U.x+(~P[0].indexOf("%")?A/100*U.width:A),N=U.y+(~(P[1]||P[0]).indexOf("%")?N/100*U.height:N)),r||r!==!1&&c.smooth?(S=A-h,b=N-p,c.xOffset=m+(S*v+b*E)-S,c.yOffset=_+(S*M+b*x)-b):c.xOffset=c.yOffset=0,c.xOrigin=A,c.yOrigin=N,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Hi]="0px 0px",u&&(_o(u,c,"xOrigin",h,A),_o(u,c,"yOrigin",p,N),_o(u,c,"xOffset",m,c.xOffset),_o(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",A+" "+N)},Ku=function(e,t){var n=e._gsap||new ZS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=or(e,Hi)||"0",p,m,_,v,M,E,x,S,b,P,A,N,U,L,z,T,C,V,j,Q,ne,J,$,X,H,re,I,F,se,Me,Ce,ke;return p=m=_=E=x=S=b=P=A=0,v=M=1,n.svg=!!(e.getCTM&&dy(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[En]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[En]!=="none"?d[En]:"")),r.scale=r.rotate=r.translate="none"),L=Fg(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),h=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),pm(e,X||h,!!X||n.originIsAbsolute,n.smooth!==!1,L)),N=n.xOrigin||0,U=n.yOrigin||0,L!==$u&&(V=L[0],j=L[1],Q=L[2],ne=L[3],p=J=L[4],m=$=L[5],L.length===6?(v=Math.sqrt(V*V+j*j),M=Math.sqrt(ne*ne+Q*Q),E=V||j?Ga(j,V)*Zo:0,b=Q||ne?Ga(Q,ne)*Zo+E:0,b&&(M*=Math.abs(Math.cos(b*hl))),n.svg&&(p-=N-(N*V+U*Q),m-=U-(N*j+U*ne))):(ke=L[6],Me=L[7],I=L[8],F=L[9],se=L[10],Ce=L[11],p=L[12],m=L[13],_=L[14],z=Ga(ke,se),x=z*Zo,z&&(T=Math.cos(-z),C=Math.sin(-z),X=J*T+I*C,H=$*T+F*C,re=ke*T+se*C,I=J*-C+I*T,F=$*-C+F*T,se=ke*-C+se*T,Ce=Me*-C+Ce*T,J=X,$=H,ke=re),z=Ga(-Q,se),S=z*Zo,z&&(T=Math.cos(-z),C=Math.sin(-z),X=V*T-I*C,H=j*T-F*C,re=Q*T-se*C,Ce=ne*C+Ce*T,V=X,j=H,Q=re),z=Ga(j,V),E=z*Zo,z&&(T=Math.cos(z),C=Math.sin(z),X=V*T+j*C,H=J*T+$*C,j=j*T-V*C,$=$*T-J*C,V=X,J=H),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,S=180-S),v=Pn(Math.sqrt(V*V+j*j+Q*Q)),M=Pn(Math.sqrt($*$+ke*ke)),z=Ga(J,$),b=Math.abs(z)>2e-4?z*Zo:0,A=Ce?1/(Ce<0?-Ce:Ce):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!py(or(e,En)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(v*=-1,b+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=_+u,n.scaleX=Pn(v),n.scaleY=Pn(M),n.rotation=Pn(E)+c,n.rotationX=Pn(x)+c,n.rotationY=Pn(S)+c,n.skewX=b+c,n.skewY=P+c,n.transformPerspective=A+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Hi]=hd(h)),n.xOffset=n.yOffset=0,n.force3D=lr.force3D,n.renderTransform=n.svg?PT:cy?my:bT,n.uncache=0,n},hd=function(e){return(e=e.split(" "))[0]+" "+e[1]},_p=function(e,t,n){var r=vi(t);return Pn(parseFloat(t)+parseFloat(Ao(e,"x",n+"px",r)))+r},bT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,my(e,t)},Ho="0deg",du="0px",Wo=") ",my=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.z,h=n.rotation,p=n.rotationY,m=n.rotationX,_=n.skewX,v=n.skewY,M=n.scaleX,E=n.scaleY,x=n.transformPerspective,S=n.force3D,b=n.target,P=n.zOrigin,A="",N=S==="auto"&&e&&e!==1||S===!0;if(P&&(m!==Ho||p!==Ho)){var U=parseFloat(p)*hl,L=Math.sin(U),z=Math.cos(U),T;U=parseFloat(m)*hl,T=Math.cos(U),u=_p(b,u,L*T*-P),c=_p(b,c,-Math.sin(U)*-P),d=_p(b,d,z*T*-P+P)}x!==du&&(A+="perspective("+x+Wo),(r||a)&&(A+="translate("+r+"%, "+a+"%) "),(N||u!==du||c!==du||d!==du)&&(A+=d!==du||N?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Wo),h!==Ho&&(A+="rotate("+h+Wo),p!==Ho&&(A+="rotateY("+p+Wo),m!==Ho&&(A+="rotateX("+m+Wo),(_!==Ho||v!==Ho)&&(A+="skew("+_+", "+v+Wo),(M!==1||E!==1)&&(A+="scale("+M+", "+E+Wo),b.style[En]=A||"translate(0, 0)"},PT=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.rotation,h=n.skewX,p=n.skewY,m=n.scaleX,_=n.scaleY,v=n.target,M=n.xOrigin,E=n.yOrigin,x=n.xOffset,S=n.yOffset,b=n.forceCSS,P=parseFloat(u),A=parseFloat(c),N,U,L,z,T;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=hl,h*=hl,N=Math.cos(d)*m,U=Math.sin(d)*m,L=Math.sin(d-h)*-_,z=Math.cos(d-h)*_,h&&(p*=hl,T=Math.tan(h-p),T=Math.sqrt(1+T*T),L*=T,z*=T,p&&(T=Math.tan(p),T=Math.sqrt(1+T*T),N*=T,U*=T)),N=Pn(N),U=Pn(U),L=Pn(L),z=Pn(z)):(N=m,z=_,U=L=0),(P&&!~(u+"").indexOf("px")||A&&!~(c+"").indexOf("px"))&&(P=Ao(v,"x",u,"px"),A=Ao(v,"y",c,"px")),(M||E||x||S)&&(P=Pn(P+M-(M*N+E*L)+x),A=Pn(A+E-(M*U+E*z)+S)),(r||a)&&(T=v.getBBox(),P=Pn(P+r/100*T.width),A=Pn(A+a/100*T.height)),T="matrix("+N+","+U+","+L+","+z+","+P+","+A+")",v.setAttribute("transform",T),b&&(v.style[En]=T)},NT=function(e,t,n,r,a){var u=360,c=ei(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?Zo:1),h=d-r,p=r+h+"deg",m,_;return c&&(m=a.split("_")[1],m==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),m==="cw"&&h<0?h=(h+u*Vv)%u-~~(h/u)*u:m==="ccw"&&h>0&&(h=(h-u*Vv)%u-~~(h/u)*u)),e._pt=_=new Gi(e._pt,t,n,r,h,hT),_.e=p,_.u="deg",e._props.push(n),_},qv=function(e,t){for(var n in t)e[n]=t[n];return e},DT=function(e,t,n){var r=qv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,d,h,p,m,_,v,M;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[En]=t,c=Ku(n,1),wo(n,En),n.setAttribute("transform",h)):(h=getComputedStyle(n)[En],u[En]=t,c=Ku(n,1),u[En]=h);for(d in Is)h=r[d],p=c[d],h!==p&&a.indexOf(d)<0&&(v=vi(h),M=vi(p),m=v!==M?Ao(n,d,h,M):parseFloat(h),_=parseFloat(p),e._pt=new Gi(e._pt,c,d,m,_-m,fm),e._pt.u=M||0,e._props.push(d));qv(c,r)};Vi("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?o+c:"border"+c+o});dd[e>1?"border"+o:o]=function(c,d,h,p,m){var _,v;if(arguments.length<4)return _=u.map(function(M){return Ts(c,M,h)}),v=_.join(" "),v.split(_[0]).length===5?_[0]:v;_=(p+"").split(" "),v={},u.forEach(function(M,E){return v[M]=_[E]=_[E]||_[(E-1)/2|0]}),c.init(d,v,m)}});var gy={name:"css",register:hm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,d=n.vars.startAt,h,p,m,_,v,M,E,x,S,b,P,A,N,U,L,z,T;Ig||hm(),this.styles=this.styles||uy(e),z=this.styles.props,this.tween=n;for(E in t)if(E!=="autoRound"&&(p=t[E],!(er[E]&&QS(E,t,n,r,e,a)))){if(v=typeof p,M=dd[E],v==="function"&&(p=p.call(n,r,e,a),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=ju(p)),M)M(this,e,E,p,n)&&(L=1);else if(E.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(E)+"").trim(),p+="",Eo.lastIndex=0,Eo.test(h)||(x=vi(h),S=vi(p),S?x!==S&&(h=Ao(e,E,h,S)+S):x&&(p+=x)),this.add(c,"setProperty",h,p,r,a,0,0,E),u.push(E),z.push(E,0,c[E]);else if(v!=="undefined"){if(d&&E in d?(h=typeof d[E]=="function"?d[E].call(n,r,e,a):d[E],ei(h)&&~h.indexOf("random(")&&(h=ju(h)),vi(h+"")||h==="auto"||(h+=lr.units[E]||vi(Ts(e,E))||""),(h+"").charAt(1)==="="&&(h=Ts(e,E))):h=Ts(e,E),_=parseFloat(h),b=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),m=parseFloat(p),E in ns&&(E==="autoAlpha"&&(_===1&&Ts(e,"visibility")==="hidden"&&m&&(_=0),z.push("visibility",0,c.visibility),_o(this,c,"visibility",_?"inherit":"hidden",m?"inherit":"hidden",!m)),E!=="scale"&&E!=="transform"&&(E=ns[E],~E.indexOf(",")&&(E=E.split(",")[0]))),P=E in Is,P){if(this.styles.save(E),T=p,v==="string"&&p.substring(0,6)==="var(--"){if(p=or(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=p,p=or(e,"perspective"),C?e.style.perspective=C:wo(e,"perspective")}m=parseFloat(p)}if(A||(N=e._gsap,N.renderTransform&&!t.parseTransform||Ku(e,t.parseTransform),U=t.smoothOrigin!==!1&&N.smooth,A=this._pt=new Gi(this._pt,c,En,0,1,N.renderTransform,N,0,-1),A.dep=1),E==="scale")this._pt=new Gi(this._pt,N,"scaleY",N.scaleY,(b?fl(N.scaleY,b+m):m)-N.scaleY||0,fm),this._pt.u=0,u.push("scaleY",E),E+="X";else if(E==="transformOrigin"){z.push(Hi,0,c[Hi]),p=CT(p),N.svg?pm(e,p,0,U,0,this):(S=parseFloat(p.split(" ")[2])||0,S!==N.zOrigin&&_o(this,N,"zOrigin",N.zOrigin,S),_o(this,c,E,hd(h),hd(p)));continue}else if(E==="svgOrigin"){pm(e,p,1,U,0,this);continue}else if(E in hy){NT(this,N,E,_,b?fl(_,b+p):p);continue}else if(E==="smoothOrigin"){_o(this,N,"smooth",N.smooth,p);continue}else if(E==="force3D"){N[E]=p;continue}else if(E==="transform"){DT(this,p,e);continue}}else E in c||(E=Tl(E)||E);if(P||(m||m===0)&&(_||_===0)&&!dT.test(p)&&E in c)x=(h+"").substr((_+"").length),m||(m=0),S=vi(p)||(E in lr.units?lr.units[E]:x),x!==S&&(_=Ao(e,E,h,S)),this._pt=new Gi(this._pt,P?N:c,E,_,(b?fl(_,b+m):m)-_,!P&&(S==="px"||E==="zIndex")&&t.autoRound!==!1?gT:fm),this._pt.u=S||0,P&&T!==p?(this._pt.b=h,this._pt.e=T,this._pt.r=mT):x!==S&&S!=="%"&&(this._pt.b=h,this._pt.r=pT);else if(E in c)AT.call(this,e,E,h,b?b+p:p);else if(E in e)this.add(e,E,h||e[E],b?b+p:p,r,a);else if(E!=="parseTransform"){Tg(E,p);continue}P||(E in c?z.push(E,0,c[E]):typeof e[E]=="function"?z.push(E,2,e[E]()):z.push(E,1,h||e[E])),u.push(E)}}L&&ry(this)},render:function(e,t){if(t.tween._time||!Ug())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ts,aliases:ns,getSetter:function(e,t,n){var r=ns[t];return r&&r.indexOf(",")<0&&(t=r),t in Is&&t!==Hi&&(e._gsap.x||Ts(e,"x"))?n&&zv===n?t==="scale"?ST:xT:(zv=n||{})&&(t==="scale"?yT:ET):e.style&&!yg(e.style[t])?_T:~t.indexOf("-")?vT:Dg(e,t)},core:{_removeProperty:wo,_getMatrix:Fg}};Xi.utils.checkPrefix=Tl;Xi.core.getStyleSaver=uy;(function(o,e,t,n){var r=Vi(o+","+e+","+t,function(a){Is[a]=1});Vi(e,function(a){lr.units[a]="deg",hy[a]=1}),ns[r[13]]=o+","+e,Vi(n,function(a){var u=a.split(":");ns[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){lr.units[o]="px"});Xi.registerPlugin(gy);var dn=Xi.registerPlugin(gy)||Xi;dn.core.Tween;let $v=typeof document<"u"?Ft.useLayoutEffect:Ft.useEffect,Kv=o=>o&&!Array.isArray(o)&&typeof o=="object",df=[],LT={},_y=dn;const Td=(o,e=df)=>{let t=LT;Kv(o)?(t=o,o=null,e="dependencies"in t?t.dependencies:df):Kv(e)&&(t=e,e="dependencies"in t?t.dependencies:df),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:n,revertOnUpdate:r}=t,a=Ft.useRef(!1),u=Ft.useRef(_y.context(()=>{},n)),c=Ft.useRef(h=>u.current.add(null,h)),d=e&&e.length&&!r;return d&&$v(()=>(a.current=!0,()=>u.current.revert()),df),$v(()=>{if(o&&u.current.add(o,n),!d||!a.current)return()=>u.current.revert()},e),{context:u.current,contextSafe:c.current}};Td.register=o=>{_y=o};Td.headless=!0;const dr=1131,ir=861,Nl=565.5,IT=`M${dr},0 Q${Nl},0 0,0 L0,0 L${dr},0 Z`,UT=`M${dr},345 Q${Nl},620 0,345 L0,0 L${dr},0 Z`,OT=`M${dr},${ir} Q${Nl},${ir} 0,${ir} L0,0 L${dr},0 Z`,Zv=`M${dr},0 Q${Nl},0 0,0 L0,${ir} L${dr},${ir} Z`,Qv=`M${dr},350 Q${Nl},130 0,350 L0,${ir} L${dr},${ir} Z`,Jv=`M${dr},${ir} Q${Nl},${ir} 0,${ir} L0,${ir} L${dr},${ir} Z`;function FT({currentPath:o,onNavigate:e}){const[t,n]=Ft.useState(!1),[r,a]=Ft.useState(!1),u=Ft.useRef(null),{contextSafe:c}=Td({scope:u}),d=c(()=>{if(r)return;a(!0);const m=!t;if(n(m),m){dn.to(".nav-toggle-menu",{duration:.25,opacity:0,ease:"none"}),dn.to(".nav-toggle-close",{duration:.25,opacity:1,ease:"none",delay:.25});const _=dn.timeline({onComplete:()=>{a(!1)}});_.to(".menu-path",{duration:.5,attr:{d:UT},ease:"power4.in"}).to(".menu-path",{duration:.5,attr:{d:OT},ease:"power4.out"}),_.to(".menu-logo",{duration:.1,opacity:1,ease:"none"},"-=0.75"),_.to(".menu-info-item",{duration:.75,opacity:1,y:0,ease:"power3.out",stagger:.075},"-=0.35"),_.to(".char",{duration:1.5,x:"0%",opacity:1,ease:"elastic.out(1, 0.25)",stagger:.01},"-=0.55")}else{dn.set(".menu-path",{attr:{d:Zv}}),dn.to(".nav-toggle-close",{duration:.3,opacity:0,ease:"none"}),dn.to(".nav-toggle-menu",{duration:.3,opacity:1,ease:"none",delay:.25});const _=dn.timeline({onComplete:()=>{a(!1),dn.set(".char",{opacity:0,x:"750%"}),dn.set(".menu-col-links a",{opacity:1}),dn.set(".menu-info-item",{opacity:0,y:100})}});_.to(".menu-logo",{duration:.3,opacity:0}).to(".menu-col-links a",{duration:.3,opacity:0},"<").to(".menu-info-item",{duration:.3,opacity:0},"<"),_.to(".menu-path",{duration:.5,attr:{d:Qv},ease:"power3.in"},"<").to(".menu-path",{duration:.5,attr:{d:Jv},ease:"power3.out"})}}),h=(m,_)=>{if(m.preventDefault(),o===_){t&&d();return}if(t){if(r)return;a(!0),n(!1),dn.set(".menu-path",{attr:{d:Zv}}),dn.to(".nav-toggle-close",{duration:.3,opacity:0,ease:"none"}),dn.to(".nav-toggle-menu",{duration:.3,opacity:1,ease:"none",delay:.25});const v=dn.timeline({onComplete:()=>{a(!1),dn.set(".char",{opacity:0,x:"750%"}),dn.set(".menu-col-links a",{opacity:1}),dn.set(".menu-info-item",{opacity:0,y:100}),e(_)}});v.to(".menu-logo",{duration:.3,opacity:0}).to(".menu-col-links a",{duration:.3,opacity:0},"<").to(".menu-info-item",{duration:.3,opacity:0},"<"),v.to(".menu-path",{duration:.5,attr:{d:Qv},ease:"power3.in"},"<").to(".menu-path",{duration:.5,attr:{d:Jv},ease:"power3.out"})}else e(_)},p=[{label:"Work",href:"/work"},{label:"Projects",href:"/projects"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Careers",href:"/careers"}];return k.jsxs("div",{ref:u,className:"nav",children:[k.jsx("div",{className:"nav-logo",children:k.jsx("a",{href:"/",onClick:m=>h(m,"/"),children:"Cruise"})}),k.jsxs("div",{className:"nav-toggle",onClick:d,children:[k.jsx("p",{className:"nav-toggle-menu",children:"Menu"}),k.jsx("p",{className:"nav-toggle-close",children:"Close"})]}),k.jsxs("div",{className:`menu ${t?"is-open":""}`,children:[k.jsx("svg",{className:"menu-bg-svg",viewBox:`0 0 ${dr} ${ir}`,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:k.jsx("path",{className:"menu-path",fill:"#121212",d:IT})}),k.jsx("div",{className:"menu-logo",children:k.jsx("a",{href:"/",onClick:m=>h(m,"/"),children:"CRUISE"})}),k.jsxs("div",{className:"menu-col menu-col-info",children:[k.jsx("p",{className:"menu-info-item",style:{opacity:0,transform:"translateY(100px)"},children:"Get in touch"}),k.jsx("h3",{className:"menu-info-item",style:{opacity:0,transform:"translateY(100px)"},children:"studio@clicked.co"}),k.jsx("h3",{className:"menu-info-item",style:{opacity:0,transform:"translateY(100px)"},children:"+(91)6006569500"}),k.jsx("br",{}),k.jsx("h6",{className:"menu-info-item",style:{opacity:0,transform:"translateY(100px)"},children:"sector 9 mohali"}),k.jsx("h6",{className:"menu-info-item",style:{opacity:0,transform:"translateY(100px)"},children:"Chandigarh, India"})]}),k.jsx("div",{className:"menu-col menu-col-links",children:p.map((m,_)=>k.jsx("a",{href:m.href,onClick:v=>h(v,m.href),className:o===m.href?"active":"",children:m.label.split("").map((v,M)=>k.jsx("span",{className:"char",style:{display:"inline-block",opacity:0,transform:"translateX(750%)"},children:v===" "?" ":v},M))},_))})]})]})}const kg="182",kT=0,ex=1,BT=2,$f=1,zT=2,Tu=3,Co=0,Wi=1,ws=2,bs=0,pl=1,tx=2,nx=3,ix=4,VT=5,ta=100,GT=101,HT=102,WT=103,XT=104,jT=200,YT=201,qT=202,$T=203,mm=204,gm=205,KT=206,ZT=207,QT=208,JT=209,ew=210,tw=211,nw=212,iw=213,rw=214,_m=0,vm=1,xm=2,wl=3,Sm=4,ym=5,Em=6,Mm=7,vy=0,sw=1,ow=2,ss=0,xy=1,Sy=2,yy=3,Ey=4,My=5,Ty=6,wy=7,Ay=300,pa=301,Al=302,Tm=303,wm=304,wd=306,Am=1e3,Cs=1001,Cm=1002,ri=1003,aw=1004,hf=1005,yn=1006,vp=1007,ra=1008,Tr=1009,Cy=1010,Ry=1011,Zu=1012,Bg=1013,us=1014,Cr=1015,Us=1016,zg=1017,Vg=1018,Qu=1020,by=35902,Py=35899,Ny=1021,Dy=1022,ar=1023,Os=1026,sa=1027,Ly=1028,Gg=1029,Cl=1030,Hg=1031,Wg=1033,Kf=33776,Zf=33777,Qf=33778,Jf=33779,Rm=35840,bm=35841,Pm=35842,Nm=35843,Dm=36196,Lm=37492,Im=37496,Um=37488,Om=37489,Fm=37490,km=37491,Bm=37808,zm=37809,Vm=37810,Gm=37811,Hm=37812,Wm=37813,Xm=37814,jm=37815,Ym=37816,qm=37817,$m=37818,Km=37819,Zm=37820,Qm=37821,Jm=36492,eg=36494,tg=36495,ng=36283,ig=36284,rg=36285,sg=36286,lw=3200,uw=0,cw=1,po="",yr="srgb",Rl="srgb-linear",pd="linear",nn="srgb",Ha=7680,rx=519,fw=512,dw=513,hw=514,Xg=515,pw=516,mw=517,jg=518,gw=519,sx=35044,ox="300 es",is=2e3,md=2001;function Iy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function gd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _w(){const o=gd("canvas");return o.style.display="block",o}const ax={};function lx(...o){const e="THREE."+o.shift();console.log(e,...o)}function Mt(...o){const e="THREE."+o.shift();console.warn(e,...o)}function $t(...o){const e="THREE."+o.shift();console.error(e,...o)}function Ju(...o){const e=o.join(" ");e in ax||(ax[e]=!0,Mt(...o))}function vw(o,e,t){return new Promise(function(n,r){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class Dl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xp=Math.PI/180,og=180/Math.PI;function rc(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pi[o&255]+pi[o>>8&255]+pi[o>>16&255]+pi[o>>24&255]+"-"+pi[e&255]+pi[e>>8&255]+"-"+pi[e>>16&15|64]+pi[e>>24&255]+"-"+pi[t&63|128]+pi[t>>8&255]+"-"+pi[t>>16&255]+pi[t>>24&255]+pi[n&255]+pi[n>>8&255]+pi[n>>16&255]+pi[n>>24&255]).toLowerCase()}function Bt(o,e,t){return Math.max(e,Math.min(t,o))}function xw(o,e){return(o%e+e)%e}function Sp(o,e,t){return(1-t)*o+t*e}function hu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(e=0,t=0){Gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sc{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let d=n[r+0],h=n[r+1],p=n[r+2],m=n[r+3],_=a[u+0],v=a[u+1],M=a[u+2],E=a[u+3];if(c<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(c>=1){e[t+0]=_,e[t+1]=v,e[t+2]=M,e[t+3]=E;return}if(m!==E||d!==_||h!==v||p!==M){let x=d*_+h*v+p*M+m*E;x<0&&(_=-_,v=-v,M=-M,E=-E,x=-x);let S=1-c;if(x<.9995){const b=Math.acos(x),P=Math.sin(b);S=Math.sin(S*b)/P,c=Math.sin(c*b)/P,d=d*S+_*c,h=h*S+v*c,p=p*S+M*c,m=m*S+E*c}else{d=d*S+_*c,h=h*S+v*c,p=p*S+M*c,m=m*S+E*c;const b=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=b,h*=b,p*=b,m*=b}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],m=a[u],_=a[u+1],v=a[u+2],M=a[u+3];return e[t]=c*M+p*m+d*v-h*_,e[t+1]=d*M+p*_+h*m-c*v,e[t+2]=h*M+p*v+c*_-d*m,e[t+3]=p*M-c*m-d*_-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),m=c(a/2),_=d(n/2),v=d(r/2),M=d(a/2);switch(u){case"XYZ":this._x=_*p*m+h*v*M,this._y=h*v*m-_*p*M,this._z=h*p*M+_*v*m,this._w=h*p*m-_*v*M;break;case"YXZ":this._x=_*p*m+h*v*M,this._y=h*v*m-_*p*M,this._z=h*p*M-_*v*m,this._w=h*p*m+_*v*M;break;case"ZXY":this._x=_*p*m-h*v*M,this._y=h*v*m+_*p*M,this._z=h*p*M+_*v*m,this._w=h*p*m-_*v*M;break;case"ZYX":this._x=_*p*m-h*v*M,this._y=h*v*m+_*p*M,this._z=h*p*M-_*v*m,this._w=h*p*m+_*v*M;break;case"YZX":this._x=_*p*m+h*v*M,this._y=h*v*m+_*p*M,this._z=h*p*M-_*v*m,this._w=h*p*m-_*v*M;break;case"XZY":this._x=_*p*m-h*v*M,this._y=h*v*m-_*p*M,this._z=h*p*M+_*v*m,this._w=h*p*m+_*v*M;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],m=t[10],_=n+c+m;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(p-d)*v,this._y=(a-h)*v,this._z=(u-r)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(p-d)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(a+h)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(a-h)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(d+p)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(u-r)/v,this._x=(a+h)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+r*h-a*d,this._y=r*p+u*d+a*c-n*h,this._z=a*p+u*h+n*d-r*c,this._w=u*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,u=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,t=0,n=0){he.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ux.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ux.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*r-c*n),p=2*(c*t-a*r),m=2*(a*n-u*t);return this.x=t+d*h+u*m-c*p,this.y=n+d*p+c*h-a*m,this.z=r+d*m+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*u-n*d,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yp.copy(this).projectOnVector(e),this.sub(yp)}reflect(e){return this.sub(yp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yp=new he,ux=new sc;class wt{constructor(e,t,n,r,a,u,c,d,h){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h)}set(e,t,n,r,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],m=n[7],_=n[2],v=n[5],M=n[8],E=r[0],x=r[3],S=r[6],b=r[1],P=r[4],A=r[7],N=r[2],U=r[5],L=r[8];return a[0]=u*E+c*b+d*N,a[3]=u*x+c*P+d*U,a[6]=u*S+c*A+d*L,a[1]=h*E+p*b+m*N,a[4]=h*x+p*P+m*U,a[7]=h*S+p*A+m*L,a[2]=_*E+v*b+M*N,a[5]=_*x+v*P+M*U,a[8]=_*S+v*A+M*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*d+r*a*h-r*u*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],m=p*u-c*h,_=c*d-p*a,v=h*a-u*d,M=t*m+n*_+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(r*h-p*n)*E,e[2]=(c*n-r*u)*E,e[3]=_*E,e[4]=(p*t-r*d)*E,e[5]=(r*a-c*t)*E,e[6]=v*E,e[7]=(n*d-h*t)*E,e[8]=(u*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-r*h,r*d,-r*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ep.makeScale(e,t)),this}rotate(e){return this.premultiply(Ep.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ep.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ep=new wt,cx=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fx=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sw(){const o={enabled:!0,workingColorSpace:Rl,spaces:{},convert:function(r,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===nn&&(r.r=Ps(r.r),r.g=Ps(r.g),r.b=Ps(r.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===nn&&(r.r=ml(r.r),r.g=ml(r.g),r.b=ml(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===po?pd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,u){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ju("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ju("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[Rl]:{primaries:e,whitePoint:n,transfer:pd,toXYZ:cx,fromXYZ:fx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yr},outputColorSpaceConfig:{drawingBufferColorSpace:yr}},[yr]:{primaries:e,whitePoint:n,transfer:nn,toXYZ:cx,fromXYZ:fx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yr}}}),o}const jt=Sw();function Ps(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ml(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wa;class yw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wa===void 0&&(Wa=gd("canvas")),Wa.width=e.width,Wa.height=e.height;const r=Wa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Wa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gd("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Ps(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ew=0;class Yg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=rc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(Mp(r[u].image)):a.push(Mp(r[u]))}else a=Mp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Mp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yw.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let Mw=0;const Tp=new he;class ai extends Dl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,n=Cs,r=Cs,a=yn,u=ra,c=ar,d=Tr,h=ai.DEFAULT_ANISOTROPY,p=po){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=rc(),this.name="",this.source=new Yg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tp).x}get height(){return this.source.getSize(Tp).y}get depth(){return this.source.getSize(Tp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ay)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Am:e.x=e.x-Math.floor(e.x);break;case Cs:e.x=e.x<0?0:1;break;case Cm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Am:e.y=e.y-Math.floor(e.y);break;case Cs:e.y=e.y<0?0:1;break;case Cm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Ay;ai.DEFAULT_ANISOTROPY=1;class Nn{constructor(e=0,t=0,n=0,r=1){Nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],p=d[4],m=d[8],_=d[1],v=d[5],M=d[9],E=d[2],x=d[6],S=d[10];if(Math.abs(p-_)<.01&&Math.abs(m-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+v+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,A=(v+1)/2,N=(S+1)/2,U=(p+_)/4,L=(m+E)/4,z=(M+x)/4;return P>A&&P>N?P<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(P),r=U/n,a=L/n):A>N?A<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),n=U/r,a=z/r):N<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(N),n=L/a,r=z/a),this.set(n,r,a,t),this}let b=Math.sqrt((x-M)*(x-M)+(m-E)*(m-E)+(_-p)*(_-p));return Math.abs(b)<.001&&(b=1),this.x=(x-M)/b,this.y=(m-E)/b,this.z=(_-p)/b,this.w=Math.acos((h+v+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tw extends Dl{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nn(0,0,e,t),this.scissorTest=!1,this.viewport=new Nn(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new ai(r);this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends Tw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uy extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ww extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oc{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,kr):kr.fromBufferAttribute(a,u),kr.applyMatrix4(e.matrixWorld),this.expandByPoint(kr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pf.copy(n.boundingBox)),pf.applyMatrix4(e.matrixWorld),this.union(pf)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kr),kr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pu),mf.subVectors(this.max,pu),Xa.subVectors(e.a,pu),ja.subVectors(e.b,pu),Ya.subVectors(e.c,pu),so.subVectors(ja,Xa),oo.subVectors(Ya,ja),Xo.subVectors(Xa,Ya);let t=[0,-so.z,so.y,0,-oo.z,oo.y,0,-Xo.z,Xo.y,so.z,0,-so.x,oo.z,0,-oo.x,Xo.z,0,-Xo.x,-so.y,so.x,0,-oo.y,oo.x,0,-Xo.y,Xo.x,0];return!wp(t,Xa,ja,Ya,mf)||(t=[1,0,0,0,1,0,0,0,1],!wp(t,Xa,ja,Ya,mf))?!1:(gf.crossVectors(so,oo),t=[gf.x,gf.y,gf.z],wp(t,Xa,ja,Ya,mf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vs=[new he,new he,new he,new he,new he,new he,new he,new he],kr=new he,pf=new oc,Xa=new he,ja=new he,Ya=new he,so=new he,oo=new he,Xo=new he,pu=new he,mf=new he,gf=new he,jo=new he;function wp(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){jo.fromArray(o,a);const c=r.x*Math.abs(jo.x)+r.y*Math.abs(jo.y)+r.z*Math.abs(jo.z),d=e.dot(jo),h=t.dot(jo),p=n.dot(jo);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const Aw=new oc,mu=new he,Ap=new he;class qg{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Aw.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mu.subVectors(e,this.center);const t=mu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mu,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ap.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mu.copy(e.center).add(Ap)),this.expandByPoint(mu.copy(e.center).sub(Ap))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xs=new he,Cp=new he,_f=new he,ao=new he,Rp=new he,vf=new he,bp=new he;class Cw{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xs.copy(this.origin).addScaledVector(this.direction,t),xs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cp.copy(e).add(t).multiplyScalar(.5),_f.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(Cp);const a=e.distanceTo(t)*.5,u=-this.direction.dot(_f),c=ao.dot(this.direction),d=-ao.dot(_f),h=ao.lengthSq(),p=Math.abs(1-u*u);let m,_,v,M;if(p>0)if(m=u*d-c,_=u*c-d,M=a*p,m>=0)if(_>=-M)if(_<=M){const E=1/p;m*=E,_*=E,v=m*(m+u*_+2*c)+_*(u*m+_+2*d)+h}else _=a,m=Math.max(0,-(u*_+c)),v=-m*m+_*(_+2*d)+h;else _=-a,m=Math.max(0,-(u*_+c)),v=-m*m+_*(_+2*d)+h;else _<=-M?(m=Math.max(0,-(-u*a+c)),_=m>0?-a:Math.min(Math.max(-a,-d),a),v=-m*m+_*(_+2*d)+h):_<=M?(m=0,_=Math.min(Math.max(-a,-d),a),v=_*(_+2*d)+h):(m=Math.max(0,-(u*a+c)),_=m>0?a:Math.min(Math.max(-a,-d),a),v=-m*m+_*(_+2*d)+h);else _=u>0?-a:a,m=Math.max(0,-(u*_+c)),v=-m*m+_*(_+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Cp).addScaledVector(_f,_),v}intersectSphere(e,t){xs.subVectors(e.center,this.origin);const n=xs.dot(this.direction),r=xs.dot(xs)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,r=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,r=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),m>=0?(c=(e.min.z-_.z)*m,d=(e.max.z-_.z)*m):(c=(e.max.z-_.z)*m,d=(e.min.z-_.z)*m),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xs)!==null}intersectTriangle(e,t,n,r,a){Rp.subVectors(t,e),vf.subVectors(n,e),bp.crossVectors(Rp,vf);let u=this.direction.dot(bp),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ao.subVectors(this.origin,e);const d=c*this.direction.dot(vf.crossVectors(ao,vf));if(d<0)return null;const h=c*this.direction.dot(Rp.cross(ao));if(h<0||d+h>u)return null;const p=-c*ao.dot(bp);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn{constructor(e,t,n,r,a,u,c,d,h,p,m,_,v,M,E,x){Fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h,p,m,_,v,M,E,x)}set(e,t,n,r,a,u,c,d,h,p,m,_,v,M,E,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=r,S[1]=a,S[5]=u,S[9]=c,S[13]=d,S[2]=h,S[6]=p,S[10]=m,S[14]=_,S[3]=v,S[7]=M,S[11]=E,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/qa.setFromMatrixColumn(e,0).length(),a=1/qa.setFromMatrixColumn(e,1).length(),u=1/qa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=u*p,v=u*m,M=c*p,E=c*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=v+M*h,t[5]=_-E*h,t[9]=-c*d,t[2]=E-_*h,t[6]=M+v*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,v=d*m,M=h*p,E=h*m;t[0]=_+E*c,t[4]=M*c-v,t[8]=u*h,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=v*c-M,t[6]=E+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,v=d*m,M=h*p,E=h*m;t[0]=_-E*c,t[4]=-u*m,t[8]=M+v*c,t[1]=v+M*c,t[5]=u*p,t[9]=E-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,v=u*m,M=c*p,E=c*m;t[0]=d*p,t[4]=M*h-v,t[8]=_*h+E,t[1]=d*m,t[5]=E*h+_,t[9]=v*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,v=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=E-_*m,t[8]=M*m+v,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=v*m+M,t[10]=_-E*m}else if(e.order==="XZY"){const _=u*d,v=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=_*m+E,t[5]=u*p,t[9]=v*m-M,t[2]=M*m-v,t[6]=c*p,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rw,e,bw)}lookAt(e,t,n){const r=this.elements;return Ki.subVectors(e,t),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),lo.crossVectors(n,Ki),lo.lengthSq()===0&&(Math.abs(n.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),lo.crossVectors(n,Ki)),lo.normalize(),xf.crossVectors(Ki,lo),r[0]=lo.x,r[4]=xf.x,r[8]=Ki.x,r[1]=lo.y,r[5]=xf.y,r[9]=Ki.y,r[2]=lo.z,r[6]=xf.z,r[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],m=n[5],_=n[9],v=n[13],M=n[2],E=n[6],x=n[10],S=n[14],b=n[3],P=n[7],A=n[11],N=n[15],U=r[0],L=r[4],z=r[8],T=r[12],C=r[1],V=r[5],j=r[9],Q=r[13],ne=r[2],J=r[6],$=r[10],X=r[14],H=r[3],re=r[7],I=r[11],F=r[15];return a[0]=u*U+c*C+d*ne+h*H,a[4]=u*L+c*V+d*J+h*re,a[8]=u*z+c*j+d*$+h*I,a[12]=u*T+c*Q+d*X+h*F,a[1]=p*U+m*C+_*ne+v*H,a[5]=p*L+m*V+_*J+v*re,a[9]=p*z+m*j+_*$+v*I,a[13]=p*T+m*Q+_*X+v*F,a[2]=M*U+E*C+x*ne+S*H,a[6]=M*L+E*V+x*J+S*re,a[10]=M*z+E*j+x*$+S*I,a[14]=M*T+E*Q+x*X+S*F,a[3]=b*U+P*C+A*ne+N*H,a[7]=b*L+P*V+A*J+N*re,a[11]=b*z+P*j+A*$+N*I,a[15]=b*T+P*Q+A*X+N*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],m=e[6],_=e[10],v=e[14],M=e[3],E=e[7],x=e[11],S=e[15],b=d*v-h*_,P=c*v-h*m,A=c*_-d*m,N=u*v-h*p,U=u*_-d*p,L=u*m-c*p;return t*(E*b-x*P+S*A)-n*(M*b-x*N+S*U)+r*(M*P-E*N+S*L)-a*(M*A-E*U+x*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],m=e[9],_=e[10],v=e[11],M=e[12],E=e[13],x=e[14],S=e[15],b=m*x*h-E*_*h+E*d*v-c*x*v-m*d*S+c*_*S,P=M*_*h-p*x*h-M*d*v+u*x*v+p*d*S-u*_*S,A=p*E*h-M*m*h+M*c*v-u*E*v-p*c*S+u*m*S,N=M*m*d-p*E*d-M*c*_+u*E*_+p*c*x-u*m*x,U=t*b+n*P+r*A+a*N;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=b*L,e[1]=(E*_*a-m*x*a-E*r*v+n*x*v+m*r*S-n*_*S)*L,e[2]=(c*x*a-E*d*a+E*r*h-n*x*h-c*r*S+n*d*S)*L,e[3]=(m*d*a-c*_*a-m*r*h+n*_*h+c*r*v-n*d*v)*L,e[4]=P*L,e[5]=(p*x*a-M*_*a+M*r*v-t*x*v-p*r*S+t*_*S)*L,e[6]=(M*d*a-u*x*a-M*r*h+t*x*h+u*r*S-t*d*S)*L,e[7]=(u*_*a-p*d*a+p*r*h-t*_*h-u*r*v+t*d*v)*L,e[8]=A*L,e[9]=(M*m*a-p*E*a-M*n*v+t*E*v+p*n*S-t*m*S)*L,e[10]=(u*E*a-M*c*a+M*n*h-t*E*h-u*n*S+t*c*S)*L,e[11]=(p*c*a-u*m*a-p*n*h+t*m*h+u*n*v-t*c*v)*L,e[12]=N*L,e[13]=(p*E*r-M*m*r+M*n*_-t*E*_-p*n*x+t*m*x)*L,e[14]=(M*c*r-u*E*r-M*n*d+t*E*d+u*n*x-t*c*x)*L,e[15]=(u*m*r-p*c*r+p*n*d-t*m*d-u*n*_+t*c*_)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*u,0,h*d-r*c,p*d+r*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,m=c+c,_=a*h,v=a*p,M=a*m,E=u*p,x=u*m,S=c*m,b=d*h,P=d*p,A=d*m,N=n.x,U=n.y,L=n.z;return r[0]=(1-(E+S))*N,r[1]=(v+A)*N,r[2]=(M-P)*N,r[3]=0,r[4]=(v-A)*U,r[5]=(1-(_+S))*U,r[6]=(x+b)*U,r[7]=0,r[8]=(M+P)*L,r[9]=(x-b)*L,r[10]=(1-(_+E))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let a=qa.set(r[0],r[1],r[2]).length();const u=qa.set(r[4],r[5],r[6]).length(),c=qa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),Br.copy(this);const h=1/a,p=1/u,m=1/c;return Br.elements[0]*=h,Br.elements[1]*=h,Br.elements[2]*=h,Br.elements[4]*=p,Br.elements[5]*=p,Br.elements[6]*=p,Br.elements[8]*=m,Br.elements[9]*=m,Br.elements[10]*=m,t.setFromRotationMatrix(Br),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,r,a,u,c=is,d=!1){const h=this.elements,p=2*a/(t-e),m=2*a/(n-r),_=(t+e)/(t-e),v=(n+r)/(n-r);let M,E;if(d)M=a/(u-a),E=u*a/(u-a);else if(c===is)M=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===md)M=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=is,d=!1){const h=this.elements,p=2/(t-e),m=2/(n-r),_=-(t+e)/(t-e),v=-(n+r)/(n-r);let M,E;if(d)M=1/(u-a),E=u/(u-a);else if(c===is)M=-2/(u-a),E=-(u+a)/(u-a);else if(c===md)M=-1/(u-a),E=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=m,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qa=new he,Br=new Fn,Rw=new he(0,0,0),bw=new he(1,1,1),lo=new he,xf=new he,Ki=new he,dx=new Fn,hx=new sc;class Fs{constructor(e=0,t=0,n=0,r=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],d=r[1],h=r[5],p=r[9],m=r[2],_=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hx.setFromEuler(this),this.setFromQuaternion(hx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class Oy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pw=0;const px=new he,$a=new sc,Ss=new Fn,Sf=new he,gu=new he,Nw=new he,Dw=new sc,mx=new he(1,0,0),gx=new he(0,1,0),_x=new he(0,0,1),vx={type:"added"},Lw={type:"removed"},Ka={type:"childadded",child:null},Pp={type:"childremoved",child:null};class ur extends Dl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=rc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ur.DEFAULT_UP.clone();const e=new he,t=new Fs,n=new sc,r=new he(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fn},normalMatrix:{value:new wt}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=ur.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $a.setFromAxisAngle(e,t),this.quaternion.multiply($a),this}rotateOnWorldAxis(e,t){return $a.setFromAxisAngle(e,t),this.quaternion.premultiply($a),this}rotateX(e){return this.rotateOnAxis(mx,e)}rotateY(e){return this.rotateOnAxis(gx,e)}rotateZ(e){return this.rotateOnAxis(_x,e)}translateOnAxis(e,t){return px.copy(e).applyQuaternion(this.quaternion),this.position.add(px.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mx,e)}translateY(e){return this.translateOnAxis(gx,e)}translateZ(e){return this.translateOnAxis(_x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sf.copy(e):Sf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(gu,Sf,this.up):Ss.lookAt(Sf,gu,this.up),this.quaternion.setFromRotationMatrix(Ss),r&&(Ss.extractRotation(r.matrixWorld),$a.setFromRotationMatrix(Ss),this.quaternion.premultiply($a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vx),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lw),Pp.child=e,this.dispatchEvent(Pp),Pp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vx),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gu,e,Nw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gu,Dw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),m=u(e.shapes),_=u(e.skeletons),v=u(e.animations),M=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=r,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ur.DEFAULT_UP=new he(0,1,0);ur.DEFAULT_MATRIX_AUTO_UPDATE=!0;ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zr=new he,ys=new he,Np=new he,Es=new he,Za=new he,Qa=new he,xx=new he,Dp=new he,Lp=new he,Ip=new he,Up=new Nn,Op=new Nn,Fp=new Nn;class Hr{constructor(e=new he,t=new he,n=new he){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zr.subVectors(e,t),r.cross(zr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){zr.subVectors(r,t),ys.subVectors(n,t),Np.subVectors(e,t);const u=zr.dot(zr),c=zr.dot(ys),d=zr.dot(Np),h=ys.dot(ys),p=ys.dot(Np),m=u*h-c*c;if(m===0)return a.set(0,0,0),null;const _=1/m,v=(h*d-c*p)*_,M=(u*p-c*d)*_;return a.set(1-v-M,M,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(e,t,n,r,a,u,c,d){return this.getBarycoord(e,t,n,r,Es)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Es.x),d.addScaledVector(u,Es.y),d.addScaledVector(c,Es.z),d)}static getInterpolatedAttribute(e,t,n,r,a,u){return Up.setScalar(0),Op.setScalar(0),Fp.setScalar(0),Up.fromBufferAttribute(e,t),Op.fromBufferAttribute(e,n),Fp.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Up,a.x),u.addScaledVector(Op,a.y),u.addScaledVector(Fp,a.z),u}static isFrontFacing(e,t,n,r){return zr.subVectors(n,t),ys.subVectors(e,t),zr.cross(ys).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zr.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),zr.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Hr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;Za.subVectors(r,n),Qa.subVectors(a,n),Dp.subVectors(e,n);const d=Za.dot(Dp),h=Qa.dot(Dp);if(d<=0&&h<=0)return t.copy(n);Lp.subVectors(e,r);const p=Za.dot(Lp),m=Qa.dot(Lp);if(p>=0&&m<=p)return t.copy(r);const _=d*m-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(Za,u);Ip.subVectors(e,a);const v=Za.dot(Ip),M=Qa.dot(Ip);if(M>=0&&v<=M)return t.copy(a);const E=v*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(Qa,c);const x=p*M-v*m;if(x<=0&&m-p>=0&&v-M>=0)return xx.subVectors(a,r),c=(m-p)/(m-p+(v-M)),t.copy(r).addScaledVector(xx,c);const S=1/(x+E+_);return u=E*S,c=_*S,t.copy(n).addScaledVector(Za,u).addScaledVector(Qa,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},uo={h:0,s:0,l:0},yf={h:0,s:0,l:0};function kp(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class sn{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=jt.workingColorSpace){if(e=xw(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=kp(u,a,e+1/3),this.g=kp(u,a,e),this.b=kp(u,a,e-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(e,t=yr){function n(a){a!==void 0&&parseFloat(a)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yr){const n=Fy[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=ml(e.r),this.g=ml(e.g),this.b=ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yr){return jt.workingToColorSpace(mi.copy(this),e),Math.round(Bt(mi.r*255,0,255))*65536+Math.round(Bt(mi.g*255,0,255))*256+Math.round(Bt(mi.b*255,0,255))}getHexString(e=yr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(mi.copy(this),t);const n=mi.r,r=mi.g,a=mi.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const m=u-c;switch(h=p<=.5?m/(u+c):m/(2-u-c),u){case n:d=(r-a)/m+(r<a?6:0);break;case r:d=(a-n)/m+2;break;case a:d=(n-r)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(mi.copy(this),t),e.r=mi.r,e.g=mi.g,e.b=mi.b,e}getStyle(e=yr){jt.workingToColorSpace(mi.copy(this),e);const t=mi.r,n=mi.g,r=mi.b;return e!==yr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(uo),this.setHSL(uo.h+e,uo.s+t,uo.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(uo),e.getHSL(yf);const n=Sp(uo.h,yf.h,t),r=Sp(uo.s,yf.s,t),a=Sp(uo.l,yf.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new sn;sn.NAMES=Fy;let Iw=0;class Ad extends Dl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=rc(),this.name="",this.type="Material",this.blending=pl,this.side=Co,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mm,this.blendDst=gm,this.blendEquation=ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new sn(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pl&&(n.blending=this.blending),this.side!==Co&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mm&&(n.blendSrc=this.blendSrc),this.blendDst!==gm&&(n.blendDst=this.blendDst),this.blendEquation!==ta&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ha&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ha&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ha&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ky extends Ad{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=vy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const In=new he,Ef=new Gt;let Uw=0;class os{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sx,this.updateRanges=[],this.gpuType=Cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ef.fromBufferAttribute(this,t),Ef.applyMatrix3(e),this.setXY(t,Ef.x,Ef.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Fi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fi(t,this.array),n=Fi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Fi(t,this.array),n=Fi(n,this.array),r=Fi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Fi(t,this.array),n=Fi(n,this.array),r=Fi(r,this.array),a=Fi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sx&&(e.usage=this.usage),e}}class By extends os{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zy extends os{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ns extends os{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ow=0;const xr=new Fn,Bp=new ur,Ja=new he,Zi=new oc,_u=new oc,Zn=new he;class ks extends Dl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=rc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iy(e)?zy:By)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new wt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Bp.lookAt(e),Bp.updateMatrix(),this.applyMatrix4(Bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ja).negate(),this.translate(Ja.x,Ja.y,Ja.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ns(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Zi.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Zi.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Zi.min),this.boundingBox.expandByPoint(Zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const n=this.boundingSphere.center;if(Zi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];_u.setFromBufferAttribute(c),this.morphTargetsRelative?(Zn.addVectors(Zi.min,_u.min),Zi.expandByPoint(Zn),Zn.addVectors(Zi.max,_u.max),Zi.expandByPoint(Zn)):(Zi.expandByPoint(_u.min),Zi.expandByPoint(_u.max))}Zi.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Zn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Zn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Zn.fromBufferAttribute(c,h),d&&(Ja.fromBufferAttribute(e,h),Zn.add(Ja)),r=Math.max(r,n.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new os(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<n.count;z++)c[z]=new he,d[z]=new he;const h=new he,p=new he,m=new he,_=new Gt,v=new Gt,M=new Gt,E=new he,x=new he;function S(z,T,C){h.fromBufferAttribute(n,z),p.fromBufferAttribute(n,T),m.fromBufferAttribute(n,C),_.fromBufferAttribute(a,z),v.fromBufferAttribute(a,T),M.fromBufferAttribute(a,C),p.sub(h),m.sub(h),v.sub(_),M.sub(_);const V=1/(v.x*M.y-M.x*v.y);isFinite(V)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(m,-v.y).multiplyScalar(V),x.copy(m).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(V),c[z].add(E),c[T].add(E),c[C].add(E),d[z].add(x),d[T].add(x),d[C].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,T=b.length;z<T;++z){const C=b[z],V=C.start,j=C.count;for(let Q=V,ne=V+j;Q<ne;Q+=3)S(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new he,A=new he,N=new he,U=new he;function L(z){N.fromBufferAttribute(r,z),U.copy(N);const T=c[z];P.copy(T),P.sub(N.multiplyScalar(N.dot(T))).normalize(),A.crossVectors(U,T);const V=A.dot(d[z])<0?-1:1;u.setXYZW(z,P.x,P.y,P.z,V)}for(let z=0,T=b.length;z<T;++z){const C=b[z],V=C.start,j=C.count;for(let Q=V,ne=V+j;Q<ne;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new os(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,v=n.count;_<v;_++)n.setXYZ(_,0,0,0);const r=new he,a=new he,u=new he,c=new he,d=new he,h=new he,p=new he,m=new he;if(e)for(let _=0,v=e.count;_<v;_+=3){const M=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),p.subVectors(u,a),m.subVectors(r,a),p.cross(m),c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),c.add(p),d.add(p),h.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,v=t.count;_<v;_+=3)r.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),m.subVectors(r,a),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zn.fromBufferAttribute(e,t),Zn.normalize(),e.setXYZ(t,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,m=c.normalized,_=new h.constructor(d.length*p);let v=0,M=0;for(let E=0,x=d.length;E<x;E++){c.isInterleavedBufferAttribute?v=d[E]*c.data.stride+c.offset:v=d[E]*p;for(let S=0;S<p;S++)_[M++]=h[v++]}return new os(_,p,m)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ks,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,m=h.length;p<m;p++){const _=h[p],v=e(_,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,_=h.length;m<_;m++){const v=h[m];p.push(v.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let _=0,v=m.length;_<v;_++)p.push(m[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sx=new Fn,Yo=new Cw,Mf=new qg,yx=new he,Tf=new he,wf=new he,Af=new he,zp=new he,Cf=new he,Ex=new he,Rf=new he;class Wr extends ur{constructor(e=new ks,t=new ky){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Cf.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],m=a[d];p!==0&&(zp.fromBufferAttribute(m,e),u?Cf.addScaledVector(zp,p):Cf.addScaledVector(zp.sub(t),p))}t.add(Cf)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mf.copy(n.boundingSphere),Mf.applyMatrix4(a),Yo.copy(e.ray).recast(e.near),!(Mf.containsPoint(Yo.origin)===!1&&(Yo.intersectSphere(Mf,yx)===null||Yo.origin.distanceToSquared(yx)>(e.far-e.near)**2))&&(Sx.copy(a).invert(),Yo.copy(e.ray).applyMatrix4(Sx),!(n.boundingBox!==null&&Yo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const x=_[M],S=u[x.materialIndex],b=Math.max(x.start,v.start),P=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let A=b,N=P;A<N;A+=3){const U=c.getX(A),L=c.getX(A+1),z=c.getX(A+2);r=bf(this,S,e,n,h,p,m,U,L,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let x=M,S=E;x<S;x+=3){const b=c.getX(x),P=c.getX(x+1),A=c.getX(x+2);r=bf(this,u,e,n,h,p,m,b,P,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const x=_[M],S=u[x.materialIndex],b=Math.max(x.start,v.start),P=Math.min(d.count,Math.min(x.start+x.count,v.start+v.count));for(let A=b,N=P;A<N;A+=3){const U=A,L=A+1,z=A+2;r=bf(this,S,e,n,h,p,m,U,L,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let x=M,S=E;x<S;x+=3){const b=x,P=x+1,A=x+2;r=bf(this,u,e,n,h,p,m,b,P,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Fw(o,e,t,n,r,a,u,c){let d;if(e.side===Wi?d=n.intersectTriangle(u,a,r,!0,c):d=n.intersectTriangle(r,a,u,e.side===Co,c),d===null)return null;Rf.copy(c),Rf.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Rf);return h<t.near||h>t.far?null:{distance:h,point:Rf.clone(),object:o}}function bf(o,e,t,n,r,a,u,c,d,h){o.getVertexPosition(c,Tf),o.getVertexPosition(d,wf),o.getVertexPosition(h,Af);const p=Fw(o,e,t,n,Tf,wf,Af,Ex);if(p){const m=new he;Hr.getBarycoord(Ex,Tf,wf,Af,m),r&&(p.uv=Hr.getInterpolatedAttribute(r,c,d,h,m,new Gt)),a&&(p.uv1=Hr.getInterpolatedAttribute(a,c,d,h,m,new Gt)),u&&(p.normal=Hr.getInterpolatedAttribute(u,c,d,h,m,new he),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new he,materialIndex:0};Hr.getNormal(Tf,wf,Af,_.normal),p.face=_,p.barycoord=m}return p}class ac extends ks{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],m=[];let _=0,v=0;M("z","y","x",-1,-1,n,t,e,u,a,0),M("z","y","x",1,-1,n,t,-e,u,a,1),M("x","z","y",1,1,e,n,t,r,u,2),M("x","z","y",1,-1,e,n,-t,r,u,3),M("x","y","z",1,-1,e,t,n,r,a,4),M("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Ns(h,3)),this.setAttribute("normal",new Ns(p,3)),this.setAttribute("uv",new Ns(m,2));function M(E,x,S,b,P,A,N,U,L,z,T){const C=A/L,V=N/z,j=A/2,Q=N/2,ne=U/2,J=L+1,$=z+1;let X=0,H=0;const re=new he;for(let I=0;I<$;I++){const F=I*V-Q;for(let se=0;se<J;se++){const Me=se*C-j;re[E]=Me*b,re[x]=F*P,re[S]=ne,h.push(re.x,re.y,re.z),re[E]=0,re[x]=0,re[S]=U>0?1:-1,p.push(re.x,re.y,re.z),m.push(se/L),m.push(1-I/z),X+=1}}for(let I=0;I<z;I++)for(let F=0;F<L;F++){const se=_+F+J*I,Me=_+F+J*(I+1),Ce=_+(F+1)+J*(I+1),ke=_+(F+1)+J*I;d.push(se,Me,ke),d.push(Me,Ce,ke),H+=6}c.addGroup(v,H,T),v+=H,_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bl(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ai(o){const e={};for(let t=0;t<o.length;t++){const n=bl(o[t]);for(const r in n)e[r]=n[r]}return e}function kw(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Vy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const Bw={clone:bl,merge:Ai};var zw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Ad{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zw,this.fragmentShader=Vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bl(e.uniforms),this.uniformsGroups=kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gy extends ur{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const co=new he,Mx=new Gt,Tx=new Gt;class Gr extends Gy{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=og*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return og*2*Math.atan(Math.tan(xp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(co.x,co.y).multiplyScalar(-e/co.z),co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(co.x,co.y).multiplyScalar(-e/co.z)}getViewSize(e,t){return this.getViewBounds(e,Mx,Tx),t.subVectors(Tx,Mx)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/d,t-=u.offsetY*n/h,r*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const el=-90,tl=1;class Gw extends ur{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gr(el,tl,e,t);r.layers=this.layers,this.add(r);const a=new Gr(el,tl,e,t);a.layers=this.layers,this.add(a);const u=new Gr(el,tl,e,t);u.layers=this.layers,this.add(u);const c=new Gr(el,tl,e,t);c.layers=this.layers,this.add(c);const d=new Gr(el,tl,e,t);d.layers=this.layers,this.add(d);const h=new Gr(el,tl,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===is)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===md)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,u),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,_,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Hy extends ai{constructor(e=[],t=pa,n,r,a,u,c,d,h,p){super(e,t,n,r,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wy extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ac(5,5,5),a=new Pr({name:"CubemapFromEquirect",uniforms:bl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wi,blending:bs});a.uniforms.tEquirect.value=t;const u=new Wr(r,a),c=t.minFilter;return t.minFilter===ra&&(t.minFilter=yn),new Gw(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}class Pf extends ur{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hw={type:"move"};class Vp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),S=this._getHandJoint(h,E);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=p.position.distanceTo(m.position),v=.02,M=.005;h.inputState.pinching&&_>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wx extends ur{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ww extends ai{constructor(e=null,t=1,n=1,r,a,u,c,d,h=ri,p=ri,m,_){super(null,u,c,d,h,p,r,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gp=new he,Xw=new he,jw=new wt;class Qo{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Gp.subVectors(n,t).cross(Xw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gp),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jw.getNormalMatrix(e),r=this.coplanarPoint(Gp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qo=new qg,Yw=new Gt(.5,.5),Nf=new he;class Xy{constructor(e=new Qo,t=new Qo,n=new Qo,r=new Qo,a=new Qo,u=new Qo){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=is,n=!1){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],p=a[4],m=a[5],_=a[6],v=a[7],M=a[8],E=a[9],x=a[10],S=a[11],b=a[12],P=a[13],A=a[14],N=a[15];if(r[0].setComponents(h-u,v-p,S-M,N-b).normalize(),r[1].setComponents(h+u,v+p,S+M,N+b).normalize(),r[2].setComponents(h+c,v+m,S+E,N+P).normalize(),r[3].setComponents(h-c,v-m,S-E,N-P).normalize(),n)r[4].setComponents(d,_,x,A).normalize(),r[5].setComponents(h-d,v-_,S-x,N-A).normalize();else if(r[4].setComponents(h-d,v-_,S-x,N-A).normalize(),t===is)r[5].setComponents(h+d,v+_,S+x,N+A).normalize();else if(t===md)r[5].setComponents(d,_,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qo)}intersectsSprite(e){qo.center.set(0,0,0);const t=Yw.distanceTo(e.center);return qo.radius=.7071067811865476+t,qo.applyMatrix4(e.matrixWorld),this.intersectsSphere(qo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Nf.x=r.normal.x>0?e.max.x:e.min.x,Nf.y=r.normal.y>0?e.max.y:e.min.y,Nf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ec extends ai{constructor(e,t,n=us,r,a,u,c=ri,d=ri,h,p=Os,m=1){if(p!==Os&&p!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:m};super(_,r,a,u,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qw extends ec{constructor(e,t=us,n=pa,r,a,u=ri,c=ri,d,h=Os){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,n,r,a,u,c,d,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jy extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lc extends ks{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,m=e/c,_=t/d,v=[],M=[],E=[],x=[];for(let S=0;S<p;S++){const b=S*_-u;for(let P=0;P<h;P++){const A=P*m-a;M.push(A,-b,0),E.push(0,0,1),x.push(P/c),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let b=0;b<c;b++){const P=b+h*S,A=b+h*(S+1),N=b+1+h*(S+1),U=b+1+h*S;v.push(P,A,U),v.push(A,N,U)}this.setIndex(v),this.setAttribute("position",new Ns(M,3)),this.setAttribute("normal",new Ns(E,3)),this.setAttribute("uv",new Ns(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $w extends Pr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kw extends Ad{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zw extends Ad{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $g extends Gy{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qw extends Gr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ax(o,e,t,n){const r=Jw(n);switch(t){case Ny:return o*e;case Ly:return o*e/r.components*r.byteLength;case Gg:return o*e/r.components*r.byteLength;case Cl:return o*e*2/r.components*r.byteLength;case Hg:return o*e*2/r.components*r.byteLength;case Dy:return o*e*3/r.components*r.byteLength;case ar:return o*e*4/r.components*r.byteLength;case Wg:return o*e*4/r.components*r.byteLength;case Kf:case Zf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qf:case Jf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bm:case Nm:return Math.max(o,16)*Math.max(e,8)/4;case Rm:case Pm:return Math.max(o,8)*Math.max(e,8)/2;case Dm:case Lm:case Um:case Om:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Im:case Fm:case km:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zm:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Gm:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Hm:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Wm:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Xm:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case jm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ym:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qm:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case $m:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Km:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zm:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Qm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Jm:case eg:case tg:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ng:case ig:return Math.ceil(o/4)*Math.ceil(e/4)*8;case rg:case sg:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jw(o){switch(o){case Tr:case Cy:return{byteLength:1,components:1};case Zu:case Ry:case Us:return{byteLength:2,components:1};case zg:case Vg:return{byteLength:2,components:4};case us:case Bg:case Cr:return{byteLength:4,components:1};case by:case Py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kg}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kg);function Yy(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function eA(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,m=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=o.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=o.SHORT;else if(h instanceof Uint32Array)v=o.UNSIGNED_INT;else if(h instanceof Int32Array)v=o.INT;else if(h instanceof Int8Array)v=o.BYTE;else if(h instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,d,h){const p=d.array,m=d.updateRanges;if(o.bindBuffer(h,c),m.length===0)o.bufferSubData(h,0,p);else{m.sort((v,M)=>v.start-M.start);let _=0;for(let v=1;v<m.length;v++){const M=m[_],E=m[v];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,m[_]=E)}m.length=_+1;for(let v=0,M=m.length;v<M;v++){const E=m[v];o.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:u}}var tA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NA="gl_FragColor = linearToOutputTexel( gl_FragColor );",DA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$A=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$C=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ER=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bt={alphahash_fragment:tA,alphahash_pars_fragment:nA,alphamap_fragment:iA,alphamap_pars_fragment:rA,alphatest_fragment:sA,alphatest_pars_fragment:oA,aomap_fragment:aA,aomap_pars_fragment:lA,batching_pars_vertex:uA,batching_vertex:cA,begin_vertex:fA,beginnormal_vertex:dA,bsdfs:hA,iridescence_fragment:pA,bumpmap_pars_fragment:mA,clipping_planes_fragment:gA,clipping_planes_pars_fragment:_A,clipping_planes_pars_vertex:vA,clipping_planes_vertex:xA,color_fragment:SA,color_pars_fragment:yA,color_pars_vertex:EA,color_vertex:MA,common:TA,cube_uv_reflection_fragment:wA,defaultnormal_vertex:AA,displacementmap_pars_vertex:CA,displacementmap_vertex:RA,emissivemap_fragment:bA,emissivemap_pars_fragment:PA,colorspace_fragment:NA,colorspace_pars_fragment:DA,envmap_fragment:LA,envmap_common_pars_fragment:IA,envmap_pars_fragment:UA,envmap_pars_vertex:OA,envmap_physical_pars_fragment:YA,envmap_vertex:FA,fog_vertex:kA,fog_pars_vertex:BA,fog_fragment:zA,fog_pars_fragment:VA,gradientmap_pars_fragment:GA,lightmap_pars_fragment:HA,lights_lambert_fragment:WA,lights_lambert_pars_fragment:XA,lights_pars_begin:jA,lights_toon_fragment:qA,lights_toon_pars_fragment:$A,lights_phong_fragment:KA,lights_phong_pars_fragment:ZA,lights_physical_fragment:QA,lights_physical_pars_fragment:JA,lights_fragment_begin:eC,lights_fragment_maps:tC,lights_fragment_end:nC,logdepthbuf_fragment:iC,logdepthbuf_pars_fragment:rC,logdepthbuf_pars_vertex:sC,logdepthbuf_vertex:oC,map_fragment:aC,map_pars_fragment:lC,map_particle_fragment:uC,map_particle_pars_fragment:cC,metalnessmap_fragment:fC,metalnessmap_pars_fragment:dC,morphinstance_vertex:hC,morphcolor_vertex:pC,morphnormal_vertex:mC,morphtarget_pars_vertex:gC,morphtarget_vertex:_C,normal_fragment_begin:vC,normal_fragment_maps:xC,normal_pars_fragment:SC,normal_pars_vertex:yC,normal_vertex:EC,normalmap_pars_fragment:MC,clearcoat_normal_fragment_begin:TC,clearcoat_normal_fragment_maps:wC,clearcoat_pars_fragment:AC,iridescence_pars_fragment:CC,opaque_fragment:RC,packing:bC,premultiplied_alpha_fragment:PC,project_vertex:NC,dithering_fragment:DC,dithering_pars_fragment:LC,roughnessmap_fragment:IC,roughnessmap_pars_fragment:UC,shadowmap_pars_fragment:OC,shadowmap_pars_vertex:FC,shadowmap_vertex:kC,shadowmask_pars_fragment:BC,skinbase_vertex:zC,skinning_pars_vertex:VC,skinning_vertex:GC,skinnormal_vertex:HC,specularmap_fragment:WC,specularmap_pars_fragment:XC,tonemapping_fragment:jC,tonemapping_pars_fragment:YC,transmission_fragment:qC,transmission_pars_fragment:$C,uv_pars_fragment:KC,uv_pars_vertex:ZC,uv_vertex:QC,worldpos_vertex:JC,background_vert:eR,background_frag:tR,backgroundCube_vert:nR,backgroundCube_frag:iR,cube_vert:rR,cube_frag:sR,depth_vert:oR,depth_frag:aR,distance_vert:lR,distance_frag:uR,equirect_vert:cR,equirect_frag:fR,linedashed_vert:dR,linedashed_frag:hR,meshbasic_vert:pR,meshbasic_frag:mR,meshlambert_vert:gR,meshlambert_frag:_R,meshmatcap_vert:vR,meshmatcap_frag:xR,meshnormal_vert:SR,meshnormal_frag:yR,meshphong_vert:ER,meshphong_frag:MR,meshphysical_vert:TR,meshphysical_frag:wR,meshtoon_vert:AR,meshtoon_frag:CR,points_vert:RR,points_frag:bR,shadow_vert:PR,shadow_frag:NR,sprite_vert:DR,sprite_frag:LR},Ve={common:{diffuse:{value:new sn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new sn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new sn(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},es={basic:{uniforms:Ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)},specular:{value:new sn(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Ai([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Ai([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new sn(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Ai([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Ai([Ve.points,Ve.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Ai([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Ai([Ve.common,Ve.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Ai([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Ai([Ve.sprite,Ve.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Ai([Ve.common,Ve.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Ai([Ve.lights,Ve.fog,{color:{value:new sn(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};es.physical={uniforms:Ai([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new sn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new sn(0)},specularColor:{value:new sn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Df={r:0,b:0,g:0},$o=new Fs,IR=new Fn;function UR(o,e,t,n,r,a,u){const c=new sn(0);let d=a===!0?0:1,h,p,m=null,_=0,v=null;function M(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function E(P){let A=!1;const N=M(P);N===null?S(c,d):N&&N.isColor&&(S(N,1),A=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(P,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===wd)?(p===void 0&&(p=new Wr(new ac(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:bl(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),$o.copy(A.backgroundRotation),$o.x*=-1,$o.y*=-1,$o.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&($o.y*=-1,$o.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(IR.makeRotationFromEuler($o)),p.material.toneMapped=jt.getTransfer(N.colorSpace)!==nn,(m!==N||_!==N.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,m=N,_=N.version,v=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Wr(new lc(2,2),new Pr({name:"BackgroundMaterial",uniforms:bl(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:Co,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=jt.getTransfer(N.colorSpace)!==nn,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||_!==N.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,m=N,_=N.version,v=o.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function S(P,A){P.getRGB(Df,Vy(o)),n.buffers.color.setClear(Df.r,Df.g,Df.b,A,u)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,A=1){c.set(P),d=A,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,S(c,d)},render:E,addToRenderList:x,dispose:b}}function OR(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=_(null);let a=r,u=!1;function c(C,V,j,Q,ne){let J=!1;const $=m(Q,j,V);a!==$&&(a=$,h(a.object)),J=v(C,Q,j,ne),J&&M(C,Q,j,ne),ne!==null&&e.update(ne,o.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,A(C,V,j,Q),ne!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function p(C){return o.deleteVertexArray(C)}function m(C,V,j){const Q=j.wireframe===!0;let ne=n[C.id];ne===void 0&&(ne={},n[C.id]=ne);let J=ne[V.id];J===void 0&&(J={},ne[V.id]=J);let $=J[Q];return $===void 0&&($=_(d()),J[Q]=$),$}function _(C){const V=[],j=[],Q=[];for(let ne=0;ne<t;ne++)V[ne]=0,j[ne]=0,Q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:Q,object:C,attributes:{},index:null}}function v(C,V,j,Q){const ne=a.attributes,J=V.attributes;let $=0;const X=j.getAttributes();for(const H in X)if(X[H].location>=0){const I=ne[H];let F=J[H];if(F===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),I===void 0||I.attribute!==F||F&&I.data!==F.data)return!0;$++}return a.attributesNum!==$||a.index!==Q}function M(C,V,j,Q){const ne={},J=V.attributes;let $=0;const X=j.getAttributes();for(const H in X)if(X[H].location>=0){let I=J[H];I===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(I=C.instanceColor));const F={};F.attribute=I,I&&I.data&&(F.data=I.data),ne[H]=F,$++}a.attributes=ne,a.attributesNum=$,a.index=Q}function E(){const C=a.newAttributes;for(let V=0,j=C.length;V<j;V++)C[V]=0}function x(C){S(C,0)}function S(C,V){const j=a.newAttributes,Q=a.enabledAttributes,ne=a.attributeDivisors;j[C]=1,Q[C]===0&&(o.enableVertexAttribArray(C),Q[C]=1),ne[C]!==V&&(o.vertexAttribDivisor(C,V),ne[C]=V)}function b(){const C=a.newAttributes,V=a.enabledAttributes;for(let j=0,Q=V.length;j<Q;j++)V[j]!==C[j]&&(o.disableVertexAttribArray(j),V[j]=0)}function P(C,V,j,Q,ne,J,$){$===!0?o.vertexAttribIPointer(C,V,j,ne,J):o.vertexAttribPointer(C,V,j,Q,ne,J)}function A(C,V,j,Q){E();const ne=Q.attributes,J=j.getAttributes(),$=V.defaultAttributeValues;for(const X in J){const H=J[X];if(H.location>=0){let re=ne[X];if(re===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const I=re.normalized,F=re.itemSize,se=e.get(re);if(se===void 0)continue;const Me=se.buffer,Ce=se.type,ke=se.bytesPerElement,ee=Ce===o.INT||Ce===o.UNSIGNED_INT||re.gpuType===Bg;if(re.isInterleavedBufferAttribute){const ue=re.data,_e=ue.stride,Ue=re.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)x(H.location+Oe);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let Oe=0;Oe<H.locationSize;Oe++)P(H.location+Oe,F/H.locationSize,Ce,I,_e*ke,(Ue+F/H.locationSize*Oe)*ke,ee)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)S(H.location+ue,re.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<H.locationSize;ue++)x(H.location+ue);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ue=0;ue<H.locationSize;ue++)P(H.location+ue,F/H.locationSize,Ce,I,F*ke,F/H.locationSize*ue*ke,ee)}}else if($!==void 0){const I=$[X];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(H.location,I);break;case 3:o.vertexAttrib3fv(H.location,I);break;case 4:o.vertexAttrib4fv(H.location,I);break;default:o.vertexAttrib1fv(H.location,I)}}}}b()}function N(){z();for(const C in n){const V=n[C];for(const j in V){const Q=V[j];for(const ne in Q)p(Q[ne].object),delete Q[ne];delete V[j]}delete n[C]}}function U(C){if(n[C.id]===void 0)return;const V=n[C.id];for(const j in V){const Q=V[j];for(const ne in Q)p(Q[ne].object),delete Q[ne];delete V[j]}delete n[C.id]}function L(C){for(const V in n){const j=n[V];if(j[C.id]===void 0)continue;const Q=j[C.id];for(const ne in Q)p(Q[ne].object),delete Q[ne];delete j[C.id]}}function z(){T(),u=!0,a!==r&&(a=r,h(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:z,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:x,disableUnusedAttributes:b}}function FR(o,e,t){let n;function r(h){n=h}function a(h,p){o.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,m){m!==0&&(o.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let M=0;M<m;M++)v+=p[M];t.update(v,n,1)}function d(h,p,m,_){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)u(h[M],p[M],_[M]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,_,0,m);let M=0;for(let E=0;E<m;E++)M+=p[E]*_[E];t.update(M,n,1)}}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function kR(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(L){return!(L!==ar&&n.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const z=L===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Tr&&n.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Cr&&!z)}function d(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(Mt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),b=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:A,maxSamples:N,samples:U}}function BR(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Qo,c=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const v=m.length!==0||_||n!==0||r;return r=_,n=m.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,v){const M=m.clippingPlanes,E=m.clipIntersection,x=m.clipShadows,S=o.get(m);if(!r||M===null||M.length===0||a&&!x)a?p(null):h();else{const b=a?0:n,P=b*4;let A=S.clippingState||null;d.value=A,A=p(M,_,P,v);for(let N=0;N!==P;++N)A[N]=t[N];S.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,v,M){const E=m!==null?m.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const S=v+E*4,b=_.matrixWorldInverse;c.getNormalMatrix(b),(x===null||x.length<S)&&(x=new Float32Array(S));for(let P=0,A=v;P!==E;++P,A+=4)u.copy(m[P]).applyMatrix4(b,c),u.normal.toArray(x,A),x[A+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function zR(o){let e=new WeakMap;function t(u,c){return c===Tm?u.mapping=pa:c===wm&&(u.mapping=Al),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Tm||c===wm)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new Wy(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),t(h.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const vo=4,Cx=[.125,.215,.35,.446,.526,.582],na=20,VR=256,vu=new $g,Rx=new sn;let Hp=null,Wp=0,Xp=0,jp=!1;const GR=new he;class bx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:u=256,position:c=GR}=a;Hp=this._renderer.getRenderTarget(),Wp=this._renderer.getActiveCubeFace(),Xp=this._renderer.getActiveMipmapLevel(),jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hp,Wp,Xp),this._renderer.xr.enabled=jp,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===Al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hp=this._renderer.getRenderTarget(),Wp=this._renderer.getActiveCubeFace(),Xp=this._renderer.getActiveMipmapLevel(),jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Us,format:ar,colorSpace:Rl,depthBuffer:!1},r=Px(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Px(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HR(a)),this._blurMaterial=XR(a,e,t),this._ggxMaterial=WR(a,e,t)}return r}_compileMaterial(e){const t=new Wr(new ks,e);this._renderer.compile(t,vu)}_sceneToCubeUV(e,t,n,r,a){const d=new Gr(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Rx),m.toneMapping=ss,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wr(new ac,new ky({name:"PMREM.Background",side:Wi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let S=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,S=!0):(x.color.copy(Rx),S=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[P],a.y,a.z)):A===1?(d.up.set(0,0,h[P]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[P],a.z)):(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[P]));const N=this._cubeSize;nl(r,A*N,P>2?N:0,N,N),m.setRenderTarget(r),S&&m.render(E,d),m.render(e,d)}m.toneMapping=v,m.autoClear=_,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pa||e.mapping===Al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());const a=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;nl(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,vu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const d=u.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),_=0+h*1.25,v=m*_,{_lodMax:M}=this,E=this._sizeLods[n],x=3*E*(n>M-vo?n-M+vo:0),S=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=M-t,nl(a,x,S,3*E,2*E),r.setRenderTarget(a),r.render(c,vu),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-n,nl(e,x,S,3*E,2*E),r.setRenderTarget(e),r.render(c,vu)}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=h;const _=h.uniforms,v=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*na-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):na;x>na&&Mt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${na}`);const S=[];let b=0;for(let L=0;L<na;++L){const z=L/E,T=Math.exp(-z*z/2);S.push(T),L===0?b+=T:L<x&&(b+=2*T)}for(let L=0;L<S.length;L++)S[L]=S[L]/b;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=S,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-n;const A=this._sizeLods[r],N=3*A*(r>P-vo?r-P+vo:0),U=4*(this._cubeSize-A);nl(t,N,U,3*A,2*A),d.setRenderTarget(t),d.render(m,vu)}}function HR(o){const e=[],t=[],n=[];let r=o;const a=o-vo+1+Cx.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);e.push(c);let d=1/c;u>o-vo?d=Cx[u-o+vo-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,M=6,E=3,x=2,S=1,b=new Float32Array(E*M*v),P=new Float32Array(x*M*v),A=new Float32Array(S*M*v);for(let U=0;U<v;U++){const L=U%3*2/3-1,z=U>2?0:-1,T=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];b.set(T,E*M*U),P.set(_,x*M*U);const C=[U,U,U,U,U,U];A.set(C,S*M*U)}const N=new ks;N.setAttribute("position",new os(b,E)),N.setAttribute("uv",new os(P,x)),N.setAttribute("faceIndex",new os(A,S)),n.push(new Wr(N,null)),r>vo&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Px(o,e,t){const n=new Rr(o,e,t);return n.texture.mapping=wd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nl(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function WR(o,e,t){return new Pr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function XR(o,e,t){const n=new Float32Array(na),r=new he(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:na,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Nx(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Dx(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jR(o){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===Tm||d===wm,p=d===pa||d===Al;if(h||p){let m=e.get(c);const _=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new bx(o)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return h&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new bx(o)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function r(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function YR(o){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=o.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ju("WebGLRenderer: "+n+" extension not supported."),r}}}function qR(o,e,t,n){const r={},a=new WeakMap;function u(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete r[_.id];const v=a.get(_);v&&(e.remove(v),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(m,_){return r[_.id]===!0||(_.addEventListener("dispose",u),r[_.id]=!0,t.memory.geometries++),_}function d(m){const _=m.attributes;for(const v in _)e.update(_[v],o.ARRAY_BUFFER)}function h(m){const _=[],v=m.index,M=m.attributes.position;let E=0;if(v!==null){const b=v.array;E=v.version;for(let P=0,A=b.length;P<A;P+=3){const N=b[P+0],U=b[P+1],L=b[P+2];_.push(N,U,U,L,L,N)}}else if(M!==void 0){const b=M.array;E=M.version;for(let P=0,A=b.length/3-1;P<A;P+=3){const N=P+0,U=P+1,L=P+2;_.push(N,U,U,L,L,N)}}else return;const x=new(Iy(_)?zy:By)(_,1);x.version=E;const S=a.get(m);S&&e.remove(S),a.set(m,x)}function p(m){const _=a.get(m);if(_){const v=m.index;v!==null&&_.version<v.version&&h(m)}else h(m);return a.get(m)}return{get:c,update:d,getWireframeAttribute:p}}function $R(o,e,t){let n;function r(_){n=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function d(_,v){o.drawElements(n,v,a,_*u),t.update(v,n,1)}function h(_,v,M){M!==0&&(o.drawElementsInstanced(n,v,a,_*u,M),t.update(v,n,M))}function p(_,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,_,0,M);let x=0;for(let S=0;S<M;S++)x+=v[S];t.update(x,n,1)}function m(_,v,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<_.length;S++)h(_[S]/u,v[S],E[S]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,a,_,0,E,0,M);let S=0;for(let b=0;b<M;b++)S+=v[b]*E[b];t.update(S,n,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function KR(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:$t("WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ZR(o,e,t){const n=new WeakMap,r=new Nn;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(c);if(_===void 0||_.count!==m){let C=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",C)};var v=C;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),x===!0&&(A=3);let N=c.attributes.position.count*A,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*U*4*m),z=new Uy(L,N,U,m);z.type=Cr,z.needsUpdate=!0;const T=A*4;for(let V=0;V<m;V++){const j=S[V],Q=b[V],ne=P[V],J=N*U*4*V;for(let $=0;$<j.count;$++){const X=$*T;M===!0&&(r.fromBufferAttribute(j,$),L[J+X+0]=r.x,L[J+X+1]=r.y,L[J+X+2]=r.z,L[J+X+3]=0),E===!0&&(r.fromBufferAttribute(Q,$),L[J+X+4]=r.x,L[J+X+5]=r.y,L[J+X+6]=r.z,L[J+X+7]=0),x===!0&&(r.fromBufferAttribute(ne,$),L[J+X+8]=r.x,L[J+X+9]=r.y,L[J+X+10]=r.z,L[J+X+11]=ne.itemSize===4?r.w:1)}}_={count:m,texture:z,size:new Gt(N,U)},n.set(c,_),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function QR(o,e,t,n){let r=new WeakMap;function a(d){const h=n.render.frame,p=d.geometry,m=e.get(d,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==h&&(_.update(),r.set(_,h))}return m}function u(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const JR={[xy]:"LINEAR_TONE_MAPPING",[Sy]:"REINHARD_TONE_MAPPING",[yy]:"CINEON_TONE_MAPPING",[Ey]:"ACES_FILMIC_TONE_MAPPING",[Ty]:"AGX_TONE_MAPPING",[wy]:"NEUTRAL_TONE_MAPPING",[My]:"CUSTOM_TONE_MAPPING"};function eb(o,e,t,n,r){const a=new Rr(e,t,{type:o,depthBuffer:n,stencilBuffer:r}),u=new Rr(e,t,{type:Us,depthBuffer:!1,stencilBuffer:!1}),c=new ks;c.setAttribute("position",new Ns([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ns([0,2,0,0,2,0],2));const d=new $w({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Wr(c,d),p=new $g(-1,1,1,-1,0,1);let m=null,_=null,v=!1,M,E=null,x=[],S=!1;this.setSize=function(b,P){a.setSize(b,P),u.setSize(b,P);for(let A=0;A<x.length;A++){const N=x[A];N.setSize&&N.setSize(b,P)}},this.setEffects=function(b){x=b,S=x.length>0&&x[0].isRenderPass===!0;const P=a.width,A=a.height;for(let N=0;N<x.length;N++){const U=x[N];U.setSize&&U.setSize(P,A)}},this.begin=function(b,P){if(v||b.toneMapping===ss&&x.length===0)return!1;if(E=P,P!==null){const A=P.width,N=P.height;(a.width!==A||a.height!==N)&&this.setSize(A,N)}return S===!1&&b.setRenderTarget(a),M=b.toneMapping,b.toneMapping=ss,!0},this.hasRenderPass=function(){return S},this.end=function(b,P){b.toneMapping=M,v=!0;let A=a,N=u;for(let U=0;U<x.length;U++){const L=x[U];if(L.enabled!==!1&&(L.render(b,N,A,P),L.needsSwap!==!1)){const z=A;A=N,N=z}}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,d.defines={},jt.getTransfer(m)===nn&&(d.defines.SRGB_TRANSFER="");const U=JR[_];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(E),b.render(h,p),E=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),u.dispose(),c.dispose(),d.dispose()}}const qy=new ai,ag=new ec(1,1),$y=new Uy,Ky=new ww,Zy=new Hy,Lx=[],Ix=[],Ux=new Float32Array(16),Ox=new Float32Array(9),Fx=new Float32Array(4);function Ll(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Lx[r];if(a===void 0&&(a=new Float32Array(r),Lx[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function Hn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Wn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Rd(o,e){let t=Ix[e];t===void 0&&(t=new Int32Array(e),Ix[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function tb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function nb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;o.uniform2fv(this.addr,e),Wn(t,e)}}function ib(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;o.uniform3fv(this.addr,e),Wn(t,e)}}function rb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;o.uniform4fv(this.addr,e),Wn(t,e)}}function sb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Wn(t,e)}else{if(Hn(t,n))return;Fx.set(n),o.uniformMatrix2fv(this.addr,!1,Fx),Wn(t,n)}}function ob(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Wn(t,e)}else{if(Hn(t,n))return;Ox.set(n),o.uniformMatrix3fv(this.addr,!1,Ox),Wn(t,n)}}function ab(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Wn(t,e)}else{if(Hn(t,n))return;Ux.set(n),o.uniformMatrix4fv(this.addr,!1,Ux),Wn(t,n)}}function lb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ub(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;o.uniform2iv(this.addr,e),Wn(t,e)}}function cb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;o.uniform3iv(this.addr,e),Wn(t,e)}}function fb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;o.uniform4iv(this.addr,e),Wn(t,e)}}function db(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function hb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;o.uniform2uiv(this.addr,e),Wn(t,e)}}function pb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;o.uniform3uiv(this.addr,e),Wn(t,e)}}function mb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;o.uniform4uiv(this.addr,e),Wn(t,e)}}function gb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);let a;this.type===o.SAMPLER_2D_SHADOW?(ag.compareFunction=t.isReversedDepthBuffer()?jg:Xg,a=ag):a=qy,t.setTexture2D(e||a,r)}function _b(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ky,r)}function vb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zy,r)}function xb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$y,r)}function Sb(o){switch(o){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return ub;case 35668:case 35672:return cb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}function yb(o,e){o.uniform1fv(this.addr,e)}function Eb(o,e){const t=Ll(e,this.size,2);o.uniform2fv(this.addr,t)}function Mb(o,e){const t=Ll(e,this.size,3);o.uniform3fv(this.addr,t)}function Tb(o,e){const t=Ll(e,this.size,4);o.uniform4fv(this.addr,t)}function wb(o,e){const t=Ll(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ab(o,e){const t=Ll(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Cb(o,e){const t=Ll(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Rb(o,e){o.uniform1iv(this.addr,e)}function bb(o,e){o.uniform2iv(this.addr,e)}function Pb(o,e){o.uniform3iv(this.addr,e)}function Nb(o,e){o.uniform4iv(this.addr,e)}function Db(o,e){o.uniform1uiv(this.addr,e)}function Lb(o,e){o.uniform2uiv(this.addr,e)}function Ib(o,e){o.uniform3uiv(this.addr,e)}function Ub(o,e){o.uniform4uiv(this.addr,e)}function Ob(o,e,t){const n=this.cache,r=e.length,a=Rd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Wn(n,a));let u;this.type===o.SAMPLER_2D_SHADOW?u=ag:u=qy;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||u,a[c])}function Fb(o,e,t){const n=this.cache,r=e.length,a=Rd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Wn(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||Ky,a[u])}function kb(o,e,t){const n=this.cache,r=e.length,a=Rd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Wn(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||Zy,a[u])}function Bb(o,e,t){const n=this.cache,r=e.length,a=Rd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Wn(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||$y,a[u])}function zb(o){switch(o){case 5126:return yb;case 35664:return Eb;case 35665:return Mb;case 35666:return Tb;case 35674:return wb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return bb;case 35668:case 35672:return Pb;case 35669:case 35673:return Nb;case 5125:return Db;case 36294:return Lb;case 36295:return Ib;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Bb}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sb(t.type)}}class Gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zb(t.type)}}class Hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Yp=/(\w+)(\])?(\[|\.)?/g;function kx(o,e){o.seq.push(e),o.map[e.id]=e}function Wb(o,e,t){const n=o.name,r=n.length;for(Yp.lastIndex=0;;){const a=Yp.exec(n),u=Yp.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===r){kx(t,h===void 0?new Vb(c,o,e):new Gb(c,o,e));break}else{let m=t.map[c];m===void 0&&(m=new Hb(c),kx(t,m)),t=m}}}class ed{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);Wb(c,d,this)}const r=[],a=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):a.push(u);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function Bx(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const Xb=37297;let jb=0;function Yb(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const zx=new wt;function qb(o){jt._getMatrix(zx,jt.workingColorSpace,o);const e=`mat3( ${zx.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(o)){case pd:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Vx(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+Yb(o.getShaderSource(e),c)}else return a}function $b(o,e){const t=qb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Kb={[xy]:"Linear",[Sy]:"Reinhard",[yy]:"Cineon",[Ey]:"ACESFilmic",[Ty]:"AgX",[wy]:"Neutral",[My]:"Custom"};function Zb(o,e){const t=Kb[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lf=new he;function Qb(){jt.getLuminanceCoefficients(Lf);const o=Lf.x.toFixed(4),e=Lf.y.toFixed(4),t=Lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wu).join(`
`)}function e2(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t2(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function wu(o){return o!==""}function Gx(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n2=/^[ \t]*#include +<([\w\d./]+)>/gm;function lg(o){return o.replace(n2,r2)}const i2=new Map;function r2(o,e){let t=bt[e];if(t===void 0){const n=i2.get(e);if(n!==void 0)t=bt[n],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lg(t)}const s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wx(o){return o.replace(s2,o2)}function o2(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const a2={[$f]:"SHADOWMAP_TYPE_PCF",[Tu]:"SHADOWMAP_TYPE_VSM"};function l2(o){return a2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u2={[pa]:"ENVMAP_TYPE_CUBE",[Al]:"ENVMAP_TYPE_CUBE",[wd]:"ENVMAP_TYPE_CUBE_UV"};function c2(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":u2[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const f2={[Al]:"ENVMAP_MODE_REFRACTION"};function d2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":f2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h2={[vy]:"ENVMAP_BLENDING_MULTIPLY",[sw]:"ENVMAP_BLENDING_MIX",[ow]:"ENVMAP_BLENDING_ADD"};function p2(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":h2[o.combine]||"ENVMAP_BLENDING_NONE"}function m2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g2(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=l2(t),h=c2(t),p=d2(t),m=p2(t),_=m2(t),v=Jb(t),M=e2(a),E=r.createProgram();let x,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wu).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wu).join(`
`),S.length>0&&(S+=`
`)):(x=[Xx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wu).join(`
`),S=[Xx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?bt.tonemapping_pars_fragment:"",t.toneMapping!==ss?Zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,$b("linearToOutputTexel",t.outputColorSpace),Qb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wu).join(`
`)),u=lg(u),u=Gx(u,t),u=Hx(u,t),c=lg(c),c=Gx(c,t),c=Hx(c,t),u=Wx(u),c=Wx(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=b+x+u,A=b+S+c,N=Bx(r,r.VERTEX_SHADER,P),U=Bx(r,r.FRAGMENT_SHADER,A);r.attachShader(E,N),r.attachShader(E,U),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function L(V){if(o.debug.checkShaderErrors){const j=r.getProgramInfoLog(E)||"",Q=r.getShaderInfoLog(N)||"",ne=r.getShaderInfoLog(U)||"",J=j.trim(),$=Q.trim(),X=ne.trim();let H=!0,re=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,N,U);else{const I=Vx(r,N,"vertex"),F=Vx(r,U,"fragment");$t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+I+`
`+F)}else J!==""?Mt("WebGLProgram: Program Info Log:",J):($===""||X==="")&&(re=!1);re&&(V.diagnostics={runnable:H,programLog:J,vertexShader:{log:$,prefix:x},fragmentShader:{log:X,prefix:S}})}r.deleteShader(N),r.deleteShader(U),z=new ed(r,E),T=t2(r,E)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(E,Xb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=U,this}let _2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x2(e),t.set(e,n)),n}}class x2{constructor(e){this.id=_2++,this.code=e,this.usedTimes=0}}function S2(o,e,t,n,r,a,u){const c=new Oy,d=new v2,h=new Set,p=[],m=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function x(T,C,V,j,Q){const ne=j.fog,J=Q.geometry,$=T.isMeshStandardMaterial?j.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),H=X&&X.mapping===wd?X.image.height:null,re=M[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&Mt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const I=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,F=I!==void 0?I.length:0;let se=0;J.morphAttributes.position!==void 0&&(se=1),J.morphAttributes.normal!==void 0&&(se=2),J.morphAttributes.color!==void 0&&(se=3);let Me,Ce,ke,ee;if(re){const ze=es[re];Me=ze.vertexShader,Ce=ze.fragmentShader}else Me=T.vertexShader,Ce=T.fragmentShader,d.update(T),ke=d.getVertexShaderID(T),ee=d.getFragmentShaderID(T);const ue=o.getRenderTarget(),_e=o.state.buffers.depth.getReversed(),Ue=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,ft=!!T.map,Ut=!!T.matcap,Xe=!!X,lt=!!T.aoMap,St=!!T.lightMap,ot=!!T.bumpMap,oe=!!T.normalMap,W=!!T.displacementMap,Vt=!!T.emissiveMap,yt=!!T.metalnessMap,at=!!T.roughnessMap,We=T.anisotropy>0,O=T.clearcoat>0,w=T.dispersion>0,q=T.iridescence>0,pe=T.sheen>0,me=T.transmission>0,de=We&&!!T.anisotropyMap,Ge=O&&!!T.clearcoatMap,we=O&&!!T.clearcoatNormalMap,je=O&&!!T.clearcoatRoughnessMap,qe=q&&!!T.iridescenceMap,Ee=q&&!!T.iridescenceThicknessMap,Re=pe&&!!T.sheenColorMap,Ye=pe&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Ae=!!T.specularColorMap,mt=!!T.specularIntensityMap,G=me&&!!T.transmissionMap,Ie=me&&!!T.thicknessMap,xe=!!T.gradientMap,Le=!!T.alphaMap,ve=T.alphaTest>0,ge=!!T.alphaHash,Pe=!!T.extensions;let st=ss;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(st=o.toneMapping);const kt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:Ce,defines:T.defines,customVertexShaderID:ke,customFragmentShaderID:ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Oe,batchingColor:Oe&&Q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Q.instanceColor!==null,instancingMorph:Ue&&Q.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Rl,alphaToCoverage:!!T.alphaToCoverage,map:ft,matcap:Ut,envMap:Xe,envMapMode:Xe&&X.mapping,envMapCubeUVHeight:H,aoMap:lt,lightMap:St,bumpMap:ot,normalMap:oe,displacementMap:W,emissiveMap:Vt,normalMapObjectSpace:oe&&T.normalMapType===cw,normalMapTangentSpace:oe&&T.normalMapType===uw,metalnessMap:yt,roughnessMap:at,anisotropy:We,anisotropyMap:de,clearcoat:O,clearcoatMap:Ge,clearcoatNormalMap:we,clearcoatRoughnessMap:je,dispersion:w,iridescence:q,iridescenceMap:qe,iridescenceThicknessMap:Ee,sheen:pe,sheenColorMap:Re,sheenRoughnessMap:Ye,specularMap:$e,specularColorMap:Ae,specularIntensityMap:mt,transmission:me,transmissionMap:G,thicknessMap:Ie,gradientMap:xe,opaque:T.transparent===!1&&T.blending===pl&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:ge,combine:T.combine,mapUv:ft&&E(T.map.channel),aoMapUv:lt&&E(T.aoMap.channel),lightMapUv:St&&E(T.lightMap.channel),bumpMapUv:ot&&E(T.bumpMap.channel),normalMapUv:oe&&E(T.normalMap.channel),displacementMapUv:W&&E(T.displacementMap.channel),emissiveMapUv:Vt&&E(T.emissiveMap.channel),metalnessMapUv:yt&&E(T.metalnessMap.channel),roughnessMapUv:at&&E(T.roughnessMap.channel),anisotropyMapUv:de&&E(T.anisotropyMap.channel),clearcoatMapUv:Ge&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(T.sheenRoughnessMap.channel),specularMapUv:$e&&E(T.specularMap.channel),specularColorMapUv:Ae&&E(T.specularColorMap.channel),specularIntensityMapUv:mt&&E(T.specularIntensityMap.channel),transmissionMapUv:G&&E(T.transmissionMap.channel),thicknessMapUv:Ie&&E(T.thicknessMap.channel),alphaMapUv:Le&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(oe||We),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(ft||Le),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:_e,skinning:Q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:st,decodeVideoTexture:ft&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===nn,decodeVideoTextureEmissive:Vt&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===nn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ws,flipSided:T.side===Wi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return kt.vertexUv1s=h.has(1),kt.vertexUv2s=h.has(2),kt.vertexUv3s=h.has(3),h.clear(),kt}function S(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)C.push(V),C.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(b(C,T),P(C,T),C.push(o.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function b(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function P(T,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),T.push(c.mask)}function A(T){const C=M[T.type];let V;if(C){const j=es[C];V=Bw.clone(j.uniforms)}else V=T.uniforms;return V}function N(T,C){let V=m.get(C);return V!==void 0?++V.usedTimes:(V=new g2(o,C,T,a),p.push(V),m.set(C,V)),V}function U(T){if(--T.usedTimes===0){const C=p.indexOf(T);p[C]=p[p.length-1],p.pop(),m.delete(T.cacheKey),T.destroy()}}function L(T){d.remove(T)}function z(){d.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:A,acquireProgram:N,releaseProgram:U,releaseShaderCache:L,programs:p,dispose:z}}function y2(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function r(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function E2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function jx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Yx(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(m,_,v,M,E,x){let S=o[e];return S===void 0?(S={id:m.id,object:m,geometry:_,material:v,groupOrder:M,renderOrder:m.renderOrder,z:E,group:x},o[e]=S):(S.id=m.id,S.object=m,S.geometry=_,S.material=v,S.groupOrder=M,S.renderOrder=m.renderOrder,S.z=E,S.group=x),e++,S}function c(m,_,v,M,E,x){const S=u(m,_,v,M,E,x);v.transmission>0?n.push(S):v.transparent===!0?r.push(S):t.push(S)}function d(m,_,v,M,E,x){const S=u(m,_,v,M,E,x);v.transmission>0?n.unshift(S):v.transparent===!0?r.unshift(S):t.unshift(S)}function h(m,_){t.length>1&&t.sort(m||E2),n.length>1&&n.sort(_||jx),r.length>1&&r.sort(_||jx)}function p(){for(let m=e,_=o.length;m<_;m++){const v=o[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:d,finish:p,sort:h}}function M2(){let o=new WeakMap;function e(n,r){const a=o.get(n);let u;return a===void 0?(u=new Yx,o.set(n,[u])):r>=a.length?(u=new Yx,a.push(u)):u=a[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function T2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new sn};break;case"SpotLight":t={position:new he,direction:new he,color:new sn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new sn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new sn,groundColor:new sn};break;case"RectAreaLight":t={color:new sn,position:new he,halfWidth:new he,halfHeight:new he};break}return o[e.id]=t,t}}}function w2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let A2=0;function C2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function R2(o){const e=new T2,t=w2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new he);const r=new he,a=new Fn,u=new Fn;function c(h){let p=0,m=0,_=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let v=0,M=0,E=0,x=0,S=0,b=0,P=0,A=0,N=0,U=0,L=0;h.sort(C2);for(let T=0,C=h.length;T<C;T++){const V=h[T],j=V.color,Q=V.intensity,ne=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Cl?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)p+=j.r*Q,m+=j.g*Q,_+=j.b*Q;else if(V.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(V.sh.coefficients[$],Q);L++}else if(V.isDirectionalLight){const $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const X=V.shadow,H=t.get(V);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[v]=H,n.directionalShadowMap[v]=J,n.directionalShadowMatrix[v]=V.shadow.matrix,b++}n.directional[v]=$,v++}else if(V.isSpotLight){const $=e.get(V);$.position.setFromMatrixPosition(V.matrixWorld),$.color.copy(j).multiplyScalar(Q),$.distance=ne,$.coneCos=Math.cos(V.angle),$.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),$.decay=V.decay,n.spot[E]=$;const X=V.shadow;if(V.map&&(n.spotLightMap[N]=V.map,N++,X.updateMatrices(V),V.castShadow&&U++),n.spotLightMatrix[E]=X.matrix,V.castShadow){const H=t.get(V);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[E]=H,n.spotShadowMap[E]=J,A++}E++}else if(V.isRectAreaLight){const $=e.get(V);$.color.copy(j).multiplyScalar(Q),$.halfWidth.set(V.width*.5,0,0),$.halfHeight.set(0,V.height*.5,0),n.rectArea[x]=$,x++}else if(V.isPointLight){const $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),$.distance=V.distance,$.decay=V.decay,V.castShadow){const X=V.shadow,H=t.get(V);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[M]=H,n.pointShadowMap[M]=J,n.pointShadowMatrix[M]=V.shadow.matrix,P++}n.point[M]=$,M++}else if(V.isHemisphereLight){const $=e.get(V);$.skyColor.copy(V.color).multiplyScalar(Q),$.groundColor.copy(V.groundColor).multiplyScalar(Q),n.hemi[S]=$,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const z=n.hash;(z.directionalLength!==v||z.pointLength!==M||z.spotLength!==E||z.rectAreaLength!==x||z.hemiLength!==S||z.numDirectionalShadows!==b||z.numPointShadows!==P||z.numSpotShadows!==A||z.numSpotMaps!==N||z.numLightProbes!==L)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=A+N-U,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,z.directionalLength=v,z.pointLength=M,z.spotLength=E,z.rectAreaLength=x,z.hemiLength=S,z.numDirectionalShadows=b,z.numPointShadows=P,z.numSpotShadows=A,z.numSpotMaps=N,z.numLightProbes=L,n.version=A2++)}function d(h,p){let m=0,_=0,v=0,M=0,E=0;const x=p.matrixWorldInverse;for(let S=0,b=h.length;S<b;S++){const P=h[S];if(P.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),m++}else if(P.isSpotLight){const A=n.spot[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),v++}else if(P.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),u.identity(),a.copy(P.matrixWorld),a.premultiply(x),u.extractRotation(a),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const A=n.point[_];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),_++}else if(P.isHemisphereLight){const A=n.hemi[E];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),E++}}}return{setup:c,setupView:d,state:n}}function qx(o){const e=new R2(o),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function b2(o){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new qx(o),e.set(r,[c])):a>=u.length?(c=new qx(o),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const P2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D2=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],L2=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],$x=new Fn,xu=new he,qp=new he;function I2(o,e,t){let n=new Xy;const r=new Gt,a=new Gt,u=new Nn,c=new Kw,d=new Zw,h={},p=t.maxTextureSize,m={[Co]:Wi,[Wi]:Co,[ws]:ws},_=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:P2,fragmentShader:N2}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const M=new ks;M.setAttribute("position",new os(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Wr(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let S=this.type;this.render=function(U,L,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;U.type===zT&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=$f);const T=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),j=o.state;j.setBlending(bs),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=S!==this.type;Q&&L.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(J=>J.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,J=U.length;ne<J;ne++){const $=U[ne],X=$.shadow;if(X===void 0){Mt("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const H=X.getFrameExtents();if(r.multiply(H),a.copy(X.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/H.x),r.x=a.x*H.x,X.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/H.y),r.y=a.y*H.y,X.mapSize.y=a.y)),X.map===null||Q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Tu){if($.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Rr(r.x,r.y,{format:Cl,type:Us,minFilter:yn,magFilter:yn,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new ec(r.x,r.y,Cr),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=Os,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ri,X.map.depthTexture.magFilter=ri}else{$.isPointLight?(X.map=new Wy(r.x),X.map.depthTexture=new qw(r.x,us)):(X.map=new Rr(r.x,r.y),X.map.depthTexture=new ec(r.x,r.y,us)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=Os;const I=o.state.buffers.depth.getReversed();this.type===$f?(X.map.depthTexture.compareFunction=I?jg:Xg,X.map.depthTexture.minFilter=yn,X.map.depthTexture.magFilter=yn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ri,X.map.depthTexture.magFilter=ri)}X.camera.updateProjectionMatrix()}const re=X.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<re;I++){if(X.map.isWebGLCubeRenderTarget)o.setRenderTarget(X.map,I),o.clear();else{I===0&&(o.setRenderTarget(X.map),o.clear());const F=X.getViewport(I);u.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),j.viewport(u)}if($.isPointLight){const F=X.camera,se=X.matrix,Me=$.distance||F.far;Me!==F.far&&(F.far=Me,F.updateProjectionMatrix()),xu.setFromMatrixPosition($.matrixWorld),F.position.copy(xu),qp.copy(F.position),qp.add(D2[I]),F.up.copy(L2[I]),F.lookAt(qp),F.updateMatrixWorld(),se.makeTranslation(-xu.x,-xu.y,-xu.z),$x.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X._frustum.setFromProjectionMatrix($x,F.coordinateSystem,F.reversedDepth)}else X.updateMatrices($);n=X.getFrustum(),A(L,z,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Tu&&b(X,z),X.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(T,C,V)};function b(U,L){const z=e.update(E);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Rr(r.x,r.y,{format:Cl,type:Us})),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(L,null,z,_,E,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(L,null,z,v,E,null)}function P(U,L,z,T){let C=null;const V=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)C=V;else if(C=z.isPointLight===!0?d:c,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const j=C.uuid,Q=L.uuid;let ne=h[j];ne===void 0&&(ne={},h[j]=ne);let J=ne[Q];J===void 0&&(J=C.clone(),ne[Q]=J,L.addEventListener("dispose",N)),C=J}if(C.visible=L.visible,C.wireframe=L.wireframe,T===Tu?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:m[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=o.properties.get(C);j.light=z}return C}function A(U,L,z,T,C){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===Tu)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const Q=e.update(U),ne=U.material;if(Array.isArray(ne)){const J=Q.groups;for(let $=0,X=J.length;$<X;$++){const H=J[$],re=ne[H.materialIndex];if(re&&re.visible){const I=P(U,re,T,C);U.onBeforeShadow(o,U,L,z,Q,I,H),o.renderBufferDirect(z,null,Q,I,U,H),U.onAfterShadow(o,U,L,z,Q,I,H)}}}else if(ne.visible){const J=P(U,ne,T,C);U.onBeforeShadow(o,U,L,z,Q,J,null),o.renderBufferDirect(z,null,Q,J,U,null),U.onAfterShadow(o,U,L,z,Q,J,null)}}const j=U.children;for(let Q=0,ne=j.length;Q<ne;Q++)A(j[Q],L,z,T,C)}function N(U){U.target.removeEventListener("dispose",N);for(const z in h){const T=h[z],C=U.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const U2={[_m]:vm,[xm]:Em,[Sm]:Mm,[wl]:ym,[vm]:_m,[Em]:xm,[Mm]:Sm,[ym]:wl};function O2(o,e){function t(){let G=!1;const Ie=new Nn;let xe=null;const Le=new Nn(0,0,0,0);return{setMask:function(ve){xe!==ve&&!G&&(o.colorMask(ve,ve,ve,ve),xe=ve)},setLocked:function(ve){G=ve},setClear:function(ve,ge,Pe,st,kt){kt===!0&&(ve*=st,ge*=st,Pe*=st),Ie.set(ve,ge,Pe,st),Le.equals(Ie)===!1&&(o.clearColor(ve,ge,Pe,st),Le.copy(Ie))},reset:function(){G=!1,xe=null,Le.set(-1,0,0,0)}}}function n(){let G=!1,Ie=!1,xe=null,Le=null,ve=null;return{setReversed:function(ge){if(Ie!==ge){const Pe=e.get("EXT_clip_control");ge?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Ie=ge;const st=ve;ve=null,this.setClear(st)}},getReversed:function(){return Ie},setTest:function(ge){ge?ue(o.DEPTH_TEST):_e(o.DEPTH_TEST)},setMask:function(ge){xe!==ge&&!G&&(o.depthMask(ge),xe=ge)},setFunc:function(ge){if(Ie&&(ge=U2[ge]),Le!==ge){switch(ge){case _m:o.depthFunc(o.NEVER);break;case vm:o.depthFunc(o.ALWAYS);break;case xm:o.depthFunc(o.LESS);break;case wl:o.depthFunc(o.LEQUAL);break;case Sm:o.depthFunc(o.EQUAL);break;case ym:o.depthFunc(o.GEQUAL);break;case Em:o.depthFunc(o.GREATER);break;case Mm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=ge}},setLocked:function(ge){G=ge},setClear:function(ge){ve!==ge&&(Ie&&(ge=1-ge),o.clearDepth(ge),ve=ge)},reset:function(){G=!1,xe=null,Le=null,ve=null,Ie=!1}}}function r(){let G=!1,Ie=null,xe=null,Le=null,ve=null,ge=null,Pe=null,st=null,kt=null;return{setTest:function(ze){G||(ze?ue(o.STENCIL_TEST):_e(o.STENCIL_TEST))},setMask:function(ze){Ie!==ze&&!G&&(o.stencilMask(ze),Ie=ze)},setFunc:function(ze,tt,vt){(xe!==ze||Le!==tt||ve!==vt)&&(o.stencilFunc(ze,tt,vt),xe=ze,Le=tt,ve=vt)},setOp:function(ze,tt,vt){(ge!==ze||Pe!==tt||st!==vt)&&(o.stencilOp(ze,tt,vt),ge=ze,Pe=tt,st=vt)},setLocked:function(ze){G=ze},setClear:function(ze){kt!==ze&&(o.clearStencil(ze),kt=ze)},reset:function(){G=!1,Ie=null,xe=null,Le=null,ve=null,ge=null,Pe=null,st=null,kt=null}}}const a=new t,u=new n,c=new r,d=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,v=[],M=null,E=!1,x=null,S=null,b=null,P=null,A=null,N=null,U=null,L=new sn(0,0,0),z=0,T=!1,C=null,V=null,j=null,Q=null,ne=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=X>=2);let re=null,I={};const F=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),Me=new Nn().fromArray(F),Ce=new Nn().fromArray(se);function ke(G,Ie,xe,Le){const ve=new Uint8Array(4),ge=o.createTexture();o.bindTexture(G,ge),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pe=0;Pe<xe;Pe++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ie,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,ve):o.texImage2D(Ie+Pe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ve);return ge}const ee={};ee[o.TEXTURE_2D]=ke(o.TEXTURE_2D,o.TEXTURE_2D,1),ee[o.TEXTURE_CUBE_MAP]=ke(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[o.TEXTURE_2D_ARRAY]=ke(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ee[o.TEXTURE_3D]=ke(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ue(o.DEPTH_TEST),u.setFunc(wl),ot(!1),oe(ex),ue(o.CULL_FACE),lt(bs);function ue(G){p[G]!==!0&&(o.enable(G),p[G]=!0)}function _e(G){p[G]!==!1&&(o.disable(G),p[G]=!1)}function Ue(G,Ie){return m[G]!==Ie?(o.bindFramebuffer(G,Ie),m[G]=Ie,G===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ie),G===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Oe(G,Ie){let xe=v,Le=!1;if(G){xe=_.get(Ie),xe===void 0&&(xe=[],_.set(Ie,xe));const ve=G.textures;if(xe.length!==ve.length||xe[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Pe=ve.length;ge<Pe;ge++)xe[ge]=o.COLOR_ATTACHMENT0+ge;xe.length=ve.length,Le=!0}}else xe[0]!==o.BACK&&(xe[0]=o.BACK,Le=!0);Le&&o.drawBuffers(xe)}function ft(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const Ut={[ta]:o.FUNC_ADD,[GT]:o.FUNC_SUBTRACT,[HT]:o.FUNC_REVERSE_SUBTRACT};Ut[WT]=o.MIN,Ut[XT]=o.MAX;const Xe={[jT]:o.ZERO,[YT]:o.ONE,[qT]:o.SRC_COLOR,[mm]:o.SRC_ALPHA,[ew]:o.SRC_ALPHA_SATURATE,[QT]:o.DST_COLOR,[KT]:o.DST_ALPHA,[$T]:o.ONE_MINUS_SRC_COLOR,[gm]:o.ONE_MINUS_SRC_ALPHA,[JT]:o.ONE_MINUS_DST_COLOR,[ZT]:o.ONE_MINUS_DST_ALPHA,[tw]:o.CONSTANT_COLOR,[nw]:o.ONE_MINUS_CONSTANT_COLOR,[iw]:o.CONSTANT_ALPHA,[rw]:o.ONE_MINUS_CONSTANT_ALPHA};function lt(G,Ie,xe,Le,ve,ge,Pe,st,kt,ze){if(G===bs){E===!0&&(_e(o.BLEND),E=!1);return}if(E===!1&&(ue(o.BLEND),E=!0),G!==VT){if(G!==x||ze!==T){if((S!==ta||A!==ta)&&(o.blendEquation(o.FUNC_ADD),S=ta,A=ta),ze)switch(G){case pl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tx:o.blendFunc(o.ONE,o.ONE);break;case nx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ix:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:$t("WebGLState: Invalid blending: ",G);break}else switch(G){case pl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case nx:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",G);break}b=null,P=null,N=null,U=null,L.set(0,0,0),z=0,x=G,T=ze}return}ve=ve||Ie,ge=ge||xe,Pe=Pe||Le,(Ie!==S||ve!==A)&&(o.blendEquationSeparate(Ut[Ie],Ut[ve]),S=Ie,A=ve),(xe!==b||Le!==P||ge!==N||Pe!==U)&&(o.blendFuncSeparate(Xe[xe],Xe[Le],Xe[ge],Xe[Pe]),b=xe,P=Le,N=ge,U=Pe),(st.equals(L)===!1||kt!==z)&&(o.blendColor(st.r,st.g,st.b,kt),L.copy(st),z=kt),x=G,T=!1}function St(G,Ie){G.side===ws?_e(o.CULL_FACE):ue(o.CULL_FACE);let xe=G.side===Wi;Ie&&(xe=!xe),ot(xe),G.blending===pl&&G.transparent===!1?lt(bs):lt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const Le=G.stencilWrite;c.setTest(Le),Le&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Vt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):_e(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function oe(G){G!==kT?(ue(o.CULL_FACE),G!==V&&(G===ex?o.cullFace(o.BACK):G===BT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_e(o.CULL_FACE),V=G}function W(G){G!==j&&($&&o.lineWidth(G),j=G)}function Vt(G,Ie,xe){G?(ue(o.POLYGON_OFFSET_FILL),(Q!==Ie||ne!==xe)&&(o.polygonOffset(Ie,xe),Q=Ie,ne=xe)):_e(o.POLYGON_OFFSET_FILL)}function yt(G){G?ue(o.SCISSOR_TEST):_e(o.SCISSOR_TEST)}function at(G){G===void 0&&(G=o.TEXTURE0+J-1),re!==G&&(o.activeTexture(G),re=G)}function We(G,Ie,xe){xe===void 0&&(re===null?xe=o.TEXTURE0+J-1:xe=re);let Le=I[xe];Le===void 0&&(Le={type:void 0,texture:void 0},I[xe]=Le),(Le.type!==G||Le.texture!==Ie)&&(re!==xe&&(o.activeTexture(xe),re=xe),o.bindTexture(G,Ie||ee[G]),Le.type=G,Le.texture=Ie)}function O(){const G=I[re];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function pe(){try{o.texSubImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function me(){try{o.texSubImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function Ge(){try{o.compressedTexSubImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function we(){try{o.texStorage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function je(){try{o.texStorage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function qe(){try{o.texImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function Ee(){try{o.texImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function Re(G){Me.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Me.copy(G))}function Ye(G){Ce.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ce.copy(G))}function $e(G,Ie){let xe=h.get(Ie);xe===void 0&&(xe=new WeakMap,h.set(Ie,xe));let Le=xe.get(G);Le===void 0&&(Le=o.getUniformBlockIndex(Ie,G.name),xe.set(G,Le))}function Ae(G,Ie){const Le=h.get(Ie).get(G);d.get(Ie)!==Le&&(o.uniformBlockBinding(Ie,Le,G.__bindingPointIndex),d.set(Ie,Le))}function mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},re=null,I={},m={},_=new WeakMap,v=[],M=null,E=!1,x=null,S=null,b=null,P=null,A=null,N=null,U=null,L=new sn(0,0,0),z=0,T=!1,C=null,V=null,j=null,Q=null,ne=null,Me.set(0,0,o.canvas.width,o.canvas.height),Ce.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ue,disable:_e,bindFramebuffer:Ue,drawBuffers:Oe,useProgram:ft,setBlending:lt,setMaterial:St,setFlipSided:ot,setCullFace:oe,setLineWidth:W,setPolygonOffset:Vt,setScissorTest:yt,activeTexture:at,bindTexture:We,unbindTexture:O,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:qe,texImage3D:Ee,updateUBOMapping:$e,uniformBlockBinding:Ae,texStorage2D:we,texStorage3D:je,texSubImage2D:pe,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:Ge,scissor:Re,viewport:Ye,reset:mt}}function F2(o,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Gt,p=new WeakMap;let m;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,w){return v?new OffscreenCanvas(O,w):gd("canvas")}function E(O,w,q){let pe=1;const me=We(O);if((me.width>q||me.height>q)&&(pe=q/Math.max(me.width,me.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(pe*me.width),Ge=Math.floor(pe*me.height);m===void 0&&(m=M(de,Ge));const we=w?M(de,Ge):m;return we.width=de,we.height=Ge,we.getContext("2d").drawImage(O,0,0,de,Ge),Mt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+Ge+")."),we}else return"data"in O&&Mt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function x(O){return O.generateMipmaps}function S(O){o.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,w,q,pe,me=!1){if(O!==null){if(o[O]!==void 0)return o[O];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=w;if(w===o.RED&&(q===o.FLOAT&&(de=o.R32F),q===o.HALF_FLOAT&&(de=o.R16F),q===o.UNSIGNED_BYTE&&(de=o.R8)),w===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.R8UI),q===o.UNSIGNED_SHORT&&(de=o.R16UI),q===o.UNSIGNED_INT&&(de=o.R32UI),q===o.BYTE&&(de=o.R8I),q===o.SHORT&&(de=o.R16I),q===o.INT&&(de=o.R32I)),w===o.RG&&(q===o.FLOAT&&(de=o.RG32F),q===o.HALF_FLOAT&&(de=o.RG16F),q===o.UNSIGNED_BYTE&&(de=o.RG8)),w===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.RG8UI),q===o.UNSIGNED_SHORT&&(de=o.RG16UI),q===o.UNSIGNED_INT&&(de=o.RG32UI),q===o.BYTE&&(de=o.RG8I),q===o.SHORT&&(de=o.RG16I),q===o.INT&&(de=o.RG32I)),w===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.RGB8UI),q===o.UNSIGNED_SHORT&&(de=o.RGB16UI),q===o.UNSIGNED_INT&&(de=o.RGB32UI),q===o.BYTE&&(de=o.RGB8I),q===o.SHORT&&(de=o.RGB16I),q===o.INT&&(de=o.RGB32I)),w===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),q===o.UNSIGNED_INT&&(de=o.RGBA32UI),q===o.BYTE&&(de=o.RGBA8I),q===o.SHORT&&(de=o.RGBA16I),q===o.INT&&(de=o.RGBA32I)),w===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),w===o.RGBA){const Ge=me?pd:jt.getTransfer(pe);q===o.FLOAT&&(de=o.RGBA32F),q===o.HALF_FLOAT&&(de=o.RGBA16F),q===o.UNSIGNED_BYTE&&(de=Ge===nn?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(O,w){let q;return O?w===null||w===us||w===Qu?q=o.DEPTH24_STENCIL8:w===Cr?q=o.DEPTH32F_STENCIL8:w===Zu&&(q=o.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===us||w===Qu?q=o.DEPTH_COMPONENT24:w===Cr?q=o.DEPTH_COMPONENT32F:w===Zu&&(q=o.DEPTH_COMPONENT16),q}function N(O,w){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==ri&&O.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function U(O){const w=O.target;w.removeEventListener("dispose",U),z(w),w.isVideoTexture&&p.delete(w)}function L(O){const w=O.target;w.removeEventListener("dispose",L),C(w)}function z(O){const w=n.get(O);if(w.__webglInit===void 0)return;const q=O.source,pe=_.get(q);if(pe){const me=pe[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&T(O),Object.keys(pe).length===0&&_.delete(q)}n.remove(O)}function T(O){const w=n.get(O);o.deleteTexture(w.__webglTexture);const q=O.source,pe=_.get(q);delete pe[w.__cacheKey],u.memory.textures--}function C(O){const w=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let me=0;me<w.__webglFramebuffer[pe].length;me++)o.deleteFramebuffer(w.__webglFramebuffer[pe][me]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=O.textures;for(let pe=0,me=q.length;pe<me;pe++){const de=n.get(q[pe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),u.memory.textures--),n.remove(q[pe])}n.remove(O)}let V=0;function j(){V=0}function Q(){const O=V;return O>=r.maxTextures&&Mt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),V+=1,O}function ne(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function J(O,w){const q=n.get(O);if(O.isVideoTexture&&yt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const pe=O.image;if(pe===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,O,w);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+w)}function $(O,w){const q=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ee(q,O,w);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+w)}function X(O,w){const q=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ee(q,O,w);return}t.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+w)}function H(O,w){const q=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){ue(q,O,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+w)}const re={[Am]:o.REPEAT,[Cs]:o.CLAMP_TO_EDGE,[Cm]:o.MIRRORED_REPEAT},I={[ri]:o.NEAREST,[aw]:o.NEAREST_MIPMAP_NEAREST,[hf]:o.NEAREST_MIPMAP_LINEAR,[yn]:o.LINEAR,[vp]:o.LINEAR_MIPMAP_NEAREST,[ra]:o.LINEAR_MIPMAP_LINEAR},F={[fw]:o.NEVER,[gw]:o.ALWAYS,[dw]:o.LESS,[Xg]:o.LEQUAL,[hw]:o.EQUAL,[jg]:o.GEQUAL,[pw]:o.GREATER,[mw]:o.NOTEQUAL};function se(O,w){if(w.type===Cr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===vp||w.magFilter===hf||w.magFilter===ra||w.minFilter===yn||w.minFilter===vp||w.minFilter===hf||w.minFilter===ra)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,re[w.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,re[w.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,re[w.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,I[w.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,I[w.minFilter]),w.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ri||w.minFilter!==hf&&w.minFilter!==ra||w.type===Cr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Me(O,w){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",U));const pe=w.source;let me=_.get(pe);me===void 0&&(me={},_.set(pe,me));const de=ne(w);if(de!==O.__cacheKey){me[de]===void 0&&(me[de]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,q=!0),me[de].usedTimes++;const Ge=me[O.__cacheKey];Ge!==void 0&&(me[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&T(w)),O.__cacheKey=de,O.__webglTexture=me[de].texture}return q}function Ce(O,w,q){return Math.floor(Math.floor(O/q)/w)}function ke(O,w,q,pe){const de=O.updateRanges;if(de.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,q,pe,w.data);else{de.sort((Ee,Re)=>Ee.start-Re.start);let Ge=0;for(let Ee=1;Ee<de.length;Ee++){const Re=de[Ge],Ye=de[Ee],$e=Re.start+Re.count,Ae=Ce(Ye.start,w.width,4),mt=Ce(Re.start,w.width,4);Ye.start<=$e+1&&Ae===mt&&Ce(Ye.start+Ye.count-1,w.width,4)===Ae?Re.count=Math.max(Re.count,Ye.start+Ye.count-Re.start):(++Ge,de[Ge]=Ye)}de.length=Ge+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),je=o.getParameter(o.UNPACK_SKIP_PIXELS),qe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Ee=0,Re=de.length;Ee<Re;Ee++){const Ye=de[Ee],$e=Math.floor(Ye.start/4),Ae=Math.ceil(Ye.count/4),mt=$e%w.width,G=Math.floor($e/w.width),Ie=Ae,xe=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,mt),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),t.texSubImage2D(o.TEXTURE_2D,0,mt,G,Ie,xe,q,pe,w.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,je),o.pixelStorei(o.UNPACK_SKIP_ROWS,qe)}}function ee(O,w,q){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const me=Me(O,w),de=w.source;t.bindTexture(pe,O.__webglTexture,o.TEXTURE0+q);const Ge=n.get(de);if(de.version!==Ge.__version||me===!0){t.activeTexture(o.TEXTURE0+q);const we=jt.getPrimaries(jt.workingColorSpace),je=w.colorSpace===po?null:jt.getPrimaries(w.colorSpace),qe=w.colorSpace===po||we===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ee=E(w.image,!1,r.maxTextureSize);Ee=at(w,Ee);const Re=a.convert(w.format,w.colorSpace),Ye=a.convert(w.type);let $e=P(w.internalFormat,Re,Ye,w.colorSpace,w.isVideoTexture);se(pe,w);let Ae;const mt=w.mipmaps,G=w.isVideoTexture!==!0,Ie=Ge.__version===void 0||me===!0,xe=de.dataReady,Le=N(w,Ee);if(w.isDepthTexture)$e=A(w.format===sa,w.type),Ie&&(G?t.texStorage2D(o.TEXTURE_2D,1,$e,Ee.width,Ee.height):t.texImage2D(o.TEXTURE_2D,0,$e,Ee.width,Ee.height,0,Re,Ye,null));else if(w.isDataTexture)if(mt.length>0){G&&Ie&&t.texStorage2D(o.TEXTURE_2D,Le,$e,mt[0].width,mt[0].height);for(let ve=0,ge=mt.length;ve<ge;ve++)Ae=mt[ve],G?xe&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ye,Ae.data):t.texImage2D(o.TEXTURE_2D,ve,$e,Ae.width,Ae.height,0,Re,Ye,Ae.data);w.generateMipmaps=!1}else G?(Ie&&t.texStorage2D(o.TEXTURE_2D,Le,$e,Ee.width,Ee.height),xe&&ke(w,Ee,Re,Ye)):t.texImage2D(o.TEXTURE_2D,0,$e,Ee.width,Ee.height,0,Re,Ye,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Ie&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Le,$e,mt[0].width,mt[0].height,Ee.depth);for(let ve=0,ge=mt.length;ve<ge;ve++)if(Ae=mt[ve],w.format!==ar)if(Re!==null)if(G){if(xe)if(w.layerUpdates.size>0){const Pe=Ax(Ae.width,Ae.height,w.format,w.type);for(const st of w.layerUpdates){const kt=Ae.data.subarray(st*Pe/Ae.data.BYTES_PER_ELEMENT,(st+1)*Pe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,st,Ae.width,Ae.height,1,Re,kt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Ee.depth,Re,Ae.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ve,$e,Ae.width,Ae.height,Ee.depth,0,Ae.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?xe&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Ee.depth,Re,Ye,Ae.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ve,$e,Ae.width,Ae.height,Ee.depth,0,Re,Ye,Ae.data)}else{G&&Ie&&t.texStorage2D(o.TEXTURE_2D,Le,$e,mt[0].width,mt[0].height);for(let ve=0,ge=mt.length;ve<ge;ve++)Ae=mt[ve],w.format!==ar?Re!==null?G?xe&&t.compressedTexSubImage2D(o.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(o.TEXTURE_2D,ve,$e,Ae.width,Ae.height,0,Ae.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?xe&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ye,Ae.data):t.texImage2D(o.TEXTURE_2D,ve,$e,Ae.width,Ae.height,0,Re,Ye,Ae.data)}else if(w.isDataArrayTexture)if(G){if(Ie&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Le,$e,Ee.width,Ee.height,Ee.depth),xe)if(w.layerUpdates.size>0){const ve=Ax(Ee.width,Ee.height,w.format,w.type);for(const ge of w.layerUpdates){const Pe=Ee.data.subarray(ge*ve/Ee.data.BYTES_PER_ELEMENT,(ge+1)*ve/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,Re,Ye,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Ye,Ee.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,$e,Ee.width,Ee.height,Ee.depth,0,Re,Ye,Ee.data);else if(w.isData3DTexture)G?(Ie&&t.texStorage3D(o.TEXTURE_3D,Le,$e,Ee.width,Ee.height,Ee.depth),xe&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Ye,Ee.data)):t.texImage3D(o.TEXTURE_3D,0,$e,Ee.width,Ee.height,Ee.depth,0,Re,Ye,Ee.data);else if(w.isFramebufferTexture){if(Ie)if(G)t.texStorage2D(o.TEXTURE_2D,Le,$e,Ee.width,Ee.height);else{let ve=Ee.width,ge=Ee.height;for(let Pe=0;Pe<Le;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,$e,ve,ge,0,Re,Ye,null),ve>>=1,ge>>=1}}else if(mt.length>0){if(G&&Ie){const ve=We(mt[0]);t.texStorage2D(o.TEXTURE_2D,Le,$e,ve.width,ve.height)}for(let ve=0,ge=mt.length;ve<ge;ve++)Ae=mt[ve],G?xe&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Re,Ye,Ae):t.texImage2D(o.TEXTURE_2D,ve,$e,Re,Ye,Ae);w.generateMipmaps=!1}else if(G){if(Ie){const ve=We(Ee);t.texStorage2D(o.TEXTURE_2D,Le,$e,ve.width,ve.height)}xe&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Re,Ye,Ee)}else t.texImage2D(o.TEXTURE_2D,0,$e,Re,Ye,Ee);x(w)&&S(pe),Ge.__version=de.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function ue(O,w,q){if(w.image.length!==6)return;const pe=Me(O,w),me=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+q);const de=n.get(me);if(me.version!==de.__version||pe===!0){t.activeTexture(o.TEXTURE0+q);const Ge=jt.getPrimaries(jt.workingColorSpace),we=w.colorSpace===po?null:jt.getPrimaries(w.colorSpace),je=w.colorSpace===po||Ge===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let ge=0;ge<6;ge++)!qe&&!Ee?Re[ge]=E(w.image[ge],!0,r.maxCubemapSize):Re[ge]=Ee?w.image[ge].image:w.image[ge],Re[ge]=at(w,Re[ge]);const Ye=Re[0],$e=a.convert(w.format,w.colorSpace),Ae=a.convert(w.type),mt=P(w.internalFormat,$e,Ae,w.colorSpace),G=w.isVideoTexture!==!0,Ie=de.__version===void 0||pe===!0,xe=me.dataReady;let Le=N(w,Ye);se(o.TEXTURE_CUBE_MAP,w);let ve;if(qe){G&&Ie&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,mt,Ye.width,Ye.height);for(let ge=0;ge<6;ge++){ve=Re[ge].mipmaps;for(let Pe=0;Pe<ve.length;Pe++){const st=ve[Pe];w.format!==ar?$e!==null?G?xe&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,st.width,st.height,$e,st.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,mt,st.width,st.height,0,st.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,st.width,st.height,$e,Ae,st.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,mt,st.width,st.height,0,$e,Ae,st.data)}}}else{if(ve=w.mipmaps,G&&Ie){ve.length>0&&Le++;const ge=We(Re[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,mt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){G?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Re[ge].width,Re[ge].height,$e,Ae,Re[ge].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,mt,Re[ge].width,Re[ge].height,0,$e,Ae,Re[ge].data);for(let Pe=0;Pe<ve.length;Pe++){const kt=ve[Pe].image[ge].image;G?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,kt.width,kt.height,$e,Ae,kt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,mt,kt.width,kt.height,0,$e,Ae,kt.data)}}else{G?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,$e,Ae,Re[ge]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,mt,$e,Ae,Re[ge]);for(let Pe=0;Pe<ve.length;Pe++){const st=ve[Pe];G?xe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,$e,Ae,st.image[ge]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,mt,$e,Ae,st.image[ge])}}}x(w)&&S(o.TEXTURE_CUBE_MAP),de.__version=me.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function _e(O,w,q,pe,me,de){const Ge=a.convert(q.format,q.colorSpace),we=a.convert(q.type),je=P(q.internalFormat,Ge,we,q.colorSpace),qe=n.get(w),Ee=n.get(q);if(Ee.__renderTarget=w,!qe.__hasExternalTextures){const Re=Math.max(1,w.width>>de),Ye=Math.max(1,w.height>>de);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,de,je,Re,Ye,w.depth,0,Ge,we,null):t.texImage2D(me,de,je,Re,Ye,0,Ge,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),Vt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,me,Ee.__webglTexture,0,W(w)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,me,Ee.__webglTexture,de),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(O,w,q){if(o.bindRenderbuffer(o.RENDERBUFFER,O),w.depthBuffer){const pe=w.depthTexture,me=pe&&pe.isDepthTexture?pe.type:null,de=A(w.stencilBuffer,me),Ge=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Vt(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,W(w),de,w.width,w.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,W(w),de,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,de,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,O)}else{const pe=w.textures;for(let me=0;me<pe.length;me++){const de=pe[me],Ge=a.convert(de.format,de.colorSpace),we=a.convert(de.type),je=P(de.internalFormat,Ge,we,de.colorSpace);Vt(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,W(w),je,w.width,w.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,W(w),je,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,je,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Oe(O,w,q){const pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=n.get(w.depthTexture);if(me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe){if(me.__webglInit===void 0&&(me.__webglInit=!0,w.depthTexture.addEventListener("dispose",U)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),se(o.TEXTURE_CUBE_MAP,w.depthTexture);const qe=a.convert(w.depthTexture.format),Ee=a.convert(w.depthTexture.type);let Re;w.depthTexture.format===Os?Re=o.DEPTH_COMPONENT24:w.depthTexture.format===sa&&(Re=o.DEPTH24_STENCIL8);for(let Ye=0;Ye<6;Ye++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,Re,w.width,w.height,0,qe,Ee,null)}}else J(w.depthTexture,0);const de=me.__webglTexture,Ge=W(w),we=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,je=w.depthTexture.format===sa?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(w.depthTexture.format===Os)Vt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,we,de,0,Ge):o.framebufferTexture2D(o.FRAMEBUFFER,je,we,de,0);else if(w.depthTexture.format===sa)Vt(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,we,de,0,Ge):o.framebufferTexture2D(o.FRAMEBUFFER,je,we,de,0);else throw new Error("Unknown depthTexture format")}function ft(O){const w=n.get(O),q=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",me)};pe.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=pe}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Oe(w.__webglFramebuffer[pe],O,pe);else{const pe=O.texture.mipmaps;pe&&pe.length>0?Oe(w.__webglFramebuffer[0],O,0):Oe(w.__webglFramebuffer,O,0)}else if(q){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=o.createRenderbuffer(),Ue(w.__webglDepthbuffer[pe],O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,de)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Ue(w.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,de)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(O,w,q){const pe=n.get(O);w!==void 0&&_e(pe.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ft(O)}function Xe(O){const w=O.texture,q=n.get(O),pe=n.get(w);O.addEventListener("dispose",L);const me=O.textures,de=O.isWebGLCubeRenderTarget===!0,Ge=me.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,u.memory.textures++),de){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let je=0;je<w.mipmaps.length;je++)q.__webglFramebuffer[we][je]=o.createFramebuffer()}else q.__webglFramebuffer[we]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[we]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let we=0,je=me.length;we<je;we++){const qe=n.get(me[we]);qe.__webglTexture===void 0&&(qe.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&Vt(O)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const je=me[we];q.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const qe=a.convert(je.format,je.colorSpace),Ee=a.convert(je.type),Re=P(je.internalFormat,qe,Ee,je.colorSpace,O.isXRRenderTarget===!0),Ye=W(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Re,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,q.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ue(q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),se(o.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let je=0;je<w.mipmaps.length;je++)_e(q.__webglFramebuffer[we][je],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else _e(q.__webglFramebuffer[we],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(w)&&S(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let we=0,je=me.length;we<je;we++){const qe=me[we],Ee=n.get(qe);let Re=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ee.__webglTexture),se(Re,qe),_e(q.__webglFramebuffer,O,qe,o.COLOR_ATTACHMENT0+we,Re,0),x(qe)&&S(Re)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),se(we,w),w.mipmaps&&w.mipmaps.length>0)for(let je=0;je<w.mipmaps.length;je++)_e(q.__webglFramebuffer[je],O,w,o.COLOR_ATTACHMENT0,we,je);else _e(q.__webglFramebuffer,O,w,o.COLOR_ATTACHMENT0,we,0);x(w)&&S(we),t.unbindTexture()}O.depthBuffer&&ft(O)}function lt(O){const w=O.textures;for(let q=0,pe=w.length;q<pe;q++){const me=w[q];if(x(me)){const de=b(O),Ge=n.get(me).__webglTexture;t.bindTexture(de,Ge),S(de),t.unbindTexture()}}}const St=[],ot=[];function oe(O){if(O.samples>0){if(Vt(O)===!1){const w=O.textures,q=O.width,pe=O.height;let me=o.COLOR_BUFFER_BIT;const de=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=n.get(O),we=w.length>1;if(we)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const je=O.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[qe]);const Ee=n.get(w[qe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,q,pe,0,0,q,pe,me,o.NEAREST),d===!0&&(St.length=0,ot.length=0,St.push(o.COLOR_ATTACHMENT0+qe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(St.push(de),ot.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[qe]);const Ee=n.get(w[qe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,Ee,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const w=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function W(O){return Math.min(r.maxSamples,O.samples)}function Vt(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(O){const w=u.render.frame;p.get(O)!==w&&(p.set(O,w),O.update())}function at(O,w){const q=O.colorSpace,pe=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Rl&&q!==po&&(jt.getTransfer(q)===nn?(pe!==ar||me!==Tr)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",q)),w}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=j,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k2(o,e){function t(n,r=po){let a;const u=jt.getTransfer(r);if(n===Tr)return o.UNSIGNED_BYTE;if(n===zg)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Vg)return o.UNSIGNED_SHORT_5_5_5_1;if(n===by)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Py)return o.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cy)return o.BYTE;if(n===Ry)return o.SHORT;if(n===Zu)return o.UNSIGNED_SHORT;if(n===Bg)return o.INT;if(n===us)return o.UNSIGNED_INT;if(n===Cr)return o.FLOAT;if(n===Us)return o.HALF_FLOAT;if(n===Ny)return o.ALPHA;if(n===Dy)return o.RGB;if(n===ar)return o.RGBA;if(n===Os)return o.DEPTH_COMPONENT;if(n===sa)return o.DEPTH_STENCIL;if(n===Ly)return o.RED;if(n===Gg)return o.RED_INTEGER;if(n===Cl)return o.RG;if(n===Hg)return o.RG_INTEGER;if(n===Wg)return o.RGBA_INTEGER;if(n===Kf||n===Zf||n===Qf||n===Jf)if(u===nn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Kf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Kf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rm||n===bm||n===Pm||n===Nm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Rm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dm||n===Lm||n===Im||n===Um||n===Om||n===Fm||n===km)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Dm||n===Lm)return u===nn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Im)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Um)return a.COMPRESSED_R11_EAC;if(n===Om)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Fm)return a.COMPRESSED_RG11_EAC;if(n===km)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bm||n===zm||n===Vm||n===Gm||n===Hm||n===Wm||n===Xm||n===jm||n===Ym||n===qm||n===$m||n===Km||n===Zm||n===Qm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Bm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ym)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$m)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Km)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qm)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jm||n===eg||n===tg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Jm)return u===nn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ng||n===ig||n===rg||n===sg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ng)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ig)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qu?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}const B2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pr({vertexShader:B2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wr(new lc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G2 extends Dl{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,m=null,_=null,v=null,M=null;const E=typeof XRWebGLBinding<"u",x=new V2,S={},b=t.getContextAttributes();let P=null,A=null;const N=[],U=[],L=new Gt;let z=null;const T=new Gr;T.viewport=new Nn;const C=new Gr;C.viewport=new Nn;const V=[T,C],j=new Qw;let Q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=N[ee];return ue===void 0&&(ue=new Vp,N[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=N[ee];return ue===void 0&&(ue=new Vp,N[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=N[ee];return ue===void 0&&(ue=new Vp,N[ee]=ue),ue.getHandSpace()};function J(ee){const ue=U.indexOf(ee.inputSource);if(ue===-1)return;const _e=N[ue];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,h||u),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",X);for(let ee=0;ee<N.length;ee++){const ue=U[ee];ue!==null&&(U[ee]=null,N[ee].disconnect(ue))}Q=null,ne=null,x.reset();for(const ee in S)delete S[ee];e.setRenderTarget(P),v=null,_=null,m=null,r=null,A=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,n.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,n.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",$),r.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(L),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?sa:Os,Ue=b.stencil?Qu:us);const ft={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:a};m=this.getBinding(),_=m.createProjectionLayer(ft),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new Rr(_.textureWidth,_.textureHeight,{format:ar,type:Tr,depthTexture:new ec(_.textureWidth,_.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Rr(v.framebufferWidth,v.framebufferHeight,{format:ar,type:Tr,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(c),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(ee){for(let ue=0;ue<ee.removed.length;ue++){const _e=ee.removed[ue],Ue=U.indexOf(_e);Ue>=0&&(U[Ue]=null,N[Ue].disconnect(_e))}for(let ue=0;ue<ee.added.length;ue++){const _e=ee.added[ue];let Ue=U.indexOf(_e);if(Ue===-1){for(let ft=0;ft<N.length;ft++)if(ft>=U.length){U.push(_e),Ue=ft;break}else if(U[ft]===null){U[ft]=_e,Ue=ft;break}if(Ue===-1)break}const Oe=N[Ue];Oe&&Oe.connect(_e)}}const H=new he,re=new he;function I(ee,ue,_e){H.setFromMatrixPosition(ue.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const Ue=H.distanceTo(re),Oe=ue.projectionMatrix.elements,ft=_e.projectionMatrix.elements,Ut=Oe[14]/(Oe[10]-1),Xe=Oe[14]/(Oe[10]+1),lt=(Oe[9]+1)/Oe[5],St=(Oe[9]-1)/Oe[5],ot=(Oe[8]-1)/Oe[0],oe=(ft[8]+1)/ft[0],W=Ut*ot,Vt=Ut*oe,yt=Ue/(-ot+oe),at=yt*-ot;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(at),ee.translateZ(yt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Oe[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ut+yt,O=Xe+yt,w=W-at,q=Vt+(Ue-at),pe=lt*Xe/O*We,me=St*Xe/O*We;ee.projectionMatrix.makePerspective(w,q,pe,me,We,O),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function F(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ue=ee.near,_e=ee.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),j.near=C.near=T.near=ue,j.far=C.far=T.far=_e,(Q!==j.near||ne!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),Q=j.near,ne=j.far),j.layers.mask=ee.layers.mask|6,T.layers.mask=j.layers.mask&3,C.layers.mask=j.layers.mask&5;const Ue=ee.parent,Oe=j.cameras;F(j,Ue);for(let ft=0;ft<Oe.length;ft++)F(Oe[ft],Ue);Oe.length===2?I(j,T,C):j.projectionMatrix.copy(T.projectionMatrix),se(ee,j,Ue)};function se(ee,ue,_e){_e===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=og*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&v===null))return d},this.setFoveation=function(ee){d=ee,_!==null&&(_.fixedFoveation=ee),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(j)},this.getCameraTexture=function(ee){return S[ee]};let Me=null;function Ce(ee,ue){if(p=ue.getViewerPose(h||u),M=ue,p!==null){const _e=p.views;v!==null&&(e.setRenderTargetFramebuffer(A,v.framebuffer),e.setRenderTarget(A));let Ue=!1;_e.length!==j.cameras.length&&(j.cameras.length=0,Ue=!0);for(let Xe=0;Xe<_e.length;Xe++){const lt=_e[Xe];let St=null;if(v!==null)St=v.getViewport(lt);else{const oe=m.getViewSubImage(_,lt);St=oe.viewport,Xe===0&&(e.setRenderTargetTextures(A,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(A))}let ot=V[Xe];ot===void 0&&(ot=new Gr,ot.layers.enable(Xe),ot.viewport=new Nn,V[Xe]=ot),ot.matrix.fromArray(lt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(lt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(St.x,St.y,St.width,St.height),Xe===0&&(j.matrix.copy(ot.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ue===!0&&j.cameras.push(ot)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=n.getBinding();const Xe=m.getDepthInformation(_e[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(Xe,r.renderState)}if(Oe&&Oe.includes("camera-access")&&E){e.state.unbindTexture(),m=n.getBinding();for(let Xe=0;Xe<_e.length;Xe++){const lt=_e[Xe].camera;if(lt){let St=S[lt];St||(St=new jy,S[lt]=St);const ot=m.getCameraImage(lt);St.sourceTexture=ot}}}}for(let _e=0;_e<N.length;_e++){const Ue=U[_e],Oe=N[_e];Ue!==null&&Oe!==void 0&&Oe.update(Ue,ue,h||u)}Me&&Me(ee,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),M=null}const ke=new Yy;ke.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){Me=ee},this.dispose=function(){}}}const Ko=new Fs,H2=new Fn;function W2(o,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function n(x,S){S.color.getRGB(x.fogColor.value,Vy(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function r(x,S,b,P,A){S.isMeshBasicMaterial||S.isMeshLambertMaterial?a(x,S):S.isMeshToonMaterial?(a(x,S),m(x,S)):S.isMeshPhongMaterial?(a(x,S),p(x,S)):S.isMeshStandardMaterial?(a(x,S),_(x,S),S.isMeshPhysicalMaterial&&v(x,S,A)):S.isMeshMatcapMaterial?(a(x,S),M(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),E(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&c(x,S)):S.isPointsMaterial?d(x,S,b,P):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Wi&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Wi&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const b=e.get(S),P=b.envMap,A=b.envMapRotation;P&&(x.envMap.value=P,Ko.copy(A),Ko.x*=-1,Ko.y*=-1,Ko.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ko.y*=-1,Ko.z*=-1),x.envMapRotation.value.setFromMatrix4(H2.makeRotationFromEuler(Ko)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function c(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,b,P){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*b,x.scale.value=P*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function m(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function _(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function v(x,S,b){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wi&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function E(x,S){const b=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X2(o,e,t,n){let r={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,P){const A=P.program;n.uniformBlockBinding(b,A)}function h(b,P){let A=r[b.id];A===void 0&&(M(b),A=p(b),r[b.id]=A,b.addEventListener("dispose",x));const N=P.program;n.updateUBOMapping(b,N);const U=e.render.frame;a[b.id]!==U&&(_(b),a[b.id]=U)}function p(b){const P=m();b.__bindingPointIndex=P;const A=o.createBuffer(),N=b.__size,U=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,N,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,A),A}function m(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const P=r[b.id],A=b.uniforms,N=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let U=0,L=A.length;U<L;U++){const z=Array.isArray(A[U])?A[U]:[A[U]];for(let T=0,C=z.length;T<C;T++){const V=z[T];if(v(V,U,T,N)===!0){const j=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let ne=0;for(let J=0;J<Q.length;J++){const $=Q[J],X=E($);typeof $=="number"||typeof $=="boolean"?(V.__data[0]=$,o.bufferSubData(o.UNIFORM_BUFFER,j+ne,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=0,V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=0,V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=0):($.toArray(V.__data,ne),ne+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(b,P,A,N){const U=b.value,L=P+"_"+A;if(N[L]===void 0)return typeof U=="number"||typeof U=="boolean"?N[L]=U:N[L]=U.clone(),!0;{const z=N[L];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return N[L]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function M(b){const P=b.uniforms;let A=0;const N=16;for(let L=0,z=P.length;L<z;L++){const T=Array.isArray(P[L])?P[L]:[P[L]];for(let C=0,V=T.length;C<V;C++){const j=T[C],Q=Array.isArray(j.value)?j.value:[j.value];for(let ne=0,J=Q.length;ne<J;ne++){const $=Q[ne],X=E($),H=A%N,re=H%X.boundary,I=H+re;A+=re,I!==0&&N-I<X.storage&&(A+=N-I),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=X.storage}}}const U=A%N;return U>0&&(A+=N-U),b.__size=A,b.__cache={},this}function E(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Mt("WebGLRenderer: Unsupported uniform value type.",b),P}function x(b){const P=b.target;P.removeEventListener("dispose",x);const A=u.indexOf(P.__bindingPointIndex);u.splice(A,1),o.deleteBuffer(r[P.id]),delete r[P.id],delete a[P.id]}function S(){for(const b in r)o.deleteBuffer(r[b]);u=[],r={},a={}}return{bind:d,update:h,dispose:S}}const j2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zr=null;function Y2(){return Zr===null&&(Zr=new Ww(j2,16,16,Cl,Us),Zr.name="DFG_LUT",Zr.minFilter=yn,Zr.magFilter=yn,Zr.wrapS=Cs,Zr.wrapT=Cs,Zr.generateMipmaps=!1,Zr.needsUpdate=!0),Zr}class q2{constructor(e={}){const{canvas:t=_w(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1,outputBufferType:v=Tr}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=u;const E=v,x=new Set([Wg,Hg,Gg]),S=new Set([Tr,us,Zu,Qu,zg,Vg]),b=new Uint32Array(4),P=new Int32Array(4);let A=null,N=null;const U=[],L=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=yr;let V=0,j=0,Q=null,ne=-1,J=null;const $=new Nn,X=new Nn;let H=null;const re=new sn(0);let I=0,F=t.width,se=t.height,Me=1,Ce=null,ke=null;const ee=new Nn(0,0,F,se),ue=new Nn(0,0,F,se);let _e=!1;const Ue=new Xy;let Oe=!1,ft=!1;const Ut=new Fn,Xe=new he,lt=new Nn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function oe(){return Q===null?Me:1}let W=n;function Vt(D,Z){return t.getContext(D,Z)}try{const D={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kg}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",ze,!1),W===null){const Z="webgl2";if(W=Vt(Z,D),W===null)throw Vt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw $t("WebGLRenderer: "+D.message),D}let yt,at,We,O,w,q,pe,me,de,Ge,we,je,qe,Ee,Re,Ye,$e,Ae,mt,G,Ie,xe,Le,ve;function ge(){yt=new YR(W),yt.init(),xe=new k2(W,yt),at=new kR(W,yt,e,xe),We=new O2(W,yt),at.reversedDepthBuffer&&_&&We.buffers.depth.setReversed(!0),O=new KR(W),w=new y2,q=new F2(W,yt,We,w,at,xe,O),pe=new zR(T),me=new jR(T),de=new eA(W),Le=new OR(W,de),Ge=new qR(W,de,O,Le),we=new QR(W,Ge,de,O),mt=new ZR(W,at,q),Ye=new BR(w),je=new S2(T,pe,me,yt,at,Le,Ye),qe=new W2(T,w),Ee=new M2,Re=new b2(yt),Ae=new UR(T,pe,me,We,we,M,d),$e=new I2(T,we,at),ve=new X2(W,O,at,We),G=new FR(W,yt,O),Ie=new $R(W,yt,O),O.programs=je.programs,T.capabilities=at,T.extensions=yt,T.properties=w,T.renderLists=Ee,T.shadowMap=$e,T.state=We,T.info=O}ge(),E!==Tr&&(z=new eb(E,t.width,t.height,r,a));const Pe=new G2(T,W);this.xr=Pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const D=yt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=yt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(D){D!==void 0&&(Me=D,this.setSize(F,se,!1))},this.getSize=function(D){return D.set(F,se)},this.setSize=function(D,Z,ce=!0){if(Pe.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,se=Z,t.width=Math.floor(D*Me),t.height=Math.floor(Z*Me),ce===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(F*Me,se*Me).floor()},this.setDrawingBufferSize=function(D,Z,ce){F=D,se=Z,Me=ce,t.width=Math.floor(D*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,D,Z)},this.setEffects=function(D){if(E===Tr){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Z=0;Z<D.length;Z++)if(D[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy($)},this.getViewport=function(D){return D.copy(ee)},this.setViewport=function(D,Z,ce,le){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,Z,ce,le),We.viewport($.copy(ee).multiplyScalar(Me).round())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,Z,ce,le){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,Z,ce,le),We.scissor(X.copy(ue).multiplyScalar(Me).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(D){We.setScissorTest(_e=D)},this.setOpaqueSort=function(D){Ce=D},this.setTransparentSort=function(D){ke=D},this.getClearColor=function(D){return D.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,ce=!0){let le=0;if(D){let te=!1;if(Q!==null){const be=Q.texture.format;te=x.has(be)}if(te){const be=Q.texture.type,Be=S.has(be),Ne=Ae.getClearColor(),He=Ae.getClearAlpha(),Ze=Ne.r,_t=Ne.g,ut=Ne.b;Be?(b[0]=Ze,b[1]=_t,b[2]=ut,b[3]=He,W.clearBufferuiv(W.COLOR,0,b)):(P[0]=Ze,P[1]=_t,P[2]=ut,P[3]=He,W.clearBufferiv(W.COLOR,0,P))}else le|=W.COLOR_BUFFER_BIT}Z&&(le|=W.DEPTH_BUFFER_BIT),ce&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Ae.dispose(),Ee.dispose(),Re.dispose(),w.dispose(),pe.dispose(),me.dispose(),we.dispose(),Le.dispose(),ve.dispose(),je.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",cn),Pe.removeEventListener("sessionend",Tt),Ht.stop()};function st(D){D.preventDefault(),lx("WebGLRenderer: Context Lost."),C=!0}function kt(){lx("WebGLRenderer: Context Restored."),C=!1;const D=O.autoReset,Z=$e.enabled,ce=$e.autoUpdate,le=$e.needsUpdate,te=$e.type;ge(),O.autoReset=D,$e.enabled=Z,$e.autoUpdate=ce,$e.needsUpdate=le,$e.type=te}function ze(D){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function tt(D){const Z=D.target;Z.removeEventListener("dispose",tt),vt(Z)}function vt(D){Fe(D),w.remove(D)}function Fe(D){const Z=w.get(D).programs;Z!==void 0&&(Z.forEach(function(ce){je.releaseProgram(ce)}),D.isShaderMaterial&&je.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ce,le,te,be){Z===null&&(Z=St);const Be=te.isMesh&&te.matrixWorld.determinant()<0,Ne=Tn(D,Z,ce,le,te);We.setMaterial(le,Be);let He=ce.index,Ze=1;if(le.wireframe===!0){if(He=Ge.getWireframeAttribute(ce),He===void 0)return;Ze=2}const _t=ce.drawRange,ut=ce.attributes.position;let Rt=_t.start*Ze,Wt=(_t.start+_t.count)*Ze;be!==null&&(Rt=Math.max(Rt,be.start*Ze),Wt=Math.min(Wt,(be.start+be.count)*Ze)),He!==null?(Rt=Math.max(Rt,0),Wt=Math.min(Wt,He.count)):ut!=null&&(Rt=Math.max(Rt,0),Wt=Math.min(Wt,ut.count));const an=Wt-Rt;if(an<0||an===1/0)return;Le.setup(te,le,Ne,ce,He);let rn,Yt=G;if(He!==null&&(rn=de.get(He),Yt=Ie,Yt.setIndex(rn)),te.isMesh)le.wireframe===!0?(We.setLineWidth(le.wireframeLinewidth*oe()),Yt.setMode(W.LINES)):Yt.setMode(W.TRIANGLES);else if(te.isLine){let ct=le.linewidth;ct===void 0&&(ct=1),We.setLineWidth(ct*oe()),te.isLineSegments?Yt.setMode(W.LINES):te.isLineLoop?Yt.setMode(W.LINE_LOOP):Yt.setMode(W.LINE_STRIP)}else te.isPoints?Yt.setMode(W.POINTS):te.isSprite&&Yt.setMode(W.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Ju("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ct=te._multiDrawStarts,Zt=te._multiDrawCounts,Ot=te._multiDrawCount,ui=He?de.get(He).bytesPerElement:1,Xr=w.get(le).currentProgram.getUniforms();for(let kn=0;kn<Ot;kn++)Xr.setValue(W,"_gl_DrawID",kn),Yt.render(ct[kn]/ui,Zt[kn])}else if(te.isInstancedMesh)Yt.renderInstances(Rt,an,te.count);else if(ce.isInstancedBufferGeometry){const ct=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Zt=Math.min(ce.instanceCount,ct);Yt.renderInstances(Rt,an,Zt)}else Yt.render(Rt,an)};function dt(D,Z,ce){D.transparent===!0&&D.side===ws&&D.forceSinglePass===!1?(D.side=Wi,D.needsUpdate=!0,Kt(D,Z,ce),D.side=Co,D.needsUpdate=!0,Kt(D,Z,ce),D.side=ws):Kt(D,Z,ce)}this.compile=function(D,Z,ce=null){ce===null&&(ce=D),N=Re.get(ce),N.init(Z),L.push(N),ce.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),D!==ce&&D.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights();const le=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const be=te.material;if(be)if(Array.isArray(be))for(let Be=0;Be<be.length;Be++){const Ne=be[Be];dt(Ne,ce,te),le.add(Ne)}else dt(be,ce,te),le.add(be)}),N=L.pop(),le},this.compileAsync=function(D,Z,ce=null){const le=this.compile(D,Z,ce);return new Promise(te=>{function be(){if(le.forEach(function(Be){w.get(Be).currentProgram.isReady()&&le.delete(Be)}),le.size===0){te(D);return}setTimeout(be,10)}yt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function gt(D){rt&&rt(D)}function cn(){Ht.stop()}function Tt(){Ht.start()}const Ht=new Yy;Ht.setAnimationLoop(gt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(D){rt=D,Pe.setAnimationLoop(D),D===null?Ht.stop():Ht.start()},Pe.addEventListener("sessionstart",cn),Pe.addEventListener("sessionend",Tt),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const ce=Pe.enabled===!0&&Pe.isPresenting===!0,le=z!==null&&(Q===null||ce)&&z.begin(T,Q);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Z),Z=Pe.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,Z,Q),N=Re.get(D,L.length),N.init(Z),L.push(N),Ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ue.setFromProjectionMatrix(Ut,is,Z.reversedDepth),ft=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ft),A=Ee.get(D,U.length),A.init(),U.push(A),Pe.enabled===!0&&Pe.isPresenting===!0){const Be=T.xr.getDepthSensingMesh();Be!==null&&Mn(Be,Z,-1/0,T.sortObjects)}Mn(D,Z,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(Ce,ke),ot=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ot&&Ae.addToRenderList(A,D),this.info.render.frame++,Oe===!0&&Ye.beginShadows();const te=N.state.shadowsArray;if($e.render(te,D,Z),Oe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&z.hasRenderPass())===!1){const Be=A.opaque,Ne=A.transmissive;if(N.setupLights(),Z.isArrayCamera){const He=Z.cameras;if(Ne.length>0)for(let Ze=0,_t=He.length;Ze<_t;Ze++){const ut=He[Ze];en(Be,Ne,D,ut)}ot&&Ae.render(D);for(let Ze=0,_t=He.length;Ze<_t;Ze++){const ut=He[Ze];on(A,D,ut,ut.viewport)}}else Ne.length>0&&en(Be,Ne,D,Z),ot&&Ae.render(D),on(A,D,Z)}Q!==null&&j===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),le&&z.end(T),D.isScene===!0&&D.onAfterRender(T,D,Z),Le.resetDefaultState(),ne=-1,J=null,L.pop(),L.length>0?(N=L[L.length-1],Oe===!0&&Ye.setGlobalState(T.clippingPlanes,N.state.camera)):N=null,U.pop(),U.length>0?A=U[U.length-1]:A=null};function Mn(D,Z,ce,le){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ue.intersectsSprite(D)){le&&lt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ut);const Be=we.update(D),Ne=D.material;Ne.visible&&A.push(D,Be,Ne,ce,lt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ue.intersectsObject(D))){const Be=we.update(D),Ne=D.material;if(le&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),lt.copy(D.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),lt.copy(Be.boundingSphere.center)),lt.applyMatrix4(D.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ne)){const He=Be.groups;for(let Ze=0,_t=He.length;Ze<_t;Ze++){const ut=He[Ze],Rt=Ne[ut.materialIndex];Rt&&Rt.visible&&A.push(D,Be,Rt,ce,lt.z,ut)}}else Ne.visible&&A.push(D,Be,Ne,ce,lt.z,null)}}const be=D.children;for(let Be=0,Ne=be.length;Be<Ne;Be++)Mn(be[Be],Z,ce,le)}function on(D,Z,ce,le){const{opaque:te,transmissive:be,transparent:Be}=D;N.setupLightsView(ce),Oe===!0&&Ye.setGlobalState(T.clippingPlanes,ce),le&&We.viewport($.copy(le)),te.length>0&&At(te,Z,ce),be.length>0&&At(be,Z,ce),Be.length>0&&At(Be,Z,ce),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function en(D,Z,ce,le){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[le.id]===void 0){const Rt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[le.id]=new Rr(1,1,{generateMipmaps:!0,type:Rt?Us:Tr,minFilter:ra,samples:at.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const be=N.state.transmissionRenderTarget[le.id],Be=le.viewport||$;be.setSize(Be.z*T.transmissionResolutionScale,Be.w*T.transmissionResolutionScale);const Ne=T.getRenderTarget(),He=T.getActiveCubeFace(),Ze=T.getActiveMipmapLevel();T.setRenderTarget(be),T.getClearColor(re),I=T.getClearAlpha(),I<1&&T.setClearColor(16777215,.5),T.clear(),ot&&Ae.render(ce);const _t=T.toneMapping;T.toneMapping=ss;const ut=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),N.setupLightsView(le),Oe===!0&&Ye.setGlobalState(T.clippingPlanes,le),At(D,ce,le),q.updateMultisampleRenderTarget(be),q.updateRenderTargetMipmap(be),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Wt=0,an=Z.length;Wt<an;Wt++){const rn=Z[Wt],{object:Yt,geometry:ct,material:Zt,group:Ot}=rn;if(Zt.side===ws&&Yt.layers.test(le.layers)){const ui=Zt.side;Zt.side=Wi,Zt.needsUpdate=!0,ti(Yt,ce,le,ct,Zt,Ot),Zt.side=ui,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(q.updateMultisampleRenderTarget(be),q.updateRenderTargetMipmap(be))}T.setRenderTarget(Ne,He,Ze),T.setClearColor(re,I),ut!==void 0&&(le.viewport=ut),T.toneMapping=_t}function At(D,Z,ce){const le=Z.isScene===!0?Z.overrideMaterial:null;for(let te=0,be=D.length;te<be;te++){const Be=D[te],{object:Ne,geometry:He,group:Ze}=Be;let _t=Be.material;_t.allowOverride===!0&&le!==null&&(_t=le),Ne.layers.test(ce.layers)&&ti(Ne,Z,ce,He,_t,Ze)}}function ti(D,Z,ce,le,te,be){D.onBeforeRender(T,Z,ce,le,te,be),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(T,Z,ce,le,D,be),te.transparent===!0&&te.side===ws&&te.forceSinglePass===!1?(te.side=Wi,te.needsUpdate=!0,T.renderBufferDirect(ce,Z,le,te,D,be),te.side=Co,te.needsUpdate=!0,T.renderBufferDirect(ce,Z,le,te,D,be),te.side=ws):T.renderBufferDirect(ce,Z,le,te,D,be),D.onAfterRender(T,Z,ce,le,te,be)}function Kt(D,Z,ce){Z.isScene!==!0&&(Z=St);const le=w.get(D),te=N.state.lights,be=N.state.shadowsArray,Be=te.state.version,Ne=je.getParameters(D,te.state,be,Z,ce),He=je.getProgramCacheKey(Ne);let Ze=le.programs;le.environment=D.isMeshStandardMaterial?Z.environment:null,le.fog=Z.fog,le.envMap=(D.isMeshStandardMaterial?me:pe).get(D.envMap||le.environment),le.envMapRotation=le.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",tt),Ze=new Map,le.programs=Ze);let _t=Ze.get(He);if(_t!==void 0){if(le.currentProgram===_t&&le.lightsStateVersion===Be)return li(D,Ne),_t}else Ne.uniforms=je.getUniforms(D),D.onBeforeCompile(Ne,T),_t=je.acquireProgram(Ne,He),Ze.set(He,_t),le.uniforms=Ne.uniforms;const ut=le.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ut.clippingPlanes=Ye.uniform),li(D,Ne),le.needsLights=Rn(D),le.lightsStateVersion=Be,le.needsLights&&(ut.ambientLightColor.value=te.state.ambient,ut.lightProbe.value=te.state.probe,ut.directionalLights.value=te.state.directional,ut.directionalLightShadows.value=te.state.directionalShadow,ut.spotLights.value=te.state.spot,ut.spotLightShadows.value=te.state.spotShadow,ut.rectAreaLights.value=te.state.rectArea,ut.ltc_1.value=te.state.rectAreaLTC1,ut.ltc_2.value=te.state.rectAreaLTC2,ut.pointLights.value=te.state.point,ut.pointLightShadows.value=te.state.pointShadow,ut.hemisphereLights.value=te.state.hemi,ut.directionalShadowMap.value=te.state.directionalShadowMap,ut.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ut.spotShadowMap.value=te.state.spotShadowMap,ut.spotLightMatrix.value=te.state.spotLightMatrix,ut.spotLightMap.value=te.state.spotLightMap,ut.pointShadowMap.value=te.state.pointShadowMap,ut.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=_t,le.uniformsList=null,_t}function Xn(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=ed.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function li(D,Z){const ce=w.get(D);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Tn(D,Z,ce,le,te){Z.isScene!==!0&&(Z=St),q.resetTextureUnits();const be=Z.fog,Be=le.isMeshStandardMaterial?Z.environment:null,Ne=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Rl,He=(le.isMeshStandardMaterial?me:pe).get(le.envMap||Be),Ze=le.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,_t=!!ce.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ut=!!ce.morphAttributes.position,Rt=!!ce.morphAttributes.normal,Wt=!!ce.morphAttributes.color;let an=ss;le.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(an=T.toneMapping);const rn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Yt=rn!==void 0?rn.length:0,ct=w.get(le),Zt=N.state.lights;if(Oe===!0&&(ft===!0||D!==J)){const jn=D===J&&le.id===ne;Ye.setState(le,D,jn)}let Ot=!1;le.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Zt.state.version||ct.outputColorSpace!==Ne||te.isBatchedMesh&&ct.batching===!1||!te.isBatchedMesh&&ct.batching===!0||te.isBatchedMesh&&ct.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ct.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ct.instancing===!1||!te.isInstancedMesh&&ct.instancing===!0||te.isSkinnedMesh&&ct.skinning===!1||!te.isSkinnedMesh&&ct.skinning===!0||te.isInstancedMesh&&ct.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ct.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ct.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ct.instancingMorph===!1&&te.morphTexture!==null||ct.envMap!==He||le.fog===!0&&ct.fog!==be||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Ye.numPlanes||ct.numIntersection!==Ye.numIntersection)||ct.vertexAlphas!==Ze||ct.vertexTangents!==_t||ct.morphTargets!==ut||ct.morphNormals!==Rt||ct.morphColors!==Wt||ct.toneMapping!==an||ct.morphTargetsCount!==Yt)&&(Ot=!0):(Ot=!0,ct.__version=le.version);let ui=ct.currentProgram;Ot===!0&&(ui=Kt(le,Z,te));let Xr=!1,kn=!1,Po=!1;const Qt=ui.getUniforms(),Et=ct.uniforms;if(We.useProgram(ui.program)&&(Xr=!0,kn=!0,Po=!0),le.id!==ne&&(ne=le.id,kn=!0),Xr||J!==D){We.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Qt.setValue(W,"projectionMatrix",D.projectionMatrix),Qt.setValue(W,"viewMatrix",D.matrixWorldInverse);const Yn=Qt.map.cameraPosition;Yn!==void 0&&Yn.setValue(W,Xe.setFromMatrixPosition(D.matrixWorld)),at.logarithmicDepthBuffer&&Qt.setValue(W,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Qt.setValue(W,"isOrthographic",D.isOrthographicCamera===!0),J!==D&&(J=D,kn=!0,Po=!0)}if(ct.needsLights&&(Zt.state.directionalShadowMap.length>0&&Qt.setValue(W,"directionalShadowMap",Zt.state.directionalShadowMap,q),Zt.state.spotShadowMap.length>0&&Qt.setValue(W,"spotShadowMap",Zt.state.spotShadowMap,q),Zt.state.pointShadowMap.length>0&&Qt.setValue(W,"pointShadowMap",Zt.state.pointShadowMap,q)),te.isSkinnedMesh){Qt.setOptional(W,te,"bindMatrix"),Qt.setOptional(W,te,"bindMatrixInverse");const jn=te.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Qt.setValue(W,"boneTexture",jn.boneTexture,q))}te.isBatchedMesh&&(Qt.setOptional(W,te,"batchingTexture"),Qt.setValue(W,"batchingTexture",te._matricesTexture,q),Qt.setOptional(W,te,"batchingIdTexture"),Qt.setValue(W,"batchingIdTexture",te._indirectTexture,q),Qt.setOptional(W,te,"batchingColorTexture"),te._colorsTexture!==null&&Qt.setValue(W,"batchingColorTexture",te._colorsTexture,q));const yi=ce.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&mt.update(te,ce,ui),(kn||ct.receiveShadow!==te.receiveShadow)&&(ct.receiveShadow=te.receiveShadow,Qt.setValue(W,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Et.envMap.value=He,Et.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Z.environment!==null&&(Et.envMapIntensity.value=Z.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Y2()),kn&&(Qt.setValue(W,"toneMappingExposure",T.toneMappingExposure),ct.needsLights&&wn(Et,Po),be&&le.fog===!0&&qe.refreshFogUniforms(Et,be),qe.refreshMaterialUniforms(Et,le,Me,se,N.state.transmissionRenderTarget[D.id]),ed.upload(W,Xn(ct),Et,q)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(ed.upload(W,Xn(ct),Et,q),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Qt.setValue(W,"center",te.center),Qt.setValue(W,"modelViewMatrix",te.modelViewMatrix),Qt.setValue(W,"normalMatrix",te.normalMatrix),Qt.setValue(W,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const jn=le.uniformsGroups;for(let Yn=0,xa=jn.length;Yn<xa;Yn++){const jr=jn[Yn];ve.update(jr,ui),ve.bind(jr,ui)}}return ui}function wn(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Rn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(D,Z,ce){const le=w.get(D);le.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),w.get(D.texture).__webglTexture=Z,w.get(D.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ce,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){const ce=w.get(D);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const Nr=W.createFramebuffer();this.setRenderTarget=function(D,Z=0,ce=0){Q=D,V=Z,j=ce;let le=null,te=!1,be=!1;if(D){const Ne=w.get(D);if(Ne.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(W.FRAMEBUFFER,Ne.__webglFramebuffer),$.copy(D.viewport),X.copy(D.scissor),H=D.scissorTest,We.viewport($),We.scissor(X),We.setScissorTest(H),ne=-1;return}else if(Ne.__webglFramebuffer===void 0)q.setupRenderTarget(D);else if(Ne.__hasExternalTextures)q.rebindTextures(D,w.get(D.texture).__webglTexture,w.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const _t=D.depthTexture;if(Ne.__boundDepthTexture!==_t){if(_t!==null&&w.has(_t)&&(D.width!==_t.image.width||D.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(D)}}const He=D.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ze=w.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?le=Ze[Z][ce]:le=Ze[Z],te=!0):D.samples>0&&q.useMultisampledRTT(D)===!1?le=w.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?le=Ze[ce]:le=Ze,$.copy(D.viewport),X.copy(D.scissor),H=D.scissorTest}else $.copy(ee).multiplyScalar(Me).floor(),X.copy(ue).multiplyScalar(Me).floor(),H=_e;if(ce!==0&&(le=Nr),We.bindFramebuffer(W.FRAMEBUFFER,le)&&We.drawBuffers(D,le),We.viewport($),We.scissor(X),We.setScissorTest(H),te){const Ne=w.get(D.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,ce)}else if(be){const Ne=Z;for(let He=0;He<D.textures.length;He++){const Ze=w.get(D.textures[He]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+He,Ze.__webglTexture,ce,Ne)}}else if(D!==null&&ce!==0){const Ne=w.get(D.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ne.__webglTexture,ce)}ne=-1},this.readRenderTargetPixels=function(D,Z,ce,le,te,be,Be,Ne=0){if(!(D&&D.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=w.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){We.bindFramebuffer(W.FRAMEBUFFER,He);try{const Ze=D.textures[Ne],_t=Ze.format,ut=Ze.type;if(!at.textureFormatReadable(_t)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(ut)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-le&&ce>=0&&ce<=D.height-te&&(D.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne),W.readPixels(Z,ce,le,te,xe.convert(_t),xe.convert(ut),be))}finally{const Ze=Q!==null?w.get(Q).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(D,Z,ce,le,te,be,Be,Ne=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=w.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He)if(Z>=0&&Z<=D.width-le&&ce>=0&&ce<=D.height-te){We.bindFramebuffer(W.FRAMEBUFFER,He);const Ze=D.textures[Ne],_t=Ze.format,ut=Ze.type;if(!at.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Rt),W.bufferData(W.PIXEL_PACK_BUFFER,be.byteLength,W.STREAM_READ),D.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne),W.readPixels(Z,ce,le,te,xe.convert(_t),xe.convert(ut),0);const Wt=Q!==null?w.get(Q).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,Wt);const an=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await vw(W,an,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Rt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,be),W.deleteBuffer(Rt),W.deleteSync(an),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,ce=0){const le=Math.pow(2,-ce),te=Math.floor(D.image.width*le),be=Math.floor(D.image.height*le),Be=Z!==null?Z.x:0,Ne=Z!==null?Z.y:0;q.setTexture2D(D,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Be,Ne,te,be),We.unbindTexture()};const Bs=W.createFramebuffer(),Ct=W.createFramebuffer();this.copyTextureToTexture=function(D,Z,ce=null,le=null,te=0,be=null){be===null&&(te!==0?(Ju("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=te,te=0):be=0);let Be,Ne,He,Ze,_t,ut,Rt,Wt,an;const rn=D.isCompressedTexture?D.mipmaps[be]:D.image;if(ce!==null)Be=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,He=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,_t=ce.min.y,ut=ce.isBox3?ce.min.z:0;else{const yi=Math.pow(2,-te);Be=Math.floor(rn.width*yi),Ne=Math.floor(rn.height*yi),D.isDataArrayTexture?He=rn.depth:D.isData3DTexture?He=Math.floor(rn.depth*yi):He=1,Ze=0,_t=0,ut=0}le!==null?(Rt=le.x,Wt=le.y,an=le.z):(Rt=0,Wt=0,an=0);const Yt=xe.convert(Z.format),ct=xe.convert(Z.type);let Zt;Z.isData3DTexture?(q.setTexture3D(Z,0),Zt=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(q.setTexture2DArray(Z,0),Zt=W.TEXTURE_2D_ARRAY):(q.setTexture2D(Z,0),Zt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ot=W.getParameter(W.UNPACK_ROW_LENGTH),ui=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Xr=W.getParameter(W.UNPACK_SKIP_PIXELS),kn=W.getParameter(W.UNPACK_SKIP_ROWS),Po=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,rn.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,rn.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ze),W.pixelStorei(W.UNPACK_SKIP_ROWS,_t),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const Qt=D.isDataArrayTexture||D.isData3DTexture,Et=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const yi=w.get(D),jn=w.get(Z),Yn=w.get(yi.__renderTarget),xa=w.get(jn.__renderTarget);We.bindFramebuffer(W.READ_FRAMEBUFFER,Yn.__webglFramebuffer),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let jr=0;jr<He;jr++)Qt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(D).__webglTexture,te,ut+jr),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(Z).__webglTexture,be,an+jr)),W.blitFramebuffer(Ze,_t,Be,Ne,Rt,Wt,Be,Ne,W.DEPTH_BUFFER_BIT,W.NEAREST);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||w.has(D)){const yi=w.get(D),jn=w.get(Z);We.bindFramebuffer(W.READ_FRAMEBUFFER,Bs),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ct);for(let Yn=0;Yn<He;Yn++)Qt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,yi.__webglTexture,te,ut+Yn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,yi.__webglTexture,te),Et?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jn.__webglTexture,be,an+Yn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jn.__webglTexture,be),te!==0?W.blitFramebuffer(Ze,_t,Be,Ne,Rt,Wt,Be,Ne,W.COLOR_BUFFER_BIT,W.NEAREST):Et?W.copyTexSubImage3D(Zt,be,Rt,Wt,an+Yn,Ze,_t,Be,Ne):W.copyTexSubImage2D(Zt,be,Rt,Wt,Ze,_t,Be,Ne);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Et?D.isDataTexture||D.isData3DTexture?W.texSubImage3D(Zt,be,Rt,Wt,an,Be,Ne,He,Yt,ct,rn.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Zt,be,Rt,Wt,an,Be,Ne,He,Yt,rn.data):W.texSubImage3D(Zt,be,Rt,Wt,an,Be,Ne,He,Yt,ct,rn):D.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,be,Rt,Wt,Be,Ne,Yt,ct,rn.data):D.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,be,Rt,Wt,rn.width,rn.height,Yt,rn.data):W.texSubImage2D(W.TEXTURE_2D,be,Rt,Wt,Be,Ne,Yt,ct,rn);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ot),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ui),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Xr),W.pixelStorei(W.UNPACK_SKIP_ROWS,kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Po),be===0&&Z.generateMipmaps&&W.generateMipmap(Zt),We.unbindTexture()},this.initRenderTarget=function(D){w.get(D).__webglFramebuffer===void 0&&q.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?q.setTextureCube(D,0):D.isData3DTexture?q.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?q.setTexture2DArray(D,0):q.setTexture2D(D,0),We.unbindTexture()},this.resetState=function(){V=0,j=0,Q=null,We.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const Kx=`
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,$2=`
    uniform sampler2D uPrevTrails;
    uniform vec2 uMouse;
    uniform vec2 uPrevMouse;
    uniform vec2 uResolution;
    uniform float uDecay;
    uniform float uLineWidth;
    uniform float uBrushStrength;
    uniform bool uIsMoving;

    varying vec2 vUv;

    void main() {
        vec4 prevState = texture2D(uPrevTrails, vUv);

        float newValue = prevState.r * uDecay;
        if(uIsMoving) {
            vec2 mouseDirection = uMouse - uPrevMouse;
            float lineLength = length(mouseDirection);

            if (lineLength > 0.001) {
                vec2 mouseDir = mouseDirection / lineLength;

                vec2 toPixel = vUv - uPrevMouse;
                float projAlong = dot(toPixel, mouseDir);

                vec2 closestPoint = uPrevMouse + projAlong * mouseDir;
                float dist = length(vUv - closestPoint);

                // Use uniforms so JS can control stroke thickness and strength
                // Compute intensity inversely proportional to distance to the path
                float lineWidth = max(0.0001, uLineWidth);
                float intensity = clamp(1.0 - dist / lineWidth, 0.0, 1.0) * uBrushStrength;

                newValue += intensity;
            }
        }
        gl_FragColor = vec4(newValue, 0.0, 0.0, 1.0);
    }
`,K2=`
    uniform sampler2D uFluid;
    uniform sampler2D uTopTexture;
    uniform sampler2D uBottomTexture;
    uniform vec2 uResolution;
    uniform float uDpr;
    uniform vec2 uTopTextureSize;
    uniform vec2 uBottomTextureSize;

    varying vec2 vUv;

    vec2 getCoverUV(vec2 uv, vec2 textureSize) {
        if (textureSize.x < 1.0 || textureSize.y < 1.0) return uv;

        vec2 s = uResolution /textureSize;

        float scale = max(s.x, s.y);

        vec2 scaledSize = textureSize * scale;

        vec2 offset = (uResolution - scaledSize) * 0.5;

        return (uv * uResolution - offset) / scaledSize;
    }

    void main() {
        float fluid = texture2D(uFluid, vUv).r;

        vec2 topUV = getCoverUV(vUv, uTopTextureSize);
        vec2 bottomUV = getCoverUV(vUv, uBottomTextureSize);

        vec4 topColor = texture2D(uTopTexture, topUV);
        vec4 bottomColor = texture2D(uBottomTexture, bottomUV);

        float threshold = 0.02;
        float edgeWidth = 0.004 / uDpr;

        float t = smoothstep(threshold, threshold + edgeWidth, fluid);

        vec4 finalColor = mix(topColor, bottomColor, t);

        gl_FragColor = finalColor;
    }
`;function Z2({isHome:o}){const e=Ft.useRef(null);return Ft.useEffect(()=>{const t=e.current;if(!t)return;let n=!0,r;const a=new q2({canvas:t,antialias:!0,precision:"highp"});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2));const u=new wx,c=new $g(-1,1,1,-1,0,1),d=new Gt(.5,.5),h=new Gt(.5,.5);let p=!1,m=0;const _=500,v=[new Rr(_,_,{minFilter:yn,magFilter:yn,format:ar,type:Cr}),new Rr(_,_,{minFilter:yn,magFilter:yn,format:ar,type:Cr})];let M=0;function E(J,$,X){const H=document.createElement("canvas");H.width=J,H.height=$;const re=H.getContext("2d");re.fillStyle=X,re.fillRect(0,0,H.width,H.height);const I=new ai(H);return I.minFilter=yn,I.needsUpdate=!0,I}const x=E(512,512,"#0000ff"),S=E(512,512,"#ff0000"),b=new Gt(1,1),P=new Gt(1,1),A=new Pr({uniforms:{uFluid:{value:v[0].texture},uTopTexture:{value:x},uBottomTexture:{value:S},uResolution:{value:new Gt(window.innerWidth,window.innerHeight)},uDpr:{value:window.devicePixelRatio||1},uTopTextureSize:{value:b},uBottomTextureSize:{value:P}},vertexShader:Kx,fragmentShader:K2}),N=new Pr({uniforms:{uPrevTrails:{value:null},uMouse:{value:d},uPrevMouse:{value:h},uResolution:{value:new Gt(_,_)},uDecay:{value:.97},uLineWidth:{value:.02},uBrushStrength:{value:.28},uIsMoving:{value:p}},vertexShader:Kx,fragmentShader:$2});C("/assests/images/fci6.jpeg",x,b),C("/assests/images/fci10.png",S,P);const U=new lc(2,2),L=new Wr(U,A);u.add(L);const z=new Wr(U,N),T=new wx;T.add(z),a.setRenderTarget(v[0]),a.clear(),a.setRenderTarget(v[1]),a.clear(),a.setRenderTarget(null);function C(J,$,X){const H=new Image;H.crossOrigin="anonymous",H.onload=function(){if(!n)return;const re=H.width,I=H.height;X.set(re,I),console.log(`Loaded texture: ${J} (${re}x${I})`);const F=4096;let se=re,Me=I;(re>F||I>F)&&(re>I?(se=F,Me=Math.floor(I*(F/re))):(Me=F,se=Math.floor(re*(F/I))));const Ce=document.createElement("canvas");Ce.width=se,Ce.height=Me,Ce.getContext("2d").drawImage(H,0,0,se,Me);const ee=new ai(Ce);if(ee.minFilter=yn,ee.magFilter=yn,ee.needsUpdate=!0,$===x?A.uniforms.uTopTexture.value=ee:A.uniforms.uBottomTexture.value=ee,$)try{$.image=Ce,$.needsUpdate=!0}catch{}A.needsUpdate=!0},H.onerror=function(re){n&&console.error(`Error loading image ${J}:`,re)},H.src=J}function V(J){const $=t.getBoundingClientRect();J.clientX>=$.left&&J.clientX<=$.right&&J.clientY>=$.top&&J.clientY<=$.bottom?(h.copy(d),d.x=(J.clientX-$.left)/$.width,d.y=1-(J.clientY-$.top)/$.height,p=!0,m=performance.now()):p=!1}function j(J){if(J.touches.length>0){J.preventDefault();const $=t.getBoundingClientRect(),X=J.touches[0].clientX,H=J.touches[0].clientY;X>=$.left&&X<=$.right&&H>=$.top&&H<=$.bottom?(h.copy(d),d.x=(X-$.left)/$.width,d.y=1-(H-$.top)/$.height,p=!0,m=performance.now()):p=!1}}function Q(){a.setSize(window.innerWidth,window.innerHeight),A.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),A.uniforms.uDpr.value=window.devicePixelRatio}function ne(){r=requestAnimationFrame(ne),p&&performance.now()-m>100&&(p=!1);const J=M,$=(M+1)%2;N.uniforms.uPrevTrails.value=v[J].texture,N.uniforms.uMouse.value.copy(d),N.uniforms.uPrevMouse.value.copy(h),N.uniforms.uIsMoving.value=p,a.setRenderTarget(v[$]),a.render(T,c),A.uniforms.uFluid.value=v[$].texture,a.setRenderTarget(null),a.render(u,c),M=$,h.copy(d)}return window.addEventListener("mousemove",V),window.addEventListener("touchmove",j,{passive:!1}),window.addEventListener("resize",Q),ne(),()=>{n=!1,cancelAnimationFrame(r),window.removeEventListener("mousemove",V),window.removeEventListener("touchmove",j),window.removeEventListener("resize",Q),U.dispose(),A.dispose(),N.dispose(),v[0].dispose(),v[1].dispose(),x.dispose(),S.dispose(),a.dispose()}},[]),k.jsxs("section",{className:"hero",children:[k.jsx("canvas",{ref:e}),o&&k.jsxs("footer",{className:"footer",children:[k.jsx("p",{children:"Creative Work"}),k.jsx("p",{children:"Landing page"})]})]})}const Zx=[{id:"op-nebula",num:"OP-08",title:"NEBULA LINK",category:"Subspace Comm Array",status:"OPERATIONAL",metric:"SYNC RATE: 99.82%",desc:"A planetary-scale subspace communications grid deployed in orbit around Ceres, utilizing quantum entanglement to maintain zero-latency telemetry channels with outer-rim scout vessels.",specs:[{label:"FREQUENCY",val:"442.10 PHz"},{label:"BANDWIDTH",val:"4.8 TB/sec"},{label:"ENTANGLEMENT STATE",val:"COHERENT"}],details:"Nebula Link acts as the core communication spine for CRUISE operations. By routing signals through high-dimensional manifolds, it bypasses standard relativistic time-dilation, allowing direct planetary coordination across the solar system."},{id:"op-chronos",num:"OP-14",title:"CHRONOS ENGINE",category:"Temporal Warp Processor",status:"INITIALIZING",metric:"THERMAL CORE: 44.5%",desc:"Research prototype designed to manipulate microscopic gravitational anomalies. Creates localized temporal acceleration fields for hardware testing and advanced chronal simulations.",specs:[{label:"CORE LOAD",val:"1.21 GW"},{label:"DILATION INDEX",val:"t+1.004s"},{label:"COOLANT VOL",val:"92.4 L/m"}],details:"Designed inside the Mohali Sector 9 laboratories, the Chronos Engine aims to synchronize computational processors outside of standard time-streams, achieving infinite parallel execution loops for core ship algorithms."},{id:"op-aegis",num:"OP-03",title:"AEGIS SHIELDING",category:"Magnetospheric Grid",status:"OPERATIONAL",metric:"INTEGRITY: 100.0%",desc:"Defensive field generator capable of neutralizing high-yield plasma discharge and cosmic radiation. Currently protecting the main orbital shipyards and drydocks.",specs:[{label:"EMISSION STRENGTH",val:"880 Tesla"},{label:"GRID RESOLUTION",val:"4096px/m²"},{label:"CHARGE EFFICIENCY",val:"99.1%"}],details:"Using structured magnetic flux lines, the Aegis Shielding isolates structures from the harsh vacuum environment and hostile thermal radiation, ensuring stable conditions inside industrial workspaces."},{id:"op-helix",num:"OP-22",title:"HELIX PROTOCOL",category:"Bio-Mechanical Sync",status:"CRITICAL",metric:"MUTATION INDEX: 8.41%",desc:"Cybernetic neural interfaces designed to merge human cognitive feedback loops with spaceship computer systems, maximizing combat and navigation reaction times.",specs:[{label:"NEURAL DAMPING",val:"12.4 ms"},{label:"SYNAPTIC FLOW",val:"942 Gbps"},{label:"HOST COMPATIBILITY",val:"98.9%"}],details:"Helix Protocol represents the bleeding edge of cybernetic pilot interface research. By directly mapping vascular pressure and motor-cortex neurons, it makes the ship feel like an extension of the pilot's own nervous system."}];function Q2(){const[o,e]=Ft.useState(Zx[0]);return k.jsxs("div",{className:"page-wrapper",children:[k.jsxs("header",{className:"page-header",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"page-title",children:"Creative Operations"}),k.jsx("p",{className:"page-subtitle",children:"CRUISE MISSION ARCHIVES // CLASS-A PROTOCOLS"})]}),k.jsxs("div",{style:{textAlign:"right"},children:[k.jsx("span",{className:"hud-label",children:"LOGGED IN AS:"}),k.jsx("div",{className:"hud-value hud-accent",children:"PILOT_USER_01"})]})]}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2.5rem",alignItems:"start"},className:"work-content-grid",children:[k.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Zx.map(t=>{const n=o.id===t.id;let r="badge-operational";return t.status==="INITIALIZING"&&(r="badge-initializing"),t.status==="CRITICAL"&&(r="badge-critical"),k.jsxs("div",{className:`glass-panel glowing-cyan ${n?"active-panel":""}`,onClick:()=>e(t),style:{cursor:"pointer",transition:"all 0.3s ease",borderLeftWidth:n?"4px":"1px",borderLeftColor:n?"#00f0ff":"rgba(0, 240, 255, 0.15)",background:n?"rgba(10, 20, 30, 0.85)":"rgba(10, 10, 15, 0.75)"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[k.jsxs("span",{style:{fontSize:"0.8rem",color:"#00f0ff",fontFamily:"font1"},children:[t.num," // ",t.category]}),k.jsx("span",{className:`badge ${r}`,children:t.status})]}),k.jsx("h2",{style:{fontSize:"2rem",marginBottom:"0.5rem",color:"#edf1ed"},children:t.title}),k.jsx("p",{style:{fontSize:"0.8rem",textTransform:"none",color:"rgba(237, 241, 237, 0.7)",lineBreak:"normal",lineHeight:"1.4"},children:t.desc}),k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem",borderTop:"1px solid rgba(237, 241, 237, 0.1)",paddingTop:"0.75rem"},children:[k.jsx("span",{style:{fontSize:"0.7rem",color:"rgba(0, 240, 255, 0.6)",fontFamily:"font1"},children:t.metric}),k.jsx("span",{style:{fontSize:"0.7rem",color:"#00f0ff",textDecoration:"underline",fontFamily:"font1"},children:"[VIEW SCHEMATICS]"})]})]},t.id)})}),k.jsx("div",{style:{position:"sticky",top:"8rem"},children:k.jsxs("div",{className:"glass-panel glowing-purple",style:{border:"1px solid rgba(208, 0, 255, 0.25)"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},children:[k.jsx("span",{className:"hud-label",children:"SCHEMATIC READOUT"}),k.jsx("span",{style:{color:"#d000ff",fontSize:"0.75rem",fontFamily:"font1"},children:"SECURE LINK // ACTIVE"})]}),k.jsxs("div",{style:{border:"1px solid rgba(208, 0, 255, 0.2)",background:"rgba(0,0,0,0.3)",padding:"1.5rem",marginBottom:"1.5rem",borderRadius:"2px",fontFamily:"font1"},children:[k.jsxs("div",{style:{fontSize:"1.2rem",color:"#d000ff",marginBottom:"0.5rem"},children:[o.title," SYSTEM DETAIL"]}),k.jsx("div",{style:{color:"rgba(237, 241, 237, 0.8)",fontSize:"0.85rem",textTransform:"none",lineHeight:"1.6",marginBottom:"1.5rem"},children:o.details}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem",borderTop:"1px dashed rgba(208, 0, 255, 0.3)",paddingTop:"1rem"},children:o.specs.map((t,n)=>k.jsxs("div",{children:[k.jsx("div",{className:"hud-label",style:{fontSize:"0.55rem"},children:t.label}),k.jsx("div",{style:{fontSize:"0.9rem",color:"#edf1ed"},children:t.val})]},n))})]}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[k.jsx("span",{className:"hud-label",children:"COGNITIVE LOAD INDICATOR"}),k.jsx("span",{style:{color:"#d000ff",fontSize:"0.65rem",fontFamily:"font1"},children:"76.4 GigaFLOPs"})]}),k.jsx("div",{style:{width:"100%",height:"4px",background:"rgba(208, 0, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:k.jsx("div",{style:{width:"74%",height:"100%",background:"#d000ff",animation:"widthPulse 3s infinite alternate"}})})]})]})})]}),k.jsx("style",{children:`
                @keyframes widthPulse {
                    from { width: 70%; }
                    to { width: 85%; }
                }
                @media (max-width: 900px) {
                    .work-content-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `})]})}function J2(){const[o,e]=Ft.useState("READY"),[t,n]=Ft.useState(0),[r,a]=Ft.useState(["// SYSTEM READY FOR SYNCHRONIZATION SEQUENCE"]),u=Ft.useRef(null),c=[{name:"Plasma Injectors",status:"OPERATIONAL",val:"94.2%",badge:"badge-operational"},{name:"Magnetic Coils",status:"STABLE",val:"880 Tesla",badge:"badge-operational"},{name:"Deuterium Core",status:"UNBALANCED",val:"CRITICAL",badge:"badge-critical"},{name:"Shield Grids",status:"INITIALIZING",val:"22.5%",badge:"badge-initializing"},{name:"Warp Converters",status:"OPERATIONAL",val:"100.0%",badge:"badge-operational"},{name:"Primary Cooling",status:"STABLE",val:"44.1°C",badge:"badge-operational"}],d=p=>{a(m=>[...m,p])};Ft.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[r]);const h=()=>{if(o==="SYNCING")return;e("SYNCING"),n(0),a(["[INIT] REACTOR CORE SYNCHRONIZATION SEQUENCE STARTED..."]),[{time:500,log:"[STAGE 1] Magnetic containment fields charging...",prog:15},{time:1200,log:"[STAGE 1] Magnetization complete. Current strength: 920 Tesla.",prog:30},{time:2e3,log:"[STAGE 2] Injecting dilithium vapor streams...",prog:55},{time:2800,log:"[STAGE 2] Subspace feedback loops established.",prog:70},{time:3500,log:"[STAGE 3] Polarizing reactor coils (Phase Angle: 44.2°)...",prog:85},{time:4200,log:"[SUCCESS] Deuterium core stabilized. Harmonic frequency locked.",prog:100},{time:4800,log:"[COMPLETE] Reactor Core sync operational (SYS_STATUS: 1.000 STABLE)",prog:100}].forEach(m=>{setTimeout(()=>{d(m.log),n(m.prog),m.prog===100&&m.log.includes("[COMPLETE]")&&e("COMPLETED")},m.time)})};return k.jsxs("div",{className:"page-wrapper",children:[k.jsxs("header",{className:"page-header",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"page-title",children:"Projects Control Deck"}),k.jsx("p",{className:"page-subtitle",children:"TACTICAL ENGINEERING HUB // SUB-LIGHT CORE SYSTEMS"})]}),k.jsxs("div",{style:{textAlign:"right"},children:[k.jsx("span",{className:"hud-label",children:"CODELINE OVERLAY"}),k.jsx("div",{className:"hud-value hud-accent",children:"SYS_ACTV_NODE_6"})]})]}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem",marginBottom:"3rem"},children:c.map((p,m)=>k.jsxs("div",{className:"glass-panel glowing-cyan",style:{padding:"1.5rem"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[k.jsxs("span",{className:"hud-label",style:{fontSize:"0.6rem"},children:["NODE_0",m+1]}),k.jsx("span",{className:`badge ${p.status==="UNBALANCED"&&o==="COMPLETED"?"badge-operational":p.badge}`,children:p.status==="UNBALANCED"&&o==="COMPLETED"?"STABLE":p.status})]}),k.jsx("div",{style:{fontSize:"1.3rem",color:"#edf1ed",marginBottom:"0.5rem"},children:p.name}),k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[k.jsx("span",{className:"hud-label",children:"METRIC READOUT:"}),k.jsx("span",{className:"hud-accent",style:{fontFamily:"font2",color:p.status==="UNBALANCED"&&o==="COMPLETED"?"#1bdd1b":"",textShadow:p.status==="UNBALANCED"&&o==="COMPLETED"?"0 0 5px rgba(27,221,27,0.5)":""},children:p.status==="UNBALANCED"&&o==="COMPLETED"?"100.0%":p.val})]})]},m))}),k.jsxs("div",{className:"glass-panel glowing-purple",style:{border:"1px solid rgba(208, 0, 255, 0.2)"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},children:[k.jsxs("div",{children:[k.jsx("h3",{style:{fontSize:"1.5rem",color:"#d000ff"},children:"REACTOR CORE SYNCHRONIZATION"}),k.jsx("p",{style:{fontSize:"0.65rem",fontFamily:"font1",color:"rgba(237,241,237,0.5)",textTransform:"none"},children:"A synchronization routine is required when core integrity registers unbalanced readings."})]}),k.jsxs("div",{children:[k.jsx("span",{className:"hud-label",children:"SYNC STATE:"}),k.jsx("div",{style:{fontFamily:"font2",color:o==="SYNCING"?"#00f0ff":o==="COMPLETED"?"#1bdd1b":"#d000ff",textShadow:`0 0 5px ${o==="SYNCING"?"rgba(0,240,255,0.5)":o==="COMPLETED"?"rgba(27,221,27,0.5)":"rgba(208,0,255,0.5)"}`},children:o})]})]}),k.jsxs("div",{style:{marginBottom:"2rem"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[k.jsx("span",{className:"hud-label",children:"ALIGNMENT PROGRESS"}),k.jsxs("span",{style:{fontFamily:"font2",color:"#edf1ed"},children:[t,"%"]})]}),k.jsx("div",{style:{width:"100%",height:"10px",background:"rgba(208, 0, 255, 0.1)",border:"1px solid rgba(208, 0, 255, 0.3)",borderRadius:"2px",overflow:"hidden"},children:k.jsx("div",{style:{width:`${t}%`,height:"100%",background:o==="COMPLETED"?"#1bdd1b":"linear-gradient(90deg, #d000ff, #00f0ff)",boxShadow:`0 0 10px ${o==="COMPLETED"?"rgba(27,221,27,0.5)":"rgba(0,240,255,0.5)"}`,transition:"width 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)"}})})]}),k.jsx("div",{ref:u,style:{background:"rgba(0, 0, 0, 0.5)",border:"1px solid rgba(208, 0, 255, 0.25)",borderRadius:"2px",padding:"1.5rem",height:"180px",overflowY:"auto",fontFamily:"font1",fontSize:"0.8rem",color:"rgba(237, 241, 237, 0.85)",marginBottom:"1.5rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:r.map((p,m)=>{let _="rgba(237, 241, 237, 0.85)";return(p.includes("[SUCCESS]")||p.includes("[COMPLETE]"))&&(_="#1bdd1b"),(p.includes("[INIT]")||p.includes("CHARGING"))&&(_="#00f0ff"),p.includes("[STAGE 3]")&&(_="#d000ff"),k.jsx("div",{style:{color:_,textTransform:"none",letterSpacing:"0.05em"},children:p},m)})}),k.jsx("button",{className:"sci-fi-button",onClick:h,disabled:o==="SYNCING",style:{borderColor:o==="SYNCING"?"rgba(0,240,255,0.2)":o==="COMPLETED"?"#1bdd1b":"#d000ff",color:o==="SYNCING"?"rgba(0,240,255,0.4)":o==="COMPLETED"?"#1bdd1b":"#d000ff",cursor:o==="SYNCING"?"not-allowed":"pointer",boxShadow:o==="COMPLETED"?"0 0 10px rgba(27,221,27,0.2)":"none"},children:o==="SYNCING"?"SYNCING CORE...":o==="COMPLETED"?"[CORE ALIGNED]":"[SYNCHRONIZE REACTOR CORE]"})]})]})}function eP(){const o=[{title:"THE MISSION",desc:"To explore, define, and build the interfaces of the next age. We believe that communication between humans and machines should not feel separated by glass, but blended in fluid, high-dimensional space.",accent:"rgba(0, 240, 255, 0.15)",border:"#00f0ff"},{title:"THE TECHNOLOGY",desc:"Our systems run on custom WebGL render loops, mathematical fluid vector fields, and high-frequency shaders. We bypass standard browser limitations to render hyper-immersive visual portals.",accent:"rgba(208, 0, 255, 0.15)",border:"#d000ff"},{title:"THE CREW",desc:"An elite division of interface pilots, deep-space web architects, and warp field engineers working from orbital dry docks and ground-control bases in Sector 9, Mohali.",accent:"rgba(27, 221, 27, 0.15)",border:"#1bdd1b"}],e=[{year:"2088",event:"PROJECT FOUNDED",desc:"Cruise is established in low-orbit Ceres to design HUD systems for outer-rim mining fleets."},{year:"2102",event:"LIQUID PORTALS",desc:"First morphable SVG-liquid navigation membrane successfully deployed on flagship exploration vessels."},{year:"2115",event:"SECTOR 9 SHIELDING",desc:"Orbital laboratory in Mohali Sector 9 completes integration of Three.js fluid simulation with physical deflector controls."},{year:"2120",event:"DEEP SPACE SYNC",desc:"Successful telemetry linkage between Ceres control systems and outer-system explorers, maintaining zero lag across warp thresholds."}];return k.jsxs("div",{className:"page-wrapper",children:[k.jsxs("header",{className:"page-header",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"page-title",children:"Mission Archives"}),k.jsx("p",{className:"page-subtitle",children:"CRUISE OVERVIEW // PROTOCOL & HISTORICAL LOGS"})]}),k.jsxs("div",{style:{textAlign:"right"},children:[k.jsx("span",{className:"hud-label",children:"LOG CLASSIFICATION"}),k.jsx("div",{className:"hud-value hud-accent",children:"LEVEL 5 // SECURE"})]})]}),k.jsx("div",{className:"glass-panel glowing-cyan",style:{marginBottom:"3rem"},children:k.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},className:"about-intro-flex",children:[k.jsxs("div",{style:{flex:1},children:[k.jsx("div",{className:"hud-label",children:"COGNITIVE RECORDING"}),k.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"ENGINEERING REALITY"}),k.jsx("p",{style:{fontSize:"0.85rem",textTransform:"none",lineHeight:"1.6",color:"rgba(237, 241, 237, 0.8)"},children:"Founded at the junction of design and interstellar propulsion engineering, CRUISE is a studio focused on visual excellence in space flight operations. We do not design simple web pages. We engineer dynamic feedback systems, holographic control arrays, and spatial interfaces that assist crew members in navigating gravity anomalies and asteroid fields. Our work balances high-tech mathematical precision with organic user experience."})]}),k.jsxs("div",{style:{width:"150px",height:"150px",border:"1px dashed rgba(0, 240, 255, 0.3)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",animation:"spin 20s linear infinite"},className:"about-intro-spinner",children:[k.jsx("div",{style:{width:"80%",height:"80%",border:"1px solid #00f0ff",borderRadius:"50%",borderStyle:"double"}}),k.jsx("div",{style:{position:"absolute",color:"#00f0ff",fontSize:"0.5rem",fontFamily:"font1"},children:"CORE SYNCED"})]})]})}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem",marginBottom:"4rem"},className:"about-pillars-grid",children:o.map((t,n)=>k.jsxs("div",{className:"glass-panel",style:{borderColor:t.border,background:`linear-gradient(180deg, ${t.accent} 0%, rgba(10,10,15,0.75) 100%)`},children:[k.jsx("h3",{style:{fontSize:"1.3rem",color:t.border,marginBottom:"1rem"},children:t.title}),k.jsx("p",{style:{fontSize:"0.8rem",textTransform:"none",lineHeight:"1.5",color:"rgba(237, 241, 237, 0.75)"},children:t.desc})]},n))}),k.jsxs("div",{className:"glass-panel glowing-purple",children:[k.jsx("h3",{style:{fontSize:"1.8rem",color:"#d000ff",marginBottom:"2rem"},children:"HISTORICAL TIMELINE"}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",position:"relative"},children:[k.jsx("div",{style:{position:"absolute",left:"40px",top:"10px",bottom:"10px",width:"1px",background:"rgba(208, 0, 255, 0.3)"}}),e.map((t,n)=>k.jsxs("div",{style:{display:"flex",gap:"2rem",position:"relative",alignItems:"flex-start"},children:[k.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#1a1a1a",border:"2px solid #d000ff",marginLeft:"31px",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:k.jsx("div",{style:{width:"6px",height:"6px",background:"#d000ff",borderRadius:"50%"}})}),k.jsxs("div",{style:{flex:1},children:[k.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"0.25rem"},children:[k.jsx("span",{style:{fontFamily:"font2",fontSize:"1.2rem",color:"#d000ff"},children:t.year}),k.jsxs("span",{style:{fontSize:"0.75rem",color:"#edf1ed",fontFamily:"font1",letterSpacing:"0.1em"},children:["// ",t.event]})]}),k.jsx("p",{style:{fontSize:"0.8rem",textTransform:"none",lineHeight:"1.4",color:"rgba(237, 241, 237, 0.7)"},children:t.desc})]})]},n))]})]}),k.jsx("style",{children:`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    .about-intro-flex {
                        flex-direction: column !important;
                        text-align: center;
                    }
                    .about-intro-spinner {
                        margin-top: 1.5rem;
                    }
                    .about-pillars-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `})]})}function tP(){const[o,e]=Ft.useState(""),[t,n]=Ft.useState(""),[r,a]=Ft.useState(""),[u,c]=Ft.useState("READY"),[d,h]=Ft.useState(["// TERMINAL IN COLD STANDBY"]),p=Ft.useRef(null),m=v=>{h(M=>[...M,v])};Ft.useEffect(()=>{p.current&&(p.current.scrollTop=p.current.scrollHeight)},[d]);const _=v=>{if(v.preventDefault(),!o||!t||!r){m("[ERROR] FAILED TO TRANSMIT: MISSING REQUIRED IDENTIFIERS");return}c("TRANSMITTING"),h(["[INIT] OPENING TRANSMISSION GATEWAY..."]),[{time:400,log:"[CONNECTING] Subspace relay ping: Ceres Orbital Base #4 - Online (8.4ms)"},{time:900,log:`[CREDENTIALS] Resolving sender: ${o.toUpperCase()} <${t.toUpperCase()}>`},{time:1500,log:"[ENCRYPTION] Packaging payload using 512-bit quantum tangent protocol..."},{time:2200,log:"[BEAM COLLIMATOR] Charging tachyon sweep arrays at 84% power..."},{time:2900,log:"[BROADCASTING] Transmitting payload beam at 12.4 PetaWatts..."},{time:3600,log:"[SUCCESS] Sub-light wave packet verified. Handshake completed."},{time:4200,log:"[COMPLETE] Cruise ground crew notified. Terminal connection closing."}].forEach(E=>{setTimeout(()=>{m(E.log),E.log.includes("[COMPLETE]")&&(c("SENT"),e(""),n(""),a(""))},E.time)})};return k.jsxs("div",{className:"page-wrapper",children:[k.jsxs("header",{className:"page-header",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"page-title",children:"Subspace Console"}),k.jsx("p",{className:"page-subtitle",children:"TRANSMISSION PORTAL // DEEP-SPACE RELAY CHANNELS"})]}),k.jsxs("div",{style:{textAlign:"right"},children:[k.jsx("span",{className:"hud-label",children:"COIL TEMPERATURE"}),k.jsx("div",{className:"hud-value hud-accent",children:"304.5 K // STABLE"})]})]}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"2.5rem",alignItems:"start"},className:"contact-content-grid",children:[k.jsxs("div",{className:"glass-panel glowing-cyan",children:[k.jsx("h3",{style:{fontSize:"1.5rem",color:"#00f0ff",marginBottom:"1.5rem"},children:"TRANSMIT MESSAGE"}),u==="SENT"?k.jsxs("div",{style:{padding:"2rem",textAlign:"center",border:"1px dashed #1bdd1b",background:"rgba(27,221,27,0.05)"},children:[k.jsx("div",{style:{fontSize:"2rem",color:"#1bdd1b",marginBottom:"1rem"},children:"TRANSMISSION COMPLETE"}),k.jsx("p",{style:{fontSize:"0.8rem",textTransform:"none",color:"rgba(237,241,237,0.8)",marginBottom:"1.5rem"},children:"Your message package has successfully bypassed atmospheric scattering and reached our Sector 9 command array. Our crew will review the telemetry and establish a reverse channel."}),k.jsx("button",{className:"sci-fi-button",onClick:()=>{c("READY"),h(["// TERMINAL IN COLD STANDBY"])},style:{borderColor:"#1bdd1b",color:"#1bdd1b"},children:"[OPEN NEW CHANNEL]"})]}):k.jsxs("form",{className:"sci-fi-form",onSubmit:_,children:[k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"hud-label",children:"[SENDER IDENTIFIER] / FULL NAME"}),k.jsx("input",{type:"text",className:"sci-fi-input",value:o,onChange:v=>e(v.target.value),placeholder:"Enter identifier...",required:!0,disabled:u==="TRANSMITTING"})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"hud-label",children:"[SUBSPACE COORDINATES] / EMAIL ADDRESS"}),k.jsx("input",{type:"email",className:"sci-fi-input",value:t,onChange:v=>n(v.target.value),placeholder:"Enter subspace freq (e.g. pilot@domain.com)...",required:!0,disabled:u==="TRANSMITTING"})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"hud-label",children:"[COMMUNICATION PAYLOAD] / MESSAGE BODY"}),k.jsx("textarea",{className:"sci-fi-textarea",value:r,onChange:v=>a(v.target.value),placeholder:"Enter communication telemetry...",required:!0,disabled:u==="TRANSMITTING"})]}),k.jsx("button",{type:"submit",className:"sci-fi-button",disabled:u==="TRANSMITTING",style:{borderColor:u==="TRANSMITTING"?"rgba(0, 240, 255, 0.3)":"#00f0ff",color:u==="TRANSMITTING"?"rgba(0, 240, 255, 0.4)":"#00f0ff",cursor:u==="TRANSMITTING"?"not-allowed":"pointer"},children:u==="TRANSMITTING"?"BROADCASTING PULSE...":"[TRANSMIT DATA PACKET]"})]})]}),k.jsx("div",{style:{position:"sticky",top:"8rem"},children:k.jsxs("div",{className:"glass-panel glowing-purple",style:{border:"1px solid rgba(208, 0, 255, 0.25)"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[k.jsx("span",{className:"hud-label",children:"COMS MONITOR"}),k.jsx("span",{style:{color:"#d000ff",fontSize:"0.7rem",fontFamily:"font1"},children:"BANDWIDTH: 4.8 TB/s"})]}),k.jsx("div",{ref:p,style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(208, 0, 255, 0.2)",borderRadius:"2px",padding:"1.2rem",height:"280px",overflowY:"auto",fontFamily:"font1",fontSize:"0.75rem",color:"rgba(237, 241, 237, 0.8)",display:"flex",flexDirection:"column",gap:"0.4rem"},children:d.map((v,M)=>{let E="rgba(237, 241, 237, 0.8)";return v.includes("[ERROR]")&&(E="#ff3b30"),(v.includes("[SUCCESS]")||v.includes("[COMPLETE]"))&&(E="#1bdd1b"),(v.includes("[CONNECTING]")||v.includes("[INIT]"))&&(E="#00f0ff"),v.includes("[ENCRYPTION]")&&(E="#d000ff"),k.jsx("div",{style:{color:E,textTransform:"none",letterSpacing:"0.05em",lineBreak:"anywhere"},children:v},M)})}),k.jsxs("div",{style:{marginTop:"1rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[k.jsxs("div",{children:[k.jsx("span",{className:"hud-label",children:"SIGNAL NOISE"}),k.jsx("div",{style:{fontSize:"0.9rem",color:"#edf1ed"},children:"0.041 dB"})]}),k.jsxs("div",{children:[k.jsx("span",{className:"hud-label",children:"ENCRYPTION PROTOCOL"}),k.jsx("div",{style:{fontSize:"0.9rem",color:"#edf1ed"},children:"AES-QA-512"})]})]})]})})]}),k.jsx("style",{children:`
                @media (max-width: 900px) {
                    .contact-content-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `})]})}const nP=[{id:"pos-quant-eng",title:"QUANTUM INTERFACE ENGINEER",loc:"Sector 9 (Mohali Base)",comp:"140,000 Credits // Annum",department:"Bridge Systems Division",desc:"Responsible for designing and deploying high-performance Three.js WebGL rendering pipelines, custom vertex/fragment shaders, and interactive navigation elements to overlay cockpit windshields.",requirements:["Advanced proficiency in GLSL & GPU programming","Experience with fluid mechanics or vector simulations","Ability to work under high-gravity environments"]},{id:"pos-net-arch",title:"SUBSPACE NETWORK ARCHITECT",loc:"Remote (Orion Arm Sector 3)",comp:"165,000 Credits // Annum",department:"Distributed Telemetry",desc:"Design and implement low-latency data syncing routines that run across multi-node quantum networks. You will solve relativistic time-dilation synchronization errors between ground control and exploring vessels.",requirements:["Mastery of network latency optimization","Familiarity with quantum entanglement telecommunications","Experience writing self-healing recovery algorithms"]},{id:"pos-holo-ux",title:"HOLOGRAPHIC UX DESIGNER",loc:"Sector 9 (Mohali Base)",comp:"120,000 Credits // Annum",department:"Visual Command division",desc:"Craft the visual aesthetics of the bridge control arrays. You will build glassmorphic UI models, spatial gesture controls, and liquid-morph SVG layouts that minimize cognitive stress during combat maneuvers.",requirements:["Strong portfolio of 3D spatial user interfaces","Proficiency in motion design (GSAP, CSS physics)","Understanding of pilot cognitive load parameters"]}];function iP(){const[o,e]=Ft.useState(null),[t,n]=Ft.useState(""),[r,a]=Ft.useState(85),[u,c]=Ft.useState(!1),[d,h]=Ft.useState(!1),[p,m]=Ft.useState([]),_=M=>{if(M.preventDefault(),!t)return;h(!0),m(["[SYS] ANALYZING PILOT REGISTRY INDEX..."]),[{time:500,log:`[DATA] Pilot identified: Callsign ${t.toUpperCase()}`},{time:1100,log:`[COGNITION] Evaluating cognitive aptitude score: ${r}/100`},{time:1800,log:"[SECURITY] Verifying subspace telemetry clearance level..."},{time:2400,log:"[SUCCESS] Profile verified. Synaptic profile matches parameters."},{time:3e3,log:"[COMPLETE] Application bundle compiled and routed to Command Deck."}].forEach(x=>{setTimeout(()=>{m(S=>[...S,x.log]),x.log.includes("[COMPLETE]")&&(h(!1),c(!0))},x.time)})},v=()=>{e(null),c(!1),n(""),m([])};return k.jsxs("div",{className:"page-wrapper",children:[k.jsxs("header",{className:"page-header",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"page-title",children:"Crew Registry"}),k.jsx("p",{className:"page-subtitle",children:"ACTIVE RECRUITMENT // ORBITAL & DEEP SPACE STATIONS"})]}),k.jsxs("div",{style:{textAlign:"right"},children:[k.jsx("span",{className:"hud-label",children:"OPEN VACANCIES"}),k.jsx("div",{className:"hud-value hud-accent",children:"3 ROLES ACTIVE"})]})]}),k.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:nP.map(M=>k.jsxs("div",{className:"glass-panel glowing-cyan",style:{border:"1px solid rgba(0, 240, 255, 0.2)"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem",marginBottom:"1rem"},className:"job-header",children:[k.jsxs("div",{children:[k.jsx("h2",{style:{fontSize:"1.8rem",color:"#edf1ed"},children:M.title}),k.jsxs("span",{style:{color:"#00f0ff",fontFamily:"font1",fontSize:"0.75rem"},children:[M.department," // ",M.loc]})]}),k.jsxs("div",{style:{textAlign:"right"},className:"job-meta",children:[k.jsx("span",{className:"hud-label",children:"ESTIMATED COMPENSATION"}),k.jsx("div",{style:{fontSize:"1rem",color:"#edf1ed",fontFamily:"font2"},children:M.comp})]})]}),k.jsx("p",{style:{fontSize:"0.85rem",textTransform:"none",lineHeight:"1.5",color:"rgba(237, 241, 237, 0.75)",marginBottom:"1.5rem"},children:M.desc}),k.jsxs("div",{style:{marginBottom:"1.5rem"},children:[k.jsx("span",{className:"hud-label",children:"QUALIFICATION PARAMETERS"}),k.jsx("ul",{style:{paddingLeft:"1.2rem",color:"rgba(237, 241, 237, 0.7)",fontSize:"0.8rem",display:"flex",flexDirection:"column",gap:"0.3rem",marginTop:"0.5rem"},children:M.requirements.map((E,x)=>k.jsx("li",{style:{listStyleType:"square"},children:E},x))})]}),k.jsx("button",{className:"sci-fi-button",onClick:()=>e(M),children:"[INITIATE APPLICATION]"})]},M.id))}),o&&k.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100svh",background:"rgba(5, 5, 10, 0.85)",backdropFilter:"blur(8px)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",pointerEvents:"all"},children:k.jsxs("div",{className:"glass-panel glowing-purple",style:{maxWidth:"600px",width:"100%",border:"1px solid rgba(208, 0, 255, 0.4)",boxShadow:"0 0 30px rgba(208, 0, 255, 0.3)"},children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(208, 0, 255, 0.2)",paddingBottom:"1rem",marginBottom:"1.5rem"},children:[k.jsxs("div",{children:[k.jsx("span",{className:"hud-label",children:"APPLICATION PORTAL"}),k.jsx("div",{style:{fontSize:"1.2rem",color:"#edf1ed"},children:o.title})]}),k.jsx("button",{onClick:v,style:{background:"transparent",color:"#d000ff",border:"none",fontSize:"1.5rem",cursor:"pointer"},children:"×"})]}),u?k.jsxs("div",{style:{textAlign:"center",padding:"1.5rem"},children:[k.jsx("div",{style:{fontSize:"1.8rem",color:"#1bdd1b",marginBottom:"1rem"},children:"REGISTRATION COMPLETE"}),k.jsx("p",{style:{fontSize:"0.8rem",textTransform:"none",color:"rgba(237,237,237,0.8)",marginBottom:"1.5rem"},children:"Your profile matrix has been added to our crew ledger. We will reach out to you once the Sector 9 station synchronizes orbital cycles."}),k.jsx("button",{className:"sci-fi-button",onClick:v,style:{borderColor:"#1bdd1b",color:"#1bdd1b"},children:"[DISCONNECT LINK]"})]}):k.jsxs("form",{onSubmit:_,className:"sci-fi-form",children:[k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"hud-label",children:"[PILOT CALLSIGN] / ALIAS"}),k.jsx("input",{type:"text",className:"sci-fi-input",style:{borderColor:"rgba(208,0,255,0.3)"},value:t,onChange:M=>n(M.target.value),placeholder:"e.g. Maverick, Neo, Cypher...",required:!0,disabled:d})]}),k.jsxs("div",{className:"form-group",children:[k.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[k.jsx("label",{className:"hud-label",children:"[COGNITIVE COMPATIBILITY INDEX]"}),k.jsxs("span",{style:{fontSize:"0.8rem",color:"#d000ff",fontFamily:"font2"},children:[r,"%"]})]}),k.jsx("input",{type:"range",min:"50",max:"100",value:r,onChange:M=>a(parseInt(M.target.value)),style:{accentColor:"#d000ff",width:"100%",cursor:"pointer",background:"rgba(208, 0, 255, 0.2)",height:"6px",borderRadius:"3px"},disabled:d})]}),p.length>0&&k.jsx("div",{style:{background:"rgba(0,0,0,0.5)",border:"1px solid rgba(208,0,255,0.2)",padding:"1rem",borderRadius:"2px",fontFamily:"font1",fontSize:"0.75rem",color:"rgba(237,237,237,0.8)",display:"flex",flexDirection:"column",gap:"0.3rem"},children:p.map((M,E)=>k.jsx("div",{style:{textTransform:"none",color:M.includes("[SUCCESS]")||M.includes("[COMPLETE]")?"#1bdd1b":"#edf1ed"},children:M},E))}),k.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[k.jsx("button",{type:"submit",className:"sci-fi-button",style:{borderColor:"#d000ff",color:"#d000ff"},disabled:d,children:d?"COMPILE DATA...":"[TRANSMIT PROFILE MEMBRANE]"}),k.jsx("button",{type:"button",className:"sci-fi-button",style:{borderColor:"rgba(237,241,237,0.3)",color:"rgba(237,241,237,0.5)"},onClick:v,disabled:d,children:"[CANCEL]"})]})]})]})})]})}function rP(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function sP(o,e,t){return e&&rP(o.prototype,e),o}var si,td,rr,xo,So,gl,Qy,Jo,_l,Jy,Rs,Vr,eE,tE=function(){return si||typeof window<"u"&&(si=window.gsap)&&si.registerPlugin&&si},nE=1,cl=[],It=[],as=[],Iu=Date.now,ug=function(e,t){return t},oP=function(){var e=_l.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,It),r.push.apply(r,as),It=n,as=r,ug=function(u,c){return t[u](c)}},Mo=function(e,t){return~as.indexOf(e)&&as[as.indexOf(e)+1][t]},Uu=function(e){return!!~Jy.indexOf(e)},wi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},Ti=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},If="scrollLeft",Uf="scrollTop",cg=function(){return Rs&&Rs.isPressed||It.cache++},_d=function(e,t){var n=function r(a){if(a||a===0){nE&&(rr.history.scrollRestoration="manual");var u=Rs&&Rs.isPressed;a=r.v=Math.round(a)||(Rs&&Rs.iOS?1:0),e(a),r.cacheID=It.cache,u&&ug("ss",a)}else(t||It.cache!==r.cacheID||ug("ref"))&&(r.cacheID=It.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Pi={s:If,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_d(function(o){return arguments.length?rr.scrollTo(o,Gn.sc()):rr.pageXOffset||xo[If]||So[If]||gl[If]||0})},Gn={s:Uf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pi,sc:_d(function(o){return arguments.length?rr.scrollTo(Pi.sc(),o):rr.pageYOffset||xo[Uf]||So[Uf]||gl[Uf]||0})},ki=function(e,t){return(t&&t._ctx&&t._ctx.selector||si.utils.toArray)(e)[0]||(typeof e=="string"&&si.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},aP=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ro=function(e,t){var n=t.s,r=t.sc;Uu(e)&&(e=xo.scrollingElement||So);var a=It.indexOf(e),u=r===Gn.sc?1:2;!~a&&(a=It.push(e)-1),It[a+u]||wi(e,"scroll",cg);var c=It[a+u],d=c||(It[a+u]=_d(Mo(e,n),!0)||(Uu(e)?r:_d(function(h){return arguments.length?e[n]=h:e[n]})));return d.target=e,c||(d.smooth=si.getProperty(e,"scrollBehavior")==="smooth"),d},fg=function(e,t,n){var r=e,a=e,u=Iu(),c=u,d=t||50,h=Math.max(500,d*3),p=function(M,E){var x=Iu();E||x-u>d?(a=r,r=M,c=u,u=x):n?r+=M:r=a+(M-a)/(x-c)*(u-c)},m=function(){a=r=n?0:r,c=u=0},_=function(M){var E=c,x=a,S=Iu();return(M||M===0)&&M!==r&&p(M),u===c||S-c>h?0:(r+(n?x:-x))/((n?S:u)-E)*1e3};return{update:p,reset:m,getVelocity:_}},Su=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},iE=function(){_l=si.core.globals().ScrollTrigger,_l&&_l.core&&oP()},rE=function(e){return si=e||tE(),!td&&si&&typeof document<"u"&&document.body&&(rr=window,xo=document,So=xo.documentElement,gl=xo.body,Jy=[rr,xo,So,gl],si.utils.clamp,eE=si.core.context||function(){},Jo="onpointerenter"in gl?"pointer":"mouse",Qy=Dn.isTouch=rr.matchMedia&&rr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in rr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vr=Dn.eventTypes=("ontouchstart"in So?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in So?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return nE=0},500),td=1),_l||iE(),td};Pi.op=Gn;It.cache=0;var Dn=(function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){td||rE(si)||console.warn("Please gsap.registerPlugin(Observer)"),_l||iE();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,d=n.lineHeight,h=n.debounce,p=n.preventDefault,m=n.onStop,_=n.onStopDelay,v=n.ignore,M=n.wheelSpeed,E=n.event,x=n.onDragStart,S=n.onDragEnd,b=n.onDrag,P=n.onPress,A=n.onRelease,N=n.onRight,U=n.onLeft,L=n.onUp,z=n.onDown,T=n.onChangeX,C=n.onChangeY,V=n.onChange,j=n.onToggleX,Q=n.onToggleY,ne=n.onHover,J=n.onHoverEnd,$=n.onMove,X=n.ignoreCheck,H=n.isNormalizer,re=n.onGestureStart,I=n.onGestureEnd,F=n.onWheel,se=n.onEnable,Me=n.onDisable,Ce=n.onClick,ke=n.scrollSpeed,ee=n.capture,ue=n.allowClicks,_e=n.lockAxis,Ue=n.onLockAxis;this.target=c=ki(c)||So,this.vars=n,v&&(v=si.utils.toArray(v)),r=r||1e-9,a=a||0,M=M||1,ke=ke||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(rr.getComputedStyle(gl).lineHeight)||22);var Oe,ft,Ut,Xe,lt,St,ot,oe=this,W=0,Vt=0,yt=n.passive||!p&&n.passive!==!1,at=Ro(c,Pi),We=Ro(c,Gn),O=at(),w=We(),q=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Vr[0]==="pointerdown",pe=Uu(c),me=c.ownerDocument||xo,de=[0,0,0],Ge=[0,0,0],we=0,je=function(){return we=Iu()},qe=function(tt,vt){return(oe.event=tt)&&v&&aP(tt.target,v)||vt&&q&&tt.pointerType!=="touch"||X&&X(tt,vt)},Ee=function(){oe._vx.reset(),oe._vy.reset(),ft.pause(),m&&m(oe)},Re=function(){var tt=oe.deltaX=Qx(de),vt=oe.deltaY=Qx(Ge),Fe=Math.abs(tt)>=r,dt=Math.abs(vt)>=r;V&&(Fe||dt)&&V(oe,tt,vt,de,Ge),Fe&&(N&&oe.deltaX>0&&N(oe),U&&oe.deltaX<0&&U(oe),T&&T(oe),j&&oe.deltaX<0!=W<0&&j(oe),W=oe.deltaX,de[0]=de[1]=de[2]=0),dt&&(z&&oe.deltaY>0&&z(oe),L&&oe.deltaY<0&&L(oe),C&&C(oe),Q&&oe.deltaY<0!=Vt<0&&Q(oe),Vt=oe.deltaY,Ge[0]=Ge[1]=Ge[2]=0),(Xe||Ut)&&($&&$(oe),Ut&&(x&&Ut===1&&x(oe),b&&b(oe),Ut=0),Xe=!1),St&&!(St=!1)&&Ue&&Ue(oe),lt&&(F(oe),lt=!1),Oe=0},Ye=function(tt,vt,Fe){de[Fe]+=tt,Ge[Fe]+=vt,oe._vx.update(tt),oe._vy.update(vt),h?Oe||(Oe=requestAnimationFrame(Re)):Re()},$e=function(tt,vt){_e&&!ot&&(oe.axis=ot=Math.abs(tt)>Math.abs(vt)?"x":"y",St=!0),ot!=="y"&&(de[2]+=tt,oe._vx.update(tt,!0)),ot!=="x"&&(Ge[2]+=vt,oe._vy.update(vt,!0)),h?Oe||(Oe=requestAnimationFrame(Re)):Re()},Ae=function(tt){if(!qe(tt,1)){tt=Su(tt,p);var vt=tt.clientX,Fe=tt.clientY,dt=vt-oe.x,rt=Fe-oe.y,gt=oe.isDragging;oe.x=vt,oe.y=Fe,(gt||(dt||rt)&&(Math.abs(oe.startX-vt)>=a||Math.abs(oe.startY-Fe)>=a))&&(Ut||(Ut=gt?2:1),gt||(oe.isDragging=!0),$e(dt,rt))}},mt=oe.onPress=function(ze){qe(ze,1)||ze&&ze.button||(oe.axis=ot=null,ft.pause(),oe.isPressed=!0,ze=Su(ze),W=Vt=0,oe.startX=oe.x=ze.clientX,oe.startY=oe.y=ze.clientY,oe._vx.reset(),oe._vy.reset(),wi(H?c:me,Vr[1],Ae,yt,!0),oe.deltaX=oe.deltaY=0,P&&P(oe))},G=oe.onRelease=function(ze){if(!qe(ze,1)){Ti(H?c:me,Vr[1],Ae,!0);var tt=!isNaN(oe.y-oe.startY),vt=oe.isDragging,Fe=vt&&(Math.abs(oe.x-oe.startX)>3||Math.abs(oe.y-oe.startY)>3),dt=Su(ze);!Fe&&tt&&(oe._vx.reset(),oe._vy.reset(),p&&ue&&si.delayedCall(.08,function(){if(Iu()-we>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(me.createEvent){var rt=me.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,rr,1,dt.screenX,dt.screenY,dt.clientX,dt.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent(rt)}}})),oe.isDragging=oe.isGesturing=oe.isPressed=!1,m&&vt&&!H&&ft.restart(!0),Ut&&Re(),S&&vt&&S(oe),A&&A(oe,Fe)}},Ie=function(tt){return tt.touches&&tt.touches.length>1&&(oe.isGesturing=!0)&&re(tt,oe.isDragging)},xe=function(){return(oe.isGesturing=!1)||I(oe)},Le=function(tt){if(!qe(tt)){var vt=at(),Fe=We();Ye((vt-O)*ke,(Fe-w)*ke,1),O=vt,w=Fe,m&&ft.restart(!0)}},ve=function(tt){if(!qe(tt)){tt=Su(tt,p),F&&(lt=!0);var vt=(tt.deltaMode===1?d:tt.deltaMode===2?rr.innerHeight:1)*M;Ye(tt.deltaX*vt,tt.deltaY*vt,0),m&&!H&&ft.restart(!0)}},ge=function(tt){if(!qe(tt)){var vt=tt.clientX,Fe=tt.clientY,dt=vt-oe.x,rt=Fe-oe.y;oe.x=vt,oe.y=Fe,Xe=!0,m&&ft.restart(!0),(dt||rt)&&$e(dt,rt)}},Pe=function(tt){oe.event=tt,ne(oe)},st=function(tt){oe.event=tt,J(oe)},kt=function(tt){return qe(tt)||Su(tt,p)&&Ce(oe)};ft=oe._dc=si.delayedCall(_||.25,Ee).pause(),oe.deltaX=oe.deltaY=0,oe._vx=fg(0,50,!0),oe._vy=fg(0,50,!0),oe.scrollX=at,oe.scrollY=We,oe.isDragging=oe.isGesturing=oe.isPressed=!1,eE(this),oe.enable=function(ze){return oe.isEnabled||(wi(pe?me:c,"scroll",cg),u.indexOf("scroll")>=0&&wi(pe?me:c,"scroll",Le,yt,ee),u.indexOf("wheel")>=0&&wi(c,"wheel",ve,yt,ee),(u.indexOf("touch")>=0&&Qy||u.indexOf("pointer")>=0)&&(wi(c,Vr[0],mt,yt,ee),wi(me,Vr[2],G),wi(me,Vr[3],G),ue&&wi(c,"click",je,!0,!0),Ce&&wi(c,"click",kt),re&&wi(me,"gesturestart",Ie),I&&wi(me,"gestureend",xe),ne&&wi(c,Jo+"enter",Pe),J&&wi(c,Jo+"leave",st),$&&wi(c,Jo+"move",ge)),oe.isEnabled=!0,oe.isDragging=oe.isGesturing=oe.isPressed=Xe=Ut=!1,oe._vx.reset(),oe._vy.reset(),O=at(),w=We(),ze&&ze.type&&mt(ze),se&&se(oe)),oe},oe.disable=function(){oe.isEnabled&&(cl.filter(function(ze){return ze!==oe&&Uu(ze.target)}).length||Ti(pe?me:c,"scroll",cg),oe.isPressed&&(oe._vx.reset(),oe._vy.reset(),Ti(H?c:me,Vr[1],Ae,!0)),Ti(pe?me:c,"scroll",Le,ee),Ti(c,"wheel",ve,ee),Ti(c,Vr[0],mt,ee),Ti(me,Vr[2],G),Ti(me,Vr[3],G),Ti(c,"click",je,!0),Ti(c,"click",kt),Ti(me,"gesturestart",Ie),Ti(me,"gestureend",xe),Ti(c,Jo+"enter",Pe),Ti(c,Jo+"leave",st),Ti(c,Jo+"move",ge),oe.isEnabled=oe.isPressed=oe.isDragging=!1,Me&&Me(oe))},oe.kill=oe.revert=function(){oe.disable();var ze=cl.indexOf(oe);ze>=0&&cl.splice(ze,1),Rs===oe&&(Rs=0)},cl.push(oe),H&&Uu(c)&&(Rs=oe),oe.enable(E)},sP(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Dn.version="3.15.0";Dn.create=function(o){return new Dn(o)};Dn.register=rE;Dn.getAll=function(){return cl.slice()};Dn.getById=function(o){return cl.filter(function(e){return e.vars.id===o})[0]};tE()&&si.registerPlugin(Dn);var Je,ol,Lt,tn,tr,Jt,Kg,vd,tc,Ou,Au,Of,gi,bd,dg,Ri,Jx,eS,al,sE,$p,oE,Ci,hg,aE,lE,ho,pg,Zg,vl,Qg,Fu,mg,Kp,Ff=1,_i=Date.now,Zp=_i(),br=0,Cu=0,tS=function(e,t,n){var r=Ji(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},nS=function(e,t){return t&&(!Ji(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},lP=function o(){return Cu&&requestAnimationFrame(o)},iS=function(){return bd=1},rS=function(){return bd=0},Jr=function(e){return e},Ru=function(e){return Math.round(e*1e5)/1e5||0},uE=function(){return typeof window<"u"},cE=function(){return Je||uE()&&(Je=window.gsap)&&Je.registerPlugin&&Je},ma=function(e){return!!~Kg.indexOf(e)},fE=function(e){return(e==="Height"?Qg:Lt["inner"+e])||tr["client"+e]||Jt["client"+e]},dE=function(e){return Mo(e,"getBoundingClientRect")||(ma(e)?function(){return od.width=Lt.innerWidth,od.height=Qg,od}:function(){return As(e)})},uP=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=Mo(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?fE(a):e["client"+a])||0}},cP=function(e,t){return!t||~as.indexOf(e)?dE(e):function(){return od}},rs=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=Mo(e,n))?u()-dE(e)()[a]:ma(e)?(tr[n]||Jt[n])-fE(r):e[n]-e["offset"+r])},kf=function(e,t){for(var n=0;n<al.length;n+=3)(!t||~t.indexOf(al[n+1]))&&e(al[n],al[n+1],al[n+2])},Ji=function(e){return typeof e=="string"},xi=function(e){return typeof e=="function"},bu=function(e){return typeof e=="number"},ea=function(e){return typeof e=="object"},yu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},il=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},rl=Math.abs,hE="left",pE="top",Jg="right",e0="bottom",fa="width",da="height",ku="Right",Bu="Left",zu="Top",Vu="Bottom",Un="padding",Er="margin",Pl="Width",t0="Height",Vn="px",Mr=function(e){return Lt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},fP=function(e){var t=Mr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},sS=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},As=function(e,t){var n=t&&Mr(e)[dg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Je.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},xd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},mE=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},dP=function(e){return function(t){return Je.utils.snap(mE(e),t)}},n0=function(e){var t=Je.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},hP=function(e){return function(t,n){return n0(mE(e))(t,n.direction)}},Bf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Jn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},Qn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},zf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},oS={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vf={toggleActions:"play",anticipatePin:0},Sd={top:0,left:0,center:.5,bottom:1,right:1},nd=function(e,t){if(Ji(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Sd?Sd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Gf=function(e,t,n,r,a,u,c,d){var h=a.startColor,p=a.endColor,m=a.fontSize,_=a.indent,v=a.fontWeight,M=tn.createElement("div"),E=ma(n)||Mo(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,S=E?Jt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,P=b?h:p,A="border-color:"+P+";font-size:"+m+";color:"+P+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((x||d)&&E?"fixed;":"absolute;"),(x||d||!E)&&(A+=(r===Gn?Jg:e0)+":"+(u+parseFloat(_))+"px;"),c&&(A+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),M._isStart=b,M.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),M.style.cssText=A,M.innerText=t||t===0?e+"-"+t:e,S.children[0]?S.insertBefore(M,S.children[0]):S.appendChild(M),M._offset=M["offset"+r.op.d2],id(M,0,r,b),M},id=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+Pl]=1,a["border"+c+Pl]=0,a[n.p]=t+"px",Je.set(e,a)},Pt=[],gg={},nc,aS=function(){return _i()-br>34&&(nc||(nc=requestAnimationFrame(Ds)))},sl=function(){(!Ci||!Ci.isPressed||Ci.startX>Jt.clientWidth)&&(It.cache++,Ci?nc||(nc=requestAnimationFrame(Ds)):Ds(),br||_a("scrollStart"),br=_i())},Qp=function(){lE=Lt.innerWidth,aE=Lt.innerHeight},Pu=function(e){It.cache++,(e===!0||!gi&&!oE&&!tn.fullscreenElement&&!tn.webkitFullscreenElement&&(!hg||lE!==Lt.innerWidth||Math.abs(Lt.innerHeight-aE)>Lt.innerHeight*.25))&&vd.restart(!0)},ga={},pP=[],gE=function o(){return Qn(Nt,"scrollEnd",o)||oa(!0)},_a=function(e){return ga[e]&&ga[e].map(function(t){return t()})||pP},Qi=[],_E=function(e){for(var t=0;t<Qi.length;t+=5)(!e||Qi[t+4]&&Qi[t+4].query===e)&&(Qi[t].style.cssText=Qi[t+1],Qi[t].getBBox&&Qi[t].setAttribute("transform",Qi[t+2]||""),Qi[t+3].uncache=1)},vE=function(){return It.forEach(function(e){return xi(e)&&++e.cacheID&&(e.rec=e())})},i0=function(e,t){var n;for(Ri=0;Ri<Pt.length;Ri++)n=Pt[Ri],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Fu=!0,t&&_E(t),t||_a("revert")},xE=function(e,t){It.cache++,(t||!bi)&&It.forEach(function(n){return xi(n)&&n.cacheID++&&(n.rec=0)}),Ji(e)&&(Lt.history.scrollRestoration=Zg=e)},bi,ha=0,lS,mP=function(){if(lS!==ha){var e=lS=ha;requestAnimationFrame(function(){return e===ha&&oa(!0)})}},SE=function(){Jt.appendChild(vl),Qg=!Ci&&vl.offsetHeight||Lt.innerHeight,Jt.removeChild(vl)},uS=function(e){return tc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},oa=function(e,t){if(tr=tn.documentElement,Jt=tn.body,Kg=[Lt,tn,tr,Jt],br&&!e&&!Fu){Jn(Nt,"scrollEnd",gE);return}SE(),bi=Nt.isRefreshing=!0,Fu||vE();var n=_a("refreshInit");sE&&Nt.sort(),t||i0(),It.forEach(function(r){xi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Pt.slice(0).forEach(function(r){return r.refresh()}),Fu=!1,Pt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),mg=1,uS(!0),Pt.forEach(function(r){var a=rs(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),uS(!1),mg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),It.forEach(function(r){xi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),xE(Zg,1),vd.pause(),ha++,bi=2,Ds(2),Pt.forEach(function(r){return xi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),bi=Nt.isRefreshing=!1,_a("refresh")},_g=0,rd=1,Gu,Ds=function(e){if(e===2||!bi&&!Fu){Nt.isUpdating=!0,Gu&&Gu.update(0);var t=Pt.length,n=_i(),r=n-Zp>=50,a=t&&Pt[0].scroll();if(rd=_g>a?-1:1,bi||(_g=a),r&&(br&&!bd&&n-br>200&&(br=0,_a("scrollEnd")),Au=Zp,Zp=n),rd<0){for(Ri=t;Ri-- >0;)Pt[Ri]&&Pt[Ri].update(0,r);rd=1}else for(Ri=0;Ri<t;Ri++)Pt[Ri]&&Pt[Ri].update(0,r);Nt.isUpdating=!1}nc=0},vg=[hE,pE,e0,Jg,Er+Vu,Er+ku,Er+zu,Er+Bu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sd=vg.concat([fa,da,"boxSizing","max"+Pl,"max"+t0,"position",Er,Un,Un+zu,Un+ku,Un+Vu,Un+Bu]),gP=function(e,t,n){xl(n);var r=e._gsap;if(r.spacerIsNative)xl(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},Jp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=vg.length,u=t.style,c=e.style,d;a--;)d=vg[a],u[d]=n[d];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[e0]=c[Jg]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[fa]=xd(e,Pi)+Vn,u[da]=xd(e,Gn)+Vn,u[Un]=c[Er]=c[pE]=c[hE]="0",xl(r),c[fa]=c["max"+Pl]=n[fa],c[da]=c["max"+t0]=n[da],c[Un]=n[Un],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_P=/([A-Z])/g,xl=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||Je.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(_P,"-$1").toLowerCase())}},Hf=function(e){for(var t=sd.length,n=e.style,r=[],a=0;a<t;a++)r.push(sd[a],n[sd[a]]);return r.t=e,r},vP=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},od={left:0,top:0},cS=function(e,t,n,r,a,u,c,d,h,p,m,_,v,M){xi(e)&&(e=e(d)),Ji(e)&&e.substr(0,3)==="max"&&(e=_+(e.charAt(4)==="="?nd("0"+e.substr(3),n):0));var E=v?v.time():0,x,S,b;if(v&&v.seek(0),isNaN(e)||(e=+e),bu(e))v&&(e=Je.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,_,e)),c&&id(c,n,r,!0);else{xi(t)&&(t=t(d));var P=(e||"0").split(" "),A,N,U,L;b=ki(t,d)||Jt,A=As(b)||{},(!A||!A.left&&!A.top)&&Mr(b).display==="none"&&(L=b.style.display,b.style.display="block",A=As(b),L?b.style.display=L:b.style.removeProperty("display")),N=nd(P[0],A[r.d]),U=nd(P[1]||"0",n),e=A[r.p]-h[r.p]-p+N+a-U,c&&id(c,U,r,n-U<20||c._isStart&&U>20),n-=n-U}if(M&&(d[M]=e||-.001,e<0&&(e=0)),u){var z=e+n,T=u._isStart;x="scroll"+r.d2,id(u,z,r,T&&z>20||!T&&(m?Math.max(Jt[x],tr[x]):u.parentNode[x])<=z+1),m&&(h=As(c),m&&(u.style[r.op.p]=h[r.op.p]-r.op.m-u._offset+Vn))}return v&&b&&(x=As(b),v.seek(_),S=As(b),v._caScrollDist=x[r.p]-S[r.p],e=e/v._caScrollDist*_),v&&v.seek(E),v?e:Math.round(e)},xP=/(webkit|moz|length|cssText|inset)/i,fS=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===Jt){e._stOrig=a.cssText,c=Mr(e);for(u in c)!+u&&!xP.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;Je.core.getCache(e).uncache=1,t.appendChild(e)}},yE=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=Math.round(u),r}},Wf=function(e,t,n){var r={};r[t.p]="+="+n,Je.set(e,r)},dS=function(e,t){var n=Ro(e,t),r="_scroll"+t.p2,a=function u(c,d,h,p,m){var _=u.tween,v=d.onComplete,M={};h=h||n();var E=yE(n,h,function(){_.kill(),u.tween=0});return m=p&&m||0,p=p||c-h,_&&_.kill(),d[r]=c,d.inherit=!1,d.modifiers=M,M[r]=function(){return E(h+p*_.ratio+m*_.ratio*_.ratio)},d.onUpdate=function(){It.cache++,u.tween&&Ds()},d.onComplete=function(){u.tween=0,v&&v.call(_)},_=u.tween=Je.to(e,d),_};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Jn(e,"wheel",n.wheelHandler),Nt.isTouch&&Jn(e,"touchmove",n.wheelHandler),a},Nt=(function(){function o(t,n){ol||o.register(Je)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pg(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Cu){this.update=this.refresh=this.kill=Jr;return}n=sS(Ji(n)||bu(n)||n.nodeType?{trigger:n}:n,Vf);var a=n,u=a.onUpdate,c=a.toggleClass,d=a.id,h=a.onToggle,p=a.onRefresh,m=a.scrub,_=a.trigger,v=a.pin,M=a.pinSpacing,E=a.invalidateOnRefresh,x=a.anticipatePin,S=a.onScrubComplete,b=a.onSnapComplete,P=a.once,A=a.snap,N=a.pinReparent,U=a.pinSpacer,L=a.containerAnimation,z=a.fastScrollEnd,T=a.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pi:Gn,V=!m&&m!==0,j=ki(n.scroller||Lt),Q=Je.core.getCache(j),ne=ma(j),J=("pinType"in n?n.pinType:Mo(j,"pinType")||ne&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=V&&n.toggleActions.split(" "),H="markers"in n?n.markers:Vf.markers,re=ne?0:parseFloat(Mr(j)["border"+C.p2+Pl])||0,I=this,F=n.onRefreshInit&&function(){return n.onRefreshInit(I)},se=uP(j,ne,C),Me=cP(j,ne),Ce=0,ke=0,ee=0,ue=Ro(j,C),_e,Ue,Oe,ft,Ut,Xe,lt,St,ot,oe,W,Vt,yt,at,We,O,w,q,pe,me,de,Ge,we,je,qe,Ee,Re,Ye,$e,Ae,mt,G,Ie,xe,Le,ve,ge,Pe,st;if(I._startClamp=I._endClamp=!1,I._dir=C,x*=45,I.scroller=j,I.scroll=L?L.time.bind(L):ue,ft=ue(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(sE=1,n.refreshPriority===-9999&&(Gu=I)),Q.tweenScroll=Q.tweenScroll||{top:dS(j,Gn),left:dS(j,Pi)},I.tweenTo=_e=Q.tweenScroll[C.p],I.scrubDuration=function(Fe){Ie=bu(Fe)&&Fe,Ie?G?G.duration(Fe):G=Je.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return S&&S(I)}}):(G&&G.progress(1).kill(),G=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(m),Ae=0,d||(d=r.vars.id)),A&&((!ea(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in Jt.style&&Je.set(ne?[Jt,tr]:j,{scrollBehavior:"auto"}),It.forEach(function(Fe){return xi(Fe)&&Fe.target===(ne?tn.scrollingElement||tr:j)&&(Fe.smooth=!1)}),Oe=xi(A.snapTo)?A.snapTo:A.snapTo==="labels"?dP(r):A.snapTo==="labelsDirectional"?hP(r):A.directional!==!1?function(Fe,dt){return n0(A.snapTo)(Fe,_i()-ke<500?0:dt.direction)}:Je.utils.snap(A.snapTo),xe=A.duration||{min:.1,max:2},xe=ea(xe)?Ou(xe.min,xe.max):Ou(xe,xe),Le=Je.delayedCall(A.delay||Ie/2||.1,function(){var Fe=ue(),dt=_i()-ke<500,rt=_e.tween;if((dt||Math.abs(I.getVelocity())<10)&&!rt&&!bd&&Ce!==Fe){var gt=(Fe-Xe)/at,cn=r&&!V?r.totalProgress():gt,Tt=dt?0:(cn-mt)/(_i()-Au)*1e3||0,Ht=Je.utils.clamp(-gt,1-gt,rl(Tt/2)*Tt/.185),Mn=gt+(A.inertia===!1?0:Ht),on,en,At=A,ti=At.onStart,Kt=At.onInterrupt,Xn=At.onComplete;if(on=Oe(Mn,I),bu(on)||(on=Mn),en=Math.max(0,Math.round(Xe+on*at)),Fe<=lt&&Fe>=Xe&&en!==Fe){if(rt&&!rt._initted&&rt.data<=rl(en-Fe))return;A.inertia===!1&&(Ht=on-gt),_e(en,{duration:xe(rl(Math.max(rl(Mn-cn),rl(on-cn))*.185/Tt/.05||0)),ease:A.ease||"power3",data:rl(en-Fe),onInterrupt:function(){return Le.restart(!0)&&Kt&&il(I,Kt)},onComplete:function(){I.update(),Ce=ue(),r&&!V&&(G?G.resetTo("totalProgress",on,r._tTime/r._tDur):r.progress(on)),Ae=mt=r&&!V?r.totalProgress():I.progress,b&&b(I),Xn&&il(I,Xn)}},Fe,Ht*at,en-Fe-Ht*at),ti&&il(I,ti,_e.tween)}}else I.isActive&&Ce!==Fe&&Le.restart(!0)}).pause()),d&&(gg[d]=I),_=I.trigger=ki(_||v!==!0&&v),st=_&&_._gsap&&_._gsap.stRevert,st&&(st=st(I)),v=v===!0?_:ki(v),Ji(c)&&(c={targets:_,className:c}),v&&(M===!1||M===Er||(M=!M&&v.parentNode&&v.parentNode.style&&Mr(v.parentNode).display==="flex"?!1:Un),I.pin=v,Ue=Je.core.getCache(v),Ue.spacer?We=Ue.pinState:(U&&(U=ki(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Ue.spacerIsNative=!!U,U&&(Ue.spacerState=Hf(U))),Ue.spacer=q=U||tn.createElement("div"),q.classList.add("pin-spacer"),d&&q.classList.add("pin-spacer-"+d),Ue.pinState=We=Hf(v)),n.force3D!==!1&&Je.set(v,{force3D:!0}),I.spacer=q=Ue.spacer,$e=Mr(v),je=$e[M+C.os2],me=Je.getProperty(v),de=Je.quickSetter(v,C.a,Vn),Jp(v,q,$e),w=Hf(v)),H){Vt=ea(H)?sS(H,oS):oS,oe=Gf("scroller-start",d,j,C,Vt,0),W=Gf("scroller-end",d,j,C,Vt,0,oe),pe=oe["offset"+C.op.d2];var kt=ki(Mo(j,"content")||j);St=this.markerStart=Gf("start",d,kt,C,Vt,pe,0,L),ot=this.markerEnd=Gf("end",d,kt,C,Vt,pe,0,L),L&&(Pe=Je.quickSetter([St,ot],C.a,Vn)),!J&&!(as.length&&Mo(j,"fixedMarkers")===!0)&&(fP(ne?Jt:j),Je.set([oe,W],{force3D:!0}),Ee=Je.quickSetter(oe,C.a,Vn),Ye=Je.quickSetter(W,C.a,Vn))}if(L){var ze=L.vars.onUpdate,tt=L.vars.onUpdateParams;L.eventCallback("onUpdate",function(){I.update(0,0,1),ze&&ze.apply(L,tt||[])})}if(I.previous=function(){return Pt[Pt.indexOf(I)-1]},I.next=function(){return Pt[Pt.indexOf(I)+1]},I.revert=function(Fe,dt){if(!dt)return I.kill(!0);var rt=Fe!==!1||!I.enabled,gt=gi;rt!==I.isReverted&&(rt&&(ve=Math.max(ue(),I.scroll.rec||0),ee=I.progress,ge=r&&r.progress()),St&&[St,ot,oe,W].forEach(function(cn){return cn.style.display=rt?"none":"block"}),rt&&(gi=I,I.update(rt)),v&&(!N||!I.isActive)&&(rt?gP(v,q,We):Jp(v,q,Mr(v),qe)),rt||I.update(rt),gi=gt,I.isReverted=rt)},I.refresh=function(Fe,dt,rt,gt){if(!((gi||!I.enabled)&&!dt)){if(v&&Fe&&br){Jn(o,"scrollEnd",gE);return}!bi&&F&&F(I),gi=I,_e.tween&&!rt&&(_e.tween.kill(),_e.tween=0),G&&G.pause(),E&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(He){return He.vars.immediateRender&&He.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var cn=se(),Tt=Me(),Ht=L?L.duration():rs(j,C),Mn=at<=.01||!at,on=0,en=gt||0,At=ea(rt)?rt.end:n.end,ti=n.endTrigger||_,Kt=ea(rt)?rt.start:n.start||(n.start===0||!_?0:v?"0 0":"0 100%"),Xn=I.pinnedContainer=n.pinnedContainer&&ki(n.pinnedContainer,I),li=_&&Math.max(0,Pt.indexOf(I))||0,Tn=li,wn,Rn,Nr,Bs,Ct,D,Z,ce,le,te,be,Be,Ne;for(H&&ea(rt)&&(Be=Je.getProperty(oe,C.p),Ne=Je.getProperty(W,C.p));Tn-- >0;)D=Pt[Tn],D.end||D.refresh(0,1)||(gi=I),Z=D.pin,Z&&(Z===_||Z===v||Z===Xn)&&!D.isReverted&&(te||(te=[]),te.unshift(D),D.revert(!0,!0)),D!==Pt[Tn]&&(li--,Tn--);for(xi(Kt)&&(Kt=Kt(I)),Kt=tS(Kt,"start",I),Xe=cS(Kt,_,cn,C,ue(),St,oe,I,Tt,re,J,Ht,L,I._startClamp&&"_startClamp")||(v?-.001:0),xi(At)&&(At=At(I)),Ji(At)&&!At.indexOf("+=")&&(~At.indexOf(" ")?At=(Ji(Kt)?Kt.split(" ")[0]:"")+At:(on=nd(At.substr(2),cn),At=Ji(Kt)?Kt:(L?Je.utils.mapRange(0,L.duration(),L.scrollTrigger.start,L.scrollTrigger.end,Xe):Xe)+on,ti=_)),At=tS(At,"end",I),lt=Math.max(Xe,cS(At||(ti?"100% 0":Ht),ti,cn,C,ue()+on,ot,W,I,Tt,re,J,Ht,L,I._endClamp&&"_endClamp"))||-.001,on=0,Tn=li;Tn--;)D=Pt[Tn]||{},Z=D.pin,Z&&D.start-D._pinPush<=Xe&&!L&&D.end>0&&(wn=D.end-(I._startClamp?Math.max(0,D.start):D.start),(Z===_&&D.start-D._pinPush<Xe||Z===Xn)&&isNaN(Kt)&&(on+=wn*(1-D.progress)),Z===v&&(en+=wn));if(Xe+=on,lt+=on,I._startClamp&&(I._startClamp+=on),I._endClamp&&!bi&&(I._endClamp=lt||-.001,lt=Math.min(lt,rs(j,C))),at=lt-Xe||(Xe-=.01)&&.001,Mn&&(ee=Je.utils.clamp(0,1,Je.utils.normalize(Xe,lt,ve))),I._pinPush=en,St&&on&&(wn={},wn[C.a]="+="+on,Xn&&(wn[C.p]="-="+ue()),Je.set([St,ot],wn)),v&&!(mg&&I.end>=rs(j,C)))wn=Mr(v),Bs=C===Gn,Nr=ue(),Ge=parseFloat(me(C.a))+en,!Ht&&lt>1&&(be=(ne?tn.scrollingElement||tr:j).style,be={style:be,value:be["overflow"+C.a.toUpperCase()]},ne&&Mr(Jt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(be.style["overflow"+C.a.toUpperCase()]="scroll")),Jp(v,q,wn),w=Hf(v),Rn=As(v,!0),ce=J&&Ro(j,Bs?Pi:Gn)(),M?(qe=[M+C.os2,at+en+Vn],qe.t=q,Tn=M===Un?xd(v,C)+at+en:0,Tn&&(qe.push(C.d,Tn+Vn),q.style.flexBasis!=="auto"&&(q.style.flexBasis=Tn+Vn)),xl(qe),Xn&&Pt.forEach(function(He){He.pin===Xn&&He.vars.pinSpacing!==!1&&(He._subPinOffset=!0)}),J&&ue(ve)):(Tn=xd(v,C),Tn&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=Tn+Vn)),J&&(Ct={top:Rn.top+(Bs?Nr-Xe:ce)+Vn,left:Rn.left+(Bs?ce:Nr-Xe)+Vn,boxSizing:"border-box",position:"fixed"},Ct[fa]=Ct["max"+Pl]=Math.ceil(Rn.width)+Vn,Ct[da]=Ct["max"+t0]=Math.ceil(Rn.height)+Vn,Ct[Er]=Ct[Er+zu]=Ct[Er+ku]=Ct[Er+Vu]=Ct[Er+Bu]="0",Ct[Un]=wn[Un],Ct[Un+zu]=wn[Un+zu],Ct[Un+ku]=wn[Un+ku],Ct[Un+Vu]=wn[Un+Vu],Ct[Un+Bu]=wn[Un+Bu],O=vP(We,Ct,N),bi&&ue(0)),r?(le=r._initted,$p(1),r.render(r.duration(),!0,!0),we=me(C.a)-Ge+at+en,Re=Math.abs(at-we)>1,J&&Re&&O.splice(O.length-2,2),r.render(0,!0,!0),le||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),$p(0)):we=at,be&&(be.value?be.style["overflow"+C.a.toUpperCase()]=be.value:be.style.removeProperty("overflow-"+C.a));else if(_&&ue()&&!L)for(Rn=_.parentNode;Rn&&Rn!==Jt;)Rn._pinOffset&&(Xe-=Rn._pinOffset,lt-=Rn._pinOffset),Rn=Rn.parentNode;te&&te.forEach(function(He){return He.revert(!1,!0)}),I.start=Xe,I.end=lt,ft=Ut=bi?ve:ue(),!L&&!bi&&(ft<ve&&ue(ve),I.scroll.rec=0),I.revert(!1,!0),ke=_i(),Le&&(Ce=-1,Le.restart(!0)),gi=0,r&&V&&(r._initted||ge)&&r.progress()!==ge&&r.progress(ge||0,!0).render(r.time(),!0,!0),(Mn||ee!==I.progress||L||E||r&&!r._initted)&&(r&&!V&&(r._initted||ee||r.vars.immediateRender!==!1)&&r.totalProgress(L&&Xe<-.001&&!ee?Je.utils.normalize(Xe,lt,0):ee,!0),I.progress=Mn||(ft-Xe)/at===ee?0:ee),v&&M&&(q._pinOffset=Math.round(I.progress*we)),G&&G.invalidate(),isNaN(Be)||(Be-=Je.getProperty(oe,C.p),Ne-=Je.getProperty(W,C.p),Wf(oe,C,Be),Wf(St,C,Be-(gt||0)),Wf(W,C,Ne),Wf(ot,C,Ne-(gt||0))),Mn&&!bi&&I.update(),p&&!bi&&!yt&&(yt=!0,p(I),yt=!1)}},I.getVelocity=function(){return(ue()-Ut)/(_i()-Au)*1e3||0},I.endAnimation=function(){yu(I.callbackAnimation),r&&(G?G.progress(1):r.paused()?V||yu(r,I.direction<0,1):yu(r,r.reversed()))},I.labelToScroll=function(Fe){return r&&r.labels&&(Xe||I.refresh()||Xe)+r.labels[Fe]/r.duration()*at||0},I.getTrailing=function(Fe){var dt=Pt.indexOf(I),rt=I.direction>0?Pt.slice(0,dt).reverse():Pt.slice(dt+1);return(Ji(Fe)?rt.filter(function(gt){return gt.vars.preventOverlaps===Fe}):rt).filter(function(gt){return I.direction>0?gt.end<=Xe:gt.start>=lt})},I.update=function(Fe,dt,rt){if(!(L&&!rt&&!Fe)){var gt=bi===!0?ve:I.scroll(),cn=Fe?0:(gt-Xe)/at,Tt=cn<0?0:cn>1?1:cn||0,Ht=I.progress,Mn,on,en,At,ti,Kt,Xn,li;if(dt&&(Ut=ft,ft=L?ue():gt,A&&(mt=Ae,Ae=r&&!V?r.totalProgress():Tt)),x&&v&&!gi&&!Ff&&br&&(!Tt&&Xe<gt+(gt-Ut)/(_i()-Au)*x?Tt=1e-4:Tt===1&&lt>gt+(gt-Ut)/(_i()-Au)*x&&(Tt=.9999)),Tt!==Ht&&I.enabled){if(Mn=I.isActive=!!Tt&&Tt<1,on=!!Ht&&Ht<1,Kt=Mn!==on,ti=Kt||!!Tt!=!!Ht,I.direction=Tt>Ht?1:-1,I.progress=Tt,ti&&!gi&&(en=Tt&&!Ht?0:Tt===1?1:Ht===1?2:3,V&&(At=!Kt&&X[en+1]!=="none"&&X[en+1]||X[en],li=r&&(At==="complete"||At==="reset"||At in r))),T&&(Kt||li)&&(li||m||!r)&&(xi(T)?T(I):I.getTrailing(T).forEach(function(Nr){return Nr.endAnimation()})),V||(G&&!gi&&!Ff?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Tt,r._tTime/r._tDur):(G.vars.totalProgress=Tt,G.invalidate().restart())):r&&r.totalProgress(Tt,!!(gi&&(ke||Fe)))),v){if(Fe&&M&&(q.style[M+C.os2]=je),!J)de(Ru(Ge+we*Tt));else if(ti){if(Xn=!Fe&&Tt>Ht&&lt+1>gt&&gt+1>=rs(j,C),N)if(!Fe&&(Mn||Xn)){var Tn=As(v,!0),wn=gt-Xe;fS(v,Jt,Tn.top+(C===Gn?wn:0)+Vn,Tn.left+(C===Gn?0:wn)+Vn)}else fS(v,q);xl(Mn||Xn?O:w),Re&&Tt<1&&Mn||de(Ge+(Tt===1&&!Xn?we:0))}}A&&!_e.tween&&!gi&&!Ff&&Le.restart(!0),c&&(Kt||P&&Tt&&(Tt<1||!Kp))&&tc(c.targets).forEach(function(Nr){return Nr.classList[Mn||P?"add":"remove"](c.className)}),u&&!V&&!Fe&&u(I),ti&&!gi?(V&&(li&&(At==="complete"?r.pause().totalProgress(1):At==="reset"?r.restart(!0).pause():At==="restart"?r.restart(!0):r[At]()),u&&u(I)),(Kt||!Kp)&&(h&&Kt&&il(I,h),$[en]&&il(I,$[en]),P&&(Tt===1?I.kill(!1,1):$[en]=0),Kt||(en=Tt===1?1:3,$[en]&&il(I,$[en]))),z&&!Mn&&Math.abs(I.getVelocity())>(bu(z)?z:2500)&&(yu(I.callbackAnimation),G?G.progress(1):yu(r,At==="reverse"?1:!Tt,1))):V&&u&&!gi&&u(I)}if(Ye){var Rn=L?gt/L.duration()*(L._caScrollDist||0):gt;Ee(Rn+(oe._isFlipped?1:0)),Ye(Rn)}Pe&&Pe(-gt/L.duration()*(L._caScrollDist||0))}},I.enable=function(Fe,dt){I.enabled||(I.enabled=!0,Jn(j,"resize",Pu),ne||Jn(j,"scroll",sl),F&&Jn(o,"refreshInit",F),Fe!==!1&&(I.progress=ee=0,ft=Ut=Ce=ue()),dt!==!1&&I.refresh())},I.getTween=function(Fe){return Fe&&_e?_e.tween:G},I.setPositions=function(Fe,dt,rt,gt){if(L){var cn=L.scrollTrigger,Tt=L.duration(),Ht=cn.end-cn.start;Fe=cn.start+Ht*Fe/Tt,dt=cn.start+Ht*dt/Tt}I.refresh(!1,!1,{start:nS(Fe,rt&&!!I._startClamp),end:nS(dt,rt&&!!I._endClamp)},gt),I.update()},I.adjustPinSpacing=function(Fe){if(qe&&Fe){var dt=qe.indexOf(C.d)+1;qe[dt]=parseFloat(qe[dt])+Fe+Vn,qe[1]=parseFloat(qe[1])+Fe+Vn,xl(qe)}},I.disable=function(Fe,dt){if(Fe!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,dt||G&&G.pause(),ve=0,Ue&&(Ue.uncache=1),F&&Qn(o,"refreshInit",F),Le&&(Le.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!ne)){for(var rt=Pt.length;rt--;)if(Pt[rt].scroller===j&&Pt[rt]!==I)return;Qn(j,"resize",Pu),ne||Qn(j,"scroll",sl)}},I.kill=function(Fe,dt){I.disable(Fe,dt),G&&!dt&&G.kill(),d&&delete gg[d];var rt=Pt.indexOf(I);rt>=0&&Pt.splice(rt,1),rt===Ri&&rd>0&&Ri--,rt=0,Pt.forEach(function(gt){return gt.scroller===I.scroller&&(rt=1)}),rt||bi||(I.scroll.rec=0),r&&(r.scrollTrigger=null,Fe&&r.revert({kill:!1}),dt||r.kill()),St&&[St,ot,oe,W].forEach(function(gt){return gt.parentNode&&gt.parentNode.removeChild(gt)}),Gu===I&&(Gu=0),v&&(Ue&&(Ue.uncache=1),rt=0,Pt.forEach(function(gt){return gt.pin===v&&rt++}),rt||(Ue.spacer=0)),n.onKill&&n.onKill(I)},Pt.push(I),I.enable(!1,!1),st&&st(I),r&&r.add&&!at){var vt=I.update;I.update=function(){I.update=vt,It.cache++,Xe||lt||I.refresh()},Je.delayedCall(.01,I.update),at=.01,Xe=lt=0}else I.refresh();v&&mP()},o.register=function(n){return ol||(Je=n||cE(),uE()&&window.document&&o.enable(),ol=Cu),ol},o.defaults=function(n){if(n)for(var r in n)Vf[r]=n[r];return Vf},o.disable=function(n,r){Cu=0,Pt.forEach(function(u){return u[r?"kill":"disable"](n)}),Qn(Lt,"wheel",sl),Qn(tn,"scroll",sl),clearInterval(Of),Qn(tn,"touchcancel",Jr),Qn(Jt,"touchstart",Jr),Bf(Qn,tn,"pointerdown,touchstart,mousedown",iS),Bf(Qn,tn,"pointerup,touchend,mouseup",rS),vd.kill(),kf(Qn);for(var a=0;a<It.length;a+=3)zf(Qn,It[a],It[a+1]),zf(Qn,It[a],It[a+2])},o.enable=function(){if(Lt=window,tn=document,tr=tn.documentElement,Jt=tn.body,Je){if(tc=Je.utils.toArray,Ou=Je.utils.clamp,pg=Je.core.context||Jr,$p=Je.core.suppressOverwrites||Jr,Zg=Lt.history.scrollRestoration||"auto",_g=Lt.pageYOffset||0,Je.core.globals("ScrollTrigger",o),Jt){Cu=1,vl=document.createElement("div"),vl.style.height="100vh",vl.style.position="absolute",SE(),lP(),Dn.register(Je),o.isTouch=Dn.isTouch,ho=Dn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hg=Dn.isTouch===1,Jn(Lt,"wheel",sl),Kg=[Lt,tn,tr,Jt],Je.matchMedia?(o.matchMedia=function(p){var m=Je.matchMedia(),_;for(_ in p)m.add(_,p[_]);return m},Je.addEventListener("matchMediaInit",function(){vE(),i0()}),Je.addEventListener("matchMediaRevert",function(){return _E()}),Je.addEventListener("matchMedia",function(){oa(0,1),_a("matchMedia")}),Je.matchMedia().add("(orientation: portrait)",function(){return Qp(),Qp})):console.warn("Requires GSAP 3.11.0 or later"),Qp(),Jn(tn,"scroll",sl);var n=Jt.hasAttribute("style"),r=Jt.style,a=r.borderTopStyle,u=Je.core.Animation.prototype,c,d;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=As(Jt),Gn.m=Math.round(c.top+Gn.sc())||0,Pi.m=Math.round(c.left+Pi.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(Jt.setAttribute("style",""),Jt.removeAttribute("style")),Of=setInterval(aS,250),Je.delayedCall(.5,function(){return Ff=0}),Jn(tn,"touchcancel",Jr),Jn(Jt,"touchstart",Jr),Bf(Jn,tn,"pointerdown,touchstart,mousedown",iS),Bf(Jn,tn,"pointerup,touchend,mouseup",rS),dg=Je.utils.checkPrefix("transform"),sd.push(dg),ol=_i(),vd=Je.delayedCall(.2,oa).pause(),al=[tn,"visibilitychange",function(){var p=Lt.innerWidth,m=Lt.innerHeight;tn.hidden?(Jx=p,eS=m):(Jx!==p||eS!==m)&&Pu()},tn,"DOMContentLoaded",oa,Lt,"load",oa,Lt,"resize",Pu],kf(Jn),Pt.forEach(function(p){return p.enable(0,1)}),d=0;d<It.length;d+=3)zf(Qn,It[d],It[d+1]),zf(Qn,It[d],It[d+2])}else if(tn){var h=function p(){o.enable(),tn.removeEventListener("DOMContentLoaded",p)};tn.addEventListener("DOMContentLoaded",h)}}},o.config=function(n){"limitCallbacks"in n&&(Kp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Of)||(Of=r)&&setInterval(aS,r),"ignoreMobileResize"in n&&(hg=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kf(Qn)||kf(Jn,n.autoRefreshEvents||"none"),oE=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=ki(n),u=It.indexOf(a),c=ma(a);~u&&It.splice(u,c?6:2),r&&(c?as.unshift(Lt,r,Jt,r,tr,r):as.unshift(a,r))},o.clearMatchMedia=function(n){Pt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var u=(Ji(n)?ki(n):n).getBoundingClientRect(),c=u[a?fa:da]*r||0;return a?u.right-c>0&&u.left+c<Lt.innerWidth:u.bottom-c>0&&u.top+c<Lt.innerHeight},o.positionInViewport=function(n,r,a){Ji(n)&&(n=ki(n));var u=n.getBoundingClientRect(),c=u[a?fa:da],d=r==null?c/2:r in Sd?Sd[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+d)/Lt.innerWidth:(u.top+d)/Lt.innerHeight},o.killAll=function(n){if(Pt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=ga.killAll||[];ga={},r.forEach(function(a){return a()})}},o})();Nt.version="3.15.0";Nt.saveStyles=function(o){return o?tc(o).forEach(function(e){if(e&&e.style){var t=Qi.indexOf(e);t>=0&&Qi.splice(t,5),Qi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Je.core.getCache(e),pg())}}):Qi};Nt.revert=function(o,e){return i0(!o,e)};Nt.create=function(o,e){return new Nt(o,e)};Nt.refresh=function(o){return o?Pu(!0):(ol||Nt.register())&&oa(!0)};Nt.update=function(o){return++It.cache&&Ds(o===!0?2:0)};Nt.clearScrollMemory=xE;Nt.maxScroll=function(o,e){return rs(o,e?Pi:Gn)};Nt.getScrollFunc=function(o,e){return Ro(ki(o),e?Pi:Gn)};Nt.getById=function(o){return gg[o]};Nt.getAll=function(){return Pt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Nt.isScrolling=function(){return!!br};Nt.snapDirectional=n0;Nt.addEventListener=function(o,e){var t=ga[o]||(ga[o]=[]);~t.indexOf(e)||t.push(e)};Nt.removeEventListener=function(o,e){var t=ga[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Nt.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(h,p){var m=[],_=[],v=Je.delayedCall(r,function(){p(m,_),m=[],_=[]}).pause();return function(M){m.length||v.restart(!0),m.push(M.trigger),_.push(M),a<=m.length&&v.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&xi(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return xi(a)&&(a=a(),Jn(Nt,"refresh",function(){return a=e.batchMax()})),tc(o).forEach(function(d){var h={};for(c in n)h[c]=n[c];h.trigger=d,t.push(Nt.create(h))}),t};var hS=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},em=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dn.isTouch?" pinch-zoom":""):"none",e===tr&&o(Jt,t)},Xf={auto:1,scroll:1},SP=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||Je.core.getCache(a),c=_i(),d;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==Jt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Xf[(d=Mr(a)).overflowY]||Xf[d.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!ma(a)&&(Xf[(d=Mr(a)).overflowY]||Xf[d.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},EE=function(e,t,n,r){return Dn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&SP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Jn(tn,Dn.eventTypes[0],mS,!1,!0)},onDisable:function(){return Qn(tn,Dn.eventTypes[0],mS,!0)}})},yP=/(input|label|select|textarea)/i,pS,mS=function(e){var t=yP.test(e.target.tagName);(t||pS)&&(e._gsapAllow=!0,pS=t)},EP=function(e){ea(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,d,h=ki(e.target)||tr,p=Je.core.globals().ScrollSmoother,m=p&&p.get(),_=ho&&(e.content&&ki(e.content)||m&&e.content!==!1&&!m.smooth()&&m.content()),v=Ro(h,Gn),M=Ro(h,Pi),E=1,x=(Dn.isTouch&&Lt.visualViewport?Lt.visualViewport.scale*Lt.visualViewport.width:Lt.outerWidth)/Lt.innerWidth,S=0,b=xi(r)?function(){return r(c)}:function(){return r||2.8},P,A,N=EE(h,e.type,!0,a),U=function(){return A=!1},L=Jr,z=Jr,T=function(){d=rs(h,Gn),z=Ou(ho?1:0,d),n&&(L=Ou(0,rs(h,Pi))),P=ha},C=function(){_._gsap.y=Ru(parseFloat(_._gsap.y)+v.offset)+"px",_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(_._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},V=function(){if(A){requestAnimationFrame(U);var H=Ru(c.deltaY/2),re=z(v.v-H);if(_&&re!==v.v+v.offset){v.offset=re-v.v;var I=Ru((parseFloat(_&&_._gsap.y)||0)-v.offset);_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",_._gsap.y=I+"px",v.cacheID=It.cache,Ds()}return!0}v.offset&&C(),A=!0},j,Q,ne,J,$=function(){T(),j.isActive()&&j.vars.scrollY>d&&(v()>d?j.progress(1)&&v(d):j.resetTo("scrollY",d))};return _&&Je.set(_,{y:"+=0"}),e.ignoreCheck=function(X){return ho&&X.type==="touchmove"&&V()||E>1.05&&X.type!=="touchstart"||c.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){A=!1;var X=E;E=Ru((Lt.visualViewport&&Lt.visualViewport.scale||1)/x),j.pause(),X!==E&&em(h,E>1.01?!0:n?!1:"x"),Q=M(),ne=v(),T(),P=ha},e.onRelease=e.onGestureStart=function(X,H){if(v.offset&&C(),!H)J.restart(!0);else{It.cache++;var re=b(),I,F;n&&(I=M(),F=I+re*.05*-X.velocityX/.227,re*=hS(M,I,F,rs(h,Pi)),j.vars.scrollX=L(F)),I=v(),F=I+re*.05*-X.velocityY/.227,re*=hS(v,I,F,rs(h,Gn)),j.vars.scrollY=z(F),j.invalidate().duration(re).play(.01),(ho&&j.vars.scrollY>=d||I>=d-1)&&Je.to({},{onUpdate:$,duration:re})}u&&u(X)},e.onWheel=function(){j._ts&&j.pause(),_i()-S>1e3&&(P=0,S=_i())},e.onChange=function(X,H,re,I,F){if(ha!==P&&T(),H&&n&&M(L(I[2]===H?Q+(X.startX-X.x):M()+H-I[1])),re){v.offset&&C();var se=F[2]===re,Me=se?ne+X.startY-X.y:v()+re-F[1],Ce=z(Me);se&&Me!==Ce&&(ne+=Ce-Me),v(Ce)}(re||H)&&Ds()},e.onEnable=function(){em(h,n?!1:"x"),Nt.addEventListener("refresh",$),Jn(Lt,"resize",$),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=M.smooth=!1),N.enable()},e.onDisable=function(){em(h,!0),Qn(Lt,"resize",$),Nt.removeEventListener("refresh",$),N.kill()},e.lockAxis=e.lockAxis!==!1,c=new Dn(e),c.iOS=ho,ho&&!v()&&v(1),ho&&Je.ticker.add(Jr),J=c._dc,j=Je.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yE(v,v(),function(){return j.pause()})},onUpdate:Ds,onComplete:J.vars.onComplete}),c};Nt.sort=function(o){if(xi(o))return Pt.sort(o);var e=Lt.pageYOffset||0;return Nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Lt.innerHeight}),Pt.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Nt.observe=function(o){return new Dn(o)};Nt.normalizeScroll=function(o){if(typeof o>"u")return Ci;if(o===!0&&Ci)return Ci.enable();if(o===!1){Ci&&Ci.kill(),Ci=o;return}var e=o instanceof Dn?o:EP(o);return Ci&&Ci.target===e.target&&Ci.kill(),ma(e.target)&&(Ci=e),e};Nt.core={_getVelocityProp:fg,_inputObserver:EE,_scrollers:It,_proxies:as,bridge:{ss:function(){br||_a("scrollStart"),br=_i()},ref:function(){return gi}}};cE()&&Je.registerPlugin(Nt);function MP(){const o=Ft.useRef(null),e=Ft.useRef(null),t=Ft.useRef(null);Td(()=>{if(!o.current||!e.current)return;dn.registerPlugin(Nt);const r=dn.timeline({scrollTrigger:{trigger:o.current,start:"top top",end:"bottom bottom",scrub:1,pin:e.current}});r.fromTo(".scanner-line",{y:"-10vh",opacity:0},{y:"110vh",opacity:1,duration:3,ease:"power1.inOut"}),r.fromTo(".core-object",{clipPath:"inset(0% 0% 100% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.8,ease:"none"},"-=2.4"),r.to(".scanner-line",{opacity:0,duration:.3},"-=0.3");const a=dn.timeline(),u=14;for(let d=0;d<u;d++)a.to(".core-object",{x:()=>(Math.random()-.5)*45,y:()=>(Math.random()-.5)*20,skewX:()=>(Math.random()-.5)*35,scale:()=>.9+Math.random()*.2,filter:()=>`brightness(${1.2+Math.random()*2.8}) contrast(${1.5+Math.random()*1.5}) hue-rotate(${Math.random()*360}deg) drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))`,duration:.07,ease:"none"});a.to(".core-object",{x:0,y:0,skewX:0,scale:1,filter:"none",duration:.05}),r.add(a),r.to(".core-object",{scale:.1,opacity:0,duration:1.5,ease:"power4.in"}),[{x:-380,y:-240,z:400,rotX:18,rotY:-28,rotZ:-5},{x:380,y:-240,z:300,rotX:-18,rotY:28,rotZ:5},{x:-440,y:220,z:350,rotX:12,rotY:-20,rotZ:-8},{x:440,y:220,z:450,rotX:-12,rotY:20,rotZ:8},{x:0,y:-320,z:500,rotX:30,rotY:0,rotZ:0},{x:0,y:320,z:300,rotX:-30,rotY:0,rotZ:0}].forEach((d,h)=>{r.to(`.data-panel-${h}`,{opacity:1,x:d.x,y:d.y,z:d.z,rotateX:d.rotX,rotateY:d.rotY,rotateZ:d.rotZ,duration:3,ease:"power3.out"},"-=1.5")})},{scope:o});const n=[{title:"BIOMETRIC SPECTRUM",subtitle:"SCAN IDENT // SYNC: 99.4%",stat:"CORE TEMP: 310 K",content:"Neural alignment buffers online. Synaptic transmission vectors synchronized with mainframe registry templates."},{title:"REACTOR CONTROLLER",subtitle:"MAGNETICS // STABLE",stat:"STRENGTH: 920 T",content:"Dilithium flow pressure stable. Containment field grid operating at optimal threshold envelope."},{title:"WARP DYNAMICS",subtitle:"COORDINATE RELAY // FTL",stat:"INDEX: W-8.21",content:"Manifold alignment locked. Subspace vector computations complete. Dimensional portals configured."},{title:"DEFENSIVE CORE",subtitle:"AEGIS SHIELDING // CHARGED",stat:"EFFICIENCY: 99.1%",content:"Flux shield capacitors charged to capacity. Dynamic defense line structural bounds operational."},{title:"COGNITIVE APERTURE",subtitle:"NEURAL NETWORK // SECURE",stat:"DAMPING: 12.4ms",content:"Mental feedback matrices configured. Target integration bounds mapped to human visual cortex."},{title:"SYSTEM TELEMETRY",subtitle:"MONITOR DECK // LOGGING",stat:"NOISE: 0.041 dB",content:"Subspace telemetries reporting zero packet corruption. Connection lines clear for cross-system transmission."}];return k.jsx("div",{ref:o,className:"scroll-wrapper",children:k.jsxs("div",{ref:e,className:"pinned-viewport",children:[k.jsx("div",{className:"grid-overlay"}),k.jsx("div",{className:"scanner-line"}),k.jsx("div",{ref:t,className:"core-object",children:k.jsxs("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",children:[k.jsx("defs",{children:k.jsxs("radialGradient",{id:"glow",cx:"50%",cy:"50%",r:"50%",children:[k.jsx("stop",{offset:"0%",stopColor:"#00ffff",stopOpacity:"0.8"}),k.jsx("stop",{offset:"60%",stopColor:"#d000ff",stopOpacity:"0.3"}),k.jsx("stop",{offset:"100%",stopColor:"#050505",stopOpacity:"0"})]})}),k.jsx("circle",{cx:"100",cy:"100",r:"85",fill:"url(#glow)"}),k.jsx("circle",{cx:"100",cy:"100",r:"75",stroke:"#00ffff",strokeWidth:"1",strokeDasharray:"10 15 30 10",fill:"none",className:"ring-slow"}),k.jsx("circle",{cx:"100",cy:"100",r:"62",stroke:"#d000ff",strokeWidth:"1.5",strokeDasharray:"40 10 5 15",fill:"none",className:"ring-fast"}),k.jsx("circle",{cx:"100",cy:"100",r:"50",stroke:"#00ffff",strokeWidth:"0.5",strokeDasharray:"2 4",fill:"none"}),k.jsx("polygon",{points:"100,58 136,80 136,120 100,142 64,120 64,80",stroke:"#edf1ed",strokeWidth:"1.5",fill:"none",className:"core-poly"}),k.jsx("polygon",{points:"100,70 125,85 125,115 100,130 75,115 75,85",stroke:"#00ffff",strokeWidth:"1",fill:"rgba(0, 255, 255, 0.05)",className:"core-poly-inner"}),k.jsx("circle",{cx:"100",cy:"100",r:"10",fill:"#edf1ed",className:"core-node"})]})}),k.jsx("div",{className:"panels-container",children:n.map((r,a)=>k.jsxs("div",{className:`data-panel data-panel-${a} glass-panel`,children:[k.jsxs("div",{className:"panel-header",children:[k.jsxs("div",{children:[k.jsxs("span",{className:"panel-id",children:["NODE_0",a+1]}),k.jsx("h4",{className:"panel-title",children:r.title})]}),k.jsx("span",{className:"panel-status",children:r.stat})]}),k.jsx("div",{className:"panel-subtitle",children:r.subtitle}),k.jsx("p",{className:"panel-desc",children:r.content}),k.jsxs("div",{className:"panel-footer",children:[k.jsx("span",{className:"panel-link",children:"[CONNECT LINK]"}),k.jsxs("span",{className:"panel-marker",children:["SYS_R_0",a+1]})]})]},a))}),k.jsxs("div",{className:"scroll-prompt-hud",children:[k.jsx("span",{className:"hud-label",children:"SCENE STATUS: READY"}),k.jsx("p",{className:"hud-value hud-accent",children:"SCROLL DOWN TO INITIATE SCAN"})]})]})})}var gS="1.3.23";function ME(o,e,t){return Math.max(o,Math.min(e,t))}function TP(o,e,t){return(1-t)*o+t*e}function wP(o,e,t,n){return TP(o,e,1-Math.exp(-t*n))}function AP(o,e){return(o%e+e)%e}var CP=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(o){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=o;const t=ME(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=wP(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(o,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:u}){this.from=this.value=o,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=u}};function RP(o,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,o.apply(this,n)},e)}}var bP=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(o,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=o,this.content=e,t&&(this.debouncedResize=RP(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},TE=class{events={};emit(o,...e){const t=this.events[o]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(o,e){return this.events[o]?this.events[o].push(e):this.events[o]=[e],()=>{this.events[o]=this.events[o]?.filter(t=>e!==t)}}off(o,e){this.events[o]=this.events[o]?.filter(t=>e!==t)}destroy(){this.events={}}};const PP=100/6,fo={passive:!1};function _S(o,e){return o===1?PP:o===2?e:1}var NP=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new TE;constructor(o,e={wheelMultiplier:1,touchMultiplier:1}){this.element=o,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,fo),this.element.addEventListener("touchstart",this.onTouchStart,fo),this.element.addEventListener("touchmove",this.onTouchMove,fo),this.element.addEventListener("touchend",this.onTouchEnd,fo)}on(o,e){return this.emitter.on(o,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,fo),this.element.removeEventListener("touchstart",this.onTouchStart,fo),this.element.removeEventListener("touchmove",this.onTouchMove,fo),this.element.removeEventListener("touchend",this.onTouchEnd,fo)}onTouchStart=o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})};onTouchMove=o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:o})};onTouchEnd=o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})};onWheel=o=>{let{deltaX:e,deltaY:t,deltaMode:n}=o;const r=_S(n,this.window.width),a=_S(n,this.window.height);e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:o})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const vS=o=>Math.min(1,1.001-2**(-10*o));var xS=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new CP;emitter=new TE;dimensions;virtualScroll;constructor({wrapper:o=window,content:e=document.documentElement,eventsTarget:t=o,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:u=1.7,duration:c,easing:d,lerp:h=.1,infinite:p=!1,orientation:m="vertical",gestureOrientation:_=m==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:M=1,autoResize:E=!0,prevent:x,virtualScroll:S,overscroll:b=!0,autoRaf:P=!1,anchors:A=!1,autoToggle:N=!1,allowNestedScroll:U=!1,__experimental__naiveDimensions:L=!1,naiveDimensions:z=L,stopInertiaOnNavigate:T=!1}={}){window.lenisVersion=gS,window.lenis||(window.lenis={}),window.lenis.version=gS,m==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!o||o===document.documentElement)&&(o=window),typeof c=="number"&&typeof d!="function"?d=vS:typeof d=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:o,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:u,duration:c,easing:d,lerp:h,infinite:p,gestureOrientation:_,orientation:m,touchMultiplier:v,wheelMultiplier:M,autoResize:E,prevent:x,virtualScroll:S,overscroll:b,autoRaf:P,anchors:A,autoToggle:N,allowNestedScroll:U,naiveDimensions:z,stopInertiaOnNavigate:T},this.dimensions=new bP(o,e,{autoResize:E}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new NP(t,{touchMultiplier:v,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,e){return this.emitter.on(o,e)}off(o,e){return this.emitter.off(o,e)}onScrollEnd=o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=o=>{o.propertyName?.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()};setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}onClick=o=>{const e=o.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.hash.split("#")[1]}`;this.scrollTo(a,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=o=>{o.button===1&&this.reset()};onVirtualScroll=o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:e,deltaY:t,event:n}=o;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||c)return;let d=n.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const h=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(d.find(M=>M instanceof HTMLElement&&(typeof h=="function"&&h?.(M)||M.hasAttribute?.("data-lenis-prevent")||p==="vertical"&&M.hasAttribute?.("data-lenis-prevent-vertical")||p==="horizontal"&&M.hasAttribute?.("data-lenis-prevent-horizontal")||r&&M.hasAttribute?.("data-lenis-prevent-touch")||a&&M.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let m=t;this.options.gestureOrientation==="both"?m=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(m=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const _=r&&this.options.syncTouch,v=r&&n.type==="touchend";v&&(m=Math.sign(m)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+m,{programmatic:!1,..._?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=o=>{const e=o-(this.time||o);this.time=o,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(o,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:u=r?this.options.duration:void 0,easing:c=r?this.options.easing:void 0,onStart:d,onComplete:h,force:p=!1,userData:m}={}){if((this.isStopped||this.isLocked)&&!p)return;let _=o,v=e;if(typeof _=="string"&&["top","left","start","#"].includes(_))_=0;else if(typeof _=="string"&&["bottom","right","end"].includes(_))_=this.limit;else{let M=null;if(typeof _=="string"?(M=document.querySelector(_),M||(_==="#top"?_=0:console.warn("Lenis: Target not found",_))):_ instanceof HTMLElement&&_?.nodeType&&(M=_),M){if(this.options.wrapper!==window){const A=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?A.left:A.top}const E=M.getBoundingClientRect(),x=getComputedStyle(M),S=this.isHorizontal?Number.parseFloat(x.scrollMarginLeft):Number.parseFloat(x.scrollMarginTop),b=getComputedStyle(this.rootElement),P=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);_=(this.isHorizontal?E.left:E.top)+this.animatedScroll-(Number.isNaN(S)?0:S)-(Number.isNaN(P)?0:P)}}if(typeof _=="number"){if(_+=v,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const M=_-this.animatedScroll;M>this.limit/2?_-=this.limit:M<-this.limit/2&&(_+=this.limit)}}else _=ME(0,_,this.limit);if(_===this.targetScroll){d?.(this),h?.(this);return}if(this.userData=m??{},t){this.animatedScroll=this.targetScroll=_,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=_),typeof u=="number"&&typeof c!="function"?c=vS:typeof c=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,_,{duration:u,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",d?.(this)},onUpdate:(M,E)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),r&&(this.targetScroll=M),E||this.emit(),E&&(this.reset(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:e,deltaY:t}){const n=Date.now();o._lenis||(o._lenis={});const r=o._lenis;let a,u,c,d,h,p,m,_,v,M;if(n-(r.time??0)>2e3){r.time=Date.now();const U=window.getComputedStyle(o);if(r.computedStyle=U,a=["auto","overlay","scroll"].includes(U.overflowX),u=["auto","overlay","scroll"].includes(U.overflowY),h=["auto"].includes(U.overscrollBehaviorX),p=["auto"].includes(U.overscrollBehaviorY),r.hasOverflowX=a,r.hasOverflowY=u,!(a||u))return!1;m=o.scrollWidth,_=o.scrollHeight,v=o.clientWidth,M=o.clientHeight,c=m>v,d=_>M,r.isScrollableX=c,r.isScrollableY=d,r.scrollWidth=m,r.scrollHeight=_,r.clientWidth=v,r.clientHeight=M,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=p}else c=r.isScrollableX,d=r.isScrollableY,a=r.hasOverflowX,u=r.hasOverflowY,m=r.scrollWidth,_=r.scrollHeight,v=r.clientWidth,M=r.clientHeight,h=r.hasOverscrollBehaviorX,p=r.hasOverscrollBehaviorY;if(!(a&&c||u&&d))return!1;const E=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let x,S,b,P,A,N;if(E==="horizontal")x=Math.round(o.scrollLeft),S=m-v,b=e,P=a,A=c,N=h;else if(E==="vertical")x=Math.round(o.scrollTop),S=_-M,b=t,P=u,A=d,N=p;else return!1;return!N&&(x>=S||x<=0)?!0:(b>0?x<S:x>0)&&P&&A}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?AP(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};function DP(){const[o,e]=Ft.useState(window.location.pathname);Ft.useEffect(()=>{const a=()=>{e(window.location.pathname)};return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]),Ft.useEffect(()=>{dn.registerPlugin(Nt);const a=xS.default||xS;let u;try{u=new a({duration:1.2,easing:h=>Math.min(1,1.001-Math.pow(2,-10*h)),smoothWheel:!0})}catch(h){console.error("Failed to construct Lenis smooth scroll:",h);return}u.on("scroll",Nt.update);let c=!1;const d=h=>{c||u.raf(h*1e3)};return dn.ticker.add(d),dn.ticker.lagSize(0),()=>{c=!0,u.destroy(),dn.ticker.remove(d)}},[]);const t=a=>{window.history.pushState({},"",a),e(a),window.scrollTo(0,0)},n=()=>{switch(o){case"/work":return k.jsx(Q2,{});case"/projects":return k.jsx(J2,{});case"/about":return k.jsx(eP,{});case"/contact":return k.jsx(tP,{});case"/careers":return k.jsx(iP,{});default:return null}},r=o==="/"||o==="";return k.jsxs(k.Fragment,{children:[k.jsx(FT,{currentPath:o,onNavigate:t}),k.jsx(Z2,{isHome:r}),r&&k.jsx(MP,{}),k.jsx("main",{className:"page-container",children:n()})]})}const SS=document.getElementById("root");SS&&h1.createRoot(SS).render(k.jsx(a1.StrictMode,{children:k.jsx(DP,{})}));
