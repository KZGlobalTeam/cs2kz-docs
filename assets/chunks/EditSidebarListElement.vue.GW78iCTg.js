import{e as O}from"./DeleteSidebarListElement.vue.XXH2hodv.js";import{y as P,aP as R,z as k,J as E,aQ as N}from"../api_explorer.md.CYJl-zXR.js";import{aj as j,ak as A,k as d,p,q as y,P as D,h as _,v as T,ag as I,d as M,as as W,o as f,c as w,j as z,b as C,K as G,X as K,I as H,n as g,N as Q,t as V,e as S,r as $,a as q,w as J,G as L}from"./framework.D4KI3xLP.js";function U(e){return j()?(A(e),!0):!1}function F(e){return typeof e=="function"?e():d(e)}const X=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function B(e){var l;const t=F(e);return(l=t==null?void 0:t.$el)!=null?l:t}const Y=X?window:void 0;function Z(){const e=p(!1),l=I();return l&&T(()=>{e.value=!0},l),e}function ee(e){const l=Z();return _(()=>(l.value,!!e()))}function te(e,l,t={}){const{window:s=Y,...i}=t;let o;const r=ee(()=>s&&"ResizeObserver"in s),n=()=>{o&&(o.disconnect(),o=void 0)},u=_(()=>Array.isArray(e)?e.map(m=>B(m)):[B(e)]),v=y(u,m=>{if(n(),r.value&&s){o=new ResizeObserver(l);for(const h of m)h&&o.observe(h,i)}},{immediate:!0,flush:"post"}),b=()=>{n(),v()};return U(b),{isSupported:r,stop:b}}function ae(e){var l;const t=p(e==null?void 0:e.element),s=p(e==null?void 0:e.input),i=(l=e==null?void 0:e.styleProp)!=null?l:"height",o=p(1);function r(){var n;if(!t.value)return;let u="";t.value.style[i]="1px",o.value=(n=t.value)==null?void 0:n.scrollHeight,e!=null&&e.styleTarget?F(e.styleTarget).style[i]=`${o.value}px`:u=`${o.value}px`,t.value.style[i]=u}return y([s,t],()=>D(r),{immediate:!0}),y(o,()=>{var n;return(n=e==null?void 0:e.onResize)==null?void 0:n.call(e)}),te(t,()=>r()),e!=null&&e.watch&&y(e.watch,r,{immediate:!0,deep:!0}),{textarea:t,input:s,triggerResize:r}}const re={class:"scalar-input-container relative"},le=["for"],ne={class:"icon-slot cursor-pointer text-c-ghost hover:text-c-1 !empty:flex !empty:w-7 !empty:items-center !empty:pr-3"},oe=M({__name:"ScalarTextField",props:{modelValue:{},placeholder:{},label:{},labelShadowColor:{default:"var(--scalar-background-1)"},error:{type:Boolean},isMultiline:{type:Boolean},helperText:{},emitOnBlur:{type:Boolean,default:!0},handleFieldSubmit:{},handleFieldChange:{},disableTrim:{type:Boolean,default:!1}},emits:["submit","update:modelValue"],setup(e,{emit:l}){const t=e,s=l,i=P({base:"scalar-input-wrapper relative flex items-center rounded border border-solid border-border",variants:{focus:{true:"scalar-input-wrapper-focus border-c-3 has-actv-btn:border has-actv-btn:border-border"},error:{true:"scalar-input-wrapper-error border-red"}}}),o=W(),r=o.id||`id-${R()}`,n=p(),u=p(!1);let v;if(t.isMultiline){const{triggerResize:a}=ae({element:n,input:t.modelValue});v=a}function b(a){const c=a.target.value;t.isMultiline&&v(),t.handleFieldChange?t.handleFieldChange(c):s("update:modelValue",c)}function m(a){const c=a.target,x=t.disableTrim||t.isMultiline?c.value:c.value.trim();t.handleFieldSubmit?t.handleFieldSubmit(x):s("submit",x)}function h(a){u.value=!1,t.emitOnBlur&&t.modelValue&&m(a)}return T(()=>{var a;Object.prototype.hasOwnProperty.call(o,"autofocus")&&((a=n.value)==null||a.focus())}),(a,c)=>(f(),w("div",re,[z("div",{class:g(d(i)({error:a.error,focus:u.value}))},[(f(),C(H(a.isMultiline?"textarea":"input"),G({id:d(r)},a.$attrs,{ref_key:"input",ref:n,class:["scalar-input",d(k)({"min-h-[77px]":a.isMultiline},"z-10 w-full resize-none appearance-none border-0 bg-transparent p-3 text-sm text-c-1","outline-none transition-opacity")],placeholder:a.placeholder,value:a.modelValue,onBlur:h,onFocus:c[0]||(c[0]=x=>u.value=!0),onInput:b,onKeydown:K(m,["enter"])}),null,16,["id","class","placeholder","value"])),a.label?(f(),w("label",{key:0,class:g(d(k)("scalar-input-label pointer-events-none absolute left-0 top-0 mx-2 my-3 px-1 text-sm","z-10 origin-top-left rounded text-c-3 shadow-current transition-transform")),for:d(r),style:Q({"box-shadow":`0 0 4px 4px ${a.labelShadowColor}`,"background-color":a.labelShadowColor})},V(a.label),15,le)):S("",!0),z("div",ne,[$(a.$slots,"default",{},void 0,!0)])],2),a.helperText?(f(),w("span",{key:0,class:g(["helper-text mt-1.5 flex items-center gap-1 text-sm",a.error?"font-medium text-red":"text-c-2"])},[a.error?(f(),C(d(E),{key:0,icon:"Error",size:"sm"})):S("",!0),q(" "+V(a.helperText),1)],2)):S("",!0)]))}}),se=N(oe,[["__scopeId","data-v-4de7a24e"]]),de=M({__name:"EditSidebarListElement",props:{name:{}},emits:["close","edit"],setup(e,{emit:l}){const t=e,s=l,i=p(t.name);return(o,r)=>(f(),C(O,{onCancel:r[1]||(r[1]=n=>s("close")),onSubmit:r[2]||(r[2]=n=>s("edit",i.value))},{default:J(()=>[L(d(se),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=n=>i.value=n),autofocus:""},null,8,["modelValue"])]),_:1}))}});export{de as C,se as m};
