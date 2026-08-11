import{r,j as o}from"./react-vendor-7TcISLYx.js";import"./vendor-BpcXj_Y6.js";import"./monaco-CPFjTESt.js";import"./reveal-Rylxx4kG.js";const y="_mermaidContainer_n436q_2",b="_highlight_n436q_22",w="_errorContainer_n436q_122",t={mermaidContainer:y,highlight:b,errorContainer:w};function M({chart:i,id:d,highlightNode:s=null}){const a=r.useRef(null),[m,c]=r.useState(""),[u,f]=r.useState(null),[g,h]=r.useState(!1);return r.useEffect(()=>{if(typeof window<"u"&&window.mermaid)h(!0);else{const n=setInterval(()=>{typeof window<"u"&&window.mermaid&&(h(!0),clearInterval(n))},100);return()=>clearInterval(n)}},[]),r.useEffect(()=>{if(!i||!g||!window.mermaid)return;(async()=>{try{window.mermaid.initialize({startOnLoad:!1,theme:"base",themeVariables:{primaryColor:"#3c3836",primaryTextColor:"#ebdbb2",primaryBorderColor:"#83a598",lineColor:"#fabd2f",secondaryColor:"#504945",tertiaryColor:"#665c54",textColor:"#ebdbb2",fontSize:"18px",fontFamily:'"Kalam", "Comic Sans MS", cursive',nodeBorder:"#83a598",mainBkg:"#3c3836",nodeTextColor:"#ebdbb2",arrowheadColor:"#fabd2f",edgeLabelBackground:"#282828",clusterBkg:"#504945",clusterBorder:"#83a598"},securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0,curve:"basis",padding:15,rankSpacing:30,nodeSpacing:40},look:"handDrawn"});const e=d||`mermaid-dark-${Math.random().toString(36).substr(2,9)}`;c(""),f(null);const{svg:l}=await window.mermaid.render(e,i),p=l.replace("<svg",`<style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap'); 
          text, tspan { 
            font-family: "Kalam", "Comic Sans MS", cursive !important; 
            font-size: 18px !important; 
            fill: #ebdbb2 !important;
          }
          .label { 
            padding: 5px 20px !important; 
          }
          foreignObject { 
            overflow: visible !important; 
          }
        </style>`+"<svg");c(p)}catch(e){console.error("Mermaid rendering error:",e),f(e.message||"Failed to render diagram")}})()},[i,d,g]),r.useEffect(()=>{if(!a.current||!s)return;a.current.querySelectorAll(`.${t.highlight}`).forEach(l=>l.classList.remove(t.highlight));const e=a.current.querySelector(`#${s}`);e&&e.classList.add(t.highlight)},[s,m]),u?o.jsxs("div",{className:t.errorContainer,children:[o.jsx("strong",{children:"Fehler beim Rendern des Diagramms:"}),o.jsx("pre",{children:u})]}):o.jsx("div",{ref:a,className:t.mermaidContainer,dangerouslySetInnerHTML:{__html:m}})}export{M as default};
