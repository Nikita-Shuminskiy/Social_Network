(this["webpackJsonpreact-samyrai"]=this["webpackJsonpreact-samyrai"]||[]).push([[5],{285:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__I6fdL",dialog_item:"Dialogs_dialog_item__17nja",dialog:"Dialogs_dialog__3NhB0",active:"Dialogs_active__33RkJ",messages_item:"Dialogs_messages_item__3ak0s",messages:"Dialogs_messages__3iCs7"}},286:function(e,a,s){"use strict";s.d(a,"a",(function(){return d}));var t=s(5),i=s(92),n=(s(0),s(15)),c=s(9),o=s(1),r=function(e){return{isAuth:e.authMe.isAuth}};function d(e){return Object(n.b)(r)((function(a){var s=a.isAuth,n=Object(i.a)(a,["isAuth"]);return s?Object(o.jsx)(e,Object(t.a)({},n)):Object(o.jsx)(c.a,{to:"/login"})}))}},299:function(e,a,s){"use strict";s.r(a);var t=s(5),i=s(48),n=s(49),c=s(52),o=s(51),r=s(0),d=s.n(r),j=s(93),l=s(285),g=s.n(l),u=s(20),m=s(1),b=function(e){var a="/dialogs/"+e.id;return Object(m.jsx)("div",{className:g.a.dialog,children:Object(m.jsx)(u.b,{activeClassName:g.a.active,to:a,children:e.name})})},O=function(e){return Object(m.jsx)("div",{className:g.a.messages,children:Object(m.jsx)("span",{children:e.message})})},h=s(124),_=s(125),f=s(62),v=s(82),p=Object(f.a)(10),x=Object(_.a)({form:"DialogAddMessageForm"})((function(e){return Object(m.jsx)("form",{onSubmit:e.handleSubmit,children:Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{placeholder:"Enter Message",component:v.a,name:"messageBodyNew",validate:[f.b,p]}),Object(m.jsx)("button",{children:"Send"})]})})})),N=function(e){var a=e.dialogsPage.dialogs.map((function(e){return Object(m.jsx)(b,{id:e.id,name:e.name},e.id)})),s=e.dialogsPage.message.map((function(e){return Object(m.jsx)(O,{message:e.message},e.id)}));return Object(m.jsxs)("div",{className:g.a.dialogs,children:[Object(m.jsx)("div",{className:g.a.dialog_item+" "+g.a.active,children:a}),Object(m.jsxs)("div",{className:g.a.messages_item,children:[s,Object(m.jsx)(x,{onSubmit:function(a){a.messageBodyNew&&e.sendMessage(a.messageBodyNew),a.messageBodyNew=""}})]})]})},y=s(15),D=s(286),k=function(e){Object(c.a)(s,e);var a=Object(o.a)(s);function s(){return Object(i.a)(this,s),a.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(N,Object(t.a)(Object(t.a)({},this.props),{},{dialogsPage:this.props.dialogsPage}))})}}]),s}(d.a.Component);a.default=Object(D.a)(Object(y.b)((function(e){return{dialogsPage:e.dialogs}}),{sendMessage:j.b})(k))}}]);
//# sourceMappingURL=5.9cece025.chunk.js.map