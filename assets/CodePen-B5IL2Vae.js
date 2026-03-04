import{r,j as e,d as m}from"./react-vendor-DPtW2uLn.js";import{s as l}from"./CodePen.module-BfICubSo.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";function f(){const[t,n]=r.useState(`<header>
  <h1>Hello World!</h1>
</header>`),[s,o]=r.useState(`body {
  color: white;
}
`),[a,c]=r.useState("document.body.style.backgroundColor = 'green'"),[d,h]=r.useState("");return r.useEffect(()=>{const u=setTimeout(()=>{h(`
        <html>
          <body>${t}</body>
          <style>${s}</style>
          <script>${a}<\/script>
        </html>
      `)},1e3);return()=>{clearTimeout(u)}},[t,s,a]),e.jsxs("div",{className:l.codePenWrapper,children:[e.jsxs("div",{className:`${l.pane} ${l.paneLeft}`,children:[e.jsx(i,{title:"HTML",language:"html",handleChange:n,value:t}),e.jsx(i,{title:"CSS",language:"css",value:s,handleChange:o}),e.jsx(i,{title:"JS",language:"javascript",value:a,handleChange:c})]}),e.jsx("div",{className:l.pane,children:e.jsx("iframe",{srcDoc:d,title:"output",sandbox:"allow-scripts",frameBorder:"0",height:"100%",width:"100%"})})]})}function i(t){const{title:n,language:s,value:o,handleChange:a}=t;return e.jsxs("div",{className:l.editorWrapper,children:[e.jsx("h2",{children:n}),e.jsx(m,{defaultLanguage:s,value:o,theme:"vs-dark",onChange:a,height:"300px"})]})}export{f as default};
