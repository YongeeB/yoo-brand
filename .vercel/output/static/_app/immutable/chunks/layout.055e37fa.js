import{s as j,r as F,f as b,g as w,h as L,d as m,j as d,E as z,i as q,u as R,v as U,w as V,a as O,l as G,c as P,m as J,x as y,n as K,F as Q,o as A,e as H,y as Z}from"./scheduler.7dff430d.js";import{S as C,i as I,a as g,t as p,b as E,d as S,m as T,e as N,g as x,c as ee}from"./index.eb39c497.js";import{a as te,e as W,I as ne,u as ae,o as se,h as re,b as le,s as oe,c as ie}from"./Icon.fcf6a319.js";function ce(i){let e,n,t;const c=i[2].default,a=F(c,i,i[1],null);return{c(){e=b("div"),a&&a.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var l=L(e);a&&a.l(l),l.forEach(m),this.h()},h(){d(e,"class",n=z(`sidebar ${i[0]=="light"?"light":"dark"}`)+" svelte-1hv2jd0")},m(s,l){q(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&2)&&R(a,c,s,s[1],t?V(c,s[1],l,null):U(s[1]),null),(!t||l&1&&n!==(n=z(`sidebar ${s[0]=="light"?"light":"dark"}`)+" svelte-1hv2jd0"))&&d(e,"class",n)},i(s){t||(g(a,s),t=!0)},o(s){p(a,s),t=!1},d(s){s&&m(e),a&&a.d(s)}}}function ue(i,e,n){let{$$slots:t={},$$scope:c}=e,{currentTheme:a}=e;return i.$$set=s=>{"currentTheme"in s&&n(0,a=s.currentTheme),"$$scope"in s&&n(1,c=s.$$scope)},[a,c,t]}class fe extends C{constructor(e){super(),I(this,e,ue,ce,j,{currentTheme:0})}}function he(i){let e,n,t,c,a,s,l,f;return t=new te({props:{data:i[2],class:"link-icon",scale:1.5}}),{c(){e=b("li"),n=b("a"),E(t.$$.fragment),c=O(),a=b("h5"),s=G(i[0]),this.h()},l(r){e=w(r,"LI",{class:!0,id:!0});var o=L(e);n=w(o,"A",{href:!0,"data-sveltekit-preload-data":!0,class:!0});var u=L(n);S(t.$$.fragment,u),c=P(u),a=w(u,"H5",{id:!0,class:!0});var $=L(a);s=J($,i[0]),$.forEach(m),u.forEach(m),o.forEach(m),this.h()},h(){d(a,"id","link-name"),d(a,"class","svelte-yjt6w0"),d(n,"href",i[1]),d(n,"data-sveltekit-preload-data",""),d(n,"class","svelte-yjt6w0"),d(e,"class","link svelte-yjt6w0"),d(e,"id",l=`${i[1]==i[3]?"active":"inactive"}`)},m(r,o){q(r,e,o),y(e,n),T(t,n,null),y(n,c),y(n,a),y(a,s),f=!0},p(r,[o]){const u={};o&4&&(u.data=r[2]),t.$set(u),(!f||o&1)&&K(s,r[0]),(!f||o&2)&&d(n,"href",r[1]),(!f||o&10&&l!==(l=`${r[1]==r[3]?"active":"inactive"}`))&&d(e,"id",l)},i(r){f||(g(t.$$.fragment,r),f=!0)},o(r){p(t.$$.fragment,r),f=!1},d(r){r&&m(e),N(t)}}}function de(i,e,n){let{name:t}=e,{href:c}=e,{icon:a}=e,{pageName:s}=e;return i.$$set=l=>{"name"in l&&n(0,t=l.name),"href"in l&&n(1,c=l.href),"icon"in l&&n(2,a=l.icon),"pageName"in l&&n(3,s=l.pageName)},[t,c,a,s]}class me extends C{constructor(e){super(),I(this,e,de,he,j,{name:0,href:1,icon:2,pageName:3})}}function B(i,e,n){const t=i.slice();return t[5]=e[n].name,t[6]=e[n].href,t[7]=e[n].icon,t[9]=n,t}function D(i,e){let n,t,c;return t=new me({props:{name:e[5],href:e[6],icon:e[7],pageName:e[0]}}),{key:i,first:null,c(){n=H(),E(t.$$.fragment),this.h()},l(a){n=H(),S(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,s){q(a,n,s),T(t,a,s),c=!0},p(a,s){e=a;const l={};s&1&&(l.pageName=e[0]),t.$set(l)},i(a){c||(g(t.$$.fragment,a),c=!0)},o(a){p(t.$$.fragment,a),c=!1},d(a){a&&m(n),N(t,a)}}}function _e(i){let e,n=[],t=new Map,c,a,s,l=W(i[1]);const f=r=>r[9];for(let r=0;r<l.length;r+=1){let o=B(i,l,r),u=f(o);t.set(u,n[r]=D(u,o))}return a=new ne({}),a.$on("toggle-theme",i[2]),{c(){e=b("ul");for(let r=0;r<n.length;r+=1)n[r].c();c=O(),E(a.$$.fragment),this.h()},l(r){e=w(r,"UL",{class:!0});var o=L(e);for(let u=0;u<n.length;u+=1)n[u].l(o);c=P(o),S(a.$$.fragment,o),o.forEach(m),this.h()},h(){d(e,"class","links svelte-15xye2f")},m(r,o){q(r,e,o);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(e,null);y(e,c),T(a,e,null),s=!0},p(r,[o]){o&3&&(l=W(r[1]),x(),n=ae(n,o,f,1,r,l,t,e,se,D,c,B),ee())},i(r){if(!s){for(let o=0;o<l.length;o+=1)g(n[o]);g(a.$$.fragment,r),s=!0}},o(r){for(let o=0;o<n.length;o+=1)p(n[o]);p(a.$$.fragment,r),s=!1},d(r){r&&m(e);for(let o=0;o<n.length;o+=1)n[o].d();N(a)}}}function ge(i,e,n){const t=[{name:"Home",href:"/",icon:re},{name:"Products",href:"/products",icon:le},{name:"Order",href:"/order",icon:oe},{name:"Contact",href:"/contact",icon:ie}];let c;const a=Q();function s(l){l.detail,a("toggle-theme",l.detail)}return A(()=>{n(0,c=window.location.pathname)}),[c,t,s]}let pe=class extends C{constructor(e){super(),I(this,e,ge,_e,j,{})}};function $e(i){let e,n;return e=new pe({}),e.$on("toggle-theme",i[1]),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,c){T(e,t,c),n=!0},p:Z,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function ve(i){let e,n;return e=new fe({props:{currentTheme:i[0],$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,c){T(e,t,c),n=!0},p(t,[c]){const a={};c&1&&(a.currentTheme=t[0]),c&2048&&(a.$$scope={dirty:c,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function k(i){const e=document.querySelector(".sidebar");e.style.display=i}function ke(i,e,n){let t;function c(h){n(0,t=h.detail)}let a,s,l,f;function r(h){if(l=h,l=="right"&&f<=768){const _=document.querySelector(".form");_&&(_.style.transition="opacity .5s linear",_.style.opacity=.5),k("block")}}function o(h){a=h.touches[0].clientX,s=h.touches[0].clientY}function u(h){const _=h.changedTouches[0].clientX,Y=h.changedTouches[0].clientY,v=_-a,M=Y-s;Math.abs(v)>Math.abs(M)?r(v>0?"right":"left"):r(M>0?"down":"up")}function $(h){const _=document.querySelector(".sidebar");if(!h.composedPath().includes(_)&&f<=768){const v=document.querySelector(".form");k("none"),v&&(v.style.opacity=1)}}function X(h){f=h.target.innerWidth,f>=768?k("block"):k("none")}return A(()=>(f=window.innerWidth,f>=768&&k("block"),document.addEventListener("touchstart",o),document.addEventListener("touchend",u),document.addEventListener("click",$),window.addEventListener("resize",X),()=>{document.removeEventListener("touchstart",o),document.removeEventListener("touchend",u),document.removeEventListener("click",$),window.removeEventListener("resize",X)})),[t,c]}class Ee extends C{constructor(e){super(),I(this,e,ke,ve,j,{})}}export{Ee as L};
