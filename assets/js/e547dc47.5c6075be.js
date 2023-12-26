"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"useDrawerForm",title:"useDrawerForm"},p=void 0,s={unversionedId:"api-reference/antd/hooks/form/useDrawerForm",id:"version-3.xx.xx/api-reference/antd/hooks/form/useDrawerForm",title:"useDrawerForm",description:"useDrawerForm hook allows you to manage a form within a Drawer. It returns Ant Design ` and ` components props.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/form/useDrawerForm.md",sourceDirName:"api-reference/antd/hooks/form",slug:"/api-reference/antd/hooks/form/useDrawerForm",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/form/useDrawerForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/form/useDrawerForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1703596417,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{id:"useDrawerForm",title:"useDrawerForm"},sidebar:"someSidebar",previous:{title:"useSelect",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/field/useSelect/"},next:{title:"useForm",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"}},d={},m=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Return values",id:"return-values",level:2},{value:"<code>show</code>",id:"show",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>deleteButtonProps</code>",id:"deletebuttonprops",level:3},{value:"<code>formProps</code>",id:"formprops",level:3},{value:"<code>drawerProps</code>",id:"drawerprops",level:3},{value:"<code>width</code>",id:"width",level:4},{value:"<code>onClose</code>",id:"onclose",level:4},{value:"<code>open</code>",id:"open",level:4},{value:"<code>forceRender</code>",id:"forcerender",level:4},{value:"API Parameters",id:"api-parameters",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),k=u("TabItem"),h=u("PropsTable"),f=u("CodeSandboxExample"),N={toc:m};function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},N,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," hook allows you to manage a form within a Drawer. It returns Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Form>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/drawer/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Drawer>"))," components props."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," hook is extended from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/antd"},"@pankod/refine-antd")," package. This means that you can use all the features of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook.")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," is used in both."),(0,r.kt)(c,{defaultValue:"create",values:[{label:"create",value:"create"},{label:"edit",value:"edit"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"create",mdxType:"TabItem"},(0,r.kt)("p",null,"In this example, we will show you how to ",(0,r.kt)("inlineCode",{parentName:"p"},'"create"')," a record with ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React, { useState } from "react";\nimport {\n  useShow,\n  IResourceComponentsProps,\n  HttpError,\n} from "@pankod/refine-core";\n\nimport {\n  List,\n  Create,\n  Table,\n  Form,\n  Select,\n  Input,\n  Drawer,\n  useTable,\n  useDrawerForm,\n} from "@pankod/refine-antd";\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n}\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps } = useTable<IPost, HttpError>();\n\n  // highlight-start\n  const { formProps, drawerProps, show, saveButtonProps } = useDrawerForm<\n    IPost,\n    HttpError,\n    IPost\n  >({\n    action: "create",\n  });\n  // highlight-end\n\n  return (\n    <>\n      <List\n        canCreate\n        // highlight-start\n        createButtonProps={{\n          onClick: () => {\n            show();\n          },\n        }}\n        // highlight-end\n      >\n        <Table {...tableProps} rowKey="id">\n          <Table.Column dataIndex="id" title="ID" />\n          <Table.Column dataIndex="title" title="Title" />\n        </Table>\n      </List>\n      {/* highlight-start */}\n      <Drawer {...drawerProps}>\n        <Create saveButtonProps={saveButtonProps}>\n          <Form {...formProps} layout="vertical">\n            <Form.Item\n              label="Title"\n              name="title"\n              rules={[\n                {\n                  required: true,\n                },\n              ]}\n            >\n              <Input />\n            </Form.Item>\n            <Form.Item\n              label="Status"\n              name="status"\n              rules={[\n                {\n                  required: true,\n                },\n              ]}\n            >\n              <Select\n                options={[\n                  {\n                    label: "Published",\n                    value: "published",\n                  },\n                  {\n                    label: "Draft",\n                    value: "draft",\n                  },\n                  {\n                    label: "Rejected",\n                    value: "rejected",\n                  },\n                ]}\n              />\n            </Form.Item>\n          </Form>\n        </Create>\n      </Drawer>\n      {/* highlight-end */}\n    </>\n  );\n};\n\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineAntdDemo />);\n'))),(0,r.kt)(k,{value:"edit",mdxType:"TabItem"},(0,r.kt)("p",null,"In this example, we will show you how to ",(0,r.kt)("inlineCode",{parentName:"p"},'"edit"')," a record with ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React, { useState } from "react";\nimport {\n  useShow,\n  IResourceComponentsProps,\n  HttpError,\n} from "@pankod/refine-core";\n\nimport {\n  List,\n  Edit,\n  EditButton,\n  Table,\n  Form,\n  Select,\n  Input,\n  Drawer,\n  useTable,\n  useDrawerForm,\n  Space,\n} from "@pankod/refine-antd";\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n}\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps } = useTable<IPost, HttpError>();\n\n  // highlight-start\n  const { formProps, drawerProps, show, saveButtonProps, id } = useDrawerForm<\n    IPost,\n    HttpError,\n    IPost\n  >({\n    action: "edit",\n    warnWhenUnsavedChanges: true,\n  });\n  // highlight-end\n\n  return (\n    <>\n      <List\n        canCreate\n        // highlight-start\n        createButtonProps={{\n          onClick: () => {\n            show();\n          },\n        }}\n        // highlight-end\n      >\n        <Table {...tableProps} rowKey="id">\n          <Table.Column dataIndex="id" title="ID" />\n          <Table.Column dataIndex="title" title="Title" />\n          <Table.Column<IPost>\n            title="Actions"\n            dataIndex="actions"\n            key="actions"\n            render={(_, record) => (\n              // highlight-start\n              <Space>\n                <EditButton\n                  hideText\n                  size="small"\n                  recordItemId={record.id}\n                  onClick={() => show(record.id)}\n                />\n              </Space>\n              // highlight-end\n            )}\n          />\n        </Table>\n      </List>\n      {/* highlight-start */}\n      <Drawer {...drawerProps}>\n        <Edit saveButtonProps={saveButtonProps} recordItemId={id}>\n          <Form {...formProps} layout="vertical">\n            <Form.Item\n              label="Title"\n              name="title"\n              rules={[\n                {\n                  required: true,\n                },\n              ]}\n            >\n              <Input />\n            </Form.Item>\n            <Form.Item\n              label="Status"\n              name="status"\n              rules={[\n                {\n                  required: true,\n                },\n              ]}\n            >\n              <Select\n                options={[\n                  {\n                    label: "Published",\n                    value: "published",\n                  },\n                  {\n                    label: "Draft",\n                    value: "draft",\n                  },\n                  {\n                    label: "Rejected",\n                    value: "rejected",\n                  },\n                ]}\n              />\n            </Form.Item>\n          </Form>\n        </Edit>\n      </Drawer>\n      {/* highlight-end */}\n    </>\n  );\n};\n\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineAntdDemo />);\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," doesn't automatically add a ",(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," to the each record in ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens edit form in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>")," when clicked."),(0,r.kt)("p",{parentName:"admonition"},"So, we have to put the ",(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," on our list. In that way, ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," form in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>")," can fetch data by the record ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column<IPost>\n  title="Actions"\n  dataIndex="actions"\n  key="actions"\n  render={(_value, record) => <EditButton onClick={() => show(record.id)} />}\n/>\n'))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to pass the record ",(0,r.kt)("inlineCode",{parentName:"p"},'"id"')," to ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both ",(0,r.kt)("inlineCode",{parentName:"p"},'"edit"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"clone"')," forms.")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," props also available in ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),". You can find descriptions on ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," docs.")),(0,r.kt)("h2",{id:"return-values"},"Return values"),(0,r.kt)("h3",{id:"show"},(0,r.kt)("inlineCode",{parentName:"h3"},"show")),(0,r.kt)("p",null,"A function that opens the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>"),". It takes an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," parameter. If ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is provided, it will fetch the record data and fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Form>")," with it."),(0,r.kt)("h3",{id:"close"},(0,r.kt)("inlineCode",{parentName:"h3"},"close")),(0,r.kt)("p",null,"A function that closes the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>"),". Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"[onClose][#onClose]"),"."),(0,r.kt)("h3",{id:"savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,r.kt)("p",null,"It contains the props needed by the ",(0,r.kt)("inlineCode",{parentName:"p"},'"submit"')," button within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>")," (disabled,loading etc.). When ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps.onClick")," is called, it triggers ",(0,r.kt)("inlineCode",{parentName:"p"},"form.submit()"),". You can manually pass these props to your custom button."),(0,r.kt)("h3",{id:"deletebuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"deleteButtonProps")),(0,r.kt)("p",null,"It contains the props needed by the ",(0,r.kt)("inlineCode",{parentName:"p"},'"delete"')," button within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>")," (disabled,loading etc.). When ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteButtonProps.onSuccess")," is called, it triggers it sets ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". You can manually pass these props to your custom button."),(0,r.kt)("h3",{id:"formprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"formProps")),(0,r.kt)("p",null,"It's required to manage ",(0,r.kt)("inlineCode",{parentName:"p"},"<Form>")," state and actions. Under the hood the ",(0,r.kt)("inlineCode",{parentName:"p"},"formProps")," came from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm")),"."),(0,r.kt)("p",null,"It contains the props to manage the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form#api"},"Antd ",(0,r.kt)("inlineCode",{parentName:"a"},"<Form>"))," component such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#return-values"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"onValuesChange"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"initialValues"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"onFieldsChange"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"onFinish")," etc."))),(0,r.kt)("h3",{id:"drawerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"drawerProps")),(0,r.kt)("p",null,"It's required to manage ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/drawer/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"<Drawer>"))," state and actions."),(0,r.kt)("h4",{id:"width"},(0,r.kt)("inlineCode",{parentName:"h4"},"width")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},'"500px"'))),(0,r.kt)("p",null,"It's the width of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>"),"."),(0,r.kt)("h4",{id:"onclose"},(0,r.kt)("inlineCode",{parentName:"h4"},"onClose")),(0,r.kt)("p",null,"A function that can close the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>"),". It's useful when you want to close the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>")," manually.\nWhen ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#warnwhenunsavedchanges"},(0,r.kt)("inlineCode",{parentName:"a"},"warnWhenUnsavedChanges"))," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it will show a confirmation modal before closing the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>"),". If you override this function, you have to handle this confirmation modal manually."),(0,r.kt)("h4",{id:"open"},(0,r.kt)("inlineCode",{parentName:"h4"},"open")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Current visible state of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>"),"."),(0,r.kt)("h4",{id:"forcerender"},(0,r.kt)("inlineCode",{parentName:"h4"},"forceRender")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("p",null,"It renders ",(0,r.kt)("inlineCode",{parentName:"p"},"<Drawer>")," instead of lazy rendering it."),(0,r.kt)("h2",{id:"api-parameters"},"API Parameters"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(h,{module:"@pankod/refine-antd/useDrawerForm",mdxType:"PropsTable"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,r.kt)("strong",{parentName:"p"},"<",(0,r.kt)("a",{parentName:"strong",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},"Refine"),">")," component. ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," will use what is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"**"),": If not explicitly configured, default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," depends which ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," used. If ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," (created resources edit page). Otherwise if ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),".")),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that opens the drawer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design form props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawerProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props for managed drawer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#drawerprops"},(0,r.kt)("inlineCode",{parentName:"a"},"DrawerProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deleteButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds props for delete button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#delete-button-props"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteButtonProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit"),(0,r.kt)("td",{parentName:"tr",align:null},"Submit method, the parameter is the value of the form fields"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"open"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the drawer is open or not"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the drawer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(f,{path:"form-antd-use-drawer-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);