"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[444],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=o,d=h["".concat(c,".").concat(u)]||h[u]||g[u]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},956:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={},i="Playing with Webhooks",s={unversionedId:"gpt-researcher/frontend/playing-with-webhooks",id:"gpt-researcher/frontend/playing-with-webhooks",isDocsHomePage:!1,title:"Playing with Webhooks",description:"The GPTR Frontend is powered by Webhooks streaming back from the Backend. This allows for real-time updates on the status of your research tasks, as well as the ability to interact with the Backend directly from the Frontend.",source:"@site/docs/gpt-researcher/frontend/playing-with-webhooks.md",sourceDirName:"gpt-researcher/frontend",slug:"/gpt-researcher/frontend/playing-with-webhooks",permalink:"/docs/gpt-researcher/frontend/playing-with-webhooks",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/frontend/playing-with-webhooks.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Frontend Application",permalink:"/docs/gpt-researcher/frontend/frontend"},next:{title:"Tailored Research",permalink:"/docs/gpt-researcher/context/tailored-research"}},c=[{value:"Inspecting Webhooks",id:"inspecting-webhooks",children:[{value:"Am I polling the right URL?",id:"am-i-polling-the-right-url",children:[],level:3}],level:2}],l={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"playing-with-webhooks"},"Playing with Webhooks"),(0,o.yg)("p",null,"The GPTR Frontend is powered by Webhooks streaming back from the Backend. This allows for real-time updates on the status of your research tasks, as well as the ability to interact with the Backend directly from the Frontend."),(0,o.yg)("h2",{id:"inspecting-webhooks"},"Inspecting Webhooks"),(0,o.yg)("p",null,"When running reports via the frontend, you can inspect the websocket messages in the Network Tab."),(0,o.yg)("p",null,"Here's how: "),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/15fcb5a4-77ea-4b3b-87d7-55d4b6f80095",alt:"image"})),(0,o.yg)("h3",{id:"am-i-polling-the-right-url"},"Am I polling the right URL?"),(0,o.yg)("p",null,"If you're concerned that your frontend isn't hitting the right API Endpoint, you can check the URL in the Network Tab."),(0,o.yg)("p",null,'Click into the WS request & go to the "Headers" tab'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/dbd58c1d-3506-411a-852b-e1b133b6f5c8",alt:"image"})),(0,o.yg)("p",null,"For debugging, have a look at the ",(0,o.yg)("a",{href:"https://github.com/assafelovic/gpt-researcher/blob/master/frontend/nextjs/helpers/getHost.js"},"getHost function.")))}h.isMDXComponent=!0}}]);