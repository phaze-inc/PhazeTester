(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(e,t,n){"use strict";var a=n(48),r=n(49),i=n(51),c=n(50),o=n(52),s=n(0),l=n.n(s),u=n(30),m=n.n(u),d=(n(264),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=null;if(this.props.open){document.activeElement.blur();var t="MessageScreen "+this.props.type;e=l.a.createElement("div",{className:t,onTouchMove:function(e){return e.stopPropagation()},onMouseMove:function(e){return e.stopPropagation()}},l.a.createElement("div",{className:"Content"},this.props.content),l.a.createElement("button",{className:"button-2",onClick:this.props.close},this.props.buttonText))}return m.a.createPortal(e,document.body)}}]),t}(l.a.Component));t.a=d},206:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s});var a=n(272),r=n.n(a),i="https://webstaging.phaze.io/api/";function c(e){return r()({method:"GET",url:i+e,json:!0,withCredentials:!0})}function o(e,t){return r()({method:"POST",url:i+e,body:t,json:!0,withCredentials:!0})}function s(){return r()({method:"GET",url:i+"users/check_auth",json:!0,withCredentials:!0})}},264:function(e,t,n){},266:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i});var a={Canada:"CA","United States":"US"},r={CA:"CAD",US:"USD"},i={CAD:"Canada",USD:"United States"}},287:function(e,t){},288:function(e,t){},306:function(e,t){},309:function(e,t){},326:function(e,t){},345:function(e,t,n){"use strict";var a=n(48),r=n(49),i=n(51),c=n(50),o=n(52),s=n(0),l=n.n(s),u=n(632),m=n(604),d=n.n(m),f=(n(605),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){switch(this.props.type){case 0:return l.a.createElement("div",{id:"Menu"},l.a.createElement("div",{id:"Menu-Left"},l.a.createElement(u.a,{exact:!0,to:"/dashboard/wallet",activeClassName:"Active"},l.a.createElement("i",{className:"fas fa-coins"}),l.a.createElement("span",null,"Wallet"))),l.a.createElement("div",{id:"Menu-Center"},l.a.createElement(u.a,{exact:!0,to:"/dashboard",activeClassName:"Active"},l.a.createElement("img",{src:d.a,alt:""}),l.a.createElement("span",null,"Shop"))),l.a.createElement("div",{id:"Menu-Right"},l.a.createElement(u.a,{exact:!0,to:"/dashboard/account",activeClassName:"Active"},l.a.createElement("i",{className:"fas fa-user-alt"}),l.a.createElement("span",null,"Account")),this.props.kyc?null:l.a.createElement("i",{className:"fas fa-exclamation-circle KYC"})));case 1:return l.a.createElement("div",{id:"Menu",className:"Shopping"},l.a.createElement("div",{id:"Menu-Left"},l.a.createElement("p",{disabled:!0},l.a.createElement("i",{className:"fas fa-coins"}),l.a.createElement("span",null,"Wallet"))),l.a.createElement("div",{id:"Menu-Center",onClick:this.props.onClick},l.a.createElement("p",null,l.a.createElement("img",{src:d.a,alt:""}),l.a.createElement("span",null,"BUY"))),l.a.createElement("div",{id:"Menu-Right"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-user-alt"}),l.a.createElement("span",null,"Account"))));default:return null}}}]),t}(l.a.Component));t.a=f},600:function(e,t,n){},602:function(e,t,n){},604:function(e,t,n){e.exports=n.p+"static/media/Logo.4f8d6399.png"},605:function(e,t,n){},630:function(e,t,n){"use strict";n.r(t);var a=n(596),r=n.n(a),i=n(599),c=n(48),o=n(49),s=n(51),l=n(50),u=n(52),m=n(0),d=n.n(m),f=(n(600),n(631)),p=n(623),h=n(27),b=n.n(h),E=n(28),v=n(206),y=n(266),C=n(197),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).Click=function(){n.props.onClick(),n.setState({disable:!0,time:n.props.time},function(){return n.timer=setInterval(n.Tick,1e3)})},n.Tick=function(){1!==n.state.time?n.setState(function(e){return{time:e.time-1}}):(n.setState({time:-1,disable:!1}),clearInterval(n.timer))},n.state={disable:!1,time:-1},n.timer=null,n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return this.state.disable?d.a.createElement("button",{className:"disabled",disabled:!0},this.props.disabledText," in ",this.state.time," sec"):d.a.createElement("button",{className:this.props.className,onClick:this.Click},this.props.text)}}]),t}(d.a.Component),g=(n(602),n(73)),j=n.n(g);var O=function(e){return d.a.createElement("div",{className:"CustomLoader"},d.a.createElement("span",{style:{color:e.color}},e.message),d.a.createElement(j.a,{type:e.type,color:e.color,height:"25",width:"25"}))},S=n(345),N=b()({loader:function(){return n.e(8).then(n.bind(null,634))},loading:E.a,delay:1e3,render:function(e,t){var n=e.default;return d.a.createElement(n,t)}}),x=b()({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,633))},loading:E.a,delay:1e3,render:function(e,t){var n=e.default;return d.a.createElement(n,t)}}),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).UserCheck=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Object(v.a)().then(function(e){return console.log(e),e.type?"EMAIL_VERIFIED"===e.type?n.setState({username:e.username,emailVerified:!0},n.GetPromo):"VERIFIED_CA"===e.type?n.setState({username:e.username,emailVerified:!0,kycVerified:!0,kycCountry:"Canada"},n.GetPromo):"VERIFIED_US"===e.type&&n.setState({username:e.username,emailVerified:!0,kycVerified:!0,kycCountry:"United States"},n.GetPromo):n.setState({showContent:!0,username:e.username}),null}).catch(n.Logout);case 1:case"end":return e.stop()}},e,this)})),n.SendEmailVerification=function(){Object(v.b)("users/send_verify_email").then(function(){}).catch(n.Logout)},n.GetPromo=function(){Object(v.b)("users/list_coupons").then(function(e){var t;return n.setState({promoInfo:(t=e,t)},n.GetBrands),null}).catch(n.Logout)},n.GetBrands=function(){Object(v.b)("merchant/list_brands/country/ALL").then(function(e){return n.setState({brandInfo:function(e){var t=e.map(function(e){var t=y.c[y.a[e.country]];if(-1!==e.denominations.indexOf("-")){var n=Number(e.denominations.split("-").shift())/100,a=Number(e.denominations.split("-").pop())/100;return{index:e.index,code:e.internal_id,name:e.brand_name,country:t,min:n,max:a}}var r=e.denominations.split(" ").map(function(e){return Number(e)/100});return{index:e.index,code:e.internal_id,name:e.brand_name,country:t,array:r}});return t.sort(function(e,t){return e.index-t.index}),t}(e),showContent:!0}),null}).catch(n.Logout)},n.Logout=function(){Object(v.b)("logout").then(function(){return n.props.history.push("/"),null}).catch(function(){})},n.SelectBrand=function(e){var t=n.state.brandInfo.filter(function(t){return t.code===e})[0];n.setState({selectedBrand:t,menuAvailable:!1},function(){return n.props.history.push("/dashboard/payment")})},n.GotoPay=function(e){console.log(e)},n.state={username:null,emailVerified:!1,kycVerified:!1,kycCountry:null,promoInfo:null,brandInfo:null,showContent:!1,menuAvailable:!0,selectedBrand:null},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.UserCheck,500)}},{key:"render",value:function(){var e=this;if(!this.state.emailVerified&&this.state.showContent){var t=d.a.createElement("div",{className:"VerifyEmailNotice"},d.a.createElement("p",{className:"Title"},d.a.createElement("i",{className:"fas fa-exclamation-circle"})," Active Your Account"),d.a.createElement("p",{className:"Description"},"You need to active your account via clicking the link sent to you when you signed up",d.a.createElement("br",null),d.a.createElement("br",null),"You can also click the button below to resend verification link to ",d.a.createElement("span",null,this.state.username)),d.a.createElement(k,{className:"button-1",text:"Resend",disabledText:"You can resend",onClick:this.SendEmailVerification,time:10}));return d.a.createElement(C.a,{open:!0,type:"info",buttonText:"Log out",content:t,close:this.Logout})}return this.state.showContent?d.a.createElement("div",{id:"Dashboard"},d.a.createElement(f.a,null,d.a.createElement(p.a,{exact:!0,path:"/dashboard",render:function(t){return d.a.createElement(N,Object.assign({},t,{brandInfo:e.state.brandInfo,select:e.SelectBrand}))}}),d.a.createElement(p.a,{exact:!0,path:"/dashboard/map",render:function(t){return d.a.createElement(N,Object.assign({},t,{brandInfo:e.state.brandInfo,select:e.SelectBrand}))}}),d.a.createElement(p.a,{exact:!0,path:"/dashboard/payment",render:function(t){return d.a.createElement(x,Object.assign({},t,{brandInfo:e.state.selectedBrand,GotoPay:e.GotoPay}))}})),d.a.createElement(S.a,{type:this.state.menuAvailable?0:-1,kyc:this.state.kycVerified})):d.a.createElement(O,{type:"Oval",message:"Loading Data",color:"var(--color-red-dark)"})}}]),t}(d.a.Component);t.default=w}}]);
//# sourceMappingURL=6.0fdf2172.chunk.js.map