(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=(n(47),n(143)),u=n.n(l),s=(n(147),n(168),n(48)),c=n.n(s),m=n(170),d=n.n(m),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hovered:!1},n.handleInteraction=n.handleInteraction.bind(c()(c()(n))),n}r()(t,e);var n=t.prototype;return n.handleInteraction=function(){this.setState({hovered:!0})},n.renderHeadshot=function(){var e=this.props.memeber,t=this.state.hovered?"image":"peaky_image";return i.a.createElement(d.a,{sizes:e[t].childImageSharp.fluid,alt:e.name})},n.render=function(){var e=this.state.hovered?null:this.handleInteraction;return i.a.createElement("div",{onMouseOver:e,onClick:e},this.renderHeadshot())},t}(i.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("div",{key:"team_item_"+t},i.a.createElement(p,{memeber:e.node}))},n.renderList=function(){return this.props.data.edges.map(this.renderListItem)},n.render=function(){return i.a.createElement("section",null,i.a.createElement("h2",null,"Team"),i.a.createElement(u.a,{width:100},this.renderList()))},t}(i.a.Component),f=n(150),y=n.n(f),E=new y.a({linkify:!0}),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.event,t=e.name,n=e.description;return i.a.createElement("div",null,i.a.createElement("h2",null,t),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.render(n)}}))},t}(i.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("div",{key:"event_item_"+t},i.a.createElement(g,{event:e.node}))},n.renderList=function(){return this.props.data.edges.map(this.renderListItem)},n.render=function(){return i.a.createElement("section",null,i.a.createElement("h2",null,"Events"),i.a.createElement(u.a,null,this.renderList()))},t}(i.a.Component),w=new y.a({linkify:!0}).render("\nWe are always on the look out for new skaters to join our ranks!\n\nKeep an eye on our Facebook page for upcoming events and intakes [here](https://www.facebook.com/CrashTestBrummies) or get in touch with us at info@crashtestbrummies.co.uk.\n\nAlready a derby skater? No worries!! We have an open door policy for existing derby skaters both male & female – just turn up and get stuck in!\n"),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("section",null,i.a.createElement("h2",null,"Join us"),i.a.createElement(u.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:w}})))},t}(i.a.Component),k=[{question:"When/Where do you train?",answer:"Sunday evenings 6:30-9:30pm at Leasowes High School, Kent Rd, Halesowen, West Midlands, B62 8PJ"},{question:"How much does it cost?",answer:"Your first session is free. Following that, each session is £5."},{question:"I can't skate or haven't skated in years, can I play?",answer:"Fear not, we will teach you how to skate and put you through our ‘fresh meat’ programme to get you up to speed."},{question:"What equipment do I need?",answer:"We can provide you with the gear to get you started. It is not a good idea to splash out on your own gear before deciding roller derby is for you. Please let us know your size requirements in advance."}],I=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.renderFAQ=function(e,t){return i.a.createElement(i.a.Fragment,{key:"faq_"+t},i.a.createElement("dt",null,e.question),i.a.createElement("dd",null,e.answer))},n.render=function(){return i.a.createElement("section",null,i.a.createElement("h2",null,"FAQs"),i.a.createElement(u.a,null,i.a.createElement("dl",null,k.map(this.renderFAQ))))},t}(i.a.Component),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.instagram,t=e.thumbnails,n=e.url,a=t[0];return i.a.createElement("a",{href:n},i.a.createElement("img",{src:a.src,alt:"Visit the Crash test Brummies Instagram page"}))},t}(i.a.Component),L=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("div",{key:"insta_item_"+t},i.a.createElement(_,{instagram:e.node}))},n.renderList=function(){return this.props.data.edges.map(this.renderListItem)},n.render=function(){return i.a.createElement("section",null,i.a.createElement("h2",null,"Instagram"),i.a.createElement(u.a,{width:200,gap:20},this.renderList()))},t}(i.a.Component),C={table:{width:"100%",margin:"20px auto",tableLayout:"auto"},tr_played:{backgroundColor:"#efefef"},tr_not_played:{backgroundColor:"#FFEB3B"}},q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props.game,t=e.Date,n=e.Home_Team,a=e.Visitor_Team,r=e.Score,o=e.Score_2,l=r?C.tr_played:C.tr_not_played;return i.a.createElement("tr",{style:l},i.a.createElement("td",null,t),i.a.createElement("td",null,n),i.a.createElement("td",null,r),i.a.createElement("td",null,a),i.a.createElement("td",null,o))},t}(i.a.Component),S=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement(q,{key:"game_item_"+t,game:e.node})},n.renderList=function(){return this.props.data.edges.map(this.renderListItem)},n.render=function(){return i.a.createElement("section",null,i.a.createElement("h2",null,"Games"),i.a.createElement("table",{style:C.table},i.a.createElement("thead",null,i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Home"),i.a.createElement("th",null,"Score"),i.a.createElement("th",null,"Away"),i.a.createElement("th",null,"Score")),i.a.createElement("tbody",null,this.renderList())))},t}(i.a.Component),F=n(226),T=n.n(F),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.siteMetadata,t=e.title,n=e.canonical,a=e.description;return i.a.createElement("div",{style:{background:"black",color:"white",marginBottom:"1.45rem"}},i.a.createElement(T.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,t),i.a.createElement("link",{rel:"canonical",href:n}),i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{property:"og:type",content:"website"})),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},t)))},t}(i.a.Component),W=n(142),H=n.n(W),P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.siteMetadata,t=e.facebook,n=e.instagram,a=e.email;return i.a.createElement("section",null,i.a.createElement(u.a,null,i.a.createElement(H.a,{to:a},"Email"),i.a.createElement(H.a,{to:t},"Facebook"),i.a.createElement(H.a,{to:n},"Instagram")))},t}(i.a.Component),R=function(e){var t=e.site,n=e.children;return i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement(x,{data:t}),n,i.a.createElement(P,{data:t}))};n.d(t,"query",function(){return B});var A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allPlayersJson,n=e.allFacebookEvent,a=e.allInstaNode,r=e.site,o=e.allGamesNode;return i.a.createElement(R,{site:r},i.a.createElement("p",null,"The West Midlands' first men's Roller Derby team"),i.a.createElement("p",null,"A band of Brummie brothers brought together in February 2012. All skatin', no hatin'!"),i.a.createElement(h,{data:t}),i.a.createElement(v,{data:n}),i.a.createElement(b,null),i.a.createElement(I,null),i.a.createElement(S,{data:o}),i.a.createElement(L,{data:a}))},t}(i.a.Component),B=(t.default=A,"157114778")},161:function(e,t,n){var a;e.exports=(a=n(235))&&a.default||a},234:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(142),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(161),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var m=n(44);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},235:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(70),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-8feae70d0558fac08b3c.js.map