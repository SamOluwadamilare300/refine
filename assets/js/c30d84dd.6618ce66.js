"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12673],{58860:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>h});var n=t(37953);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),y=o,h=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},38128:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>u});t(37953);var n=t(58860);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"usePublish",title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},s=void 0,l={unversionedId:"api-reference/core/hooks/live/usePublish",id:"version-3.xx.xx/api-reference/core/hooks/live/usePublish",title:"usePublish",description:"usePublish returns the publish method from liveProvider. It is useful when you want to publish a custom event.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/live/usePublish.md",sourceDirName:"api-reference/core/hooks/live",slug:"/api-reference/core/hooks/live/usePublish",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/usePublish",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/live/usePublish.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718377768,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"usePublish",title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},sidebar:"someSidebar",previous:{title:"useInvalidate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate"},next:{title:"useSubscription",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/useSubscription"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Publish Properties",id:"publish-properties",level:2},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"type <PropTag required/>",id:"type-",level:3},{value:"payload <PropTag required/>",id:"payload-",level:3},{value:"date <PropTag required/>",id:"date-",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",r)},y=d("DocThumbsUpDownFeedbackWidget"),h=d("PropTag"),f={toc:u},m="wrapper";function b(e){var{components:r}=e,t=a(e,["components"]);return(0,n.yg)(m,i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"usePublish")," returns the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#publish"},(0,n.yg)("inlineCode",{parentName:"a"},"publish"))," method from ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider")),". It is useful when you want to publish a custom event."),(0,n.yg)("admonition",{type:"info-tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"refine")," use this hook internally in mutation hooks to ",(0,n.yg)("inlineCode",{parentName:"p"},"publish")," events after successful mutation. You can refer liveProvider's ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#publish-events-from-hooks"},"Publish Events from Hooks")," section for more information.")),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@pankod/refine-core";\n\nconst publish = usePublish();\n\npublish({\n  channel: "custom-channel-name",\n  type: "custom-event-name",\n  payload: {\n    ids: [1, 2, 3],\n    "custom-property": "custom-property-value",\n  },\n  date: new Date(),\n});\n')),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This method is used to publish an event on the client side. Beware that publishing events on the client side is not recommended and the best practice is to publish events from the server side. You can refer ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#publish-events-from-api"},"Publish Events from API")," to see which events must be published from the server."))),(0,n.yg)("h2",{id:"publish-properties"},"Publish Properties"),(0,n.yg)(y,{id:"publish-properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Will be passed to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#publish"},"publish")," method from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"liveProvider")," as a parameter. You can use these properties from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#publish"},(0,n.yg)("inlineCode",{parentName:"a"},"publish"))," method and use them to publish an event."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#liveevent"},"LiveEvent")," interface for type of properties."))),(0,n.yg)("h3",{id:"channel-"},"channel ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"channel-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The channel name to publish the event.")),(0,n.yg)("h3",{id:"type-"},"type ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"type-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The event name to publish.")),(0,n.yg)("h3",{id:"payload-"},"payload ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"payload-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The payload to publish.")),(0,n.yg)("h3",{id:"date-"},"date ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"date-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The date of the event.")))}b.isMDXComponent=!0}}]);