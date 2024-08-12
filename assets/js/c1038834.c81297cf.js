"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28765],{58860:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),h=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=h(a),m=r,u=g["".concat(c,".").concat(m)]||g[m]||d[m]||o;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>g});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",slug:"git-delete-remote-branch-and-local-branch",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/social-2.png",hide_table_of_contents:!1},c=void 0,h={permalink:"/blog/git-delete-remote-branch-and-local-branch",source:"@site/blog/2024-07-11-git-delete.md",title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",date:"2024-07-11T00:00:00.000Z",formattedDate:"July 11, 2024",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.035,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",slug:"git-delete-remote-branch-and-local-branch",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/social-2.png",hide_table_of_contents:!1},prevItem:{title:"A Guide on React Lazy Loading",permalink:"/blog/react-lazy-loading"},nextItem:{title:"React Props Explained with Examples",permalink:"/blog/react-props"},relatedPosts:[{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",permalink:"/blog/low-code-tools",formattedDate:"April 19, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.255,date:"2024-04-19T00:00:00.000Z"},{title:"What is Headless CMS?",description:"We'll check out what a headless CMS is and its benefits.",permalink:"/blog/headless-cms",formattedDate:"May 10, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.4,date:"2024-05-10T00:00:00.000Z"},{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"October 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.365,date:"2023-10-17T00:00:00.000Z"}],authorPosts:[{title:"How to Edit a crontab",description:"Crontab is a powerful scheduling tool in Unix-like systems. This article provides a comprehensive guide on using crontab, covering the basics of creating a crontab, setting up environment variables, scheduling jobs, and error handling.",permalink:"/blog/edit-crontab",formattedDate:"December 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.59,date:"2023-12-27T00:00:00.000Z"},{title:"Docker Alternatives",description:"We'll discuss top alternatives of Docker walking your through their pros and cons and how they compare to Docker.",permalink:"/blog/docker-alternatives",formattedDate:"February 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.35,date:"2024-02-05T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"July 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.565,date:"2024-07-05T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"Why you might need to remove a branch",id:"why-you-might-need-to-remove-a-branch",level:2},{value:"Deleting a GIT local branch",id:"deleting-a-git-local-branch",level:2},{value:"Deleting a Git remote branch",id:"deleting-a-git-remote-branch",level:2},{value:"Deleting a branch with merged changes",id:"deleting-a-branch-with-merged-changes",level:2},{value:"Deleting a git branch with unmerged changes",id:"deleting-a-git-branch-with-unmerged-changes",level:2},{value:"Advanced Scenarios for Branch Deletion",id:"advanced-scenarios-for-branch-deletion",level:2},{value:"Cleaning up local branches",id:"cleaning-up-local-branches",level:3},{value:"Automating Branch Deletion",id:"automating-branch-deletion",level:3},{value:"What are tracking branches and how to delete them",id:"what-are-tracking-branches-and-how-to-delete-them",level:2},{value:"How to delete a branch on Github using web console",id:"how-to-delete-a-branch-on-github-using-web-console",level:2},{value:"Automate Deletion with a Scheduled Task",id:"automate-deletion-with-a-scheduled-task",level:2},{value:"Running on CI/CD Pipelines",id:"running-on-cicd-pipelines",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2},{value:"I am unable to delete my branch",id:"i-am-unable-to-delete-my-branch",level:3},{value:"I deleted a branch by mistake, can I recover it?",id:"i-deleted-a-branch-by-mistake-can-i-recover-it",level:3},{value:"How to automatically delete a branch when it is merge back into master",id:"how-to-automatically-delete-a-branch-when-it-is-merge-back-into-master",level:3},{value:"I am getting an error when I delete a branch having the same name as a tag",id:"i-am-getting-an-error-when-i-delete-a-branch-having-the-same-name-as-a-tag",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:g},m="wrapper";function u(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"This article was last updated on July 10, 2024, to add sections forAutomate Deletion with a Scheduled Task and Using CI/CD Pipelines.")),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Branches are kind of blocks in a repository where we write new features, fix bugs etc. For example, if three developers are working on a project, they can create their own branches and work on them as the branches are isolated, so everyone can work in their branch."),(0,n.yg)("p",null,"A branch can be:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Local \u2013 only on your local machine."),(0,n.yg)("li",{parentName:"ul"},"Remote \u2013 it is on a remote location, for example in the GitHub repo")),(0,n.yg)("p",null,"Actually, there is a third type of branch, which is the reference to the remote branches. During the cleanup, these branches should be cleaned up too.\nToday we will discuss various scenarios related to branch deletion. We will show you how to ",(0,n.yg)("strong",{parentName:"p"},"delete local and remote branches")," on GitHub. We will also go through some common errors while deleting a branch."),(0,n.yg)("p",null,"For this article, we assume you have installed GIT, and you have the access rights to ",(0,n.yg)("strong",{parentName:"p"},"delete a branch"),". Let's start with the need to delete a branch."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#why-you-might-need-to-remove-a-branch"},"Why you might need to remove a branch")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#deleting-a-git-local-branch"},"Deleting a GIT local branch")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#deleting-a-git-remote-branch"},"Deleting a Git remote branch")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#deleting-a-branch-with-merged-changes"},"Deleting a branch with merged changes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#deleting-a-git-branch-with-unmerged-changes"},"Deleting a git branch with unmerged changes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#advanced-scenarios-for-branch-deletion"},"Advanced Scenarios for Branch Deletion")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-are-tracking-branches-and-how-to-delete-them"},"What are tracking branches and how to delete them")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-to-delete-a-branch-on-github-using-web-console"},"How to delete a branch on Github using web console")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#automate-deletion-with-a-scheduled-task"},"Automate Deletion with a Scheduled Task")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#running-on-cicd-pipelines"},"Running on CI/CD Pipelines")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#frequently-asked-questions"},"Frequently asked questions"))),(0,n.yg)("h2",{id:"why-you-might-need-to-remove-a-branch"},"Why you might need to remove a branch"),(0,n.yg)("p",null,"You need to ensure that your Git repository is not a mess of outdated and old branches that are not being worked on anymore. You should perform periodic cleanup of the branches where you would either remove the old branches or you would merge them into the master. Your code repository should be neat, tidy, and easy to navigate."),(0,n.yg)("h2",{id:"deleting-a-git-local-branch"},"Deleting a GIT local branch"),(0,n.yg)("p",null,"Please note that deleting a branch locally will not delete the remote branch. Here is the command to delete branch locally:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'git branch -d "branch name"\n')),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-1.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"The below command will also perform the same function, just a minor syntax difference."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch --delete <branch>\n")),(0,n.yg)("p",null,"Note that the -d option is an abbreviation for --delete, which only removes the branch if it is fully merged in its parent branch. If you have unmerged changes, then it will not remove the branch, and you will get an error. You will need to forcibly remove the branch if you want to delete the branch, irrespective of the merge status. You can use the below command to remove the local branch forcibly:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch -D <branchName>\n")),(0,n.yg)("p",null,'Another point to remember is the rebasing/merging progress. If your branch is in rebasing/merging process, You will see an error "Rebase/Merge in progress", and you won\'t be able to delete your branch. You can forcibly delete if you want to, or you can solve the rebasing/merging before trying again.'),(0,n.yg)("h2",{id:"deleting-a-git-remote-branch"},"Deleting a Git remote branch"),(0,n.yg)("p",null,"To delete a branch from the remote repository, type:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'git push origin -d "branch name"\n')),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-2.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("p",null,'In the above example, the remote branch "dev-testing" is deleted.\nBoth the below commands delete the remote branch, you can use whichever is more intuitive to you.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git push <remote_name> --delete <branch_name>\n")),(0,n.yg)("p",null,"The following command is appropriate if you are on a version of Git older than 1.7.0"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git push <remote_name> :<branch_name>\n")),(0,n.yg)("p",null,'Note that executing "',(0,n.yg)("inlineCode",{parentName:"p"},"git push origin \u2013delete"),' "will delete your remote branch only. Note that the branch name is not mentioned at the end of the command. However, if you put the branch name at the end, it will delete and push it to remote simultaneously.'),(0,n.yg)("h2",{id:"deleting-a-branch-with-merged-changes"},"Deleting a branch with merged changes"),(0,n.yg)("p",null,'When we are deleting a branch having merged changes, we delete it by using small "d" like below:'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch -d <BranchName>\n")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-3.png",alt:"git delete branch"})),(0,n.yg)("h2",{id:"deleting-a-git-branch-with-unmerged-changes"},"Deleting a git branch with unmerged changes"),(0,n.yg)("p",null,'When we are deleting a branch having unmerged changes, then we will need to use the capital "D" to force the deletion like below:'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch -D <branchName>\n")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-4.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Another version of the same command is as below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch --delete --force <branch_name>\n")),(0,n.yg)("p",null,"It will also remove the branch forcibly even if there are unmerged changes in the branch."),(0,n.yg)("h2",{id:"advanced-scenarios-for-branch-deletion"},"Advanced Scenarios for Branch Deletion"),(0,n.yg)("p",null,"I want to share with you some of the tips in advance about deleting branches in Git, so as to ensure our repository remains clean and organized. Here are a few scenarios and how to handle them:"),(0,n.yg)("p",null,"The usage of the double hyphen can also be applied when there are times when we have multiple old branches that we have to delete. It's a very boring job to do them manually, one by one. Here's a quick command for that:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"git branch -d branch1 branch2 branch3\n")),(0,n.yg)("p",null,"This will delete ",(0,n.yg)("inlineCode",{parentName:"p"},"branch1"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"branch2"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"branch3")," all at one go."),(0,n.yg)("h3",{id:"cleaning-up-local-branches"},"Cleaning up local branches"),(0,n.yg)("p",null,"It is good practice to delete the branches that have already been merged with the master branch in order to keep our local repository clean. We can handle this through the script, making it something that can be automated this way:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit branch --merged | grep -v '\\*' | xargs -n 1 git branch -d\n")),(0,n.yg)("p",null,"The script checks out the main branch, fetches all the already-merged branches, and deletes them."),(0,n.yg)("h3",{id:"automating-branch-deletion"},"Automating Branch Deletion"),(0,n.yg)("p",null,"We can take advantage of Git hooks to automatically delete branches upon merging of a pull request. This is achieved by creating a post-merge hook:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Write a file named ",(0,n.yg)("inlineCode",{parentName:"li"},"post-merge")," in the directory ",(0,n.yg)("inlineCode",{parentName:"li"},".git/hooks"),"."),(0,n.yg)("li",{parentName:"ol"},"Insert the script below:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nBRANCH=$(git symbolic-ref --short HEAD)\nif [ "$BRANCH" != "main" ]; then\n  git branch -d $BRANCH\nfi\n')),(0,n.yg)("p",null,"This script removes the branch after merging, in case it is not the main branch."),(0,n.yg)("h2",{id:"what-are-tracking-branches-and-how-to-delete-them"},"What are tracking branches and how to delete them"),(0,n.yg)("p",null,"When we check out a local branch from a remote branch, it automatically creates what is called a tracking branch. These are local branches that have a direct association with a remote branch. It means it exists on our local machine cache but not on the remote repository."),(0,n.yg)("p",null,"If you have deleted a remote branch using the command ",(0,n.yg)("inlineCode",{parentName:"p"},"git push origin :<branchname>"),", its references still exist in local code repo of your team members. Now, you need to delete the local references too. ",(0,n.yg)("inlineCode",{parentName:"p"},"git remote prune origin")," \"deletes the refs to the branches that don't exist on the remote."),(0,n.yg)("p",null,"Another version of the same command is:\n",(0,n.yg)("inlineCode",{parentName:"p"},"git fetch <remote> --prune"),"\nThis will delete all the obsolete remote-tracking branches. A shorter version of the command is below:\n",(0,n.yg)("inlineCode",{parentName:"p"},"git fetch <remote> -p")),(0,n.yg)("p",null,"To delete a particular local remote-tracking branch, you can use following command:\n",(0,n.yg)("inlineCode",{parentName:"p"},"git branch --delete --remotes <remote>/<branch>"),"\nA shorted version of the command is:\n",(0,n.yg)("inlineCode",{parentName:"p"},"git branch -dr <remote>/<branch> ")),(0,n.yg)("p",null,'Note that if you delete a remote branch "X" from the command line using ',(0,n.yg)("inlineCode",{parentName:"p"},"git push"),' then it will also remove the local remote-tracking branch "origin/X" so there is no need to prune the obsolete remote-tracking branch with ',(0,n.yg)("inlineCode",{parentName:"p"},"git fetch \u2013prune")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"git fetch \u2013p"),"."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-5.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"To confirm if the remote tracking branch was delete or not, you can run the following command"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch \u2013remotes\n")),(0,n.yg)("p",null,"And the shorter version is:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git branch \u2013r\n")),(0,n.yg)("h2",{id:"how-to-delete-a-branch-on-github-using-web-console"},"How to delete a branch on Github using web console"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Navigate to the main page of the repository."),(0,n.yg)("li",{parentName:"ol"},"Above the list of files, click branches."),(0,n.yg)("li",{parentName:"ol"},"Navigate to the branch you want to delete, then click delete icon")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-6.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"automate-deletion-with-a-scheduled-task"},"Automate Deletion with a Scheduled Task"),(0,n.yg)("p",null,"You can even set up a scheduled task to delete the merged branches after a time. The commands can run either through a cron job on Unix-like systems or a scheduled task on Windows."),(0,n.yg)("p",null,"Here is an example: a cron job that is run at 12 AM every Sunday:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open crontab file:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"crontab -e\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"And now append this line to add the task to crontab:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"0 0 * * 0 cd /path/to/your/repo && git fetch -p && git branch --merged main | grep -v 'main' | xargs -n 1 git branch -d\n")),(0,n.yg)("p",null,"This will get the latest changes, prune stale branches, and remove branches merged to main."),(0,n.yg)("h2",{id:"running-on-cicd-pipelines"},"Running on CI/CD Pipelines"),(0,n.yg)("p",null,"We can also leverage this opportunity to carry out automated branch deletion within our CI/CD pipeline. For instance, if we are to use GitHub Actions, here is how we can automate the workflow to delete branches:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"name: Delete Merged Branches\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  delete-merged-branches:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repository\n        uses: actions/checkout@v2\n      - name: Delete Merged Branches\n        run: |\n          git fetch -p\n          git branch --merged main | grep -v 'main' | xargs -n 1 git branch -d\n")),(0,n.yg)("p",null,"The workflow is triggered with each push to the main branch and cleans branches merged to main."),(0,n.yg)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,n.yg)("h3",{id:"i-am-unable-to-delete-my-branch"},"I am unable to delete my branch"),(0,n.yg)("p",null,"Solution: You cannot delete a branch you are already on. You must first switch to another branch and then delete the required branch. See the below example:"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-7.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("p",null,'In the above example, we switched to another branch named "dev-arsam" and then we were able to delete the "test" branch successfully.'),(0,n.yg)("h3",{id:"i-deleted-a-branch-by-mistake-can-i-recover-it"},"I deleted a branch by mistake, can I recover it?"),(0,n.yg)("p",null,"Solution: Yes, you should use ",(0,n.yg)("inlineCode",{parentName:"p"},"git reflog")," command and find the SHA1 for the commit at the tip of your deleted branch, then just ",(0,n.yg)("inlineCode",{parentName:"p"},"git checkout [sha]")," . And once you're at that commit, you can just ",(0,n.yg)("inlineCode",{parentName:"p"},"git branch branchname <SHA>")," to recreate the branch from there."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"git reflog")," command is used to record updates made to the tip of branches. It allows to return to commits. After rewriting history, the reflog includes a history of previous branch commits and makes it possible to go back to a particular state if needed."),(0,n.yg)("p",null,'The below snapshot provides an example where a branch named "dev-arsam" will be recovered.'),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-8.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"how-to-automatically-delete-a-branch-when-it-is-merge-back-into-master"},"How to automatically delete a branch when it is merge back into master"),(0,n.yg)("p",null,"To avoid dangling branches, you can set up the configuration so that your branch will be automatically deleted as soon as it is merged into its parent branch e.g. Master branch"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"On GitHub.com, go to the home page of the repository."),(0,n.yg)("li",{parentName:"ol"},"Under your repository name, click Settings."),(0,n.yg)("li",{parentName:"ol"},'Under "Pull Requests", select or unselect Automatically delete head branches.')),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-27-git-delete/git-delete-branch-9.png",alt:"git delete branch"})),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"i-am-getting-an-error-when-i-delete-a-branch-having-the-same-name-as-a-tag"},"I am getting an error when I delete a branch having the same name as a tag"),(0,n.yg)("p",null,'You might get an error if you try to delete a branch having the same name as the tag. You will see an error similar to this "branch-or-tag-name matches more than one".'),(0,n.yg)("p",null,"If you want to specify the deletion of branches and not tag, try the below command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git push origin :refs/heads/branch-name\n")),(0,n.yg)("p",null,"Similarly if you want to specify the deletion of tags and not branch, then use below command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git push origin :refs/tags/tag-name\n")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In this article, we learned about the different ways to delete a branch in Git also answered frequently asked questions related to deleting a branch in Git."))}u.isMDXComponent=!0}}]);