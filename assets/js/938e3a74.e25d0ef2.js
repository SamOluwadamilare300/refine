"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7515],{58860:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=o,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99628:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(37953);var t=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Migrating Auth Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Auth Provider"},d=void 0,l={unversionedId:"migration-guide/auth-provider",id:"migration-guide/auth-provider",title:"Migrating Auth Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/auth-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/auth-provider",permalink:"/docs/migration-guide/auth-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/auth-provider.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716897385,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{title:"Migrating Auth Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Auth Provider"},sidebar:"mainSidebar",previous:{title:"3.x.x to 4.x.x",permalink:"/docs/migration-guide/3x-to-4x"},next:{title:"Migrating Router Provider",permalink:"/docs/migration-guide/router-provider"}},u={},p=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Naming changes",id:"naming-changes",level:2},{value:"Methods",id:"methods",level:2},{value:"login",id:"login",level:3},{value:"logout",id:"logout",level:3},{value:"register",id:"register",level:3},{value:"forgotPassword",id:"forgotpassword",level:3},{value:"updatePassword",id:"updatepassword",level:3},{value:"check",id:"check",level:3},{value:"onError",id:"onerror",level:3},{value:"getPermissions",id:"getpermissions",level:3},{value:"getIdentity",id:"getidentity",level:3},{value:"Auth hooks",id:"auth-hooks",level:2},{value:"Backward compatibility",id:"backward-compatibility",level:2}],c=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var g;const m={toc:p},y="wrapper";function h(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(y,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},m,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,t.yg)(c,{id:"motivation-behind-the-changes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Our motivation for modifying the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," prop in ",(0,t.yg)("strong",{parentName:"p"},"Refine v4")," was to improve its flexibility and customization options, allowing it to handle a wider range of use cases without becoming overly complicated."),(0,t.yg)("p",null,"We aimed to create a more standardized interface for the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," methods that would improve transparency and enable easier debugging for developers."),(0,t.yg)("p",null,"Previously, developers were required to resolve the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," methods on success and reject them on failure. However, this approach had limitations, as rejected promises are typically associated with errors or unusual scenarios. Some errors, such as incorrect login credentials, aren\u2019t actually considered failures and need to be communicated to the user. This behavior often confused developers and hindered the debugging process."),(0,t.yg)("p",null,"Now, the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise that includes an object with a success key. This key indicates whether the operation was successful or not, and in case of failure, an optional error key containing an ",(0,t.yg)("inlineCode",{parentName:"p"},"Error")," object can be used to notify users."),(0,t.yg)("p",null,"Furthermore, the auth hooks no longer have default redirection paths, which had previously been a source of confusion for some developers. Instead, developers can now have more control over the redirection after a successful operation by adding a ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," methods' return object")),(0,t.yg)("h2",{id:"naming-changes"},"Naming changes"),(0,t.yg)(c,{id:"naming-changes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthPovider")," interface was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthProvider"),"."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'- import { AuthProvider } from "@refinedev/core";\n+ import { AuthProvider } from "@refinedev/core";\n\n- const authProvider: AuthProvider = {/* ... */}\n+ const authProvider: AuthProvider = {/* ... */}\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"getUserIdentity")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"getIdentity"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"checkError")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider"),"was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"onError"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"checkAuth")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"check"),"."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-diff"},"const authProvider = {\n-     getUserIdentity,\n+     getIdentity,\n-     useCheckError,\n+     useOnError,\n-     checkAuth,\n+     check,\n}\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"useAuthenticated")," hook was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"useIsAuthenticated"),"."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'- import { useAuthenticated } from "@refinedev/core";\n+ import { useIsAuthenticated } from "@refinedev/core";\n'))))),(0,t.yg)("h2",{id:"methods"},"Methods"),(0,t.yg)("h3",{id:"login"},"login"),(0,t.yg)(c,{id:"login",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Promises must now be resolved in all cases when using the ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useLogin")," no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"login")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    login: async ({ email, password }) => {\n        const user = mockUsers.find((item) => item.email === email);\n\n        if (user) {\n            localStorage.setItem("auth", JSON.stringify(user));\n-           return Promise.resolve();\n+           return {\n+               success: true,\n+               redirectTo: "/",\n+           };\n        }\n\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               message: "Login Error",\n+               name: "Invalid email or password",\n+           }\n+       };\n    },\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n"))),(0,t.yg)("h3",{id:"logout"},"logout"),(0,t.yg)(c,{id:"logout",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Promises must now be resolved in all cases when using the ",(0,t.yg)("inlineCode",{parentName:"p"},"logout")," method, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useLogout")," no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"logout")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    logout: async ({ email, password }) => {\n        localStorage.removeItem("auth");\n-       return Promise.resolve();\n+       return {\n+          success: true,\n+          redirectTo: "/login",\n+       };\n    },\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n"))),(0,t.yg)("h3",{id:"register"},"register"),(0,t.yg)(c,{id:"register",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Promises must now be resolved in all cases when using the ",(0,t.yg)("inlineCode",{parentName:"p"},"register")," method, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useRegister")," no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"register")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    register: async ({ email, password }) => {\n        const user = mockUsers.find((item) => item.email === email);\n\n        if (user) {\n-           return Promise.reject();\n+           return {\n+               success: false,\n+               error: {\n+                   name: "Register Error"",\n+                   message: "User already exists",\n+               },\n+           };\n        }\n\n        mockUsers.push({ email });\n\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/",\n+       };\n    },\n}\n'))),(0,t.yg)("h3",{id:"forgotpassword"},"forgotPassword"),(0,t.yg)(c,{id:"forgotpassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Promises must now be resolved in all cases when using the ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    forgotPassword: async ({ password }) => {\n        // send password reset link to the user\'s email address here\n\n        // if request is successful\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/login",\n+       };\n\n        // if request is not successful\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               name: "Forgot Password Error",\n+               message: "Email address does not exist",\n+           },\n+       };\n    },\n};\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n"))),(0,t.yg)("h3",{id:"updatepassword"},"updatePassword"),(0,t.yg)(c,{id:"updatepassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Promises must now be resolved in all cases when using the ",(0,t.yg)("inlineCode",{parentName:"p"},"updatePassword")," method, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"updatePassword")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    updatePassword: async ({ password }) => {\n        // update the user\'s password here\n\n        // if request is successful\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/login",\n+       });\n\n        // if request is not successful\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               name: "Forgot Password Error",\n+               message: "Email address does not exist",\n+           },\n+       };\n    },\n};\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n"))),(0,t.yg)("h3",{id:"check"},"check"),(0,t.yg)(c,{id:"check",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"checkAuth")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"check"),". It now requires promises to be resolved in all cases, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"CheckResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"<Authenticated>")," component no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"check")," method's return object. The component doesn't call the ",(0,t.yg)("inlineCode",{parentName:"p"},"logout")," method by default either, and you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"logout: true")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"check")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n-   checkAuth: async () => {\n+   check: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n-           return Promise.resolve();\n+           return {\n+               authenticated: true,\n+           };\n        }\n\n-       return Promise.reject();\n+       return {\n+           authenticated: false,\n+           redirectTo: "/login",\n+           logout: true,\n+           error: {\n+               message: "Check failed",\n+               name: "User not found",\n+           }\n+       };\n    },\n};\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n  authenticated: boolean;\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n"))),(0,t.yg)("h3",{id:"onerror"},"onError"),(0,t.yg)(c,{id:"onerror",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"checkError")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,t.yg)("inlineCode",{parentName:"p"},"onError"),". It now requires promises to be resolved in all cases, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"OnErrorResponse"),". When resolving the promise, you must always include a ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,t.yg)("inlineCode",{parentName:"p"},"error")," key."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"useOnError")," component no longer has default redirection, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"onError")," method's return object. The component doesn't call the ",(0,t.yg)("inlineCode",{parentName:"p"},"logout")," method by default either, so you need to add the ",(0,t.yg)("inlineCode",{parentName:"p"},"logout: true")," property to the ",(0,t.yg)("inlineCode",{parentName:"p"},"onError")," method's return object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n-   checkError: async (error) => {\n+   onError: async (error) => {\n        if (error.status === 401 || error.status === 403) {\n-           return Promise.reject();\n+           return {\n+               redirectTo: "/login",\n+               logout: true,\n+               error: error,\n+           };\n        }\n\n-       return Promise.reject();\n+       return {};\n    },\n};\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type OnErrorResponse = {\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n"))),(0,t.yg)("h3",{id:"getpermissions"},"getPermissions"),(0,t.yg)(c,{id:"getpermissions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"getPermissions")," method now requires promises to be resolved in all cases, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"PermissionResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    getPermissions: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n            const { roles } = JSON.parse(user);\n\n            return roles;\n        }\n\n-        return Promise.reject();\n+        return null;\n    },\n};\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type PermissionResponse = unknown;\n"))),(0,t.yg)("h3",{id:"getidentity"},"getIdentity"),(0,t.yg)(c,{id:"getidentity",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"authProvider"),"'s ",(0,t.yg)("inlineCode",{parentName:"p"},"getUserIdentity")," method was renamed to ",(0,t.yg)("inlineCode",{parentName:"p"},"getIdentity"),", which requires promises to be resolved in all cases, with a return type of ",(0,t.yg)("inlineCode",{parentName:"p"},"IdentityResponse")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'const authProvider: AuthProvider = {\n-   getUserIdentity: async () => {\n+   getIdentity: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n            const { email, roles } = JSON.parse(user);\n\n            return { email, roles };\n        }\n\n-        return Promise.reject();\n+        return null;\n    },\n};\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type IdentityResponse = unknown;\n"))),(0,t.yg)("h2",{id:"auth-hooks"},"Auth hooks"),(0,t.yg)(c,{id:"auth-hooks",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"If you used ",(0,t.yg)("inlineCode",{parentName:"p"},"codemod")," for migration, the ",(0,t.yg)("inlineCode",{parentName:"p"},"v3LegacyAuthProviderCompatible: true")," prop was added to the auth hooks for backward compatibility. You need to remove this prop if you want to upgrade to the new auth provider."),(0,t.yg)("pre",{parentName:"admonition"},(0,t.yg)("code",{parentName:"pre",className:"language-diff"},"useLogin({\n-       v3LegacyAuthProviderCompatible: true,\n})\n"))),(0,t.yg)("p",null,"Unlike the previous version, ",(0,t.yg)("strong",{parentName:"p"},"refine@4")," requires all auth methods to resolve promises. Therefore, if you used auth hooks in your applications before, they need to be updated accordingly."),(0,t.yg)("p",null,"To better show the differences between the usage of auth hooks between the two versions, let's create two wrapper components that render children according to the authentication status:"),(0,t.yg)("p",null,"Auth Provider v3:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useAuthenticated } from "@pankod/refine-core";\n\nexport const Authenticated: React.FC = ({ children }) => {\n  const { isSuccess, isLoading, isError } = useAuthenticated();\n\n  if (isLoading) {\n    return <div>loading...</div>;\n  }\n\n  if (isError) {\n    return null;\n  }\n\n  if (isSuccess) {\n    return <>{children}</>;\n  }\n\n  return null;\n};\n')),(0,t.yg)("p",null,"Auth Provider v4:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useIsAuthenticated } from "@refinedev/core";\n\nexport const Authenticated: React.FC = ({ children }) => {\n  const { isLoading, data } = useIsAuthenticated();\n\n  if (isLoading) {\n    return <div>loading...</div>;\n  }\n\n  if (data.error) {\n    return null;\n  }\n\n  if (data.authenticated) {\n    return <>{children}</>;\n  }\n\n  return null;\n};\n')),(0,t.yg)("p",null,"Though auth hooks should be familiar, they need to updated according to the new system."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider#hooks-and-components"},"Please refer to the hooks documentation for more information."))),(0,t.yg)("h2",{id:"backward-compatibility"},"Backward compatibility"),(0,t.yg)(c,{id:"backward-compatibility",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine")," still supports the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider@v3")," for backward compatibility. We changed its name to ",(0,t.yg)("inlineCode",{parentName:"p"},"legacyAuthProvider")," and it will be removed in the next major version. If you want to continue using the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider@v3")," you can use it as ",(0,t.yg)("inlineCode",{parentName:"p"},"legacyAuthProvider")," in your project."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-diff"},'- import { AuthProvider } from "@refinedev/core";\n+ import { LegacyAuthProvider } from "@refinedev/core";\n\n- const authProvider: AuthProvider = {/* ... */}\n+ const authProvider: LegacyAuthProvider = {/* ... */}\n\nconst App = () => {\n    return (\n        <Refine\n-           authProvider={authProvider}\n+           legacyAuthProvider={authProvider}\n        >\n            <AppLayout />\n        </Refine>\n    );\n};\n\n')),(0,t.yg)("p",null,"Additionally, you need to add ",(0,t.yg)("inlineCode",{parentName:"p"},"v3LegacyAuthProviderCompatible: true")," to your auth hooks in order to continue using ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider@v3")," in your project."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useLogin } from "@refinedev/core";\n\nconst login = useLogin({\n  // highlight-next-line\n  v3LegacyAuthProviderCompatible: true,\n});\n'))))}h.isMDXComponent=!0}}]);