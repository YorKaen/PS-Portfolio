(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5010a9ec"],{"234a":function(t,e,c){},"734c":function(t,e,c){"use strict";var s=c("7a23");function a(t,e,c,a,i,n){return Object(s["B"])(),Object(s["h"])("section",{class:Object(s["s"])(["clearfix",c.srcName])},[Object(s["i"])("div",{class:Object(s["s"])(["section-container",{"bg-primary":c.isFill},c.isFull?"container-full":"container"])},[n.hasTitleSlot?(Object(s["B"])(),Object(s["h"])("div",{key:0,class:Object(s["s"])(["title",c.srcName+"__title"])},[Object(s["I"])(t.$slots,"title",{},void 0,!0)],2)):Object(s["g"])("",!0),n.hasContentSlot?(Object(s["B"])(),Object(s["h"])("div",{key:1,class:Object(s["s"])(["content",c.srcName+"__content"])},[Object(s["I"])(t.$slots,"content",{},void 0,!0)],2)):Object(s["g"])("",!0),c.isSplit?(Object(s["B"])(),Object(s["h"])("div",{key:2,class:Object(s["s"])(["content-split",c.srcName+"__content",n.howAdaptive])},[Object(s["i"])("div",{class:Object(s["s"])(["content-left",c.srcName+"__content-left"])},[Object(s["I"])(t.$slots,"content-left",{},void 0,!0)],2),Object(s["i"])("div",{class:Object(s["s"])(["content-right",c.srcName+"__content-right"])},[Object(s["I"])(t.$slots,"content-right",{},void 0,!0)],2)],2)):Object(s["g"])("",!0)],2)],2)}var i={name:"SectionBasic",components:{},props:{srcName:String,isFull:Boolean,isFill:Boolean,isSplit:Boolean,adaptiveMD:{type:Boolean,default:!1},adaptiveLG:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},mounted:function(){},methods:{},computed:{hasTitleSlot:function(){return!!this.$slots.title},hasContentSlot:function(){return!!this.$slots.content},howAdaptive:function(){return this.adaptiveMD?"adaptive-md":this.adaptiveLG?"adaptive-lg":void 0}}};c("fca8");i.render=a,i.__scopeId="data-v-13b8e5f2";e["a"]=i},"93ee":function(t,e,c){},a796:function(t,e,c){"use strict";c("234a")},da64:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),a={id:"example-page-5"},i={class:"dorn-page bg-brick"},n={class:"wrapper-dorn txt-center p-4 blue-box-full"},l={class:"txt-primary txt-allcaps"},o=Object(s["i"])("span",{class:"shadow-neon"},"Do",-1),r=Object(s["i"])("span",{class:"shadow-neon"},"ble",-1),b=Object(s["i"])("span",{class:"shadow-neon"}," o",-1),d=Object(s["i"])("span",{class:"shadow-neon"}," no",-1),h=Object(s["i"])("span",{class:"shadow-neon"},"ing!",-1),u={class:"wrapper-display mr-a ml-a blue-box bg-dark p-4 d-grid center-text"},O={class:"row d-flex flex-col mb-4"},j=Object(s["i"])("h2",{class:"txt-white txt"},"БАНК",-1),p={class:"txt txt-primary"},f={class:"row d-flex flex-col mb-4"},m=Object(s["i"])("h2",{class:"txt-white txt"},"Ваш Баланс",-1),k={class:"txt txt-primary"},x={class:"row d-flex mb-4 flex-center"},v={key:0,class:"txt txt-secondary txt-allcaps"},B={class:"row d-flex mb-4 flex-center trans"},w=["disabled"],y={key:0,class:"txt-1 txt-white"},g={key:1,class:"txt-1 txt-white"},S=["disabled"],N=Object(s["i"])("div",{class:"txt-1 txt-white"},"Забрать",-1),D=[N],_=Object(s["i"])("section",null,null,-1);function R(t,e,c,N,R,M){var A=Object(s["J"])("section-basic");return Object(s["B"])(),Object(s["h"])("div",a,[Object(s["i"])("div",i,[Object(s["l"])(A,{class:"pt-4","src-name":"dorn",isFull:""},{content:Object(s["R"])((function(){return[Object(s["i"])("div",n,[Object(s["i"])("h1",l,[o,Object(s["i"])("span",{class:"anim-flicker shadow-neon",style:Object(s["t"])(M.getRandomDelay())},"u",4),r,b,Object(s["i"])("span",{class:"shadow-neon anim-flicker",style:Object(s["t"])(M.getRandomDelay())},"r",4),d,Object(s["i"])("span",{class:"shadow-neon anim-flicker",style:Object(s["t"])(M.getRandomDelay())},"th",4),h])])]})),_:1}),Object(s["l"])(A,{"src-name":"display"},{content:Object(s["R"])((function(){return[Object(s["i"])("div",u,[Object(s["i"])("div",O,[j,Object(s["i"])("h3",p,Object(s["N"])(t.Bank),1)]),Object(s["i"])("div",f,[m,Object(s["i"])("h3",k,Object(s["N"])(t.Balance),1)]),Object(s["i"])("div",x,[t.Streak>0?(Object(s["B"])(),Object(s["h"])("h3",v,"Double X "+Object(s["N"])(t.Streak),1)):(Object(s["B"])(),Object(s["h"])("h3",{key:1,class:Object(s["s"])(["txt txt-danger txt-allcaps hide",t.hideClass])},Object(s["N"])(t.txtResult),3))]),Object(s["i"])("div",B,[Object(s["i"])("button",{class:Object(s["s"])(["btn",{isDisabled:!t.clickAllowed}]),onClick:e[0]||(e[0]=function(t){return M.rollDouble()}),disabled:!t.clickAllowed},[t.Streak<1?(Object(s["B"])(),Object(s["h"])("div",y,"Начать игру")):(Object(s["B"])(),Object(s["h"])("div",g,"Увеличить ставку"))],10,w),Object(s["l"])(s["b"],{name:"right"},{default:Object(s["R"])((function(){return[t.Bank>0?(Object(s["B"])(),Object(s["h"])("button",{key:0,class:"btn ml-4",onClick:e[1]||(e[1]=function(t){return M.takeBank()}),disabled:!t.clickAllowed},D,8,S)):Object(s["g"])("",!0)]})),_:1})])])]})),_:1}),_])])}var M=c("734c"),A=c("98ea"),C={name:"Example05",components:{ImageLazy:A["a"],SectionBasic:M["a"]},props:{},data:function(){return{Balance:1e3,Bank:0,ScoreMultiplier:5,Streak:0,clickAllowed:!0,txtResult:"",hideClass:"hide-not"}},created:function(){},mounted:function(){},methods:{smoothNumber:function(t,e){var c=this;t<=e&&(this.Bank=t,setTimeout((function(){c.smoothNumber(t+1,e)}),20)),t===e&&(this.clickAllowed=!0)},rollDouble:function(){if(this.Balance>0){this.hideClass="hide-not",this.txtResult="Роллим",this.clickAllowed=!1,this.Balance-=this.ScoreMultiplier,this.checkStreak();var t=this.Bank,e=this.Bank;e+=this.Streak*this.ScoreMultiplier,this.smoothNumber(t,e)}else this.txtResult="Баланс на нуле"},checkStreak:function(){var t=Math.floor(100*Math.random());return t>=30?this.Streak++:(this.hideDelay(),this.txtResult="NOTHING",this.Streak=0,this.Bank=0,this.Streak)},takeBank:function(){this.Balance+=this.Bank,this.txtResult="Пополняем банк на "+this.Bank,this.hideDelay(),this.Bank=0,this.Streak=0},getRandomDelay:function(){return{animationDelay:Math.floor(5*Math.random())+1+"s"}},hideDelay:function(){var t=this;setTimeout((function(){t.hideClass="hide-this"}),200)}},computed:{}};c("a796");C.render=R;e["default"]=C},fca8:function(t,e,c){"use strict";c("93ee")}}]);
//# sourceMappingURL=chunk-5010a9ec.b8bc1ba2.js.map