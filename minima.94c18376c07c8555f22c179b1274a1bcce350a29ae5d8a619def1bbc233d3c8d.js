(()=>{var o={disqus:{shortname:"hugo-minima"},enable:!0,giscus:{category:"Comments",categoryid:"DIC_kwDOFxMJvc4CScQm",inputposition:"buttom",mapping:"pathname",metadata:!1,reactions:!0,repo:"mivinci/hugo-theme-minima",repoid:"MDEwOlJlcG9zaXRvcnkzODcxMjM2NDU="},provider:"giscus",utterances:{issueterm:"pathname",label:"comment",repo:"mivinci/hugo-theme-minima"}},l="light";var u=!0;var m=["\u{1F31A}","\u{1F31D}"];var b=o.provider,h=l,p=m[1],d=m[0],i=h==="system"?"light":h,w="dark",s,n,c;function g(e){s||(s=document.getElementById(e)),s.innerHTML=localStorage.theme===i?p:d,s.addEventListener("click",v)}function v(){let e=localStorage.getItem("theme"),t=e===i?w:i;switch(k(e,t),b){case"utterances":y(`github-${t}`);break;case"giscus":M(t);break;default:}}function k(e,t){let{classList:r}=document.documentElement,_=t===i?p:d;r.remove(e),r.add(t),localStorage.setItem("theme",t),s.innerHTML=_}function y(e){e!=="dark"&&(e="light"),n=n||document.querySelector("iframe.utterances-frame"),!!n&&n.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function M(e){e!=="dark"&&(e="light_protanopia"),c=c||document.querySelector("iframe.giscus-frame"),!!c&&c.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}function f(){u||(document.documentElement.style="user-select:none")}g("theme-switch");f();})();
