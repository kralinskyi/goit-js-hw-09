!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body.style,d=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((function(){a.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.cc991fe8.js.map
