"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13394],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(n),y=r,u=s["".concat(d,".").concat(y)]||s[y]||m[y]||i;return n?a.createElement(u,l(l({ref:t},g),{},{components:n})):a.createElement(u,l({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},49605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Simple REST",source:"https://github.com/refinedev/refine/tree/master/packages/simple-rest",swizzle:!0},d=void 0,p={unversionedId:"data/packages/simple-rest/index",id:"data/packages/simple-rest/index",title:"Simple REST",description:"The Simple REST data provider is a package that provides an implementation for working with REST APIs that conform to a standard API design. It is built on the foundation of the json-server package.",source:"@site/docs/data/packages/simple-rest/index.md",sourceDirName:"data/packages/simple-rest",slug:"/data/packages/simple-rest/",permalink:"/docs/data/packages/simple-rest/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/simple-rest/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716447029,formattedLastUpdatedAt:"May 23, 2024",frontMatter:{title:"Simple REST",source:"https://github.com/refinedev/refine/tree/master/packages/simple-rest",swizzle:!0},sidebar:"mainSidebar",previous:{title:"GraphQL",permalink:"/docs/data/packages/graphql/"},next:{title:"Strapi v4",permalink:"/docs/data/packages/strapi-v4/"}},g={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"URL design",id:"url-design",level:2},{value:"Default HTTP methods and customizing them",id:"default-http-methods-and-customizing-them",level:2},{value:"Passing custom headers",id:"passing-custom-headers",level:2},{value:'Customizing the data provider <GuideBadge id="packages/cli/#swizzle" />',id:"customizing-the-data-provider-",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},y=m("DocThumbsUpDownFeedbackWidget"),u=m("InstallPackagesCommand"),c=m("GuideBadge"),h={toc:s},N="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.yg)(N,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Simple REST data provider is a package that provides an implementation for working with REST APIs that conform to a standard API design. It is built on the foundation of the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/typicode/json-server"},"json-server")," package."),(0,a.yg)("p",null,"You can use this data provider to quickly get started with Refine and then customize it to fit your specific needs."),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)(y,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(u,{args:"@refinedev/simple-rest",mdxType:"InstallPackagesCommand"})),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Simple REST package exports a function that accepts ",(0,a.yg)("inlineCode",{parentName:"p"},"apiUrl")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"httpClient")," parameters. While ",(0,a.yg)("inlineCode",{parentName:"p"},"apiUrl")," is required to set the base URL for your API endpoints, ",(0,a.yg)("inlineCode",{parentName:"p"},"httpClient")," is optional and can be used to provide a custom axios instance to handle logics like authentication, error handling, etc."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import { Refine } from "@refinedev/core";\n// highlight-next-line\nimport dataProvider from "@refinedev/simple-rest";\n\nconst App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      dataProvider={dataProvider("<API_URL>")}\n      /* ... */\n    />\n  );\n};\n'))),(0,a.yg)("h2",{id:"url-design"},"URL design"),(0,a.yg)(y,{id:"url-design",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The data provider methods are designed to work with REST APIs that follow the standard design. The following table shows the expected URL for each method:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Method"),(0,a.yg)("th",{parentName:"tr",align:null},"URL"),(0,a.yg)("th",{parentName:"tr",align:null},"Query Parameters"),(0,a.yg)("th",{parentName:"tr",align:null},"Body"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"getList")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"resource")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"pagination"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"sorters"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"filters")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"getOne")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"resource")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"getMany")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"resource")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"create")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"resource")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"variables"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"update")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"resource")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"variables"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"deleteOne")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apiUrl")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"resource")," / ",(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"data: variables")))))),(0,a.yg)("h2",{id:"default-http-methods-and-customizing-them"},"Default HTTP methods and customizing them"),(0,a.yg)(y,{id:"default-http-methods-and-customizing-them",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The following table shows the HTTP method used for each data provider method:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Method"),(0,a.yg)("th",{parentName:"tr",align:null},"HTTP Method"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"getList")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"GET"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"getOne")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"GET"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"getMany")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"GET"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"create")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"POST"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"update")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"PATCH"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"deleteOne")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"DELETE"))))),(0,a.yg)("p",null,"You can customize the HTTP method used for each data provider method by passing a ",(0,a.yg)("inlineCode",{parentName:"p"},"method")," property in the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," parameter when calling a hook."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n  resource: "posts",\n  id: 1,\n  values: {\n    title: "New title",\n  },\n  //highlight-start\n  meta: {\n    method: "put",\n  },\n  //highlight-end\n});\n'))),(0,a.yg)("h2",{id:"passing-custom-headers"},"Passing custom headers"),(0,a.yg)(y,{id:"passing-custom-headers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"You can pass custom headers to the data provider by passing a ",(0,a.yg)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," parameter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@refinedev/core";\n\nuseOne({\n  resource: "posts",\n  id: 1,\n  //highlight-start\n  meta: {\n    headers: {\n      "X-Custom-Header": "Custom header value",\n    },\n  },\n  //highlight-end\n});\n'))),(0,a.yg)("h2",{id:"customizing-the-data-provider-"},"Customizing the data provider ",(0,a.yg)(c,{id:"packages/cli/#swizzle",mdxType:"GuideBadge"})),(0,a.yg)(y,{id:"customizing-the-data-provider-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"In some cases, you may need to customize the data provider to work with a REST API that doesn't follow the simple-rest design. In this case, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"swizzle")," command to customize the data provider."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the ",(0,a.yg)("inlineCode",{parentName:"p"},"swizzle")," command in the project directory:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run refine swizzle\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/simple-rest")," from the list of available data providers.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Edit the ",(0,a.yg)("inlineCode",{parentName:"p"},"/rest-data-provider/index.ts")," file to customize the data provider.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Pass the customized data provider to the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," prop of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Refine")," component."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\nimport { dataProvider } from "./rest-data-provider";\n\nconst App = () => {\n  return (\n    <Refine\n      dataProvider={dataProvider}\n      /* ... */\n    />\n  );\n};\n'))))))}f.isMDXComponent=!0}}]);