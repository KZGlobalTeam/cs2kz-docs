import{d as f,p as E,ay as M,aA as F,o as i,c as m,r as c,k as n,j as p,t as g,e as v,n as C,F as O,N as P,h,au as V,aw as j,b as y,w as x,G as N,a as L,Z as W}from"./framework.D4KI3xLP.js";import{D as X,S as B,aO as R,C as w,W as T,aT as A,$ as k}from"../api_explorer.md.CYJl-zXR.js";const G={key:0,class:"min-h-12 xl:min-h-client-header flex items-center justify-between px-3 py-1.5 md:px-[18px] md:py-2.5 text-sm"},H={class:"font-medium m-0 text-sm whitespace-nowrap"},Z={class:"relative z-10 pt-0 md:px-2.5 md:pb-2.5 sticky bottom-0 w-[inherit] has-[.empty-sidebar-item]:border-t-1/2"},q=f({__name:"Sidebar",props:{title:{},isSidebarOpen:{type:Boolean,default:!0}},setup(s){const o=s,{sidebarWidth:t,setSidebarWidth:a}=X(),{layout:e}=B(),l=E(!1),d=E(null),{breakpoints:b}=R(),z=r=>{r.preventDefault();const _=r.clientX,D=parseInt(getComputedStyle(d.value).width||t.value,10),S=I=>{l.value=!0,document.body.classList.add("dragging");let u=D+I.clientX-_;u>420&&(u=420+(u-420)*.2),u<240&&(u=240),a(`${u}px`)},$=()=>{l.value=!1,document.body.classList.remove("dragging"),document.documentElement.removeEventListener("mousemove",S,!1),document.documentElement.removeEventListener("mouseup",$,!1),parseInt(t.value,10)>420?a("360px"):parseInt(t.value,10)<240&&a("240px")};document.documentElement.addEventListener("mousemove",S,!1),document.documentElement.addEventListener("mouseup",$,!1)};return(r,_)=>M((i(),m("aside",{ref_key:"sidebarRef",ref:d,class:C(["sidebar overflow-hidden relative flex flex-col flex-1 md:flex-none bg-b-1 md:border-b-0 md:border-r-1/2 min-w-full md:min-w-fit leading-3",{dragging:l.value}]),style:P({width:n(b).lg?n(t):"100%"})},[c(r.$slots,"header",{},void 0,!0),n(e)!=="modal"&&r.title?(i(),m("div",G,[p("h2",H,g(r.title),1),n(b).lg?v("",!0):c(r.$slots,"button",{key:0},void 0,!0)])):v("",!0),p("div",{class:C(["custom-scroll sidebar-height pb-0 md:pb-[37px] w-[inherit]",{"sidebar-mask":n(e)!=="modal"}])},[c(r.$slots,"content",{},void 0,!0)],2),n(b).lg?(i(),m(O,{key:1},[p("div",Z,[c(r.$slots,"button",{},void 0,!0)]),p("div",{class:"resizer",onMousedown:z},null,32)],64)):v("",!0)],6)),[[F,o.isSidebarOpen]])}}),le=w(q,[["__scopeId","data-v-f2016488"]]),J={},K={class:"flex xl:h-full xl:min-w-0 flex-1 flex-col xl:custom-scroll bg-b-1"},Q={class:"min-h-11 flex items-center px-2.5 text-sm font-medium sticky top-0 bg-b-1 xl:rounded-none z-1"};function U(s,o){return i(),m("section",K,[p("div",Q,[c(s.$slots,"title")]),c(s.$slots,"default")])}const ie=w(J,[["render",U]]),Y=f({__name:"ScalarHotkey",props:{hotkey:{},modifier:{}},setup(s){const o=s,{cx:t}=T(),a=h(()=>o.modifier||"meta"),e=h(()=>`${a.value==="meta"?A()?"⌘":"^":a.value} ${o.hotkey}`);return(l,d)=>(i(),m("div",V(j(n(t)("border-b-3 inline-block overflow-hidden rounded border-1/2 text-xxs rounded-b px-1 font-medium uppercase"))),g(e.value),17))}}),re=f({__name:"SidebarButton",props:{click:{type:Function},hotkey:{}},setup(s){const o=s,{layout:t}=B(),a=()=>{o.click()};return(e,l)=>(i(),y(n(k),{class:"bg-b-1 text-c-1 hover:bg-b-2 group relative w-auto md:w-full border-1/2 px-2 py-1 md:p-1.5 h-auto",icon:"Plus",variant:"outlined",onClick:a},{default:x(()=>[c(e.$slots,"title"),e.hotkey&&n(t)==="desktop"?(i(),y(Y,{key:0,class:"hidden md:block absolute right-2 group-hover:opacity-80 text-c-2 add-item-hotkey",hotkey:e.hotkey},null,8,["hotkey"])):v("",!0)]),_:3}))}}),ee={class:"flex gap-10 justify-between"},te=f({__name:"SidebarListElementForm",props:{danger:{type:Boolean},label:{}},emits:["cancel","submit"],setup(s,{emit:o}){const t=o;return(a,e)=>(i(),m("form",{class:"flex flex-col gap-4 text-base",onSubmit:e[1]||(e[1]=W(l=>t("submit"),["prevent"]))},[c(a.$slots,"default",{},void 0,!0),p("div",ee,[N(n(k),{class:"gap-1.5 px-2.5 h-8 shadow-none focus:outline-none flex items-center cursor-pointer",type:"button",variant:"outlined",onClick:e[0]||(e[0]=l=>t("cancel"))},{default:x(()=>e[2]||(e[2]=[L(" Cancel ")])),_:1}),N(n(k),{class:"gap-1.5 font-medium px-2.5 h-8 shadow-none focus:outline-none custom-scroll whitespace-nowrap",type:"submit",variant:a.danger?"danger":"solid"},{default:x(()=>[L(g(a.label??"Save"),1)]),_:1},8,["variant"])])],32))}}),ae=w(te,[["__scopeId","data-v-b6a60dbc"]]),se={key:0,class:"leading-normal text-c-2 text-sm text-pretty"},de=f({__name:"DeleteSidebarListElement",props:{variableName:{},warningMessage:{}},emits:["close","delete"],setup(s,{emit:o}){const t=s,a=o,e=h(()=>t.variableName.length>18?t.variableName.slice(0,18)+"…":t.variableName);return(l,d)=>(i(),y(ae,{danger:"",label:`Delete ${e.value}`,onCancel:d[0]||(d[0]=b=>a("close")),onSubmit:d[1]||(d[1]=b=>a("delete"))},{default:x(()=>[l.warningMessage?(i(),m("p",se,g(l.warningMessage),1)):v("",!0)]),_:1},8,["label"]))}});export{ie as a,Y as b,ae as e,re as g,le as m,de as w};
