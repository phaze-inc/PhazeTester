(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{496:function(e,t,a){},640:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(10),o=a(12),c=a(11),l=a(13),r=a(0),i=a.n(r),u=(a(496),a(91)),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).CopyCode=function(){try{var e=document.createElement("textarea");e.value=a.state.info.code,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),a.setState({copyCode:!0})}catch(t){console.log(t)}},a.CopyPIN=function(){try{var e=document.createElement("textarea");e.value=a.state.info.pin,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),a.setState({copyPIN:!0})}catch(t){console.log(t)}},a.state={info:null,type:0,copyCode:!1,copyPIN:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(this.props.location.state){var e=0;this.props.location.state.code&&(e=1),this.props.location.state.pin&&(e=2),this.setState({info:this.props.location.state,type:e})}else this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this;if(!this.props.location.state||!this.state.info)return null;var t=null;switch(this.state.type){case 0:t=i.a.createElement("div",{className:"LinkType"},i.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.push("/dashboard")}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," SHOP"),i.a.createElement("button",{onClick:function(){return e.props.history.push("/dashboard")},className:"button-2 Goback"},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),i.a.createElement("button",{className:"button-1",onClick:function(){return window.open(e.state.info.link,"_blank")}},"view gift card",i.a.createElement("i",{className:"fas fa-arrow-right"})),i.a.createElement("button",{className:"button-2"},"email me my gift card",i.a.createElement("i",{className:"fas fa-directions"})));break;case 1:t=i.a.createElement("div",{className:"CodeType"},i.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.push("/dashboard")}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," SHOP"),i.a.createElement("p",{className:"Tooltip"},"GIFT CARD CODE"),i.a.createElement("p",{className:"Copyable"},this.state.info.code,this.state.copyCode?i.a.createElement("i",{className:"fas fa-check"}):i.a.createElement("i",{onClick:this.CopyCode,className:"far fa-copy"})),i.a.createElement("button",{onClick:function(){return e.props.history.push("/dashboard")},className:"button-2 Goback"},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),i.a.createElement("button",{className:"button-1"},"autofill gift card code",i.a.createElement("i",{className:"fas fa-arrow-right"})),i.a.createElement("button",{className:"button-2"},"email me my gift card",i.a.createElement("i",{className:"fas fa-directions"})));break;case 2:t=i.a.createElement("div",{className:"PINType"},i.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.push("/dashboard")}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," SHOP"),i.a.createElement("p",{className:"Tooltip"},"GIFT CARD CODE"),i.a.createElement("p",{className:"Copyable"},this.state.info.code,this.state.copyCode?i.a.createElement("i",{className:"fas fa-check"}):i.a.createElement("i",{onClick:this.CopyCode,className:"far fa-copy"})),i.a.createElement("p",{className:"Tooltip"},"PIN NUMBER"),i.a.createElement("p",{className:"Copyable PIN"},this.state.info.pin,this.state.copyPIN?i.a.createElement("i",{className:"fas fa-check"}):i.a.createElement("i",{onClick:this.CopyPIN,className:"far fa-copy"})),i.a.createElement("button",{onClick:function(){return e.props.history.push("/dashboard")},className:"button-2 Goback"},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),i.a.createElement("button",{className:"button-1"},"autofill gift card code",i.a.createElement("i",{className:"fas fa-arrow-right"})),i.a.createElement("button",{className:"button-2"},"email me my gift card",i.a.createElement("i",{className:"fas fa-directions"})));break;default:t=null}return i.a.createElement("div",{id:"Result"},i.a.createElement("p",{className:"Title"},this.state.info.brandname),i.a.createElement("div",{className:"Card"},i.a.createElement(u.a,{urlpath:this.state.info.brandcode})),i.a.createElement("p",{className:"Amount"},"AMOUNT",i.a.createElement("span",null,"$",Number(this.state.info.amount).toFixed(2)),i.a.createElement("small",null,this.state.info.currency)),t)}}]),t}(i.a.Component);t.default=m},91:function(e,t,a){"use strict";var n=a(9),s=a(10),o=a(12),c=a(11),l=a(13),r=a(0),i=a.n(r),u=(a(92),function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(o.a)(this,Object(c.a)(t).call(this,e))).GetURL=function(){a(94)("./"+s.props.urlpath+".png").then(function(e){return s.setState({urlpath:s.props.urlpath,url:e.default})}).catch(s.GetPlaceHolder)},s.GetPlaceHolder=function(){a.e(1).then(a.t.bind(null,86,7)).then(function(e){return s.setState({urlpath:s.props.urlpath,url:e.default})}).catch(function(){})},s.state={urlpath:null,url:null},s}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.GetURL()}},{key:"componentDidUpdate",value:function(){this.props.urlpath!==this.state.urlpath&&this.GetURL()}},{key:"render",value:function(){return i.a.createElement("img",{"data-value":this.props.urlpath,className:"GiftCard-Simple",src:this.state.url,alt:""})}}]),t}(i.a.Component));t.a=u},92:function(e,t,a){},94:function(e,t,a){var n={"./aircanada.png":[119,9],"./amazonca.png":[120,10],"./amazonus.png":[121,11],"./americanairlines.png":[122,12],"./bestbuy.png":[123,13],"./blank.png":[86,1],"./cineplex.png":[124,14],"./keg.png":[125,15],"./milestones.png":[126,16],"./montanas.png":[127,17],"./sephora.png":[128,18],"./starbucksca.png":[129,19],"./starbucksus.png":[130,20],"./walmart.png":[131,21]};function s(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return Object.keys(n)},s.id=94,e.exports=s}}]);
//# sourceMappingURL=27.9414ce88.chunk.js.map