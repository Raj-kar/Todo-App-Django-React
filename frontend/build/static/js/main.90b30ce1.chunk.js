(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(4),s=n.n(a),o=(n(13),n(3)),r=n(5),l=n(6),d=n(8),u=n(7),h=(n(14),n(0)),f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).fetchTask=function(){fetch("http://127.0.0.1:8000/api/task-list/").then((function(t){return t.json()})).then((function(t){return i.setState({todoList:t})})).catch((function(t){return console.log(t)})),console.log("Fetching ......")},i.handelChange=function(t){var e=t.target.value;i.setState({activeItem:Object(o.a)(Object(o.a)({},i.state.activeItem),{},{title:e})})},i.handelSubmit=function(t){t.preventDefault();var e=i.getCookie("csrftoken"),n="http://127.0.0.1:8000/api/task-create/";i.state.editing&&(n="http://127.0.0.1:8000/api/task-update/".concat(i.state.activeItem.id,"/"),i.setState({editing:!1})),fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":e},body:JSON.stringify(i.state.activeItem)}).then((function(t){i.fetchTask(),i.setState({activeItem:{id:null,title:"",complete:!1}})})).catch((function(t){return console.log(t)}))},i.startEdit=function(t){i.setState({activeItem:t,editing:!0})},i.deleteTask=function(t){var e=i.getCookie("csrftoken"),n="http://127.0.0.1:8000/api/task-delete/".concat(t.id,"/");fetch(n,{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":e}}).then((function(t){i.fetchTask()})).catch((function(t){return console.log(t)}))},i.completeTask=function(t){var e=i.getCookie("csrftoken"),n="http://127.0.0.1:8000/api/task-update/".concat(t.id,"/");t.complete=!t.complete,fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":e},body:JSON.stringify(t)}).then((function(t){i.fetchTask(),i.setState({activeItem:{id:null,title:"",complete:!1}})})).catch((function(t){return console.log(t)}))},i.state={todoList:[],activeItem:{id:null,title:"",complete:!1},editing:!1},i}return Object(l.a)(n,[{key:"getCookie",value:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var c=n[i].trim();if(c.substring(0,t.length+1)===t+"="){e=decodeURIComponent(c.substring(t.length+1));break}}return e}},{key:"componentDidMount",value:function(){this.fetchTask()}},{key:"render",value:function(){var t=this.state.todoList,e=this;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{id:"task-container",children:[Object(h.jsx)("div",{id:"form-wrapper",children:Object(h.jsx)("form",{id:"form",onSubmit:this.handelSubmit,children:Object(h.jsxs)("div",{className:"flex-wrapper",children:[Object(h.jsx)("div",{style:{flex:6},children:Object(h.jsx)("input",{onChange:this.handelChange,value:this.state.activeItem.title,className:"form-control",id:"title",type:"text",name:"title",placeholder:"Add task..",autoFocus:!0})}),Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("input",{id:"submit",className:"btn btn-warning",type:"submit"})})]})})}),Object(h.jsx)("div",{id:"list-wrapper",children:t.length>0?t.map((function(t){return Object(h.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(h.jsx)("div",{style:{flex:7},onClick:function(){return e.completeTask(t)},children:t.complete?Object(h.jsxs)("strike",{children:[t.title," "]}):Object(h.jsx)("span",{children:t.title})}),Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("button",{onClick:function(){return e.startEdit(t)},className:"btn btn-sm btn-outline-info",children:Object(h.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})})}),Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("button",{onClick:function(){return e.deleteTask(t)},className:"btn btn-sm btn-outline-danger",children:Object(h.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})})})]},t.id)})):Object(h.jsx)("div",{className:"task-wrapper flex-wrapper",children:Object(h.jsx)("div",{style:{flex:7},children:Object(h.jsx)("span",{children:"Add your tasks ......"})})})})]}),Object(h.jsx)("p",{id:"copyright",children:"Create using React & Django"})]})}}]),n}(i.PureComponent),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.90b30ce1.chunk.js.map