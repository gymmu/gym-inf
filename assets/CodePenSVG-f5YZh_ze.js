import{r as s,j as e}from"./react-vendor-DjasHgK6.js";import{E as o}from"./Editor-DAhc7p6k.js";import{s as t}from"./CodePen.module-BfICubSo.js";import"./vendor-D7BjNmWU.js";import"./monaco-ByOCJtO_.js";import"./reveal-Rylxx4kG.js";function j({initialCode:i=`<svg viewBox="0 0 500 500" width="300">
    <circle cx="250" cy="250" r="150" fill="#CB6400" />
</svg>`,withCSS:l=!1}){const[a,n]=s.useState(i),[r,c]=s.useState(`svg {
  background: white;
}
`),[d,m]=s.useState("");return s.useEffect(()=>{const u=setTimeout(()=>{m(`
        <html>
          <body>${a}</body>
          <style>${r}</style>
          <style>body { margin: 0; padding: 0; overflow: hidden;}</style>
        </html>
      `)},1e3);return()=>{clearTimeout(u)}},[a,r]),e.jsxs("div",{className:t.codePenWrapper,children:[e.jsxs("div",{className:`${t.pane} ${t.paneLeft}`,children:[e.jsx(o,{title:"SVG",language:"html",handleChange:n,value:a}),l&&e.jsx(o,{title:"CSS",language:"css",value:r,handleChange:c})]}),e.jsxs("div",{className:`${t.pane} ${t.outputPane}`,children:[e.jsx("h2",{children:"Result"}),e.jsx("iframe",{srcDoc:d,title:"output",sandbox:"allow-scripts",frameBorder:"0",height:"300px",width:"300px"})]})]})}export{j as default};
