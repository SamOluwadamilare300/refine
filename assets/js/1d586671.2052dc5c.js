"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89343],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});t(37953);var r=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={title:"Email",swizzle:!0},s=void 0,c={unversionedId:"ui-integrations/chakra-ui/components/fields/email-field/index",id:"ui-integrations/chakra-ui/components/fields/email-field/index",title:"Email",description:"This field is used to display email values. It uses the `` component of Chakra UI.",source:"@site/docs/ui-integrations/chakra-ui/components/fields/email-field/index.md",sourceDirName:"ui-integrations/chakra-ui/components/fields/email-field",slug:"/ui-integrations/chakra-ui/components/fields/email-field/",permalink:"/docs/ui-integrations/chakra-ui/components/fields/email-field/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/fields/email-field/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720428941,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{title:"Email",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Date",permalink:"/docs/ui-integrations/chakra-ui/components/fields/date-field/"},next:{title:"File",permalink:"/docs/ui-integrations/chakra-ui/components/fields/file-field/"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),f=u("PropsTable"),h={toc:d},g="wrapper";function y(e){var{components:n}=e,t=o(e,["components"]);return(0,r.yg)(g,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  legacyRouterProvider: routerProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </ChakraUI.ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",null,"This field is used to display email values. It uses the ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/link/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Link>"))," component of Chakra UI."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"<EmailField>")," with the example in the user list."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/users previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/users",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/users"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport {\n  List,\n  // highlight-next-line\n  EmailField,\n} from "@refinedev/chakra-ui";\nimport {\n  TableContainer,\n  Table,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst UserList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IUser>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "firstName",\n        header: "First Name",\n        accessorKey: "firstName",\n      },\n      {\n        id: "lastName",\n        header: "Last Name",\n        accessorKey: "lastName",\n      },\n      {\n        id: "email",\n        header: "Email",\n        accessorKey: "email",\n        cell: function render({ getValue }) {\n          return (\n            // highlight-next-line\n            <EmailField value={getValue()} />\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <TableContainer>\n        <Table variant="simple" whiteSpace="pre-line">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <Th key={header.id}>\n                      {!header.isPlaceholder &&\n                        flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                    </Th>\n                  );\n                })}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <Tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <Td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </Td>\n                    );\n                  })}\n                </Tr>\n              );\n            })}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n\ninterface IUser {\n  id: number;\n  firstName: string;\n  lastName: string;\n  email: string;\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[{ name: "users", list: UserList }]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"<EmailField>"),' uses "mailto:" in the href prop of the ',(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/link/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Link>"))," component. For this reason, clicking ",(0,r.yg)("inlineCode",{parentName:"p"},"<EmailField>")," opens your device's default mail application."))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@refinedev/chakra-ui/EmailField",mdxType:"PropsTable"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For the rest of Anchor properties, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/link/usage"},"Chakra UI documentation ","\u2192")))))}y.isMDXComponent=!0}}]);