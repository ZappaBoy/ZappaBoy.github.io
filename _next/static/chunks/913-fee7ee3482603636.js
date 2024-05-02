"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{3854:function(e,t,i){i.r(t),i.d(t,{ConnectMedia:function(){return ConnectMedia}});var n=i(7437),a=i(8170),s=i(2615),o=i(8035),r=i(7913),c=i(1819);function ConnectMedia(){return(0,n.jsx)(a.X,{features:s.H,children:(0,n.jsx)(o.m.nav,{role:"menu",initial:r.nn,animate:r.jt,exit:r.JF,transition:r.eR,children:(0,n.jsx)("ul",{className:"flex items-center gap-5",children:c.CL.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.url,target:"_blank","aria-label":e.title,title:e.title,className:"text-2xl",children:e.icon})},e.id))})})})}},9585:function(e,t,i){i.r(t),i.d(t,{AppFooter:function(){return AppFooter}});var n=i(7437),a=i(2265),s=i(5218),o=i(8170),r=i(2615),c=i(8797),l=i(3854);function AppFooter(){let e=(0,a.useRef)(null),t=(0,s.Y)(e,{once:!0}),i=new Date().getFullYear();return(0,n.jsx)(o.X,{features:r.H,children:(0,n.jsx)("footer",{ref:e,className:"container-md py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100",style:{transform:t?"none":"translateX(-200px)",opacity:t?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"},children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5",children:[(0,n.jsxs)("p",{className:"font-light",children:["Copyright \xa9 ",i," Zappone Federico - Inspired by",(0,n.jsx)("a",{href:"https://vasile-novatchii.netlify.app/",children:" Vasile Novatchii"})]}),(0,n.jsx)(c.ScrollTop,{}),(0,n.jsx)(l.ConnectMedia,{})]})})})}},5846:function(e,t,i){i.r(t),i.d(t,{AppHeader:function(){return AppHeader}});var n=i(7437),a=i(7913),s=i(8694),o=i(1184),r=i(3854),c=i(6201),l=i(389);function AppHeader(){let e=(0,a.ac)();return(0,n.jsx)("header",{className:"pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm",children:(0,n.jsx)("div",{className:"container-md",children:(0,n.jsxs)("div",{className:"flex justify-between items-center gap-3",children:[(0,n.jsx)(s.Logo,{}),e?(0,n.jsx)(o.MobileMenu,{}):(0,n.jsx)(l.Menu,{}),(0,n.jsxs)("div",{className:"flex items-center gap-5",children:[!e&&(0,n.jsx)(r.ConnectMedia,{}),(0,n.jsx)(c.ThemeSwitcher,{})]})]})})})}},3954:function(e,t,i){i.r(t),i.d(t,{HeadingDivider:function(){return HeadingDivider}});var n=i(7437),a=i(8170),s=i(2615),o=i(8035),r=i(7913);function HeadingDivider(e){let{title:t=""}=e;return(0,n.jsx)("header",{className:"flex items-center",children:(0,n.jsx)(a.X,{features:s.H,children:(0,n.jsx)(o.m.h2,{tabIndex:0,initial:r.nn,animate:r.jt,exit:r.JF,transition:r.eR,className:"heading-divider",children:t})})})}},8694:function(e,t,i){i.r(t),i.d(t,{Logo:function(){return Logo}});var n=i(7437),a=i(8170),s=i(2615),o=i(8035),r=i(7913),c=i(1819);function Logo(){return(0,n.jsx)(a.X,{features:s.H,children:(0,n.jsx)(o.m.h3,{className:"text-xl md:text-2xl font-bold",initial:r.nn,animate:r.jt,exit:r.JF,transition:r.eR,children:(0,n.jsx)(n.Fragment,{children:c.kx.textLogo})})})}},389:function(e,t,i){i.r(t),i.d(t,{Menu:function(){return Menu}});var n=i(7437),a=i(8035),s=i(8170),o=i(2615),r=i(9918),c=i(7913),l=i(1819);function Menu(e){let t,{onClick:i=()=>{}}=e,{scrollToEl:u}=(0,r.q)(),handleOnClick=e=>{u(e),window.setTimeout(()=>i(),350)};return(t=(0,n.jsx)(a.m.nav,{initial:c.nn,animate:c.jt,exit:c.JF,transition:c.eR,role:"menu",children:(0,n.jsx)("ul",{className:"flex justify-center gap-5 flex-col md:flex-row items-start md:items-center",children:l.WH.sort((e,t)=>e.id-t.id).map(e=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.url,title:e.name,onClick:handleOnClick,className:"relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full",children:e.name})},e.id))})}),0===l.WH.length)?null:(0,n.jsx)(s.X,{features:o.H,children:t})}},1184:function(e,t,i){i.r(t),i.d(t,{MobileMenu:function(){return MobileMenu}});var n=i(7437),a=i(2265),s=i(9509),o=i(7913),r=i(8170),c=i(2615),l=i(8035),u=i(4666),d=i(4873),m=i(3854),p=i(389);function MobileMenu(){let[e,t]=(0,a.useState)(!1),onClose=()=>t(!1);return(0,a.useEffect)(()=>{document.body.style.overflow=e?"hidden":"auto"},[e]),(0,n.jsxs)(r.X,{features:c.H,children:[(0,n.jsx)(l.m.button,{className:"p-2",onClick:()=>t(!0),title:"Open menu",initial:o.nn,animate:o.jt,exit:o.JF,transition:o.eR,children:(0,n.jsx)(s.gc_,{})}),(0,n.jsx)(u.M,{children:e&&(0,n.jsxs)(l.m.div,{className:"backdrop-blur-md fixed left-0 right-0 top-0 min-h-screen z-50",initial:o.zf,animate:o.e3,exit:o.gD,children:[(0,n.jsxs)("header",{className:"p-6 flex items-center justify-between border-b border-b-brand-light z-10",children:[(0,n.jsx)(m.ConnectMedia,{}),(0,n.jsx)("button",{onClick:onClose,className:"w-10 h-10 inline-flex items-center justify-center",children:(0,n.jsx)(d.QAE,{size:"24"})})]}),(0,n.jsx)("div",{className:"px-6 py-10",children:(0,n.jsx)(p.Menu,{onClick:onClose})})]})})]})}},8797:function(e,t,i){i.r(t),i.d(t,{ScrollTop:function(){return ScrollTop}});var n=i(7437),a=i(1396),s=i.n(a),o=i(9918),r=i(4873);function ScrollTop(){let{scrollToEl:e}=(0,o.q)();return(0,n.jsxs)(s(),{href:"#intro",onClick:t=>{e(t)},"aria-label":"Scroll to top",className:"relative flex group",children:[(0,n.jsx)(r.zBn,{size:28}),(0,n.jsx)("span",{className:"group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max",children:"Scroll to top"})]})}},6201:function(e,t,i){i.r(t),i.d(t,{ThemeSwitcher:function(){return ThemeSwitcher}});var n=i(7437),a=i(6435),s=i(9509),o=i(2265),r=i(8170),c=i(2615),l=i(8035),u=i(7913);let ThemeSwitcher=()=>{let[e,t]=(0,o.useState)(!1),{theme:i,setTheme:d,systemTheme:m}=(0,a.F)(),p="system"===i?m:i;return((0,o.useEffect)(()=>t(!0),[]),e)?(0,n.jsx)(r.X,{features:c.H,children:(0,n.jsx)(l.m.button,{onClick:()=>d("dark"===p?"light":"dark"),initial:u.nn,animate:u.jt,exit:u.JF,transition:u.eR,children:"dark"===p?(0,n.jsx)(s.eSY,{}):(0,n.jsx)(s.s1t,{})})}):null}},1819:function(e,t,i){i.d(t,{WH:function(){return a},Fw:function(){return u},kx:function(){return n},CL:function(){return r},rA:function(){return l}});let n={textLogo:"@ZappaBoy",backToMainPageTitle:"Back to main page",goToMainPageTitle:"Go to main page",backToMainText:"Back to main"},a=[{id:"0",name:"Introduction",url:"#intro"},{id:"1",name:"About",url:"#about"},{id:"2",name:"Projects",url:"#projects"},{id:"3",name:"Tech",url:"#tech"}];var s=i(7437),o=i(9509);let r=[{id:"linkedin",icon:(0,s.jsx)(o.NQh,{}),title:"Visit LinkedIn profile",url:"https://www.linkedin.com/in/zappaboy/"},{id:"github",icon:(0,s.jsx)(o.rFR,{}),title:"Visit Github profile",url:"https://github.com/ZappaBoy"},{id:"mail",icon:(0,s.jsx)(o.cIw,{}),title:"Send me an email",url:"mailto://federico-zappone@hotmail.it"}];var c=i(8527);let l=[{category:"AI",items:[{name:"Python",icon:(0,s.jsx)(c.Cul,{size:32})},{name:"Tensorflow",icon:(0,s.jsx)(c.CCE,{size:32})},{name:"Keras",icon:(0,s.jsx)(c.c9P,{size:32})},{name:"Scikit-learn",icon:(0,s.jsx)(c.ldd,{size:32})},{name:"OpenAI",icon:(0,s.jsx)(c.Cp6,{size:32})},{name:"Apache Spark",icon:(0,s.jsx)(c.kSA,{size:32})},{name:"ROCm",icon:(0,s.jsx)(c.XTL,{size:32})}]},{category:"Backend e Databases",items:[{name:"FastAPI",icon:(0,s.jsx)(c.$By,{size:32})},{name:"Node",icon:(0,s.jsx)(c.uds,{size:32})},{name:"Spring Boot",icon:(0,s.jsx)(c.Vce,{size:32})},{name:"NestJS",icon:(0,s.jsx)(c.EYG,{size:32})},{name:"Express.js",icon:(0,s.jsx)(c.AmJ,{size:32})},{name:"Fastify",icon:(0,s.jsx)(c.qLD,{size:32})},{name:"Prisma",icon:(0,s.jsx)(c.Xlc,{size:32})},{name:"SQLAlchemy",icon:(0,s.jsx)(c.Ber,{size:32})},{name:"Hibernate",icon:(0,s.jsx)(c.DnR,{size:32})},{name:"MySQL",icon:(0,s.jsx)(c.uJt,{size:32})},{name:"PostgreSQL",icon:(0,s.jsx)(c.u4B,{size:32})},{name:"MongoDB",icon:(0,s.jsx)(c.t$b,{size:32})},{name:"CouchDB",icon:(0,s.jsx)(c.TcN,{size:32})},{name:"SQLite",icon:(0,s.jsx)(c.zKo,{size:32})},{name:"Socket.io",icon:(0,s.jsx)(c.Ya_,{size:32})}]},{category:"Frontend",items:[{name:"Angular",icon:(0,s.jsx)(c.eAz,{size:32})},{name:"Next",icon:(0,s.jsx)(c.Xou,{size:32})},{name:"React",icon:(0,s.jsx)(c.QHr,{size:32})},{name:"HTML",icon:(0,s.jsx)(c.PSn,{size:32})},{name:"CSS",icon:(0,s.jsx)(c.H5g,{size:32})},{name:"JS",icon:(0,s.jsx)(c.vl3,{size:32})},{name:"Tailwind CSS",icon:(0,s.jsx)(c.YnA,{size:32})},{name:"Bootstrap",icon:(0,s.jsx)(c.BpA,{size:32})}]},{category:"DevOps",items:[{name:"GNU/Linux",icon:(0,s.jsx)(c.TdH,{size:32})},{name:"Arch Linux",icon:(0,s.jsx)(c.lLf,{size:32})},{name:"Ubuntu Server",icon:(0,s.jsx)(c.V_z,{size:32})},{name:"Bash",icon:(0,s.jsx)(c.CEe,{size:32})},{name:"Docker",icon:(0,s.jsx)(c.VIR,{size:32})},{name:"Kubernetes",icon:(0,s.jsx)(c.CX5,{size:32})},{name:"k3s",icon:(0,s.jsx)(c.ZLX,{size:32})},{name:"Rancher",icon:(0,s.jsx)(c.Xhw,{size:32})},{name:"Cloudflare",icon:(0,s.jsx)(c.te3,{size:32})},{name:"Traefik",icon:(0,s.jsx)(c.ccl,{size:32})},{name:"Authelia",icon:(0,s.jsx)(c.tKx,{size:32})},{name:"Keycloak",icon:(0,s.jsx)(c.DfA,{size:32})},{name:"Ansible",icon:(0,s.jsx)(c.IHu,{size:32})},{name:"Github",icon:(0,s.jsx)(c.pZu,{size:32})},{name:"Gitlab",icon:(0,s.jsx)(c.NCQ,{size:32})}]},{category:"Penetration Testing",items:[{name:"Parrot Security",icon:(0,s.jsx)(c.y1E,{size:32})},{name:"Kali Linux",icon:(0,s.jsx)(c.Uj8,{size:32})},{name:"Burp Suite",icon:(0,s.jsx)(c.a_7,{size:32})},{name:"Metasploit",icon:(0,s.jsx)(c.vEX,{size:32})},{name:"Wireshark",icon:(0,s.jsx)(c.eY_,{size:32})},{name:"Raspberry",icon:(0,s.jsx)(c.CeE,{size:32})}]},{category:"Blockchain",items:[{name:"Hyperledger Fabric",icon:(0,s.jsx)(c.OSD,{size:32})},{name:"Ethereum",icon:(0,s.jsx)(c.dvN,{size:32})}]},{category:"Mobile",items:[{name:"Android",icon:(0,s.jsx)(c.Dj2,{size:32})},{name:"Ionic",icon:(0,s.jsx)(c.wNB,{size:32})},{name:"Flutter",icon:(0,s.jsx)(c.Bq1,{size:32})},{name:"Expo",icon:(0,s.jsx)(c.ipR,{size:32})}]},{category:"Other",items:[{name:"Automated Trading Systems",icon:(0,s.jsx)(c.gzJ,{size:32})},{name:"QGIS e PostGIS",icon:(0,s.jsx)(c.U6J,{size:32})},{name:"Ruby",icon:(0,s.jsx)(c.NTv,{size:32})},{name:"Wordpress",icon:(0,s.jsx)(c.V0l,{size:32})}]}],u=[{id:1,description:"Crawly is a customizable web crawler service to get information and monitor the changes on the pages using APIs.",images:["/assets/projects/crawly/logo.jpeg"],liveUrl:"",repoUrl:"",stack:["Python","CLI"],title:"Crawly"},{id:2,description:"Worky is a tool that helps to define and load project workspaces. Worky saves you from wasting time doing repetitive tasks before actually starting to work.",images:["/assets/projects/worky/logo.jpeg"],liveUrl:"",repoUrl:"https://github.com/ZappaBoy/worky",stack:["Python","CLI"],title:"Worky"},{id:3,description:"PYthon Video-to-Text Transcriber supports the download of audio tracks from YouTube and it is able to perform the transcription and both translation and summarization using AI models.",images:["/assets/projects/pyvttt/logo.jpeg"],liveUrl:"",repoUrl:"https://github.com/ZappaBoy/pyvttt",stack:["Python","CLI","AI","LLM"],title:"Pyvttt"},{id:4,description:"Roundtable is a tool that simulates a roundtable discussion using AI agents. It uses different Ollama LLM models for text and code to simulate the discussion between models using AutoGen.",images:["/assets/projects/roundtable/logo.jpeg"],liveUrl:"",repoUrl:"",stack:["Python","CLI","AI","LLM"],title:"Roundtable"},{id:5,description:"Crawlall is a simple crawler tool that uses Google search enginesupported features to find and collect required patterns (email, URL, IP address, etc.) related to a search query.",images:["/assets/projects/crawlall/logo.jpeg"],liveUrl:"",repoUrl:"https://github.com/ZappaBoy/crawlall",stack:["Python","CLI"],title:"Crawlall"},{id:6,description:"Hopper-Bacco (Oh perbacco) is a simple utility service that accepts and forwards API requests rotating both IP and User Agent to avoid bans.",images:["/assets/projects/hopper-bacco/logo.jpeg"],liveUrl:"",repoUrl:"https://github.com/ZappaBoy/hopper-bacco",stack:["Python","CLI"],title:"Hopper-bacco"},{id:7,description:"Fabric Starter is an automation tool to deploy a blockchain for testing purposes using Hyperledger Fabric in minutes with a single command.",images:["/assets/projects/fabric-starter/logo.jpeg"],liveUrl:"",repoUrl:"",stack:["Bash","CLI","Hyperledger","DevOps"],title:"Fabric Starter"},{id:8,description:"Hi-jacket is an automated cryptojacker that find XSS vulnerabilities and exploit them by loading a cryptojacking script with GPU support.",images:["/assets/projects/hi-jacket/logo.jpeg"],liveUrl:"",repoUrl:"https://github.com/ZappaBoy/hi-jacket",stack:["Bash","Javascript","Security"],title:"Hi-jacket"},{id:9,description:"Domo is a very simple all-in-one tool to manage IoT devices from the CLI. Domo can be very useful to create other scripts to automate the routines in the house.",images:["/assets/projects/domo/logo.jpeg"],liveUrl:"",repoUrl:"https://github.com/ZappaBoy/domo",stack:["Python","CLI","IoT"],title:"Domo"}]},9918:function(e,t,i){i.d(t,{q:function(){return useScrollTo}});var n=i(2265),a=i(7913);function useScrollTo(){let[e,t]=(0,n.useState)(a.jF);return(0,n.useEffect)(()=>{let handleResize=()=>{window.matchMedia("(max-width: 480px)")?t(56):t(a.jF)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),{scrollToEl:t=>{var i,n;t.preventDefault();let a=t.target.hash,s=(null===(n=document)||void 0===n?void 0:null===(i=n.querySelector(a))||void 0===i?void 0:i.offsetTop)-e;scroll({top:s,behavior:"smooth"})}}}},7913:function(e,t,i){i.d(t,{jt:function(){return s},e3:function(){return l},JF:function(){return o},gD:function(){return u},nn:function(){return a},zf:function(){return c},jF:function(){return n},eR:function(){return r},ac:function(){return useMediaQuery}});let n=80,a={opacity:0},s={opacity:1},o={opacity:0},r={delay:1},c={y:"100%"},l={y:"0%"},u={y:"100%"};var d=i(2265);let useMediaQuery=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"max-width: 767px",[t,i]=(0,d.useState)(!1),n=(0,d.useCallback)(e=>{e.matches?i(!0):i(!1)},[]);return(0,d.useEffect)(()=>{let t=window.matchMedia("(".concat(e,")"));return t.addEventListener("change",n),t.matches&&i(!0),()=>t.removeEventListener("change",n)},[e,n]),t}}}]);