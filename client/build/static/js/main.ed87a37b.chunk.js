(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{479:function(e,t,a){e.exports=a.p+"static/media/Upload Successful.e085041b.png"},488:function(e,t,a){e.exports=a(968)},717:function(e,t,a){},963:function(e,t,a){},964:function(e,t,a){},968:function(e,t,a){"use strict";a.r(t);a(294),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(489),a(490),a(491),a(492),a(493),a(494),a(495),a(496),a(497),a(323),a(498),a(499),a(179),a(500),a(501),a(502),a(503),a(504),a(505),a(506),a(507),a(508),a(509),a(510),a(511),a(512),a(513),a(514),a(516),a(518),a(519),a(332),a(181),a(520),a(521),a(522),a(523),a(524),a(525),a(526),a(527),a(528),a(529),a(530),a(531),a(532),a(533),a(534),a(535),a(337),a(536),a(537),a(538),a(539),a(540),a(541),a(542),a(543),a(544),a(546),a(547),a(549),a(550),a(551),a(552),a(553),a(554),a(555),a(556),a(557),a(558),a(559),a(560),a(561),a(562),a(563),a(564),a(565),a(566),a(567),a(247),a(569),a(570),a(571),a(572),a(573),a(575),a(576),a(577),a(578),a(579),a(580),a(581),a(582),a(583),a(584),a(585),a(349),a(586),a(587),a(249),a(588),a(589),a(590),a(591),a(189),a(592),a(593),a(594),a(595),a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(604),a(605),a(606),a(607),a(608),a(609),a(610),a(611),a(612),a(613),a(614),a(615),a(616),a(617),a(619),a(620),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(628),a(629),a(630),a(631),a(632),a(633),a(634),a(635),a(636),a(637),a(638),a(639),a(640),a(641),a(642),a(643),a(644),a(645),a(646),a(647),a(648),a(649),a(650),a(651),a(254),a(652),a(653),a(654),a(655),a(656),a(657),a(658),a(357),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(661),a(662),a(663),a(664),a(665),a(666),a(667),a(668),a(669),a(670),a(671),a(672),a(673),a(674),a(675),a(676),a(678),a(679),a(680),a(681),a(682),a(683),a(684),a(685),a(686),a(687),a(688),a(375),a(377),a(378),a(379),a(380),a(381),a(382),a(383),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(391),a(392),a(393),a(689),a(690),a(691),a(693),a(394),a(395),a(396),a(694),a(695),a(696),a(697),a(698),a(699),a(700),a(701),a(398),a(702),a(703),a(704),a(706),a(400),a(707),a(401);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=(a(717),a(106)),s=a(22),c=a.n(s);function m(){return{type:"auth_user",payload:c.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var u=a(42),d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var i=Object(u.c)((function(e){return e.user})),o=Object(u.b)();return Object(n.useEffect)((function(){o(m()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&l.history.push("/"):t&&l.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},l,{user:i}))}return l},p=a(20),f=a(987),E=a(985),b=a(75),v=a(982),g=a(137),h=a(94),y=a.n(h),w=f.a.Title,x=(E.a.Meta,function(){var e,t,a=Object(u.c)((function(e){return e.user}));console.log(a);var l=Object(n.useState)([]),i=Object(p.a)(l,2),s=i[0],m=i[1];Object(o.f)();Object(n.useEffect)((function(){c.a.get("/api/video/getVideos").then((function(e){e.data.success?(console.log(e.data.videos),m(e.data.videos)):alert("Failed to get Videos")}))}),[]);var d=s.map((function(e,t){var a=Math.floor(e.duration/60),n=Math.floor(e.duration-60*a);if(n<10)var l="0".concat(n);else l=n;return r.a.createElement(b.a,{xxl:6,lg:8,md:12,xs:24},r.a.createElement("div",{style:{position:"relative",height:"400px",width:"auto"},className:"video__container"},r.a.createElement("a",{href:"/video/".concat(e._id)},r.a.createElement("img",{src:e.thumbLink,height:"400px",width:"400px",style:{objectFit:"contain"},alt:""})),r.a.createElement("div",{style:{position:"absolute",bottom:"0px",right:"0px",background:"black",color:"white",margin:"5px",padding:"5px",opacity:"0.9"}},"".concat(a,":").concat(l))),r.a.createElement("div",{className:"video__info"},r.a.createElement("div",{style:{padding:"5px"}},r.a.createElement(v.a,{src:e.writer.image}),r.a.createElement("span",{style:{marginLeft:"5px"}},e.title," ")),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"10px"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",{style:{marginLeft:"5px"}},e.writer.name),r.a.createElement("span",null," ",y()(e.createdAt).format("MMM Do YY")," ")))))}));return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement(w,{level:2},void 0===(null===a||void 0===a||null===(e=a.userData)||void 0===e?void 0:e.name)?"Please wait while we load your videos ....":"Recommended Videos for ".concat(null===a||void 0===a||null===(t=a.userData)||void 0===t?void 0:t.name)),r.a.createElement("hr",null),r.a.createElement(g.a,{gutter:16},d))}),O=a(225),j=a(69),k=a(986),S=a(991),I=a(24),C=a(989),N=a(291),_=f.a.Title;var F=Object(o.g)((function(e){var t=Object(u.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(n.useState)(""),i=Object(p.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(a),d=Object(p.a)(m,2),f=d[0],E=d[1],b=function(){E(!f)},v=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(O.a,{initialValues:{email:v,password:""},validationSchema:j.object().shape({email:j.string().email("Email is invalid").required("Email is required"),password:j.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password};t(function(e){return{type:"login_user",payload:c.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===f?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):s("Check out your Account or Password again")})).catch((function(e){s("Check out your Account or Password again"),setTimeout((function(){s("")}),3e3)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),i=e.handleChange,s=e.handleBlur,c=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app"},r.a.createElement(_,{level:2},"Log In"),r.a.createElement("form",{onSubmit:c,style:{width:"350px"}},r.a.createElement(k.a.Item,{required:!0},r.a.createElement(S.a,{id:"email",prefix:r.a.createElement(I.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:i,onBlur:s,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(k.a.Item,{required:!0},r.a.createElement(S.a,{id:"password",prefix:r.a.createElement(I.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:i,onBlur:s,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),o&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},o)),r.a.createElement(k.a.Item,null,r.a.createElement(C.a,{id:"rememberMe",onChange:b,checked:f},"Remember me"),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),r.a.createElement("div",null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:c},"Log in")),"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))}))})),L={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},D={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var P=function(e){var t=Object(u.b)();return r.a.createElement(O.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:j.object().shape({name:j.string().required("Name is required"),lastName:j.string().required("Last Name is required"),email:j.string().email("Email is invalid").required("Email is required"),password:j.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:j.string().oneOf([j.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(y()().unix(),"?d=identicon")};t(function(e){return{type:"register_user",payload:c.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),i=e.handleChange,o=e.handleBlur,s=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(k.a,Object.assign({style:{minWidth:"375px"}},L,{onSubmit:s}),r.a.createElement(k.a.Item,{required:!0,label:"Name"},r.a.createElement(S.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:i,onBlur:o,className:n.name&&a.name?"text-input error":"text-input"}),n.name&&a.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(k.a.Item,{required:!0,label:"Last Name"},r.a.createElement(S.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:i,onBlur:o,className:n.lastName&&a.lastName?"text-input error":"text-input"}),n.lastName&&a.lastName&&r.a.createElement("div",{className:"input-feedback"},n.lastName)),r.a.createElement(k.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:n.email&&a.email?"error":"success"},r.a.createElement(S.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:i,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(k.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:n.password&&a.password?"error":"success"},r.a.createElement(S.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:i,onBlur:o,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(k.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},r.a.createElement(S.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:i,onBlur:o,className:n.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&a.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(k.a.Item,D,r.a.createElement(N.a,{onClick:s,type:"primary",disabled:l},"Submit"))))}))},T=a(988);var V=function(e){return r.a.createElement(T.a,{mode:e.mode},r.a.createElement(T.a.Item,{key:"mail"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement(T.a.Item,{key:"subscription"},r.a.createElement("a",{href:"/subscription"},"Subscription")))};var q=Object(o.g)((function(e){var t=Object(u.c)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?r.a.createElement(T.a,{mode:e.mode},r.a.createElement(T.a.Item,{key:"mail"},r.a.createElement("a",{href:"/login"},"Signin")),r.a.createElement(T.a.Item,{key:"app"},r.a.createElement("a",{href:"/register"},"Signup"))):r.a.createElement(T.a,{mode:e.mode},r.a.createElement(T.a.Item,{key:"Upload"},r.a.createElement("a",{href:"/video/upload"},"Upload")),r.a.createElement(T.a.Item,{key:"logout"},r.a.createElement("a",{onClick:function(){c.a.get("".concat("/api/users","/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),M=a(990);a(963);var U=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},r.a.createElement("div",{className:"menu__logo"},r.a.createElement("a",{href:"/"},"Logo")),r.a.createElement("div",{className:"menu__container"},r.a.createElement("div",{className:"menu_left"},r.a.createElement(V,{mode:"horizontal"})),r.a.createElement("div",{className:"menu_rigth"},r.a.createElement(q,{mode:"horizontal"})),r.a.createElement(N.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},r.a.createElement(I.a,{type:"align-right"})),r.a.createElement(M.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},r.a.createElement(V,{mode:"inline"}),r.a.createElement(q,{mode:"inline"}))))};var B=function(){return r.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},r.a.createElement("p",null," MADE BY MR MURAD CHOLUKOV  ",r.a.createElement(I.a,{type:"smile"})))},R=a(482),A=a(479),z=a.n(A),W=f.a.Title,Y=S.a.TextArea;var X=function(e){var t=Object(u.c)((function(e){return e.user})),a=Object(n.useState)(""),l=Object(p.a)(a,2),i=l[0],o=l[1],s=Object(n.useState)(""),m=Object(p.a)(s,2),d=m[0],f=m[1],E=Object(n.useState)(null),b=Object(p.a)(E,2),v=b[0],g=b[1],h=Object(n.useState)(null),y=Object(p.a)(h,2),w=y[0],x=y[1],O=Object(n.useState)(null),j=Object(p.a)(O,2),C=j[0],_=j[1],F=Object(n.useState)(""),L=Object(p.a)(F,2),D=L[0],P=L[1],T=function(a){if(a.preventDefault(),t.userData&&!t.userData.isAuth)return alert("Please Log in First");var n={writer:t.userData._id,title:i,description:d,videoURL:v,thumbURL:w,duration:C};c.a.post("/api/video/uploadVideo",n).then((function(t){t.data.success?(alert("video Uploaded Successfully"),e.history.push("/")):alert("Failed to upload video")}))};return r.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},r.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},r.a.createElement(W,{level:2}," Upload Video")),r.a.createElement(k.a,{onSubmit:T},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(R.a,{onDrop:function(e){var t=new FormData;t.append("file",e[0]),console.log(e[0]);var a={header:{"content-type":"multipart/form-data"},onUploadProgress:function(e){var t=Math.round(100*e.loaded/e.total-20);P(t),console.log(t)}};c.a.post("/api/video/uploadfiles",t,a).then((function(e){console.log(e.data),P("100"),_(e.data.duration),g(e.data.fileUrl),x(e.data.thumbUrl)}))},multiple:!1,maxSize:8e8},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},t()),r.a.createElement("input",a()),r.a.createElement(I.a,{type:"plus",style:{fontSize:"3rem"}}))})),null!==w&&r.a.createElement("img",{src:"".concat(z.a),style:{height:"200px",objectFit:"contain"},alt:"Video Uploaded"})),r.a.createElement("br",null),D?r.a.createElement("progress",{max:"100",value:D}):null,r.a.createElement("br",null),r.a.createElement("label",null,"Title"),r.a.createElement(S.a,{onChange:function(e){o(e.currentTarget.value)},value:i}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Description"),r.a.createElement(Y,{onChange:function(e){f(e.currentTarget.value)},value:d}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{type:"primary",size:"large",onClick:T},"Submit")))};a(964);var H=function(e){var t=e.writer,a=null===t||void 0===t?void 0:t._id,l=Object(n.useState)([]),i=Object(p.a)(l,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){c.a.post("/api/video/sideVideo",{value:a}).then((function(e){e.data.success?(s(e.data.videos),console.log(e.data.videos)):alert("Failed to load sideVideos")}))}),[t]),r.a.createElement("div",{className:"sideVideo"},o.map((function(e){return r.a.createElement("a",{href:"/video/".concat(e._id)},r.a.createElement("img",{src:e.thumbLink,alt:"thumblink"}))})))};var J=function(e){var t=e.userTo,a=e.userFrom,l=Object(n.useState)(0),i=Object(p.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(0),u=Object(p.a)(m,2),d=u[0],f=u[1],E={userTo:t,userFrom:a};return Object(n.useEffect)((function(){c.a.post("/api/subscribe/subscribeNumber",E).then((function(e){e.data.success?s(e.data.subscribeNumber):alert("Failed to Subscribe")})),c.a.post("/api/subscribe/subscribed",E).then((function(e){e.data.success?f(e.data.subscribed):alert("Failed to get subscibed information")}))}),[]),r.a.createElement("div",{className:"subscriber",style:{margintTop:"10px"}},r.a.createElement("button",{onClick:function(){var e={userTo:t,userFrom:a};d?c.a.post("/api/subscribe/unsubscribe",e).then((function(e){e.data.success?(s(o-1),f(!d)):alert("Falied to Unsubscribe")})):c.a.post("/api/subscribe/subscribe",e).then((function(e){e.data.success?(s(o+1),f(!d)):alert("Falied to Subscribe")}))},style:{backgroundColor:"".concat(d?"gray":"red"),color:"white"}}," ",r.a.createElement("span",null,o)," ",d?"Subscribed":"Subscribe"))},K=a(983),$=a(171);var G=function(e){var t=Object(n.useState)(0),a=Object(p.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(0),s=Object(p.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)(null),f=Object(p.a)(d,2),E=f[0],b=f[1],v=Object(n.useState)(null),g=Object(p.a)(v,2),h=g[0],y=g[1],w={};return w=e.video?{videoId:e.videoId,userId:e.userId}:{commentId:e.commentId,userId:e.userId},Object(n.useEffect)((function(){c.a.post("/api/like/getLikes",w).then((function(t){console.log("getLikes",t.data),t.data.success?(i(t.data.likes.length),t.data.likes.map((function(t){t.userId===e.userId&&b("liked")}))):alert("Failed to get likes")})),c.a.post("/api/like/getDislikes",w).then((function(t){console.log("getDislike",t.data),t.data.success?(u(t.data.dislikes.length),t.data.dislikes.map((function(t){t.userId===e.userId&&y("disliked")}))):alert("Failed to get dislikes")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:"comment-basic-like"},r.a.createElement($.a,{title:"Like"},r.a.createElement(I.a,{type:"like",theme:"liked"===E?"filled":"outlined",onClick:function(){null===E?c.a.post("/api/like/upLike",w).then((function(e){e.data.success?(i(l+1),b("liked"),null!==h&&(y(null),u(m-1))):alert("Failed to increase the like")})):c.a.post("/api/like/unLike",w).then((function(e){e.data.success?(i(l-1),b(null)):alert("Failed to decrease the like")}))}})),r.a.createElement("span",{style:{paddingLeft:"8px",cursor:"auto"}},l)),"\xa0\xa0",r.a.createElement("span",{key:"comment-basic-dislike"},r.a.createElement($.a,{title:"Dislike"},r.a.createElement(I.a,{type:"dislike",theme:"disliked"===h?"filled":"outlined",onClick:function(){null!==h?c.a.post("/api/like/unDisLike",w).then((function(e){e.data.success?(u(m-1),y(null)):alert("Failed to decrease dislike")})):c.a.post("/api/like/upDisLike",w).then((function(e){e.data.success?(u(m+1),y("disliked"),null!==E&&(b(null),i(l-1))):alert("Failed to increase dislike")}))}})),r.a.createElement("span",{style:{paddingLeft:"8px",cursor:"auto"}},m)))},Q=a(984);var Z=function(e){var t=Object(u.c)((function(e){return e.user})),a=Object(n.useState)(""),l=Object(p.a)(a,2),i=l[0],o=l[1],s=Object(n.useState)(!1),m=Object(p.a)(s,2),d=m[0],f=m[1],E=function(a){a.preventDefault();var n={writer:t.userData._id,postId:e.postId,responseTo:e.comment._id,content:i};c.a.post("/api/comment/saveComment",n).then((function(t){t.data.success?(o(""),f(!d),e.refreshFunction(t.data.result)):alert("Failed to save Comment")}))},b=[r.a.createElement(G,{comment:!0,commentId:e.comment._id,userId:localStorage.getItem("userId")}),r.a.createElement("span",{onClick:function(){f(!d)},key:"comment-basic-reply-to"},"Reply to"," ")];return r.a.createElement("div",null,r.a.createElement(K.a,{actions:b,author:e.comment.writer.name,avatar:r.a.createElement(v.a,{src:e.comment.writer.image,alt:"image"}),content:r.a.createElement("p",null,e.comment.content)}),d&&r.a.createElement("form",{style:{display:"flex"},onSubmit:E},r.a.createElement("input",{style:{width:"100%",borderRadius:"5px"},onChange:function(e){o(e.currentTarget.value)},value:i,placeholder:"write some comments"}),r.a.createElement("br",null),r.a.createElement(Q.a,{style:{width:"20%",height:"52px"},onClick:E},"Submit")))};var ee=function e(t){var a,l=Object(n.useState)(0),i=Object(p.a)(l,2),o=i[0],s=i[1],c=Object(n.useState)(!1),m=Object(p.a)(c,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=0;t.CommentLists.map((function(a){a.responseTo===t.parentCommentId&&e++})),s(e)}),[t.CommentLists,t.parentCommentId]),r.a.createElement("div",null,o>0&&r.a.createElement("p",{style:{fontSize:"14px",margin:0,color:"gray"},onClick:function(){d(!u)}},"View ",o," more comment(s)"),u&&(a=t.parentCommentId,t.CommentLists.map((function(n,l){return r.a.createElement(r.a.Fragment,null,n.responseTo===a&&r.a.createElement("div",{style:{width:"80%",marginLeft:"40px"}},r.a.createElement(Z,{comment:n,postId:t.postId,refreshFunction:t.refreshFunction}),r.a.createElement(e,{CommentLists:t.CommentLists,parentCommentId:n._id,postId:t.postId,refreshFunction:t.refreshFunction})))}))))};var te=function(e){var t=Object(u.c)((function(e){return e.user})),a=Object(n.useState)(""),l=Object(p.a)(a,2),i=l[0],o=l[1],s=function(a){a.preventDefault();var n={content:i,writer:t.userData._id,postId:e.postId};c.a.post("/api/comment/saveComment",n).then((function(t){t.data.success?(o(""),e.refreshFunction(t.data.result)):alert("Failed to save Comment")}))};return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null," replies"),r.a.createElement("hr",null),console.log(e.CommentLists),e.CommentLists&&e.CommentLists.map((function(t,a){return!t.responseTo&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{comment:t,postId:e.postId,refreshFunction:e.refreshFunction}),r.a.createElement(ee,{CommentLists:e.CommentLists,postId:e.postId,parentCommentId:t._id,refreshFunction:e.refreshFunction}))})),r.a.createElement("form",{style:{display:"flex"},onSubmit:s},r.a.createElement("input",{style:{width:"100%",borderRadius:"5px"},onChange:function(e){o(e.currentTarget.value)},value:i,placeholder:"write some comments"}),r.a.createElement("br",null),r.a.createElement(Q.a,{style:{width:"20%",height:"52px"},onClick:s},"Submit")))};var ae=function(e){var t,a,l=e.match.params.videoId,i=Object(n.useState)([]),o=Object(p.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)([]),d=Object(p.a)(u,2),f=d[0],E=d[1],b={videoId:l};return Object(n.useEffect)((function(){console.log(l),c.a.post("/api/video/getVideo",b).then((function(e){e.data.success?m(e.data.video):alert("Failed to get video info")})),c.a.post("/api/comment/getComments",b).then((function(e){e.data.success?(console.log("response.data.comments",e.data.comments),E(e.data.comments)):alert("Failed to get video Info")}))}),[]),r.a.createElement("div",{className:"detailedVideoPage",style:{display:"flex"}},r.a.createElement("div",{className:"detailedVideoPage__video",style:{display:"flex",flex:"0.8"}},r.a.createElement("div",{className:"video",style:{display:"flex",flexDirection:"column"}},r.a.createElement("video",{id:"video",src:s.fileLink,controls:!0,height:"400px",width:"100%"}),r.a.createElement("div",{className:"detailedVideoPage__videoInfo",style:{display:"flex",padding:"10px",justifyContent:"space-between",backgroundColor:"yellow"}},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,s.title),r.a.createElement("p",null,s.description),r.a.createElement("p",null,r.a.createElement("b",null,null===(t=s.writer)||void 0===t?void 0:t.name))),r.a.createElement("div",{className:"right",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement(G,{style:{display:"flex"},video:!0,videoId:l,userId:localStorage.getItem("userId")})),r.a.createElement(J,{userTo:null===(a=s.writer)||void 0===a?void 0:a._id,userFrom:localStorage.getItem("userId")}))),r.a.createElement(te,{CommentLists:f,postId:s._id,refreshFunction:function(e){E(f.concat(e))}}))),r.a.createElement("div",{className:"detailedVideoPage__side",style:{display:"flex",flex:"0.2",flexDirection:"column"}},r.a.createElement(H,{writer:s.writer})))},ne=f.a.Title,re=E.a.Meta;var le=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],i={userFrom:localStorage.getItem("userId")};Object(n.useEffect)((function(){c.a.post("/api/video/getSubscriptionVideos",i).then((function(e){e.data.success?l(e.data.videos):alert("Failed to get subscription videos")}))}),[]);var o=a.map((function(e,t){return console.log(e),r.a.createElement(b.a,{lg:12,md:12,xs:24},r.a.createElement("div",{style:{position:"relative"}}),r.a.createElement("br",null),r.a.createElement(re,{avatar:r.a.createElement(v.a,{src:e.writer.image}),title:e.title}),r.a.createElement("span",null,e.writer.name," "),r.a.createElement("div",null,e.description," "),r.a.createElement("br",null),r.a.createElement("div",{className:"video__container",style:{backgroundColor:"yellow"}},r.a.createElement("a",{href:"/video/".concat(e._id)},r.a.createElement("img",{src:e.thumbLink,height:"400px",width:"100%",alt:""}))),r.a.createElement("span",{style:{marginLeft:"3rem"}}," ",e.views),"-"," ",r.a.createElement("span",null," ",y()(e.createdAt).format("MMM Do YY")," "),r.a.createElement("br",null))}));return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement(ne,{level:2}," Subscribed Videos "),r.a.createElement("hr",null),r.a.createElement(g.a,{gutter:16},o))};var ie=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(U,null),r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:d(x,null)}),r.a.createElement(o.a,{exact:!0,path:"/login",component:d(F,!1)}),r.a.createElement(o.a,{exact:!0,path:"/register",component:d(P,!1)}),r.a.createElement(o.a,{exact:!0,path:"/video/upload",component:d(X,!0)}),r.a.createElement(o.a,{exact:!0,path:"/video/:videoId",component:d(ae,null)}),r.a.createElement(o.a,{exact:!0,path:"/subscription",component:d(le,null)}))),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(120),se=a(122),ce=a(174),me=Object(se.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(ce.a)({},e,{register:t.payload});case"login_user":return Object(ce.a)({},e,{loginSucces:t.payload});case"auth_user":return Object(ce.a)({},e,{userData:t.payload});case"logout_user":return Object(ce.a)({},e);default:return e}}}),ue=a(480),de=a.n(ue),pe=a(481),fe=Object(se.a)(de.a,pe.a)(se.d);i.a.render(r.a.createElement(u.a,{store:fe(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(oe.a,null,r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[488,1,2]]]);
//# sourceMappingURL=main.ed87a37b.chunk.js.map