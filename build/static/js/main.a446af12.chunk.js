(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyAQwwYHPkvUXEJmSZuZ5bE3nMA0VHzPorg","authDomain":"pantry-5afe3.firebaseapp.com","databaseURL":"https://pantry-5afe3.firebaseio.com","projectId":"pantry-5afe3","storageBucket":"pantry-5afe3.appspot.com","messagingSenderId":"459728399580","appId":"1:459728399580:web:ca1addfc787c82538f1819","measurementId":"G-L0KZV5M8X0"}')},27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),l=a.n(r),u=(a(32),a(7)),o=a(11),i=a(1),s=a(3),m=a.n(s);a(33),a(21),a(36);var d=function(e){var t=e.list,a=e.filters,n=e.user;return c.a.createElement("ul",{className:"List"},Object.keys(t).filter((function(e){var n=a.checked,c=a.unchecked,r=t[e];return n&&c||n&&r.checked||c&&!r.checked})).map((function(e){var a=t[e],r=a.name,l=a.checked;return c.a.createElement("li",{key:e},c.a.createElement("input",{type:"checkbox",value:l,checked:l,onChange:function(){m.a.database().ref("".concat(n.uid,"/").concat(e,"/checked")).set(!l)}}),r,c.a.createElement("button",{onClick:function(){return function(e){return m.a.database().ref("".concat(n.uid,"/").concat(e)).remove()}(e)}},"Delete"))})))},h=a(24),f=function e(t,a){Object(h.a)(this,e),this.name=t,this.checked=a||!1};var p=function(e){var t=e.list,a=e.setList,r=e.user,l=Object(i.f)(),o=Object(n.useState)(""),s=Object(u.a)(o,2),h=s[0],p=s[1],E=Object(n.useState)({checked:!0,unchecked:!0}),b=Object(u.a)(E,2),k=b[0],v=b[1];return r||l.push("/"),c.a.createElement("div",{className:"Home"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return m.a.auth().signOut()}},"Sign Out"),c.a.createElement("div",null,c.a.createElement("input",{value:h,onChange:function(e){return p(e.target.value)}}),c.a.createElement("button",{onClick:function(){return m.a.database().ref("/".concat(r.uid)).push(new f(h)).then((function(){return p("")}))}},"Add Item")),c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("input",{id:"all",type:"radio",name:"filters",value:k.checked&&k.unchecked,defaultChecked:!0,onChange:function(e){return v({checked:!0,unchecked:!0})}}),c.a.createElement("label",{htmlFor:"all"},"All")),c.a.createElement("div",null,c.a.createElement("input",{id:"checked",type:"radio",name:"filters",value:k.checked,onChange:function(e){return v({checked:!0,unchecked:!1})}}),c.a.createElement("label",{htmlFor:"checked"},"Checked")),c.a.createElement("div",null,c.a.createElement("input",{id:"unchecked",type:"radio",name:"filters",value:k.unchecked,onChange:function(e){return v({checked:!1,unchecked:!0})}}),c.a.createElement("label",{htmlFor:"unchecked"},"Unchecked"))))),c.a.createElement(d,{list:t,setList:a,filters:k,user:r}))};a(41),a(43);var E=function(e){var t=e.user,a=Object(i.f)(),r=Object(n.useState)(""),l=Object(u.a)(r,2),o=l[0],s=l[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),f=h[0],p=h[1],E=Object(n.useState)(""),b=Object(u.a)(E,2),k=b[0],v=b[1];return Object(n.useEffect)((function(){t&&a.push("/home")}),[t,a]),c.a.createElement("div",{className:"Login"},c.a.createElement("h1",null,"PANTRY"),c.a.createElement("form",null,c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{id:"email",type:"text",value:o,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{id:"password",type:"password",value:f,onChange:function(e){return p(e.target.value)}}),c.a.createElement("hr",null),c.a.createElement("p",null,k),c.a.createElement("button",{onClick:function(){return m.a.auth().signInWithEmailAndPassword(o,f).catch((function(e){return v(e.message)}))}},"Sign In"),c.a.createElement("button",{onClick:function(){return m.a.auth().createUserWithEmailAndPassword(o,f).catch((function(e){return v(e.message)}))}},"Create Account")),c.a.createElement("span",null,"PANTRY | Developed by @claytoncook"))},b=a(26);a(44);m.a.initializeApp(b);var k=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),d=s[0],h=s[1];return Object(n.useEffect)((function(){m.a.auth().onAuthStateChanged((function(e){r(e)}))}),[]),Object(n.useEffect)((function(){a&&m.a.database().ref(a.uid).on("value",(function(e){var t=e.val();h(t||{})}))}),[a]),c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(E,{user:a})),c.a.createElement(i.a,{exact:!0,path:"/home"},c.a.createElement(p,{list:d,setList:h,user:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a446af12.chunk.js.map