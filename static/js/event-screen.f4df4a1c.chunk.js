(this["webpackJsonpminiapp-example"]=this["webpackJsonpminiapp-example"]||[]).push([[0],{302:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=({children:e,skeleton:t,intersectionOptions:a})=>{var s=Object(l.useRef)(null),c=function(e,t){var[a,n]=Object(l.useState)();return Object(l.useEffect)(()=>{if(e.current&&!a){var l=new IntersectionObserver(([e])=>{n(e.isIntersecting)},t);return l.observe(e.current),()=>{l.disconnect()}}},[e,t,a]),a}(s,a),[r,i]=Object(l.useState)(!1);return Object(l.useEffect)(()=>{c||i(!0)},[c]),n.a.createElement("div",{ref:s},c?e:r&&t)}},303:function(e,t,a){"use strict";var l=a(0),n=a.n(l),s=a(311),c=a.n(s);t.a=({children:e})=>n.a.createElement("h2",{className:c.a.title},e)},304:function(e,t,a){"use strict";var l=a(0),n=a.n(l),s=a(312),c=a.n(s);t.a=({children:e,className:t})=>n.a.createElement("div",{className:[c.a.block,t].filter(Boolean).join(" ")},e)},308:function(e,t,a){e.exports={modal:"styles_modal__2Q8g_",carousel:"styles_carousel__3JHc0",image:"styles_image__3O5qH",close:"styles_close__4LZBs",counter:"styles_counter__3PRwA"}},309:function(e,t,a){e.exports={container:"styles_container__3ZZwU",thumbnail:"styles_thumbnail__20t1x",image:"styles_image__QgQS0"}},310:function(e,t,a){e.exports={short:"styles_short__3k1iO",hidden:"styles_hidden__1LiUD",button:"styles_button__D0dDq"}},311:function(e,t,a){e.exports={title:"styles_title__2X6Eu"}},312:function(e,t,a){e.exports={block:"styles_block__1VDKZ"}},313:function(e,t,a){e.exports={cover:"styles_cover__13-3l",image:"styles_image__CjVbW",fade:"styles_fade__3F1Tn",overview:"styles_overview__1GrfL",title:"styles_title__3Zqkm",argument:"styles_argument__2fOy2",tags:"styles_tags__2NPR2"}},314:function(e,t,a){e.exports={static:"styles_static__2-03C",sticky:"styles_sticky__1Rl75","sticky-visible_yes":"styles_sticky-visible_yes__2Dqcw",slideUp:"styles_slideUp__39hv4","sticky-visible_no":"styles_sticky-visible_no__pKDDZ",slideDown:"styles_slideDown__2oDJ0",button:"styles_button__1odxN"}},315:function(e,t,a){e.exports={modal:"styles_modal__3Zspv",close:"styles_close__Yequy","close-button":"styles_close-button__1pQas","metro-containter":"styles_metro-containter__13P1B",station:"styles_station__3UP2f","metro-point":"styles_metro-point__1HHJ4"}},316:function(e,t,a){e.exports={map:"styles_map__1AUAZ"}},317:function(e,t,a){e.exports={title:"styles_title__1_HWs",address:"styles_address__Of4nL"}},318:function(e,t,a){e.exports={wrapper:"styles_wrapper__1GA7u",city:"styles_city__18Nw2",schedule:"styles_schedule__2bK7D",description:"styles_description__1TgUA",placeholder:"styles_placeholder__2Dhd8"}},330:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(3),c=a(38),r=a(47),i=a(65),o=a(308),m=a.n(o);var u=e=>{var[t,a]=Object(l.useState)(e.startIndex||0),s=Object(l.useRef)(null);return Object(l.useLayoutEffect)(()=>{var t;e.startIndex&&(s.current.scrollLeft=(t=e.startIndex,(window.innerWidth+20)*t))},[e.startIndex]),Object(l.useEffect)(()=>{var e=s.current,t=new IntersectionObserver(e=>{var t=e.reduce((e,t)=>t.intersectionRatio>e.intersectionRatio?t:e);if(t.intersectionRatio>0){var l=t.target,n=Array.prototype.indexOf.call(l.parentElement.children,l);a(n)}},{root:s.current,threshold:.5});for(var l of Array.from(e.children))t.observe(l);return()=>{t.disconnect()}},[e.items,e.startIndex]),Object(r.createPortal)(n.a.createElement("div",{className:m.a.modal},n.a.createElement("div",{className:m.a.counter},t+1," \u0438\u0437 ",e.items.length),n.a.createElement("button",{className:m.a.close,onClick:e.onBackClick},"\u041d\u0430\u0437\u0430\u0434"),n.a.createElement("div",{className:m.a.carousel,ref:s},e.items.map((e,t)=>n.a.createElement("div",{className:m.a.image,key:e.large2x.url},n.a.createElement(i.a,{src:e.large,src2x:e.large2x,bgColor:e.bgColor,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f ".concat(t+1)}))))),document.body)},d=a(309),_=a.n(d),b=e=>{var[t,a]=Object(l.useState)(-1),s=Object(l.useMemo)(()=>e.items.filter(Boolean),[e.items]),c=Object(l.useCallback)(e=>{var t=e.currentTarget,l=Array.prototype.indexOf.call(t.parentElement.children,t);a(l)},[]),r=Object(l.useCallback)(()=>{a(-1)},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:_.a.container},s.map((e,t)=>n.a.createElement("div",{className:_.a.thumbnail,key:e.thumbnail2x.url,onClick:c},n.a.createElement(i.a,{className:_.a.image,src:e.thumbnail,src2x:e.thumbnail2x,bgColor:e.bgColor,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f ".concat(t+1)})))),-1!==t&&n.a.createElement(u,{items:s,onBackClick:r,startIndex:t}))},v=a(59),E=a(310),f=a.n(E),y=e=>{var t=Object(l.useRef)(null),a=Object(l.useRef)(null),[s,c]=Object(l.useState)(!1);Object(l.useEffect)(()=>{if(t.current&&a.current){var e=t.current.getBoundingClientRect(),l=a.current.getBoundingClientRect();e.height===l.height&&c(!0)}},[t,a,e.lines]);var r=Object(l.useCallback)(()=>c(!0),[c]);return n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("div",{ref:t,className:[e.className,f.a.short].filter(Boolean).join(" "),style:{WebkitLineClamp:e.lines}},e.children),n.a.createElement("div",{className:[e.className,!s&&f.a.hidden].filter(Boolean).join(" "),ref:a},e.children),!s&&n.a.createElement(v.a,{className:f.a.button,onClick:r},e.fullTextLabel))},p=a(71),k=a(110),O=a(157),g=(e,t,a)=>{var[n,s]=Object(l.useState)(()=>a(t)),c=Object(l.useCallback)(Object(O.a)(50,()=>{s(a(t))}),[s,e,t,a]);return Object(l.useEffect)(()=>{var{current:t}=e;return null===t||void 0===t||t.addEventListener("scroll",c),()=>{null===t||void 0===t||t.removeEventListener("scroll",c)}},[e,t,c]),Object(l.useEffect)(()=>{c()},[c,e,t]),n},h=a(37),j=a(303),N=a(304),x=a(313),C=a.n(x),w=({event:e,imageRef:t})=>{var{title:a,argument:l,image:s,tags:c,contentRating:r}=e,o=[...(c||[]).map(e=>e.name),r].filter(Boolean).join("  \u2022  ");return n.a.createElement("div",{className:C.a.cover,ref:t},s&&n.a.createElement(i.a,{className:C.a.image,src:s.touchPrimary,bgColor:s.bgColor}),n.a.createElement("div",{className:C.a.fade}),n.a.createElement("div",{className:C.a.overview},n.a.createElement("h1",{className:C.a.title},a),n.a.createElement("div",{className:C.a.argument},l),n.a.createElement("div",{className:C.a.tags},o)))},R=a(158),D=a(155),B=a(25),L=a(314),S=a.n(L),P={Yes:S.a["sticky-visible_yes"],No:S.a["sticky-visible_no"]},I=({ticket:e,disabled:t,onClick:a})=>n.a.createElement(R.a,{className:S.a.button,disabled:t,onClick:a},"\u0411\u0438\u043b\u0435\u0442\u044b ",n.a.createElement(D.a,{ticket:e})),A=e=>{var t,a;return Number(null===(t=e.current)||void 0===t||null===(a=t.getBoundingClientRect())||void 0===a?void 0:a.top)<0},U=({event:e})=>{var t=e.tickets&&e.tickets[0],a=Object(l.useRef)(null),c=Object(s.b)(),r=Object(s.c)(e=>e.order.ui.isCreating),i=Object(p.b)(),o=Object(l.useRef)(document),m=Object(h.a)()?o:i,[u,d]=Object(l.useState)(""),_=Object(l.useCallback)(()=>{c(Object(B.a)(e))},[c,e]),b=g(m,a,A);return Object(l.useEffect)(()=>{a.current&&t&&((b||u===P.Yes)&&d(b?P.Yes:P.No))},[a,b,t,u]),t?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:S.a.static,ref:a},n.a.createElement(I,{ticket:t,disabled:r,onClick:_})),n.a.createElement("div",{className:[S.a.sticky,u].join(" ")},n.a.createElement(I,{ticket:t,disabled:r,onClick:_}))):null};function Z(e){var t=new URLSearchParams({l:"map"});for(var[a,l]of Object.entries(e))t.set(a,String(l));return"//static-maps.yandex.ru/1.x/?".concat(t)}var F=a(315),T=a.n(F),q=Object(l.lazy)(()=>Promise.all([a.e(11),a.e(8)]).then(a.bind(null,329))),H=e=>n.a.createElement("div",{className:T.a.station},e.colors.map(e=>n.a.createElement("div",{style:{backgroundColor:e},key:e,className:T.a["metro-point"]})),e.name),J=e=>{var{coordinates:t,metro:a,address:s}=e,c=Object(l.useMemo)(()=>[t.longitude,t.latitude],[t]);return Object(r.createPortal)(n.a.createElement("div",{className:T.a.modal},n.a.createElement("div",{className:T.a.close},n.a.createElement("button",{className:T.a["close-button"],onClick:e.onBackClick},"\u041d\u0430\u0437\u0430\u0434")),n.a.createElement(l.Suspense,{fallback:null},n.a.createElement(q,{point:c})),(a||s)&&n.a.createElement("div",{className:T.a["metro-containter"]},a&&a.map(e=>n.a.createElement(H,Object.assign({key:e.name},e))),s)),document.body)},Y=a(316),Q=a.n(Y),W=e=>{var t={url:Z({size:[650,176],z:16,pt:[e.coordinates.longitude,e.coordinates.latitude,"pm2rdl"]}),width:650,height:176},[a,s]=Object(l.useState)(!1),c=Object(l.useCallback)(()=>{s(!0),document.body.style.overflow="hidden"},[]),r=Object(l.useCallback)(()=>{s(!1),document.body.style.overflow="auto"},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{onClick:c},n.a.createElement(i.a,{className:Q.a.map,src:t})),a&&n.a.createElement(J,Object.assign({},e,{onBackClick:r})))},z=a(317),K=a.n(z),M=({schedule:e})=>{var{oneOfPlaces:t,placePreview:a}=e;return t&&t.coordinates?n.a.createElement(n.a.Fragment,null,n.a.createElement(W,{coordinates:t.coordinates,metro:t.metro,address:t.address}),n.a.createElement("div",{className:K.a.title},t.title),n.a.createElement("div",{className:K.a.address},t.address)):n.a.createElement("div",{className:K.a.title},a)},G=a(24),V=a(302),X=({children:e,skeleton:t,fetchData:a})=>(Object(l.useEffect)(()=>{a&&a()},[a]),n.a.createElement(l.Suspense,{fallback:t||null},e)),$=({children:e,skeleton:t,fetchData:a})=>n.a.createElement(V.a,{skeleton:t},n.a.createElement(X,{children:e,skeleton:t,fetchData:a})),ee=a(159),te=Object(G.a)(()=>a.e(4).then(a.bind(null,332))),ae=Object(l.memo)(()=>n.a.createElement($,{skeleton:n.a.createElement(ee.a,null)},n.a.createElement(te,{skeleton:n.a.createElement(ee.a,null)}))),le=a(318),ne=a.n(le),se=e=>{var t;return Object(h.a)()?window.scrollY<=0:!e.current||(null===(t=e.current)||void 0===t?void 0:t.scrollTop)<=0};t.default=({id:e,skeleton:t})=>{var a=Object(l.useRef)(null),r=Object(p.b)(),i=Object(l.useRef)(document),o=Object(h.a)()?i:r,m=Object(s.c)(t=>t.event.data[e])||{},u=m.event||{},d=m.schedule||{},_=!u.id,{images:v,description:E,type:f,tickets:O}=u,{preview:x}=d,C=O&&O[0],R=g(o,r,se);return Object(k.a)(),_?t:n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{mods:R?"clear":"",backward:R?"white":"black",hasLogo:!1,hasMenu:!1}),n.a.createElement(w,{event:u,imageRef:a}),n.a.createElement("div",{className:ne.a.wrapper},n.a.createElement(U,{event:u}),f&&n.a.createElement("div",{className:ne.a.city},f.name," \u0432 \u041c\u043e\u0441\u043a\u0432\u0435"),x&&n.a.createElement("div",{className:ne.a.schedule},x.text),n.a.createElement(N.a,null,n.a.createElement(M,{schedule:d})),v&&v.length>0&&n.a.createElement(N.a,null,n.a.createElement(j.a,null,"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f"),n.a.createElement(b,{items:v})),E&&n.a.createElement(N.a,null,n.a.createElement(j.a,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),n.a.createElement(y,{lines:5,className:ne.a.description,fullTextLabel:"\u041f\u043e\u043b\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},E)),n.a.createElement(ae,null),C&&n.a.createElement("div",{className:ne.a.placeholder})))}}}]);
//# sourceMappingURL=event-screen.f4df4a1c.chunk.js.map