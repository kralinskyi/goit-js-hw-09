!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.body,n=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1;var d=a.style;n=setInterval((function(){d.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),a.removeAttribute("style"),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.efc8dfd6.js.map
