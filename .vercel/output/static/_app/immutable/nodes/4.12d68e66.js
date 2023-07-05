import{s as A,w as J,f as _,g as v,h as C,d as g,i as R,x as K,y as Q,z as Z,G as H,o as L,a as P,l as ee,c as S,m as te,j as f,r as h,n as ne,k as q,p as X,u as D,H as x,E as F,I as se,J as ae,F as j,D as re}from"../chunks/scheduler.3339ba20.js";import{S as U,i as V,a as y,t as w,b,d as k,m as E,e as I,f as ie}from"../chunks/index.22f5a88e.js";import{I as G,h as le,p as ce,s as oe,b as ue,T as fe,c as me,f as de}from"../chunks/index.bedd29d2.js";const he={runtime:"edge"},je=Object.freeze(Object.defineProperty({__proto__:null,config:he},Symbol.toStringTag,{value:"Module"}));function pe(l){let e,t;const n=l[1].default,a=J(n,l,l[0],null);return{c(){e=_("main"),a&&a.c()},l(s){e=v(s,"MAIN",{});var r=C(e);a&&a.l(r),r.forEach(g)},m(s,r){R(s,e,r),a&&a.m(e,null),t=!0},p(s,[r]){a&&a.p&&(!t||r&1)&&K(a,n,s,s[0],t?Z(n,s[0],r,null):Q(s[0]),null)},i(s){t||(y(a,s),t=!0)},o(s){w(a,s),t=!1},d(s){s&&g(e),a&&a.d(s)}}}function ge(l,e,t){let{$$slots:n={},$$scope:a}=e;var s=0,r=0;const u=H();function m(c){u("swipe",c)}function i(c){s=c.touches[0].clientX,r=c.touches[0].clientY}function o(c){const p=c.changedTouches[0].clientX,$=c.changedTouches[0].clientY,T=p-s,d=$-r;Math.abs(T)>Math.abs(d)?m(T>0?"right":"left"):m(d>0?"down":"up")}return L(()=>{document.addEventListener("touchstart",i),document.addEventListener("touchend",o)}),l.$$set=c=>{"$$scope"in c&&t(0,a=c.$$scope)},[a,n]}class $e extends U{constructor(e){super(),V(this,e,ge,pe,A,{})}}function _e(l){let e,t,n,a,s,r,u,m;return n=new G({props:{data:l[0],id:"icon"}}),{c(){e=_("div"),t=_("a"),b(n.$$.fragment),a=P(),s=_("h3"),r=ee(l[2]),this.h()},l(i){e=v(i,"DIV",{class:!0,id:!0});var o=C(e);t=v(o,"A",{href:!0,"data-sveltekit-preload-data":!0,class:!0});var c=C(t);k(n.$$.fragment,c),a=S(c),s=v(c,"H3",{id:!0,class:!0});var p=C(s);r=te(p,l[2]),p.forEach(g),c.forEach(g),o.forEach(g),this.h()},h(){f(s,"id","name"),f(s,"class","svelte-14suc5i"),f(t,"href",l[1]),f(t,"data-sveltekit-preload-data","hover"),f(t,"class","svelte-14suc5i"),f(e,"class","link-box svelte-14suc5i"),f(e,"id",u=l[3]==l[1]?"active":"")},m(i,o){R(i,e,o),h(e,t),E(n,t,null),h(t,a),h(t,s),h(s,r),m=!0},p(i,[o]){const c={};o&1&&(c.data=i[0]),n.$set(c),(!m||o&4)&&ne(r,i[2]),(!m||o&2)&&f(t,"href",i[1]),(!m||o&10&&u!==(u=i[3]==i[1]?"active":""))&&f(e,"id",u)},i(i){m||(y(n.$$.fragment,i),m=!0)},o(i){w(n.$$.fragment,i),m=!1},d(i){i&&g(e),I(n)}}}function ve(l,e,t){let{iconName:n}=e,{src:a}=e,{name:s}=e,{pagePath:r}=e;return l.$$set=u=>{"iconName"in u&&t(0,n=u.iconName),"src"in u&&t(1,a=u.src),"name"in u&&t(2,s=u.name),"pagePath"in u&&t(3,r=u.pagePath)},[n,a,s,r]}class z extends U{constructor(e){super(),V(this,e,ve,_e,A,{iconName:0,src:1,name:2,pagePath:3})}}function ye(l){let e,t,n,a,s,r,u,m,i,o,c,p,$,T;return n=new z({props:{name:"Home",src:"/",iconName:le,pagePath:l[0]}}),s=new z({props:{name:"Product",src:"/product",iconName:ce,pagePath:l[0]}}),u=new z({props:{name:"Order",src:"/order",iconName:oe,pagePath:l[0]}}),i=new z({props:{name:"Contact",src:"/contact",iconName:ue,pagePath:l[0]}}),p=new fe({props:{scale:2}}),p.$on("toggle-theme",l[3]),{c(){e=_("div"),t=_("div"),b(n.$$.fragment),a=P(),b(s.$$.fragment),r=P(),b(u.$$.fragment),m=P(),b(i.$$.fragment),o=P(),c=_("div"),b(p.$$.fragment),this.h()},l(d){e=v(d,"DIV",{class:!0,style:!0,id:!0});var M=C(e);t=v(M,"DIV",{class:!0});var N=C(t);k(n.$$.fragment,N),a=S(N),k(s.$$.fragment,N),r=S(N),k(u.$$.fragment,N),m=S(N),k(i.$$.fragment,N),o=S(N),c=v(N,"DIV",{class:!0});var B=C(c);k(p.$$.fragment,B),B.forEach(g),N.forEach(g),M.forEach(g),this.h()},h(){f(c,"class","theme-box svelte-1yemp9a"),f(t,"class","components-box svelte-1yemp9a"),f(e,"class","sidebar-container svelte-1yemp9a"),q(e,"display","none"),f(e,"id",$=l[2]=="light"?"lightTheme":"darkTheme")},m(d,M){R(d,e,M),h(e,t),E(n,t,null),h(t,a),E(s,t,null),h(t,r),E(u,t,null),h(t,m),E(i,t,null),h(t,o),h(t,c),E(p,c,null),l[4](e),T=!0},p(d,[M]){const N={};M&1&&(N.pagePath=d[0]),n.$set(N);const B={};M&1&&(B.pagePath=d[0]),s.$set(B);const Y={};M&1&&(Y.pagePath=d[0]),u.$set(Y);const W={};M&1&&(W.pagePath=d[0]),i.$set(W),(!T||M&4&&$!==($=d[2]=="light"?"lightTheme":"darkTheme"))&&f(e,"id",$)},i(d){T||(y(n.$$.fragment,d),y(s.$$.fragment,d),y(u.$$.fragment,d),y(i.$$.fragment,d),y(p.$$.fragment,d),T=!0)},o(d){w(n.$$.fragment,d),w(s.$$.fragment,d),w(u.$$.fragment,d),w(i.$$.fragment,d),w(p.$$.fragment,d),T=!1},d(d){d&&g(e),I(n),I(s),I(u),I(i),I(p),l[4](null)}}}function we(l,e,t){let n,a,s;const r=H();L(()=>{t(0,n=window.location.pathname),r("reference",a)});function u(i){t(2,s=i.detail)}function m(i){X[i?"unshift":"push"](()=>{a=i,t(1,a)})}return[n,a,s,u,m]}class be extends U{constructor(e){super(),V(this,e,we,ye,A,{})}}function ke(l){let e,t,n;return t=new be({}),t.$on("reference",l[0]),{c(){e=_("main"),b(t.$$.fragment)},l(a){e=v(a,"MAIN",{});var s=C(e);k(t.$$.fragment,s),s.forEach(g)},m(a,s){R(a,e,s),E(t,e,null),n=!0},p:D,i(a){n||(y(t.$$.fragment,a),n=!0)},o(a){w(t.$$.fragment,a),n=!1},d(a){a&&g(e),I(t)}}}function Ee(l){function e(t){x.call(this,l,t)}return[e]}class Ie extends U{constructor(e){super(),V(this,e,Ee,ke,A,{})}}function Pe(l){let e,t,n,a,s,r,u,m,i,o="send",c,p;return{c(){e=_("div"),t=_("form"),n=_("input"),a=P(),s=_("input"),r=P(),u=_("input"),m=P(),i=_("button"),i.textContent=o,this.h()},l($){e=v($,"DIV",{class:!0});var T=C(e);t=v(T,"FORM",{class:!0});var d=C(t);n=v(d,"INPUT",{type:!0,placeholder:!0,class:!0}),a=S(d),s=v(d,"INPUT",{type:!0,placeholder:!0,class:!0}),r=S(d),u=v(d,"INPUT",{type:!0,placeholder:!0,class:!0}),m=S(d),i=v(d,"BUTTON",{type:!0,class:!0,["data-svelte-h"]:!0}),F(i)!=="svelte-oi6wzx"&&(i.textContent=o),d.forEach(g),T.forEach(g),this.h()},h(){f(n,"type","text"),f(n,"placeholder","Full Name"),f(n,"class","svelte-1527vup"),f(s,"type","text"),f(s,"placeholder","Email"),f(s,"class","svelte-1527vup"),f(u,"type","text"),f(u,"placeholder","Message"),f(u,"class","svelte-1527vup"),f(i,"type","submit"),f(i,"class","svelte-1527vup"),f(t,"class","svelte-1527vup"),f(e,"class","form-container svelte-1527vup")},m($,T){R($,e,T),h(e,t),h(t,n),l[2](n),h(t,a),h(t,s),h(t,r),h(t,u),h(t,m),h(t,i),c||(p=se(t,"submit",ae(l[1])),c=!0)},p:D,i:D,o:D,d($){$&&g(e),l[2](null),c=!1,p()}}}function Se(l,e,t){let n;L(()=>{n.focus()});function a(r){x.call(this,l,r)}function s(r){X[r?"unshift":"push"](()=>{n=r,t(0,n)})}return[n,a,s]}class Ce extends U{constructor(e){super(),V(this,e,Se,Pe,A,{})}}function Te(l){let e,t,n;return{c(){e=_("a"),t=_("img"),this.h()},l(a){e=v(a,"A",{href:!0,class:!0});var s=C(e);t=v(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(g),this.h()},h(){j(t.src,n=l[1])||f(t,"src",n),f(t,"alt",l[2]),f(t,"class","svelte-wpfmsk"),f(e,"href",l[0]),f(e,"class","svelte-wpfmsk")},m(a,s){R(a,e,s),h(e,t)},p(a,[s]){s&2&&!j(t.src,n=a[1])&&f(t,"src",n),s&4&&f(t,"alt",a[2]),s&1&&f(e,"href",a[0])},i:D,o:D,d(a){a&&g(e)}}}function Ne(l,e,t){let{src:n}=e,{imgSrc:a}=e,{name:s}=e;return l.$$set=r=>{"src"in r&&t(0,n=r.src),"imgSrc"in r&&t(1,a=r.imgSrc),"name"in r&&t(2,s=r.name)},[n,a,s]}class O extends U{constructor(e){super(),V(this,e,Ne,Te,A,{src:0,imgSrc:1,name:2})}}function De(l){let e,t,n,a,s,r,u,m,i;return t=new O({props:{src:"/",name:"Instagram",imgSrc:"/app-icons/instagram.svg"}}),a=new O({props:{src:"/",name:"Snapchat",imgSrc:"/app-icons/snapchat.svg"}}),r=new O({props:{src:"/",name:"TikTok",imgSrc:"/app-icons/tiktok.svg"}}),m=new O({props:{src:"/",name:"WhatsApp",imgSrc:"/app-icons/whatsapp.svg"}}),{c(){e=_("div"),b(t.$$.fragment),n=P(),b(a.$$.fragment),s=P(),b(r.$$.fragment),u=P(),b(m.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var c=C(e);k(t.$$.fragment,c),n=S(c),k(a.$$.fragment,c),s=S(c),k(r.$$.fragment,c),u=S(c),k(m.$$.fragment,c),c.forEach(g),this.h()},h(){f(e,"class","appIcons-box svelte-1c3kgku")},m(o,c){R(o,e,c),E(t,e,null),h(e,n),E(a,e,null),h(e,s),E(r,e,null),h(e,u),E(m,e,null),i=!0},p:D,i(o){i||(y(t.$$.fragment,o),y(a.$$.fragment,o),y(r.$$.fragment,o),y(m.$$.fragment,o),i=!0)},o(o){w(t.$$.fragment,o),w(a.$$.fragment,o),w(r.$$.fragment,o),w(m.$$.fragment,o),i=!1},d(o){o&&g(e),I(t),I(a),I(r),I(m)}}}class Ae extends U{constructor(e){super(),V(this,e,null,De,A,{})}}function Ue(l){let e,t,n="Contact Us",a,s,r,u,m="Visit us at",i,o,c;return s=new Ce({}),o=new Ae({}),{c(){e=_("div"),t=_("p"),t.textContent=n,a=P(),b(s.$$.fragment),r=P(),u=_("h4"),u.textContent=m,i=P(),b(o.$$.fragment),this.h()},l(p){e=v(p,"DIV",{class:!0});var $=C(e);t=v($,"P",{id:!0,class:!0,["data-svelte-h"]:!0}),F(t)!=="svelte-8blmau"&&(t.textContent=n),a=S($),k(s.$$.fragment,$),r=S($),u=v($,"H4",{style:!0,["data-svelte-h"]:!0}),F(u)!=="svelte-1efzaxb"&&(u.textContent=m),i=S($),k(o.$$.fragment,$),$.forEach(g),this.h()},h(){f(t,"id","title"),f(t,"class","svelte-1oe5sur"),q(u,"font-family","cursive"),f(e,"class","contact-us_container svelte-1oe5sur")},m(p,$){R(p,e,$),h(e,t),h(e,a),E(s,e,null),h(e,r),h(e,u),h(e,i),E(o,e,null),l[1](e),c=!0},p:D,i(p){c||(y(s.$$.fragment,p),y(o.$$.fragment,p),c=!0)},o(p){w(s.$$.fragment,p),w(o.$$.fragment,p),c=!1},d(p){p&&g(e),I(s),I(o),l[1](null)}}}function Ve(l,e,t){let n;const a=H();L(()=>{a("contact-ref",n)});function s(r){X[r?"unshift":"push"](()=>{n=r,t(0,n)})}return[n,s]}class Me extends U{constructor(e){super(),V(this,e,Ve,Ue,A,{})}}function Re(l){let e,t,n,a;return n=new G({props:{data:me,scale:1.2}}),{c(){e=_("div"),t=_("a"),b(n.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var r=C(e);t=v(r,"A",{href:!0,class:!0});var u=C(t);k(n.$$.fragment,u),u.forEach(g),r.forEach(g),this.h()},h(){f(t,"href","tel:+2348171983663"),f(t,"class","svelte-1uy2iyd"),f(e,"class","phone-container svelte-1uy2iyd")},m(s,r){R(s,e,r),h(e,t),E(n,t,null),a=!0},p:D,i(s){a||(y(n.$$.fragment,s),a=!0)},o(s){w(n.$$.fragment,s),a=!1},d(s){s&&g(e),I(n)}}}class Be extends U{constructor(e){super(),V(this,e,null,Re,A,{})}}function Le(l){let e,t;return e=new Ie({}),e.$on("reference",l[1]),{c(){b(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){E(e,n,a),t=!0},p:D,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function ze(l){let e,t,n,a,s,r,u,m;return t=new $e({props:{$$slots:{default:[Le]},$$scope:{ctx:l}}}),t.$on("swipe",l[0]),a=new Me({}),a.$on("contact-ref",l[2]),r=new Be({}),{c(){e=_("div"),b(t.$$.fragment),n=P(),b(a.$$.fragment),s=P(),b(r.$$.fragment)},l(i){e=v(i,"DIV",{});var o=C(e);k(t.$$.fragment,o),n=S(o),k(a.$$.fragment,o),s=S(o),k(r.$$.fragment,o),o.forEach(g)},m(i,o){R(i,e,o),E(t,e,null),h(e,n),E(a,e,null),h(e,s),E(r,e,null),m=!0},p(i,[o]){const c={};o&1024&&(c.$$scope={dirty:o,ctx:i}),t.$set(c)},i(i){m||(y(t.$$.fragment,i),y(a.$$.fragment,i),y(r.$$.fragment,i),i&&(u||re(()=>{u=ie(e,de,{duration:2500}),u.start()})),m=!0)},o(i){w(t.$$.fragment,i),w(a.$$.fragment,i),w(r.$$.fragment,i),m=!1},d(i){i&&g(e),I(t),I(a),I(r)}}}function Oe(l){let e,t,n,a;function s(c){t.style.display=c}function r(c){e=c.detail,e=="right"&&(s("block"),a.style.opacity=.5,console.log(a))}function u(c){t=c.detail}function m(){n=window.innerWidth,n>=768||e=="right"?s("block"):s("none")}function i(c){!c.composedPath().includes(t)&&n<768&&(t.style.display="none",a.style.opacity=1)}function o(c){a=c.detail}return L(()=>{n=window.innerWidth,n>=768&&(s("block"),a.style.opacity=1),window.addEventListener("resize",m),document.addEventListener("click",i)}),[r,u,o]}class Fe extends U{constructor(e){super(),V(this,e,Oe,ze,A,{})}}function He(l){let e,t;return e=new Fe({}),{c(){b(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){E(e,n,a),t=!0},p:D,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}class qe extends U{constructor(e){super(),V(this,e,null,He,A,{})}}export{qe as component,je as universal};