"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10198],{58860:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>h});var t=n(37953);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return n?t.createElement(h,i(i({ref:r},c),{},{components:n})):t.createElement(h,i({ref:r},c))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91936:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>d});n(37953);var t=n(58860);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project",next:"3.xx.xx/tutorial/getting-started/store-your-repository"}},s=void 0,l={unversionedId:"tutorial/getting-started/chakra-ui/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/chakra-ui/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/chakra-ui",slug:"/tutorial/getting-started/chakra-ui/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718377768,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project",next:"3.xx.xx/tutorial/getting-started/store-your-repository"}}},c={},d=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],g=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",r)},u=g("DocThumbsUpDownFeedbackWidget"),h=g("Checklist"),f=g("ChecklistItem"),y={toc:d},m="wrapper";function v(e){var{components:r}=e,n=i(e,["components"]);return(0,t.yg)(m,o(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},y,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"inferencer"},"Inferencer"),(0,t.yg)(u,{id:"inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Inferencer is a powerful tool in the ",(0,t.yg)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations.")),(0,t.yg)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,t.yg)(u,{id:"why-use-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"There are several benefits:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,t.yg)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks.")),(0,t.yg)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,t.yg)(u,{id:"learn-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn about ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,t.yg)("li",{parentName:"ul"},"Learn about ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/inferencer/"},"how to use Inferencer with Chakra UI"),"."))),(0,t.yg)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,t.yg)(u,{id:"how-to-use-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,t.yg)("inlineCode",{parentName:"p"},"<ChakraUIInferencer/>")," component, which can be imported from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui"),". It used to generate CRUD pages based on your API response with Chakra UI components."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"<ChakraUIInferencer/>")," component is used by passing to appropriate values in the ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,t.yg)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"In ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        //highlight-start\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n        //highlight-end\n      />\n    </ChakraProvider>\n  );\n};\n\nexport default App;\n')),(0,t.yg)("p",null,"At this point, ",(0,t.yg)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response.")),(0,t.yg)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,t.yg)(u,{id:"preview-the-auto-generated-pages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,t.yg)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,t.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,t.yg)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"In ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,t.yg)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,t.yg)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.')),(0,t.yg)("h3",{id:"list-page"},"List Page"),(0,t.yg)(u,{id:"list-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the list page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,t.yg)("p",null,"You should see the list page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"When you navigate to the ",(0,t.yg)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,t.yg)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,t.yg)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"create-page"},"Create Page"),(0,t.yg)(u,{id:"create-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the create page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,t.yg)("p",null,"You should see the create page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"edit-page"},"Edit Page"),(0,t.yg)(u,{id:"edit-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the edit page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,t.yg)("p",null,"You should see the edit page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,t.yg)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"show-page"},"Show Page"),(0,t.yg)(u,{id:"show-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the show page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,t.yg)("p",null,"You should see the show page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,t.yg)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n')),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"In ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/adding-crud-pages/chakra-ui/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,t.yg)(h,{mdxType:"Checklist"},(0,t.yg)(f,{id:"generated-chakra-crud-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,t.yg)(f,{id:"generated-chakra-crud-pages-2",mdxType:"ChecklistItem"},(0,t.yg)("p",null,"I inspected the auto-generated ",(0,t.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"edit"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"show")," pages.")))))}v.isMDXComponent=!0}}]);