(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u});var a=n(248),r=n.n(a),i="https://webstaging.phaze.io/api/";function o(e){return r()({method:"GET",url:i+e,json:!0,withCredentials:!0})}function c(e,t){return r()({method:"POST",url:i+e,body:t,json:!0,withCredentials:!0})}function s(){return r()({method:"GET",url:i+"users/check_auth",json:!0,withCredentials:!0})}function u(e){return r()({url:e,json:!0})}},190:function(e,t,n){"use strict";var a=n(50),r=n(51),i=n(53),o=n(52),c=n(54),s=n(0),u=n.n(s),l=n(32),d=n.n(l),m=(n(281),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=null;if(this.props.open){"search"!==this.props.type&&document.activeElement.blur();var t="MessageScreen "+this.props.type;e=u.a.createElement("div",{className:t,onTouchMove:function(e){return e.stopPropagation()},onMouseMove:function(e){return e.stopPropagation()}},u.a.createElement("div",{className:"Content"},this.props.content),u.a.createElement("button",{className:"button-2",onClick:this.props.close},this.props.buttonText))}return d.a.createPortal(e,document.body)}}]),t}(u.a.Component));t.a=m},203:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o});var a={Canada:"CA","United States":"US"},r={CA:"CAD",US:"USD"},i={CAD:"Canada",USD:"United States"},o={"Phaze Credit":"Credit",Bitcoin:"BTC",Litecoin:"LTC",Ethereum:"ETH"}},247:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(618),n(57)),o=n.n(i);t.a=function(e){return r.a.createElement("div",{className:"CustomLoader"},r.a.createElement("span",{style:{color:e.color}},e.message),r.a.createElement(o.a,{type:e.type,color:e.color,height:"25",width:"25"}))}},255:function(e,t){},256:function(e,t){},264:function(e,t){},265:function(e,t){},271:function(e,t){},281:function(e,t,n){},368:function(e,t,n){"use strict";var a=n(50),r=n(51),i=n(53),o=n(52),c=n(54),s=n(0),u=n.n(s),l=n(696),d=n(620),m=n.n(d),f=(n(621),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){switch(this.props.type){case 0:return u.a.createElement("div",{id:"Menu"},u.a.createElement("div",{id:"Menu-Left"},u.a.createElement(l.a,{exact:!0,to:"/dashboard/wallet",activeClassName:"Active"},u.a.createElement("i",{className:"fas fa-coins"}),u.a.createElement("span",null,"Wallet"))),u.a.createElement("div",{id:"Menu-Center"},u.a.createElement(l.a,{exact:!0,to:"/dashboard",activeClassName:"Active"},u.a.createElement("img",{src:m.a,alt:""}),u.a.createElement("span",null,"Shop"))),u.a.createElement("div",{id:"Menu-Right"},u.a.createElement(l.a,{exact:!0,to:"/dashboard/account",activeClassName:"Active"},u.a.createElement("i",{className:"fas fa-user-alt"}),u.a.createElement("span",null,"Account")),this.props.kyc?null:u.a.createElement("i",{className:"fas fa-exclamation-circle KYC"})));case 1:return u.a.createElement("div",{id:"Menu",className:"Shopping"},u.a.createElement("div",{id:"Menu-Left"},u.a.createElement("p",{disabled:!0},u.a.createElement("i",{className:"fas fa-coins"}),u.a.createElement("span",null,"Wallet"))),u.a.createElement("div",{id:"Menu-Center",onClick:this.props.onClick},u.a.createElement("p",null,"BUY")),u.a.createElement("div",{id:"Menu-Right"},u.a.createElement("p",null,u.a.createElement("i",{className:"fas fa-user-alt"}),u.a.createElement("span",null,"Account"))));default:return null}}}]),t}(u.a.Component));t.a=f},616:function(e,t,n){},618:function(e,t,n){},620:function(e,t,n){e.exports=n.p+"static/media/Logo.4f8d6399.png"},621:function(e,t,n){},695:function(e,t,n){"use strict";n.r(t);var a=n(366),r=n.n(a),i=n(367),o=n(50),c=n(51),s=n(53),u=n(52),l=n(54),d=n(0),m=n.n(d),f=(n(616),n(694)),h=n(683),p=n(22),b=n.n(p),y=n(23),v=n(188),E=n(203),C=n(190),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).Click=function(){n.props.onClick(),n.setState({disable:!0,time:n.props.time},function(){return n.timer=setInterval(n.Tick,1e3)})},n.Tick=function(){1!==n.state.time?n.setState(function(e){return{time:e.time-1}}):(n.setState({time:-1,disable:!1}),clearInterval(n.timer))},n.state={disable:!1,time:-1},n.timer=null,n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return this.state.disable?m.a.createElement("button",{className:"disabled",disabled:!0},this.props.disabledText," in ",this.state.time," sec"):m.a.createElement("button",{className:this.props.className,onClick:this.Click},this.props.text)}}]),t}(m.a.Component),k=n(247),w=n(368),j=n(18),O=b()({loader:function(){return n.e(9).then(n.bind(null,697))},loading:y.a,delay:1e3,render:function(e,t){var n=e.default;return m.a.createElement(n,t)}}),I=b()({loader:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,687))},loading:y.a,delay:1e3,render:function(e,t){var n=e.default;return m.a.createElement(n,t)}}),S=b()({loader:function(){return Promise.all([n.e(0),n.e(34),n.e(11)]).then(n.bind(null,698))},loading:y.a,delay:1e3,render:function(e,t){var n=e.default;return m.a.createElement(n,t)}}),x=b()({loader:function(){return n.e(12).then(n.bind(null,699))},loading:y.a,delay:1e3,render:function(e,t){var n=e.default;return m.a.createElement(n,t)}}),N=b()({loader:function(){return n.e(13).then(n.bind(null,693))},loading:y.a,delay:1e3,render:function(e,t){var n=e.default;return m.a.createElement(n,t)}}),A=b()({loader:function(){return n.e(14).then(n.bind(null,688))},loading:y.a,delay:1e3,render:function(e,t){var n=e.default;return m.a.createElement(n,t)}}),L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).IsMobile=function(){var e=window.innerWidth<576;e!==n.state.isMobile&&n.setState({isMobile:e,screenWidth:window.innerWidth})},n.UserCheck=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Object(v.a)().then(function(e){return e.type?"EMAIL_VERIFIED"===e.type?n.setState({username:e.username,emailVerified:!0},n.GetPromo):"VERIFIED_CA"===e.type?n.setState({username:e.username,emailVerified:!0,kycVerified:!0,kycCountry:"Canada"},n.GetPromo):"VERIFIED_US"===e.type&&n.setState({username:e.username,emailVerified:!0,kycVerified:!0,kycCountry:"United States"},n.GetPromo):n.setState({showContent:!0,username:e.username}),null}).catch(n.Logout);case 1:case"end":return e.stop()}},e,this)})),n.SendEmailVerification=function(){Object(v.b)("users/send_verify_email").then(function(){}).catch(n.Logout)},n.GetPromo=function(){Object(v.b)("users/list_coupons").then(function(e){return n.setState({promoInfo:function(e){var t=e.result[0];return t?{amount:t.amount/100,code:t.code,rate:Number(t.discount)}:{amount:0,code:null,rate:0}}(e)},n.GetBrands),null}).catch(n.Logout)},n.GetBrands=function(){Object(v.b)("merchant/list_brands/country/ALL").then(function(e){return n.setState({brandInfo:function(e){var t=e.map(function(e){var t=E.c[E.a[e.country]];if(-1!==e.denominations.indexOf("-")){var n=Number(e.denominations.split("-").shift())/100,a=Number(e.denominations.split("-").pop())/100;return{index:e.index,code:e.internal_id,name:e.brand_name,country:t,min:n,max:a}}var r=e.denominations.split(" ").map(function(e){return Number(e)/100});return{index:e.index,code:e.internal_id,name:e.brand_name,country:t,array:r}});return t.sort(function(e,t){return e.index-t.index}),t}(e),showContent:!0}),null}).catch(n.Logout)},n.Logout=function(){Object(v.b)("public/logout").then(function(){return n.props.history.push("/"),null}).catch(function(){})},n.SelectBrand=function(e){var t=n.state.brandInfo.filter(function(t){return t.code===e})[0];n.setState({selectedBrand:t},function(){return n.props.history.push("/dashboard/payment")})},n.GotoPay=function(e){n.setState({paymentInfo:{name:n.state.selectedBrand,value:e.value,useCredit:e.useCredit,subtotal:e.subtotal}},function(){return n.props.history.push("/dashboard/checkout")})},n.state={isMobile:window.innerWidth<768,screenWidth:window.innerWidth,username:null,emailVerified:!1,kycVerified:!1,kycCountry:null,promoInfo:null,brandInfo:null,showContent:!1,menuAvailable:!0,selectedBrand:null,paymentInfo:null},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.UserCheck,500),this.responsiveChange=Object(j.a)(this.IsMobile,500),window.onresize=this.responsiveChange}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.responsiveChange)}},{key:"componentDidUpdate",value:function(){var e=window.location.href;"/"===e[e.length-1]&&(e=e.slice(0,-1));var t=e.split("/").pop().toLowerCase(),n="payment"!==t&&"checkout"!==t&&"identity"!==t;n&&!this.state.menuAvailable?this.setState({menuAvailable:!0}):!n&&this.state.menuAvailable&&this.setState({menuAvailable:!1})}},{key:"render",value:function(){var e=this;if(!this.state.emailVerified&&this.state.showContent){var t=m.a.createElement("div",{className:"VerifyEmailNotice"},m.a.createElement("p",{className:"Title"},m.a.createElement("i",{className:"fas fa-exclamation-circle"})," Active Your Account"),m.a.createElement("p",{className:"Description"},"You need to active your account via clicking the link sent to you when you signed up",m.a.createElement("br",null),m.a.createElement("br",null),"You can also click the button below to resend verification link to ",m.a.createElement("span",null,this.state.username)),m.a.createElement(g,{className:"button-1",text:"Resend",disabledText:"You can resend",onClick:this.SendEmailVerification,time:10}));return m.a.createElement(C.a,{open:!0,type:"info",buttonText:"Log out",content:t,close:this.Logout})}return this.state.showContent?m.a.createElement("div",{id:"Dashboard"},m.a.createElement(f.a,null,m.a.createElement(h.a,{exact:!0,path:"/dashboard",render:function(t){return m.a.createElement(O,Object.assign({},t,{brandInfo:e.state.brandInfo,select:e.SelectBrand,CountryFilter:e.ChangeCountryFilter,CategoryFilter:e.ChangeCategoryFilter,itemsPerPage:e.state.isMobile?4:8}))}}),m.a.createElement(h.a,{exact:!0,path:"/dashboard/map",render:function(t){return m.a.createElement(O,Object.assign({},t,{brandInfo:e.state.brandInfo,select:e.SelectBrand,CountryFilter:e.ChangeCountryFilter,CategoryFilter:e.ChangeCategoryFilter}))}}),m.a.createElement(h.a,{exact:!0,path:"/dashboard/payment",render:function(t){return m.a.createElement(I,Object.assign({},t,{brandInfo:e.state.selectedBrand,GotoPay:e.GotoPay,maxCreditRate:e.state.promoInfo.rate,availableCredit:e.state.promoInfo.amount}))}}),m.a.createElement(h.a,{exact:!0,path:"/dashboard/checkout",render:function(t){return m.a.createElement(S,Object.assign({},t,{paymentInfo:e.state.paymentInfo,screenWidth:e.state.screenWidth,kycVerified:e.state.kycVerified,promoInfo:e.state.promoInfo,updateAfterPay:e.GetPromo}))}}),m.a.createElement(h.a,{exact:!0,path:"/dashboard/account",render:function(t){return m.a.createElement(x,Object.assign({},t,{username:e.state.username,kycVerified:e.state.kycVerified,kycCountry:e.state.kycCountry,promoInfo:e.state.promoInfo,Logout:e.Logout}))}}),m.a.createElement(h.a,{exact:!0,path:"/dashboard/identity",render:function(e){return m.a.createElement(N,e)}}),m.a.createElement(h.a,{exact:!0,path:"/dashboard/orders",render:function(e){return m.a.createElement(A,e)}})),m.a.createElement(w.a,{type:this.state.menuAvailable?0:-1,kyc:this.state.kycVerified})):m.a.createElement(k.a,{type:"Oval",message:"Loading Data",color:"var(--color-red-dark)"})}}]),t}(m.a.Component);t.default=L}}]);
//# sourceMappingURL=7.13c08094.chunk.js.map