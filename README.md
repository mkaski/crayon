# 🖍️

Draw on any webpage.

"Bookmarklet" that allows you to draw on any webpage easily. Annotate and highlight pages quickly without any additional tools.

# Installation

<a href="javascript:!function(){if(document.getElementById('__d'))return;let e=document.createElement('canvas');e.id='__d',Object.assign(e.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'auto',zIndex:1e4,cursor:'crosshair'}),document.body.appendChild(e);let t=e.getContext('2d');t.strokeStyle='#D00';let n=!1;function i(){e.width=window.innerWidth,e.height=window.innerHeight,t.strokeStyle='#D00'}i(),window.addEventListener('resize',i),e.addEventListener('mousedown',(function(e){n=!0,t.beginPath(),t.moveTo(e.clientX,e.clientY)})),e.addEventListener('mousemove',(function(e){n&&(t.lineTo(e.clientX,e.clientY),t.stroke())})),e.addEventListener('mouseup',(function(){n=!1}))}();">🖍️</a>

- Drag the crayon emoji to your browser's bookmarks bar.
- Click the crayon emoji to start drawing on any open page.
- Refresh the page to exit drawing mode.

Alternatively, copy and paste the code below into your browser's address bar or save it as a bookmark. Note that some browsers strip out the `javascript:` prefix when pasting directly into the address bar.

```js
javascript:!function(){if(document.getElementById('__d'))return;let e=document.createElement('canvas');e.id='__d',Object.assign(e.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'auto',zIndex:1e4,cursor:'crosshair'}),document.body.appendChild(e);let t=e.getContext('2d');t.strokeStyle='#D00';let n=!1;function i(){e.width=window.innerWidth,e.height=window.innerHeight,t.strokeStyle='#D00'}i(),window.addEventListener('resize',i),e.addEventListener('mousedown',(function(e){n=!0,t.beginPath(),t.moveTo(e.clientX,e.clientY)})),e.addEventListener('mousemove',(function(e){n&&(t.lineTo(e.clientX,e.clientY),t.stroke())})),e.addEventListener('mouseup',(function(){n=!1}))}();
```
