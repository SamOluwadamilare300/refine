"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66199],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"save-button",title:"Save",swizzle:!0},p=void 0,l={unversionedId:"api-reference/mantine/components/buttons/save-button",id:"version-3.xx.xx/api-reference/mantine/components/buttons/save-button",title:"Save",description:"` uses Mantine ` component. It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/buttons/save.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/save-button",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/save-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/buttons/save.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715170076,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"save-button",title:"Save",swizzle:!0},sidebar:"someSidebar",previous:{title:"Refresh",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/refresh-button"},next:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/show-button"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=d("DocThumbsUpDownFeedbackWidget"),f=d("PropsTable"),y={toc:u},g="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(g,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  routerProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  notificationProvider: RefineMantine.useNotificationProvider,\n  Layout: RefineMantine.Layout,\n  Sider: () => null,\n  catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineMantine.MantineProvider\n      theme={RefineMantine.LightTheme}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <RefineMantine.Global\n        styles={{ body: { WebkitFontSmoothing: "auto" } }}\n      />\n      <RefineMantine.NotificationsProvider position="top-right">\n        {children}\n      </RefineMantine.NotificationsProvider>\n    </RefineMantine.MantineProvider>\n  );\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Mantine ",(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/core/button"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that ",(0,r.yg)("strong",{parentName:"p"},"refine")," has adds features to this button."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"For example, let's add logic to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,r.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,r.yg)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/edit/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/edit/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/edit/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { EditButton } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport {\n  Edit,\n  Select,\n  TextInput,\n  useForm,\n  useSelect,\n} from "@pankod/refine-mantine";\n\nconst PostEdit: React.FC = () => {\n  const {\n    // highlight-next-line\n    saveButtonProps,\n    getInputProps,\n    refineCore: { queryResult },\n  } = useForm<IPost>({\n    initialValues: {\n      title: "",\n      status: "",\n      category: {\n        id: "",\n      },\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n      status: (value) => (value.length <= 0 ? "Status is required" : null),\n      category: {\n        id: (value) => (value.length <= 0 ? "Category is required" : null),\n      },\n    },\n    refineCoreProps: {\n      warnWhenUnsavedChanges: true,\n    },\n  });\n\n  const postData = queryResult?.data?.data;\n  const { selectProps } = useSelect<ICategory>({\n    resource: "categories",\n    defaultValue: postData?.category.id,\n  });\n\n  return (\n    // highlight-next-line\n    <Edit saveButtonProps={saveButtonProps}>\n      <form>\n        <TextInput\n          mt={8}\n          label="Title"\n          placeholder="Title"\n          {...getInputProps("title")}\n        />\n        <Select\n          mt={8}\n          label="Status"\n          placeholder="Pick one"\n          {...getInputProps("status")}\n          data={[\n            { label: "Published", value: "published" },\n            { label: "Draft", value: "draft" },\n            { label: "Rejected", value: "rejected" },\n          ]}\n        />\n        <Select\n          mt={8}\n          label="Category"\n          placeholder="Pick one"\n          {...getInputProps("category.id")}\n          {...selectProps}\n        />\n      </form>\n    </Edit>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          edit: PostEdit,\n          list: () => (\n            <div>\n              <p>This page is empty.</p>\n              <EditButton recordItemId="123">Edit Item 123</EditButton>\n            </div>\n          ),\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"hidetext"},(0,r.yg)("inlineCode",{parentName:"h3"},"hideText")),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\n\n// visible-block-start\nimport { SaveButton } from "@pankod/refine-mantine";\n\nconst MySaveComponent = () => {\n  return <SaveButton hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MySaveComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@pankod/refine-mantine/SaveButton",mdxType:"PropsTable"})))}b.isMDXComponent=!0}}]);