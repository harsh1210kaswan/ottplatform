(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(30),r=c.n(a),i=(c(38),c(7)),o=c.n(i),l=c(12),j=c(4),u=c(89),b=c(90),d=c(91),O=(c(40),c(8)),p=c(32),x=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return Object(p.a)({},e)}},h=c(0),m={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},v=Object(s.createContext)(m),f=function(e){var t=e.children,c=Object(s.useReducer)(x,m),n=Object(j.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a.user))}),[a.user]),Object(h.jsx)(v.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:r},children:t})},g=function(e){return{type:"LOGIN_SUCCESS",payload:e}},N=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useContext)(v).dispatch;return window.onscroll=function(){return n(0!==window.pageYOffset),function(){return window.onscroll=null}},Object(h.jsx)("div",{className:c?"navbar scrolled":"navbar",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""}),Object(h.jsx)(O.b,{to:"/",className:"link",children:Object(h.jsx)("span",{children:"Homepage"})}),Object(h.jsx)(O.b,{to:"/series",className:"link",children:Object(h.jsx)("span",{className:"navbarmainLinks",children:"Series"})}),Object(h.jsx)(O.b,{to:"/movies",className:"link",children:Object(h.jsx)("span",{className:"navbarmainLinks",children:"Movies"})}),Object(h.jsx)("span",{children:"New and Popular"}),Object(h.jsx)("span",{children:"My List"})]}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)(u.a,{className:"icon"}),Object(h.jsx)("span",{children:"KID"}),Object(h.jsx)(b.a,{className:"icon"}),Object(h.jsx)("img",{src:"https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsx)(d.a,{className:"icon"}),Object(h.jsxs)("div",{className:"options",children:[Object(h.jsx)("span",{children:"Settings"}),Object(h.jsx)("span",{onClick:function(){return a({type:"LOGOUT"})},children:"Logout"})]})]})]})]})})},y=c(92),w=c(93),S=c(13),k=c.n(S);c(70);function C(e){var t=e.type,c=e.setGenre,n=Object(s.useState)({}),a=Object(j.a)(n,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/movies/random?type=".concat(t),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:c=e.sent,i(c.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),console.log(r),Object(h.jsxs)("div",{className:"featured",children:[t&&Object(h.jsxs)("div",{className:"category",children:[Object(h.jsx)("span",{children:"movie"===t?"Movies":"Series"}),Object(h.jsxs)("select",{name:"genre",id:"genre",onChange:function(e){return c(e.target.value)},children:[Object(h.jsx)("option",{children:"Genre"}),Object(h.jsx)("option",{value:"adventure",children:"Adventure"}),Object(h.jsx)("option",{value:"comedy",children:"Comedy"}),Object(h.jsx)("option",{value:"crime",children:"Crime"}),Object(h.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(h.jsx)("option",{value:"historical",children:"Historical"}),Object(h.jsx)("option",{value:"horror",children:"Horror"}),Object(h.jsx)("option",{value:"romance",children:"Romance"}),Object(h.jsx)("option",{value:"sci-fi",children:"Sci-fi"}),Object(h.jsx)("option",{value:"thriller",children:"Thriller"}),Object(h.jsx)("option",{value:"western",children:"Western"}),Object(h.jsx)("option",{value:"animation",children:"Animation"}),Object(h.jsx)("option",{value:"drama",children:"Drama"}),Object(h.jsx)("option",{value:"documentary",children:"Documentary"})]})]}),Object(h.jsx)("img",{src:r.img,alt:""}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("img",{src:r.imgTitle,alt:""}),Object(h.jsx)("span",{className:"desc",children:r.desc}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsxs)("button",{className:"play",children:[Object(h.jsx)(y.a,{}),Object(h.jsx)("span",{children:"Play"})]}),Object(h.jsxs)("button",{className:"more",children:[Object(h.jsx)(w.a,{}),Object(h.jsx)("span",{children:"Info"})]})]})]})]})}c(71);var I=c(97),_=c(98),L=(c(72),c(94)),T=c(95),E=c(96);function G(e){var t=e.index,c=e.item,n=Object(s.useState)(!1),a=Object(j.a)(n,2),r=a[0],i=a[1],u=Object(s.useState)({}),b=Object(j.a)(u,2),d=b[0],p=b[1],x=Object(s.useState)(null),m=Object(j.a)(x,2),v=m[0],f=m[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/movies/find/"+c,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:t=e.sent,f(t.data),p(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(h.jsx)(O.b,{to:"/Watch",state:{data:v},children:Object(h.jsxs)("div",{className:"listItem",style:{left:r&&225*t-50+2.5*t},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(h.jsx)("img",{src:d.imgSm,alt:""}),r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("video",{src:d.trailer,autoPlay:!0,loop:!0}),Object(h.jsxs)("div",{className:"itemInfo",children:[Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)(y.a,{className:"icon"}),Object(h.jsx)(L.a,{className:"icon"}),Object(h.jsx)(T.a,{className:"icon"}),Object(h.jsx)(E.a,{className:"icon"})]}),Object(h.jsxs)("div",{className:"itemInfoTop",children:[Object(h.jsx)("span",{children:d.duration}),Object(h.jsxs)("span",{className:"limit",children:["+",d.limit]}),Object(h.jsx)("span",{children:d.year})]}),Object(h.jsx)("div",{className:"desc",children:d.desc}),Object(h.jsx)("div",{className:"genre",children:d.genre})]})]})]})})}c(73);function F(e){var t=e.list,c=Object(s.useState)(!1),n=Object(j.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(0),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(s.useState)(window.innerWidth/230),d=Object(j.a)(b,2),O=d[0],p=(d[1],Object(s.useRef)()),x=function(e){r(!0);var t=p.current.getBoundingClientRect().x-50;"left"===e&&l>0&&(u(l-1),p.current.style.transform="translateX(".concat(230+t,"px)")),"right"===e&&l<10-O&&(u(l+1),p.current.style.transform="translateX(".concat(-230+t,"px)"))};return Object(h.jsxs)("div",{className:"list",children:[Object(h.jsx)("span",{className:"listTitle",children:t.title}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(I.a,{className:"sliderArrow left",onClick:function(){return x("left")},style:{display:!a&&"none"}}),Object(h.jsx)("div",{className:"container",ref:p,children:t.content.map((function(e,t){return Object(h.jsx)(G,{index:t,item:e})}))}),Object(h.jsx)(_.a,{className:"sliderArrow right",onClick:function(){return x("right")}})]})]})}var R=function(e){var t=e.type,c=Object(s.useState)([]),n=Object(j.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(null),u=Object(j.a)(i,2),b=u[0],d=u[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("lists".concat(t?"?type="+t:"").concat(b?"&genre="+b:""),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:c=e.sent,r(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t,b]),Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)(N,{}),Object(h.jsx)(C,{type:t,setGenre:d}),a.map((function(e){return Object(h.jsx)(F,{list:e})}))]})},A=c(3);c(74);function B(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],u=r[1],b=Object(s.useState)(""),d=Object(j.a)(b,2),O=d[0],p=d[1],x=Object(A.g)(),m=Object(s.useRef)(),v=Object(s.useRef)(),f=Object(s.useRef)(),g=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(v.current.value),p(f.current.value),e.prev=3,e.next=6,k.a.post("auth/register",{email:c,username:O,password:i});case 6:x("/login"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)("div",{className:"top",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""}),Object(h.jsx)("button",{className:"loginButton",children:"Sign In"})]})}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(h.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(h.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),c?Object(h.jsxs)("form",{className:"input",children:[Object(h.jsx)("input",{type:"username",placeholder:"Username",ref:f}),Object(h.jsx)("input",{type:"password",placeholder:"Password",ref:v}),Object(h.jsx)("button",{className:"registerButton",onClick:g,children:"Start"})]}):Object(h.jsxs)("div",{className:"input",children:[Object(h.jsx)("input",{type:"email",placeholder:"Email Address",ref:m}),Object(h.jsx)("button",{className:"registerButton",onClick:function(){n(m.current.value)},children:"Get Started"})]})]})]})}var P=c(99);c(75);function U(){var e=Object(A.f)(),t=e.state.data;return console.log(t),console.log(e),Object(h.jsxs)("div",{className:"watch",children:[Object(h.jsx)(O.b,{to:"/",children:Object(h.jsxs)("div",{className:"back",children:[Object(h.jsx)(P.a,{}),"Home"]})}),Object(h.jsx)("video",{className:"video",autoPlay:!0,progress:!0,controls:!0,src:null===t||void 0===t?void 0:t.video})]})}var J=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,k.a.post("auth/login",t);case 4:s=e.sent,c(g(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"LOGIN_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();c(76);function M(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1],l=Object(s.useContext)(v).dispatch;return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("div",{className:"top",children:Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""})})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsx)("input",{type:"Email",placeholder:"Email or phone number",onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("input",{type:"Password",placeholder:"Password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("button",{className:"loginButton",onClick:function(e){e.preventDefault(),J({email:c,password:i},l)},children:"Sign In"}),Object(h.jsxs)("span",{children:["New to Netflix? ",Object(h.jsx)("b",{children:"Sign up now."})]}),Object(h.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(h.jsx)("b",{children:"Learn more"}),"."]})]})})]})}var D=function(){var e=Object(s.useContext)(v).user;return Object(h.jsxs)(A.d,{children:[Object(h.jsx)(A.b,{exact:!0,path:"/",element:e?Object(h.jsx)(R,{}):Object(h.jsx)(A.a,{to:"/register"})}),Object(h.jsx)(A.b,{path:"/register",element:e?Object(h.jsx)(A.a,{to:"/"}):Object(h.jsx)(B,{})}),Object(h.jsx)(A.b,{path:"/login",element:e?Object(h.jsx)(A.a,{to:"/"}):Object(h.jsx)(M,{})}),e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A.b,{path:"/movies",element:Object(h.jsx)(R,{type:"movie"})}),Object(h.jsx)(A.b,{path:"/series",element:Object(h.jsx)(R,{type:"series"})}),Object(h.jsx)(A.b,{path:"/watch",element:Object(h.jsx)(U,{})})]})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(O.a,{children:Object(h.jsx)(D,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.5a0c9ee5.chunk.js.map