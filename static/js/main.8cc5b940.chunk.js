(this.webpackJsonpplacement=this.webpackJsonpplacement||[]).push([[0],{282:function(t,e){},284:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),u=n(13),i=n.n(u),o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),a(t),u(t)}))},l=n(127),j=n(214);(r||(r={})).repeat=function(t,e){for(var n=[],r=0;r<t;++r)n.push(e(r));return n};var d,s=n(125),b=n(220),h=n(219),f=n.n(h);(d||(d={})).download=function(t,e){var n=new Blob([e],{type:"text/plan"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=t,document.body.appendChild(r),r.dispatchEvent(new MouseEvent("click")),document.body.removeChild(r),URL.revokeObjectURL(r.href)};var O=n(16);function p(t){var e=Number(t.variant.substr(1));return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(s.Typography,{variant:"h".concat(e+3),children:t.title}),e<=2?Object(O.jsx)(s.Divider,{}):null,Object(O.jsx)("br",{}),t.children,r.repeat(e<=2?4:2,(function(){return Object(O.jsx)("br",{})}))]})}function v(t){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(s.Button,{fullWidth:!0,variant:"contained",onClick:function(){return function(){var e=t.data.map((function(t){return"index\n"+t.join("\n")})).join("\n\n"),n=f.a.encode(e,"euc-kr");d.download("placement.csv",n)}()},startIcon:Object(O.jsx)(b.CloudDownloadOutlined,{}),children:"Download"}),t.data.map((function(t,e){return Object(O.jsx)(p,{variant:"h3",title:"\ubc18\ubcf5\uc218 ".concat(e+1),children:Object(O.jsxs)("table",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{children:" \ucc98\ub9ac\uad6c \ubc88\ud638 "})}),t.map((function(t){return Object(O.jsx)("tr",{children:Object(O.jsxs)("td",{children:[" ",t," "]})})}))]})})}))]})}p||(p={}),v||(v={});var x=n(128),m=n(311);function g(t){var e=t.getter();return Object(O.jsx)(m.a,Object(x.a)(Object(x.a)({},t),{},{error:t.error?t.error:null!==t.getter()&&""===t.getter().trim(),defaultValue:e||"",onChange:function(e){var n=e.target.value,r=!0===t.nullable&&""===n?null:n;t.setter(r)}}))}function w(){var t=a.a.useState(10),e=Object(l.a)(t,2),n=e[0],c=e[1],u=a.a.useState(4),i=Object(l.a)(u,2),o=i[0],d=i[1],s=r.repeat(o,(function(t){var e=r.repeat(n,(function(e){return"T".concat(e+1,"-").concat(t+1)}));return Object(j.shuffle)(e),e}));return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)(p,{variant:"h2",title:"Input",children:[Object(O.jsx)(g,{fullWidth:!0,type:"number",label:"\ucc98\ub9ac\uad6c \uc218",getter:function(){return n.toString()},setter:function(t){return c(Number(t))}}),Object(O.jsx)(g,{fullWidth:!0,type:"number",label:"\ubc18\ubcf5 \uc218",getter:function(){return o.toString()},setter:function(t){return d(Number(t))}})]}),Object(O.jsx)(v,{data:s})]})}g||(g={}),i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),o()}},[[284,1,2]]]);
//# sourceMappingURL=main.8cc5b940.chunk.js.map