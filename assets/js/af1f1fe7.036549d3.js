"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",slug:"docker-swarm",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/docker-swarm",source:"@site/blog/2023-10-05-docker-swarm.md",title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",date:"2023-10-05T00:00:00.000Z",formattedDate:"October 5, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.53,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",slug:"docker-swarm",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png",hide_table_of_contents:!1},prevItem:{title:"Using React Hot Toast as a Notification Provider for CRUD apps",permalink:"/blog/react-hot-toast"},nextItem:{title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",permalink:"/blog/react-crm-with-refine"},relatedPosts:[{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",permalink:"/blog/how-to-use-pnpm",formattedDate:"November 27, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:8.995,date:"2023-11-27T00:00:00.000Z"},{title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",permalink:"/blog/react-query-guide",formattedDate:"July 4, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:9.71,date:"2023-07-04T00:00:00.000Z"},{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",permalink:"/blog/kubernetes-persistent-volumes",formattedDate:"December 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.32,date:"2023-12-14T00:00:00.000Z"}],authorPosts:[{title:"How to Edit a crontab",description:"Crontab is a powerful scheduling tool in Unix-like systems. This article provides a comprehensive guide on using crontab, covering the basics of creating a crontab, setting up environment variables, scheduling jobs, and error handling.",permalink:"/blog/edit-crontab",formattedDate:"December 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.59,date:"2023-12-27T00:00:00.000Z"},{title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2023-01-10T00:00:00.000Z"},{title:"Unraveling the Kubernetes ImagePullBackOff Error",description:"We'll discuss the ImagePullBackOff error in Kubernetes, its causes, and how to resolve it.",permalink:"/blog/kubernetes-imagepullbackoff-error",formattedDate:"November 4, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.275,date:"2023-11-04T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Brief overview of Docker",id:"brief-overview-of-docker",level:3},{value:"Explanation of what Docker Swarm mode is and its significance",id:"explanation-of-what-docker-swarm-mode-is-and-its-significance",level:2},{value:"Docker Swarm Mode is Significant due to the following reasons:",id:"docker-swarm-mode-is-significant-due-to-the-following-reasons",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setting up Your First Swarm",id:"setting-up-your-first-swarm",level:2},{value:"Joining Nodes to the Swarm",id:"joining-nodes-to-the-swarm",level:2},{value:"Deploying Services in Swarm",id:"deploying-services-in-swarm",level:2},{value:"Scaling Services",id:"scaling-services",level:2},{value:"Rolling Updates and Rollbacks",id:"rolling-updates-and-rollbacks",level:2},{value:"Monitoring Swarm Services",id:"monitoring-swarm-services",level:2},{value:"Cleaning Up and Removing Nodes",id:"cleaning-up-and-removing-nodes",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"brief-overview-of-docker"},"Brief overview of Docker"),(0,r.kt)("p",null,"In the modern world of DevOps, you can package up your application(s) in portable containers using the Docker platform. Containers bundle software with all dependencies, ensuring consistent execution across environments. This enables a team of developers to concurrently work on multiple components of software. This isolation, portability, and scalability make Docker preferred for microservices, development consistency, and efficient resource utilization."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#brief-overview-of-docker"},"Brief overview of Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#explanation-of-what-docker-swarm-mode-is-and-its-significance"},"Explanation of what Docker Swarm mode is and its significance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-swarm-mode-is-significant-due-to-the-following-reasons"},"Docker Swarm Mode is Significant due to the following reasons:")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pre-requisites"},"Pre-requisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-your-first-swarm"},"Setting up Your First Swarm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#joining-nodes-to-the-swarm"},"Joining Nodes to the Swarm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploying-services-in-swarm"},"Deploying Services in Swarm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scaling-services"},"Scaling Services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rolling-updates-and-rollbacks"},"Rolling Updates and Rollbacks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#monitoring-swarm-services"},"Monitoring Swarm Services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cleaning-up-and-removing-nodes"},"Cleaning Up and Removing Nodes"))),(0,r.kt)("h2",{id:"explanation-of-what-docker-swarm-mode-is-and-its-significance"},"Explanation of what Docker Swarm mode is and its significance"),(0,r.kt)("p",null,"Docker Swarm mode is a feature of Docker Engine that allows you to create and manage a cluster of Docker nodes called a swarm. Basically, a swarm consists of multiple Docker hosts that function as managers and workers, where managers control delegation and membership while workers handle the swarm services. But a particular Docker host can act as a manager, a worker, or both."),(0,r.kt)("h3",{id:"docker-swarm-mode-is-significant-due-to-the-following-reasons"},"Docker Swarm Mode is Significant due to the following reasons:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scalability (Automated load-balancing):")," You can declare the number of tasks you want to run for each service. The swarm manager automatically adapts by adding or removing tasks to maintain the desired state whenever you scale up or down. When demand for the service grows, it will add more replicas to the service.\n",(0,r.kt)("strong",{parentName:"p"},"Simple to Use:")," You can use the same Docker CLI commands to create, manage, and operate a swarm as you would use to work with individual containers, which means there's no need to install additional software to use it.\n",(0,r.kt)("strong",{parentName:"p"},"Integrated Solution:")," Docker Swarm mode offers built-in features such as service discovery, load balancing, networking, security, and rolling updates. It uses its dedicated API and was specifically designed to make it easy to create and manage clusters of Docker nodes."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker Installation:")," Installing Docker Swarm is simple, even for those just getting started with container orchestration. All nodes that will be included in the Swarm must have Docker installed on them. You can install Docker according to your OS (Linux, Windows or macOS) from the following links:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linux/distro/macOS:")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine | Docker Docs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows:")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"Install Docker Desktop on Windows | Docker Docs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic familiarity with Docker commands:")," There is no need to run or install a separate or new CLI because Docker Swarm natively integrates with the Docker CLI. Therefore, it's crucial to understand fundamental Docker commands and concepts like images, containers, and networks."),(0,r.kt)("h2",{id:"setting-up-your-first-swarm"},"Setting up Your First Swarm"),(0,r.kt)("p",null,"A node is a Docker engine instance that participates in the Swarm. This is also known as a Docker node. Although one or more nodes can run on a single physical computer or cloud server, production swarm deployments often have Docker nodes spread over multiple physical and cloud machines. Swarm mode consists of two types of nodes:\n",(0,r.kt)("strong",{parentName:"p"},"Manager:"),"\nThe manager node, as the name suggests, is responsible for cluster administration activities such as maintaining the cluster state, scheduling services, and serving Swarm mode HTTP API endpoints. It is recommended to implement more than one manager node for the production environment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Workers:"),"\nThe manager node transfers tasks to the worker nodes, who receive and execute them. Worker nodes are not involved in task management. You can configure commands and services to be global or replicated: a global service will operate on every Swarm node, whereas a replicated service will allocate tasks to worker nodes through the manager node."),(0,r.kt)("p",null,"In order to set up your first Swarm and initialize the swarm mode, you can run the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker swarm init")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/swarm-init.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"joining-nodes-to-the-swarm"},"Joining Nodes to the Swarm"),(0,r.kt)("p",null,"As previously explained, there are two types of nodes in a cluster: manager nodes and worker nodes. Suppose you already have Swarm up and running and want to add more nodes to it. To join nodes to the Swarm, you must have the join token generated by the manager node when the Swarm was initiated by running the '",(0,r.kt)("strong",{parentName:"p"},"docker swarm init"),"' command. The join token is a secret that allows a node to become a manager or worker in the Swarm.\nYou can join a node as a worker or a manager. Let's assume that you are the administrator of the manager node and you want to add a new worker node in Swarm. For that purpose, first of all, you need to retrieve the join token by running the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker swarm join-token worker")),(0,r.kt)("p",null,"This command will return you the full command of '",(0,r.kt)("strong",{parentName:"p"},"docker swarm join"),"' along with a token that you just need to run for the worker node to join the Swarm."),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-1.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now, you need to copy and run the full command you get in the output of '",(0,r.kt)("strong",{parentName:"p"},"docker swarm join-token worker"),"' in your ",(0,r.kt)("strong",{parentName:"p"},"worker node")," to join the Swarm."),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-2.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"deploying-services-in-swarm"},"Deploying Services in Swarm"),(0,r.kt)("p",null,"Swarm containers are started via services, and service is the definition of tasks to be executed by nodes. When creating a service, you must specify the container image you intend to utilize. A global service will operate on all Swarm nodes, but a replicated service would have the manager node for distributing tasks to worker nodes.\nIn order to deploy a new Docker Swarm service, you can run the command below by replacing your service-specific parameters."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service create [parameters]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service Replicas"),"\nDocker services enable you to declare the desired state, such as the number of replicas, and Swarm can maintain the state across the cluster. For instance, if you set three replicas of a service and one node fails, Swarm will make sure that another node immediately launches an instance to keep the service running. This ensures high availability and fault tolerance.\nWe can deploy the '",(0,r.kt)("strong",{parentName:"p"},"nginx"),"' service in the docker swarm with 3 service replicas by running the following command on the manager node:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service create --name nginx-service --replicas 3 --publish published=80,target=80 nginx:latest")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/ngix-1.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"To ensure that the service is correctly deployed, you can list the services with the state and the established replicas by running the command below:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service ls")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/service-ls.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"scaling-services"},"Scaling Services"),(0,r.kt)("p",null,"Docker Swarm mode makes scaling effortless. Scaling is important in modern application deployment, ensuring services can accommodate varying loads by adjusting the number of active instances. In Docker Swarm, this adjustment involves altering the number of replicas.\nIn order to scale an existing service on a Docker Swarm cluster, you can make use of the docker service scale command. This command allows you to either increase or decrease the number of service replicas. We can use the following command for scaling the services:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service scale SERVICE_NAME=REPLICA_COUNT")),(0,r.kt)("p",null,"Where ",(0,r.kt)("strong",{parentName:"p"},"SERVICE_NAME")," is the name of the service to be scaled, and ",(0,r.kt)("strong",{parentName:"p"},"REPLICA_COUNT")," is the new number of replicas desired. For Example, if you wish to increase the number of copies of the existing '",(0,r.kt)("strong",{parentName:"p"},"nginx"),"' service from three to 4, execute the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service scale nginx-service=4")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/scaling-service-1.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"rolling-updates-and-rollbacks"},"Rolling Updates and Rollbacks"),(0,r.kt)("p",null,"Application deployment and administration require updates that are seamless. We need to ensure that the release of new features, bug fixes and enhancements to the application does not cause any disruption to users. Not all upgrades work as planned, and sometimes, we just need to revert the update immediately to prevent failures and minimize downtime.\nRolling updates make it possible to deploy new versions of containers without interfering with the availability of your application. For that purpose, you can make use of the docker service update command below by replacing your service-specific parameters:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service update [parameters] ")),(0,r.kt)("p",null,"For Example, if we want to update the version of '",(0,r.kt)("strong",{parentName:"p"},"nginx-service"),"', we can utilize '",(0,r.kt)("strong",{parentName:"p"},"--image"),"' parameter:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service update --image nginx:1.21.4 nginx-service")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-1.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rollback Update:"),"\nThe ability to rollback or return to a previous state is extremely valuable not only to minimize downtime but also to ensure efficient handling of failures. The following command in Docker CLI enables quick rollbacks to earlier versions, where SERVICE_NAME is the name of the service required to revert."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service rollback SERVICE_NAME")),(0,r.kt)("p",null,"For Example, if there is any issue in an updated version, you can rollback to the previous version of '",(0,r.kt)("strong",{parentName:"p"},"nginx-service"),"':"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service rollback nginx-service")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-2.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"monitoring-swarm-services"},"Monitoring Swarm Services"),(0,r.kt)("p",null,"Any production environment must have monitoring as a critical component. Applications work easily and consistently when services are monitored for health, performance, and status. Given the distributed structure of services across multiple nodes in Docker Swarm, understanding the state of services and their tasks becomes extremely important.\nFor monitoring purposes, you can run the command that will provide insights related to tasks of any service. For Example, if we want to list the tasks with insights for '",(0,r.kt)("strong",{parentName:"p"},"nginx-service"),"', we can run the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service ps nginx-service")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-1.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service Logs:"),"\nSometimes, while troubleshooting an issue, you might need to view detailed logs related to a specific service. In order to access logs of any particular service, you can make use of the docker service logs command. As an example, the below command displays the logs related to '",(0,r.kt)("strong",{parentName:"p"},"nginx-service"),"':"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service logs nginx-service")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-2.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"cleaning-up-and-removing-nodes"},"Cleaning Up and Removing Nodes"),(0,r.kt)("p",null,"While administrating the docker swarm cluster, you may be required to restructure or scale down the Swarm gracefully. In order to remove the node, it first needs to be removed from the Swarm. You need to run the command below on the node to leave the Swarm. You can add an additional parameter '",(0,r.kt)("strong",{parentName:"p"},"\u2014force"),"' to the same command if you are on Manager Node."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker swarm leave")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-1.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Managers can remove a node from the node list if it has left the Swarm or if it is unavailable by replacing the ",(0,r.kt)("strong",{parentName:"p"},"NODE_NAME")," with the name or ID of any particular node they want to remove:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker node rm NODE_NAME")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This command will return the following output:")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-2.png",alt:"docker swarm"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Application Development and its operations have been transformed by Docker Swarm, which focuses on consistency, scalability, and integrated solutions. Application management is effective due to its smooth integration with the Docker CLI. Docker Swarm is ready to take your operations to new heights, whether you're trying to optimize current workflows or starting new projects. Embrace it, experiment with it, dive deeper and let Docker Swarm take your applications to the next level."))}u.isMDXComponent=!0}}]);