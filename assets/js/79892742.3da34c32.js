"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=l(r),d=n,m=y["".concat(u,".").concat(d)]||y[d]||s[d]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},31030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>s});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"store-your-repository",title:"5. Store your repository online",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"3.xx.xx/tutorial/getting-started/deploy-project"}},u=void 0,l={unversionedId:"tutorial/getting-started/store-your-repository",id:"version-3.xx.xx/tutorial/getting-started/store-your-repository",title:"5. Store your repository online",description:"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/4-store-your-repository.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/store-your-repository",permalink:"/docs/3.xx.xx/tutorial/getting-started/store-your-repository",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/4-store-your-repository.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1709189469,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:4,frontMatter:{id:"store-your-repository",title:"5. Store your repository online",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"3.xx.xx/tutorial/getting-started/deploy-project"}}},c={},s=[{value:"Create a repository on GitHub",id:"create-a-repository-on-github",level:2},{value:"Commit your local code to GitHub",id:"commit-your-local-code-to-github",level:2},{value:"See your project on GitHub",id:"see-your-project-on-github",level:2}],y=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=y("Checklist"),m=y("ChecklistItem"),f={toc:s};function g(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are already proficient in git and have your own preferred workflow, you can create a new GitHub repository for your project using your method of choice. Once you have done so, you can move on to the next page: ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/getting-started/deploy-project"},'"Deploy your app to the Web"'),".")),(0,o.kt)("h2",{id:"create-a-repository-on-github"},"Create a repository on GitHub"),(0,o.kt)("p",null,"To create a repository on GitHub, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and log in with your account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the plus icon in the top right corner of the page and select "New repository".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a name for your repository and a brief description (optional).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose whether you want your repository to be public or private.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Create repository".'))),(0,o.kt)("p",null,"For more detailed instructions and options, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"GitHub documentation"),"."),(0,o.kt)("h2",{id:"commit-your-local-code-to-github"},"Commit your local code to GitHub"),(0,o.kt)("p",null,"After you have created a repository on GitHub, you will need to commit your local code to the repository. This will allow you to store and manage your project's code on GitHub."),(0,o.kt)("p",null,"To commit your code to GitHub, you will need to use git commands in the terminal. If you are not familiar with git, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs"},"git documentation")," or follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to your project directory in the terminal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect your local repository to the remote repository on GitHub by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote add origin <url>"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"<url>")," is the URL of your GitHub repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add your changes to the staging area by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git add ."),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your changes by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},'git commit -m "Initial commit"'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your changes to GitHub by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git push -u origin master"),"."))),(0,o.kt)("p",null,"For more detailed instructions and options, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git"},"GitHub documentation"),"."),(0,o.kt)("h2",{id:"see-your-project-on-github"},"See your project on GitHub"),(0,o.kt)("p",null,"To confirm that your project has been successfully stored on GitHub, go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and navigate to your list of repositories. Select the new repository you created, and verify that it contains your project files."),(0,o.kt)(d,{mdxType:"Checklist"},(0,o.kt)(m,{id:"store-your-repo",mdxType:"ChecklistItem"},"I created a repository on GitHub."),(0,o.kt)(m,{id:"store-your-repo-2",mdxType:"ChecklistItem"},"I uploaded my project to GitHub.")))}g.isMDXComponent=!0}}]);