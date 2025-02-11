import{d as k,h as $,o as n,c as l,F as B,C,N as v,j as i,t as b,n as w,G as o,k as h}from"./framework.D4KI3xLP.js";import{C as x}from"../api_explorer.md.DF3uy-io.js";import{b as S}from"./DeleteSidebarListElement.vue.4grbQCss.js";const y=`          .:=+++++=================-
         .--#*                       :.
        .-:-**                        -.
      .:-::-+*                        =:
     .:-:::-=#                         ::
    .-:::----**                        ..
   .-:::::---=#                         ..
  :-::::::----**                         ..
.:-::::::::----*=                        ..
.-::::::::------+-                        ..
..::::::::-------=                         ..
 .:::::----------++                        ..
   .:::----------+**+*++*+*++*+++*++++++++++:.
   ------------+*+=-=======================.
   .----------+*+=========================:.
    :--------+*+=-========================.
    .=------+*+=-========================:.
     .=----+*+=-------=================+-.
     .----+*+=----------================.
     .:=-+*+=----------=-==============-
      .-+*+=----------------===========.
       .-+=------------------====-====:.`,f=500,c=100,D=k({__name:"ScalarAsciiArt",props:{art:{},animate:{type:Boolean}},setup(r){const p=r,a=$(()=>p.art.split(`
`)),_=(s,m)=>{var e,t,d,u;return{animationDuration:`${s*c}ms, ${f}ms`,animationTimingFunction:`steps(${s}), step-end`,animationDelay:`${m*c}ms, 0ms`,animationIterationCount:`1, ${((((e=a.value)==null?void 0:e.length)??0)+(((u=(d=a.value)==null?void 0:d[((t=a.value)==null?void 0:t.length)-1])==null?void 0:u.length)??0)+5)*c/f}`}};return(s,m)=>(n(),l("div",{class:w(["ascii-art font-code flex flex-col items-start text-[6px] leading-[7px]",{"ascii-art-animate":s.animate}])},[(n(!0),l(B,null,C(a.value,(e,t)=>(n(),l("span",{key:t,class:"inline-block",style:v({width:`calc(${e.length+1}ch)`})},[i("span",{class:"inline-block whitespace-pre overflow-hidden",style:v(_(e.length,t))},b(e),5)],4))),128))],2))}}),g=x(D,[["__scopeId","data-v-0018c948"]]),F={class:"scale-75 flex flex-center w-full"},I={class:"relative"},N={class:"relative -ml-12"},z=k({__name:"EmptyState",setup(r){return(p,a)=>(n(),l("div",F,[i("div",I,[o(S,{class:"keycap-hotkey",hotkey:""}),o(g,{art:h(y),class:"!leading-[6px] text-c-3"},null,8,["art"])]),i("div",N,[a[0]||(a[0]=i("div",{class:"keycap-hotkey !right-[60px]"},"K",-1)),o(g,{art:h(y),class:"!leading-[6px] keycap-n"},null,8,["art"])])]))}}),j=x(z,[["__scopeId","data-v-474be722"]]);export{j as a,g as i};
