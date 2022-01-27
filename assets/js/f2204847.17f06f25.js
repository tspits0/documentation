"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[249],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"lz-composition",sidebar_position:3},l="Cross-levels composition",c={unversionedId:"fundamentals/lz-composition",id:"fundamentals/lz-composition",title:"Cross-levels composition",description:"Transparent composition across layers",source:"@site/docs/fundamentals/composition.md",sourceDirName:"fundamentals",slug:"/fundamentals/lz-composition",permalink:"/documentation/docs/fundamentals/lz-composition",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/fundamentals/composition.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"lz-composition",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Compute Nodes",permalink:"/documentation/docs/fundamentals/lz-compute"},next:{title:"gitops-intro",permalink:"/documentation/docs/gitops/gitops-intro"}},p=[{value:"Transparent composition across layers",id:"transparent-composition-across-layers",children:[{value:"Global settings",id:"global-settings",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cross-levels-composition"},"Cross-levels composition"),(0,i.kt)("h2",{id:"transparent-composition-across-layers"},"Transparent composition across layers"),(0,i.kt)("p",null,"To deliver a complete environment, just as for any other software project, we want to avoid a monolithic configuration and instead compose an environment calling multiple landing zones."),(0,i.kt)("p",null,"With Terraform, you can read a state file's output and use it as input variables for another landing zone."),(0,i.kt)("p",null,"We use this feature to compose complex architectures as illustrated above, without writing any line of code. Reading another landing zone content is implemented by a variable, vastly simplifying for you the composition and the complex configuration creation."),(0,i.kt)("h3",{id:"global-settings"},"Global settings"),(0,i.kt)("p",null,"A few exceptions exist to the hierarchy model, there are variables and value that are persisted across all levels and reachable from all levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"global settings"),": everything related to the commons for a particular environment (which regions are supported for an environment, which naming convention is used, the tags inheritance settings, etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"diagnostics settings"),": any diagnostics repository you create at any level will be stored and will become composable from the current and above levels.")))}m.isMDXComponent=!0}}]);