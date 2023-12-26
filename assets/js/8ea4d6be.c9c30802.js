"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={},c=void 0,s={unversionedId:"data/hooks/use-infinite-list/filtering-live-preview",id:"data/hooks/use-infinite-list/filtering-live-preview",title:"filtering-live-preview",description:"",source:"@site/docs/data/hooks/use-infinite-list/filtering-live-preview.md",sourceDirName:"data/hooks/use-infinite-list",slug:"/data/hooks/use-infinite-list/filtering-live-preview",permalink:"/docs/data/hooks/use-infinite-list/filtering-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-infinite-list/filtering-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1703596417,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{}},u={},p=[],d={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useInfiniteList, HttpError } from "@refinedev/core";\n\ninterface IProduct {\n  id: number;\n  name: string;\n  material: string;\n}\n\nconst ProductList: React.FC = () => {\n  //highlight-next-line\n  const [value, setValue] = useState("Cotton");\n\n  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteList<\n    IProduct,\n    HttpError\n  >({\n    resource: "products",\n    //highlight-start\n    filters: [\n      {\n        field: "material",\n        operator: "eq",\n        value,\n      },\n    ],\n    //highlight-end\n  });\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError) {\n    return <div>Something went wrong!</div>;\n  }\n\n  const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data));\n\n  return (\n    <div>\n      {/* highlight-start */}\n      <span> material: </span>\n      <select value={value} onChange={(e) => setValue(e.target.value)}>\n        {["Cotton", "Bronze", "Plastic"].map((material) => (\n          <option key={material} value={material}>\n            {material}\n          </option>\n        ))}\n      </select>\n      {/* highlight-end */}\n\n      <ul>\n        {allPages.map((product) => (\n          <li key={product.id}>\n            {product.name} - ({product.material})\n          </li>\n        ))}\n      </ul>\n\n      {hasNextPage && (\n        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>\n          {isFetchingNextPage ? "Loading more..." : "Load More"}\n        </button>\n      )}\n    </div>\n  );\n};\n\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "products",\n      list: ProductList,\n    },\n  ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}f.isMDXComponent=!0}}]);