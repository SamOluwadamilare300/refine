"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82896],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var o=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});t(37953);var o=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"Delete",swizzle:!0},l=void 0,d={unversionedId:"ui-integrations/ant-design/components/buttons/delete-button/index",id:"ui-integrations/ant-design/components/buttons/delete-button/index",title:"Delete",description:"` uses Ant Design's  and ` components.",source:"@site/docs/ui-integrations/ant-design/components/buttons/delete-button/index.md",sourceDirName:"ui-integrations/ant-design/components/buttons/delete-button",slug:"/ui-integrations/ant-design/components/buttons/delete-button/",permalink:"/docs/ui-integrations/ant-design/components/buttons/delete-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/buttons/delete-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720166702,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"Delete",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Create",permalink:"/docs/ui-integrations/ant-design/components/buttons/create-button/"},next:{title:"Edit",permalink:"/docs/ui-integrations/ant-design/components/buttons/edit-button/"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"onSuccess",id:"onsuccess",level:3},{value:"mutationMode",id:"mutationmode",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),g=u("PropTag"),y=u("PropsTable"),h={toc:p},b="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,o.yg)(b,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Ant Design's ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.yg)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/popconfirm/"},(0,o.yg)("inlineCode",{parentName:"a"},"<Popconfirm>"))," components."),(0,o.yg)("p",null,"When you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,o.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,o.yg)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,o.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,o.yg)("admonition",{title:"Good to know",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n  List,\n  useTable,\n  // highlight-next-line\n  DeleteButton,\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="50%" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          key="actions"\n          render={(_, record) => (\n            // highlight-next-line\n            <DeleteButton size="small" recordItemId={record.id} />\n          )}\n          width="50%"\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,o.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted. By default, the ",(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n  return (\n    <DeleteButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n      },\n    ]}\n    DashboardPage={MyEditComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,o.yg)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "posts" and whose id is "123" will be deleted.')),(0,o.yg)("h3",{id:"resource"},"resource"),(0,o.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource's record is going to be deleted. By default, the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," is inferred from the route params."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton resource="categories" recordItemId="123" />;\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n      },\n      {\n        name: "categories",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n      },\n    ]}\n    DashboardPage={MyDeleteComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,o.yg)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "categories" and whose id is "2" will be deleted.'),(0,o.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,o.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,o.yg)("h3",{id:"onsuccess"},"onSuccess"),(0,o.yg)(m,{id:"onsuccess",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do something based on the results returned after the delete request."),(0,o.yg)("p",null,"For example, let's ",(0,o.yg)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=150px disableScroll",live:!0,url:"http://localhost:3000",previewHeight:"150px",disableScroll:!0},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      resourceNameOrRouteName="posts"\n      recordItemId="1"\n      onSuccess={(value) => {\n        console.log(value);\n      }}\n    />\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        message: "You have successfully deleted the record",\n      };\n    },\n  };\n\n  return (\n    <RefineAntdDemo\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"mutationmode"},"mutationMode"),(0,o.yg)(m,{id:"mutationmode",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Determines which mode mutation will have while executing ",(0,o.yg)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"mutation mode documentation ","\u2192"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, DeleteButton, useTable } from "@refinedev/antd";\nimport { Table } from "antd";\n\nexport const PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <DeleteButton\n              size="small"\n              recordItemId={record.id}\n              // highlight-next-line\n              mutationMode="undoable"\n            />\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n'))),(0,o.yg)("h3",{id:"hidetext"},"hideText"),(0,o.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      recordItemId="123"\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyDeleteComponent,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,o.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"This prop can be used to skip access control check with its ",(0,o.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/antd";\n\nexport const MyListComponent = () => {\n  return (\n    <DeleteButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,o.yg)("h3",{id:"resourcenameorroutename-"},(0,o.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,o.yg)(g,{deprecated:!0,mdxType:"PropTag"})),(0,o.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.yg)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,o.yg)(m,{id:"how-to-override-confirm-texts",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can change the text that appears when you confirm a transaction with the ",(0,o.yg)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what the 'ok' and 'cancel' buttons' text look like with the ",(0,o.yg)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/antd";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      recordItemId="123"\n      // highlight-start\n      confirmTitle="Title"\n      confirmOkText="Ok Text"\n      confirmCancelText="Delete Text"\n      // highlight-end\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyDeleteComponent,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(y,{module:"@refinedev/antd/DeleteButton",mdxType:"PropsTable"}),(0,o.yg)("admonition",{title:"External Props",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),"."))))}f.isMDXComponent=!0}}]);