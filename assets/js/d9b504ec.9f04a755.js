"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>m});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"React useMemo Hook Guide with Examples",description:"Improve React app performance with the useMemo() hook.",slug:"react-usememo",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/social2.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-usememo",source:"@site/blog/2024-01-17-react-use-memo.md",title:"React useMemo Hook Guide with Examples",description:"Improve React app performance with the useMemo() hook.",date:"2024-01-17T00:00:00.000Z",formattedDate:"January 17, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:8.875,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React useMemo Hook Guide with Examples",description:"Improve React app performance with the useMemo() hook.",slug:"react-usememo",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/social2.png",hide_table_of_contents:!1},prevItem:{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref"},nextItem:{title:"The Important Differences between URI VS URL",permalink:"/blog/uri-vs-url"},relatedPosts:[{title:"refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of Refine and react-admin",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.395,date:"2021-11-26T00:00:00.000Z"},{title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",permalink:"/blog/react-tooltip",formattedDate:"May 23, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:13.47,date:"2023-05-23T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.905,date:"2022-11-24T00:00:00.000Z"}],authorPosts:[{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.75,date:"2022-10-21T00:00:00.000Z"},{title:"Setting Up the Client App",description:"We'll initialize our Pixels app using Refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-2",formattedDate:"February 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:15.04,date:"2023-02-15T00:00:00.000Z"},{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",permalink:"/blog/javascript-try-catch-finally",formattedDate:"January 30, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.42,date:"2024-01-30T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is React useMemo ?",id:"what-is-react-usememo-",level:2},{value:"Resource Intensive Functions in React: Why Use React <code>useMemo</code> ?",id:"resource-intensive-functions-in-react-why-use-react-usememo-",level:3},{value:"Optimizing Expensive Utility Functions with React <code>useMemo</code> Hook",id:"optimizing-expensive-utility-functions-with-react-usememo-hook",level:2},{value:"Project Overview",id:"project-overview",level:3},{value:"Code Investigation",id:"code-investigation",level:3},{value:"React useMemo: How to Cache the Value of Expensive Utilities",id:"react-usememo-how-to-cache-the-value-of-expensive-utilities",level:2},{value:"Using React useMemo with Dependencies",id:"using-react-usememo-with-dependencies",level:2},{value:"When Not to Use React <code>useMemo</code>",id:"when-not-to-use-react-usememo",level:3},{value:"Summary",id:"summary",level:2},{value:"Live Example",id:"live-example",level:2}],u=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const h={toc:m};function g(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"This article was last updated on January 17, 2024 to reflect the latest changes to the React useMemo API and to provide a more explanations of how React.useMemo() works."))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This post is about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook in React. We demonstrate the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," for caching the value of expensive functions in a React app and examine the impact from the browser console."),(0,o.kt)("p",null,"This is the second post in the three part ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"React Memoization Series")," hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/"},"Refine.dev blog"),"."),(0,o.kt)("p",null,"The three parts are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://refine.dev/blog/react-memo-guide/"},"React Memo Guide with Examples")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://refine.dev/blog/react-usememo/"},"React useMemo Hook Guide With Examples")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://refine.dev/blog/react-usecallback-guide/"},"Memoization in React - How useCallback Works"))),(0,o.kt)("p",null,"In this post, we dive into the details of the ",(0,o.kt)("strong",{parentName:"p"},"useMemo")," hook with an extension of the example demonstrated in the first post titled ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"React Memo Guide with Examples"),"."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-react-usememo-"},"What is React useMemo?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#resource-intensive-functions-in-react-why-use-react-usememo-"},"Resource Intensive Functions in React: Why Use React ",(0,o.kt)("inlineCode",{parentName:"a"},"useMemo"),"?")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#optimizing-expensive-utility-functions-with-react-usememo-hook"},"Optimizing Expensive Utility Functions with React ",(0,o.kt)("inlineCode",{parentName:"a"},"useMemo")," Hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#react-usememo-how-to-cache-the-value-of-expensive-utilities"},"React useMemo: How to Cache the Value of Expensive Utilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-react-usememo-with-dependencies"},"Using React useMemo with Dependencies"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#when-to-use-react-usememo"},"When to Use React ",(0,o.kt)("inlineCode",{parentName:"a"},"useMemo()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#when-not-to-use-react-usememo"},"When Not to Use React ",(0,o.kt)("inlineCode",{parentName:"a"},"useMemo")))))),(0,o.kt)("h2",{id:"what-is-react-usememo-"},"What is React useMemo ?"),(0,o.kt)("p",null,"React ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useMemo"},(0,o.kt)("inlineCode",{parentName:"a"},"useMemo()"))," hook is a function that caches the value produced from an expensive function used inside a React component. It accepts the expensive function and works by storing the value produced from the function when that is passed the same arguments repeatedly. When different arguments are passed, it returns the new value and updates the cache."),(0,o.kt)("p",null,"Caching an expensive function's value with ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," is useful in optimizing the performance of a React component - as doing so minimizes repeating heavy computations."),(0,o.kt)("h3",{id:"resource-intensive-functions-in-react-why-use-react-usememo-"},"Resource Intensive Functions in React: Why Use React ",(0,o.kt)("inlineCode",{parentName:"h3"},"useMemo")," ?"),(0,o.kt)("p",null,"An expensive function is typically a resource intensive function that performs heavy and repetitive computations. In React, data processing, transformation and manipulation utilities like sorting functions, filters and mappers are commonly used costly functions. Such data heavy functions consume a lot of application resources (memory and time, which cost the application with billing). They slow down a React application and contributes to poor performance."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"'s caching helps bypass the expensive function's repetitive heavy processes when it is invoked with the same parameters - thereby improving performance of the React component."),(0,o.kt)("h2",{id:"optimizing-expensive-utility-functions-with-react-usememo-hook"},"Optimizing Expensive Utility Functions with React ",(0,o.kt)("inlineCode",{parentName:"h2"},"useMemo")," Hook"),(0,o.kt)("p",null,"In the sections that follow, we demonstrate the use of React ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," hook in a demo blog app that we explored in ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"Part I"),". Part I demonstrates the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," for memoizing a component, i.e. the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," component."),(0,o.kt)("p",null,"In this post, we'll implement caching of a sorting function with ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," and examine how it prevents recalculation tasks from the browser's console."),(0,o.kt)("p",null,"But before that, let's get a refresher of what's going on in the demo app."),(0,o.kt)("h3",{id:"project-overview"},"Project Overview"),(0,o.kt)("p",null,"We recommend you follow along from Part I: ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"React Memo Guide with Examples"),". This way, you should already have the app cloned, opened in a code editor, installed, and up and running in a browser. You should also be familiar with the components before we make the changes with ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"."),(0,o.kt)("p",null,"The demo app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships and their state changes - especially for this post, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," and",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," components."),(0,o.kt)("p",null,"Take a particular note of the sorting function in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/utils/sortPosts.js"),", which is used for sorting posts inside ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"Here you can find the example app's live code")),(0,o.kt)("p",null,"The discussion of this post is focused on optimizing a React component's performance by memoizing the value of resource intensive functions, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()"),". React's ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook is intended for this purpose."),(0,o.kt)("h3",{id:"code-investigation"},"Code Investigation"),(0,o.kt)("p",null,"Let's start with examining what's happening in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," component. It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { useState } from "react";\nimport Blog from "./components/Blog";\n\nfunction App() {\n  const [signedIn, setSignedIn] = useState(false);\n  const handleClick = () => setSignedIn(!signedIn);\n\n  // console.log(\'Rendering App component\');\n\n  return (\n    <main>\n      <nav className="navbar">\n        <button className="btn btn-danger" onClick={handleClick}>\n          Sign Out\n        </button>\n      </nav>\n      <Blog signedIn={signedIn} setSignedIn={setSignedIn} />\n    </main>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"As we can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," component houses the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," component."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},'import React, { useEffect, useMemo, useState } from "react";\nimport fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";\nimport allPosts from "./../data/allPosts.json";\nimport sortPosts from "../utils/sortPosts";\nimport LatestPost from "./LatestPost";\nimport UserPostsIndex from "./UserPostsIndex";\n\nconst Blog = ({ signedIn }) => {\n  const [updatedPosts, setUpdatedPosts] = useState(allPosts);\n  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());\n\n  const getLatestPosts = () => {\n    const posts = fetchUpdatedPosts();\n    setUpdatedPosts(posts);\n  };\n\n  const sortedPosts = sortPosts(updatedPosts);\n  // const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);\n\n  useEffect(() => {\n    const id = setInterval(() => setLocalTime(new Date().toLocaleTimeString()), 1000);\n    return () => clearInterval(id);\n  }, []);\n\n  console.log("Rendering Blog component");\n\n  return (\n    <div className="container">\n      <h1 className="m-1 p-1 text-center heading-lg">Memoization in React</h1>\n      <div className="m-1 p-2 ">\n        <div className="my-1 p-2 box">\n          <div className="latest-posts-top">\n            <h3 className="heading-md my-1 p-1">Latest posts</h3>\n            <div className="p-1">{localTime}</div>\n          </div>\n          <div className="my-1">\n            <button className="btn btn-primary" onClick={getLatestPosts}>\n              Get&nbsp;Latest&nbsp;Post\n            </button>\n          </div>\n          <hr className="hr my-2" />\n          <LatestPost signedIn={signedIn} post={sortedPosts[0]} />\n        </div>\n        <UserPostsIndex signedIn={signedIn} />\n      </div>\n    </div>\n  );\n};\n\n// export default Blog;\nexport default React.memo(Blog);\n')),(0,o.kt)("p",null,"We'd like to focus particularly on the ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," utility function which is used to sort posts stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts")," can get expensive if passed a long array of posts."),(0,o.kt)("p",null,"We are fetching the posts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchUpdatedPosts")," function used inside ",(0,o.kt)("inlineCode",{parentName:"p"},"getLatestPosts"),". At the moment, we are only sorting 101 items returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchUpdatedPosts()"),", but in a real application, the number can be much higher and consume resources at scale. Thus, ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts")," is an expensive function."),(0,o.kt)("p",null,"Things get worse when this component re-renders due to parent re-renders or the component's internal state changes."),(0,o.kt)("p",null,"For example, if we look inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook, we are updating the locale time string and storing it in ",(0,o.kt)("inlineCode",{parentName:"p"},"localTime")," for our clock. ",(0,o.kt)("inlineCode",{parentName:"p"},"localTime")," updates every second, and each state change in ",(0,o.kt)("inlineCode",{parentName:"p"},"localTime")," triggers a re-render of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,o.kt)("p",null,"The clock does not represent a genuine UI feature for us here, but it is there to make a point about how frequent re-renders complicate things with expensive utility functions. It gives the same effect as state changes on a social media feed like those in LinkedIn or Facebook."),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," logs ",(0,o.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," to the console and returns a sorted array from the passed in an array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/utils/sortPosts"',title:'"src/utils/sortPosts"'},'const sortPosts = (posts) => {\n  console.log("Sorting posts...");\n  return posts.sort((a, b) => b.id - a.id);\n};\n\nexport default sortPosts;\n')),(0,o.kt)("p",null,"If we look at the console, we see that ",(0,o.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," is being logged at 1000ms intervals, i.e. with the tick of our clock:"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo1.png",alt:"react usememo"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"This shows ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," is called at every re-render of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," due to ",(0,o.kt)("inlineCode",{parentName:"p"},"localTime")," state updates. An expensive function, invoked every second for no useful reason, is costly for the app. We don't want ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," to be called if ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is not changed."),(0,o.kt)("p",null,"So, we need to leverage ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook in order to memoize ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts")," so that it does not execute anytime other than when ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," changes."),(0,o.kt)("h2",{id:"react-usememo-how-to-cache-the-value-of-expensive-utilities"},"React useMemo: How to Cache the Value of Expensive Utilities"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," helps us cache the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," between ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),"'s re-renders. This will prevent its unnecessary execution when ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," remains unchanged while re-renders keep happening due to changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"localTime"),"."),(0,o.kt)("p",null,"So, in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),", Let's use the memoized version of ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"-- const sortedPosts = sortPosts(updatedPosts);\n//highlight-next-line\n++ const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);\n")),(0,o.kt)("p",null,"After this change, examining our browser console, we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," has been logged only once, indicating only one invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," even though the component keeps re-rendering every second:"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo2.png",alt:"react usememo"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"This gives us a huge performance gain."),(0,o.kt)("h2",{id:"using-react-usememo-with-dependencies"},"Using React useMemo with Dependencies"),(0,o.kt)("p",null,"Notice the dependency array of ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()"),", passed as the second argument, ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts"),". We are asking the hook to re-execute ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," and renew the memo when ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," changes."),(0,o.kt)("p",null,"Let's now try to change the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts"),". In the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog/>")," component, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button, which is used to fetch latest posts on demand. Every time ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button is clicked, ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is updated with the invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"getLatestPosts()"),"."),(0,o.kt)("p",null,"When the state of ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is changed, a re-render of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," is triggered, which leads to a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," with the new value of ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," passed in."),(0,o.kt)("p",null,"If we check our console while clicking the button, we can clearly see ",(0,o.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," being logged for each click:"),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo3.png",alt:"react usememo"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"This indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"sotPosts()")," executes and renews the cache when its dependency, ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts"),", gets updated."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h3",{parentName:"admonition",id:"when-to-use-react-usememo"},"When to Use React ",(0,o.kt)("inlineCode",{parentName:"h3"},"useMemo()")),(0,o.kt)("p",{parentName:"admonition"},"It is important to notice that, if we remove the dependency from ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sortPosts()")," will not be invoked when ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," change:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const sortedPosts = useMemo(() => sortPosts(updatedPosts), []);\n")),(0,o.kt)("p",{parentName:"admonition"},"In other words, there is no sorting going on when we actually need it:"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo4.png",alt:"react usememo"})),(0,o.kt)("br",null),(0,o.kt)("p",{parentName:"admonition"},"So it is important that we leverage ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," when the execution of the utility function depends on relevant state changes. In our case, execution should depend on ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts"),"."),(0,o.kt)("p",{parentName:"admonition"},"It is also important to know that ",(0,o.kt)("strong",{parentName:"p"},"useMemo")," returns a value, as opposed to a function. In other words, React ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," should be used only to memoize the value returned from a function, not the function itself.This is what differentiates it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook, which returns a memoized function.")),(0,o.kt)("h3",{id:"when-not-to-use-react-usememo"},"When Not to Use React ",(0,o.kt)("inlineCode",{parentName:"h3"},"useMemo")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," is preferred for memoizing a value rather than a callback function. We should not use ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," for memoizing a function such as a callback."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this post, we demonstrated the use of React ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook and examined how it plays a crucial role in optimizing the performance of a component by memoizing an expensive utility function. We noticed that it is important to specify the dependencies of ",(0,o.kt)("strong",{parentName:"p"},"useMemo")," so that the memo is re-computed and renewed when the state of the dependencies change."),(0,o.kt)("p",null,"We also learned that the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," hook should be used to cache values of a function and not for memoizing the function itself."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usecallback-guide/"},"next post")," in the ",(0,o.kt)("strong",{parentName:"p"},"React Memoization Series"),", we demonstrate function memoization using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook."),(0,o.kt)("h2",{id:"live-example"},"Live Example"),(0,o.kt)(u,{path:"blog-react-memoization-memo",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);