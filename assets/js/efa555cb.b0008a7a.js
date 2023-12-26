"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"useSelect",title:"useSelect","example-title":"Ant Design's useSelect hook","example-tags":["antd"]},l=void 0,s={unversionedId:"examples/field/useSelect",id:"examples/field/useSelect",title:"useSelect",description:"When records in a resource need to be used as select options, the Refine useSelect hook allows you to handle an Ant Design Select component. Also this hook includes out-of-the-box features such as fetchSize, sorting, and filtering. You may examine the code below to learn how to create and manage Select component with useSelect.",source:"@site/docs/examples/field/useSelect.md",sourceDirName:"examples/field",slug:"/examples/field/useSelect",permalink:"/docs/examples/field/useSelect",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/field/useSelect.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1703596417,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{id:"useSelect",title:"useSelect","example-title":"Ant Design's useSelect hook","example-tags":["antd"]},sidebar:"mainSidebar",previous:{title:"useRadioGroup",permalink:"/docs/examples/field/useRadioGroup"},next:{title:"useSelect with infinite list",permalink:"/docs/examples/field/useSelect-with-infinite-list"}},u={},p=[],f=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:p};function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When records in a resource need to be used as select options, the Refine ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook allows you to handle an Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/select/"},"Select")," component. Also this hook includes out-of-the-box features such as fetchSize, sorting, and filtering. You may examine the code below to learn how to create and manage Select component with ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-select"},"Refer to the Refine useSelect hook documentation for more information. \u2192")),(0,r.kt)(f,{path:"field-antd-use-select-basic",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);