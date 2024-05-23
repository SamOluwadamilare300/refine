"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67945],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>m});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"command-palette",title:"Command Palette"},p=void 0,s={unversionedId:"packages/documentation/command-palette",id:"version-3.xx.xx/packages/documentation/command-palette",title:"Command Palette",description:"refine supports the command palette feature and use the",source:"@site/versioned_docs/version-3.xx.xx/packages/documentation/command-palette.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/command-palette",permalink:"/docs/3.xx.xx/packages/documentation/command-palette",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/packages/documentation/command-palette.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716447029,formattedLastUpdatedAt:"May 23, 2024",frontMatter:{id:"command-palette",title:"Command Palette"},sidebar:"someSidebar",previous:{title:"CLI",permalink:"/docs/3.xx.xx/packages/documentation/cli"},next:{title:"React Table",permalink:"/docs/3.xx.xx/packages/documentation/react-table"}},l={},m=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Access Control",id:"access-control",level:2},{value:"Actions",id:"actions",level:2},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},u=d("DocThumbsUpDownFeedbackWidget"),g=d("InstallPackagesCommand"),y=d("CodeSandboxExample"),f={toc:m},b="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," supports the command palette feature and use the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,a.yg)("strong",{parentName:"a"},"kbar")),". ",(0,a.yg)("strong",{parentName:"p"},"kbar")," is a fully extensible ",(0,a.yg)("inlineCode",{parentName:"p"},"cmd")," + ",(0,a.yg)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,a.yg)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,a.yg)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows) interface for your site."),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)(u,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Install the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/kbar"},"@pankod/refine-kbar")," library."),(0,a.yg)(g,{args:"@pankod/refine-kbar",mdxType:"InstallPackagesCommand"})),(0,a.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.yg)(u,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"First of all, you need to import the ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-kbar")," library and we will use ",(0,a.yg)("inlineCode",{parentName:"p"},"RefineKbarProvider")," to wrap the whole application."),(0,a.yg)("p",null,"After that, we should create the ",(0,a.yg)("inlineCode",{parentName:"p"},"<OffLayoutArea/>")," component for the Refine component and use the ",(0,a.yg)("inlineCode",{parentName:"p"},"refine-kbar")," command palette in ",(0,a.yg)("inlineCode",{parentName:"p"},"<OffLayoutArea>"),". We have the ",(0,a.yg)("inlineCode",{parentName:"p"},"<RefineKbar>")," component to provide the command palette to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'tile="src/App.tsx"',tile:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\n// highlight-next-line\nimport { RefineKbarProvider } from "@pankod/refine-kbar";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport {\n  CategoriesList,\n  CategoriesCreate,\n  CategoriesEdit,\n} from "pages/categories";\n\n// highlight-start\nexport const OffLayoutArea: React.FC = () => {\n  return <RefineKbar />;\n};\n// highlight-end\n\nconst App: React.FC = () => {\n  return (\n    <RefineKbarProvider>\n      <Refine\n        resources={[\n          {\n            name: "posts",\n            list: PostList,\n            create: PostCreate,\n            edit: PostEdit,\n            show: PostShow,\n            icon: <Icons.StarOutlined />,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: CategoriesList,\n            create: CategoriesCreate,\n            edit: CategoriesEdit,\n            canDelete: true,\n          },\n        ]}\n        //highlight-next-line\n        OffLayoutArea={OffLayoutArea}\n      />\n    </RefineKbarProvider>\n  );\n};\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/packages/command-palette/kbar/refine-kbar-example.gif",alt:"Refine Kbar Example"}),(0,a.yg)("br",null),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("em",{parentName:"p"},"Why do we need to add ",(0,a.yg)("inlineCode",{parentName:"em"},"<OffLayoutArea>")," to the ",(0,a.yg)("inlineCode",{parentName:"em"},"<Refine>")," component?"),(0,a.yg)("br",null),"\nBecause we need to reach the ",(0,a.yg)("inlineCode",{parentName:"p"},"resources")," property of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," component."))),(0,a.yg)("h2",{id:"access-control"},"Access Control"),(0,a.yg)(u,{id:"access-control",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"refine-kbar")," respects the access control settings of your App. To learn more about access control, please refer to the ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"Access Control Provider")," section of the documentation. Also, we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"canDelete")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"resources")," to check the delete accessibility of the command palette.",(0,a.yg)("br",null),"\nFor more information check out the source code of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/kbar"},(0,a.yg)("inlineCode",{parentName:"a"},"refine-kbar"))," package")),(0,a.yg)("h2",{id:"actions"},"Actions"),(0,a.yg)(u,{id:"actions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"refine-kbar")," uses your resources to create default actions. Which includes; ",(0,a.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"edit"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"delete"),". It will hide the current action of the page you are in.")),(0,a.yg)("h2",{id:"custom-actions"},"Custom Actions"),(0,a.yg)(u,{id:"custom-actions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If we want to add custom actions to the command palette, we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"createAction")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"useRegisterActions")," of the ",(0,a.yg)("inlineCode",{parentName:"p"},"refine-kbar"),".\ncheck the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/v3/examples/finefoods-material-ui/src/hooks/useOrderCustomKbarActions/index.tsx"},(0,a.yg)("inlineCode",{parentName:"a"},"refine-finefoods"))," example. Also you can find more information about actions in the ",(0,a.yg)("a",{parentName:"p",href:"https://kbar.vercel.app/docs/concepts/actions"},(0,a.yg)("inlineCode",{parentName:"a"},"kbar"))," package."),(0,a.yg)("p",null,"You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"createAction")," to create a new action and use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRegisterActions")," to register the action to the command palette."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Custom action example"',title:'"Custom',action:!0,'example"':!0},'import { createAction, useRegisterActions } from "@pankod/refine-kbar";\n\nconst customAction = createAction({\n  name: "my custom action",\n  section: "custom-actions",\n  perform: () => {\n    console.log("onSelect my custom action");\n  },\n  priority: Priority.HIGH,\n});\n\nuseRegisterActions(customAction);\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"refine-kbar")," exports the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,a.yg)("inlineCode",{parentName:"a"},"kbar")),". You can use all ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,a.yg)("inlineCode",{parentName:"a"},"kbar"))," features."))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(u,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(y,{path:"command-palette-kbar",mdxType:"CodeSandboxExample"})))}h.isMDXComponent=!0}}]);