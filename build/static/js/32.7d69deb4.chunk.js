(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{183:function(e,a,t){"use strict";var n=t(9),l=t(10),c=t(12),r=t(11),s=t(13),i=t(0),o=t.n(i),u=(t(184),t(186)),m=t.n(u),p=t(187),E=t.n(p),d=t(188),b=t.n(d),h=t(189),f=t.n(h),C=t(120),v=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){switch(this.props.type){case"Bitcoin":return o.a.createElement("div",{className:"CryptoCard Bitcoin"},o.a.createElement("div",null,o.a.createElement("img",{src:m.a,alt:""}),o.a.createElement("p",null,"bitcoin")),o.a.createElement("div",null,o.a.createElement("p",null,"Your balance:"),o.a.createElement("p",null,C.d[this.props.type]," ",this.props.balance)));case"Ethereum":return o.a.createElement("div",{className:"CryptoCard Ethereum"},o.a.createElement("div",null,o.a.createElement("img",{src:E.a,alt:""}),o.a.createElement("p",null,"ethereum")),o.a.createElement("div",null,o.a.createElement("p",null,"Your balance:"),o.a.createElement("p",null,C.d[this.props.type]," ",this.props.balance)));case"Litecoin":return o.a.createElement("div",{className:"CryptoCard Litecoin"},o.a.createElement("div",null,o.a.createElement("img",{src:b.a,alt:""}),o.a.createElement("p",null,"litecoin")),o.a.createElement("div",null,o.a.createElement("p",null,"Your balance:"),o.a.createElement("p",null,C.d[this.props.type]," ",this.props.balance)));case"BitcoinCash":return o.a.createElement("div",{className:"CryptoCard BitcoinCash"},o.a.createElement("div",null,o.a.createElement("img",{src:f.a,alt:""}),o.a.createElement("p",null,"Bitcoin",o.a.createElement("span",null,"Cash"))),o.a.createElement("div",null,o.a.createElement("p",null,"Your balance:"),o.a.createElement("p",null,C.d[this.props.type]," ",this.props.balance)));default:return null}}}]),a}(o.a.Component);a.a=v},184:function(e,a,t){},186:function(e,a,t){e.exports=t.p+"static/media/Bitcoin.a552edcd.png"},187:function(e,a,t){e.exports=t.p+"static/media/Ethereum.a9b80ba0.png"},188:function(e,a,t){e.exports=t.p+"static/media/Litecoin.97fb2b98.png"},189:function(e,a,t){e.exports=t.p+"static/media/BitcoinCash.f6f2de36.png"},647:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t(10),c=t(12),r=t(11),s=t(13),i=t(0),o=t.n(i),u=(t(648),t(14)),m=t.n(u),p=t(83),E=t(183),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).SelectWallet=function(e){var a=e.target.closest("div.Half-Card");a&&("BitcoinCash"===a.dataset.value||t.props.history.push({pathname:"/dashboard/walletdetail",state:a.dataset.value}))},t.state={BTCbalance:0,BCHbalance:0,ETHbalance:0,LTCbalance:0,selected:null},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo({top:0,left:0,behavior:"smooth"}),Object(p.b)("users/list_balance/crypto/ALL").then(function(a){e.setState({BTCbalance:a.result.btc_balance,BCHbalance:a.result.bch_balance,ETHbalance:a.result.eth_balance,LTCbalance:a.result.ltc_balance})}).catch(function(){return e.props.history.push("/")})}},{key:"render",value:function(){var e=this;return this.props.kycVerified?o.a.createElement("div",{id:"Wallet"},o.a.createElement("p",{className:"Title"},"Crypto Wallets"),o.a.createElement("div",{id:"Wallet-Content",onClick:function(a){return e.SelectWallet(a)}},o.a.createElement("div",{className:"Half-Card","data-value":"Bitcoin"},o.a.createElement(E.a,{type:"Bitcoin"}),o.a.createElement("p",{className:"Line"})),o.a.createElement("p",{className:"Balance"},o.a.createElement("span",null,"Balance"),o.a.createElement("span",null,"BTC ",this.state.BTCbalance)),o.a.createElement("div",{className:"Half-Card","data-value":"Ethereum"},o.a.createElement(E.a,{type:"Ethereum"}),o.a.createElement("p",{className:"Line"})),o.a.createElement("p",{className:"Balance"},o.a.createElement("span",null,"Balance"),o.a.createElement("span",null,"ETH ",this.state.ETHbalance)),o.a.createElement("div",{className:"Half-Card","data-value":"Litecoin"},o.a.createElement(E.a,{type:"Litecoin"}),o.a.createElement("p",{className:"Line"})),o.a.createElement("p",{className:"Balance"},o.a.createElement("span",null,"Balance"),o.a.createElement("span",null,"LTC ",this.state.LTCbalance)),o.a.createElement("div",{className:"Half-Card","data-value":"BitcoinCash"},o.a.createElement(E.a,{type:"BitcoinCash"}),o.a.createElement("p",{className:"Line"})),o.a.createElement("p",{className:"Balance"},o.a.createElement("span",null,"Balance"),o.a.createElement("span",null,"BCH ",this.state.BCHbalance)))):o.a.createElement("div",{id:"Wallet"},o.a.createElement("div",{className:"Error"},o.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.goBack()}},o.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," BACK"),o.a.createElement("img",{src:m.a,alt:""}),o.a.createElement("p",{className:"Title"},"Verification Required"),o.a.createElement("p",null,"Visit your account to verify your identity and to activate your wallet."),o.a.createElement("button",{type:"button",onClick:function(){return e.props.history.goBack()},className:"button-2 Goback"},o.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),o.a.createElement("button",{className:"button-1",onClick:function(){return e.props.history.push("/dashboard/account")}},"Go to account",o.a.createElement("i",{className:"fas fa-arrow-right"}))))}}]),a}(o.a.Component);a.default=d},648:function(e,a,t){}}]);
//# sourceMappingURL=32.7d69deb4.chunk.js.map