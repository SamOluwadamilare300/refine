"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41417],{95254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(53787),o=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"faq",title:"FAQ"},p=void 0,d={unversionedId:"faq",id:"version-3.xx.xx/faq",title:"FAQ",description:"How can I change the form data before submitting it to the API?",source:"@site/versioned_docs/version-3.xx.xx/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/3.xx.xx/faq",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/faq.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Riley Pearce",lastUpdatedAt:1709540023,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"faq",title:"FAQ"},sidebar:"someSidebar",previous:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool vs Redwood",permalink:"/docs/3.xx.xx/comparison"},next:{title:"Contributing",permalink:"/docs/3.xx.xx/contributing"}},c={},m=[{value:"How can I change the form data before submitting it to the API?",id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",level:2},{value:"How can I refetch data?",id:"how-can-i-refetch-data",level:2},{value:"How can I request an API with nested route?",id:"how-can-i-request-an-api-with-nested-route",level:2},{value:"How can I ensure a query is only run after a certain variable is available and not on load?",id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",level:2},{value:"Can I work with JavaScript?",id:"can-i-work-with-javascript",level:2},{value:"How I can override specific function of Data Providers?",id:"how-i-can-override-specific-function-of-data-providers",level:2},{value:"Why are API calls triggering twice",id:"why-are-api-calls-triggering-twice",level:2}],f={toc:m};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api"},"How can I change the form data before submitting it to the API?"),(0,a.kt)("p",null,"You may need to modify the form data before it is sent to the API."),(0,a.kt)("p",null,"For example, Let's send the values we received from the user in two separate inputs, ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"surname"),", to the API as ",(0,a.kt)("inlineCode",{parentName:"p"},"fullName"),"."),(0,a.kt)(r.Z,{defaultValue:"core",values:[{label:"Core Form",value:"core"},{label:"Ant Design Form",value:"antd"},{label:"React Hook Form",value:"react-hook-form"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"core",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useForm } from "@pankod/refine-core";\n\nexport const UserCreate: React.FC = () => {\n  const [name, setName] = useState();\n  const [surname, setSurname] = useState();\n\n  const { onFinish } = useForm();\n\n  const onSubmit = (e) => {\n    e.preventDefault();\n    const fullName = `${name} ${surname}`;\n    onFinish({\n      fullName: fullName,\n      name,\n      surname,\n    });\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <input onChange={(e) => setName(e.target.value)} />\n      <input onChange={(e) => setSurname(e.target.value)} />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n'))),(0,a.kt)(o.Z,{value:"antd",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm, Form, Input } from "@pankod/refine-antd";\n\nexport const UserCreate: React.FC = () => {\n  const { formProps } = useForm();\n\n  return (\n    <Form\n      {...formProps}\n      onFinish={(values) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n\n        return (\n          formProps.onFinish &&\n          formProps.onFinish({\n            ...values,\n            fullName,\n          })\n        );\n      }}\n    >\n      <Form.Item label="Name" name="name">\n        <Input />\n      </Form.Item>\n      <Form.Item label="Surname" name="surname">\n        <Input />\n      </Form.Item>\n    </Form>\n  );\n};\n'))),(0,a.kt)(o.Z,{value:"react-hook-form",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@pankod/refine-react-hook-form";\n\nexport const UserCreate: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n  } = useForm();\n\n  const handleSubmitPostCreate = (values) => {\n    const { name, surname } = values;\n    const fullName = `${name} ${surname}`;\n    onFinish({\n      ...value,\n      fullName,\n    });\n  };\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n      <input {...register("name")} />\n      <input {...register("surname")} />\n    </form>\n  );\n};\n')))),(0,a.kt)("h2",{id:"how-can-i-refetch-data"},"How can I refetch data?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Refine")," automatically invalidates the affected resources after mutations. However, in some cases you may want to refetch manually."),(0,a.kt)(r.Z,{defaultValue:"refetch",values:[{label:"React Query Refetch",value:"refetch"},{label:"useInvalidate Hook",value:"useinvalidate"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"refetch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useForm, useShow } from "@pankod/refine-core";\n\n// All "data" related hooks provided by Refine can use queryResult\' refetch function\nconst { tableQueryResult: { refetch } } = useTable();\nconst { queryResult: { refetch } } = useForm();\n...\n...\nconst { queryResult: { refetch } } = useShow();\n...\n...\n'))),(0,a.kt)(o.Z,{value:"useinvalidate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useInvalidate } from "@pankod/refine-core";\n\nconst invalidate = useInvalidate();\n\n// To invalidate the list and many states of the Posts resource\ninvalidate({\n  resource: "posts",\n  invalidates: ["list", "many"],\n});\n\n// To invalidate the state of a Posts with an id of 1\ninvalidate({\n  resource: "posts",\n  invalidates: ["detail"],\n  id: 1,\n});\n\n// To invalidate the list and many states of the Posts resource of the dataProvider named "second-data-provider"\ninvalidate({\n  resource: "posts",\n  dataProviderName: "second-data-provider",\n  invalidates: ["list"],\n});\n\n// To invalidate all states of dataprovider named "second-data-provider"\ninvalidate({\n  dataProviderName: "second-data-provider",\n  invalidates: ["all"],\n});\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"refine")," useInvalidate hook documentation for more information. \u2192")))),(0,a.kt)("h2",{id:"how-can-i-request-an-api-with-nested-route"},"How can I request an API with nested route?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Refine"),"'s way of doing this is with the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property on all data hooks. You can think of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property as the URL."),(0,a.kt)("p",null,"For example, If you want to make a request of the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"/user/1/posts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useOne } from "@pankod/refine-core";\n\nuseTable({\n  resource: "/users/1/posts",\n});\n')),(0,a.kt)("h2",{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load"},"How can I ensure a query is only run after a certain variable is available and not on load?"),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," related hooks (",(0,a.kt)("inlineCode",{parentName:"p"},"useMany"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne"),", etc.) can also accept all ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," options, which allows you to implement dependent queries whereby a query is only run after a certain data is available. This is particularly useful if you want ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany")," to only run after a certain data is available and not on load."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/dependent-queries"},"Refer to react-query docs on ",(0,a.kt)("strong",{parentName:"a"},"dependent queries")," for more information \u2192 ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Suppose you want this query to run after ",(0,a.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched by a preceding query, you can set ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"categoryIds.length > 0"),". This will ensure that ",(0,a.kt)("inlineCode",{parentName:"li"},"useMany")," is only run after ",(0,a.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  resource: "categories",\n  ids: categoryIds,\n  // highlight-next-line\n  queryOptions: { enabled: categoryIds.length > 0 },\n});\n')),(0,a.kt)("h2",{id:"can-i-work-with-javascript"},"Can I work with JavaScript?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Yes!")," You can work with JavaScript!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/examples/with-javascript"},"Refer to ",(0,a.kt)("strong",{parentName:"a"},"Refine JavaScript")," example \u2192 ")),(0,a.kt)("h2",{id:"how-i-can-override-specific-function-of-data-providers"},"How I can override specific function of Data Providers?"),(0,a.kt)("p",null,"In some cases, you may need to override functions of Refine data providers. The simplest way to do this is to use the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")),(0,a.kt)("p",null,"For example, Let's override the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," function of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/simple-rest"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-simple-rest")),". ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-simple-rest")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," HTTP method for ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),", let's change it to ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," without forking the whole data provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import dataProvider from "@pankod/refine-simple-rest";\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n  ...simpleRestProvider,\n  update: async ({ resource, id, variables }) => {\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { data } = await httpClient.put(url, variables);\n\n    return {\n      data,\n    };\n  },\n};\n\n<Refine dataProvider={myDataProvider} />;\n')),(0,a.kt)("p",null,"What if we want to select ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," on a request basis?"),(0,a.kt)("p",null,"\ud83d\udca5 We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," for this. Remember, ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," can be used in all ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"form")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," hooks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// PATCH Request\nuseUpdate({\n  resource: "this-is-patch",\n  id: 1,\n  variables: {\n    foo: "bar",\n  },\n  metaData: {\n    httpMethod: "patch",\n  },\n});\n\n// PUT Request\nuseUpdate({\n  resource: "this-is-put",\n  id: 1,\n  variables: {\n    foo: "bar",\n  },\n  metaData: {\n    httpMethod: "put",\n  },\n});\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n  ...simpleRestProvider,\n  update: async ({ resource, id, variables, metaData }) => {\n    const method = metaData.httpMethod ?? "patch";\n\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { data } = await httpClient[method](url, variables);\n\n    return {\n      data,\n    };\n  },\n};\n')),(0,a.kt)("h2",{id:"why-are-api-calls-triggering-twice"},"Why are API calls triggering twice"),(0,a.kt)("p",null,"This is the expected behavior if you use ",(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,a.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")),". In this mode, React will render the components twice in development mode to identify unsafe life cycles, unexpected side effects, and legacy or deprecated APIs. It's used for highlighting possible problems."),(0,a.kt)("admonition",{title:"note",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,a.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>"))," checks are run in development mode only; they do not impact the production build.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,a.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")," documentation")," for more information. ","\u2192")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TanStack/query/issues/3633"},"TanStack Query issue")," for more information. ","\u2192")))}h.isMDXComponent=!0}}]);