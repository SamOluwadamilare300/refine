"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43075],{58860:(e,o,t)=>{t.d(o,{xA:()=>m,yg:()=>g});var n=t(37953);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},m=function(e){var o=s(e.components);return n.createElement(l.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},y=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,g=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return t?n.createElement(g,r(r({ref:o},m),{},{components:t})):n.createElement(g,r({ref:o},m))}));function g(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=y;var c={};for(var l in o)hasOwnProperty.call(o,l)&&(c[l]=o[l]);c.originalType=e,c[d]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},33014:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});t(37953);var n=t(58860);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})),e}function r(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",slug:"docker-copy",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/social.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/docker-copy",source:"@site/blog/2022-12-28-docker-copy.md",title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",date:"2022-12-28T00:00:00.000Z",formattedDate:"December 28, 2022",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.1,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",slug:"docker-copy",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card"},nextItem:{title:"Dynamic Forms with React Hook Form",permalink:"/blog/dynamic-forms-in-react-hook-form"},relatedPosts:[{title:"What is Version Control and Benefits of Using It?",description:"Version control systems are essential to any successful software project. Understand version control fundamentals and compare version control systems.",permalink:"/blog/version-control",formattedDate:"February 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.705,date:"2024-02-26T00:00:00.000Z"},{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",description:"We'll discuss the importance of restarting pods in Kubernetes, the different methods to do so, and the best practices to follow.",permalink:"/blog/kubectl-restart-pod",formattedDate:"October 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.14,date:"2023-10-22T00:00:00.000Z"},{title:"What is Headless CMS?",description:"We'll check out what a headless CMS is and its benefits.",permalink:"/blog/headless-cms",formattedDate:"May 10, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.4,date:"2024-05-10T00:00:00.000Z"}],authorPosts:[{title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",permalink:"/blog/django-rest-framework",formattedDate:"April 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.68,date:"2024-04-03T00:00:00.000Z"},{title:"How to Create a GraphQL API with Python and Django",description:"We will discuss how to create a GraphQL API with Python.",permalink:"/blog/graphql-with-python",formattedDate:"May 7, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.395,date:"2024-05-07T00:00:00.000Z"},{title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",permalink:"/blog/kubernetes-statefulset-vs-deployment",formattedDate:"January 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.095,date:"2024-01-04T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to copy files in Docker",id:"how-to-copy-files-in-docker",level:2},{value:"How docker copy command works",id:"how-docker-copy-command-works",level:2},{value:"Difference between Copy and Add command",id:"difference-between-copy-and-add-command",level:2},{value:"Limitations of Copy command",id:"limitations-of-copy-command",level:2},{value:"When should you use Docker copy",id:"when-should-you-use-docker-copy",level:2}],p={toc:d},y="wrapper";function g(e){var{components:o}=e,t=r(e,["components"]);return(0,n.yg)(y,i(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(o){a(e,o,t[o])}))}return e}({},p,t),{components:o,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"We will discuss how to copy files in Docker using the docker copy command. The ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," command is a powerful command through which you can move files between your host file system and your Docker containers. It works with both files and directories."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-to-copy-files-in-docker"},"How to copy files in Docker")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-docker-copy-command-works"},"How docker copy command works")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#difference-between-copy-and-add-command"},"Difference between Copy and Add command")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#limitations-of-copy-command"},"Limitations of Copy command")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#when-should-you-use-docker-copy"},"When should you use Docker copy"))),(0,n.yg)("h2",{id:"how-to-copy-files-in-docker"},"How to copy files in Docker"),(0,n.yg)("p",null,"Copying important files and directories is an essential part of container building. There are three ways to copy files in Docker:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"docker CP")," command"),(0,n.yg)("li",{parentName:"ul"},"Dockerfile ",(0,n.yg)("inlineCode",{parentName:"li"},"COPY")," command"),(0,n.yg)("li",{parentName:"ul"},"Using volume mounts")),(0,n.yg)("p",null,"Today we will discuss the ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," command in detail. We will also touch upon the ",(0,n.yg)("inlineCode",{parentName:"p"},"COPY")," command in Dockerfile. Let\u2019s start with the ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," command first. ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," is a powerful command through which you can move files between your host file system and your Docker containers. It works with both files and directories.\nThe ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command is the quickest way to copy files to and from docker container. The ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command is very similar to the unix \u201ccp\u201d command. The basic syntax of the command is as follows:\n",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp <src> <dest>")),(0,n.yg)("p",null,"If you are running from the windows prompt, then you need to mention the container name/ID as part of the source. Let\u2019s try one example. The ",(0,n.yg)("inlineCode",{parentName:"p"},"docker ps")," command will display the running containers."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image1.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Note the ID of the running container you want the files to copied to. In above example the container ID is \u201c613a1a58b70d\u201d. If you have opened the terminal/CLI for a specific container, then no need to mention the container ID."),(0,n.yg)("p",null,"Now let\u2019s find the files in the container through basic ",(0,n.yg)("inlineCode",{parentName:"p"},"ls")," command."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image2.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"The below command will copy the file ",(0,n.yg)("inlineCode",{parentName:"p"},"app.js")," from container to host file system in the folder ",(0,n.yg)("inlineCode",{parentName:"p"},"D:/DockerCopy"),". Note the container ID is mentioned in the source."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image3.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Instead of ID, you can mention container name as well. See the example below:"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image4.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Just reverse the command and you can copy the file from host file system to the container. The below example will copy a text file named \u201ctocopy.txt\u201d from host file system to the container."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image5.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"To verify the successfully copy, run the ",(0,n.yg)("inlineCode",{parentName:"p"},"ls")," command in the container terminal. You can see the file copied to container."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image6.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"You can use the same command to copy not just single file but whole folder as well."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image7.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image8.png",alt:"docker copy command"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Note that the docker ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command assumes that container path is relative to the container's / (root) directory. Also, the ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command will work regardless of container is running or stopped."),(0,n.yg)("p",null,"There are only two optional arguments for this command:\n",(0,n.yg)("inlineCode",{parentName:"p"},"-a: Archive mode. It preserves all uid/gid information of the files to be copied"),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"-L: Always follow symbolic links in SRC")),(0,n.yg)("p",null,"You can also use the ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," command to copy files between two containers. Just use the container name or ID in the source and destination paths."),(0,n.yg)("p",null,"##\xa0Copy through Dockerfile\nLet\u2019s discuss how to copy files through dockerfile copy command. The basic purpose of Dockerfile is to build Docker image, which is then converted into Docker containers. Dockerfiles can contain different commands, one of which is ",(0,n.yg)("inlineCode",{parentName:"p"},"COPY"),". The ",(0,n.yg)("inlineCode",{parentName:"p"},"COPY")," command allows us to copy a file or folder from the host system into the docker image. The copied files become a part of every container that is created from that docker image."),(0,n.yg)("p",null,"The syntax is same as the cp command discussed above:\n",(0,n.yg)("inlineCode",{parentName:"p"},"COPY <source> <destination>"),"\nThe below example will copy index.html to the container to replace the default index.html file.\n",(0,n.yg)("inlineCode",{parentName:"p"},"\u2026\nCOPY index.html /var/www/html\n\u2026"),"\nIf you build the docker image and run the container, you will see the file will be copied. Note that the ",(0,n.yg)("inlineCode",{parentName:"p"},"COPY")," command cannot be used copy files between your host and a running container. The sole purpose of ",(0,n.yg)("inlineCode",{parentName:"p"},"COPY")," command is to add files in the docker image during the construction process."),(0,n.yg)("h2",{id:"how-docker-copy-command-works"},"How docker copy command works"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," command is used to copy files to/from your docker container to the host file system. This command works even if the container is not running. As Docker uses layers for storing images, when you run the container, Docker creates another layer on top of the existing layer. The new layer contains all the changes done inside the container. Note that it is not a data volume like a file system or a directory that we can mount directly to a docker container. The data inside the container is managed by the storage driver. Data is present inside the block level of the parent image of the container, and this is where the ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command is executed. Container is actually a snapshot of the image so it does not have the block, but it has a pointer to the block on the nearest parent image where it is actually residing. It reads the respective block from there and copies it upon execution of ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," command."),(0,n.yg)("h2",{id:"difference-between-copy-and-add-command"},"Difference between Copy and Add command"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"ADD")," command has been there even before the ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command. Although the ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command essentially performs the same function i.e. copying files and folders to a docker container. However, there are a few additional features in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Add")," command."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can mention a URL as source. The command will download the files from the URL and will copy them to the destination.\n",(0,n.yg)("inlineCode",{parentName:"p"},"ADD http://website.com/folder  /destination/folder"),"\nThe above command will download all files from the source folder and will copy them to the destination folder of the container.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can mention a compressed file in the source, and it will decompress the contents and then copy them to the destination.\n",(0,n.yg)("inlineCode",{parentName:"p"},"ADD source.file.gzip /destination/folder"),"\nThe above example will extract the contents of a local zip file to the destination folder. Note that you cannot mention a URL of a compressed file as a source; the compressed file must be from the local file system. This technique will stop creating an additional image layer and will save space too."))),(0,n.yg)("p",null,"However, in spite of all the extra features provided by ",(0,n.yg)("inlineCode",{parentName:"p"},"ADD")," command, Docker discourages its use because of safety reasons. Docker suggests using only the ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command if copying a local file. If you want to download and copy files from the internet, then it suggests using the ",(0,n.yg)("inlineCode",{parentName:"p"},"curl")," command with a ",(0,n.yg)("inlineCode",{parentName:"p"},"RUN")," command.\nThe only recommended use of ",(0,n.yg)("inlineCode",{parentName:"p"},"ADD")," is to extract the local tar file into the image, as shown in below example:\n",(0,n.yg)("inlineCode",{parentName:"p"},"ADD rootfs.tar.xz /")),(0,n.yg)("h2",{id:"limitations-of-copy-command"},"Limitations of Copy command"),(0,n.yg)("p",null,"Despite of all he usefulness of Docker ",(0,n.yg)("inlineCode",{parentName:"p"},"cp")," command, it has certain limitations, as below:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You cannot use it to copy files between two containers. You will need to multi-stage it by copying files from container 1 to a host file system and then copying from the host file system to container 2"),(0,n.yg)("li",{parentName:"ul"},"You cannot use it to download files from a URL and then copy them. Files must be present on the local file system"),(0,n.yg)("li",{parentName:"ul"},"You cannot copy certain system files such as resources under ",(0,n.yg)("inlineCode",{parentName:"li"},"/proc"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"/sys"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"/dev"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"tmpfs"),", etc.")),(0,n.yg)("h2",{id:"when-should-you-use-docker-copy"},"When should you use Docker copy"),(0,n.yg)("p",null,"Following are some of the common use cases for the docker copy command."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can copy any important file from inside a docker container to the host file system, which will allow you to create a custom docker image the way you want it. E.g. you can run the official Nginx docker image and then use the ",(0,n.yg)("inlineCode",{parentName:"p"},"COPY")," command to copy the Nginx configuration file to the host file system")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," is very useful when debugging containers or when working in a non-production environment. If you have to manually inject a temporary configuration file or extract a buried log, it can be extremely helpful. Using ",(0,n.yg)("inlineCode",{parentName:"p"},"docker cp")," is more convenient and faster than rebuilding the entire image every time you update the code."))))}g.isMDXComponent=!0}}]);