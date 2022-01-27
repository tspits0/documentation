"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[415],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"gitops-intro",sidebar_position:6},s=void 0,c={unversionedId:"gitops/gitops-intro",id:"gitops/gitops-intro",title:"gitops-intro",description:"GitOps for Azure landing zones",source:"@site/docs/gitops/intro.md",sourceDirName:"gitops",slug:"/gitops/gitops-intro",permalink:"/documentation/docs/gitops/gitops-intro",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/gitops/intro.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"gitops-intro",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cross-levels composition",permalink:"/documentation/docs/fundamentals/lz-composition"},next:{title:"Introduction to the CAF super-module",permalink:"/documentation/docs/module/module-intro"}},p=[{value:"GitOps for Azure landing zones",id:"gitops-for-azure-landing-zones",children:[],level:2},{value:"Code and configuration repositories",id:"code-and-configuration-repositories",children:[{value:"Empowering the developers",id:"empowering-the-developers",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-for-azure-landing-zones"},"GitOps for Azure landing zones"),(0,i.kt)("p",null,"Changes in the different environments introduced and promoted following GitOps concepts, principles and mechanisms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuration changes are described in a declarative language (here using Terraform)."),(0,i.kt)("li",{parentName:"ul"},"Operations are promoted from one environment to another via Git operations (Git commit, push, pull request)."),(0,i.kt)("li",{parentName:"ul"},"Changes are promoted only once they have reached quality gates (provided by automation, CI mechanisms and test suites executions) to promote higher quality changes."),(0,i.kt)("li",{parentName:"ul"},"Changes are promoted only once they also have been validated by service owners in the environment (that can be declared in the DevOps configuration of the platform).")),(0,i.kt)("h2",{id:"code-and-configuration-repositories"},"Code and configuration repositories"),(0,i.kt)("p",null,"GitOps leverages Git as a single source of truth for declarative infrastructure and applications. Having a common code structure and naming convention is critical to maintain code quality and enhance the developer experience (especially for new team members)."),(0,i.kt)("p",null,"When we deal with Infra as Code and landing zone deployments, we must also make sure that the structure of our repository will support the workflow of the different teams involved and enforce the segregation of concerns with the multiple environments. ",(0,i.kt)("em",{parentName:"p"},"Should the code / variables be organized by environments or by teams involved in the deployment\nprocess"),"? Is a legitimate question. Code structure and organization is always a hot topic, and while one size fits all is rarely the norm, we tend to recommend starting with either of the following extending's on Terraform (unclear) documentation."),(0,i.kt)("p",null,"For a given environment, ideally the code should remain identical and only the variables should evolve. The following example illustrates the two repository we recommend: one for the configuration and one for the code of deployment."),(0,i.kt)("p",null,"Looking closer at the configuration repository, we can see that each environment is represented in a folder and each environment enforces the following structure:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"directory name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"purpose and content")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"devops"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains the DevOps environment variables to configure the Azure DevOps variable groups, and pipeline definitions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"landingzones"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains a directory for each landing zone. Each directory will include its own pipeline definition for apply, destroy, etc.   Each directory must also contain the landing zones variable definitions files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"launchpad"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains the configuration files for the launchpad environment.")))),(0,i.kt)("h3",{id:"empowering-the-developers"},"Empowering the developers"),(0,i.kt)("p",null,"It is often more productive to have developers equipped with their own subscriptions in order to accelerate the engineering time. Those subscriptions can be part of ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/pricing/dev-test/"},"Azure Dev/Test"),", can be part of ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/pricing/member-offers/credit-for-visual-studio-subscribers/"},"Visual Studio Subscription"),", or can be sourced via the usual enterprise or partners."),(0,i.kt)("p",null,"We very often observe that a dedicated engineering sandpit which includes autonomous identity tenant (Azure Active Directory tenant), although it might appear more difficult to maintain, but will enable faster composition and innovation, especially to iterate on the reduction of privilege engineering as it will save round-trips with corporate identity teams. This will enable a frictionless collaboration and better collaboration when the new service is going through security validation."))}d.isMDXComponent=!0}}]);