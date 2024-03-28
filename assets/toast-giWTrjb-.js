import{r as S,R as x,j as J}from"./index-D69ByIPa.js";import{a as Y}from"./helper-CaAdfMs7.js";import{M as Ve}from"./StyledButton-BnfRRGwi.js";import{m as Te}from"./motion-minimal-C0x2YXMk.js";var D={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let Fe=0;function He(e,t){const o=`atom${++Fe}`,u={toString:()=>o};return typeof e=="function"?u.read=e:(u.init=e,u.read=Ue,u.write=qe),t&&(u.write=t),u}function Ue(e){return e(this)}function qe(e,t,o){return t(this,typeof o=="function"?o(e(this)):o)}const ge=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,me=e=>"init"in e,ve=e=>!!e.write,ue=new WeakMap,We=(e,t)=>{ue.set(e,t),e.catch(()=>{}).finally(()=>ue.delete(e))},we=(e,t)=>{const o=ue.get(e);o&&(ue.delete(e),o(t))},Ie=(e,t)=>{e.status="fulfilled",e.value=t},Ce=(e,t)=>{e.status="rejected",e.reason=t},Xe=e=>typeof e?.then=="function",ee=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),Se=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),K=e=>!!e&&"v"in e&&e.v instanceof Promise,Je=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,se=e=>{if("e"in e)throw e.e;return e.v},Ne=()=>{const e=new WeakMap,t=new WeakMap,o=[],u=new WeakMap;let d,h;(D?"production":void 0)!=="production"&&(d=new Set,h=new Set);const s=n=>e.get(n),b=(n,r)=>{r.d.forEach((p,c)=>{var l;if(!u.has(c)){const i=s(c);(l=o[o.length-1])==null||l.add(c),u.set(c,[i,new Set]),i&&b(c,i)}u.get(c)[1].add(n)})},_=(n,r)=>{var p;(D?"production":void 0)!=="production"&&Object.freeze(r);const c=s(n);if(e.set(n,r),u.has(n)||((p=o[o.length-1])==null||p.add(n),u.set(n,[c,new Set]),b(n,r)),K(c)){const l="v"in r?r.v instanceof Promise?r.v:Promise.resolve(r.v):Promise.reject(r.e);c.v!==l&&we(c.v,l)}},P=(n,r,p,c)=>{const l=new Map(c?r.d:null);let i=!1;p.forEach((a,f)=>{!a&&ge(n,f)&&(a=r),a?(l.set(f,a),r.d.get(f)!==a&&(i=!0)):(D?"production":void 0)!=="production"&&console.warn("[Bug] atom state not found")}),(i||r.d.size!==l.size)&&(r.d=l)},y=(n,r,p,c)=>{const l=s(n),i={d:l?.d||new Map,v:r};if(p&&P(n,i,p,c),ee(l,i)&&l.d===i.d)return l;if(K(l)&&K(i)&&Je(l,i)){if(l.d===i.d)return l;i.v=l.v}return _(n,i),i},R=(n,r,p,c)=>{if(Xe(r)){let l;const i=()=>{const f=s(n);if(!K(f)||f.v!==a)return;const w=y(n,a,p);t.has(n)&&f.d!==w.d&&B(n,w,f.d)},a=new Promise((f,w)=>{let m=!1;r.then(C=>{m||(m=!0,Ie(a,C),f(C),i())},C=>{m||(m=!0,Ce(a,C),w(C),i())}),l=C=>{m||(m=!0,C.then(j=>Ie(a,j),j=>Ce(a,j)),f(C))}});return a.orig=r,a.status="pending",We(a,f=>{f&&l(f),c?.()}),y(n,a,p,!0)}return y(n,r,p)},$=(n,r,p)=>{const c=s(n),l={d:c?.d||new Map,e:r};return p&&P(n,l,p),Se(c,l)&&c.d===l.d?c:(_(n,l),l)},O=(n,r)=>{const p=s(n);if(!r&&p&&(t.has(n)||Array.from(p.d).every(([m,C])=>{if(m===n)return!0;const j=O(m);return j===C||ee(j,C)})))return p;const c=new Map;let l=!0;const i=m=>{if(ge(n,m)){const j=s(m);if(j)return c.set(m,j),se(j);if(me(m))return c.set(m,void 0),m.init;throw new Error("no atom init")}const C=O(m);return c.set(m,C),se(C)};let a,f;const w={get signal(){return a||(a=new AbortController),a.signal},get setSelf(){return(D?"production":void 0)!=="production"&&!ve(n)&&console.warn("setSelf function cannot be used with read-only atom"),!f&&ve(n)&&(f=(...m)=>{if((D?"production":void 0)!=="production"&&l&&console.warn("setSelf function cannot be called in sync"),!l)return I(n,...m)}),f}};try{const m=n.read(i,w);return R(n,m,c,()=>a?.abort())}catch(m){return $(n,m,c)}finally{l=!1}},k=n=>se(O(n)),T=n=>{let r=t.get(n);return r||(r=V(n)),r},M=(n,r)=>!r.l.size&&(!r.t.size||r.t.size===1&&r.t.has(n)),A=n=>{const r=t.get(n);r&&M(n,r)&&F(n)},E=n=>{const r=a=>{var f,w;const m=new Set((f=t.get(a))==null?void 0:f.t);return(w=u.get(a))==null||w[1].forEach(C=>{m.add(C)}),m},p=new Array,c=new Set,l=a=>{if(!c.has(a)){c.add(a);for(const f of r(a))a!==f&&l(f);p.push(a)}};l(n);const i=new Set([n]);for(let a=p.length-1;a>=0;--a){const f=p[a],w=s(f);if(!w)continue;let m=!1;for(const C of w.d.keys())if(C!==f&&i.has(C)){m=!0;break}if(m){const C=O(f,!0);ee(w,C)||i.add(f)}}},g=(n,...r)=>{const p=i=>se(O(i)),c=(i,...a)=>{const f=o.length>0;f||o.push(new Set([i]));let w;if(ge(n,i)){if(!me(i))throw new Error("atom not writable");const m=s(i),C=R(i,a[0]);ee(m,C)||E(i)}else w=g(i,...a);if(!f){const m=v(o.pop());(D?"production":void 0)!=="production"&&d.forEach(C=>C({type:"async-write",flushed:m}))}return w};return n.write(p,c,...r)},I=(n,...r)=>{o.push(new Set([n]));const p=g(n,...r),c=v(o.pop());return(D?"production":void 0)!=="production"&&d.forEach(l=>l({type:"write",flushed:c})),p},V=(n,r,p)=>{var c;const l=p||[];(c=s(n))==null||c.d.forEach((a,f)=>{const w=t.get(f);w?w.t.add(n):f!==n&&V(f,n,l)}),O(n);const i={t:new Set(r&&[r]),l:new Set};if(t.set(n,i),(D?"production":void 0)!=="production"&&h.add(n),ve(n)&&n.onMount){const{onMount:a}=n;l.push(()=>{const f=a((...w)=>I(n,...w));f&&(i.u=f)})}return p||l.forEach(a=>a()),i},F=n=>{var r;const p=(r=t.get(n))==null?void 0:r.u;p&&p(),t.delete(n),(D?"production":void 0)!=="production"&&h.delete(n);const c=s(n);c?(K(c)&&we(c.v),c.d.forEach((l,i)=>{if(i!==n){const a=t.get(i);a&&(a.t.delete(n),M(i,a)&&F(i))}})):(D?"production":void 0)!=="production"&&console.warn("[Bug] could not find atom state to unmount",n)},B=(n,r,p)=>{const c=new Set(r.d.keys()),l=new Set;p?.forEach((i,a)=>{if(c.has(a)){c.delete(a);return}l.add(a);const f=t.get(a);f&&f.t.delete(n)}),c.forEach(i=>{const a=t.get(i);a?a.t.add(n):t.has(n)&&V(i,n)}),l.forEach(i=>{const a=t.get(i);a&&M(i,a)&&F(i)})},v=n=>{let r;(D?"production":void 0)!=="production"&&(r=new Set);const p=[],c=l=>{var i;if(!u.has(l))return;const[a,f]=u.get(l);u.delete(l),p.push([l,a]),f.forEach(c),(i=s(l))==null||i.d.forEach((w,m)=>c(m))};if(n.forEach(c),p.forEach(([l,i])=>{const a=s(l);if(!a){(D?"production":void 0)!=="production"&&console.warn("[Bug] no atom state to flush");return}if(a!==i){const f=t.get(l);f&&a.d!==i?.d&&B(l,a,i?.d),f&&!(!K(i)&&(ee(i,a)||Se(i,a)))&&(f.l.forEach(w=>w()),(D?"production":void 0)!=="production"&&r.add(l))}}),(D?"production":void 0)!=="production")return r},N=(n,r)=>{const p=T(n),c=v([n]),l=p.l;return l.add(r),(D?"production":void 0)!=="production"&&d.forEach(i=>i({type:"sub",flushed:c})),()=>{l.delete(r),A(n),(D?"production":void 0)!=="production"&&d.forEach(i=>i({type:"unsub"}))}};return(D?"production":void 0)!=="production"?{get:k,set:I,sub:N,dev_subscribe_store:(n,r)=>{if(r!==2)throw new Error("The current StoreListener revision is 2.");return d.add(n),()=>{d.delete(n)}},dev_get_mounted_atoms:()=>h.values(),dev_get_atom_state:n=>e.get(n),dev_get_mounted:n=>t.get(n),dev_restore_atoms:n=>{o.push(new Set);for(const[p,c]of n)me(p)&&(R(p,c),E(p));const r=v(o.pop());d.forEach(p=>p({type:"restore",flushed:r}))}}:{get:k,set:I,sub:N}};let he;(D?"production":void 0)!=="production"&&(typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__=="number"?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1);const xe=()=>(he||((D?"production":void 0)!=="production"&&globalThis.__NUMBER_OF_JOTAI_INSTANCES__!==1&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),he=Ne()),he);var Ye={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Me=S.createContext(void 0),Le=e=>{const t=S.useContext(Me);return e?.store||t||xe()},Et=({children:e,store:t})=>{const o=S.useRef();return!t&&!o.current&&(o.current=Ne()),S.createElement(Me.Provider,{value:t||o.current},e)},Qe=e=>typeof e?.then=="function",Ge=x.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function Re(e,t){const o=Le(t),[[u,d,h],s]=S.useReducer(P=>{const y=o.get(e);return Object.is(P[0],y)&&P[1]===o&&P[2]===e?P:[y,o,e]},void 0,()=>[o.get(e),o,e]);let b=u;(d!==o||h!==e)&&(s(),b=o.get(e));const _=t?.delay;return S.useEffect(()=>{const P=o.sub(e,()=>{if(typeof _=="number"){setTimeout(s,_);return}s()});return s(),P},[o,e,_]),S.useDebugValue(b),Qe(b)?Ge(b):b}function Oe(e,t){const o=Le(t);return S.useCallback((...d)=>{if((Ye?"production":void 0)!=="production"&&!("write"in e))throw new Error("not writable atom");return o.set(e,...d)},[o,e])}function Ke(e,t){return[Re(e,t),Oe(e,t)]}let ae,le=Symbol(),_t=e=>{ae=e,globalThis[le]=e},Ae=()=>{if(ae)return ae;if(globalThis[le])return globalThis[le];let e=xe();return ae=e,globalThis[le]=e,e},Ze=e=>[()=>Ae().get(e),t=>Ae().set(e,t)],et=e=>[e,()=>Ke(e),()=>Re(e),()=>Oe(e),...Ze(e)];const[,,bt,,,Tt]=et(He(!1)),ne=e=>typeof e=="number"&&!isNaN(e),G=e=>typeof e=="string",H=e=>typeof e=="function",ce=e=>G(e)||H(e)?e:null,Ee=e=>S.isValidElement(e)||G(e)||H(e)||ne(e);function tt(e,t,o){o===void 0&&(o=300);const{scrollHeight:u,style:d}=e;requestAnimationFrame(()=>{d.minHeight="initial",d.height=u+"px",d.transition=`all ${o}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(t,o)})})}function fe(e){let{enter:t,exit:o,appendPosition:u=!1,collapse:d=!0,collapseDuration:h=300}=e;return function(s){let{children:b,position:_,preventExitTransition:P,done:y,nodeRef:R,isIn:$,playToast:O}=s;const k=u?`${t}--${_}`:t,T=u?`${o}--${_}`:o,M=S.useRef(0);return S.useLayoutEffect(()=>{const A=R.current,E=k.split(" "),g=I=>{I.target===R.current&&(O(),A.removeEventListener("animationend",g),A.removeEventListener("animationcancel",g),M.current===0&&I.type!=="animationcancel"&&A.classList.remove(...E))};A.classList.add(...E),A.addEventListener("animationend",g),A.addEventListener("animationcancel",g)},[]),S.useEffect(()=>{const A=R.current,E=()=>{A.removeEventListener("animationend",E),d?tt(A,y,h):y()};$||(P?E():(M.current=1,A.className+=` ${T}`,A.addEventListener("animationend",E)))},[$]),x.createElement(x.Fragment,null,b)}}function ke(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const z=new Map;let oe=[];const _e=new Set,nt=e=>_e.forEach(t=>t(e)),$e=()=>z.size>0;function Be(e,t){var o;if(t)return!((o=z.get(t))==null||!o.isToastActive(e));let u=!1;return z.forEach(d=>{d.isToastActive(e)&&(u=!0)}),u}function De(e,t){Ee(e)&&($e()||oe.push({content:e,options:t}),z.forEach(o=>{o.buildToast(e,t)}))}function Pe(e,t){z.forEach(o=>{t!=null&&t!=null&&t.containerId?t?.containerId===o.id&&o.toggle(e,t?.id):o.toggle(e,t?.id)})}function ot(e){const{subscribe:t,getSnapshot:o,setProps:u}=S.useRef(function(h){const s=h.containerId||1;return{subscribe(b){const _=function(y,R,$){let O=1,k=0,T=[],M=[],A=[],E=R;const g=new Map,I=new Set,V=()=>{A=Array.from(g.values()),I.forEach(v=>v())},F=v=>{M=v==null?[]:M.filter(N=>N!==v),V()},B=v=>{const{toastId:N,onOpen:n,updateId:r,children:p}=v.props,c=r==null;v.staleId&&g.delete(v.staleId),g.set(N,v),M=[...M,v.props.toastId].filter(l=>l!==v.staleId),V(),$(ke(v,c?"added":"updated")),c&&H(n)&&n(S.isValidElement(p)&&p.props)};return{id:y,props:E,observe:v=>(I.add(v),()=>I.delete(v)),toggle:(v,N)=>{g.forEach(n=>{N!=null&&N!==n.props.toastId||H(n.toggle)&&n.toggle(v)})},removeToast:F,toasts:g,clearQueue:()=>{k-=T.length,T=[]},buildToast:(v,N)=>{if((W=>{let{containerId:U,toastId:q,updateId:X}=W;const Q=U?U!==y:y!==1,Z=g.has(q)&&X==null;return Q||Z})(N))return;const{toastId:n,updateId:r,data:p,staleId:c,delay:l}=N,i=()=>{F(n)},a=r==null;a&&k++;const f={...E,style:E.toastStyle,key:O++,...Object.fromEntries(Object.entries(N).filter(W=>{let[U,q]=W;return q!=null})),toastId:n,updateId:r,data:p,closeToast:i,isIn:!1,className:ce(N.className||E.toastClassName),bodyClassName:ce(N.bodyClassName||E.bodyClassName),progressClassName:ce(N.progressClassName||E.progressClassName),autoClose:!N.isLoading&&(w=N.autoClose,m=E.autoClose,w===!1||ne(w)&&w>0?w:m),deleteToast(){const W=g.get(n),{onClose:U,children:q}=W.props;H(U)&&U(S.isValidElement(q)&&q.props),$(ke(W,"removed")),g.delete(n),k--,k<0&&(k=0),T.length>0?B(T.shift()):V()}};var w,m;f.closeButton=E.closeButton,N.closeButton===!1||Ee(N.closeButton)?f.closeButton=N.closeButton:N.closeButton===!0&&(f.closeButton=!Ee(E.closeButton)||E.closeButton);let C=v;S.isValidElement(v)&&!G(v.type)?C=S.cloneElement(v,{closeToast:i,toastProps:f,data:p}):H(v)&&(C=v({closeToast:i,toastProps:f,data:p}));const j={content:C,props:f,staleId:c};E.limit&&E.limit>0&&k>E.limit&&a?T.push(j):ne(l)?setTimeout(()=>{B(j)},l):B(j)},setProps(v){E=v},setToggle:(v,N)=>{g.get(v).toggle=N},isToastActive:v=>M.some(N=>N===v),getSnapshot:()=>E.newestOnTop?A.reverse():A}}(s,h,nt);z.set(s,_);const P=_.observe(b);return oe.forEach(y=>De(y.content,y.options)),oe=[],()=>{P(),z.delete(s)}},setProps(b){var _;(_=z.get(s))==null||_.setProps(b)},getSnapshot(){var b;return(b=z.get(s))==null?void 0:b.getSnapshot()}}}(e)).current;u(e);const d=S.useSyncExternalStore(t,o,o);return{getToastToRender:function(h){if(!d)return[];const s=new Map;return d.forEach(b=>{const{position:_}=b.props;s.has(_)||s.set(_,[]),s.get(_).push(b)}),Array.from(s,b=>h(b[0],b[1]))},isToastActive:Be,count:d?.length}}function st(e){const[t,o]=S.useState(!1),[u,d]=S.useState(!1),h=S.useRef(null),s=S.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:b,pauseOnHover:_,closeToast:P,onClick:y,closeOnClick:R}=e;var $,O;function k(){o(!0)}function T(){o(!1)}function M(g){const I=h.current;s.canDrag&&I&&(s.didMove=!0,t&&T(),s.delta=e.draggableDirection==="x"?g.clientX-s.start:g.clientY-s.start,s.start!==g.clientX&&(s.canCloseOnClick=!1),I.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,I.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function A(){document.removeEventListener("pointermove",M),document.removeEventListener("pointerup",A);const g=h.current;if(s.canDrag&&s.didMove&&g){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return d(!0),e.closeToast(),void e.collapseAll();g.style.transition="transform 0.2s, opacity 0.2s",g.style.removeProperty("transform"),g.style.removeProperty("opacity")}}(O=z.get(($={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))==null||O.setToggle($.id,$.fn),S.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",k),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",k),window.removeEventListener("blur",T)}},[e.pauseOnFocusLoss]);const E={onPointerDown:function(g){if(e.draggable===!0||e.draggable===g.pointerType){s.didMove=!1,document.addEventListener("pointermove",M),document.addEventListener("pointerup",A);const I=h.current;s.canCloseOnClick=!0,s.canDrag=!0,I.style.transition="none",e.draggableDirection==="x"?(s.start=g.clientX,s.removalDistance=I.offsetWidth*(e.draggablePercent/100)):(s.start=g.clientY,s.removalDistance=I.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(g){const{top:I,bottom:V,left:F,right:B}=h.current.getBoundingClientRect();g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&g.clientX>=F&&g.clientX<=B&&g.clientY>=I&&g.clientY<=V?T():k()}};return b&&_&&(E.onMouseEnter=T,e.stacked||(E.onMouseLeave=k)),R&&(E.onClick=g=>{y&&y(g),s.canCloseOnClick&&P()}),{playToast:k,pauseToast:T,isRunning:t,preventExitTransition:u,toastRef:h,eventHandlers:E}}function rt(e){let{delay:t,isRunning:o,closeToast:u,type:d="default",hide:h,className:s,style:b,controlledProgress:_,progress:P,rtl:y,isIn:R,theme:$}=e;const O=h||_&&P===0,k={...b,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused"};_&&(k.transform=`scaleX(${P})`);const T=Y("Toastify__progress-bar",_?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${$}`,`Toastify__progress-bar--${d}`,{"Toastify__progress-bar--rtl":y}),M=H(s)?s({rtl:y,type:d,defaultClassName:T}):Y(T,s),A={[_&&P>=1?"onTransitionEnd":"onAnimationEnd"]:_&&P<1?null:()=>{R&&u()}};return x.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":O},x.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${$} Toastify__progress-bar--${d}`}),x.createElement("div",{role:"progressbar","aria-hidden":O?"true":"false","aria-label":"notification timer",className:M,style:k,...A}))}let it=1;const je=()=>""+it++;function at(e){return e&&(G(e.toastId)||ne(e.toastId))?e.toastId:je()}function te(e,t){return De(e,t),t.toastId}function de(e,t){return{...t,type:t&&t.type||e,toastId:at(t)}}function re(e){return(t,o)=>te(t,de(e,o))}function L(e,t){return te(e,de("default",t))}L.loading=(e,t)=>te(e,de("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),L.promise=function(e,t,o){let u,{pending:d,error:h,success:s}=t;d&&(u=G(d)?L.loading(d,o):L.loading(d.render,{...o,...d}));const b={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},_=(y,R,$)=>{if(R==null)return void L.dismiss(u);const O={type:y,...b,...o,data:$},k=G(R)?{render:R}:R;return u?L.update(u,{...O,...k}):L(k.render,{...O,...k}),$},P=H(e)?e():e;return P.then(y=>_("success",s,y)).catch(y=>_("error",h,y)),P},L.success=re("success"),L.info=re("info"),L.error=re("error"),L.warning=re("warning"),L.warn=L.warning,L.dark=(e,t)=>te(e,de("default",{theme:"dark",...t})),L.dismiss=function(e){(function(t){var o;if($e()){if(t==null||G(o=t)||ne(o))z.forEach(u=>{u.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const u=z.get(t.containerId);u?u.removeToast(t.id):z.forEach(d=>{d.removeToast(t.id)})}}else oe=oe.filter(u=>t!=null&&u.options.toastId!==t)})(e)},L.clearWaitingQueue=function(e){e===void 0&&(e={}),z.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},L.isActive=Be,L.update=function(e,t){t===void 0&&(t={});const o=((u,d)=>{var h;let{containerId:s}=d;return(h=z.get(s||1))==null?void 0:h.toasts.get(u)})(e,t);if(o){const{props:u,content:d}=o,h={delay:100,...u,...t,toastId:t.toastId||e,updateId:je()};h.toastId!==e&&(h.staleId=e);const s=h.render||d;delete h.render,te(s,h)}},L.done=e=>{L.update(e,{progress:1})},L.onChange=function(e){return _e.add(e),()=>{_e.delete(e)}},L.play=e=>Pe(!0,e),L.pause=e=>Pe(!1,e);const lt=typeof window<"u"?S.useLayoutEffect:S.useEffect,ie=e=>{let{theme:t,type:o,isLoading:u,...d}=e;return x.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...d})},ye={info:function(e){return x.createElement(ie,{...e},x.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return x.createElement(ie,{...e},x.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return x.createElement(ie,{...e},x.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return x.createElement(ie,{...e},x.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return x.createElement("div",{className:"Toastify__spinner"})}},ct=e=>{const{isRunning:t,preventExitTransition:o,toastRef:u,eventHandlers:d,playToast:h}=st(e),{closeButton:s,children:b,autoClose:_,onClick:P,type:y,hideProgressBar:R,closeToast:$,transition:O,position:k,className:T,style:M,bodyClassName:A,bodyStyle:E,progressClassName:g,progressStyle:I,updateId:V,role:F,progress:B,rtl:v,toastId:N,deleteToast:n,isIn:r,isLoading:p,closeOnClick:c,theme:l}=e,i=Y("Toastify__toast",`Toastify__toast-theme--${l}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":c}),a=H(T)?T({rtl:v,position:k,type:y,defaultClassName:i}):Y(i,T),f=function(j){let{theme:W,type:U,isLoading:q,icon:X}=j,Q=null;const Z={theme:W,type:U};return X===!1||(H(X)?Q=X({...Z,isLoading:q}):S.isValidElement(X)?Q=S.cloneElement(X,Z):q?Q=ye.spinner():(ze=>ze in ye)(U)&&(Q=ye[U](Z))),Q}(e),w=!!B||!_,m={closeToast:$,type:y,theme:l};let C=null;return s===!1||(C=H(s)?s(m):S.isValidElement(s)?S.cloneElement(s,m):function(j){let{closeToast:W,theme:U,ariaLabel:q="close"}=j;return x.createElement("button",{className:`Toastify__close-button Toastify__close-button--${U}`,type:"button",onClick:X=>{X.stopPropagation(),W(X)},"aria-label":q},x.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},x.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(m)),x.createElement(O,{isIn:r,done:n,position:k,preventExitTransition:o,nodeRef:u,playToast:h},x.createElement("div",{id:N,onClick:P,"data-in":r,className:a,...d,style:M,ref:u},x.createElement("div",{...r&&{role:F},className:H(A)?A({type:y}):Y("Toastify__toast-body",A),style:E},f!=null&&x.createElement("div",{className:Y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!p})},f),x.createElement("div",null,b)),C,x.createElement(rt,{...V&&!w?{key:`pb-${V}`}:{},rtl:v,theme:l,delay:_,isRunning:t,isIn:r,closeToast:$,hide:R,type:y,style:I,className:g,controlledProgress:w,progress:B||0})))},pe=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},ut=fe(pe("bounce",!0));fe(pe("slide",!0));fe(pe("zoom"));fe(pe("flip"));const dt={position:"top-right",transition:ut,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function wt(e){let t={...dt,...e};const o=e.stacked,[u,d]=S.useState(!0),h=S.useRef(null),{getToastToRender:s,isToastActive:b,count:_}=ot(t),{className:P,style:y,rtl:R,containerId:$}=t;function O(T){const M=Y("Toastify__toast-container",`Toastify__toast-container--${T}`,{"Toastify__toast-container--rtl":R});return H(P)?P({position:T,rtl:R,defaultClassName:M}):Y(M,ce(P))}function k(){o&&(d(!0),L.play())}return lt(()=>{if(o){var T;const M=h.current.querySelectorAll('[data-in="true"]'),A=12,E=(T=t.position)==null?void 0:T.includes("top");let g=0,I=0;Array.from(M).reverse().forEach((V,F)=>{const B=V;B.classList.add("Toastify__toast--stacked"),F>0&&(B.dataset.collapsed=`${u}`),B.dataset.pos||(B.dataset.pos=E?"top":"bot");const v=g*(u?.2:1)+(u?0:A*F);B.style.setProperty("--y",`${E?v:-1*v}px`),B.style.setProperty("--g",`${A}`),B.style.setProperty("--s",""+(1-(u?I:0))),g+=B.offsetHeight,I+=.025})}},[u,_,o]),x.createElement("div",{ref:h,className:"Toastify",id:$,onMouseEnter:()=>{o&&(d(!1),L.pause())},onMouseLeave:k},s((T,M)=>{const A=M.length?{...y}:{...y,pointerEvents:"none"};return x.createElement("div",{className:O(T),style:A,key:`container-${T}`},M.map(E=>{let{content:g,props:I}=E;return x.createElement(ct,{...I,stacked:o,collapseAll:k,isIn:b(I.toastId,I.containerId),style:I.style,key:`toast-${I.key}`},g)}))}))}const ft={success:J.jsx("i",{className:"icon-[mingcute--check-fill] text-uk-green-light"}),error:J.jsx("i",{className:"icon-[mingcute--close-fill] text-uk-red-light"}),info:J.jsx("i",{className:"icon-[mingcute--information-fill] text-uk-blue-light"}),warning:J.jsx("i",{className:"icon-[mingcute--alert-fill] text-uk-orange-light"}),default:J.jsx("i",{className:"icon-[mingcute--information-fill] text-uk-blue-light"})},pt=e=>{const{iconElement:t,message:o,closeToast:u,onClick:d}=e,h=d?Te.button:Te.div;return J.jsxs(h,{layout:"position",className:Y("relative w-full overflow-hidden rounded-xl card-shadow","my-4 mr-4 px-4 py-5 pr-7","bg-zinc-50/90 backdrop-blur-sm dark:bg-neutral-900/90","border border-slate-100/80 dark:border-neutral-900/80","space-x-4","flex items-center","select-none","[&>i]:shrink-0","[&>svg]:shrink-0"),onClick:d,children:[t??ft[e.toastProps?.type??"default"],J.jsx("span",{className:"text-left",children:o}),J.jsx(Ve,{"aria-label":"Close toast",className:"absolute inset-y-0 right-3 flex items-center text-sm text-base-content/40 duration-200 hover:text-base-content/80",onClick:s=>{s.stopPropagation(),u?.()},children:J.jsx("i",{className:"icon-[mingcute--close-fill] p-2"})})]})},gt={position:"bottom-right",autoClose:3e3,pauseOnHover:!0,hideProgressBar:!0,closeOnClick:!0,closeButton:!1},be=(e,t,o)=>{const{iconElement:u,onClick:d,...h}=o||{};return L(S.createElement(pt,{message:e,iconElement:u,onClick:d}),{type:t,...gt,...h})};["success","info","warn","error"].forEach(e=>{be[e]=(t,o)=>be(t,e,o)});Object.assign(be,{dismiss:L.dismiss});export{Et as P,wt as Q,He as a,Re as b,Oe as c,Ke as d,_t as e,Ne as f,Le as g,et as i,Ae as r,Tt as s,be as t,bt as u};
