"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19388],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Edit",swizzle:!0},d=void 0,p={unversionedId:"ui-integrations/material-ui/components/buttons/edit-button/index",id:"ui-integrations/material-ui/components/buttons/edit-button/index",title:"Edit",description:"` uses Material UI's  component. It uses the edit method from useNavigation` under the hood. It can be useful to redirect the app to the edit page route of resource.",source:"@site/docs/ui-integrations/material-ui/components/buttons/edit-button/index.md",sourceDirName:"ui-integrations/material-ui/components/buttons/edit-button",slug:"/ui-integrations/material-ui/components/buttons/edit-button/",permalink:"/docs/ui-integrations/material-ui/components/buttons/edit-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/components/buttons/edit-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716897385,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{title:"Edit",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Delete",permalink:"/docs/ui-integrations/material-ui/components/buttons/delete-button/"},next:{title:"Export",permalink:"/docs/ui-integrations/material-ui/components/buttons/export-button/"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=c("DocThumbsUpDownFeedbackWidget"),g=c("PropTag"),y=c("PropsTable"),h={toc:u},f="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<EditButton>")," uses Material UI's ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the edit page route of resource."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n  useDataGrid,\n  List,\n  // highlight-next-line\n  EditButton,\n} from "@refinedev/mui";\nimport { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nconst columns: GridColDef[] = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n  {\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n      // highlight-next-line\n      return <EditButton size="small" recordItemId={row.id} />;\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n        edit: () => <RefineMui.Edit>Rest of the page here...</RefineMui.Edit>,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,r.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path for the edit route. By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="1"\n    />\n  );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        edit: EditPage,\n      },\n    ]}\n    DashboardPage={MyEditComponent}\n  />,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route.")),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Redirection endpoint is defined by the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," property and its ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," action path. By default, ",(0,r.yg)("inlineCode",{parentName:"p"},"<EditButton>")," uses the inferred resource from the route."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      // highlight-next-line\n      resource="categories"\n      recordItemId="2"\n    />\n  );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n        edit: EditPage,\n      },\n    ]}\n    DashboardPage={MyEditComponent}\n  />,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is used to pass additional parameters to the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method. You can pass additional parameters or override the existing ones using the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," prop."),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," action route is defined by the pattern: ",(0,r.yg)("inlineCode",{parentName:"p"},"/posts/:authorId/edit/:id"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <EditButton meta={{ authorId: "10" }} />;\n};\n'))),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/mui";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nconst EditPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyEditComponent,\n        edit: EditPage,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,r.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This prop can be used to skip access control check with its ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@refinedev/mui";\n\nexport const MyListComponent = () => {\n  return (\n    <EditButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,r.yg)("h3",{id:"resourcenameorroutename-"},(0,r.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.yg)(g,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{module:"@refinedev/mui/EditButton",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),"."))))}b.isMDXComponent=!0}}]);