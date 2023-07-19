import{s as I,r as R,f as b,g as w,h as L,d as m,j as d,I as H,i as X,u as U,v as V,w as F,a as O,l as G,c as A,m as K,x as y,n as Q,J as Z,o as J,e as P,y as x}from"./scheduler.33a57a0d.js";import{S as Y,i as M,a as _,t as g,b as E,d as S,m as T,e as q,g as ee,c as te}from"./index.d9189012.js";import{b as ne,e as W,I as ae,u as se,o as re,h as oe,c as le,s as ie,d as ce}from"./Icon.9e590657.js";function ue(i){let e,n,t;const c=i[2].default,a=R(c,i,i[1],null);return{c(){e=b("div"),a&&a.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var o=L(e);a&&a.l(o),o.forEach(m),this.h()},h(){d(e,"class",n=H(`sidebar ${i[0]=="light"?"light":"dark"}`)+" svelte-1hv2jd0")},m(s,o){X(s,e,o),a&&a.m(e,null),t=!0},p(s,[o]){a&&a.p&&(!t||o&2)&&U(a,c,s,s[1],t?F(c,s[1],o,null):V(s[1]),null),(!t||o&1&&n!==(n=H(`sidebar ${s[0]=="light"?"light":"dark"}`)+" svelte-1hv2jd0"))&&d(e,"class",n)},i(s){t||(_(a,s),t=!0)},o(s){g(a,s),t=!1},d(s){s&&m(e),a&&a.d(s)}}}function fe(i,e,n){let{$$slots:t={},$$scope:c}=e,{currentTheme:a}=e;return i.$$set=s=>{"currentTheme"in s&&n(0,a=s.currentTheme),"$$scope"in s&&n(1,c=s.$$scope)},[a,c,t]}class he extends Y{constructor(e){super(),M(this,e,fe,ue,I,{currentTheme:0})}}function de(i){let e,n,t,c,a,s,o,f;return t=new ne({props:{data:i[2],class:"link-icon",scale:1.5}}),{c(){e=b("li"),n=b("a"),E(t.$$.fragment),c=O(),a=b("h5"),s=G(i[0]),this.h()},l(r){e=w(r,"LI",{class:!0,id:!0});var l=L(e);n=w(l,"A",{href:!0,"data-sveltekit-preload-data":!0,class:!0});var u=L(n);S(t.$$.fragment,u),c=A(u),a=w(u,"H5",{id:!0,class:!0});var v=L(a);s=K(v,i[0]),v.forEach(m),u.forEach(m),l.forEach(m),this.h()},h(){d(a,"id","link-name"),d(a,"class","svelte-39vxhk"),d(n,"href",i[1]),d(n,"data-sveltekit-preload-data",""),d(n,"class","svelte-39vxhk"),d(e,"class","link svelte-39vxhk"),d(e,"id",o=`${i[1]==i[3]?"active":"inactive"}`)},m(r,l){X(r,e,l),y(e,n),T(t,n,null),y(n,c),y(n,a),y(a,s),f=!0},p(r,[l]){const u={};l&4&&(u.data=r[2]),t.$set(u),(!f||l&1)&&Q(s,r[0]),(!f||l&2)&&d(n,"href",r[1]),(!f||l&10&&o!==(o=`${r[1]==r[3]?"active":"inactive"}`))&&d(e,"id",o)},i(r){f||(_(t.$$.fragment,r),f=!0)},o(r){g(t.$$.fragment,r),f=!1},d(r){r&&m(e),q(t)}}}function me(i,e,n){let{name:t}=e,{href:c}=e,{icon:a}=e,{pageName:s}=e;return i.$$set=o=>{"name"in o&&n(0,t=o.name),"href"in o&&n(1,c=o.href),"icon"in o&&n(2,a=o.icon),"pageName"in o&&n(3,s=o.pageName)},[t,c,a,s]}class _e extends Y{constructor(e){super(),M(this,e,me,de,I,{name:0,href:1,icon:2,pageName:3})}}function B(i,e,n){const t=i.slice();return t[5]=e[n].name,t[6]=e[n].href,t[7]=e[n].icon,t[9]=n,t}function D(i,e){let n,t,c;return t=new _e({props:{name:e[5],href:e[6],icon:e[7],pageName:e[0]}}),{key:i,first:null,c(){n=P(),E(t.$$.fragment),this.h()},l(a){n=P(),S(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,s){X(a,n,s),T(t,a,s),c=!0},p(a,s){e=a;const o={};s&1&&(o.pageName=e[0]),t.$set(o)},i(a){c||(_(t.$$.fragment,a),c=!0)},o(a){g(t.$$.fragment,a),c=!1},d(a){a&&m(n),q(t,a)}}}function ge(i){let e,n=[],t=new Map,c,a,s,o=W(i[1]);const f=r=>r[9];for(let r=0;r<o.length;r+=1){let l=B(i,o,r),u=f(l);t.set(u,n[r]=D(u,l))}return a=new ae({}),a.$on("toggle-theme",i[2]),{c(){e=b("ul");for(let r=0;r<n.length;r+=1)n[r].c();c=O(),E(a.$$.fragment),this.h()},l(r){e=w(r,"UL",{class:!0});var l=L(e);for(let u=0;u<n.length;u+=1)n[u].l(l);c=A(l),S(a.$$.fragment,l),l.forEach(m),this.h()},h(){d(e,"class","links svelte-15xye2f")},m(r,l){X(r,e,l);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(e,null);y(e,c),T(a,e,null),s=!0},p(r,[l]){l&3&&(o=W(r[1]),ee(),n=se(n,l,f,1,r,o,t,e,re,D,c,B),te())},i(r){if(!s){for(let l=0;l<o.length;l+=1)_(n[l]);_(a.$$.fragment,r),s=!0}},o(r){for(let l=0;l<n.length;l+=1)g(n[l]);g(a.$$.fragment,r),s=!1},d(r){r&&m(e);for(let l=0;l<n.length;l+=1)n[l].d();q(a)}}}function pe(i,e,n){const t=[{name:"Home",href:"/",icon:oe},{name:"Products",href:"/products",icon:le},{name:"Order",href:"/order",icon:ie},{name:"Contact",href:"/contact",icon:ce}];let c;const a=Z();function s(o){o.detail,a("toggle-theme",o.detail)}return J(()=>{n(0,c=window.location.pathname)}),[c,t,s]}let ve=class extends Y{constructor(e){super(),M(this,e,pe,ge,I,{})}};function $e(i){let e,n;return e=new ve({}),e.$on("toggle-theme",i[1]),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,c){T(e,t,c),n=!0},p:x,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ke(i){let e,n;return e=new he({props:{currentTheme:i[0],$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,c){T(e,t,c),n=!0},p(t,[c]){const a={};c&1&&(a.currentTheme=t[0]),c&4096&&(a.$$scope={dirty:c,ctx:t}),e.$set(a)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function k(i){const e=document.querySelector(".sidebar");e.style.display=i}function ye(i,e,n){let t;function c(h){n(0,t=h.detail)}let a,s,o,f,r;function l(h){if(o=h,o=="right"&&f<=768){switch(r){case"/contact":const p=document.querySelector(".form");p.style.transition="opacity .5s linear",p.style.opacity=.5;break;default:const $=document.querySelector(".product");$.style.transition="opacity .5s linear",$.style.opacity=.5}k("block")}}function u(h){a=h.touches[0].clientX,s=h.touches[0].clientY}function v(h){const p=h.changedTouches[0].clientX,$=h.changedTouches[0].clientY,N=p-a,C=$-s;Math.abs(N)>Math.abs(C)?l(N>0?"right":"left"):l(C>0?"down":"up")}function j(h){const p=document.querySelector(".sidebar");if(!h.composedPath().includes(p)&&f<=768)switch(k("none"),r){case"/contact":const N=document.querySelector(".form");N.style.opacity=1;break;default:const C=document.querySelector(".product");C.style.opacity=1}}function z(h){f=h.target.innerWidth,f>=768?k("block"):k("none")}return J(()=>(f=window.innerWidth,f>=768&&k("block"),r=window.location.pathname,document.addEventListener("touchstart",u),document.addEventListener("touchend",v),document.addEventListener("click",j),window.addEventListener("resize",z),()=>{document.removeEventListener("touchstart",u),document.removeEventListener("touchend",v),document.removeEventListener("click",j),window.removeEventListener("resize",z)})),[t,c]}class Se extends Y{constructor(e){super(),M(this,e,ye,ke,I,{})}}export{Se as L};