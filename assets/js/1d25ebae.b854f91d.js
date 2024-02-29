"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-10-typescript-partial/social.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/typescript-partial-utility-type",source:"@site/blog/2022-10-10-typescript-partial.md",title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:3.925,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-10-typescript-partial/social.png",hide_table_of_contents:!1},prevItem:{title:"Why you should prefer using pnpm over npm and yarn?",permalink:"/blog/pnpm-vs-npm-and-yarn"},nextItem:{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind"},relatedPosts:[{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.475,date:"2022-09-30T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.44,date:"2022-10-03T00:00:00.000Z"},{title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-satisfies-operator",formattedDate:"November 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.41,date:"2023-11-15T00:00:00.000Z"}],authorPosts:[{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",permalink:"/blog/javascript-try-catch-finally",formattedDate:"January 30, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.42,date:"2024-01-30T00:00:00.000Z"},{title:"Building a React Admin Panel with Refine and daisyUI",description:"We'll build a simple React admin panel using Refine and daisyUI.",permalink:"/blog/daisy-ui-react-admin-panel",formattedDate:"September 6, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:60.64,date:"2023-09-06T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.44,date:"2022-10-03T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Optional Registration Scenario",id:"optional-registration-scenario",level:2},{value:"Enter TypeScript <code>Partial&lt;Type&gt;</code>",id:"enter-typescript-partialtype",level:2},{value:"With Interfaces",id:"with-interfaces",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial<>"),". This is the third part of the series titled ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-omit-utility-type/"},"TypeScript Utility Type Series"),"."),(0,r.kt)("p",null,"In the previous post, we went through an example where we derived a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," type by omitting a property from the base type, ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,r.kt)("p",null,"In this post, we will consider an example of ",(0,r.kt)("strong",{parentName:"p"},"TypeScript ",(0,r.kt)("inlineCode",{parentName:"strong"},"Partial<>"))," by modifying our ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," type to assume a more realistic scenario."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#optional-registration-scenario"},"Optional Registration Scenario")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enter-typescript-partialtype"},"Enter TypeScript ",(0,r.kt)("inlineCode",{parentName:"a"},"Partial<Type>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#with-interfaces"},"Partial with Interfaces"))),(0,r.kt)("h2",{id:"optional-registration-scenario"},"Optional Registration Scenario"),(0,r.kt)("p",null,"For our blog, we would have ",(0,r.kt)("inlineCode",{parentName:"p"},"GuestUser"),"s who are not allowed to like or comment on a post. We would allow registered ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber"),"s to like and comment. So, the scenario goes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"GuestUser")," must register with their ",(0,r.kt)("inlineCode",{parentName:"li"},"email")," and become a ",(0,r.kt)("inlineCode",{parentName:"li"},"Subscriber"),"."),(0,r.kt)("li",{parentName:"ul"},"they receive a link to set their password in an email sent to their ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),"."),(0,r.kt)("li",{parentName:"ul"},"they are able to set their ",(0,r.kt)("inlineCode",{parentName:"li"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"lastName")," afterwards.")),(0,r.kt)("p",null,"In such a scenario, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," type we derived previously, which effectively has the shape below, does not deliver our needs the way we want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nconsole.log(subscriber);\n/*\nFrom TypeScript Error:\n"Type \'{ userId: number; macAddress: string; username: string; email: string; }\' is missing the following properties from type \'Subscriber\': password, firstName, lastName"\n\nFrom console:\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,r.kt)("p",null,"TypeScript complains about the inconformity of ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," type. This is because it sets all the fields to be ",(0,r.kt)("strong",{parentName:"p"},"required")," by default. If we set ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastName")," to optional manually, it is happy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password?: string;\n  firstName?: string;\n  lastName?: string;\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,r.kt)("p",null,"But this comes with the overhead of defining ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," manually in the first place and additionally then setting individual optional properties. In real APIs, it's not a good idea to define a shape manually."),(0,r.kt)("h2",{id:"enter-typescript-partialtype"},"Enter TypeScript ",(0,r.kt)("inlineCode",{parentName:"h2"},"Partial<Type>")),(0,r.kt)("p",null,"We want to remove the hassle and do this much more comfortably from the type returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>"),". So what we want to do is set all the properties of the returned type to be optional with ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial<Type>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type SuperbUser = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n};\n\ntype Subscriber = Partial<Omit<SuperbUser, "roles">>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,r.kt)("p",null,"No complains, which is great!"),(0,r.kt)("p",null,"So, we are now free to set values for ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'subscriber.password = "12345678";\nsubscriber.firstName = "Abdullah";\nsubscriber.lastName = "Numan";\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,r.kt)("p",null,"But, like before, TypeScript complains again if we add the properties that disrupts the shape of ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'subscriber.roles = ["Reader", "Commenter"];\n\nconsole.log(subscriber);\n// Property \'roles\' does not exist on type \'Partial<Omit<SuperbUser, "roles">>\'.\n')),(0,r.kt)("p",null,"So, the benefits of using TypeScript to derive a partial type includes its support for partial assignment of the object's properties that is allowed by JavaScript and not allowed by default TypeScript. It also warns about possible undesired assignments to the partial."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"with-interfaces"},"With Interfaces"),(0,r.kt)("p",null,"We get the same result if we use an interface for our base ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n}\n\ntype Subscriber = Partial<Omit<SuperbUser, "roles">>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nsubscriber.password = "12345678";\nsubscriber.firstName = "Abdullah";\nsubscriber.lastName = "Numan";\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,r.kt)("p",null,"We can also refactor the return type from ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>")," into an intermediary type, ",(0,r.kt)("inlineCode",{parentName:"p"},"StrictSubscriber"),", and pass it as the argument of ",(0,r.kt)("strong",{parentName:"p"},"TypeScript Partial"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type StrictSubscriber = Omit<SuperbUser, "roles">;\ntype Subscriber = Partial<StrictSubscriber>;\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we covered partial object transformations with using the utility transformer ",(0,r.kt)("strong",{parentName:"p"},"Partial"),". We found out that it is preferable to setting certain properties of a type to optional manually, especially when dealing with types returned from APIs."))}d.isMDXComponent=!0}}]);