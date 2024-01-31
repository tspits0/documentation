"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const a={id:"alz-intro",sidebar_position:1},i="Getting started",l={unversionedId:"azure-landing-zones/landingzones/alz-intro",id:"azure-landing-zones/landingzones/alz-intro",title:"Getting started",description:"Deploy your first platform landing zones",source:"@site/docs/azure-landing-zones/landingzones/intro.md",sourceDirName:"azure-landing-zones/landingzones",slug:"/azure-landing-zones/landingzones/alz-intro",permalink:"/documentation/docs/next/azure-landing-zones/landingzones/alz-intro",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/azure-landing-zones/landingzones/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"alz-intro",sidebar_position:1},sidebar:"cafSidebar",previous:{title:"Welcome to Azure Terraform SRE",permalink:"/documentation/docs/next/intro"},next:{title:"Setup your organization",permalink:"/documentation/docs/next/azure-landing-zones/landingzones/platform/org-setup"}},s={},u=[{value:"Deploy your first platform landing zones",id:"deploy-your-first-platform-landing-zones",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"deploy-your-first-platform-landing-zones"},"Deploy your first platform landing zones"),(0,o.kt)("p",null,"In this tutorial you are going to learn how to build the Azure Platform Landing zones with the Azure Terraform SRE (CAF) for Azure Terraform landing zones. It is a framework that requires to have both ",(0,o.kt)("strong",{parentName:"p"},"advanced knowledge of Terraform and Azure services"),"."),(0,o.kt)("p",null,"It is assumed the reader has already deep knowledge of the CAF (",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/caf"},"https://aka.ms/caf"),").\nIt is recommended to be certified to the Azure Architecture track."),(0,o.kt)("p",null,"This tutorial will guide you on how to deploy the Platform landing zones and includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Remote State management (launchpad)"),(0,o.kt)("li",{parentName:"ul"},"Azure landing zones (formerly called Enterprise-Scale) for management groups, policy definitions, policy assignments and RBAC"),(0,o.kt)("li",{parentName:"ul"},"Identity services (Azure Active Directory Services, extend your on-premise Active Directory Domain Services...)"),(0,o.kt)("li",{parentName:"ul"},"Monitoring services"),(0,o.kt)("li",{parentName:"ul"},"Connectivity services (virtual WAN, private DNS zones, egress firewall...)")),(0,o.kt)("p",null,"The steps in the tutorial will guide you through the following process:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Creation of Azure landing zones environment",src:n(1648).Z,width:"1836",height:"822"})))}d.isMDXComponent=!0},1648:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/process-alz-f812f6b25bae27a5b8f2dcd9e1e36234.png"}}]);