"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"useEditableTable",title:"useEditableTable","example-title":"Ant Design useEditableTable Hook","example-tags":["table","antd","refine-hooks","react-router"]},s=void 0,p={unversionedId:"examples/table/antd/useEditableTable",id:"version-3.xx.xx/examples/table/antd/useEditableTable",title:"useEditableTable",description:"useEditableTable, includes all of the capabilities of useTable. It also enables you to edit your Table in addition to these advantages. It returns Ant Design Table and Form components props.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/antd/useEditableTable.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useEditableTable",permalink:"/docs/3.xx.xx/examples/table/antd/useEditableTable",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/antd/useEditableTable.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1701679851,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{id:"useEditableTable",title:"useEditableTable","example-title":"Ant Design useEditableTable Hook","example-tags":["table","antd","refine-hooks","react-router"]},sidebar:"someSidebar",previous:{title:"useDeleteMany",permalink:"/docs/3.xx.xx/examples/table/antd/useDeleteMany"},next:{title:"useTable",permalink:"/docs/3.xx.xx/examples/table/antd/useTable"}},c={},u=[],b=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const f={toc:u};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEditableTable"),", includes all of the capabilities of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable/"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")),". It also enables you to edit your Table in addition to these advantages. It returns Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#API"},"Table")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#API"},"Form")," components props."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useEditableTable/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useEditableTable hook documentation for more information. \u2192")),(0,r.kt)(b,{path:"table-antd-use-editable-table",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);