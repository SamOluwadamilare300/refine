"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23945],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},69801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"useDeleteMany",title:"useDeleteMany","example-title":"Ant Design useDeleteMany Hook","example-tags":["table","antd","refine-hooks","react-router"]},s=void 0,c={unversionedId:"examples/table/antd/useDeleteMany",id:"version-3.xx.xx/examples/table/antd/useDeleteMany",title:"useDeleteMany",description:"The useDeleteMany is one of refine's data hooks. It removes more than one data from the database. We used the useDeleteMany hook to remove more than one record from our table in this scenario. On your table, you may remove multiple records by selecting them and pressing delete. You can get more information by examining the example.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/antd/useDeleteMany.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useDeleteMany",permalink:"/docs/3.xx.xx/examples/table/antd/useDeleteMany",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/antd/useDeleteMany.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716897385,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"useDeleteMany",title:"useDeleteMany","example-title":"Ant Design useDeleteMany Hook","example-tags":["table","antd","refine-hooks","react-router"]},sidebar:"someSidebar",previous:{title:"Table Filter",permalink:"/docs/3.xx.xx/examples/table/antd/tableFilter"},next:{title:"useEditableTable",permalink:"/docs/3.xx.xx/examples/table/antd/useEditableTable"}},p={},u=[],m=(y="CodeSandboxExample",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var y;const d={toc:u},f="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," is one of ",(0,n.yg)("strong",{parentName:"p"},"refine"),"'s data hooks. It removes more than one data from the database. We used the ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," hook to remove more than one record from our table in this scenario. On your table, you may remove multiple records by selecting them and pressing delete. You can get more information by examining the example."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDeleteMany/"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"refine")," useDeleteMany data hook documentation for more information. \u2192")),(0,n.yg)(m,{path:"table-antd-use-delete-many",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);