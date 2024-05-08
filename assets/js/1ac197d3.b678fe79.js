"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80474],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"multi-level-menu",title:"Multi Level Menu",sidebar_label:"Multi Level Menu"},s=void 0,u={unversionedId:"advanced-tutorials/multi-level-menu/multi-level-menu",id:"version-3.xx.xx/advanced-tutorials/multi-level-menu/multi-level-menu",title:"Multi Level Menu",description:"This document is related to how to create a multi-level menu for refine applications.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/multi-level-menu/multi-level-menu.md",sourceDirName:"advanced-tutorials/multi-level-menu",slug:"/advanced-tutorials/multi-level-menu/",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-level-menu/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/multi-level-menu/multi-level-menu.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715170076,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"multi-level-menu",title:"Multi Level Menu",sidebar_label:"Multi Level Menu"},sidebar:"someSidebar",previous:{title:"Live / Realtime",permalink:"/docs/3.xx.xx/advanced-tutorials/real-time"},next:{title:"Appwrite",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/appwrite"}},c={},p=[{value:"What is Multi-level Menu?",id:"what-is-multi-level-menu",level:3},{value:"Usage",id:"usage",level:2},{value:"Headless",id:"headless",level:3},{value:"Ant Design",id:"ant-design",level:3},{value:"Example",id:"example",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=m("DocThumbsUpDownFeedbackWidget"),g=m("CodeSandboxExample"),y={toc:p},h="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(h,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document is related to how to create a multi-level menu for ",(0,r.yg)("strong",{parentName:"p"},"refine")," applications."),(0,r.yg)("h3",{id:"what-is-multi-level-menu"},"What is Multi-level Menu?"),(0,r.yg)(d,{id:"what-is-multi-level-menu",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The multi-level menu is a great way to organize your sider menu items. You can create groups and sub menus to keep your menu items organized. This makes it easy to find the menu items you are looking for.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To do this, it is necessary to create an object array with the following ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"resources properties"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'        <Refine\n           ...\n            resources={[\n                {\n                    // highlight-start\n                    name: "CMS",\n                    // highlight-end\n                },\n                {\n                    // highlight-start\n                    name: "posts",\n                    parentName: "CMS",\n                    // highlight-end\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n                {\n                    // highlight-start\n                    name: "category",\n                    parentName: "CMS",\n                    // highlight-end\n                    list: CategoryList,\n                    create: CategoryCreate,\n                    edit: CategoryEdit,\n                    canDelete: true,\n                },\n            ]}\n        />\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"parentName")," you give in the resource objects must be strictly equal to the resource name you want to group under.",(0,r.yg)("br",null),"\nA resource given as a group can only have a ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," and a ",(0,r.yg)("inlineCode",{parentName:"p"},"parentName"),". They should not have other props such as list, edit, create, etc.")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Since your Next.js applications are routing file-based, you need to manage the nested routes yourself. If you use Nested resources only for grouping Menu items in ",(0,r.yg)("inlineCode",{parentName:"p"},"Sider")," and you don't need nested routes, you can give ",(0,r.yg)("inlineCode",{parentName:"p"},"route")," option as a single level routing when defining your ",(0,r.yg)("inlineCode",{parentName:"p"},"resource"),"."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},'        <Refine\n           ...\n            resources={[\n                {\n                    name: "CMS",\n                },\n                {\n                    name: "posts",\n                    parentName: "CMS",\n                    // highlight-next-line\n                    options: { route: "posts" },\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n                {\n                    name: "category",\n                    parentName: "CMS",\n                    // highlight-next-line\n                    options: { route: "category" },\n                    list: CategoryList,\n                    create: CategoryCreate,\n                    edit: CategoryEdit,\n                    canDelete: true,\n                },\n            ]}\n        />\n')))),(0,r.yg)("h3",{id:"headless"},"Headless"),(0,r.yg)(d,{id:"headless",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to create your multi-level menu without any UI framework integration, ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"},(0,r.yg)("inlineCode",{parentName:"a"},"useMenu"))," hook gives your resources. The ",(0,r.yg)("inlineCode",{parentName:"p"},"createTreeView")," helper from refine core allows you to create a tree for your headless sider."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout/sider/index.tsx"',title:'"src/components/layout/sider/index.tsx"'},'//highlight-next-line\nimport { useMenu } from "@pankod/refine-core";\n\nexport const Sider: React.FC = () => {\n    //highlight-next-line\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n\n    // Here create your Sider to your UI choice\n};\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example output"',title:'"example','output"':!0},'\n// console.log(menuItems);\n[\n    {\n        name: "CMS",\n        route: "CMS",\n        ...\n        children: [\n            {\n                name: "posts",\n                route: "CMS/posts",\n                ...\n                children: [],\n            },\n            {\n                name: "category",\n                route: "CMS/category",\n                ...\n                children: [],\n            },\n        ],\n    },\n];\n')),(0,r.yg)("br",null)),(0,r.yg)("h3",{id:"ant-design"},"Ant Design"),(0,r.yg)(d,{id:"ant-design",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The Sider component allows you to create the groups you want in the sider menu. By default, the sider will group menu items by their top-level heading. However, you can also add sub menu items to each group via ",(0,r.yg)("inlineCode",{parentName:"p"},"parentName"),"."),(0,r.yg)("p",null,"This gives you more control over the side menu and allows you to customize it to better suit your needs."),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-level-menu/multi-level-menu.png",alt:"multiLevelMenu"}),(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(d,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can review the example to examine the multi-level menu concept in more detail."),(0,r.yg)(g,{path:"multi-level-menu",mdxType:"CodeSandboxExample"})))}f.isMDXComponent=!0}}]);