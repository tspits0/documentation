"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1309],{6137:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(6540),a=n(53);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n},t)}},7780:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(8168),a=n(6540),r=n(53),s=n(5236),i=n(5527),l=n(5793),u=n(7422),d=n(1038);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=g(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,u]=m({queryString:n,groupId:o}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),y=(()=>{const e=l??c;return p({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var y=n(195);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),g=e=>{const t=e.currentTarget,n=d.indexOf(t),o=u[n].value;o!==i&&(c(t),l(o))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,o.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:g},s,{className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function z(e){const t=h(e);return a.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},a.createElement(b,(0,o.A)({},e,t)),a.createElement(v,(0,o.A)({},e,t)))}function w(e){const t=(0,y.A)();return a.createElement(z,(0,o.A)({key:String(t)},e))}},9949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var o=n(8168),a=(n(6540),n(5680)),r=n(3554),s=n.n(r),i=n(7780),l=n(6137);const u={id:"org-setup",sidebar_position:1},d="Setup your organization",c={unversionedId:"azure-landing-zones/landingzones/platform/org-setup",id:"version-2203.1/azure-landing-zones/landingzones/platform/org-setup",title:"Setup your organization",description:"Organize your private repository",source:"@site/versioned_docs/version-2203.1/azure-landing-zones/landingzones/platform/org-setup.mdx",sourceDirName:"azure-landing-zones/landingzones/platform",slug:"/azure-landing-zones/landingzones/platform/org-setup",permalink:"/documentation/docs/azure-landing-zones/landingzones/platform/org-setup",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/versioned_docs/version-2203.1/azure-landing-zones/landingzones/platform/org-setup.mdx",tags:[],version:"2203.1",sidebarPosition:1,frontMatter:{id:"org-setup",sidebar_position:1},sidebar:"cafSidebar",previous:{title:"Getting started",permalink:"/documentation/docs/azure-landing-zones/landingzones/alz-intro"},next:{title:"Choose your deployment mode",permalink:"/documentation/docs/azure-landing-zones/landingzones/platform/eslz-choices"}},g={},p=[{value:"Organize your private repository",id:"organize-your-private-repository",level:2},{value:"Clone the platform starter repository",id:"clone-the-platform-starter-repository",level:3},{value:"Visual Studio code",id:"visual-studio-code",level:3},{value:"Add remote development extension",id:"add-remote-development-extension",level:3},{value:"Re-open vscode in the dev container",id:"re-open-vscode-in-the-dev-container",level:3},{value:"Clone the Azure Terraform SRE landingzones code",id:"clone-the-azure-terraform-sre-landingzones-code",level:3},{value:"Switch to the selected landingzones tag",id:"switch-to-the-selected-landingzones-tag",level:3}],m={toc:p},h="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,o.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"setup-your-organization"},"Setup your organization"),(0,a.yg)("h2",{id:"organize-your-private-repository"},"Organize your private repository"),(0,a.yg)("p",null,"The first step is create a private repository in your current organization. It has to be a git repository."),(0,a.yg)("p",null,"The video below shows you how to setup a private GitHub repository you are going to use to store the configuration of your platform landing zones."),(0,a.yg)(s(),{controls:!0,url:"https://youtu.be/1tbXXOM1s-o",mdxType:"ReactPlayer"}),(0,a.yg)("h3",{id:"clone-the-platform-starter-repository"},"Clone the platform starter repository"),(0,a.yg)("p",null,"The platform starter project is an empty environment that get you started with your initial configuration files and create a coherent stack."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Azure/caf-terraform-landingzones-platform-starter"},"platform starter project is here"),". "),(0,a.yg)("p",null,'If you are using it from GitHub, you can directly select "Use this template", once created you can clone it locally or open it in GitHub Codespace (use the tabs in the following section to get the steps for the desired method.)'),(0,a.yg)(i.A,{mdxType:"Tabs"},(0,a.yg)(l.A,{value:"Locally",label:"Locally",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Adjust the name of your organization and repository\ngit clone git://github.com/<org>/<repo> contoso && cd contoso\n")),(0,a.yg)("p",null,"You should observe:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"Cloning into 'contoso'...\nremote: Enumerating objects: 429, done.\nremote: Counting objects: 100% (429/429), done.\nremote: Compressing objects: 100% (320/320), done.\nremote: Total 429 (delta 110), reused 307 (delta 77), pack-reused 0\nReceiving objects: 100% (429/429), 2.93 MiB | 1.52 MiB/s, done.\nResolving deltas: 100% (110/110), done.\n")),(0,a.yg)("p",null,"Open Visual Studio Code from the contoso folder"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"code .\n")),(0,a.yg)("p",null,"Trust the repository"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(4449).A,width:"567",height:"368"})," "),(0,a.yg)("h3",{id:"visual-studio-code"},"Visual Studio code"),(0,a.yg)("p",null,"Visual Studio code should open your cloned repository and display the following structure."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(319).A,width:"3718",height:"2474"})),(0,a.yg)("h3",{id:"add-remote-development-extension"},"Add remote development extension"),(0,a.yg)("p",null,"Select the ",(0,a.yg)("strong",{parentName:"p"},"Remote - Containers")," extension and click Install."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(9666).A,width:"567",height:"316"})),(0,a.yg)("h3",{id:"re-open-vscode-in-the-dev-container"},"Re-open vscode in the dev container"),(0,a.yg)("p",null,"Click on the green bottom left button\nFrom the menu select the option"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(9723).A,width:"850",height:"402"}))),(0,a.yg)(l.A,{value:"Codespace",label:"Codespace",mdxType:"TabItem"},(0,a.yg)("p",null,"Once you have created your repo, create the Codespace: "),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(2249).A,width:"782",height:"882"})),(0,a.yg)("p",null,"The Codespace is being instantiated:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(7106).A,width:"1478",height:"1276"})),(0,a.yg)("p",null,"And you are ready to go: "),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(2459).A,width:"3632",height:"2386"})))),(0,a.yg)("p",null,"You should now see the following terminal. This terminal is where you will run all terminal commands described in this on-boarding tutorial."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(8507).A,width:"2358",height:"356"})),(0,a.yg)("h3",{id:"clone-the-azure-terraform-sre-landingzones-code"},"Clone the Azure Terraform SRE landingzones code"),(0,a.yg)("p",null,"Now that you have the configuration folder ready to use, let's clone the logic of landing zones (the Terraform code) that we will use to run the commands."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The Azure Terraform SRE landingzones framework assumes the landingzones Terraform code is cloned in a repository called landingzones.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Do not use another name as ",(0,a.yg)("strong",{parentName:"p"},"landingzones"),". It is a convention used to drive consistency.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Azure/caf-terraform-landingzones.git landingzones\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"Cloning into 'landingzones'...\nremote: Enumerating objects: 9067, done.\nremote: Counting objects: 100% (393/393), done.\nremote: Compressing objects: 100% (281/281), done.\nremote: Total 9067 (delta 161), reused 295 (delta 108), pack-reused 8674\nReceiving objects: 100% (9067/9067), 11.65 MiB | 6.83 MiB/s, done.\nResolving deltas: 100% (5792/5792), done.\nUpdating files: 100% (406/406), done.\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Go to the landingzones folder\n\u279c  caf git:(main) \u2717 cd landingzones \n\n# Note all folders are starting with /tf/caf in the devcontainers. \n\u279c  landingzones git:(main) \u2717 pwd\n/tf/caf/landingzones\n\u279c  landingzones git:(main) \u2717 \n")),(0,a.yg)("h3",{id:"switch-to-the-selected-landingzones-tag"},"Switch to the selected landingzones tag"),(0,a.yg)("p",null,"Latest features on Azure Terraform SRE landingzones repository are released on regular basis. In order to align the deployment instructions, you need to make sure the Terraform code is also using the correct branch or tag.Please check the latest tag from the landingzones repo at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Azure/caf-terraform-landingzones/releases"},"https://github.com/Azure/caf-terraform-landingzones/releases")," ."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(374).A,width:"1503",height:"867"})),(0,a.yg)("p",null,"From the terminal, run the following command to checkout to the latest tag: "),(0,a.yg)("p",null,"As, when we are updating the doc, latest tag available is 2203.1 as shown above."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git checkout 2203.1\n\nNote: switching to '2203.1'.\n\nYou are in 'detached HEAD' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by switching back to a branch.\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The detached head is expected as your are getting to a tag (release version) and not into a branch. ")),(0,a.yg)("p",null,"Go to the next step to choose your scenario!"))}y.isMDXComponent=!0},2249:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/codespace1-4d0e9a656837b8dff1aaed7ccc161902.png"},7106:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/codespace2-8fe1d766524b70344d325cdaf5b25398.png"},2459:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/codespace3-bf57669ba90d9c9bf6e58b7810709584.png"},9666:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/extension-remote-containers-fa1c318418560105bf5ac7b392e9abfc.png"},374:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/repo-tag-021c86fb05b6f73dcb0718a74eedb810.png"},9723:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-reopen-container-a51644795f3d80f6b660563399d5e9c5.png"},4449:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-trust-folder-8bc17d33e3daaf22ddae46059770d0f1.png"},8507:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-zsh-beb2d20c2244b8c32e7fe254b991ff3e.png"},319:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/vscode-f682b3e0edb145f921707a828dedd723.png"}}]);