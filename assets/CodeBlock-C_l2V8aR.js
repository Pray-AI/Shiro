function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-tqdSjrwy.js","./index-D69ByIPa.js","./index-CIZmFYvw.css","./useQuery-DqNLNx7z.js","./request-BAEuhjpj.js","./toast-giWTrjb-.js","./helper-CaAdfMs7.js","./StyledButton-BnfRRGwi.js","./motion-minimal-C0x2YXMk.js","./env-DbhK1WeT.js","./index-LAI3pait.js","./main-DGjRfQUe.js","./viewport-Qr8qfY1g.js","./use-is-dark-DXZCtKEh.js","./dom-XXNktKeO.js","./lodash-B3VVwmZe.js","./provider-C0EXlO8Z.js","./use-is-unmounted-BbLadR4d.js","./spring-ClNvnvRS.js","./use-event-callback-u_ORe5vz.js","./use-animation-5j4F01Sw.js","./visual-element-X4nQbFz0.js","./index-Cvt6hBaM.js","./Mermaid-DbN51Dhu.js","./Gallery-BEpZ3MI1.js","./image-BOiXvjJw.js","./Gallery-BwIx_4-Z.css","./Shiki-Cz0-5aWS.js","./AutoResizeHeight-CX2LMwcb.js","./utils-75aU8jMq.js","./Shiki-vsF9uS_m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as m,_ as a,j as r}from"./index-D69ByIPa.js";import{R as l,E as s}from"./ExcalidrawLoading-_yiretDN.js";import{e as d}from"./Gallery-BEpZ3MI1.js";import{d as p}from"./alert-CLzGwzSM.js";import{H as u}from"./CodeHighlighter-Ch2_z6mQ.js";import{i as x}from"./utils-75aU8jMq.js";import{i as h}from"./env-DbhK1WeT.js";import{B as _}from"./Mermaid-DbN51Dhu.js";import"./react-error-boundary.esm-C1qjD1nt.js";import"./lodash-B3VVwmZe.js";import"./motion-minimal-C0x2YXMk.js";import"./image-BOiXvjJw.js";import"./helper-CaAdfMs7.js";import"./request-BAEuhjpj.js";import"./toast-giWTrjb-.js";import"./StyledButton-BnfRRGwi.js";import"./viewport-Qr8qfY1g.js";import"./use-is-unmounted-BbLadR4d.js";import"./FloatPopover-DwGwd8DO.js";import"./spring-ClNvnvRS.js";import"./use-event-callback-u_ORe5vz.js";import"./use-is-client-DHB3N6IX.js";import"./index-Cvt6hBaM.js";import"./visual-element-X4nQbFz0.js";import"./LinkCard-BXd_o8aM.js";import"./provider-C0EXlO8Z.js";import"./dom-XXNktKeO.js";import"./use-animation-5j4F01Sw.js";import"./use-motion-template-0w_m0i8R.js";import"./SocialSourceLink--NYPcpG1.js";import"./Collapse-DCg-4gV6.js";import"./useQuery-DqNLNx7z.js";import"./use-is-dark-DXZCtKEh.js";const f=({data:t})=>{const[n,o]=m.useState(null);return d(()=>{const i=m.lazy(()=>a(()=>import("./index-tqdSjrwy.js").then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url).then(e=>({default:e.Excalidraw})));o(r.jsx(i,{data:t},t))},[t]),r.jsx(m.Suspense,{fallback:r.jsx(s,{}),children:n??r.jsx(s,{})})};let c;const Y=t=>{const n=m.useMemo(()=>{switch(t.lang){case"mermaid":{const o=p(()=>a(()=>import("./Mermaid-DbN51Dhu.js").then(i=>i.a),__vite__mapDeps([23,1,2,13,24,25,6,15,4,5,7,8,9,12,17,26]),import.meta.url).then(i=>i.Mermaid));return r.jsx(o,{...t})}case"excalidraw":return r.jsx(f,{data:t.content});case"component":return r.jsx("div",{className:"not-prose my-4",children:r.jsx(l,{dls:t.content})});default:{const o=t.lang;if(o&&x(o)){const i=c??p(()=>a(()=>import("./Shiki-Cz0-5aWS.js"),__vite__mapDeps([27,1,2,6,12,4,5,7,8,9,28,18,19,14,29,30]),import.meta.url).then(e=>e.ShikiHighLighter));return h&&(c=i),r.jsx(i,{...t})}return r.jsx(u,{...t})}}},[t]);return r.jsx(m.Suspense,{fallback:r.jsx(_,{children:"CodeBlock Loading..."}),children:n})};export{Y as CodeBlockRender};
