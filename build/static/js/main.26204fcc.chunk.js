(this["webpackJsonpreact-samyrai"]=this["webpackJsonpreact-samyrai"]||[]).push([[1],{136:function(t,e,n){},220:function(t,e,n){"use strict";n.r(e);var a=n(44),r=n.n(a),i=n(0),c=n.n(i),s=function(t){t&&t instanceof Function&&n.e(9).then(n.bind(null,297)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))},o=n(33),u=n(34),l=n(36),d=n(35),j=(n(136),n(6)),b=n(15),f=n(20),h=n(25),p=n(64),O=n(59),g=n(73),m=n(24),v={friendsPage:[{img:"https://mir-avatarok.3dn.ru/_si/0/92302704.jpg",name:"Nastya",alt:"qwq",id:1},{img:"https://mir-avatarok.3dn.ru/_si/0/92302704.jpg",name:"Vivaldi",alt:"qwzxq",id:2},{img:"https://mir-avatarok.3dn.ru/_si/0/92302704.jpg",name:"Nana",alt:"qwe",id:3}]},E=n(82),U=n(80),x=n(3),S={initialized:!1};var P=Object(h.c)({dialogs:p.a,profile:O.a,sideBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return t},usersData:g.a,authMe:m.a,form:U.a,appReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-INITIALIZED":return Object(x.a)(Object(x.a)({},t),{},{initialized:!0});default:return t}}}),A=Object(h.e)(P,Object(h.a)(E.a));window.store=A;var T=A,I=n(53),w=n(27),R=n.n(w),C=n(2),N=function(t){return Object(C.jsxs)("header",{className:R.a.header,children:[Object(C.jsx)("img",{className:R.a.img,src:"https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:R.a.loginBlock,children:t.isAuth?Object(C.jsxs)("div",{children:[t.login," ",Object(C.jsx)("button",{onClick:t.logoutThunk,children:"Logout"})]}):Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{onClick:t.logoutThunk,children:"Logout"})," "]})}),Object(C.jsx)("input",{className:R.a.search,type:"text"}),Object(C.jsx)("button",{onClick:function(t){return alert(t.pageX)},className:R.a.button_s,children:"Search"})]})]})},_=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsx)(N,{isAuth:this.props.isAuth,login:this.props.login,logoutThunk:this.props.logoutThunk})}}]),n}(c.a.Component),y=Object(f.b)((function(t){return{login:t.authMe.login,isAuth:t.authMe.isAuth}}),{logoutThunk:m.d})(_),k=n(7),L=n.n(k),F=n(45),D=n.n(F),H=function(t){return Object(C.jsxs)("div",{className:D.a.img_avatar,children:[Object(C.jsx)("img",{src:t.img,className:D.a.img_avatar,alt:t.alt}),Object(C.jsx)("p",{className:D.a.name,children:t.name})]})},M=function(t){var e=t.friendsPage.friendsPage.map((function(t){return Object(C.jsx)(H,{img:t.img,alt:t.alt,name:t.name},t.id)}));return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Friends"}),e]})},z=Object(f.b)((function(t){return{friendsPage:t.sideBar}}),(function(t){return{}}))(M),B=function(){return Object(C.jsxs)("nav",{className:L.a.nav,children:[Object(C.jsx)("div",{className:"".concat(L.a.item),children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/profile",children:"Profile"})}),Object(C.jsx)("div",{className:"".concat(L.a.item),children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/dialogs",children:"Messege"})}),Object(C.jsx)("div",{className:L.a.item,children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/news",children:"News"})}),Object(C.jsx)("div",{className:L.a.item,children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/musick",children:"Musick"})}),Object(C.jsx)("div",{className:L.a.item+" "+L.a.setting,children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/setting",children:"Setting"})}),Object(C.jsx)("div",{className:L.a.item+" "+L.a.setting,children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/users",children:"Users"})}),Object(C.jsx)("div",{className:L.a.item+" "+L.a.setting,children:Object(C.jsx)(b.b,{activeClassName:L.a.active,to:"/login",children:"Login"})}),Object(C.jsx)(z,{})]})},G=function(t){return Object(C.jsx)("div",{})},q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,302))})),J=c.a.lazy((function(){return n.e(5).then(n.bind(null,301))})),V=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,300))})),Z=c.a.lazy((function(){return n.e(8).then(n.bind(null,298))})),K=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,299))})),Q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).catchAllErrors=function(){alert("Errors Global")},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunk(),window.addEventListener("unhandledrejection",this.catchAllErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllErrors)}},{key:"render",value:function(){return this.props.initialized?Object(C.jsxs)("div",{className:"app-wrapper",children:[Object(C.jsx)(y,{}),Object(C.jsx)(B,{}),Object(C.jsx)("div",{className:"app-wrapper-content",children:Object(C.jsx)(c.a.Suspense,{fallback:Object(C.jsx)(I.a,{}),children:Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(C.jsx)(j.a,{to:"/profile"})}}),Object(C.jsx)(j.b,{path:"/profile/:userId?",component:V}),Object(C.jsx)(j.b,{path:"/dialogs",component:q}),Object(C.jsx)(j.b,{path:"/users",component:J}),Object(C.jsx)(j.b,{path:"/login",component:K}),Object(C.jsx)(j.b,{path:"/musick",component:Z}),Object(C.jsx)(j.b,{path:"*",render:function(){return Object(C.jsx)("div",{children:"404 not found"})}})]})})}),Object(C.jsx)(G,{})]}):Object(C.jsx)(I.a,{})}}]),n}(c.a.Component),W=Object(h.d)(Object(f.b)((function(t){return{initialized:t.appReducer.initialized}}),{initializeAppThunk:function(){return function(t){var e=t(Object(m.b)());Promise.all([e]).then((function(){t({type:"APP/SET-INITIALIZED"})}))}}}),j.g)(Q),X=function(){return Object(C.jsx)(b.a,{children:Object(C.jsx)(f.a,{store:T,children:Object(C.jsx)(W,{})})})};r.a.render(Object(C.jsx)(X,{}),document.getElementById("root")),s()},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return j}));var a=n(3),r=n(8),i=n(46),c={id:null,email:null,login:null,captcha:null,isAuth:!1};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTH/SET-USER-DATA":return Object(a.a)(Object(a.a)({},t),e.payload);case"AUTH/GET-CAPTCHA-URL":return Object(a.a)(Object(a.a)({},t),{},{captcha:e.url});default:return t}}var o=function(t,e,n,a){return{type:"AUTH/SET-USER-DATA",payload:{id:t,email:e,login:n,isAuth:a}}},u=function(){return function(t){return r.a.Me().then((function(e){0===e.data.resultCode&&t(o(e.data.data.id,e.data.data.email,e.data.data.login,!0))}))}},l=function(t,e,n,a){return function(c){r.a.login(t,e,n,a).then((function(t){if(0===t.data.resultCode)c(u());else{if(10!==t.data.resultCode){var e=t.data.messages.length>0?t.data.messages[0]:"some error";return c(Object(i.a)("login",{_error:e}))}c(d())}}))}},d=function(){return function(t){r.a.captcha().then((function(e){t({type:"AUTH/GET-CAPTCHA-URL",url:e.data.url})}))}},j=function(){return function(t){r.a.logout().then((function(e){0===e.data.resultCode&&t(o(null,null,null,!1))}))}}},27:function(t,e,n){t.exports={img:"Header_img__sBm02",header:"Header_header__1Qevl",search:"Header_search__uHOUV",button_s:"Header_button_s__JLIAS",loginBlock:"Header_loginBlock__u6BU7"}},45:function(t,e,n){t.exports={img_avatar:"friends_img_avatar__2H_jF",name:"friends_name__15HEu"}},53:function(t,e,n){"use strict";n(0);var a=n.p+"static/media/1487.707b7930.gif",r=n(2);e.a=function(t){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{style:{width:"100px"},src:a,alt:"Lodding"})})}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return j})),n.d(e,"e",(function(){return b})),n.d(e,"c",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"f",(function(){return p}));var a=n(26),r=n(3),i=n(8),c=n(16),s={postData:[{id:"1",message:"hello how are you",likesCount:12,img:"https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg"}],profileUsers:{aboutMe:"",contacts:{facebook:"",website:"",vk:"",twitter:"",instagram:"",youtube:"",github:"",mainLink:""},lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",userId:0,photos:{small:"",large:""}},status:""};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PROFILE/ADD-POST":var n={id:Object(c.a)(),message:e.newMessage,likesCount:0,img:t.profileUsers.photos.small?t.profileUsers.photos.small:"https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg"};return Object(r.a)(Object(r.a)({},t),{},{postData:[n].concat(Object(a.a)(t.postData))});case"PROFILE/SET-PROFILE-USER":return Object(r.a)(Object(r.a)({},t),{},{profileUsers:e.profile});case"PROFILE/SET-PROFILE-STATUS":return Object(r.a)(Object(r.a)({},t),{},{status:e.status});case"PROFILE/DEL-POST-PROFILE":return Object(r.a)(Object(r.a)({},t),{},{postData:t.postData.filter((function(t){return t.id!==e.id}))});case"PROFILE/UPDATE-PHOTO-USER":return Object(r.a)(Object(r.a)({},t),{},{profileUsers:Object(r.a)(Object(r.a)({},t.profileUsers),{},{photos:e.photo})});default:return t}}var u=function(t){return{type:"PROFILE/ADD-POST",newMessage:t}},l=function(t){return{type:"PROFILE/SET-PROFILE-USER",profile:t}},d=function(t){return{type:"PROFILE/SET-PROFILE-STATUS",status:t}},j=function(t){return function(e){i.c.userIdAPI(t).then((function(t){e(l(t.data))}))}},b=function(t){return function(e,n){i.b.updateProfileData(t).then((function(t){0===t.data.resultCode&&e(l(t.data))}))}},f=function(t){return function(e){i.b.getStatus(t).then((function(t){0===t.data.resultCode&&e(d(t.data))})).catch((function(t){alert(t.data.messages)}))}},h=function(t){return function(e){i.b.updateStatus(t).then((function(n){0===n.data.resultCode&&e(d(t))}))}},p=function(t){return function(e){i.b.updPhoto(t).then((function(t){0===t.data.resultCode&&e(function(t){return{type:"PROFILE/UPDATE-PHOTO-USER",photo:t}}(t.data.data.photos))}))}}},64:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var a=n(26),r=n(3),i=n(16),c=function(t){return{type:"DIALOG/SEND-MESSAGE",value:t}},s={dialogs:[{name:"nick",id:Object(i.a)()},{name:"Leks",id:Object(i.a)()},{name:"Nastya",id:Object(i.a)()},{name:"Egor",id:Object(i.a)()}],message:[{message:"\u043a\u0430\u043a \u0434\u0435\u043b\u0430",id:Object(i.a)()},{message:"\u043a\u0430\u043a \u0434\u0435\u043b\u0430",id:Object(i.a)()},{message:"\u043a\u0430\u043a \u0434\u0435\u043b\u0430",id:Object(i.a)()},{message:"\u043a\u0430\u043a \u0434\u0435\u043b\u0430",id:Object(i.a)()}]};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DIALOG/SEND-MESSAGE":var n=e.value;return Object(r.a)(Object(r.a)({},t),{},{message:[].concat(Object(a.a)(t.message),[{message:n,id:Object(i.a)()}])});default:return t}}},7:function(t,e,n){t.exports={nav:"Navbar_nav__1btus",item:"Navbar_item__PM8mR",active:"Navbar_active__1IlwC",setting:"Navbar_setting__3wexh"}},73:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return j}));var a=n(26),r=n(3),i=n(8),c={dataUsers:[],totalCount:10,currentPage:1,pageSize:10,isFetching:!1,disabledInProgressUser:[]};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USER/Follow":return Object(r.a)(Object(r.a)({},t),{},{dataUsers:t.dataUsers.map((function(t){return t.id===e.userId?Object(r.a)(Object(r.a)({},t),{},{followed:!0}):t}))});case"USER/Un-Follow":return Object(r.a)(Object(r.a)({},t),{},{dataUsers:t.dataUsers.map((function(t){return t.id===e.userId?Object(r.a)(Object(r.a)({},t),{},{followed:!1}):t}))});case"USER/Set-UsersContainerAPI":return Object(r.a)(Object(r.a)({},t),{},{dataUsers:e.users});case"USER/CURRENT-PAGES":return Object(r.a)(Object(r.a)({},t),{},{currentPage:e.pageNumberCurrent});case"USER/TOTAL-USER-COUNT":return Object(r.a)(Object(r.a)({},t),{},{totalCount:e.totalCount});case"USER/Toggle is fetching":return Object(r.a)(Object(r.a)({},t),{},{isFetching:e.isFetching});case"USER/TOGGLE-DISABLED-BUTTON-USER":return Object(r.a)(Object(r.a)({},t),{},{disabledInProgressUser:e.disFetching?[].concat(Object(a.a)(t.disabledInProgressUser),[e.idUser]):[t.disabledInProgressUser.filter((function(t){return t!==e.idUser}))]});default:return t}}var o=function(t,e){return{type:"USER/TOGGLE-DISABLED-BUTTON-USER",disFetching:t,idUser:e}},u=function(t){return{type:"USER/Toggle is fetching",isFetching:t}},l=function(t,e){return function(n){n(u(!0)),i.c.getUsers(t,e).then((function(e){n(u(!1)),n({type:"USER/Set-UsersContainerAPI",users:e.items}),n({type:"USER/TOTAL-USER-COUNT",totalCount:e.totalCount}),n({type:"USER/CURRENT-PAGES",pageNumberCurrent:t})}))}},d=function(t){return function(e){e(o(!0,t)),i.c.followApi(t).then((function(n){0===n.data.resultCode&&e({type:"USER/Follow",userId:t}),e(o(!1,t))}))}},j=function(t){return function(e){e(o(!0,t)),i.c.unFollowApi(t).then((function(n){0===n.data.resultCode&&e({type:"USER/Un-Follow",userId:t}),e(o(!1,t))}))}}},8:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var a=n(81),r=n.n(a).a.create({withCredentials:!0,headers:{"API-KEY":"978dde1d-b974-4ee1-a942-d32857675e96"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),i={getUsers:function(t,e){return r.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},followApi:function(t){return r.post("follow/".concat(t))},unFollowApi:function(t){return r.delete("follow/".concat(t))},userIdAPI:function(t){return r.get("profile/"+t)}},c={getProfile:function(t){return console.warn("Obsolete method.Please profileAPI object"),i.userIdAPI(t)},updPhoto:function(t){var e=new FormData;return e.append("image",t),r.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},getStatus:function(t){return r.get("profile/status/"+t)},updateStatus:function(t){return r.put("profile/status",t)},updateProfileData:function(t){return r.put("profile",t)}},s={Me:function(){return r.get("auth/me")},login:function(t,e,n,a){return r.post("auth/login",{email:t,password:e,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")},captcha:function(){return r.get("security/get-captcha-url")}}}},[[220,2,3]]]);
//# sourceMappingURL=main.26204fcc.chunk.js.map