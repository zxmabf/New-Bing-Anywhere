"use strict";(()=>{var s="2.1.1";var g="113",l="113.0.1774.57";var m=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},u=()=>{try{let o=chrome.i18n.getUILanguage().toLowerCase();return o==="zh-cn"||o==="zh-tw"||o==="zh-hk"||o==="zh"}catch{return!1}};var A=(()=>{let o="v1";return{get:async e=>{e=`${o}:${e}`;let{data:t,maxAge:n,lastModified:i}=(await chrome.storage.local.get(e))?.[e]??{};return Date.now()-i>n*1e3?(chrome.storage.local.remove(e),null):t},set:async(e,t,n=1/0)=>{e=`${o}:${e}`,await chrome.storage.local.set({[e]:{data:t,lastModified:Date.now(),maxAge:n}})}}})();var r=navigator.userAgent,p=navigator.userAgentData,d=r.includes("Macintosh"),T=r.includes("Firefox"),h=r.includes("Edg/"),C=p?.brands.findIndex(o=>o.brand==="Brave")>-1,B=u(),I=m(),y=!!globalThis.__NBA_isCanary,k=y?`0.${s}`:s,a=()=>{let o=r;return h||(d?o=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${g}.0.0.0 Safari/537.36 Edg/${l}`:o=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${g}.0.0.0 Safari/537.36 Edg/${l}`),o};try{let o=a();Object.defineProperty(navigator,"userAgent",{get:()=>o});let e=navigator.userAgentData,t=e?.brands;Array.isArray(t)&&Object.defineProperty(navigator,"userAgentData",{get:()=>({...JSON.parse(JSON.stringify(e)),brands:[{brand:"Microsoft Edge",version:g},{brand:"Chromium",version:g},{brand:"Not-A.Brand",version:"24"}]})})}catch{}})();
