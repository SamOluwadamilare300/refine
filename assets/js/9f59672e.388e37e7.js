"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86946],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"List",swizzle:!0},p=void 0,l={unversionedId:"ui-integrations/ant-design/components/basic-views/list/index",id:"ui-integrations/ant-design/components/basic-views/list/index",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving titles to the page.",source:"@site/docs/ui-integrations/ant-design/components/basic-views/list/index.md",sourceDirName:"ui-integrations/ant-design/components/basic-views/list",slug:"/ui-integrations/ant-design/components/basic-views/list/",permalink:"/docs/ui-integrations/ant-design/components/basic-views/list/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/basic-views/list/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720201756,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"List",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Edit",permalink:"/docs/ui-integrations/ant-design/components/basic-views/edit/"},next:{title:"Show",permalink:"/docs/ui-integrations/ant-design/components/basic-views/show/"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"title",id:"title",level:3},{value:"resource",id:"resource",level:3},{value:"canCreate and createButtonProps",id:"cancreate-and-createbuttonprops",level:3},{value:'breadcrumb <GlobalConfigBadge id="core/refine-component/#breadcrumb" />',id:"breadcrumb-",level:3},{value:"wrapperProps",id:"wrapperprops",level:3},{value:"headerProps",id:"headerprops",level:3},{value:"contentProps",id:"contentprops",level:3},{value:"headerButtons",id:"headerbuttons",level:3},{value:"headerButtonProps",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},g=u("DocThumbsUpDownFeedbackWidget"),m=u("GlobalConfigBadge"),h=u("PropsTable"),y={toc:d},b="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(b,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving titles to the page."),(0,r.yg)("p",null,"We will show what ",(0,r.yg)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts",live:!0,hideCode:!0,url:"http://localhost:3000/posts"},'interface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n\n// visible-block-start\nimport { useMany } from "@refinedev/core";\n\nimport { List, TextField, TagField, useTable } from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>({\n    syncWithLocation: true,\n  });\n\n  const categoryIds =\n    tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n  const { data, isLoading } = useMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" />\n        <Table.Column\n          dataIndex={["category", "id"]}\n          title="Category"\n          render={(value) => {\n            if (isLoading) {\n              return <TextField value="Loading..." />;\n            }\n\n            return (\n              <TextField\n                value={data?.data.find((item) => item.id === value)?.title}\n              />\n            );\n          }}\n        />\n        <Table.Column\n          dataIndex="status"\n          title="Status"\n          render={(value: string) => <TagField value={value} />}\n        />\n      </Table>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"title"},"title"),(0,r.yg)(g,{id:"title",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"title")," allows you to add a title to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<List>")," component. If you don't pass the title props, it uses plural form of resource name by default."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\n\nconst PostList: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <List title="Custom Title">\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(g,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,r.yg)("inlineCode",{parentName:"p"},"<List>")," component, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," prop:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/custom",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/custom"},'setInitialRoutes(["/custom"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n// visible-block-start\nimport { List } from "@refinedev/antd";\n\nconst CustomPage: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <List resource="posts">\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n  return (\n    <RefineAntdDemo\n      legacyRouterProvider={{\n        ...routerProvider,\n        // highlight-start\n        routes: [\n          {\n            element: <CustomPage />,\n            path: "/custom",\n          },\n        ],\n        // highlight-end\n      }}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"cancreate-and-createbuttonprops"},"canCreate and createButtonProps"),(0,r.yg)(g,{id:"cancreate-and-createbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"<List>")," component. If you want to customize this button you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'const { Create } = RefineAntd;\nconst { default: simpleRest } = RefineSimpleRest;\n\nconst dataProvider = simpleRest("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...dataProvider,\n  create: async ({ resource, variables }) => {\n    return {\n      data: {},\n    };\n  },\n};\n\nconst authProvider = {\n  login: async () => {\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  register: async () => {\n    return {\n      success: true,\n    };\n  },\n  forgotPassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  updatePassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  logout: async () => {\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  check: async () => ({\n    authenticated: true,\n  }),\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  getPermissions: async () => ["admin"],\n  getIdentity: async () => null,\n};\n\n// visible-block-start\nimport { List } from "@refinedev/antd";\nimport { usePermissions } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n  const { data: permissionsData } = usePermissions();\n  return (\n    <List\n      /* highlight-start */\n      canCreate={permissionsData?.includes("admin")}\n      createButtonProps={{ size: "small" }}\n      /* highlight-end */\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    authProvider={authProvider}\n    dataProvider={customDataProvider}\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n        create: () => {\n          return <Create>Create Page</Create>;\n        },\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("p",null,"The create button redirects to the create page of the resource according to the value it reads from the URL."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/hooks/use-permissions"},(0,r.yg)("inlineCode",{parentName:"a"},"usePermission")," documentation ","\u2192")))),(0,r.yg)("h3",{id:"breadcrumb-"},"breadcrumb ",(0,r.yg)(m,{id:"core/refine-component/#breadcrumb",mdxType:"GlobalConfigBadge"})),(0,r.yg)(g,{id:"breadcrumb-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/antd")," package."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/breadcrumb"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\n\nconst CustomBreadcrumb: React.FC = () => {\n  return (\n    <p\n      style={{\n        padding: "3px 6px",\n        border: "2px dashed cornflowerblue",\n      }}\n    >\n      My Custom Breadcrumb\n    </p>\n  );\n};\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      breadcrumb={<CustomBreadcrumb />}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"wrapperprops"},"wrapperProps"),(0,r.yg)(g,{id:"wrapperprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"wrapperProps")," property if you want to customize the wrapper of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<List/>")," component. The ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/antd")," wrapper elements are simply ",(0,r.yg)("inlineCode",{parentName:"p"},"<div/>"),"s and ",(0,r.yg)("inlineCode",{parentName:"p"},"wrapperProps")," and can get every attribute that ",(0,r.yg)("inlineCode",{parentName:"p"},"<div/>")," can get."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      wrapperProps={{\n        style: {\n          backgroundColor: "cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"headerprops"},"headerProps"),(0,r.yg)(g,{id:"headerprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"headerProps")," property to customize the header of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<List/>")," component:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerProps={{\n        subTitle: "This is a subtitle",\n        style: {\n          backgroundColor: "cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://procomponents.ant.design/en-US/components/page-header"},(0,r.yg)("inlineCode",{parentName:"a"},"PageHeader")," documentation ","\u2192")))),(0,r.yg)("h3",{id:"contentprops"},"contentProps"),(0,r.yg)(g,{id:"contentprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"contentProps")," property to customize the content of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Create/>")," component. The ",(0,r.yg)("inlineCode",{parentName:"p"},"<List/>")," components content is wrapped with a ",(0,r.yg)("inlineCode",{parentName:"p"},"<div/>")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"contentProps")," can get every attribute that ",(0,r.yg)("inlineCode",{parentName:"p"},"<div/>")," can get."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      contentProps={{\n        style: {\n          backgroundColor: "cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"headerbuttons"},"headerButtons"),(0,r.yg)(g,{id:"headerbuttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"<List/>")," component has a ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/buttons/create-button"},(0,r.yg)("inlineCode",{parentName:"a"},"<CreateButton>"))," at the header."),(0,r.yg)("p",null,"You can customize the buttons at the header by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.yg)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.yg)("inlineCode",{parentName:"p"},"({ defaultButtons, createButtonProps }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.yg)("p",null,'If the "create" resource is not defined or if ',(0,r.yg)("a",{parentName:"p",href:"#cancreate-and-createbuttonprops"},(0,r.yg)("inlineCode",{parentName:"a"},"canCreate"))," is false, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/buttons/create-button"},(0,r.yg)("inlineCode",{parentName:"a"},"<CreateButton>"))," will not render and ",(0,r.yg)("inlineCode",{parentName:"p"},"createButtonProps"),"will be ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtons={({ defaultButtons }) => (\n        <>\n          {defaultButtons}\n          <Button type="primary">Custom Button</Button>\n        </>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("p",null,"Or, instead of using the ",(0,r.yg)("inlineCode",{parentName:"p"},"defaultButtons"),", you can create your own buttons. If you want, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"createButtonProps")," to utilize the default values of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/buttons/create-button"},(0,r.yg)("inlineCode",{parentName:"a"},"<CreateButton>"))," component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, CreateButton } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtons={({ createButtonProps }) => (\n        <>\n          {createButtonProps && (\n            <CreateButton {...createButtonProps} meta={{ foo: "bar" }} />\n          )}\n          <Button type="primary">Custom Button</Button>\n        </>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"headerbuttonprops"},"headerButtonProps"),(0,r.yg)(g,{id:"headerbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/antd";\nimport { Button } from "antd";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtonProps={{\n        style: {\n          backgroundColor: "cornflowerblue",\n          padding: "16px",\n        },\n      }}\n      // highlight-end\n      headerButtons={<Button type="primary">Custom Button</Button>}\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts"]}\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/space/"},(0,r.yg)("inlineCode",{parentName:"a"},"Space")," documentation ","\u2192")))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(g,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(h,{module:"@refinedev/antd/List","headerProps-type":"[`PageHeaderProps`](https://procomponents.ant.design/en-US/components/page-header)","headerButtonProps-type":"[`SpaceProps`](https://ant.design/components/space/)","createButtonProps-type":"[`ButtonProps`](https://ant.design/components/button/#API) & `{ resourceName: string }`","breadcrumb-default":"[`<Breadcrumb>`](https://ant.design/components/breadcrumb/)","canCreate-default":"If the resource is passed a create component, `true` else `false`",mdxType:"PropsTable"})))}f.isMDXComponent=!0}}]);