(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9248)}])},9248:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(5893),a=t(9008),l=t(7294),i=t(9583),o=t(6807),c={type:"spring",stiffness:200,damping:10};function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}var g=Object.assign((function(e){return(0,n.jsx)(o.E.div,{whileHover:{scale:1.15},whileTap:{scale:1.5},animate:{scale:1,opacity:1,transition:c},initial:{scale:0},children:(0,n.jsx)("button",d({},e,{className:"dark:bg-gray-700 dark:text-white p-2 border dark:border-none bg-gray-200 shadow-md dark:hover:bg-gray-600 hover:bg-gray-400 hover:text-green-400 dark:hover:text-green-600 "+e.className,children:e.children}))})}),{ToggleTheme:function(e){var r=e.dark,t=e.setDark;return(0,n.jsx)(g.Round,{onClick:function(){return t(!r)},children:r?(0,n.jsx)(i.Mei,{size:"28"}):(0,n.jsx)(i.TLr,{size:"24"})})},Round:function(e){return(0,n.jsx)(o.E.div,{whileTap:{rotate:60,transition:c},children:(0,n.jsx)(g,u({},e,{className:" rounded-full "+e.className,children:e.children}))})}}),h=function(e){var r=e.children;return(0,n.jsx)("div",{className:"absolute z-30 w-screen h-full overflow-y-scroll",children:(0,n.jsx)("div",{className:"flex flex-col lg:flex-row gap-6 p-6 justify-center items-center lg:h-screen",children:r})})};function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var m=function(e){return(0,n.jsx)("textarea",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){b(e,r,t[r])}))}return e}({},e,{className:"bg-transparent h-full w-full p-3 dark:text-gray-400 resize-none "+e.className}))},x=t(7441);t(6982);var y=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var r="\n   # Your markdown here!\n   * Full formatting!\n   * Syntax highlighting!\n   * More!   \n   ",a=(0,l.useState)(""),c=a[0],s=a[1];return x.TU.setOptions({renderer:new x.TU.Renderer,highlight:function(e){return t(8128).highlightAuto(e).value},langPrefix:"hljs language-"}),(0,l.useEffect)((function(){s(localStorage.getItem("text")?localStorage.getItem("text"):r)}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.E.div,{initial:{x:-500},animate:{x:0},className:"h-full w-full lg:w-2/4",children:(0,n.jsx)("div",{className:"h-[360px] lg:h-full break-words dark:bg-gray-800 shadow-lg bg-gray-200 mt-2",children:(0,n.jsx)(m,{onChange:function(e){return s(e.target.value)},placeholder:"Enter your markdown code here...",value:c===r?"":c})})}),(0,n.jsx)(o.E.h1,{initial:{y:-500},animate:{y:0},className:"border-none my-0 py-0 dark:text-gray-400 lg:hidden",children:"Output"}),(0,n.jsx)(o.E.div,{initial:{x:500},animate:{x:0},className:"h-full w-full lg:w-2/4",children:(0,n.jsx)("div",{className:"lg:overflow-y-scroll overflow-x-auto lg:overflow-x-auto h-full break-words mt-2 dark:bg-gray-800 shadow-lg bg-gray-200 p-6 dark:text-gray-400",dangerouslySetInnerHTML:{__html:x.TU.parse(c)}})}),(0,n.jsx)("div",{className:"fixed m-2 top-0 left-0 z-50",children:(0,n.jsx)(g.Round,{onClick:function(){return localStorage.setItem("text",c)},children:(0,n.jsx)(i.TvB,{size:"24"})})})]})},j=function(){var e=(0,l.useState)(!0),r=e[0],t=e[1],i=function(e){t(e),localStorage.setItem("dark",JSON.stringify(e))};return(0,l.useEffect)((function(){i(!localStorage.getItem("dark")||JSON.parse(localStorage.getItem("dark")))})),(0,n.jsxs)("div",{className:r?"dark":"",children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:"absolute m-4 right-1 z-50",children:(0,n.jsx)(g.ToggleTheme,{dark:r,setDark:i})}),(0,n.jsx)(h,{children:(0,n.jsx)(y,{})}),(0,n.jsx)(o.E.div,{animate:r?{opacity:1}:{opacity:0},children:(0,n.jsx)("div",{className:"absolute w-screen h-full bg-gray-900 z-0"})})]})}}},function(e){e.O(0,[445,465,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);