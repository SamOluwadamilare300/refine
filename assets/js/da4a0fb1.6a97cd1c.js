"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",source:"@site/blog/2022-08-29-usestate-mistakes.md",title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:14.625,hasTruncateMarker:!0,authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],frontMatter:{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},prevItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},nextItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},relatedPosts:[{title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.755,date:"2022-08-04T00:00:00.000Z"},{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",permalink:"/blog/meta-stylex",formattedDate:"December 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.11,date:"2023-12-13T00:00:00.000Z"},{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",description:"With the Refine being headless, we may use any UI we choose for our Admin Panel. In this tutorial, we'll create a Nostalgic-style admin panel using Refine and React95 UI.",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.485,date:"2022-03-22T00:00:00.000Z"}],authorPosts:[{title:"How to become a modern Node.js developer?",description:"The most essential skills to have as a modern Node.js developer",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.74,date:"2022-09-06T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],p={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The most challenging aspect of developing any application is often managing its state. However, we are often required to manage several pieces of state in our application, such as when data is retrieved from an external server or updated in the app."),(0,r.kt)("p",null,"The difficulty of state management is the reason why so many state management libraries exist today - and more are still being developed. Thankfully, React has several built-in solutions in the form of hooks for state management, which makes managing states in React easier."))}d.isMDXComponent=!0}}]);