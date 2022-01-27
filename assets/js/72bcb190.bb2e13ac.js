"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[200],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8039:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"eslz-intro",sidebar_position:5},s="Getting started",u={unversionedId:"enterprise-scale/landingzones/eslz-intro",id:"enterprise-scale/landingzones/eslz-intro",title:"Getting started",description:"Deploy your first platform landing zones",source:"@site/docs/enterprise-scale/landingzones/intro.md",sourceDirName:"enterprise-scale/landingzones",slug:"/enterprise-scale/landingzones/eslz-intro",permalink:"/documentation/docs/enterprise-scale/landingzones/eslz-intro",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/enterprise-scale/landingzones/intro.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"eslz-intro",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tutorial Introduction",permalink:"/documentation/docs/contributors/conventions/intro"},next:{title:"Setup your organization",permalink:"/documentation/docs/enterprise-scale/landingzones/platform/org-setup"}},c=[{value:"Deploy your first platform landing zones",id:"deploy-your-first-platform-landing-zones",children:[],level:2},{value:"Introducing the CAF Terraform framework",id:"introducing-the-caf-terraform-framework",children:[],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("h2",{id:"deploy-your-first-platform-landing-zones"},"Deploy your first platform landing zones"),(0,a.kt)("p",null,"In this tutorial you are going to learn how to build the Azure Platform Landing zones with the Cloud Adoption Framework (CAF) for Azure Terraform landing zones. It is a framework that requires to have both ",(0,a.kt)("strong",{parentName:"p"},"advanced knowledge of Terraform and Azure services"),"."),(0,a.kt)("p",null,"It is assumed the reader has already deep knowledge of the CAF (",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/caf"},"https://aka.ms/caf"),").\nIt is recommended to be certified to the Azure Architecture track."),(0,a.kt)("p",null,"This tutorial will guide you on how to deploy the Platform landing zones and includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure Remote State management (launchpad)"),(0,a.kt)("li",{parentName:"ul"},"Enterprise Scale for management groups, policy definitions, policy assignments and RBAC"),(0,a.kt)("li",{parentName:"ul"},"Identity services (Azure Active Directory Services, extend your on-premise Active Directory Domain Services...)"),(0,a.kt)("li",{parentName:"ul"},"Monitoring services"),(0,a.kt)("li",{parentName:"ul"},"Connectivity services (virtual WAN, private DNS zones, egress firewall...)")),(0,a.kt)("p",null,"Based on your configuration you can select the following deployment guide:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Microsoft Billing Account"),(0,a.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enterprise Agreement"),(0,a.kt)("td",{parentName:"tr",align:null},"Deploy on existing Azure subscriptions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/documentation/docs/enterprise-scale/landingzones/platform/org-setup"},"Getting started"))))),(0,a.kt)("h2",{id:"introducing-the-caf-terraform-framework"},"Introducing the CAF Terraform framework"),(0,a.kt)("p",null,"The CAF Terraform framework has been designed to minimize the Terraform code you need write in favour of writing an object model that describes your infrastructure services. This data model or configuration is processed by a heavy tested Terraform module to deploy those services.\nThe main goal of the CAF Terraform framework is to leverage Infrastructure-as-Data (IaD) instead of Infrastructure-as-Code (IaC) in order to help our enterprise customers to lower their adoption to automation as code by using an open-source, community-driven tested framework they can use by only writing configuration files in yaml or tfvars."),(0,a.kt)("p",null,"As an open source framework, we welcome PR from Terraform contributor to augment the depth and breath of the CAF module to build richer infrastructure solutions as code."))}p.isMDXComponent=!0}}]);