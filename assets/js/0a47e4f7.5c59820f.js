"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10303],{58860:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),g=o,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||i;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},68574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(37953);var t=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication."},u=void 0,l={unversionedId:"api-reference/core/hooks/auth/useLogin",id:"version-3.xx.xx/api-reference/core/hooks/auth/useLogin",title:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useLogin.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogin",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useLogin.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718377768,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication."},sidebar:"someSidebar",previous:{title:"useGetIdentity",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity"},next:{title:"useLogout",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogout"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Redirection after login",id:"redirection-after-login",level:2}],d=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var g;const m={toc:c},f="wrapper";function y(e){var{components:n}=e,r=a(e,["components"]);return(0,t.yg)(f,i(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},m,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useLogin")," calls ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method from ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,t.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood.",(0,t.yg)("br",{parentName:"p"}),"\n","It authenticates the app if ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method from ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification. After successful authentication it redirects the app to root."),(0,t.yg)("p",null,"It returns the result of ",(0,t.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,t.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,t.yg)("p",null,"Data that is resolved from ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," will be returned as the ",(0,t.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Normally refine provides a default login page. If you prefer to use this default login page, there is no need to handle login flow manually.",(0,t.yg)("br",{parentName:"p"}),"\n","If we want to build a custom login page instead of default one that comes with refine, ",(0,t.yg)("inlineCode",{parentName:"p"},"useLogin")," can be used like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customLoginPage"',title:'"pages/customLoginPage"'},'import { useLogin } from "@pankod/refine-core";\nimport { Form } from "@pankod/refine-antd";\n\ntype LoginVariables = {\n    username: string;\n    password: string;\n};\n\nexport const LoginPage = () => {\n    const { mutate: login } = useLogin<LoginVariables>();\n\n    const onSubmit = (values: LoginVariables) => {\n        login(values);\n    };\n\n    return <Form onFinish={onSubmit}>// rest of the login form</Form>;\n};\n')),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,t.yg)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method from ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,t.yg)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,t.yg)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,t.yg)("pre",{parentName:"admonition"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } = useLogin<{ username: string; password: string }>();\n")))),(0,t.yg)("h2",{id:"redirection-after-login"},"Redirection after login"),(0,t.yg)(d,{id:"redirection-after-login",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"We have 3 options for redirecting the app after login successfully ."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"If promise returned from ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," is resolved with nothing, app will be redirected to the ",(0,t.yg)("inlineCode",{parentName:"p"},"/")," route by default.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"A custom url can be resolved from the promise returned from the ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method of the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),"."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    login: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,t.yg)("p",null,"A custom url can be given to mutate function from the ",(0,t.yg)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain url."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@pankod/refine-core";\n\nconst { mutate: login } = useLogin();\n\nlogin({ redirectPath: "/custom-url" });\n')),(0,t.yg)("p",null,"Then, you can handle this url in your ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    login: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"If promise returned from the ",(0,t.yg)("inlineCode",{parentName:"li"},"login")," method of the ",(0,t.yg)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,t.yg)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    login: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}y.isMDXComponent=!0}}]);