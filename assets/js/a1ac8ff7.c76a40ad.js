"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2990],{533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const r={id:"lz-intro",sidebar_position:1},l="Levels Hierarchy",o={unversionedId:"fundamentals/lz-intro",id:"version-2203.1/fundamentals/lz-intro",title:"Levels Hierarchy",description:"To address enterprise complexity, we recommend isolating and decomposing a complex environment in multiple state files.",source:"@site/versioned_docs/version-2203.1/fundamentals/intro.md",sourceDirName:"fundamentals",slug:"/fundamentals/lz-intro",permalink:"/documentation/docs/fundamentals/lz-intro",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/versioned_docs/version-2203.1/fundamentals/intro.md",tags:[],version:"2203.1",sidebarPosition:1,frontMatter:{id:"lz-intro",sidebar_position:1},sidebar:"cafSidebar",previous:{title:"Single subscription deployment lab",permalink:"/documentation/docs/azure-landing-zones/landingzones/platform/single reuse/elsz-single-reuse"},next:{title:"Compute Nodes",permalink:"/documentation/docs/fundamentals/lz-compute"}},s={},p=[{value:"The levels approach",id:"the-levels-approach",level:2},{value:"Level 0: Core platform automation",id:"level-0-core-platform-automation",level:3},{value:"Level 1: Core platform governance",id:"level-1-core-platform-governance",level:3},{value:"Level 2: Core platform connectivity",id:"level-2-core-platform-connectivity",level:3},{value:"Level 3: Application landing zones vending machine",id:"level-3-application-landing-zones-vending-machine",level:3},{value:"Level 4: Applications landing zone",id:"level-4-applications-landing-zone",level:3},{value:"Operating with levels",id:"operating-with-levels",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"levels-hierarchy"},"Levels Hierarchy"),(0,i.yg)("p",null,"To address enterprise complexity, we recommend isolating and decomposing a complex environment in multiple state files."),(0,i.yg)("p",null,"The main concern with state files is related to security, as a Terraform state file might contain credentials, security tokens, keys etc. It is reasonable that state files corresponding to different levels of privileges are stored separately."),(0,i.yg)("p",null,"Another concern with state file, which calls for segregation, is the speed of innovation: When someone is conducting a change for a resource in a given state file, no-one else can change the state file at the same time, so having a limited number of state files can hinder the testing or integration processes in the enterprise."),(0,i.yg)("p",null,"Finally since DevOps is building in teams, we want to unlock autonomy of teams yet delegating some functions (application teams will not re-invent the networking layers but build on it). It will mean the capability to read a state file to do rich composition but without the possibility to alter the state file from other teams."),(0,i.yg)("p",null,"In Azure Terraform SRE landing zones, separating the Terraform state files enables you to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Control blast radius"),": if one configuration is deficient, it only impacts one landing zone and does not compromise the whole environment."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Enforce standard configuration"),": by using different Terraform state, you can compose a complex environment very fast."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Enable autonomy"),": different landing zones can enable innovation and features at different pace from each other."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Least privilege principles"),": Each level is protected by its own identity to prevent unwanted information disclosure and modifications.")),(0,i.yg)("h2",{id:"the-levels-approach"},"The levels approach"),(0,i.yg)("p",null,"We categorize and store state files into ",(0,i.yg)("em",{parentName:"p"},"levels"),"."),(0,i.yg)("p",null,"A level groups together a set of state files that needs separation because of different ",(0,i.yg)("strong",{parentName:"p"},"lifecycles")," or ",(0,i.yg)("strong",{parentName:"p"},"privileges"),"."),(0,i.yg)("p",null,"The model can be summarized as below:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Model for levels for Azure Terraform SRE landing zones",src:t(6235).A,width:"1199",height:"591"}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure 1: An overview of the levels proposed by Azure Terraform SRE landing zones to structure Terraform states")),(0,i.yg)("p",null,"The core principles are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"One level can host multiple state files"),": A level is implemented as an Azure storage account with specific permissions, you can store as many Terraform state files as necessary on a particular level."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Rover helps you locate the right storage account"),": Whether you are running CAF landing zones locally or in pipeline, rover helps you locate the right storage account for a given environment and level. Authorization to deploy at a level is granted by Azure RBAC model and enforced at runtime (with the current logged in user credentials, or via the pipeline credentials)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"You can only write in your current level"),": at a given level, you can only write the Terraform state file that you are responsible for."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Read one level down"),": at any particular level, you are able to read information one level down for your composition (one AKS cluster at level 3 can read the Terraform state file at level 2 to compose)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Codeless state reading and enterprise composition"),": Azure Terraform SRE landing zones come with an object model that allow to load any landing zone (given principal accessing it has access ) in memory and compose from it.")),(0,i.yg)("p",null,"Azure Terraform SRE for Azure proposes a hierarchy of landing zones based on five levels as described below:"),(0,i.yg)("h3",{id:"level-0-core-platform-automation"},"Level 0: Core platform automation"),(0,i.yg)("p",null,"The different landing zones represented in different state files at level 0 would typically be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"launchpad")," (storage accounts, Key Vault, RBAC, etc.) components related to Terraform state management."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"subscription creation delegation")," capabilities derived from the ",(0,i.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/cost-management-billing/manage/ea-portal-get-started"},"Enterprise Agreement")," or ",(0,i.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/cost-management-billing/understand/mca-overview"},"Microsoft Customer Agreement"),"."),(0,i.yg)("li",{parentName:"ul"},"The credential rotation mechanisms and role-based access control core models.")),(0,i.yg)("h3",{id:"level-1-core-platform-governance"},"Level 1: Core platform governance"),(0,i.yg)("p",null,"The different landing zones represented in different state files at level 1 would typically be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"Azure landing zone")," (management groups, policies) this would include the core ALZ (formerly called enterprise-scale) capabilities with the related custom management group structures and policies configuration. You can either use the out-of-the-box settings for Azure LZ or customize the values for your organization."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"GitOps services")," for core platform automation: creating the pipelines, creating the Virtual Network and compute nodes (see below) required for the DevOps self-hosted agents."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"platform subscription creation")," for core platform (to create the core enterprise-scale subscriptions like Identify, Management, Connectivity etc.)"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"management subscription services")," for core platform capabilities such as log management, Azure Monitor capabilities, etc."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"identity subscription services")," for core platform such as domain controller virtual machines, Azure Active Directory Domain Services, Azure AD Group mappings etc.")),(0,i.yg)("h3",{id:"level-2-core-platform-connectivity"},"Level 2: Core platform connectivity"),(0,i.yg)("p",null,"The different landing zones represented in different state files at level 2 would typically be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"connectivity subscription components"),": including the virtual networking components like classic Virtual Network-based Hub and Spoke, Azure Virtual WAN, Azure Virtual WAN regional hub, site-to-site, point-to-site and ExpressRoute connectivity objects, or third parties Network Virtual Appliances. Due to their regional nature, it is likely that each of those components would live inside a different Terraform state file."),(0,i.yg)("li",{parentName:"ul"},"Additional ",(0,i.yg)("strong",{parentName:"li"},"identity subscription services"),": could be Azure Active Directory Domain Services (managed AD), or Virtual-machine-based domain controllers."),(0,i.yg)("li",{parentName:"ul"},"Additional ",(0,i.yg)("strong",{parentName:"li"},"management subscription services"),": could be System Center Configuration Manager, Shared Imaged Galleries, Monitor Alerts or third parties management tools.")),(0,i.yg)("h3",{id:"level-3-application-landing-zones-vending-machine"},"Level 3: Application landing zones vending machine"),(0,i.yg)("p",null,"A landing zone for application is split between two levels. Level 3 includes components of an application that are typically delegated to platform operations teams."),(0,i.yg)("p",null,"Capabilities in level 3 would be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"application subscriptions creation"),": capability to create subscriptions for various environments: Development, Test, UAT, DR, etc."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"privileged infrastructure services"),": to support the application platform. This would usually include components like virtual network blocks, virtual network peering objects to hubs, route tables and delegated identities (to deploy level4 services and whenever applicable applications deployment credentials).")),(0,i.yg)("h3",{id:"level-4-applications-landing-zone"},"Level 4: Applications landing zone"),(0,i.yg)("p",null,"This level contains the application configuration ",(0,i.yg)("strong",{parentName:"p"},"delegated for application teams"),"."),(0,i.yg)("p",null,"It contains for example Azure Kubernetes Services Cluster, API Management services and all its dependency to deliver a service. This can be sourced from Azure landing zones solution accelerators, a custom solutions implemented using CAF module or any other Terraform code."),(0,i.yg)("p",null,"The following pictures illustrates the split between level 3 and 4:\n",(0,i.yg)("img",{alt:"Data and AI landing zones accross level 3 and 4",src:t(9915).A,width:"3000",height:"1743"}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure 2: Example of Data and AI landing zone for level 3 and 4")),(0,i.yg)("p",null,"The broader picture on the complete environment would look like that:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Subscription Vending Machine Example",src:t(5720).A,width:"3022",height:"1476"}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure 3: Subscription Vending Machine Example")),(0,i.yg)("h3",{id:"operating-with-levels"},"Operating with levels"),(0,i.yg)("p",null,"A deployment will typically contain:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A couple of level 0 landing zones."),(0,i.yg)("li",{parentName:"ul"},"Few level 1 and 2 landing zones."),(0,i.yg)("li",{parentName:"ul"},"Many level 3 landing zones."),(0,i.yg)("li",{parentName:"ul"},"Many level 4 applications will exist in an environment.")),(0,i.yg)("p",null,"For a given level in the environment, each compute node (see below) will be assigned an identity (see below) that will be used to authenticate and authorize operations on:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The target Azure Subscription"),(0,i.yg)("li",{parentName:"ul"},'The Terraform state file: will be Read and Write permissions for the current level, will be Read only permissions for a "lower" level type of landing zone, avoiding alterations on more privileged environments.')),(0,i.yg)("p",null,"In the example above, each pipeline will have its lifecycle management:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Level 0 and 1 will be called when updating the core platform."),(0,i.yg)("li",{parentName:"ul"},"Level 2 will be triggered when you are opening a new regional hub, or adding connectivity capabilities."),(0,i.yg)("li",{parentName:"ul"},"Level 3 will be triggered when you deploy a new service (Application Gateway, App Service Environment, Azure Kubernetes Services, etc.)"),(0,i.yg)("li",{parentName:"ul"},"Level 4 can be initiated as many times a day as you deploy code in your application environment.")),(0,i.yg)("p",null,"An enterprise environment will consist of a series of pipelines enforcing the different types of environments in different subscriptions."))}m.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5720:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/terraform-model-levels-svm-fcb46194d9869c785d46290b47da40d6.png"},6235:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/terraform-model-levels-eb5316af5b6561974d8373aa18d955b6.png"},9915:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/terraform-model-levels3-4-f637807b6e806a0c83b76d8ae87b966c.png"}}]);