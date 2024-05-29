"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3048],{4556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const l={id:"elsz-files-reference",sidebar_position:3},i="Core files settings reference",g={unversionedId:"azure-landing-zones/landingzones/platform/elsz-files-reference",id:"azure-landing-zones/landingzones/platform/elsz-files-reference",title:"Core files settings reference",description:"In this section, we will review the fundamental parameters to deploy customized stack and review the various parameters.",source:"@site/docs/azure-landing-zones/landingzones/platform/files_reference.md",sourceDirName:"azure-landing-zones/landingzones/platform",slug:"/azure-landing-zones/landingzones/platform/elsz-files-reference",permalink:"/documentation/docs/next/azure-landing-zones/landingzones/platform/elsz-files-reference",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/azure-landing-zones/landingzones/platform/files_reference.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"elsz-files-reference",sidebar_position:3},sidebar:"cafSidebar",previous:{title:"Choose your deployment mode",permalink:"/documentation/docs/next/azure-landing-zones/landingzones/platform/eslz-choices"},next:{title:"Single subscription deployment lab",permalink:"/documentation/docs/next/azure-landing-zones/landingzones/platform/single reuse/elsz-single-reuse"}},o={},p=[{value:"ignite.yaml",id:"igniteyaml",level:2},{value:"top level variables",id:"top-level-variables",level:3},{value:"naming_convention",id:"naming_convention",level:3},{value:"caf_launchpad",id:"caf_launchpad",level:3},{value:"billing_subscription_role_delegations",id:"billing_subscription_role_delegations",level:3},{value:"configuration_folders",id:"configuration_folders",level:3},{value:"management_groups",id:"management_groups",level:3},{value:"subscriptions",id:"subscriptions",level:3},{value:"networking_topology",id:"networking_topology",level:3},{value:"platform_identity",id:"platform_identity",level:3}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"core-files-settings-reference"},"Core files settings reference"),(0,r.yg)("p",null,"In this section, we will review the fundamental parameters to deploy customized stack and review the various parameters."),(0,r.yg)("h2",{id:"igniteyaml"},"ignite.yaml"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ignite.yaml")," contains all core parameters that will be reused across all levels, entries in this file will be used to generate configuration files and the readme files to execute all the commands in the various levels.\nThe root of this file is called ",(0,r.yg)("inlineCode",{parentName:"p"},"caf_terraform:")," and contains the following sections:"),(0,r.yg)("h3",{id:"top-level-variables"},"top level variables"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"customer_name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"only lowercase with no spaces"),(0,r.yg)("td",{parentName:"tr",align:null},"Is used to create the folder name to store the definition and configuration files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caf_environment"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"any string"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the environment to use or to create. A ",(0,r.yg)("inlineCode",{parentName:"td"},"caf_environment")," is used to discriminate multiple environments that could live on the same subscriptions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"default_email_address"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"email format"),(0,r.yg)("td",{parentName:"tr",align:null},"Individual or distribution list to send subscription health alerts.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"alz_mg_prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"between 2 and 10 characters"),(0,r.yg)("td",{parentName:"tr",align:null},"Azure landing zones management group prefix.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"alz_mg_name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"any string"),(0,r.yg)("td",{parentName:"tr",align:null},"Azure Management group name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"azure_regions"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"map (key=region key, value= region)"),(0,r.yg)("td",{parentName:"tr",align:null},"List of the Azure regions where services are authorized to be deployed. The region must be the small, lower-case with no space format (i.e: southeastasia)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Use a prefix to put in front of all names generated.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"deployment_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"'platform' or 'asvm'"),(0,r.yg)("td",{parentName:"tr",align:null},"Inform the rover ignite if the deployments are for the platform or for an application landing zone.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caf_landingzone_branch"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"tag or branch name"),(0,r.yg)("td",{parentName:"tr",align:null},"Release number from the repo ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/Azure/caf-terraform-landingzones/releases"},"https://github.com/Azure/caf-terraform-landingzones/releases"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caf_regions"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"yaml list of objects"),(0,r.yg)("td",{parentName:"tr",align:null},"List of the Azure regions generated by the rover ignite from the azure_regions variable.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"resources_allowed_regions"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"yaml list of string"),(0,r.yg)("td",{parentName:"tr",align:null},"List of the region's key used by Azure policies to defined the Azure regions where services can be deployed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"resource_groups_allowed_regions"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"yaml list of string"),(0,r.yg)("td",{parentName:"tr",align:null},"List of the region's key used by Azure policies to defined the Azure regions where the resource groups can be deployed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"default_region_key"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"caf_regions key"),(0,r.yg)("td",{parentName:"tr",align:null},"Value of the region's key that will be used when a resource does not explicitly mention the region to use.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"azuread_user_ea_account_owner"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"user principal name"),(0,r.yg)("td",{parentName:"tr",align:null},"User Principal Name of the Azure AD principal deploying the platform landing zones.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ea_owner_object_id"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"guid"),(0,r.yg)("td",{parentName:"tr",align:null},"GUID of the Azure AD principal deploying the platform landing zones.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"azuread_identity_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"'service_principal'"),(0,r.yg)("td",{parentName:"tr",align:null},"Type of principal used to secure the levels in the Azure Terraform SRE landing zones.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_azuread_groups"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable the creation of the Azure AD groups required to set the operation model.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_azuread_applications"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Grant the identity principal the Azure AD API privilege to manage Azure AD applications.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_azure_subscription_vending_machine"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable the Azure Subscription Vending Machine to deploy Azure landing zone solutions accelerators.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"subscription_deployment_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"'single_reuse'"),(0,r.yg)("td",{parentName:"tr",align:null},"'single_resuse' deploys all platform and application landing zones into the same existing Azure subscription.")))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"caf_regions")," blocks will contain a structure of keys with name and short names (slug) as in the following example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"caf_regions:\n  region1:\n      # set the short form of the Azure region\n    name: southeastasia  # Use the lower-case region's name, short version with no space\n  region2:\n    name: eastasia  # Use the lower-case region's name, short version with no space\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"any string"),(0,r.yg)("td",{parentName:"tr",align:null},"region1 and region2 are the keys, they can be any string.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"any Azure region name"),(0,r.yg)("td",{parentName:"tr",align:null},"name of the region as in the Azure available regions list.")))),(0,r.yg)("h3",{id:"naming_convention"},"naming_convention"),(0,r.yg)("p",null,"The section is used to describe how names are being created in the platform, in development phases, we often use part of the name to be automatically generated so we can integrate and test faster, once you are reaching production, you will use name as passthrough in order to apply your own naming convention."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"passthrough"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"When set to true, use the name as specified in the files after filtering. If set to false, will add generate names aligned to CAF guidance will prefixes if defined.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Use a prefix to put in front of all names generated.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"random_length"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The number or randomly generated characters at the end of the resource name, if passthrough is set to false.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inherit_tags"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Define if resources will inherit the tags defined at the resource group level.")))),(0,r.yg)("h3",{id:"caf_launchpad"},"caf_launchpad"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"subscription_id"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"GUID of the subscription to use to deploy launchpad.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"subscription_name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the subscription to use to deploy launchpad.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tenant_id"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Home tenant of the subscription to use to deploy launchpad.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"global_tags_propagated"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"If set to true, the tags defined in launchpad will be propagated to all resources in this environment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tags"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"block of tags"),(0,r.yg)("td",{parentName:"tr",align:null},"A block of tags that will be added to the launchpad.")))),(0,r.yg)("h3",{id:"billing_subscription_role_delegations"},"billing_subscription_role_delegations"),(0,r.yg)("p",null,"This section defines settings for the subscription billing role delegation from and EA or MCA account."),(0,r.yg)("p",null,"If you are not planning to generate subscriptions automatically, you can define it to false, you will still need to input the azuread_user settings."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Enable the subscription billing account delegation functions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"azuread_user_ea_account_owner"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"UPN of the user doing the manual deployment of the platform. Must be populated even if you are not using automatic subscription generation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"azuread_user_ea_account_owner_object_id"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"GUID of the user doing the manual deployment of the platform. Must be populated even if you are not using automatic subscription generation. If that user is already loged-in to an azure cli session you can get the object_id by running: ",(0,r.yg)("inlineCode",{parentName:"td"},"az ad signed-in-user show --query objectId -o tsv"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"billing_account_name"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"Billing account name (typically 8 digits)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enrollment_account_name"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"Enrollment account name (typically 6 digits)")))),(0,r.yg)("h3",{id:"configuration_folders"},"configuration_folders"),(0,r.yg)("p",null,"This section defines how and where the output files (Terraform configuration files) are going to be stored."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"platform"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"block"),(0,r.yg)("td",{parentName:"tr",align:null},"content of the block described below.")))),(0,r.yg)("p",null,"The platform block takes the following settings:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cleanup_destination"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"true: forces the destination folder to be deleted and re-created before the files are created. false: create the target folder structure if it does not exist. On sub-sequent executions, the folder structure is reused as is.")))),(0,r.yg)("h3",{id:"management_groups"},"management_groups"),(0,r.yg)("p",null,"The settings in this section defines the core behavior of the environment including reference to the enterprise-scale architecture.\nIt is following the structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"management_groups:\n  region1:    // key of the default region used by enterprise-scale.\n    es:       // alz_mg_prefix.\n      {{enterprise_scale}}    // block as defined bellow.\n\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enterprise_scale"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"block"),(0,r.yg)("td",{parentName:"tr",align:null},"content of the block described below.")))),(0,r.yg)("p",null,"The enterprise_scale block takes the following parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"management_group_name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"strings"),(0,r.yg)("td",{parentName:"tr",align:null},"The base path to generate the files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"management_group_prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"strings"),(0,r.yg)("td",{parentName:"tr",align:null},"The second part of the path where to generate the configuration files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"deploy_core_landing_zones"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"True"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"False")),(0,r.yg)("td",{parentName:"tr",align:null},"true: forces the destination folder to be deleted and re-created before the files are created. false: create the target folder structure if it does not exist. On sub-sequent executions, the folder structure is reused as is.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clean_up_destination_folder"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"True"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"False")),(0,r.yg)("td",{parentName:"tr",align:null},"The second part of the path where to generate the configuration files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"root_parent_id"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"strings"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the root parent id where you want to deploy the enterprise scale management groups hierarchy.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"update_lib_folder"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"True"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"False")),(0,r.yg)("td",{parentName:"tr",align:null},"Update your definition lib folder")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version_to_deploy"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"'v1.1.3', 'v1.1.1'"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the enterprise-scale module version to deploy.")))),(0,r.yg)("h3",{id:"subscriptions"},"subscriptions"),(0,r.yg)("p",null,"This settings defines the Azure subscriptions that will be created or re-used to deploy the platform landing zones."),(0,r.yg)("p",null,"It is following the structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"subscriptions:\n  launchpad:    # key of launchpad.   Do not rename the key\n    {{subscription}}\n  identity:    # key of launchpad.   Do not rename the key\n    {{subscription}}\n  connectivity:    # key of launchpad.   Do not rename the key\n    {{subscription}}\n  management:    # key of launchpad.   Do not rename the key\n    {{subscription}}\n\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"subscription"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"block"),(0,r.yg)("td",{parentName:"tr",align:null},"content of the block described below.")))),(0,r.yg)("p",null,"The subscription block takes the following parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the subscription.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"create_alias"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"When re-using an existing subscription by setting a value to subscription_id, create an alias if the principal has API subscription creation permissions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"subscription_id"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"guid"),(0,r.yg)("td",{parentName:"tr",align:null},"When set, reuse that subscription instead of creating a new one.")))),(0,r.yg)("h3",{id:"networking_topology"},"networking_topology"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"deployment_option"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"virtual_wan")),(0,r.yg)("td",{parentName:"tr",align:null},"Currently supported mode is only ",(0,r.yg)("inlineCode",{parentName:"td"},"virtual_wan"),", this might change in the future depending on customer requests.")))),(0,r.yg)("h3",{id:"platform_identity"},"platform_identity"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"possible values"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tenant_name"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the primary domain name of the Azure Active Directory tenant (*.onmicrosoft.com or custom domain name)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"azuread_identity_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"logged_in_user"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"service_principal")),(0,r.yg)("td",{parentName:"tr",align:null},"Currently supported mode for production is ",(0,r.yg)("inlineCode",{parentName:"td"},"service_principal"),", for lab and learning purposes, we support ",(0,r.yg)("inlineCode",{parentName:"td"},"logged_in_user")," to run command from rover in interactive environment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caf_platform_maintainers"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"list of principal names"),(0,r.yg)("td",{parentName:"tr",align:null},"Ignored in logged in user mode, contains the list of UPN or groups to be added in the security group ",(0,r.yg)("inlineCode",{parentName:"td"},"caf_platform_maintainers"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caf_platform_contributors"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"list of principal names"),(0,r.yg)("td",{parentName:"tr",align:null},"Only used in service_principal mode, contains the list of UPN or groups to be added in the security group ",(0,r.yg)("inlineCode",{parentName:"td"},"caf_platform_contributors"))))))}u.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),s=p(n),y=r,m=s["".concat(o,".").concat(y)]||s[y]||u[y]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[s]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);