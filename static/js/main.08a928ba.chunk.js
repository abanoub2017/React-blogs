(this["webpackJsonpReact-blogs"]=this["webpackJsonpReact-blogs"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(15),l=c.n(o),r=(c(22),c(23),c(24),c(8)),a=c(0),i=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:" The Cookies Post"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(r.b,{to:"/",children:"Home"}),Object(a.jsx)(r.b,{to:"/create",style:{backgroundColor:"#f1356d"},children:"New Blog"})]})]})},j=(c(31),function(e){var t=e.blogs,c=e.title,n=e.refetchBlogs;return Object(a.jsxs)("div",{className:"blog-list",children:[Object(a.jsxs)("h2",{children:[" ",c," "]}),t.map((function(e){return Object(a.jsxs)("div",{className:"blog-preview",children:[Object(a.jsxs)(r.b,{to:"/blogs/".concat(e.id),children:[Object(a.jsxs)("h2",{children:[" ",e.title," "]}),Object(a.jsxs)("p",{children:[" Write by ",e.author," "]})]}),Object(a.jsx)("button",{onClick:function(){return t=e.id,void fetch("http://localhost:8000/blogs/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){console.log("Deleted"),n()}));var t},children:"Delete Blog"})]},e.id)}))]})}),b=c(7),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),s=c[0],o=c[1],l=Object(n.useState)(!0),r=Object(b.a)(l,2),a=r[0],i=r[1],j=Object(n.useState)(null),d=Object(b.a)(j,2),h=d[0],u=d[1],O=Object(n.useState)(!1),x=Object(b.a)(O,2),g=x[0],f=x[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data  for that resource ");return e.json()})).then((function(e){i(!1),o(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetched aborted"):(i(!1),u(e.message))})),function(){return t.abort()}}),[e,g]),{data:s,pending:a,error:h,get:function(){f(!g)}}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.pending,n=e.error,s=e.get;return Object(a.jsxs)("div",{className:"content",children:[n&&Object(a.jsxs)("div",{children:[" ",n," "]}),c&&Object(a.jsx)("div",{children:"loading ....."}),t&&Object(a.jsx)(j,{blogs:t,refetchBlogs:s,title:"All Blogs!"})]})},u=(c(32),c(2)),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),r=l[0],i=l[1],j=Object(n.useState)(""),d=Object(b.a)(j,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],p=g[1],v=Object(u.f)();return Object(a.jsxs)("div",{className:"create",children:[Object(a.jsx)("h2",{children:" Add New Blogs"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0);var t={title:c,body:r,author:h};fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){p(!1),console.log("Add New Blog"),v.push("/")}))},children:[Object(a.jsx)("label",{children:"Blog Title:"}),Object(a.jsx)("input",{type:"text",name:"title",value:c,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("label",{children:"Blog Body:"}),Object(a.jsx)("textarea",{name:"body",value:r,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("label",{children:"Blog Author:"}),Object(a.jsxs)("select",{name:"author",value:h,onChange:function(e){return O(e.target.value)},children:[Object(a.jsx)("option",{value:"abanoub",children:"Abanoub"}),Object(a.jsx)("option",{value:"fam",children:"Fam"}),Object(a.jsx)("option",{value:"marina",children:"Marina"})]}),!f&&Object(a.jsx)("button",{children:" Add Blog "}),f&&Object(a.jsx)("button",{disabled:!0,children:" Adding blog.... "})]}),Object(a.jsxs)("p",{children:[" ",c,"  "]}),Object(a.jsxs)("p",{children:[" ",r," "]}),Object(a.jsxs)("p",{children:[" ",h," "]})]})},x=(c(33),function(){var e=Object(u.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.pending,s=t.error;return Object(a.jsxs)("div",{children:[s&&Object(a.jsxs)("div",{children:[" ",s," "]}),n&&Object(a.jsx)("div",{children:"loading ....."}),c&&Object(a.jsxs)("article",{children:[Object(a.jsxs)("h3",{children:[" ",c.title," "]}),Object(a.jsxs)("p",{children:[" Written by ",c.author," "]}),Object(a.jsxs)("p",{children:[" ",c.body," "]})]})]})}),g=function(){return Object(a.jsx)(r.a,{basename:"/React-blogs",children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(i,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",children:Object(a.jsx)(h,{})}),Object(a.jsx)(u.a,{path:"/create",children:Object(a.jsx)(O,{})}),Object(a.jsx)(u.a,{path:"/blogs/:id",children:Object(a.jsx)(x,{})})]})})]})})};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.08a928ba.chunk.js.map