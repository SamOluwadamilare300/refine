"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75213],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var o=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?o.createElement(g,r(r({ref:n},c),{},{components:t})):o.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});t(37953);var o=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",slug:"nodemon",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-30-nodemon/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/nodemon",source:"@site/blog/2024-04-30-nodemon.md",title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",date:"2024-04-30T00:00:00.000Z",formattedDate:"April 30, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:5.845,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",slug:"nodemon",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-30-nodemon/social.png",hide_table_of_contents:!1},prevItem:{title:"Refine Investment Announcement",permalink:"/blog/refine-investment-announcement"},nextItem:{title:"Introduction to Nest JS",permalink:"/blog/nest-js"},relatedPosts:[{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"July 2, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.295,date:"2024-07-02T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"July 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.565,date:"2024-07-05T00:00:00.000Z"}],authorPosts:[{title:"Top Front-End Frameworks in 2024 Worth Your Time and Effort to Master",description:"We'll talk about five frameworks \u2013 React, Refine, Angular, Svelte, and Vue. Each of these has its cool stuff to offer, making them worth the time to learn.",permalink:"/blog/best-front-end-frameworks-in-2024",formattedDate:"December 11, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.155,date:"2023-12-11T00:00:00.000Z"},{title:"Announcing the Release of Refine v4!",description:"This release includes several new features that are designed to enhance the developer experience.",permalink:"/blog/refine-v4-announcement",formattedDate:"March 13, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.575,date:"2023-03-13T00:00:00.000Z"},{title:"The Refine Open Source Hackathon",description:"refine Hackathon is an excellent opportunity for developers to showcase their skills, learn Refine and win prizes!",permalink:"/blog/refine-hackathon",formattedDate:"January 6, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.795,date:"2023-01-06T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Update: Enhanced Watch Mode in Node.js Version 22",id:"update-enhanced-watch-mode-in-nodejs-version-22",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Installing Nodemon",id:"installing-nodemon",level:2},{value:"Using Nodemon",id:"using-nodemon",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:m},u="wrapper";function g(e){var{components:n}=e,t=r(e,["components"]);return(0,o.yg)(u,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){a(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"update-enhanced-watch-mode-in-nodejs-version-22"},"Update: Enhanced Watch Mode in Node.js Version 22"),(0,o.yg)("p",null,"One of the standout features in the latest release of Node.js, ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/en/blog/announcements/v22-release-announce"},"version 22"),", is the improved watch mode. This feature is now considered stable, which means it's no longer experimental and can be relied upon for regular use."),(0,o.yg)("p",null,"Watch mode simplifies developers' lives by automatically restarting the Node.js process whenever it detects changes in the files being monitored. This is particularly useful if you're working on large projects where manual restarts can be tedious and time-consuming."),(0,o.yg)("p",null,"Previously, developers might have used tools like Nodemon and Watchman to manage file changes, especially on Windows, where detecting these changes could be challenging. Watch mode offers a more integrated and straightforward approach, eliminating the need for external tools and streamlining the development process."),(0,o.yg)("p",null,"By using watch mode, you no longer need to manually restart your server or tools like Nodemon after making changes to your code. This saves time and allows you to see the effects of your changes immediately, making your development workflow much more efficient."),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"As a developer, you know how tedious it is to restart the application every time you tweak the code. Nodemon eliminates this hassle by automatically restarting the app whenever any change is detected. It's incredibly helpful as it lets you concentrate on coding without interruption."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://nodemon.io/"},"Nodemon")," watches the files in your project and instantly applies updates by restarting your app\u2014no more manual resets. This has noticeably sped up my development process, making it smoother and more productive. It\u2019s especially crucial in a fast-paced work environment where every second counts."),(0,o.yg)("h2",{id:"installing-nodemon"},"Installing Nodemon"),(0,o.yg)("p",null,"I just went through setting up Nodemon. You install it using npm, the Node.js package manager. Just open your terminal and type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g nodemon\n")),(0,o.yg)("p",null,"This installs Nodemon globally on your system, so you can use it for any project. To make sure it's installed correctly, you can check its version with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon --version\n")),(0,o.yg)("p",null,"If it shows the version, you're all set! Nodemon will now automatically restart your Node.js applications whenever you make changes. It\u2019s a real time-saver, making it smoother to develop without breaking your flow."),(0,o.yg)("h2",{id:"using-nodemon"},"Using Nodemon"),(0,o.yg)("p",null,"Here's a simple Express.js application example using Nodemon:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'// 1. First, install the Express.js and Nodemon modules\nconst express = require("express");\nconst app = express();\n\n// 2. Define a simple endpoint to listen for HTTP requests\napp.get("/", (req, res) => {\n  res.send("Hello, World!");\n});\n\n// 3. Start listening for the application on a specific port\nconst port = 3000;\napp.listen(port, () => {\n  console.log(`Server successfully connected to port ${port}.`);\n});\n')),(0,o.yg)("p",null,"This represents a basic Express.js application. The main file can be named ",(0,o.yg)("inlineCode",{parentName:"p"},"app.js"),", for example. Now let's demonstrate how to use Nodemon to automatically restart this application."),(0,o.yg)("p",null,"First, make sure you're in your project directory where your Node.js application, like an Express.js app, is located."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Install Express.js and Nodemon if you haven\u2019t already.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install express nodemon\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"After installing Nodemon, using it to automatically restart your Node.js apps is simple. Navigate to the directory where your Node.js application is located using the terminal or command prompt. Once you're in the project directory, you can start your Node.js application with Nodemon by typing:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon app.js\n")),(0,o.yg)("p",null,"This command fires up your application with Nodemon, so it automatically restarts whenever you change any files. For instance, if you update the response in your ",(0,o.yg)("inlineCode",{parentName:"p"},"app.js")," from 'Hello, World!' to something else and save, Nodemon immediately restarts and applies the update without you needing to do anything."),(0,o.yg)("p",null,"Also, here\u2019s what you typically see in the terminal when you start:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"[nodemon] 2.0.15\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,json\n[nodemon] starting `node app.js`\nServer successfully connected to port 3000.\n")),(0,o.yg)("p",null,"It shows Nodemon is watching all your files and is ready to restart anytime you make edits."),(0,o.yg)("p",null,"In this output:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] 2.0.15"),": This indicates the version of Nodemon being used."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] to restart at any time, enter 'rs'"),": This message informs you that you can manually restart the application at any time by entering 'rs' in the terminal."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] watching path(s): *.*"),": Nodemon is watching for changes in all files and directories."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] watching extensions: js,json"),": Nodemon is specifically watching for changes in JavaScript and JSON files."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] starting 'node app.js'"),": Nodemon is starting the Node.js application (",(0,o.yg)("inlineCode",{parentName:"li"},"app.js")," in this case)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Server successfully connected to port 3000."),": This message indicates that the Express.js server has successfully started and is listening on port 3000.")),(0,o.yg)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,o.yg)("p",null,"I\u2019ve been diving deeper into Nodemon\u2019s capabilities and found some cool ways to customize its behavior to better suit our projects. Nodemon allows you to tailor its restart rules according to our specific needs, which is super handy."),(0,o.yg)("p",null,"Here\u2019s a breakdown:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"File Watch Patterns"),": You can set Nodemon to watch only specific directories. This is great because it lets us focus on crucial parts of our project without getting distracted by unnecessary restarts."),(0,o.yg)("p",{parentName:"li"},"For instance, if you only want to watch the ",(0,o.yg)("inlineCode",{parentName:"p"},"src")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"config")," directories, your config would look like this:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "watch": ["src", "config"]\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Ignore Patterns"),": We can also tell Nodemon to ignore certain directories that don\u2019t impact our app\u2019s functionality, like log files or public assets. This means Nodemon won\u2019t restart when changes occur in these areas."),(0,o.yg)("p",{parentName:"li"},"Here\u2019s how you could set it up to ignore the ",(0,o.yg)("inlineCode",{parentName:"p"},"logs")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"public")," directories:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "ignore": ["logs", "public"]\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Delaying Restarts"),": If rapid successive changes are causing too many restarts, we can introduce a delay. This gives us a buffer after making changes before Nodemon restarts the app, helping stabilize our development environment."),(0,o.yg)("p",{parentName:"li"},"For adding a one-second delay, you\u2019d configure it like this:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "delay": 1000\n}\n')))),(0,o.yg)("p",null,"These tweaks have made a noticeable difference in managing the development flow, especially in complex projects. I think implementing these could really streamline how we handle automatic restarts in our development process!"),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"As we wrap up discussing Nodemon, I wanted to share some common issues you might run into and how to troubleshoot them. Even though Nodemon simplifies our development by auto-restarting our apps, sometimes it might not work as expected."),(0,o.yg)("p",null,"Here are a few things to check if you encounter problems:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Monitoring Files"),": If Nodemon isn't restarting when you change files, double-check your configuration to ensure it\u2019s watching the right files and directories. Sometimes, if we ignore too many files, Nodemon might miss changes in crucial areas.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Crashes or Non-starts"),": Make sure there are no errors in your Node.js app and that all environment variables are set correctly. These can often stop Nodemon from running properly.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Permissions on Windows"),": If you\u2019re on Windows and facing permission issues, try running Nodemon in an administrator command prompt, which can resolve these problems.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Software Updates"),": Lastly, keeping Nodemon and Node.js updated to their latest versions can solve a lot of known issues."))))}g.isMDXComponent=!0}}]);