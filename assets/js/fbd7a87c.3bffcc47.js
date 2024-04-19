"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91361],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},54145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>O,frontMatter:()=>u,metadata:()=>g,toc:()=>m});var n=r(96540),a=r(15680),o=r(20053),i=r(33257);const s=()=>{const e=n.useRef(null),{colorMode:t}=(0,i.G)(),r=n.useCallback((()=>{var r;e.current&&(null===(r=e.current.contentWindow)||void 0===r||r.postMessage({type:"colorMode",colorMode:t},"*"))}),[t]);return n.useEffect((()=>{r()}),[r]),n.createElement("div",{className:(0,o.A)("pb-6","widening-start:-mx-4","content-4xl:ml-0 content-4xl:mr-0")},n.createElement("iframe",{ref:e,onLoad:()=>{setTimeout(r,300)},title:"React Scaffolder",src:"https://refine.new/doc-form",className:(0,o.A)("w-full","h-auto","border-none","rounded-lg","min-h-[870px] max-h-[870px]","content-xm:min-h-[532px] content-xm:max-h-[532px]","content-xl-safe:min-h-[572px] content-xl-safe:max-h-[572px]","max-w-screen-doc-form-lg","mx-auto")}))};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={title:"Quick Start Guide",displayed_sidebar:"mainSidebar"},d=void 0,g={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"Refine works on any environment that can run React (incl. Vite, Next.js, Remix, and CRA(Legacy) etc.)",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1713525698,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{title:"Quick Start Guide",displayed_sidebar:"mainSidebar"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"General Concepts",permalink:"/docs/guides-concepts/general-concepts/"}},f={},m=[{value:"Using CLI",id:"using-cli",level:2},{value:"Using Browser",id:"using-browser",level:2},{value:"Next Steps",id:"next-steps",level:2}],y=(b="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var b;const h={toc:m},w="wrapper";function O(e){var{components:t}=e,r=p(e,["components"]);return(0,a.yg)(w,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Refine")," works on any environment that can run ",(0,a.yg)("strong",{parentName:"p"},"React")," (incl. ",(0,a.yg)("em",{parentName:"p"},"Vite, Next.js, Remix, and CRA(Legacy)")," etc.)"),(0,a.yg)("p",null,"Although you could take the time to manually set up your environment and install the ",(0,a.yg)("strong",{parentName:"p"},"Refine")," packages afterwards, the optimal way to get started with ",(0,a.yg)("strong",{parentName:"p"},"Refine")," is using the ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/?playground=true"},"Browser-based Scaffolder")," and ",(0,a.yg)("strong",{parentName:"p"},"CLI-based Scaffolder"),"."),(0,a.yg)("h2",{id:"using-cli"},"Using CLI"),(0,a.yg)(y,{id:"using-cli",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app")," to quickly bootstrap a new ",(0,a.yg)("strong",{parentName:"p"},"Refine")," project with lots of options to fit your needs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm create refine-app@latest\n")),(0,a.yg)("figure",null,(0,a.yg)("img",{className:"w-full rounded-lg border border-solid border-gray-200 dark:border-gray-700",src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/refine-vite-mui-rest-auth-screenshot.webp",alt:"Example result"}),(0,a.yg)("figcaption",{className:"text-center"},"A Refine app created with CLI using Vite + Material UI + REST API + Custom Auth Provider"))),(0,a.yg)("h2",{id:"using-browser"},"Using Browser"),(0,a.yg)(y,{id:"using-browser",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Refine's browser-based scaffolder has the same set of options as the CLI-based scaffolder. It is a great way to set up a new project and have a preview of how it looks before you download it."),(0,a.yg)(s,{mdxType:"Playground"})),(0,a.yg)("h2",{id:"next-steps"},"Next Steps"),(0,a.yg)(y,{id:"next-steps",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"\ud83d\udc49 Jump to ",(0,a.yg)("a",{parentName:"p",href:"/tutorial"},"Tutorials")," and continue your work to turn your example project into a full-blown CRUD application! \ud83d\ude80"),(0,a.yg)("p",null,"\ud83d\udc49 See ",(0,a.yg)("a",{parentName:"p",href:"/templates"},"real-life examples")," built using ",(0,a.yg)("strong",{parentName:"p"},"Refine")),(0,a.yg)("p",null,"\ud83d\udc49 Check out the ",(0,a.yg)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts"},"General Concepts")," and ",(0,a.yg)("a",{parentName:"p",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guides to start learning Refine.")))}O.isMDXComponent=!0}}]);