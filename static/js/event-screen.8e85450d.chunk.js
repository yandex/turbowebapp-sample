(this["webpackJsonpminiapp-example"]=this["webpackJsonpminiapp-example"]||[]).push([[0],{306:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=({children:e,skeleton:t,intersectionOptions:a})=>{var c=Object(l.useRef)(null),s=function(e,t){var[a,n]=Object(l.useState)();return Object(l.useEffect)(()=>{if(e.current&&!a){var l=new IntersectionObserver(([e])=>{n(e.isIntersecting)},t);return l.observe(e.current),()=>{l.disconnect()}}},[e,t,a]),a}(c,a),[r,i]=Object(l.useState)(!1);return Object(l.useEffect)(()=>{s||i(!0)},[s]),n.a.createElement("div",{ref:c},s?e:r&&t)}},307:function(e,t,a){"use strict";var l=a(0),n=a.n(l),c=a(315),s=a.n(c);t.a=({children:e})=>n.a.createElement("h2",{className:s.a.title},e)},308:function(e,t,a){"use strict";var l=a(0),n=a.n(l),c=a(316),s=a.n(c);t.a=({children:e,className:t})=>n.a.createElement("div",{className:[s.a.block,t].filter(Boolean).join(" ")},e)},312:function(e,t,a){e.exports={modal:"styles_modal__2Q8g_",carousel:"styles_carousel__3JHc0",image:"styles_image__3O5qH",close:"styles_close__4LZBs",counter:"styles_counter__3PRwA"}},313:function(e,t,a){e.exports={container:"styles_container__3ZZwU",thumbnail:"styles_thumbnail__20t1x",image:"styles_image__QgQS0"}},314:function(e,t,a){e.exports={short:"styles_short__3k1iO",hidden:"styles_hidden__1LiUD",button:"styles_button__D0dDq"}},315:function(e,t,a){e.exports={title:"styles_title__2X6Eu"}},316:function(e,t,a){e.exports={block:"styles_block__1VDKZ"}},317:function(e,t,a){e.exports={cover:"styles_cover__13-3l",image:"styles_image__CjVbW",fade:"styles_fade__3F1Tn",overview:"styles_overview__1GrfL",title:"styles_title__3Zqkm",argument:"styles_argument__2fOy2",tags:"styles_tags__2NPR2"}},318:function(e,t,a){e.exports={container:"styles_container__1T1LA",title:"styles_title__5E4fn",price:"styles_price__31LNt",image:"styles_image__2FjaB",preview:"styles_preview__1Y7Wv"}},319:function(e,t,a){e.exports={container:"styles_container__23BU7",label:"styles_label__A0D9-",input:"styles_input__2Wcu3"}},320:function(e,t,a){e.exports={modal:"styles_modal__3ZOE-",content:"styles_content__2-xA9",visible:"styles_visible__mfrBL",hidden:"styles_hidden__3bzBj",title:"styles_title__pU2ia",event:"styles_event__2u5Bc",input:"styles_input__gGp1k",total:"styles_total__2Y-X-",button:"styles_button__2SSOt"}},321:function(e,t,a){e.exports={static:"styles_static__2-03C",sticky:"styles_sticky__1Rl75","sticky-visible_yes":"styles_sticky-visible_yes__2Dqcw",slideUp:"styles_slideUp__39hv4","sticky-visible_no":"styles_sticky-visible_no__pKDDZ",slideDown:"styles_slideDown__2oDJ0",button:"styles_button__1odxN"}},322:function(e,t,a){e.exports={modal:"styles_modal__3Zspv",close:"styles_close__Yequy","close-button":"styles_close-button__1pQas","metro-containter":"styles_metro-containter__13P1B",station:"styles_station__3UP2f","metro-point":"styles_metro-point__1HHJ4"}},323:function(e,t,a){e.exports={map:"styles_map__1AUAZ"}},324:function(e,t,a){e.exports={title:"styles_title__1_HWs",address:"styles_address__Of4nL"}},325:function(e,t,a){e.exports={wrapper:"styles_wrapper__1GA7u",city:"styles_city__18Nw2",schedule:"styles_schedule__2bK7D",description:"styles_description__1TgUA",placeholder:"styles_placeholder__2Dhd8"}},337:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(3),s=a(96),r=a(39),i=a(48),o=a(65),m=a(312),u=a.n(m);var d=e=>{var[t,a]=Object(l.useState)(e.startIndex||0),c=Object(l.useRef)(null);return Object(l.useLayoutEffect)(()=>{var t;e.startIndex&&(c.current.scrollLeft=(t=e.startIndex,(window.innerWidth+20)*t))},[e.startIndex]),Object(l.useEffect)(()=>{var e=c.current,t=new IntersectionObserver(e=>{var t=e.reduce((e,t)=>t.intersectionRatio>e.intersectionRatio?t:e);if(t.intersectionRatio>0){var l=t.target,n=Array.prototype.indexOf.call(l.parentElement.children,l);a(n)}},{root:c.current,threshold:.5});for(var l of Array.from(e.children))t.observe(l);return()=>{t.disconnect()}},[e.items,e.startIndex]),Object(i.createPortal)(n.a.createElement("div",{className:u.a.modal},n.a.createElement("div",{className:u.a.counter},t+1," \u0438\u0437 ",e.items.length),n.a.createElement("button",{className:u.a.close,onClick:e.onBackClick},"\u041d\u0430\u0437\u0430\u0434"),n.a.createElement("div",{className:u.a.carousel,ref:c},e.items.map((e,t)=>n.a.createElement("div",{className:u.a.image,key:e.large2x.url},n.a.createElement(o.a,{src:e.large,src2x:e.large2x,bgColor:e.bgColor,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f ".concat(t+1)}))))),document.body)},b=a(313),_=a.n(b),v=e=>{var[t,a]=Object(l.useState)(-1),c=Object(l.useMemo)(()=>e.items.filter(Boolean),[e.items]),s=Object(l.useCallback)(e=>{var t=e.currentTarget,l=Array.prototype.indexOf.call(t.parentElement.children,t);a(l)},[]),r=Object(l.useCallback)(()=>{a(-1)},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:_.a.container},c.map((e,t)=>n.a.createElement("div",{className:_.a.thumbnail,key:e.thumbnail2x.url,onClick:s},n.a.createElement(o.a,{className:_.a.image,src:e.thumbnail,src2x:e.thumbnail2x,bgColor:e.bgColor,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f ".concat(t+1)})))),-1!==t&&n.a.createElement(d,{items:c,onBackClick:r,startIndex:t}))},E=a(59),f=a(314),y=a.n(f),p=e=>{var t=Object(l.useRef)(null),a=Object(l.useRef)(null),[c,s]=Object(l.useState)(!1);Object(l.useEffect)(()=>{if(t.current&&a.current){var e=t.current.getBoundingClientRect(),l=a.current.getBoundingClientRect();e.height===l.height&&s(!0)}},[t,a,e.lines]);var r=Object(l.useCallback)(()=>s(!0),[s]);return n.a.createElement(n.a.Fragment,null,!c&&n.a.createElement("div",{ref:t,className:[e.className,y.a.short].filter(Boolean).join(" "),style:{WebkitLineClamp:e.lines}},e.children),n.a.createElement("div",{className:[e.className,!c&&y.a.hidden].filter(Boolean).join(" "),ref:a},e.children),!c&&n.a.createElement(E.a,{className:y.a.button,onClick:r},e.fullTextLabel))},O=a(71),j=a(113),h=a(161),g=(e,t,a)=>{var[n,c]=Object(l.useState)(()=>a(t)),s=Object(l.useCallback)(Object(h.a)(50,()=>{c(a(t))}),[c,e,t,a]);return Object(l.useEffect)(()=>{var{current:t}=e;return null===t||void 0===t||t.addEventListener("scroll",s),()=>{null===t||void 0===t||t.removeEventListener("scroll",s)}},[e,t,s]),Object(l.useEffect)(()=>{s()},[s,e,t]),n},k=a(38),N=a(307),C=a(308),x=a(317),w=a.n(x),R=({event:e,imageRef:t})=>{var{title:a,argument:l,image:c,tags:s,contentRating:r}=e,i=[...(s||[]).map(e=>e.name),r].filter(Boolean).join("  \u2022  ");return n.a.createElement("div",{className:w.a.cover,ref:t},c&&n.a.createElement(o.a,{className:w.a.image,src:c.touchPrimary,bgColor:c.bgColor}),n.a.createElement("div",{className:w.a.fade}),n.a.createElement("div",{className:w.a.overview},n.a.createElement("h1",{className:w.a.title},a),n.a.createElement("div",{className:w.a.argument},l),n.a.createElement("div",{className:w.a.tags},i)))},S=a(24),B=a(120),D=a(119),L=a(296),P=a(162),F=a(12),q=a(318),A=a.n(q),I=({className:e,event:t,ticket:a})=>{var{title:l,image:c}=t;return n.a.createElement("div",{className:[A.a.container,e].join(" ")},c&&c.touchPrimary?n.a.createElement(o.a,{className:A.a.image,alt:l,src:c.touchPrimary,bgColor:c.bgColor}):n.a.createElement("div",{className:A.a.preview}),n.a.createElement("div",{className:A.a.title},l),n.a.createElement("div",{className:A.a.price},n.a.createElement(D.a,{ticket:a,exact:!0})))},T=a(78),U=a(319),Z=a.n(U),H=e=>{var{className:t,label:a,type:c,name:s,value:r,onChange:i,onFocus:o,required:m}=e,u=Object(l.useCallback)(e=>{i(e.target.value)},[i]);return n.a.createElement("label",{className:[Z.a.container,t].join(" ")},n.a.createElement("div",{className:Z.a.label},a),n.a.createElement(T.a,{className:Z.a.input,type:c,name:s,value:r,onChange:u,onFocus:o,required:m}))},Y=a(320),W=a.n(Y),J=({event:e,ticket:t,visible:a,onClose:s})=>{var r,i=Object(c.b)(),o=Object(l.useRef)(null),m=Object(l.useRef)(null),[u,d]=Object(l.useState)(""),[b,_]=Object(l.useState)(""),[v,E]=Object(l.useState)(""),[f,y]=Object(l.useState)(""),[p,O]=Object(l.useState)(!1),j=Object(c.c)(F.e),h=Object(c.c)(F.f),g=Object(c.c)(P.d),k=Object(c.c)(F.l),N=Object(c.c)(P.b),C=Object(c.c)(S.k),x=Object(c.c)(S.g),w=[W.a.modal,a?W.a.visible:W.a.hidden].join(" ");Object(L.a)(o,e=>{a&&(e.preventDefault(),s())},["touchend"]);var R=Object(l.useCallback)(e=>{o.current&&a&&(o.current.contains(e.target)||e.preventDefault())},[a,o]),D=Object(l.useCallback)(t=>{t.preventDefault(),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),i(Object(S.a)(e,{name:u,phone:b,email:v,address:f}))},[i,e,u,v,b,f]),q=Object(l.useCallback)(()=>{!j||g||h||p||(O(!0),i(Object(F.b)()))},[i,j,g,h,p]);Object(l.useEffect)(()=>{a&&!g&&i(Object(P.a)())},[i,a,g]),Object(l.useEffect)(()=>{d(e=>e||(null===N||void 0===N?void 0:N.name)||k.name||""),_(e=>e||(null===N||void 0===N?void 0:N.phone)||""),E(e=>e||(null===N||void 0===N?void 0:N.email)||k.email||""),y(e=>e||(null===N||void 0===N?void 0:N.address)||"")},[a,k,N]),Object(l.useEffect)(()=>{a||document.activeElement instanceof HTMLElement&&document.activeElement.blur()},[a]);var A="\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435";return u?b?v?f?C&&(A="\u041e\u043f\u043b\u0430\u0442\u0430\u2026"):A="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438":A="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email":A="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d":A="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f",n.a.createElement("div",{className:w,onTouchStart:R},n.a.createElement("div",{ref:o,className:W.a.content},n.a.createElement("div",{className:W.a.title},"\u0417\u0430\u043a\u0430\u0437 \u0431\u0438\u043b\u0435\u0442\u043e\u0432 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439"),n.a.createElement(I,{className:W.a.event,event:e,ticket:t}),n.a.createElement("form",{ref:m,action:"",onSubmit:D},n.a.createElement(H,{className:W.a.input,label:"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",name:"full_name",value:u,onChange:d,onFocus:q,required:!0}),n.a.createElement(H,{className:W.a.input,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",type:"tel",value:b,onChange:_,required:!0}),n.a.createElement(H,{className:W.a.input,label:"Email \u0430\u0434\u0440\u0435\u0441",type:"email",value:v,onChange:E,onFocus:q,required:!0}),n.a.createElement(H,{className:W.a.input,label:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",type:"address",value:f,onChange:y,onFocus:q,required:!0}),n.a.createElement(B.a,{type:"submit",className:W.a.button,formInvalid:!(null===(r=m.current)||void 0===r?void 0:r.checkValidity()),disabled:C||x},A))))},M=a(321),z=a.n(M),Q={Yes:z.a["sticky-visible_yes"],No:z.a["sticky-visible_no"]},G=({ticket:e,disabled:t,onClick:a})=>n.a.createElement(B.a,{className:z.a.button,disabled:t,onClick:a},"\u0411\u0438\u043b\u0435\u0442\u044b ",n.a.createElement(D.a,{ticket:e})),K=e=>{var t,a;return Number(null===(t=e.current)||void 0===t||null===(a=t.getBoundingClientRect())||void 0===a?void 0:a.top)<0},V=({event:e})=>{var t,a=Object(c.b)(),s=Object(l.useRef)(null),r=Object(O.b)(),o=Object(l.useRef)(document),m=Object(k.a)()?o:r,[u,d]=Object(l.useState)(""),[b,_]=Object(l.useState)(r.current),v=Object(c.c)(S.c),E=Object(l.useCallback)(()=>{a(Object(S.d)(e))},[a,e]),f=Object(l.useCallback)(()=>{a(Object(S.b)())},[a]),y=g(m,s,K),p=null===(t=e.tickets)||void 0===t?void 0:t[0];return Object(l.useEffect)(()=>{s.current&&p&&((y||u===Q.Yes)&&d(y?Q.Yes:Q.No))},[s,y,p,u]),Object(l.useEffect)(()=>{_(r.current)},[r]),Object(l.useEffect)(()=>()=>{f()},[f]),p?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:z.a.static,ref:s},n.a.createElement(G,{ticket:p,onClick:E})),n.a.createElement("div",{className:[z.a.sticky,u].join(" ")},n.a.createElement(G,{ticket:p,onClick:E})),b&&Object(i.createPortal)(n.a.createElement(J,{event:e,ticket:p,visible:v,onClose:f}),b)):null};function X(e){var t=new URLSearchParams({l:"map"});for(var[a,l]of Object.entries(e))t.set(a,String(l));return"//static-maps.yandex.ru/1.x/?".concat(t)}var $=a(322),ee=a.n($),te=Object(l.lazy)(()=>Promise.all([a.e(11),a.e(8)]).then(a.bind(null,336))),ae=e=>n.a.createElement("div",{className:ee.a.station},e.colors.map(e=>n.a.createElement("div",{style:{backgroundColor:e},key:e,className:ee.a["metro-point"]})),e.name),le=e=>{var{coordinates:t,metro:a,address:c}=e,s=Object(l.useMemo)(()=>[t.longitude,t.latitude],[t]);return Object(i.createPortal)(n.a.createElement("div",{className:ee.a.modal},n.a.createElement("div",{className:ee.a.close},n.a.createElement("button",{className:ee.a["close-button"],onClick:e.onBackClick},"\u041d\u0430\u0437\u0430\u0434")),n.a.createElement(l.Suspense,{fallback:null},n.a.createElement(te,{point:s})),(a||c)&&n.a.createElement("div",{className:ee.a["metro-containter"]},a&&a.map(e=>n.a.createElement(ae,Object.assign({key:e.name},e))),c)),document.body)},ne=a(323),ce=a.n(ne),se=e=>{var t={url:X({size:[650,176],z:16,pt:[e.coordinates.longitude,e.coordinates.latitude,"pm2rdl"]}),width:650,height:176},[a,c]=Object(l.useState)(!1),s=Object(l.useCallback)(()=>{c(!0),document.body.style.overflow="hidden"},[]),r=Object(l.useCallback)(()=>{c(!1),document.body.style.overflow="auto"},[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{onClick:s},n.a.createElement(o.a,{className:ce.a.map,src:t})),a&&n.a.createElement(le,Object.assign({},e,{onBackClick:r})))},re=a(324),ie=a.n(re),oe=({schedule:e})=>{var{oneOfPlaces:t,placePreview:a}=e;return t&&t.coordinates?n.a.createElement(n.a.Fragment,null,n.a.createElement(se,{coordinates:t.coordinates,metro:t.metro,address:t.address}),n.a.createElement("div",{className:ie.a.title},t.title),n.a.createElement("div",{className:ie.a.address},t.address)):n.a.createElement("div",{className:ie.a.title},a)},me=a(26),ue=a(306),de=({children:e,skeleton:t,fetchData:a})=>(Object(l.useEffect)(()=>{a&&a()},[a]),n.a.createElement(l.Suspense,{fallback:t||null},e)),be=({children:e,skeleton:t,fetchData:a})=>n.a.createElement(ue.a,{skeleton:t},n.a.createElement(de,{children:e,skeleton:t,fetchData:a})),_e=a(163),ve=Object(me.a)(()=>a.e(4).then(a.bind(null,339))),Ee=Object(l.memo)(()=>n.a.createElement(be,{skeleton:n.a.createElement(_e.a,null)},n.a.createElement(ve,{skeleton:n.a.createElement(_e.a,null)}))),fe=a(325),ye=a.n(fe),pe=e=>{var t;return Object(k.a)()?window.scrollY<=0:!e.current||(null===(t=e.current)||void 0===t?void 0:t.scrollTop)<=0};t.default=({id:e,skeleton:t})=>{var a=Object(l.useRef)(null),i=Object(O.b)(),o=Object(l.useRef)(document),m=Object(k.a)()?o:i,u=Object(O.c)(),d=Object(c.c)(t=>t.event.data[e])||{},b=d.event||{},_=d.schedule||{},E=!b.id,{images:f,description:y,type:h,tickets:x}=b,{preview:w}=_,S=x&&x[0],B=g(m,i,pe);return Object(j.a)(),Object(l.useEffect)(()=>{u&&Object(s.c)(b)},[u,b]),E?t:n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{mods:B?"clear":"",backward:B?"white":"black",hasLogo:!1,hasMenu:!1}),n.a.createElement(R,{event:b,imageRef:a}),n.a.createElement("div",{className:ye.a.wrapper},n.a.createElement(V,{event:b}),h&&n.a.createElement("div",{className:ye.a.city},h.name," \u0432 \u041c\u043e\u0441\u043a\u0432\u0435"),w&&n.a.createElement("div",{className:ye.a.schedule},w.text),n.a.createElement(C.a,null,n.a.createElement(oe,{schedule:_})),f&&f.length>0&&n.a.createElement(C.a,null,n.a.createElement(N.a,null,"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f"),n.a.createElement(v,{items:f})),y&&n.a.createElement(C.a,null,n.a.createElement(N.a,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),n.a.createElement(p,{lines:5,className:ye.a.description,fullTextLabel:"\u041f\u043e\u043b\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},y)),n.a.createElement(Ee,null),S&&n.a.createElement("div",{className:ye.a.placeholder})))}}}]);
//# sourceMappingURL=event-screen.8e85450d.chunk.js.map