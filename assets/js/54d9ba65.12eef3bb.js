"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",slug:"kubernetes-persistent-volumes",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/social.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/kubernetes-persistent-volumes",source:"@site/blog/2023-12-14-k8s-persistent-volumes.md",title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",date:"2023-12-14T00:00:00.000Z",formattedDate:"December 14, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:7.32,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",slug:"kubernetes-persistent-volumes",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubectl Cheat Sheet - With Examples",permalink:"/blog/kubectl-cheat-sheet"},nextItem:{title:"A Quick Introduction to Meta's Stylex",permalink:"/blog/meta-stylex"},relatedPosts:[{title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",permalink:"/blog/postgres-on-kubernetes",formattedDate:"January 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.045,date:"2024-01-22T00:00:00.000Z"},{title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",permalink:"/blog/kubectl-scale",formattedDate:"December 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.4,date:"2023-12-25T00:00:00.000Z"},{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",permalink:"/blog/docker-volumes",formattedDate:"July 11, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.64,date:"2023-07-11T00:00:00.000Z"}],authorPosts:[{title:"Understanding the Basics of Kubernetes CronJob",description:"CronJobs in Kubernetes is the way of running jobs automatically based on time intervals.",permalink:"/blog/kubernetes-cron-jobs",formattedDate:"December 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.52,date:"2023-12-12T00:00:00.000Z"},{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",permalink:"/blog/docker-volumes",formattedDate:"July 11, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.64,date:"2023-07-11T00:00:00.000Z"},{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",permalink:"/blog/kubernetes-image-pull-policy",formattedDate:"January 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.045,date:"2024-01-03T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Conceptual Overview of Persistent Volumes and Claims",id:"conceptual-overview-of-persistent-volumes-and-claims",level:2},{value:"Basic explanation of Persistent Volumes (PV) and Persistent Volume Claims (PVC)",id:"basic-explanation-of-persistent-volumes-pv-and-persistent-volume-claims-pvc",level:3},{value:"Highlighting the difference between ephemeral and persistent storage in Kubernetes",id:"highlighting-the-difference-between-ephemeral-and-persistent-storage-in-kubernetes",level:3},{value:"Setting Up Your Environment for PV",id:"setting-up-your-environment-for-pv",level:2},{value:"Instructions on setting up a Kubernetes environment suitable for experimenting with PVs (e.g., Minikube setup)",id:"instructions-on-setting-up-a-kubernetes-environment-suitable-for-experimenting-with-pvs-eg-minikube-setup",level:3},{value:"Deep Dive into Persistent Volume Types",id:"deep-dive-into-persistent-volume-types",level:2},{value:"Exploration of different types of Persistent Volumes and their suitability",id:"exploration-of-different-types-of-persistent-volumes-and-their-suitability",level:3},{value:"HostPath",id:"hostpath",level:4},{value:"NFS",id:"nfs",level:4},{value:"AWS EBS",id:"aws-ebs",level:4},{value:"Creating and Configuring a Persistent Volume",id:"creating-and-configuring-a-persistent-volume",level:2},{value:"Step-by-step guide on creating a PV in Kubernetes",id:"step-by-step-guide-on-creating-a-pv-in-kubernetes",level:3},{value:"Configuring access modes and storage classes",id:"configuring-access-modes-and-storage-classes",level:3},{value:"Working with Persistent Volume Claims",id:"working-with-persistent-volume-claims",level:2},{value:"Demonstrating how to create and manage PVCs",id:"demonstrating-how-to-create-and-manage-pvcs",level:3},{value:"Linking PVCs to Pods and understanding the binding process",id:"linking-pvcs-to-pods-and-understanding-the-binding-process",level:3},{value:"Advanced Scenarios and Best Practices",id:"advanced-scenarios-and-best-practices",level:2},{value:"Handling dynamic volume provisioning",id:"handling-dynamic-volume-provisioning",level:3},{value:"Tips on managing PV lifecycle, including expanding and reclaiming volumes",id:"tips-on-managing-pv-lifecycle-including-expanding-and-reclaiming-volumes",level:3},{value:"Addressing security considerations in persistent storage",id:"addressing-security-considerations-in-persistent-storage",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Welcome to our guide on Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs). In this article, we'll explore how Kubernetes handles data storage, a key part of running applications that need to save data permanently. We'll start with a basic introduction to Kubernetes and why keeping data safe and accessible is important in systems where applications are in containers."),(0,a.kt)("p",null,"Our goal is to give you a clear and straightforward understanding of PVs and PVCs\u2014how they work, how they differ from temporary storage, and how to set them up and use them in different scenarios. This guide is designed for anyone interested in Kubernetes, whether you're just starting out or looking to deepen your knowledge about Kubernetes storage."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conceptual-overview-of-persistent-volumes-and-claims"},"Conceptual Overview of Persistent Volumes and Claims")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-up-your-environment-for-pv"},"Setting Up Your Environment for PV")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#deep-dive-into-persistent-volume-types"},"Deep Dive into Persistent Volume Types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-and-configuring-a-persistent-volume"},"Creating and Configuring a Persistent Volume")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#working-with-persistent-volume-claims"},"Working with Persistent Volume Claims")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#advanced-scenarios-and-best-practices"},"Advanced Scenarios and Best Practices"))),(0,a.kt)("h2",{id:"conceptual-overview-of-persistent-volumes-and-claims"},"Conceptual Overview of Persistent Volumes and Claims"),(0,a.kt)("h3",{id:"basic-explanation-of-persistent-volumes-pv-and-persistent-volume-claims-pvc"},"Basic explanation of Persistent Volumes (PV) and Persistent Volume Claims (PVC)"),(0,a.kt)("p",null,"In Kubernetes, a ",(0,a.kt)("strong",{parentName:"p"},"Persistent Volume (PV)")," is a storage unit in the cluster, provisioned by an administrator or dynamically through Storage Classes. It functions as a cluster resource, independent of individual pod lifecycles, much like a node."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Persistent Volume Claim (PVC)")," is a user's request for storage. Analogous to how pods consume node resources, PVCs utilize PV resources. They can specify size requirements and access modes, such as single read/write or multiple read-only mounts.\nHere is a conceptual diagram showing difference between the two. Image credit: stackoverflow.com"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/image3.PNG",alt:"Difference between PV and PVC"})),(0,a.kt)("h3",{id:"highlighting-the-difference-between-ephemeral-and-persistent-storage-in-kubernetes"},"Highlighting the difference between ephemeral and persistent storage in Kubernetes"),(0,a.kt)("p",null,"Kubernetes' ephemeral storage is tied to a pod's lifecycle, being temporary and deleted with the pod. Examples include ",(0,a.kt)("em",{parentName:"p"},"emptyDir")," volumes."),(0,a.kt)("p",null,"Conversely, persistent storage survives beyond pod terminations, essential for data persistence across restarts and crashes. ",(0,a.kt)("strong",{parentName:"p"},"Persistent Volumes (PVs)")," and ",(0,a.kt)("strong",{parentName:"p"},"Persistent Volume Claims (PVCs)")," are crucial Kubernetes objects enabling persistent storage.\nScreenshot Suggestion: Diagram illustrating PV and PVC relationship"),(0,a.kt)("h2",{id:"setting-up-your-environment-for-pv"},"Setting Up Your Environment for PV"),(0,a.kt)("h3",{id:"instructions-on-setting-up-a-kubernetes-environment-suitable-for-experimenting-with-pvs-eg-minikube-setup"},"Instructions on setting up a Kubernetes environment suitable for experimenting with PVs (e.g., Minikube setup)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install Minikube"),": Begin by installing Minikube, which simulates a Kubernetes cluster on a local machine. Use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube start")," to initiate the cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Install kubectl:")," Ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," is installed, as it's the command line tool for interacting with the Kubernetes cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verify Installation"),": Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl version")," to verify both client and server versions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Necessary Add-ons"),": Some add-ons might be needed for PVs, like the storage-provisioner. Enable them using ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube addons enable <addon-name>"),"."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/image1.PNG",alt:"Difference between PV and PVC"})),(0,a.kt)("h2",{id:"deep-dive-into-persistent-volume-types"},"Deep Dive into Persistent Volume Types"),(0,a.kt)("h3",{id:"exploration-of-different-types-of-persistent-volumes-and-their-suitability"},"Exploration of different types of Persistent Volumes and their suitability"),(0,a.kt)("p",null,"Kubernetes supports various persistent volume types, catering to different data storage requirements."),(0,a.kt)("h4",{id:"hostpath"},"HostPath"),(0,a.kt)("p",null,"A HostPath Persistent Volume utilizes a file or folder on the Node\u2019s filesystem. It is used for single node testing."),(0,a.kt)("p",null,"Example YAML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\n\nkind: PersistentVolume\nmetadata:\n  name: example-hostpath\nspec:\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/mnt/data"\n')),(0,a.kt)("h4",{id:"nfs"},"NFS"),(0,a.kt)("p",null,"Multiple nodes can share files stored on an NFS Persistent Volume. It is used to exchange data between multiple pods."),(0,a.kt)("p",null,"Example YAML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: example-nfs\nspec:\n  capacity:\n    storage: 5Gi\n  accessModes:\n    - ReadWriteMany\n  nfs:\n    path: "/usr/local/path"\n    server: <nfs-server-ip>\n')),(0,a.kt)("h4",{id:"aws-ebs"},"AWS EBS"),(0,a.kt)("p",null,"AWS Elastic Block Store (EBS) is a storage service from Amazon that provides block-level storage volumes for EC2 instances."),(0,a.kt)("p",null,"Example YAML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: aws-ebs-prod-ec2\nspec:\n  capacity:\n    storage: 16Gi\n  accessModes:\n    - ReadWriteOnce\n  azureDisk:\n    diskName: "<disk-name>"\n    diskURI: "<disk-uri>"\n    fsType: "ext4"\n')),(0,a.kt)("h2",{id:"creating-and-configuring-a-persistent-volume"},"Creating and Configuring a Persistent Volume"),(0,a.kt)("h3",{id:"step-by-step-guide-on-creating-a-pv-in-kubernetes"},"Step-by-step guide on creating a PV in Kubernetes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define the Persistent Volume (PV) in a YAML file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: example-pv\nspec:\n  capacity:\n    storage: 5Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  hostPath:\n    path: "/mnt/data"\n\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Apply the YAML file using ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f pv.yaml\n")),(0,a.kt)("p",null,"The output will show you following:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/image2.PNG",alt:"Difference between PV and PVC"})),(0,a.kt)("h3",{id:"configuring-access-modes-and-storage-classes"},"Configuring access modes and storage classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access modes determine how the PV can be accessed. Common access modes include ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadWriteOnce"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadOnlyMany"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadWriteMany"),"."),(0,a.kt)("li",{parentName:"ul"},"Storage classes are used to define different storage types. You can specify a storage class in the PV definition under ",(0,a.kt)("inlineCode",{parentName:"li"},"storageClassName"),".")),(0,a.kt)("p",null,"Example of specifying a storage class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: example-pv\nspec:\n  storageClassName: gp2\n")),(0,a.kt)("h2",{id:"working-with-persistent-volume-claims"},"Working with Persistent Volume Claims"),(0,a.kt)("h3",{id:"demonstrating-how-to-create-and-manage-pvcs"},"Demonstrating how to create and manage PVCs"),(0,a.kt)("p",null,"Create a PVC by defining it in a YAML file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mypvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n")),(0,a.kt)("p",null,"Apply it with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f pvc.yaml")," just like below screenshot."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/image4.PNG",alt:"Difference between PV and PVC"})),(0,a.kt)("p",null,"You can manage it with commands like ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pvc")," to list PVCs, or ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete pvc mypvc")," to delete."),(0,a.kt)("h3",{id:"linking-pvcs-to-pods-and-understanding-the-binding-process"},"Linking PVCs to Pods and understanding the binding process"),(0,a.kt)("p",null,"Pods use PVCs by referencing them in their YAML files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: mypod\nspec:\n  containers:\n    - name: mycontainer\n      image: nginx\n      volumeMounts:\n        - mountPath: "/var/www/html"\n          name: myvolume\n  volumes:\n    - name: myvolume\n      persistentVolumeClaim:\n        claimName: mypvc\n')),(0,a.kt)("p",null,"A Pod's successful binding to a PVC is checked by:\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe pod mypod")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-14-k8s-persistent-volumes/image5.PNG",alt:"Difference between PV and PVC"})),(0,a.kt)("h2",{id:"advanced-scenarios-and-best-practices"},"Advanced Scenarios and Best Practices"),(0,a.kt)("h3",{id:"handling-dynamic-volume-provisioning"},"Handling dynamic volume provisioning"),(0,a.kt)("p",null,"Dynamic volume provisioning simplifies the process of managing storage in Kubernetes by automatically provisioning storage volumes as needed. This eliminates the need for administrators to manually create and manage PVs."),(0,a.kt)("p",null,"To enable dynamic volume provisioning, you will need to install and configure a storage provisioner. A storage provisioner is a Kubernetes controller that watches for PersistentVolumeClaims (PVCs) and provisions PVs based on the requests in the PVCs."),(0,a.kt)("p",null,"Once you have installed and configured a storage provisioner (e.g. AWS EBS), you can use the following steps to provision storage for your Pods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a StorageClass. A StorageClass is a Kubernetes resource that defines the storage requirements for your Pods. The StorageClass specifies the provisioning parameters for the PV that will be created.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: my-storage-class\nprovisioner: my-provisioner\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a PVC (PersistentVolumeClaim). A PVC is a storage request submitted by a Pod. The PVC specifies the access modes and storage capacities for the PV that it requires. See above for creating a PVC.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Pod. The Pod specifications should reference the PVC that you created in step 2."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: production-pod-ec2\nspec:\n  containers:\n    - name: production-api-container\n      image: busybox\n      volumeMounts:\n        - name: production-EU-PVC\n          mountPath: /mnt/data\n  volumes:\n    - name: production-EU-PVC\n      persistentVolumeClaim:\n        claimName: prod-pvc\n")),(0,a.kt)("p",null,"Once the Pod is created, the storage provisioner will automatically provision a PV that meets the requirements of the PVC. The Pod will then be able to mount the PV and access the storage."),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pv")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pvc")," commands to view the status of your PVs and PVCs."),(0,a.kt)("h3",{id:"tips-on-managing-pv-lifecycle-including-expanding-and-reclaiming-volumes"},"Tips on managing PV lifecycle, including expanding and reclaiming volumes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Expanding Volumes"),": Ensure the storage class has ",(0,a.kt)("inlineCode",{parentName:"p"},"allowVolumeExpansion: true"),". To expand a PVC, simply edit the PVC and increase the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.resources.requests.storage")," value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reclaiming Volumes"),": Set ",(0,a.kt)("inlineCode",{parentName:"p"},"persistentVolumeReclaimPolicy")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Retain")," in your PV to control the reclaim behavior when a PVC is deleted."),(0,a.kt)("h3",{id:"addressing-security-considerations-in-persistent-storage"},"Addressing security considerations in persistent storage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use RBAC"),": Restrict access to PVCs using Role-Based Access Control (RBAC) policies."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Encryption"),": Enable encryption at rest for your storage volumes to protect sensitive data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PVC Access Modes"),": Choose the correct access mode (",(0,a.kt)("inlineCode",{parentName:"p"},"ReadWriteOnce"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyMany"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadWriteMany"),") based on your security and sharing requirements."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This article has thoroughly covered Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs), key tools for storing data in containerized environments. We learned how PVs and PVCs work, their differences from temporary storage, and why they're important for keeping data safe even when containers stop or fail."),(0,a.kt)("p",null,"The guide walked us through setting up a Kubernetes environment with Minikube and kubectl, and explained different types of PVs like HostPath, NFS, and AWS EBS, each suited for specific needs. It showed us how to create and use PVs and PVCs, and delved into advanced topics like automatically managing storage with dynamic volume provisioning."),(0,a.kt)("p",null,"Finally, we shared tips on managing PVs, like how to expand or delete them, and discussed important security practices. In short, this guide is a practical resource for anyone looking to understand and use persistent storage in Kubernetes, making data management more efficient and secure in various applications."))}m.isMDXComponent=!0}}]);