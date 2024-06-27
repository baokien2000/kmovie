"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{1749:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(6921),i=n(1884),o=n(7437),l=i._(n(2265)),a=r._(n(4887)),u=r._(n(2251)),s=n(8630),f=n(6906),d=n(337);n(6184);let c=n(6993),p=r._(n(536)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,n,r,i,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){let[t,n]=l.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,l.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:u,decoding:s,className:f,style:d,fetchPriority:c,placeholder:p,loading:m,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:_,onLoad:S,onError:O,...C}=e;return(0,o.jsx)("img",{...C,...g(c),loading:m,width:u,height:a,decoding:s,"data-nimg":b?"fill":"1",className:f,style:d,sizes:i,srcSet:r,src:n,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&h(e,p,v,w,j,y))},[n,p,v,w,j,O,y,t]),onLoad:e=>{h(e.currentTarget,p,v,w,j,y)},onError:e=>{_(!0),"empty"!==p&&j(!0),O&&O(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let n=(0,l.useContext)(c.RouterContext),r=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||r||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:u}=e,h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let[v,w]=(0,l.useState)(!1),[j,_]=(0,l.useState)(!1),{props:S,meta:O}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...S,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:_,ref:t}),O.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5827:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(6921)._(n(2265)).default.createContext({})},3044:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8630:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(6184);let r=n(7160),i=n(6906);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,u,s,{src:f,sizes:d,unoptimized:c=!1,priority:p=!1,loading:m,className:h,quality:g,width:y,height:b,fill:v=!1,style:w,onLoad:j,onLoadingComplete:_,placeholder:S="empty",blurDataURL:O,fetchPriority:C,layout:x,objectFit:E,objectPosition:P,lazyBoundary:k,lazyRoot:M,...I}=e,{imgConf:z,showAltText:A,blurComplete:N,defaultLoader:R}=t,D=z||i.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let T=I.loader||R;delete I.loader,delete I.srcSet;let F="__next_img_default"in T;if(F){if("custom"===a.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(x){"fill"===x&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!d&&(d=t)}let U="",L=l(y),$=l(b);if("object"==typeof(n=f)&&(o(n)||void 0!==n.src)){let e=o(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,O=O||e.blurDataURL,U=e.src,!v){if(L||$){if(L&&!$){let t=L/e.width;$=Math.round(e.height*t)}else if(!L&&$){let t=$/e.height;L=Math.round(e.width*t)}}else L=e.width,$=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(f="string"==typeof f?f:U)||f.startsWith("data:")||f.startsWith("blob:"))&&(c=!0,B=!1),a.unoptimized&&(c=!0),F&&f.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(c=!0),p&&(C="high");let G=l(g),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:P}:{},A?{}:{color:"transparent"},w),W=N||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:L,heightInt:$,blurWidth:u,blurHeight:s,blurDataURL:O||"",objectFit:H.objectFit})+'")':'url("'+S+'")',V=W?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Y=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),f=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:a({config:t,src:n,quality:o,width:u[f]})}}({config:a,src:f,unoptimized:c,width:L,quality:G,sizes:d,loader:T});return{props:{...I,loading:B?"lazy":m,fetchPriority:C,width:L,height:$,decoding:"async",className:h,style:{...H,...V},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:c,priority:p,placeholder:S,fill:v}}}},2251:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return h}});let r=n(6921),i=n(1884),o=n(7437),l=i._(n(2265)),a=r._(n(7392)),u=n(5827),s=n(7484),f=n(3044);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6184);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,l.useContext)(u.AmpStateContext),r=(0,l.useContext)(s.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,f.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r?40*r:t,u=i?40*i:n,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},337:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(6921)._(n(2265)),i=n(6906),o=r.default.createContext(i.imageConfigDefault)},6906:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},536:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7392:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,l=i?()=>{}:r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),a()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},641:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(2265),i=n(5235);let o=function(e){let t=(0,i.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},9790:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(2265),i=n(1879);let o=(e,t)=>{i.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},5235:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(2265),i=n(9790);function o(e){let t=(0,r.useRef)(e);return(0,i.e)(()=>{t.current=e},[e]),t}},3656:function(e,t,n){n.d(t,{B:function(){return o},G:function(){return l}});var r=n(2265);let i=(0,r.createContext)(void 0);function o(){return(0,r.useContext)(i)}function l({value:e,children:t}){return r.createElement(i.Provider,{value:e},t)}},2466:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},1879:function(e,t,n){n.d(t,{O:function(){return a}});var r=Object.defineProperty,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);class l{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let a=new l},2640:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}},8318:function(e,t,n){n.d(t,{VN:function(){return u},Y2:function(){return c},dG:function(){return h},l4:function(){return s},sY:function(){return f},yV:function(){return g}});var r,i,o=n(2265),l=n(2466),a=n(2640),u=((r=u||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((i=s||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function f({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:o=!0,name:l,mergeRefs:u}){u=null!=u?u:p;let s=m(t,e);if(o)return d(s,n,r,l,u);let f=null!=i?i:0;if(2&f){let{static:e=!1,...t}=s;if(e)return d(t,n,r,l,u)}if(1&f){let{unmount:e=!0,...t}=s;return(0,a.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,l,u)})}return d(s,n,r,l,u)}function d(e,t={},n,r,i){let{as:a=n,children:u,refName:s="ref",...f}=b(e,["unmount","static"]),d=void 0!==e.ref?{[s]:e.ref}:{},c="function"==typeof u?u(t):u;"className"in f&&f.className&&"function"==typeof f.className&&(f.className=f.className(t)),f["aria-labelledby"]&&f["aria-labelledby"]===f.id&&(f["aria-labelledby"]=void 0);let p={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`));if(e)for(let e of(p["data-headlessui-state"]=n.join(" "),n))p[`data-${e}`]=""}if(a===o.Fragment&&(Object.keys(y(f)).length>0||Object.keys(y(p)).length>0)){if(!(0,o.isValidElement)(c)||Array.isArray(c)&&c.length>1){if(Object.keys(y(f)).length>0)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(y(f)).concat(Object.keys(y(p))).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`))}else{let e=c.props,t=null==e?void 0:e.className,n="function"==typeof t?(...e)=>(0,l.A)(t(...e),f.className):(0,l.A)(t,f.className),r=m(c.props,y(b(f,["ref"])));for(let e in p)e in r&&delete p[e];return(0,o.cloneElement)(c,Object.assign({},r,p,d,{ref:i(c.ref,d.ref)},n?{className:n}:{}))}}return(0,o.createElement)(a,Object.assign({},b(f,["ref"]),a!==o.Fragment&&d,a!==o.Fragment&&p),c)}function c(){let e=(0,o.useRef)([]),t=(0,o.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]);return(...n)=>{if(!n.every(e=>null==e))return e.current=n,t}}function p(...e){return e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function m(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])for(let e in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(n[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in n)Object.assign(t,{[e](t,...r){for(let i of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...r)}}});return t}function h(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];for(let e in n)Object.assign(t,{[e](...t){for(let r of n[e])null==r||r(...t)}});return t}function g(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function y(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function b(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);