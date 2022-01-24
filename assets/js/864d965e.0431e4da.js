"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3138],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2112:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"lz-intro",sidebar_position:2},s="CAF Terraform landing zones core mechanisms",c={unversionedId:"landingzones/lz-intro",id:"landingzones/lz-intro",title:"CAF Terraform landing zones core mechanisms",description:"To address enterprise complexity, we recommend isolating and decomposing a complex environment in multiple state files.",source:"@site/docs/landingzones/intro.md",sourceDirName:"landingzones",slug:"/landingzones/lz-intro",permalink:"/documentation/docs/landingzones/lz-intro",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/landingzones/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lz-intro",sidebar_position:2},sidebar:"docs",previous:{title:"landing zones intro",permalink:"/documentation/docs/category/landing-zones-intro"},next:{title:"module",permalink:"/documentation/docs/category/module"}},p=[{value:"The levels approach",id:"the-levels-approach",children:[{value:"Level 0: Core platform automation",id:"level-0-core-platform-automation",children:[],level:3},{value:"Level 1: Core platform governance",id:"level-1-core-platform-governance",children:[],level:3},{value:"Level 2: Core platform connectivity",id:"level-2-core-platform-connectivity",children:[],level:3},{value:"Level 3: Application landing zones vending machine",id:"level-3-application-landing-zones-vending-machine",children:[],level:3},{value:"Level 4: Applications landing zone",id:"level-4-applications-landing-zone",children:[],level:3},{value:"Operating with levels",id:"operating-with-levels",children:[],level:3}],level:2},{value:"Compute Nodes",id:"compute-nodes",children:[],level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[],level:2},{value:"Transparent composition across layers",id:"transparent-composition-across-layers",children:[{value:"Global settings",id:"global-settings",children:[],level:3}],level:2},{value:"Deploy sample configuration",id:"deploy-sample-configuration",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"caf-terraform-landing-zones-core-mechanisms"},"CAF Terraform landing zones core mechanisms"),(0,o.kt)("p",null,"To address enterprise complexity, we recommend isolating and decomposing a complex environment in multiple state files."),(0,o.kt)("p",null,"The main concern with state files is related to security, as a Terraform state file might contain credentials, security tokens, keys etc. It is reasonable that state files corresponding to different levels of privileges are stored separately."),(0,o.kt)("p",null,"Another concern with state file, which calls for segregation, is the speed of innovation: When someone is conducting a change for a resource in a given state file, no-one else can change the state file at the same time, so having a limited number of state files can hinder the testing or integration processes in the enterprise."),(0,o.kt)("p",null,"Finally since DevOps is building in teams, we want to unlock autonomy of teams yet delegating some functions (application teams will not re-invent the networking layers but build on it). It will mean the capability to read a state file to do rich composition but without the possibility to alter the state file from other teams."),(0,o.kt)("p",null,"In CAF Terraform landing zones, separating the Terraform state files enables you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Control blast radius"),": if one configuration is deficient, it only impacts one landing zone and does not compromise the whole environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enforce standard configuration"),": by using different Terraform state, you can compose a complex environment very fast."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enable autonomy"),": different landing zones can enable innovation and features at different pace from each other."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Least privilege principles"),": Each level is protected by its own identity to prevent unwanted information disclosure and modifications.")),(0,o.kt)("h2",{id:"the-levels-approach"},"The levels approach"),(0,o.kt)("p",null,"We categorize and store state files into ",(0,o.kt)("em",{parentName:"p"},"levels"),"."),(0,o.kt)("p",null,"A level groups together a set of state files that needs separation because of different ",(0,o.kt)("strong",{parentName:"p"},"lifecycles")," or ",(0,o.kt)("strong",{parentName:"p"},"privileges"),"."),(0,o.kt)("p",null,"The model can be summarized as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Model for levels for CAF Terraform landing zones",src:n(7585).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure 1: An overview of the levels proposed by CAF Terraform landing zones to structure Terraform states")),(0,o.kt)("p",null,"The core principles are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"One level can host multiple state files"),": A level is implemented as an Azure storage account with specific permissions, you can store as many Terraform state files as necessary on a particular level."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rover helps you locate the right storage account"),": Whether you are running CAF landing zones locally or in pipeline, rover helps you locate the right storage account for a given environment and level. Authorization to deploy at a level is granted by Azure RBAC model and enforced at runtime (with the current logged in user credentials, or via the pipeline credentials)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You can only write in your current level"),": at a given level, you can only write the Terraform state file that you are responsible for."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Read one level down"),": at any particular level, you are able to read information one level down for your composition (one AKS cluster at level 3 can read the Terraform state file at level 2 to compose)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codeless state reading and enterprise composition"),": CAF Terraform landing zones come with an object model that allow to load any landing zone (given principal accessing it has access ) in memory and compose from it.")),(0,o.kt)("p",null,"Cloud Adoption Framework for Azure proposes a hierarchy of landing zones based on five levels as described below:"),(0,o.kt)("h3",{id:"level-0-core-platform-automation"},"Level 0: Core platform automation"),(0,o.kt)("p",null,"The different landing zones represented in different state files at level 0 would typically be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"launchpad")," (storage accounts, Key Vault, RBAC, etc.) components related to Terraform state management."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"subscription creation delegation")," capabilities derived from the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/cost-management-billing/manage/ea-portal-get-started"},"Enterprise Agreement")," or ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/cost-management-billing/understand/mca-overview"},"Microsoft Customer Agreement"),"."),(0,o.kt)("li",{parentName:"ul"},"The credential rotation mechanisms and role-based access control core models.")),(0,o.kt)("h3",{id:"level-1-core-platform-governance"},"Level 1: Core platform governance"),(0,o.kt)("p",null,"The different landing zones represented in different state files at level 1 would typically be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"enterprise-scale")," (management groups, policies) this would include the core enterprise-scale capabilities with the related custom management group structures and policies configuration. You can either use the out-of-the-box settings for enterprise-scale or customize the values for your organization."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"GitOps services")," for core platform automation: creating the pipelines, creating the Virtual Network and compute nodes (see below) required for the DevOps self-hosted agents."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"platform subscription creation")," for core platform (to create the core enterprise-scale subscriptions like Identify, Management, Connectivity etc.)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"management subscription services")," for core platform capabilities such as log management, Azure Monitor capabilities, etc."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"identity subscription services")," for core platform such as domain controller virtual machines, Azure Active Directory Domain Services, Azure AD Group mappings etc.")),(0,o.kt)("h3",{id:"level-2-core-platform-connectivity"},"Level 2: Core platform connectivity"),(0,o.kt)("p",null,"The different landing zones represented in different state files at level 2 would typically be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"connectivity subscription components"),": including the virtual networking components like classic Virtual Network-based Hub and Spoke, Azure Virtual WAN, Azure Virtual WAN regional hub, site-to-site, point-to-site and ExpressRoute connectivity objects, or third parties Network Virtual Appliances. Due to their regional nature, it is likely that each of those components would live inside a different Terraform state file."),(0,o.kt)("li",{parentName:"ul"},"Additional ",(0,o.kt)("strong",{parentName:"li"},"identity subscription services"),": could be Azure Active Directory Domain Services (managed AD), or Virtual-machine-based domain controllers."),(0,o.kt)("li",{parentName:"ul"},"Additional ",(0,o.kt)("strong",{parentName:"li"},"management subscription services"),": could be System Center Configuration Manager, Shared Imaged Galleries, Monitor Alerts or third parties management tools.")),(0,o.kt)("h3",{id:"level-3-application-landing-zones-vending-machine"},"Level 3: Application landing zones vending machine"),(0,o.kt)("p",null,"A landing zone for application is split between two levels. Level 3 includes components of an application that are typically delegated to platform operations teams."),(0,o.kt)("p",null,"Capabilities in level 3 would be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"application subscriptions creation"),": capability to create subscriptions for various environments: Development, Test, UAT, DR, etc."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"privileged infrastructure services"),": to support the application platform. This would usually include components like virtual network blocks, virtual network peering objects to hubs, route tables and delegated identities (to deploy level4 services and whenever applicable applications deployment credentials).")),(0,o.kt)("h3",{id:"level-4-applications-landing-zone"},"Level 4: Applications landing zone"),(0,o.kt)("p",null,"This level contains the application configuration ",(0,o.kt)("strong",{parentName:"p"},"delegated for application teams"),"."),(0,o.kt)("p",null,"It contains for example Azure Kubernetes Services Cluster, API Management services and all its dependency to deliver a service. This can be sourced from Azure landing zones solution accelerators, a custom solutions implemented using CAF module or any other Terraform code."),(0,o.kt)("p",null,"The following pictures illustrates the split between level 3 and 4:\n",(0,o.kt)("img",{alt:"Data and AI landing zones accross level 3 and 4",src:n(3081).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure 2: Example of Data and AI landing zone for level 3 and 4")),(0,o.kt)("p",null,"The broader picture on the complete environment would look like that:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Subscription Vending Machine Example",src:n(2161).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure 3: Subscription Vending Machine Example")),(0,o.kt)("h3",{id:"operating-with-levels"},"Operating with levels"),(0,o.kt)("p",null,"A deployment will typically contain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A couple of level 0 landing zones."),(0,o.kt)("li",{parentName:"ul"},"Few level 1 and 2 landing zones."),(0,o.kt)("li",{parentName:"ul"},"Many level 3 landing zones."),(0,o.kt)("li",{parentName:"ul"},"Many level 4 applications will exist in an environment.")),(0,o.kt)("p",null,"For a given level in the environment, each compute node (see below) will be assigned an identity (see below) that will be used to authenticate and authorize operations on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The target Azure Subscription"),(0,o.kt)("li",{parentName:"ul"},'The Terraform state file: will be Read and Write permissions for the current level, will be Read only permissions for a "lower" level type of landing zone, avoiding alterations on more privileged environments.')),(0,o.kt)("p",null,"In the example above, each pipeline will have its lifecycle management:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Level 0 and 1 will be called when updating the core platform."),(0,o.kt)("li",{parentName:"ul"},"Level 2 will be triggered when you are opening a new regional hub, or adding connectivity capabilities."),(0,o.kt)("li",{parentName:"ul"},"Level 3 will be triggered when you deploy a new service (Application Gateway, App Service Environment, Azure Kubernetes Services, etc.)"),(0,o.kt)("li",{parentName:"ul"},"Level 4 can be initiated as many times a day as you deploy code in your application environment.")),(0,o.kt)("p",null,"An enterprise environment will consist of a series of pipelines enforcing the different types of environments in different subscriptions."),(0,o.kt)("h2",{id:"compute-nodes"},"Compute Nodes"),(0,o.kt)("p",null,"Since many organizations do not desire to share sensitive credentials or privileges on public running agents, most of the time, enterprises will delegate running a landing zone to dedicated compute nodes, running from their private virtual networks. Depending on your Continuous Integration and Continuous Deployment toolset, those compute capabilities could be called self-hosted agents, runners, etc."),(0,o.kt)("p",null,"Those compute capabilities would need to run containers as the rover and could be implemented in the shape of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"Azure Virtual Machines")," for each level in a given environment, each VM can contain a set of runners(container instances), that would be ready to be invoked and run in parallel if required."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"Azure Kubernetes Services")," for a given environment. Each level would be impersonated in a different node pool, and each node pool would use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity"},"Azure Active Directory pod identity"),". If there is a need to increase the number of runners for a particular level, this could be achieved using AKS pod autoscaler capability.")),(0,o.kt)("p",null,"CAF Terraform landing zones provide by default a set of DevOps runners for the following platforms: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/devops/pipelines/agents/agents"},"Azure DevOps"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/runner/"},"Git Lab"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/cloud/agents/index.html"},"Terraform Cloud and Terraform Enterprise")," and are available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aztfmod/rover/tree/master/agents"},"GitHub")," for customization."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example of DevOps Compute Nodes for the GitOps environment",src:n(9139).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Figure 3: Example of DevOps Compute Nodes for the GitOps environment")),(0,o.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,o.kt)("p",null,"As default methodology, CAF Terraform landing zones use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview"},"Azure Managed Identities")," capability for the DevOps compute nodes running on Azure."),(0,o.kt)("p",null,"Customer can also use Service principals to be used at different levels of the hierarchy, the down-side of using Service Principal is to manage lifecycle of the attached secrets."),(0,o.kt)("p",null,"The authorization related to either type of principals can be defined as part of the CAF Terraform landing zones configuration syntax."),(0,o.kt)("h2",{id:"transparent-composition-across-layers"},"Transparent composition across layers"),(0,o.kt)("p",null,"To deliver a complete environment, just as for any other software project, we want to avoid a monolithic configuration and instead compose an environment calling multiple landing zones."),(0,o.kt)("p",null,"With Terraform, you can read a state file's output and use it as input variables for another landing zone."),(0,o.kt)("p",null,"We use this feature to compose complex architectures as illustrated above, without writing any line of code. Reading another landing zone content is implemented by a variable, vastly simplifying for you the composition and the complex configuration creation."),(0,o.kt)("h3",{id:"global-settings"},"Global settings"),(0,o.kt)("p",null,"A few exceptions exist to the hierarchy model, there are variables and value that are persisted across all levels and reachable from all levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"global settings"),": everything related to the commons for a particular environment (which regions are supported for an environment, which naming convention is used, the tags inheritance settings, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"diagnostics settings"),": any diagnostics repository you create at any level will be stored and will become composable from the current and above levels.")),(0,o.kt)("h2",{id:"deploy-sample-configuration"},"Deploy sample configuration"),(0,o.kt)("p",null,"Now that you understand the basic mechanisms, you can review a sample configuration of different levels into the CAF Starter repo, which contains a sample hierarchy that you can deploy within a same subscription or scaling across multiple subscriptions."))}d.isMDXComponent=!0},9139:function(e,t,n){t.Z=n.p+"assets/images/terraform-model-gitops-f50c61aba6ca7dbb1e1fb732850c7b38.png"},2161:function(e,t,n){t.Z=n.p+"assets/images/terraform-model-levels-svm-fcb46194d9869c785d46290b47da40d6.png"},7585:function(e,t,n){t.Z=n.p+"assets/images/terraform-model-levels-eb5316af5b6561974d8373aa18d955b6.png"},3081:function(e,t,n){t.Z=n.p+"assets/images/terraform-model-levels3-4-f637807b6e806a0c83b76d8ae87b966c.png"}}]);