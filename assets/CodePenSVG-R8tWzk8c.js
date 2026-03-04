import{r as t,j as e}from"./react-vendor-DPtW2uLn.js";import{E as o}from"./Editor-BjV_XeDN.js";import{s}from"./CodePen.module-BfICubSo.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";function v({initialCode:l=`<svg viewBox="0 0 500 500" width="300">
    <circle cx="250" cy="250" r="150" fill="#CB6400" />
</svg>`,withCSS:i=!1}){const[a,n]=t.useState(l),[r,c]=t.useState(`svg {
  background: white;
}
`),[d,u]=t.useState("");return t.useEffect(()=>{const m=setTimeout(()=>{u(`
        <html>
          <body>${a}</body>
          <style>${r}</style>
          <style>body { margin: 0; padding: 0; overflow: hidden;}</style>
        </html>
      `)},1e3);return()=>{clearTimeout(m)}},[a,r]),e.jsxs("div",{className:s.codePenWrapper,children:[e.jsxs("div",{className:`${s.pane} ${s.paneLeft}`,children:[e.jsx(o,{title:"SVG",language:"html",handleChange:n,value:a}),i&&e.jsx(o,{title:"CSS",language:"css",value:r,handleChange:c})]}),e.jsxs("div",{className:`${s.pane} ${s.outputPane}`,children:[e.jsx("h2",{children:"Result"}),e.jsx("iframe",{srcDoc:d,title:"output",sandbox:"allow-scripts",frameBorder:"0",height:"300px",width:"300px"})]})]})}export{v as default};
