(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/asia.8a44d71b.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),r=t.n(i),c=(t(14),t(3)),s=t(4),l=t(6),u=t(5),m=t(7),d=(t(15),t(16),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={active:"Home"},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,img:e.img})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("nav",{className:"nav"},this.props.items.map(function(n,t){var o="menu";return e.state.color===n.color&&(o="".concat(o," is-active")),a.a.createElement("a",{className:o+" "+n.color,onClick:e.clicked.bind(e,n),key:t},n.name)})),a.a.createElement("div",{className:"info"},"ini adalah ",a.a.createElement("span",{className:"selected "+this.state.color},this.state.name),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("img",{src:this.state.img,width:"200"})))}}]),n}(o.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(d,{items:[{name:"Larva",color:"Merah",img:"Larva.png"},{name:"Minion",color:"Kuning",img:"Minion.jpg"},{name:"Green",color:"Hijau",img:"Green.png"},{name:"Doraemon",color:"Biru",img:"Doraemon.png"}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/web-zulvia",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/web-zulvia","/service-worker.js");f?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.067f47a8.chunk.js.map