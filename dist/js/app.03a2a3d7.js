(function(t){function e(e){for(var o,c,a=e[0],s=e[1],l=e[2],u=0,d=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);b&&b(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},c={app:0},r={app:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-10b633b4":"1d3790c7","chunk-152bb2e5":"c5a6445a","chunk-5dda8bb4":"02c5f0b5","chunk-5ef9ed7a":"f4a91f9b","chunk-7d8d2fc6":"0b33c1d7","chunk-8c3f0fde":"c1b0f828"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-10b633b4":1,"chunk-152bb2e5":1,"chunk-5dda8bb4":1,"chunk-5ef9ed7a":1,"chunk-7d8d2fc6":1,"chunk-8c3f0fde":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-10b633b4":"228865ec","chunk-152bb2e5":"5a3844d8","chunk-5dda8bb4":"87c137ee","chunk-5ef9ed7a":"ec68eed1","chunk-7d8d2fc6":"36858a00","chunk-8c3f0fde":"bec2f0a7"}[t]+".css",r=s.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===o||u===r)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete c[t],b.parentNode.removeChild(b),n(i)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(b);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,n[1](d)}r[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/PS-Portfolio/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var b=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0943":function(t,e,n){},"0972":function(t,e,n){},"0bd4":function(t,e,n){"use strict";n("0f76")},"0f76":function(t,e,n){},"13a9":function(t,e,n){"use strict";n("a7a8")},"1ed5":function(t,e,n){"use strict";n("bd65")},2008:function(t,e,n){t.exports=n.p+"img/blob_bot_left.5defd88e.svg"},2090:function(t,e,n){"use strict";n("358e")},2776:function(t,e,n){},"2a0d":function(t,e,n){},"2ba2":function(t,e,n){var o={"./LogoExample01.svg":"d909","./blob_bot_left.svg":"2008","./blob_top_right.svg":"94ef"};function c(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}c.keys=function(){return Object.keys(o)},c.resolve=r,t.exports=c,c.id="2ba2"},"358e":function(t,e,n){},5184:function(t,e,n){"use strict";n("0972")},5292:function(t,e,n){"use strict";n("2a0d")},5443:function(t,e,n){"use strict";n("c994")},"564b":function(t,e,n){"use strict";n("2776")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var o=n("7a23"),c={class:"app__bg"},r={class:"app__blob-wrapper"};function i(t,e,n,i,a,s){var l=Object(o["x"])("OfflineDetection"),u=Object(o["x"])("SplashScreen"),d=Object(o["x"])("SphynxBlock"),b=Object(o["x"])("Blob"),f=Object(o["x"])("MainWindow");return Object(o["q"])(),Object(o["e"])("div",{class:["app",{isDark:t.$store.state.modeDark}]},[Object(o["h"])(l),t.$store.state.skipIntro?Object(o["f"])("",!0):(Object(o["q"])(),Object(o["e"])(u,{key:0})),Object(o["h"])("div",c,[Object(o["h"])(d),Object(o["h"])("div",r,[Object(o["h"])(b,{class:"blob__top blob__right",imgName:t.blobsData.blob2},null,8,["imgName"]),Object(o["h"])(b,{class:"blob__bot blob__left",imgName:t.blobsData.blob1},null,8,["imgName"])])]),Object(o["h"])(f)],2)}var a=Object(o["C"])("data-v-b7d970b6");Object(o["t"])("data-v-b7d970b6");var s={class:"splash-screen"},l={class:"splash-screen__skip"},u=Object(o["h"])("div",{class:"txt"},">>",-1),d={class:"splash-screen__tittle"},b=Object(o["h"])("div",{class:"splash-screen__vue"},[Object(o["h"])("div",{class:"txt"},"VUE")],-1);Object(o["r"])();var f=a((function(t,e,n,c,r,i){var a=Object(o["x"])("ProgressBarTimer"),f=Object(o["x"])("SphynxBlock"),h=Object(o["x"])("MyLogo");return Object(o["q"])(),Object(o["e"])("div",s,[Object(o["h"])(a,{class:"timer__top",timeout:7e3}),Object(o["h"])("div",l,[Object(o["h"])("button",{class:"btn",onClick:e[1]||(e[1]=function(e){return t.$store.commit("SKIP_INTRO")})},[u])]),Object(o["h"])(f,{class:"isAnimated"}),Object(o["h"])("div",d,[Object(o["h"])(h,{class:"splash-screen__logo",dotIsPinging:!0,firstColor:"primary",secondColor:"secondary"})]),b])})),h=Object(o["C"])("data-v-7669bd64");Object(o["t"])("data-v-7669bd64");var m={class:"figure"},v=Object(o["h"])("svg",{width:"763",height:"751",viewBox:"0 0 763 751",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{class:"path",d:"M140 3H21.5L4 32.5L40.5 298.5L192.5 646L252 747.5H530.5L581.5 646L719.5 298.5L759 32.5L748 3H631L515 218L508 249L261.5 251.5L256.5 218L140 3Z",stroke:"#B6008E","stroke-width":"6"})],-1);Object(o["r"])();var p=h((function(t,e,n,c,r,i){return Object(o["q"])(),Object(o["e"])("div",m,[v])})),O={name:"SphynxFigure",components:{},data:function(){return{}},created:function(){},mounted:function(){},unmounted:function(){},methods:{}};n("0bd4");O.render=p,O.__scopeId="data-v-7669bd64";var g=O,j=Object(o["C"])("data-v-3b388f6e");Object(o["t"])("data-v-3b388f6e");var C={class:"progress-bar"};Object(o["r"])();var k=j((function(t,e,n,c,r,i){return Object(o["q"])(),Object(o["e"])("div",C,[Object(o["h"])("div",{class:"progress-bar__filled",style:i.getFilledBar},null,4)])})),_=(n("a9e3"),{name:"ProgressBarTimer",components:{},props:{timeout:Number},data:function(){return{percent:0}},created:function(){},mounted:function(){this.fillBar()},unmounted:function(){},methods:{fillBar:function(){var t=this;this.percent<100&&setTimeout((function(){t.percent++,t.fillBar()}),this.timeout/100)}},computed:{getFilledBar:function(){return"width:"+this.percent+"%"}}});n("5184");_.render=k,_.__scopeId="data-v-3b388f6e";var x=_,w={name:"SplashScreen",components:{ProgressBarTimer:x,SphynxBlock:g},data:function(){return{}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("SKIP_INTRO")}),1e4)},methods:{skipIntro:function(){this.$store.commit("SKIP_INTRO")}}};n("80c0");w.render=f,w.__scopeId="data-v-b7d970b6";var S=w,y=Object(o["C"])("data-v-73601d6f");Object(o["t"])("data-v-73601d6f");var E={class:"container main"},N={class:"grid main-grid"},I={class:"panel main-title"},P={class:"panel links main-links"},B=Object(o["h"])("div",{class:"txt txt-white txt-links fw-b"},"О себе",-1),L=Object(o["h"])("div",{class:"line line-vert"},null,-1),T=Object(o["h"])("div",{class:"txt txt-white txt-links fw-b"},"Навыки",-1),M=Object(o["h"])("div",{class:"line line-vert"},null,-1),W=Object(o["h"])("div",{class:"txt txt-white txt-links fw-b"},"Опыт",-1),D=Object(o["h"])("div",{class:"line line-vert"},null,-1),A=Object(o["h"])("div",{class:"txt txt-white txt-links fw-b"},"Примеры",-1),q={class:"panel content main-content"};Object(o["r"])();var R=y((function(t,e,n,c,r,i){var a=Object(o["x"])("MyLogo"),s=Object(o["x"])("router-link"),l=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["e"])("div",E,[Object(o["h"])("div",N,[Object(o["h"])("div",I,[Object(o["h"])(s,{to:"/"},{default:y((function(){return[Object(o["h"])(a,{class:"main-logo",dotIsPinging:!0,firstColor:"primary",secondColor:"secondary"})]})),_:1})]),Object(o["h"])("div",P,[Object(o["h"])(s,{class:"main-links__item hover-underline-center",to:"/about",onClick:e[1]||(e[1]=function(e){return t.$store.commit("INCREMENT_ABOUT")})},{default:y((function(){return[B]})),_:1}),L,Object(o["h"])(s,{class:"main-links__item hover-underline-center",to:"/skills",onClick:e[2]||(e[2]=function(e){return t.$store.commit("INCREMENT_SKILLS")})},{default:y((function(){return[T]})),_:1}),M,Object(o["h"])(s,{class:"main-links__item hover-underline-center",to:"/exp",onClick:e[3]||(e[3]=function(e){return t.$store.commit("INCREMENT_EXP")})},{default:y((function(){return[W]})),_:1}),D,Object(o["h"])(s,{class:"main-links__item hover-underline-center",to:"/examples"},{default:y((function(){return[A]})),_:1})]),Object(o["h"])("div",q,[Object(o["h"])(l)])])])})),J={name:"MainFrame",components:{},data:function(){return{}},watch:{},created:function(){},mounted:function(){},unmounted:function(){},computed:{switchBubbles:{get:function(){return this.$store.state.modeBubbles},set:function(){this.$store.commit("CHANGE_BUBBLES")}}},methods:{toggleDarkMode:function(){}}};n("5443");J.render=R,J.__scopeId="data-v-73601d6f";var F=J,H=Object(o["C"])("data-v-ed2c461c");Object(o["t"])("data-v-ed2c461c");var U={class:"blob"};Object(o["r"])();var $=H((function(t,e,c,r,i,a){return Object(o["q"])(),Object(o["e"])("div",U,[Object(o["h"])("img",{loading:"lazy",src:n("2ba2")("./".concat(c.imgName)),alt:""},null,8,["src"])])})),z={name:"blob",components:{},data:function(){return{}},props:{imgName:String},created:function(){},mounted:function(){},unmounted:function(){},methods:{}};n("2090");z.render=$,z.__scopeId="data-v-ed2c461c";var K=z,V=Object(o["C"])("data-v-2013432e");Object(o["t"])("data-v-2013432e");var G={key:0,class:"top-message is-offline"};Object(o["r"])();var Z=V((function(t,e,n,c,r,i){return t.connection.isOnline?Object(o["f"])("",!0):(Object(o["q"])(),Object(o["e"])("div",G,"Для полноценной работы сайта требуется интернет соединение"))})),X={name:"OfflineDetection",components:{},data:function(){return{connection:{isOnline:Boolean}}},created:function(){window.addEventListener("online",this.handleNetwork),window.addEventListener("offline",this.handleNetwork),this.handleNetwork()},mounted:function(){},unmounted:function(){window.removeEventListener("online",this.handleNetwork),window.removeEventListener("offline",this.handleNetwork)},methods:{handleNetwork:function(){this.connection.isOnline=navigator.onLine}}};n("7d9e");X.render=Z,X.__scopeId="data-v-2013432e";var Q=X,Y={components:{OfflineDetection:Q,SplashScreen:S,SphynxBlock:g,MainWindow:F,Blob:K},data:function(){return{blobsData:{blob1:"blob_bot_left.svg",blob2:"blob_top_right.svg"}}},created:function(){},mounted:function(){},methods:{}};n("5292");Y.render=i;var tt=Y,et=n("9483");Object(et["a"])("".concat("/PS-Portfolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var nt=n("6c02"),ot=Object(o["C"])("data-v-5e3f6740");Object(o["t"])("data-v-5e3f6740");var ct={class:"welcome welcome__block block hide-scrollbar"},rt=Object(o["h"])("div",{class:"br"},null,-1),it={class:"block__content"},at={class:"block__text block-text"},st={class:"block-text__block1 flex-row"},lt=Object(o["h"])("div",{class:"txt txt-white mg-r"},"Я",-1),ut={class:"flex-no-wrap"},dt=Object(o["h"])("div",{class:"txt txt-white mg-r show-at-md"},"//",-1),bt={class:"flex-no-wrap"},ft=Object(o["h"])("div",{class:"block-text__block2"},[Object(o["h"])("br"),Object(o["h"])("div",{class:"txt txt-white hover-back"},"Этот сайт целиком создан при помощи VUE, VUE-CLI, VUEX, PUG, и также является PWA."),Object(o["h"])("br"),Object(o["h"])("div",{class:"txt txt-white hover-back"},'Поддерживается установка на ПК, Android, iOS, поддержка оффлайн-просмотра, проверка на плохое\\отсутствие интернет соединения. Верстка полностью адаптивная, код минимизированный, изображения оптимизированны, есть перехват "неверных" ссылок. Тяжелые библиотеки, вроде JQuery, Bootstrap или Materialize, не использовались.'),Object(o["h"])("br"),Object(o["h"])("div",{class:"txt txt-white hover-back"},"Вы можете переключать дополнительные опции просмотра в меню в нижнем углу.")],-1);Object(o["r"])();var ht=ot((function(t,e,n,c,r,i){var a=Object(o["x"])("MyTitle"),s=Object(o["x"])("WordSwitcher");return Object(o["q"])(),Object(o["e"])("section",ct,[Object(o["h"])(a,{txtTitle:"Добро пожаловать!",visitsCount:t.$store.state.visitsPageWelcome},null,8,["visitsCount"]),rt,Object(o["h"])("div",it,[Object(o["h"])("div",at,[Object(o["h"])("div",st,[lt,Object(o["h"])("div",ut,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.nameWords,(function(t){return Object(o["q"])(),Object(o["e"])(s,{class:"txt txt-white",key:t.id,fromCh:t.fromCh,toCh:t.toCh},null,8,["fromCh","toCh"])})),128))]),dt,Object(o["h"])("div",bt,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.jobWords,(function(t){return Object(o["q"])(),Object(o["e"])(s,{class:"txt txt-white",key:t.id,fromCh:t.fromCh,toCh:t.toCh},null,8,["fromCh","toCh"])})),128))])]),ft])])])})),mt=Object(o["C"])("data-v-aecf64dc"),vt=mt((function(t,e,n,c,r,i){return Object(o["q"])(),Object(o["e"])("span",{class:{hide:t.isHiding},style:i.getRandomDelay()},Object(o["z"])(t.currentCharacter),7)})),pt={name:"WordSwitcher",components:{},data:function(){return{currentCharacter:"",isHiding:!1,changeLimit:3}},props:{fromCh:String,toCh:String},created:function(){},mounted:function(){this.switchForward(),this.currentCharacter=this.fromCh},unmounted:function(){},methods:{getRandomDelay:function(){return{transitionDuration:Math.random()+"s"}},switchForward:function(){var t=this;this.isHiding=!1,this.changeLimit>0&&(setTimeout((function(){t.isHiding=!0,setTimeout((function(){t.switchBack(),t.currentCharacter=t.toCh}),700)}),8e3),this.changeLimit--)},switchBack:function(){var t=this;this.isHiding=!1,setTimeout((function(){t.isHiding=!0,setTimeout((function(){t.switchForward(),t.currentCharacter=t.fromCh}),700)}),8e3)}},computed:{}};n("1ed5");pt.render=vt,pt.__scopeId="data-v-aecf64dc";var Ot=pt,gt={name:"Welcome",components:{WordSwitcher:Ot},data:function(){return{nameWords:[{fromCh:"Ёл",toCh:"Pur"},{fromCh:"кин",toCh:"ple"},{fromCh:" ",toCh:"."},{fromCh:" Ал",toCh:"Sp"},{fromCh:"екс",toCh:"hy"},{fromCh:"ан",toCh:"n"},{fromCh:"др ",toCh:"x "},{fromCh:" ",toCh:" "}],jobWords:[{fromCh:"Фронт",toCh:"Front"},{fromCh:"енд",toCh:"end"},{fromCh:" ",toCh:" "},{fromCh:" Разра",toCh:" Deve"},{fromCh:"ботчик",toCh:"loper"}]}},created:function(){},mounted:function(){this.$store.commit("INCREMENT_WELCOME")},unmounted:function(){},methods:{}};n("e9fd");gt.render=ht,gt.__scopeId="data-v-5e3f6740";var jt=gt,Ct=[{path:"/",name:"Welcome",component:jt},{path:"/:catchAll(.*)",name:"Error",component:function(){return n.e("chunk-8c3f0fde").then(n.bind(null,"dda8"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-152bb2e5").then(n.bind(null,"f820"))}},{path:"/skills",name:"Skills",component:function(){return n.e("chunk-10b633b4").then(n.bind(null,"ad83"))}},{path:"/exp",name:"Experience",component:function(){return n.e("chunk-5dda8bb4").then(n.bind(null,"459e"))}},{path:"/exp",name:"Experience",component:function(){return n.e("chunk-5dda8bb4").then(n.bind(null,"459e"))}},{path:"/examples",name:"Examples",component:function(){return n.e("chunk-7d8d2fc6").then(n.bind(null,"a451"))},children:[{path:"example01",name:"Пример 1",component:function(){return n.e("chunk-5ef9ed7a").then(n.bind(null,"ab6f"))}}]}],kt=Object(nt["a"])({history:Object(nt["b"])("/PS-Portfolio/"),routes:Ct}),_t=kt,xt=n("5502"),wt=Object(xt["a"])({state:{skipIntro:JSON.parse(localStorage.getItem("skipIntro")),modeDark:!1,modeBubbles:!1,visitsPageWelcome:JSON.parse(localStorage.getItem("visitsPageWelcome")),visitsPageAbout:JSON.parse(localStorage.getItem("visitsPageAbout")),visitsPageSkills:JSON.parse(localStorage.getItem("visitsPageSkills")),visitsPageExp:JSON.parse(localStorage.getItem("visitsPageExp")),visitsPageError:JSON.parse(localStorage.getItem("visitsPageError"))},mutations:{TEST:function(){console.log("TEST")},SKIP_INTRO:function(t){t.skipIntro=!0,localStorage.setItem("skipIntro",JSON.stringify(t.skipIntro))},SHOW_INTRO:function(t){t.skipIntro=!1,localStorage.setItem("skipIntro",JSON.stringify(t.skipIntro))},CHANGE_BUBBLES:function(t){t.modeBubbles=!t.modeBubbles},CHANGE_DARK:function(t){t.modeDark=!t.modeDark},INCREMENT_WELCOME:function(t){t.visitsPageWelcome++,localStorage.setItem("visitsPageWelcome",JSON.stringify(t.visitsPageWelcome))},INCREMENT_ABOUT:function(t){t.visitsPageAbout++,localStorage.setItem("visitsPageAbout",JSON.stringify(t.visitsPageAbout))},INCREMENT_SKILLS:function(t){t.visitsPageSkills++,localStorage.setItem("visitsPageSkills",JSON.stringify(t.visitsPageSkills))},INCREMENT_EXP:function(t){t.visitsPageExp++,localStorage.setItem("visitsPageExp",JSON.stringify(t.visitsPageExp))}},actions:{},modules:{}}),St=Object(o["C"])("data-v-49c9f877");Object(o["t"])("data-v-49c9f877");var yt={class:"btn"};Object(o["r"])();var Et=St((function(t,e,n,c,r,i){return Object(o["q"])(),Object(o["e"])("button",yt,[Object(o["h"])("div",{class:["txt",{"txt-white":n.isWhite}]},Object(o["z"])(n.txtButton),3)])})),Nt={name:"ButtonSimple",data:function(){return{}},props:{txtButton:String,isWhite:Boolean,isBgDark:Boolean},components:{}};n("564b");Nt.render=Et,Nt.__scopeId="data-v-49c9f877";var It=Nt,Pt=Object(o["C"])("data-v-0ea8ad4a");Object(o["t"])("data-v-0ea8ad4a");var Bt={class:"logo flex-row"};Object(o["r"])();var Lt=Pt((function(t,e,n,c,r,i){return Object(o["q"])(),Object(o["e"])("div",Bt,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.firstWord,(function(t){return Object(o["q"])(),Object(o["e"])("div",{class:["txt letter",i.setFirstColor],key:t.letter,style:i.getRandomDelay()},Object(o["z"])(t.letter),7)})),128)),Object(o["h"])("div",{class:["txt letter txt-white",{"anim-ping":n.dotIsPinging}]},".",2),(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.secondWord,(function(t){return Object(o["q"])(),Object(o["e"])("div",{class:["txt letter",i.setSecondColor],key:t.letter,style:i.getRandomDelay()},Object(o["z"])(t.letter),7)})),128))])})),Tt={name:"MyLogo",data:function(){return{firstWord:[{letter:"p"},{letter:"u"},{letter:"r"},{letter:"p"},{letter:"l"},{letter:"e"}],secondWord:[{letter:"s"},{letter:"p"},{letter:"h"},{letter:"y"},{letter:"n"},{letter:"x"}]}},props:{firstColor:String,secondColor:String,dotIsPinging:Boolean},mounted:function(){},components:{},computed:{setFirstColor:function(){return"txt-"+this.firstColor},setSecondColor:function(){return"txt-"+this.secondColor}},methods:{getRandomDelay:function(){return{animationDelay:Math.floor(5*Math.random())+1+"s"}}}};n("13a9");Tt.render=Lt,Tt.__scopeId="data-v-0ea8ad4a";var Mt=Tt,Wt=Object(o["C"])("data-v-d0f034bc");Object(o["t"])("data-v-d0f034bc");var Dt={class:"title"},At={class:"txt txt-white"},qt={class:"views",title:"Подсчет, сколько раз вы посетили эту страницу"},Rt={class:"views-counter txt txt-white"},Jt=Object(o["h"])("svg",{class:"views-icon",width:"22",height:"16",viewBox:"0 0 22 16",fill:"white",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{d:"M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13V13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"})],-1),Ft=Object(o["h"])("div",{class:"line"},null,-1);Object(o["r"])();var Ht=Wt((function(t,e,n,c,r,i){return Object(o["q"])(),Object(o["e"])("div",Dt,[Object(o["h"])("h3",At,Object(o["z"])(n.txtTitle),1),Object(o["h"])("div",qt,[Object(o["h"])("div",Rt,Object(o["z"])(n.visitsCount),1),Jt]),Ft])})),Ut={name:"MyTitle",props:{txtTitle:String,visitsCount:Number},mounted:function(){},components:{}};n("b1da");Ut.render=Ht,Ut.__scopeId="data-v-d0f034bc";var $t=Ut,zt=[It,Mt,$t],Kt=(n("78a7"),Object(o["d"])(tt));zt.forEach((function(t){Kt.component(t.name,t)})),Kt.use(wt).use(_t).mount("#app")},"789f":function(t,e,n){},"78a7":function(t,e,n){},"7d9e":function(t,e,n){"use strict";n("789f")},"80c0":function(t,e,n){"use strict";n("0943")},"94ef":function(t,e,n){t.exports=n.p+"img/blob_top_right.6a226f9e.svg"},a7a8:function(t,e,n){},b1da:function(t,e,n){"use strict";n("eca4")},bd65:function(t,e,n){},c38f:function(t,e,n){},c994:function(t,e,n){},d909:function(t,e,n){t.exports=n.p+"img/LogoExample01.67cf97b8.svg"},e9fd:function(t,e,n){"use strict";n("c38f")},eca4:function(t,e,n){}});
//# sourceMappingURL=app.03a2a3d7.js.map