(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9db8c978"],{"121d":function(t,e,i){"use strict";i("321d")},1645:function(t,e,i){"use strict";var n=i("7a23");Object(n["E"])("data-v-7da8ec69");var r={class:"logo flex-row d-flex"};function c(t,e,i,c,o,s){return Object(n["B"])(),Object(n["h"])("div",r,[(Object(n["B"])(!0),Object(n["h"])(n["a"],null,Object(n["H"])(t.firstWord,(function(t){return Object(n["B"])(),Object(n["h"])("div",{class:Object(n["s"])(["txt letter",[{"anim-appear":i.wordsAppear},s.setFirstColor]]),key:t.letter,style:Object(n["t"])(s.getRandomDelay())},Object(n["N"])(t.letter),7)})),128)),Object(n["i"])("div",{class:Object(n["s"])(["txt letter txt-white",{"anim-ping":i.dotIsPinging}])},".",2),(Object(n["B"])(!0),Object(n["h"])(n["a"],null,Object(n["H"])(t.secondWord,(function(t){return Object(n["B"])(),Object(n["h"])("div",{class:Object(n["s"])(["txt letter",[{"anim-appear":i.wordsAppear},s.setSecondColor]]),key:t.letter,style:Object(n["t"])(s.getRandomDelay())},Object(n["N"])(t.letter),7)})),128))])}Object(n["C"])();var o={name:"MyLogo",data:function(){return{firstWord:[{letter:"p"},{letter:"u"},{letter:"r"},{letter:"p"},{letter:"l"},{letter:"e"}],secondWord:[{letter:"s"},{letter:"p"},{letter:"h"},{letter:"y"},{letter:"n"},{letter:"x"}]}},props:{firstColor:String,secondColor:String,dotIsPinging:Boolean,wordsAppear:Boolean},mounted:function(){},components:{},computed:{setFirstColor:function(){return"txt-"+this.firstColor},setSecondColor:function(){return"txt-"+this.secondColor}},methods:{getRandomDelay:function(){return{animationDelay:Math.floor(5*Math.random())+1+"s"}}}};i("19e7");o.render=c,o.__scopeId="data-v-7da8ec69";e["a"]=o},"19e7":function(t,e,i){"use strict";i("2a1c")},"2a1c":function(t,e,i){},"321d":function(t,e,i){},"45ee":function(t,e,i){"use strict";i("6191")},6191:function(t,e,i){},"665e":function(t,e,i){},"81d5":function(t,e,i){"use strict";var n=i("7b0b"),r=i("23cb"),c=i("50c4");t.exports=function(t){var e=n(this),i=c(e.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,i),a=o>2?arguments[2]:void 0,l=void 0===a?i:r(a,i);while(l>s)e[s++]=t;return e}},8928:function(t,e,i){"use strict";i("cb58")},a21e:function(t,e,i){},a451:function(t,e,i){"use strict";i.r(e);var n=i("7a23");Object(n["E"])("data-v-c3ee6168");var r={class:"examples"},c={class:"container-full"},o={class:"examples-nav page"},s={class:"container d-flex flex-col flex-center"},a={class:"page-content"},l={class:"panel mr-a ml-a p-4 mb-1"},d=Object(n["i"])("div",{class:"txt txt-white mb-2 center-text"},"Большая часть моих работ под NDA, но здесь есть несколько примеров, созданные в свободное время.",-1),b={class:"page-content__wrapper d-grid-lg grid-2"},u={class:"panel mr-a ml-a p-2 mb-2 d-flex flex-col"},p=Object(n["i"])("div",{class:"txt txt-white center-text"},"Небольшой проект, с различными встреченными тестовыми заданиями (что лучше отражает мой навык)",-1),O=["href"],f={class:"examples-content"};function j(t,e,i,j,g,m){var h=Object(n["J"])("my-logo"),k=Object(n["J"])("router-link"),v=Object(n["J"])("link-block"),x=Object(n["J"])("router-view");return Object(n["B"])(),Object(n["h"])("div",r,[Object(n["i"])("div",c,[Object(n["i"])("div",o,[Object(n["i"])("div",s,[Object(n["i"])("div",{class:Object(n["s"])(["page-logo panel hover-back mb-2 mt-2 mr-a ml-a",{loading:!m.introSkipped}])},[Object(n["l"])(k,{to:"/",exact:""},{default:Object(n["R"])((function(){return[Object(n["l"])(h,{class:"main-logo",firstColor:"primary","second-color":"secondary",dotIsPinging:""})]})),_:1})],2),Object(n["i"])("div",a,[Object(n["i"])("div",l,[d,Object(n["i"])("div",b,[(Object(n["B"])(!0),Object(n["h"])(n["a"],null,Object(n["H"])(t.sitesArray,(function(t){return Object(n["B"])(),Object(n["f"])(v,{key:t.order,blockLink:t},null,8,["blockLink"])})),128))])]),Object(n["i"])("div",u,[p,Object(n["i"])("a",{class:"mr-a ml-a test-link txt txt-white center-text",href:"https://yorkaen.github.io/PS-Test/",target:"blank"},"===> https://yorkaen.github.io/PS-Test/ <===",8,O)])])])]),Object(n["i"])("div",f,[Object(n["l"])(x)])])])}Object(n["C"])(),Object(n["E"])("data-v-47b6fbef");var g={class:"figure"},m=Object(n["i"])("svg",{width:"763",height:"751",viewBox:"0 0 763 751",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(n["i"])("path",{class:"path",d:"M140 3H21.5L4 32.5L40.5 298.5L192.5 646L252 747.5H530.5L581.5 646L719.5 298.5L759 32.5L748 3H631L515 218L508 249L261.5 251.5L256.5 218L140 3Z",stroke:"#B6008E","stroke-width":"6"})],-1),h=[m];function k(t,e,i,r,c,o){return Object(n["B"])(),Object(n["h"])("div",g,h)}Object(n["C"])();var v={name:"SphynxFigure",components:{},data:function(){return{}},created:function(){},mounted:function(){},unmounted:function(){},methods:{}};i("ab37");v.render=k,v.__scopeId="data-v-47b6fbef";var x=v,L=i("1645"),w=i("98ea");i("cb29");Object(n["E"])("data-v-6a1203f7");var y=["width","height","fill"],I=Object(n["i"])("path",{d:"M11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11ZM16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V9H16V16Z"},null,-1),B=[I];function N(t,e,i,r,c,o){return Object(n["B"])(),Object(n["h"])("svg",{class:"svg",width:i.width,height:i.height,viewBox:"0 0 18 18",fill:i.fill,xmlns:"http://www.w3.org/2000/svg"},B,8,y)}Object(n["C"])();i("a9e3");var S={name:"icon-open-link",components:{},props:{fill:{type:String,default:"black"},width:{type:[String,Number],default:40},height:{type:[String,Number],default:40}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}};i("8928");S.render=N,S.__scopeId="data-v-6a1203f7";var C=S,_={class:"link-block h-100"},H={key:0,class:"link-block__content-router h-100"},E={key:1,class:"link-block__content-link h-100"},D=["href"];function R(t,e,i,r,c,o){var s=Object(n["J"])("link-item"),a=Object(n["J"])("router-link");return Object(n["B"])(),Object(n["h"])("div",_,[i.blockLink.isRouter?(Object(n["B"])(),Object(n["h"])("div",H,[Object(n["l"])(a,{to:i.blockLink.routerLink,exact:""},{default:Object(n["R"])((function(){return[Object(n["l"])(s,{site:i.blockLink.site},null,8,["site"])]})),_:1},8,["to"])])):(Object(n["B"])(),Object(n["h"])("div",E,[Object(n["i"])("a",{href:i.blockLink.urlLink,target:"blank"},[Object(n["l"])(s,{site:i.blockLink.site},null,8,["site"])],8,D)]))])}Object(n["E"])("data-v-51408bf2");var J={class:"item panel p-2"},M={class:"item-title d-flex flex-row flex-alight flex-between p-1"},P={key:0,class:"shade-txt txt-secondary"},V={class:"txt-title d-flex flex-alight"},A={class:"txt-primary txt-1 fw-b mt-a mb-a mr-1"},T=Object(n["i"])("div",{class:"line"},null,-1),F={class:"item-content"},W={class:"txt txt-white txt-2 hover-back"};function z(t,e,i,r,c,o){var s=Object(n["J"])("icon-open-link"),a=Object(n["J"])("image-lazy");return Object(n["B"])(),Object(n["h"])("div",J,[Object(n["i"])("div",M,[i.site.isNuxt?(Object(n["B"])(),Object(n["h"])("div",P,"NUXT")):Object(n["g"])("",!0),Object(n["i"])("div",V,[Object(n["i"])("div",A,Object(n["N"])(i.site.siteName),1),i.site.isSiteOpening?(Object(n["B"])(),Object(n["f"])(s,{key:0,width:"18",height:"18",fill:"#ffffff"})):Object(n["g"])("",!0)]),Object(n["l"])(a,{class:"img-logo",srcImg:i.site.siteImg},null,8,["srcImg"])]),T,Object(n["i"])("div",F,[Object(n["i"])("div",W,Object(n["N"])(i.site.siteDescription),1)])])}Object(n["C"])();var U={name:"LinkItem",components:{IconOpenLink:C,ImageLazy:w["a"]},props:{site:{type:Object}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}};i("45ee");U.render=z,U.__scopeId="data-v-51408bf2";var X=U,Z={name:"LinkBlock",components:{LinkItem:X},props:{blockLink:Object},data:function(){return{}},created:function(){},mounted:function(){},methods:{}};i("d3bc");Z.render=R;var $=Z,q={name:"Examples",components:{LinkBlock:$,IconOpenLink:C,ImageLazy:w["a"],MyLogo:L["a"],SphynxFigure:x},props:{},data:function(){return{sitesArray:[{order:1,isRouter:!0,routerLink:"/Examples/Example03",urlLink:"",site:{siteName:"Creditio",isSiteOpening:!1,siteImg:"creditio/logo.png",siteDescription:"Адаптивная верстка, Swiper, пошаговая форма с валидацией и слайдерами, смена структуры страницы на мобильном разрешении, плавный аккордеон."}},{order:2,isRouter:!0,routerLink:"/Examples/Example01",urlLink:"",site:{siteName:"Динская Мишура",isSiteOpening:!1,siteImg:"difam/LogoMin.png",siteDescription:"Адаптивная верстка, Swiper, бургер, форма с валидацией, карта Яндекса, таблицы не ломающие верстку"}},{order:3,isRouter:!1,routerLink:"",urlLink:"https://leadsbroker.ru/",site:{siteName:"Leadsbroker",isSiteOpening:!0,siteImg:"logos/logo11.svg",siteDescription:"Адаптивная верстка, формы, сложная адаптивная анимация, слайдеры."}},{order:4,isRouter:!1,routerLink:"",urlLink:"https://yorkaen.github.io/InternetProviderNuxt/",site:{siteName:"Internet Provider (in work...)",isSiteOpening:!0,siteImg:"logos/logo11.svg",siteDescription:"Тестовая страница вымышленного интернет провайдера на NUXT.",isNuxt:!0}},{order:5,isRouter:!0,routerLink:"/Examples/Example06",urlLink:"",site:{siteName:"NFT Page",isSiteOpening:!1,siteImg:"logos/dornothLogo.svg",siteDescription:""}},{order:6,isRouter:!1,routerLink:"",urlLink:"https://yorkaen.github.io/nuxt-school-beauty/",site:{siteName:"Bucklya",isSiteOpening:!0,siteImg:"logos/logo11.svg",siteDescription:"Адаптивная верстка, NUXT Bridge, загрузка всех данных через JSON файлы с сервера.",isNuxt:!0}}]}},created:function(){},mounted:function(){},methods:{},computed:{introSkipped:function(){return this.$store.state.global.skipIntro}}};i("121d");q.render=j,q.__scopeId="data-v-c3ee6168";e["default"]=q},ab37:function(t,e,i){"use strict";i("665e")},cb29:function(t,e,i){var n=i("23e7"),r=i("81d5"),c=i("44d2");n({target:"Array",proto:!0},{fill:r}),c("fill")},cb58:function(t,e,i){},d3bc:function(t,e,i){"use strict";i("a21e")}}]);
//# sourceMappingURL=chunk-9db8c978.e3a72d3f.js.map