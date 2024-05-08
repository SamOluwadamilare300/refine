"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16393],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?t.createElement(m,l(l({ref:n},s),{},{components:r})):t.createElement(m,l({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},18624:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(96540);var t=r(15680);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},c=void 0,u={unversionedId:"partials/tutorial/headless-layout",id:"partials/tutorial/headless-layout",title:"headless-layout",description:"",source:"@site/docs/partials/tutorial/headless-layout.md",sourceDirName:"partials/tutorial",slug:"/partials/tutorial/headless-layout",permalink:"/docs/partials/tutorial/headless-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/partials/tutorial/headless-layout.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715170076,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{}},s={},p=[],d={toc:p},b="wrapper";function m(e){var{components:n}=e,r=l(e,["components"]);return(0,t.yg)(b,o(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}({},d,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},'body {\n  margin: 0px;\n}\n\ntable {\n  border-spacing: 0;\n  border: 1px solid black;\n}\n\ntable th,\ntd {\n  margin: 0;\n  padding: 0.5rem;\n  border-bottom: 1px solid black;\n  border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n  border-bottom: 0;\n}\n\ntable th,\ntd {\n  margin: 0;\n  padding: 0.5rem;\n  border-bottom: 1px solid black;\n  border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n  border-right: 0;\n}\n\n.layout {\n  display: flex;\n  gap: 16px;\n}\n\n@media screen and (max-width: 751px) {\n  .layout {\n    display: block;\n  }\n}\n\n.layout .content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.breadcrumb {\n  display: flex;\n  gap: 24px;\n  list-style-type: "/  ";\n  padding: 8px 16px;\n  border-bottom: 1px solid lightgray;\n}\n\n.breadcrumb a {\n  color: blue;\n  text-decoration: none;\n}\n\n.menu {\n  flex-shrink: 0;\n  padding: 8px 16px;\n  border-right: 1px solid lightgray;\n}\n\n.menu a {\n  color: black;\n}\n\n.menu .active {\n  font-weight: bold;\n}\n\n@media screen and (max-width: 751px) {\n  .menu {\n    border-right: none;\n    border-bottom: 1px solid lightgray;\n  }\n}\n\n.menu ul {\n  padding-left: 16px;\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { PropsWithChildren } from "react";\nimport { useMenu, useBreadcrumb } from "@refinedev/core";\nimport { NavLink, Link } from "react-router-dom";\n\nconst Breadcrumb = () => {\n  const { breadcrumbs } = useBreadcrumb();\n\n  return (\n    <ul className="breadcrumb">\n      {breadcrumbs.map((breadcrumb) => (\n        <li key={`breadcrumb-${breadcrumb.label}`}>\n          {breadcrumb.href ? (\n            <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n          ) : (\n            <span>{breadcrumb.label}</span>\n          )}\n        </li>\n      ))}\n    </ul>\n  );\n};\n\nconst Menu = () => {\n  const { menuItems } = useMenu();\n\n  return (\n    <nav className="menu">\n      <ul>\n        {menuItems.map((item) => (\n          <li key={item.key}>\n            <NavLink to={item.route ?? "/"}>{item.label}</NavLink>\n          </li>\n        ))}\n      </ul>\n    </nav>\n  );\n};\n\nconst Layout: React.FC<PropsWithChildren> = ({ children }) => {\n  return (\n    <div className="layout">\n      <Menu />\n      <div className="content">\n        <Breadcrumb />\n        <div>{children}</div>\n      </div>\n    </div>\n  );\n};\n')))}m.isMDXComponent=!0}}]);