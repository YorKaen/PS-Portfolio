(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cce7198"],{"0087":function(t,e,c){},"734c":function(t,e,c){"use strict";var i=c("7a23");function n(t,e,c,n,a,s){return Object(i["B"])(),Object(i["h"])("section",{class:Object(i["s"])(["clearfix",c.srcName])},[Object(i["i"])("div",{class:Object(i["s"])(["section-container",{"bg-primary":c.isFill},c.isFull?"container-full":"container"])},[s.hasTitleSlot?(Object(i["B"])(),Object(i["h"])("div",{key:0,class:Object(i["s"])(["title",c.srcName+"__title"])},[Object(i["I"])(t.$slots,"title",{},void 0,!0)],2)):Object(i["g"])("",!0),s.hasContentSlot?(Object(i["B"])(),Object(i["h"])("div",{key:1,class:Object(i["s"])(["content",c.srcName+"__content"])},[Object(i["I"])(t.$slots,"content",{},void 0,!0)],2)):Object(i["g"])("",!0),c.isSplit?(Object(i["B"])(),Object(i["h"])("div",{key:2,class:Object(i["s"])(["content-split",c.srcName+"__content",s.howAdaptive])},[Object(i["i"])("div",{class:Object(i["s"])(["content-left",c.srcName+"__content-left"])},[Object(i["I"])(t.$slots,"content-left",{},void 0,!0)],2),Object(i["i"])("div",{class:Object(i["s"])(["content-right",c.srcName+"__content-right"])},[Object(i["I"])(t.$slots,"content-right",{},void 0,!0)],2)],2)):Object(i["g"])("",!0)],2)],2)}var a={name:"SectionBasic",components:{},props:{srcName:String,isFull:Boolean,isFill:Boolean,isSplit:Boolean,adaptiveMD:{type:Boolean,default:!1},adaptiveLG:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},mounted:function(){},methods:{},computed:{hasTitleSlot:function(){return!!this.$slots.title},hasContentSlot:function(){return!!this.$slots.content},howAdaptive:function(){return this.adaptiveMD?"adaptive-md":this.adaptiveLG?"adaptive-lg":void 0}}};c("fca8");a.render=n,a.__scopeId="data-v-13b8e5f2";e["a"]=a},"78ff":function(t,e,c){"use strict";c.r(e);var i=c("7a23"),n={id:"example-page-4"},a={class:"index-page bg-black"},s={class:"wrapper d-flex flex-col bg-shade"},o={class:"logo py-4 bg-gray"},l={href:"#"},r={class:"container nav-container"},b={key:0,class:"user-nav nav-item fill d-flex flex-between"},d={class:"wallet mb-a mt-a"},u=Object(i["i"])("div",{class:"icon wallet-icon d-flex"},[Object(i["i"])("svg",{class:"mt-a mb-a",width:"35",height:"32",viewBox:"0 0 25 22",fill:"#febf32",xmlns:"http://www.w3.org/2000/svg"},[Object(i["i"])("path",{d:"M22.5195 4.6875H3.90625C3.47461 4.6875 3.125 4.33789 3.125 3.90625C3.125 3.47461 3.47461 3.125 3.90625 3.125H22.6562C23.0879 3.125 23.4375 2.77539 23.4375 2.34375C23.4375 1.04932 22.3882 0 21.0938 0H3.125C1.39893 0 0 1.39893 0 3.125V18.75C0 20.4761 1.39893 21.875 3.125 21.875H22.5195C23.8877 21.875 25 20.8237 25 19.5312V7.03125C25 5.73877 23.8877 4.6875 22.5195 4.6875ZM20.3125 14.8438C19.4497 14.8438 18.75 14.144 18.75 13.2812C18.75 12.4185 19.4497 11.7188 20.3125 11.7188C21.1753 11.7188 21.875 12.4185 21.875 13.2812C21.875 14.144 21.1753 14.8438 20.3125 14.8438Z"})])],-1),f={class:"number wallet-number"},h={class:"txt txt-primary"},O=Object(i["i"])("div",{class:"txt txt-uppercase fw-m mr-1"},"выйти",-1),j={key:1,class:"guest-nav nav-item fill d-flex flex-end"},p=Object(i["i"])("div",{class:"txt txt-uppercase fw-m mr-1"},"войти",-1);function m(t,e,c,m,v,g){var C=Object(i["J"])("image-lazy"),w=Object(i["J"])("exit-enter"),x=Object(i["J"])("section-basic");return Object(i["B"])(),Object(i["h"])("div",n,[Object(i["i"])("div",a,[Object(i["l"])(x,{"src-name":"nav",isFull:""},{content:Object(i["R"])((function(){return[Object(i["i"])("div",s,[Object(i["i"])("div",o,[Object(i["i"])("a",l,[Object(i["l"])(C,{class:"p-4 logo-crypto",srcImg:"crypto/logo.svg"},null,8,["srcImg"])])]),Object(i["i"])("div",r,[t.$store.state.crypto.isAuth?(Object(i["B"])(),Object(i["h"])("div",b,[Object(i["i"])("div",d,[u,Object(i["i"])("div",f,[Object(i["i"])("div",h,Object(i["N"])(t.idWallet),1)])]),Object(i["i"])("button",{class:"btn btn-primary d-flex mt-a mb-a",onClick:e[0]||(e[0]=function(e){return t.$store.commit("UNAUTHORIZE_USER")})},[O,Object(i["l"])(w,{isExit:"true",width:"20",height:"20",fill:"#febf32"})])])):(Object(i["B"])(),Object(i["h"])("div",j,[Object(i["i"])("button",{class:"btn btn-primary d-flex mt-a mb-a",onClick:e[1]||(e[1]=function(e){return t.$store.commit("AUTHORIZE_USER")})},[p,Object(i["l"])(w,{isEnter:"true",width:"20",height:"20",fill:"#febf32"})])]))])])]})),_:1}),Object(i["l"])(i["b"],{name:"hide"},{default:Object(i["R"])((function(){return[(Object(i["B"])(),Object(i["f"])(Object(i["L"])(t.$store.state.crypto.currentComponent),{class:"index-page__content"}))]})),_:1})])])}var v=c("734c"),g=c("98ea"),C=(c("cb29"),["width","height","fill"]),w={key:0,class:"path",d:"M12 10.002L8 6.00196V9.00196H0V11.002H8V14.002L12 10.002ZM20 10.002C20.0005 12.3915 19.1453 14.7022 17.5893 16.5156C16.0333 18.3291 13.8794 19.5255 11.5175 19.8881C9.15569 20.2507 6.74208 19.7556 4.71373 18.4924C2.68538 17.2293 1.17639 15.2816 0.46 13.002H2.59C3.2862 14.723 4.55932 16.1484 6.19117 17.0337C7.82301 17.9191 9.71198 18.2093 11.5343 17.8547C13.3567 17.5 14.999 16.5226 16.1797 15.0899C17.3605 13.6572 18.0062 11.8585 18.0062 10.002C18.0062 8.14541 17.3605 6.34667 16.1797 4.91399C14.999 3.48131 13.3567 2.5039 11.5343 2.14926C9.71198 1.79463 7.82301 2.08486 6.19117 2.97021C4.55932 3.85555 3.2862 5.28089 2.59 7.00196H0.46C1.17639 4.72236 2.68538 2.77464 4.71373 1.51148C6.74208 0.24832 9.15569 -0.246777 11.5175 0.115839C13.8794 0.478455 16.0333 1.67481 17.5893 3.48828C19.1453 5.30175 20.0005 7.61244 20 10.002V10.002Z"},x={key:1,class:"path",d:"M20 10L16 6V9H8V11H16V14L20 10ZM18 16C16.7407 17.6791 14.985 18.9193 12.9817 19.5451C10.9783 20.1709 8.82884 20.1505 6.83772 19.4868C4.8466 18.8231 3.11478 17.5498 1.88758 15.8471C0.660374 14.1444 0 12.0988 0 10C0 7.90118 0.660374 5.85555 1.88758 4.1529C3.11478 2.45024 4.8466 1.17687 6.83772 0.513167C8.82884 -0.15054 10.9783 -0.170937 12.9817 0.454865C14.985 1.08067 16.7407 2.32094 18 4H15.27C14.1153 2.98166 12.6913 2.31814 11.1689 2.08906C9.64643 1.85997 8.09023 2.07506 6.68699 2.7085C5.28376 3.34194 4.09312 4.36683 3.25793 5.66019C2.42274 6.95354 1.9785 8.46042 1.9785 10C1.9785 11.5396 2.42274 13.0465 3.25793 14.3398C4.09312 15.6332 5.28376 16.6581 6.68699 17.2915C8.09023 17.9249 9.64643 18.14 11.1689 17.9109C12.6913 17.6819 14.1153 17.0183 15.27 16H18Z"};function y(t,e,c,n,a,s){return Object(i["B"])(),Object(i["h"])("svg",{class:"svg",width:c.width,height:c.height,viewBox:"0 0 20 20",fill:c.fill,xmlns:"http://www.w3.org/2000/svg"},[c.isEnter?(Object(i["B"])(),Object(i["h"])("path",w)):Object(i["g"])("",!0),c.isExit?(Object(i["B"])(),Object(i["h"])("path",x)):Object(i["g"])("",!0)],8,C)}c("a9e3");var B={name:"exit-enter",components:{},props:{fill:{type:String,default:"black"},width:{type:[String,Number],default:40},height:{type:[String,Number],default:40},isEnter:!1,isExit:!1},data:function(){return{}},created:function(){},mounted:function(){},methods:{}};B.render=y;var _=B,M={name:"Example04",components:{ExitEnter:_,ImageLazy:g["a"],SectionBasic:v["a"]},props:{},data:function(){return{idWallet:""}},created:function(){},mounted:function(){this.idWallet=this.generateId()},methods:{generateId:function(){var t=1e4,e=100,c=new Date;return"RANDOM-"+(Math.floor(Math.random()*(t-e+1))+e)+c.getDate()+"00000"+(Math.floor(Math.random()*(t-5*e))+e)+"-"+(Math.floor(Math.random()*(15*e))+e)}}};c("808b");M.render=m;e["default"]=M},"808b":function(t,e,c){"use strict";c("0087")},"81d5":function(t,e,c){"use strict";var i=c("7b0b"),n=c("23cb"),a=c("50c4");t.exports=function(t){var e=i(this),c=a(e.length),s=arguments.length,o=n(s>1?arguments[1]:void 0,c),l=s>2?arguments[2]:void 0,r=void 0===l?c:n(l,c);while(r>o)e[o++]=t;return e}},"93ee":function(t,e,c){},cb29:function(t,e,c){var i=c("23e7"),n=c("81d5"),a=c("44d2");i({target:"Array",proto:!0},{fill:n}),a("fill")},fca8:function(t,e,c){"use strict";c("93ee")}}]);
//# sourceMappingURL=chunk-2cce7198.7573e5c0.js.map