(this["webpackJsonptic-tac-yo"]=this["webpackJsonptic-tac-yo"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),r=c.n(i),s=(c(12),c(13),c(6)),l=c(2),o=c(0),j=function(e){var t=e.value,c=e.onClick,n=t?"cells ".concat(t):"cells";return Object(o.jsx)("button",{className:n,onClick:c,children:t})},u=function(e){var t=e.cells,c=e.onClick;return Object(o.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(o.jsx)(j,{value:e,onClick:function(){return c(t)}},t)}))})};var b=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(0),r=Object(l.a)(i,2),j=r[0],b=r[1],h=Object(n.useState)(!0),O=Object(l.a)(h,2),d=O[0],f=O[1],v=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(l.a)(t[c],3),a=n[0],i=n[1],r=n[2];if(e[a]&&e[a]===e[i]&&e[a]===e[r])return e[a]}return null}(c[j]),x=d?"X":"O",m=v?"champion-visible":"champion";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Tic-tac Yo"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(u,{cells:c[j],onClick:function(e){var t=c.slice(0,j+1),n=t[j],i=Object(s.a)(n);v||i[e]||(i[e]=x,a([].concat(Object(s.a)(t),[i])),b(t.length),f(!d))}}),Object(o.jsx)("button",{onClick:function(e){b(0)},children:"Start Fresh"}),Object(o.jsx)("h3",{className:m,children:v?"Champion "+v:""})]})]})};var h=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(b,{})})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.af70d23a.chunk.js.map