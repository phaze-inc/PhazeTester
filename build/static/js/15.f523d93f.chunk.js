(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{676:function(e,t,n){},690:function(e,t,n){"use strict";n.r(t);var a=n(50),o=n(51),r=n(53),s=n(52),i=n(54),c=n(0),u=n.n(c),l=(n(676),n(211)),p=n(232),d=n.n(p),h=n(190),m=n(24),g=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).Prev=function(){n.setState(function(e){return{pageIndex:e.pageIndex-1,prev:1!==e.pageIndex,next:!0}})},n.Next=function(){var e=Math.ceil(n.props.brandInfo.length/n.props.itemsPerPage)-1;n.setState(function(t){return{pageIndex:t.pageIndex+1,prev:!0,next:t.pageIndex!==e-1}})},n.TouchStart=function(e){n.touchStartPos=e.touches[0].clientX,n.touchPos=e.touches[0].clientX},n.TouchMove=function(e){n.touchPos=e.touches[0].clientX},n.TouchEnd=function(){n.touchPos-n.touchStartPos<-100&&n.state.pageIndex<Math.ceil(n.props.brandInfo.length/n.props.itemsPerPage)-1?n.Next():n.touchPos-n.touchStartPos>100&&n.state.pageIndex>0&&n.Prev()},n.JumpTo=function(){var e=Math.round(Number(document.getElementById("Shop-Jump-Content").querySelector("input").value));e=Math.max(e,1);var t=Math.ceil(n.props.brandInfo.length/n.props.itemsPerPage);e=Math.min(e,t),n.setState({pageIndex:e-1,openJumpBox:!1,prev:1!==e,next:e!==t})},n.ClickedCard=function(e){var t=e.target.closest("div.Card");t&&n.props.select(t.dataset.value)},n.featured=["amazonca","amazonus","starbucksca","starbucksus","keg","walmart","bestbuy","aircanada","americanairlines","cineplex","milestones","montanas","sephora"],n.state={pageIndex:0,prev:!1,next:n.props.brandInfo.length>n.props.itemsPerPage,openJumpBox:!1},n.touchStartPos=0,n.touchPos=0,n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){m.a.has(document.body)?m.a.get(document.body).scrollTo(0,0,500):window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){var e=Math.ceil(this.props.brandInfo.length/this.props.itemsPerPage)-1;this.state.pageIndex>e?this.setState({pageIndex:e,next:!1}):this.state.pageIndex===e&&this.state.next?this.setState({next:!1}):this.state.pageIndex<e&&!this.state.next&&this.setState({next:!0})}},{key:"render",value:function(){var e=this,t=this.props.brandInfo.filter(function(t){return e.featured.includes(t.code)}).map(function(e,t){return u.a.createElement(l.a,{key:t,type:0,name:e.name,country:e.country,urlpath:e.code})}),n={centerMode:!0,centerPadding:this.props.itemsPerPage<5?"25%":"10%",dots:!1,arrows:!1,speed:500,slidesToShow:this.props.itemsPerPage<5?1:3,swipeToSlide:!0},a=this.state.prev?u.a.createElement("i",{className:"Pagination Left fas fa-arrow-circle-left",onClick:this.Prev}):null,o=this.state.next?u.a.createElement("i",{className:"Pagination Right fas fa-arrow-circle-right",onClick:this.Next}):null,r=this.props.brandInfo.slice(this.state.pageIndex*this.props.itemsPerPage,this.state.pageIndex*this.props.itemsPerPage+this.props.itemsPerPage).map(function(e,t){return u.a.createElement(l.a,{key:t,type:1,name:e.name,country:e.country,urlpath:e.code})}),s=u.a.createElement("div",{id:"Shop-Jump-Content"},"Go To Page",u.a.createElement("input",{type:"number",min:"1",autoFocus:!0,placeholder:"Page Number"}),u.a.createElement("br",null),u.a.createElement("button",{className:"button-1",onClick:this.JumpTo},"Confirm"));return u.a.createElement("div",{id:"Shop-Grid"},u.a.createElement("div",{id:"Shop-Grid-Featured"},u.a.createElement("p",{className:"Title"},"Signatured"),u.a.createElement("div",{className:"Content",onClick:function(t){return e.ClickedCard(t)}},u.a.createElement(d.a,n,t))),u.a.createElement("div",{id:"Shop-Grid-Brands",onTouchStart:function(t){return e.TouchStart(t)},onTouchMove:function(t){return e.TouchMove(t)},onTouchEnd:this.TouchEnd},u.a.createElement("p",{className:"Title"},"All Brands ",u.a.createElement("span",null,"(",this.props.brandInfo.length,")")),u.a.createElement("div",{className:"Content",onClick:function(t){return e.ClickedCard(t)}},u.a.createElement("div",null,r.slice(0,r.length/2)),u.a.createElement("div",null,r.slice(r.length/2))),u.a.createElement("p",{className:"Notice"},"Swipe or Click Navigator to View More"),a,o,u.a.createElement("p",{id:"Grid-Jump",onClick:function(){return e.setState({openJumpBox:!0})}},u.a.createElement("i",null,"Page"),u.a.createElement("span",null,this.state.pageIndex+1))),u.a.createElement(h.a,{open:this.state.openJumpBox,type:"input",content:s,buttonText:"Cancel",close:function(){return e.setState({openJumpBox:!1})}}))}}]),t}(u.a.Component);t.default=g}}]);
//# sourceMappingURL=15.f523d93f.chunk.js.map