"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[848],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3424:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={id:"level0",sidebar_position:2},s="Ignite the platform",c={unversionedId:"enterprise-scale/landingzones/platform/level0",id:"enterprise-scale/landingzones/platform/level0",title:"Ignite the platform",description:"Once you have completed the customization of the default templates to your needs, you will use the rover ignite command that will guide you in the generation of the Terraform configuration files and help you gradually deploying the Azure services in the platform landingzones. This tutorial, is showing you how to deploy using the interactive mode from the visual studio code console.",source:"@site/docs/enterprise-scale/landingzones/platform/ignite.md",sourceDirName:"enterprise-scale/landingzones/platform",slug:"/enterprise-scale/landingzones/platform/level0",permalink:"/documentation/docs/enterprise-scale/landingzones/platform/level0",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/enterprise-scale/landingzones/platform/ignite.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"level0",sidebar_position:2}},d=[{value:"Privileges",id:"privileges",children:[],level:2},{value:"Login the Azure management subscription",id:"login-the-azure-management-subscription",children:[],level:2},{value:"Triger rover ignite",id:"triger-rover-ignite",children:[],level:2},{value:"Deploy launchpad (level0)",id:"deploy-launchpad-level0",children:[],level:2}],p={toc:d};function u(e){var n=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ignite-the-platform"},"Ignite the platform"),(0,i.kt)("p",null,"Once you have completed the customization of the default templates to your needs, you will use the rover ignite command that will guide you in the generation of the Terraform configuration files and help you gradually deploying the Azure services in the platform landingzones. This tutorial, is showing you how to deploy using the interactive mode from the visual studio code console. "),(0,i.kt)("p",null,"More scenario will be added in the coming month"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deployment from pipelines (Github, Jenkins, Azure Devops, Gitlab)"),(0,i.kt)("li",{parentName:"ul"},"Azure subscription creation automation"),(0,i.kt)("li",{parentName:"ul"},"Azure Subscription Vending Machine (ASVM) to generate application landingzones"),(0,i.kt)("li",{parentName:"ul"},"Deployment of a landingzone accelerator in an application landingzone ")),(0,i.kt)("h2",{id:"privileges"},"Privileges"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To deploy the platform landinzones, you need the following privileges"),(0,i.kt)("p",{parentName:"div"},"Azure Active Directory"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Global Administrator")),(0,i.kt)("p",{parentName:"div"},"Azure subscriptions"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Management (owner)"),(0,i.kt)("li",{parentName:"ul"},"Identity (owner)"),(0,i.kt)("li",{parentName:"ul"},"Connectivity (owner)")))),(0,i.kt)("h2",{id:"login-the-azure-management-subscription"},"Login the Azure management subscription"),(0,i.kt)("p",null,"The first is to login the terminal session to your Azure tenant and subscription."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  landingzones git:(2112.int) \u2717 rover login -t <tenant_name> -s <management_guid_subscription>\n\n  /$$$$$$   /$$$$$$  /$$$$$$$$       /$$$$$$$\n /$$__  $$ /$$__  $$| $$_____/      | $$__  $$\n| $$  \\__/| $$  \\ $$| $$            | $$  \\ $$  /$$$$$$  /$$    /$$/$$$$$$   /$$$$$$\n| $$      | $$$$$$$$| $$$$$         | $$$$$$$/ /$$__  $$|  $$  /$$/$$__  $$ /$$__  $$\n| $$      | $$__  $$| $$__/         | $$__  $$| $$  \\ $$ \\  $$/$$/ $$$$$$$$| $$  \\__/\n| $$    $$| $$  | $$| $$            | $$  \\ $$| $$  | $$  \\  $$$/| $$_____/| $$\n|  $$$$$$/| $$  | $$| $$            | $$  | $$|  $$$$$$/   \\  $/ |  $$$$$$$| $$\n \\______/ |__/  |__/|__/            |__/  |__/ \\______/     \\_/   \\_______/|__/\n\n\n              version: aztfmod/rover-preview:1.1.3-2201.181012\n\n@calling verify_azure_session\n\nChecking existing Azure session\nLogin to azure with tenant terraformdev.onmicrosoft.com\nWARNING: To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code 12345567 to authenticate.\n\n")),(0,i.kt)("p",null,"Click on the URL ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.com/devicelogin"},"https://microsoft.com/devicelogin"),", set the code and authenticate with your Azure Account."),(0,i.kt)("p",null,"When the login is successfull, you see the rover displaying the context of your Azure environment. Verify everything is correct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Set default subscription to 558a029f-aba1-47ff-b620-1d01350e2dd5\nChecking existing Azure session\n@calling process_target_subscription\nSet TF_VAR_tfstate_subscription_id variable to current session's subscription.\ncaf_command login\ntarget_subscription_id 558a029f-aba1-47ff-b620-1d01350e2dd5\nTF_VAR_tfstate_subscription_id 558a029f-aba1-47ff-b620-1d01350e2dd5\nResources from this landing zone are going to be deployed in the following subscription:\n{\n  \"environmentName\": \"AzureCloud\",\n  \"homeTenantId\": \"6700cd11-1a2f-42e9-9ef4-1a919dd66613\",\n  \"id\": \"558a029f-aba1-47ff-b620-1d01350e2dd5\",\n  \"isDefault\": true,\n  \"managedByTenants\": [],\n  \"name\": \"contoso-management\",\n  \"state\": \"Enabled\",\n  \"tenantId\": \"6700cd11-1a2f-42e9-9ef4-1a919dd66613\",\n  \"user\": {\n    \"name\": \"lalesle@microsoft.com\",\n    \"type\": \"user\"\n  }\n}\ndebug: 558a029f-aba1-47ff-b620-1d01350e2dd5\nTfstates subscription set to 558a029f-aba1-47ff-b620-1d01350e2dd5 (contoso-management)\n\n\nmode                          : 'login'\nterraform command output file : ''\nterraform plan output file    : ''\ndirectory cache               : '/home/vscode/.terraform.cache'\ntf_action                     : ''\ncommand and parameters        : ''\n\nlevel (current)               : 'level0'\nenvironment                   : 'sandpit'\nworkspace                     : 'tfstate'\nterraform backend type        : 'azurerm'\ntfstate                       : ''\ntfstate subscription id       : '558a029f-aba1-47ff-b620-1d01350e2dd5'\ntarget subscription           : 'contoso-management'\nCI/CD enabled                 : 'false'\nSymphony Yaml file path       : ''\nRun all tasks                 : 'true'\nTF_IN_AUTOMATION              : 'true'\n\n@calling process_actions\n\nYou can deploy a landingzone with the rover by running:\n  rover -lz [landingzone_folder_name] -a [plan|apply|destroy|validate|refresh|graph|import|output|taint|untaint|'state list'|'state rm'|'state show']\n\n@calling clean_up_variables\ncleanup variables\nclean_up backend_files\n\u279c  caf git:(main) \u2717 \n")),(0,i.kt)("h2",{id:"triger-rover-ignite"},"Triger rover ignite"),(0,i.kt)("p",null,"From now on you will have to follow the readme.md located in your repository (",(0,i.kt)("strong",{parentName:"p"},"/tf/caf/orgs/contoso/platform/README.md"),") and follow the instructions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rover ignite \\\n  --playbook /tf/caf/landingzones/templates/platform/ansible.yaml \\\n  -e base_templates_folder=/tf/caf/landingzones/templates/platform \\\n  -e resource_template_folder=/tf/caf/landingzones/templates/resources \\\n  -e config_folder=/tf/caf/orgs/contoso/platform\n")),(0,i.kt)("p",null,"The output of the rover ignite will start creating the target configuration folder structure and Terraform files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"TASK [[level0-launchpad] Clean-up directory] *************************************************************\nskipping: [localhost]\n\nTASK [[level0-launchpad] Creates directory] **************************************************************\nchanged: [localhost]\n\nTASK [[level0-launchpad] - resources - resource_groups] **************************************************\nchanged: [localhost] => (item=/tf/caf/landingzones/templates/resources/resource_groups.tfvars.j2)\n\nTASK [[level0-launchpad] launchpad] **********************************************************************\nchanged: [localhost] => (item=dynamic_secrets)\nchanged: [localhost] => (item=global_settings)\nchanged: [localhost] => (item=keyvaults)\nchanged: [localhost] => (item=landingzone)\nchanged: [localhost] => (item=role_mappings)\nchanged: [localhost] => (item=storage_accounts)\n\nTASK [[level0-launchpad] Clean-up identity files] ********************************************************\nskipping: [localhost] => (item=azuread_api_permissions) \nskipping: [localhost] => (item=azuread_applications) \nskipping: [localhost] => (item=azuread_group_members) \nskipping: [localhost] => (item=azuread_groups) \nskipping: [localhost] => (item=azuread_roles) \nskipping: [localhost] => (item=keyvault_policies) \nskipping: [localhost] => (item=service_principals) \n\nTASK [[level0-launchpad] lauchpad - identity - service_principal] ****************************************\nchanged: [localhost] => (item=azuread_api_permissions)\nchanged: [localhost] => (item=azuread_applications)\nchanged: [localhost] => (item=azuread_group_members)\nchanged: [localhost] => (item=azuread_groups)\nchanged: [localhost] => (item=azuread_roles)\nchanged: [localhost] => (item=keyvault_policies)\nchanged: [localhost] => (item=service_principals)\n\nTASK [[level0-launchpad] Deploy the launchpad] ***********************************************************\nskipping: [localhost]\n\nTASK [[level0-launchpad] Get tfstate account name] *******************************************************\nchanged: [localhost]\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On the first execution of the rover ignite command, you will notice some red errors. It is exepected as nothing has been deployed yet and the rover ignite is trying to find the launchpad and the services already deployed."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'TASK [[level0-launchpad] Get launchpad tfstate details] **************************************************\nfatal: [localhost]: FAILED! => {"changed": true, "cmd": "az storage blob download  --name \\"caf_launchpad.tfstate\\"  --account-name \\"\\"  --container-name \\"tfstate\\"  --auth-mode \\"login\\"  --file \\"~/.terraform.cache/launchpad/caf_launchpad.tfstate\\"\\n", "delta": "0:00:01.796026", "end": "2022-01-20 10:12:52.623103", "msg": "non-zero return code", "rc": 1, "start": "2022-01-20 10:12:50.827077", "stderr": "ERROR: \\nMissing credentials to access storage service. The following variations are accepted:\\n    (1) account name and key (--account-name and --account-key options or\\n        set AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_KEY environment variables)\\n    (2) account name and SAS token (--sas-token option used with either the --account-name\\n        option or AZURE_STORAGE_ACCOUNT environment variable)\\n    (3) account name (--account-name option or AZURE_STORAGE_ACCOUNT environment variable;\\n        this will make calls to query for a storage account key using login credentials)\\n    (4) connection string (--connection-string option or\\n        set AZURE_STORAGE_CONNECTION_STRING environment variable); some shells will require\\n        quoting to preserve literal character interpretation.", "stderr_lines": ["ERROR: ", "Missing credentials to access storage service. The following variations are accepted:", "    (1) account name and key (--account-name and --account-key options or", "        set AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_KEY environment variables)", "    (2) account name and SAS token (--sas-token option used with either the --account-name", "        option or AZURE_STORAGE_ACCOUNT environment variable)", "    (3) account name (--account-name option or AZURE_STORAGE_ACCOUNT environment variable;", "        this will make calls to query for a storage account key using login credentials)", "    (4) connection string (--connection-string option or", "        set AZURE_STORAGE_CONNECTION_STRING environment variable); some shells will require", "        quoting to preserve literal character interpretation."], "stdout": "", "stdout_lines": []}\n...ignoring\n\nTASK [[level0-launchpad] Get subscription_creation_landingzones details] *********************************\nskipping: [localhost]\n\n')))),(0,i.kt)("h2",{id:"deploy-launchpad-level0"},"Deploy launchpad (level0)"),(0,i.kt)("p",null,"Go to the /tf/caf/configuration/contoso/platform/level0/launchpad/readme.md"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6655).Z})))}u.isMDXComponent=!0},6655:function(e,n,t){n.Z=t.p+"assets/images/level0-launchpad-readme-c2ec3ea969a790e2b4f85405445c3a40.png"}}]);