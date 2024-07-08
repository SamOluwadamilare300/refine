"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26606],{58860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={},s=void 0,l={unversionedId:"api-reference/core/hooks/translate/useSetLocale",id:"version-3.xx.xx/api-reference/core/hooks/translate/useSetLocale",title:"useSetLocale",description:"If you need to change the locale at runtime, refine provides the useSetLocale hook, It returns the changeLocale method from i18nProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useSetLocale.md",sourceDirName:"api-reference/core/hooks/translate",slug:"/api-reference/core/hooks/translate/useSetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useSetLocale",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useSetLocale.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720428941,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{},sidebar:"someSidebar",previous:{title:"useGetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useGetLocale"},next:{title:"useTranslate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useTranslate"}},u={},p=[{value:"Usage",id:"usage",level:2}],f=(d="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var d;const y={toc:p},g="wrapper";function m(e){var{components:t}=e,r=c(e,["components"]);return(0,n.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"If you need to change the locale at runtime, refine provides the ",(0,n.yg)("inlineCode",{parentName:"p"},"useSetLocale")," hook, It returns the changeLocale method from ",(0,n.yg)("inlineCode",{parentName:"p"},"i18nProvider")," under the hood."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can use the features of your own i18n library to change the locale in your own components."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSetLocale } from "@pankod/refine-core";\n\nexport const LanguageSwicher = () => {\n    const changeLanguage = useSetLocale();\n\n    return (\n        <div>\n            <span>Languages</span>\n            <button onClick={() => changeLanguage("en")}>English</button>\n            <button onClick={() => changeLanguage("es")}>Spanish</button>\n        </div>\n    );\n};\n')),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.yg)("inlineCode",{parentName:"p"},"i18nProvider")," is provided."))))}m.isMDXComponent=!0}}]);