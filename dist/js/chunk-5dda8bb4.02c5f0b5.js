(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dda8bb4"],{"107c":function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),l=n("1d80"),a=n("4840"),o=n("8aa5"),s=n("50c4"),u=n("14c3"),d=n("9263"),b=n("9f7f"),p=n("d039"),f=b.UNSUPPORTED_Y,h=[].push,v=Math.min,x=4294967295,g=!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(l(this)),c=void 0===n?x:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,c);var a,o,s,u=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=new RegExp(t.source,b+"g");while(a=d.call(f,r)){if(o=f.lastIndex,o>p&&(u.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&h.apply(u,a.slice(1)),s=a[0].length,p=o,u.length>=c))break;f.lastIndex===a.index&&f.lastIndex++}return p===r.length?!s&&f.test("")||u.push(""):u.push(r.slice(p)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=l(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,i,n):r.call(String(i),e,n)},function(t,i){var l=n(r,this,t,i,r!==e);if(l.done)return l.value;var d=c(this),b=String(t),p=a(d,RegExp),h=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(f?"g":"y"),O=new p(f?"^(?:"+d.source+")":d,g),m=void 0===i?x:i>>>0;if(0===m)return[];if(0===b.length)return null===u(O,b)?[b]:[];var j=0,_=0,y=[];while(_<b.length){O.lastIndex=f?0:_;var k,E=u(O,f?b.slice(_):b);if(null===E||(k=v(s(O.lastIndex+(f?_:0)),b.length))===j)_=o(b,_,h);else{if(y.push(b.slice(j,_)),y.length===m)return y;for(var w=1;w<=E.length-1;w++)if(y.push(E[w]),y.length===m)return y;_=j=k}}return y.push(b.slice(j)),y}]}),!g,f)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"2e51":function(t,e,n){"use strict";n("ab29")},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),l=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==i(t))}},"459e":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i=Object(r["C"])("data-v-47fb247d");Object(r["t"])("data-v-47fb247d");var c={class:"exp exp__block block hide-scrollbar"},l=Object(r["h"])("div",{class:"br"},null,-1),a={class:"block__content"},o={class:"block__text block-text"},s={class:"block-text__block1"};Object(r["r"])();var u=i((function(t,e,n,i,u,d){var b=Object(r["x"])("MyTitle"),p=Object(r["x"])("TimelineSimple");return Object(r["q"])(),Object(r["e"])("section",c,[Object(r["h"])(b,{txtTitle:"Мой опыт",visitsCount:t.$store.state.visitsPageExp},null,8,["visitsCount"]),l,Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("div",s,[Object(r["h"])(p,{itemsArray:t.dataForSplit01},null,8,["itemsArray"])])])])])})),d=Object(r["C"])("data-v-6c483b68");Object(r["t"])("data-v-6c483b68");var b={class:"content split-section"},p={class:"grid split-section__grid"},f={class:"split-section__block-left block-left"},h={class:"txt txt-white block-left__title"},v={class:"split-section__block-right block-right"},x={class:"block-right__inner"},g={class:"row block-right__row"},O={class:"txt txt-white block-right__title"},m={class:"txt txt-white block-right__subtitle"},j=Object(r["h"])("div",{class:"line"},null,-1),_={class:"row block-right__row"},y={class:"txt txt-white block-right__activity"},k={class:"row block-right__row"},E={class:"txt txt-white block-right__used-tools"};Object(r["r"])();var w=d((function(t,e,n,i,c,l){return Object(r["q"])(),Object(r["e"])("div",b,[Object(r["h"])("div",p,[Object(r["h"])("div",f,[Object(r["h"])("h2",h,Object(r["z"])(n.itemsArray.companyName),1)]),Object(r["h"])("div",v,[Object(r["h"])("div",x,[Object(r["h"])("div",g,[Object(r["h"])("div",O,"Позиция: "+Object(r["z"])(n.itemsArray.companyPosition),1),Object(r["h"])("div",m,"Период: "+Object(r["z"])(n.itemsArray.rangeYears),1),j]),Object(r["h"])("div",_,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(l.splitArray(n.itemsArray.myActivity),(function(t){return Object(r["q"])(),Object(r["e"])("div",y,Object(r["z"])(t),1)})),256))]),Object(r["h"])("div",k,[Object(r["h"])("div",E,"Дополнительные инструменты: "+Object(r["z"])(n.itemsArray.usedTools),1)])])])])])})),I=(n("ac1f"),n("1276"),{name:"TimelineSimple",components:{},data:function(){return{}},props:["itemsArray"],created:function(){},mounted:function(){},unmounted:function(){},methods:{splitArray:function(t){return t.split("+")}}});n("bdab");I.render=w,I.__scopeId="data-v-6c483b68";var R=I,A={name:"Experience",components:{TimelineSimple:R},data:function(){return{dataForSplit01:{companyName:"TopBroker",companyPosition:"FrontEnd Developer",rangeYears:"2021.02 - 2021.08",myActivity:" Верстка макетов из фигмы + Исправление макетов на фигме + Создание сложных анимаций на чистом JS + Добавление и исправление функционала JS, модулей + Создание форм для отправки + Корректировка изображений + Ежедневное общение с бэкенд и фуллстек девелоперами, для четкого разделения и исполнения задач + Внедрение кода с бэка на сайты + Многочисленные правки, создание системы модулей, миксинов для легкого и быстрого внесения изменеий + Создание макетов для отправки писем + Обучение(переобучение) стажеров верстальщиков + Создание аналога бутстрапа для быстрой верстки проектов + Создание и внедрение функционала PWA",usedTools:"PUG, SCSS, JS, VUE, Gulp, Webpack, VUE-CLI, Git"}}},created:function(){},mounted:function(){},unmounted:function(){},methods:{}};n("2e51");A.render=u,A.__scopeId="data-v-47fb247d";e["default"]=A},7008:function(t,e,n){},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=n("5692"),l=n("7c73"),a=n("69f3").get,o=n("fce3"),s=n("107c"),u=RegExp.prototype.exec,d=c("native-string-replace",String.prototype.replace),b=u,p=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),f=i.UNSUPPORTED_Y||i.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],v=p||h||f||o||s;v&&(b=function(t){var e,n,i,c,o,s,v,x=this,g=a(x),O=g.raw;if(O)return O.lastIndex=x.lastIndex,e=b.call(O,t),x.lastIndex=O.lastIndex,e;var m=g.groups,j=f&&x.sticky,_=r.call(x),y=x.source,k=0,E=t;if(j&&(_=_.replace("y",""),-1===_.indexOf("g")&&(_+="g"),E=String(t).slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==t[x.lastIndex-1])&&(y="(?: "+y+")",E=" "+E,k++),n=new RegExp("^(?:"+y+")",_)),h&&(n=new RegExp("^"+y+"$(?!\\s)",_)),p&&(i=x.lastIndex),c=u.call(j?n:x,E),j?c?(c.input=c.input.slice(k),c[0]=c[0].slice(k),c.index=x.lastIndex,x.lastIndex+=c[0].length):x.lastIndex=0:p&&c&&(x.lastIndex=x.global?c.index+c[0].length:i),h&&c&&c.length>1&&d.call(c[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&m)for(c.groups=s=l(null),o=0;o<m.length;o++)v=m[o],s[v[0]]=c[v[1]];return c}),t.exports=b},"9f7f":function(t,e,n){var r=n("d039"),i=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ab29:function(t,e,n){},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bdab:function(t,e,n){"use strict";n("7008")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),c=n("d039"),l=n("b622"),a=n("9112"),o=l("species"),s=RegExp.prototype;t.exports=function(t,e,n,u){var d=l(t),b=!c((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=b&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!b||!p||n){var f=/./[d],h=e(d,""[t],(function(t,e,n,r,c){var l=e.exec;return l===i||l===s.exec?b&&!c?{done:!0,value:f.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(s,d,h[1])}u&&a(s[d],"sham",!0)}},fce3:function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-5dda8bb4.02c5f0b5.js.map