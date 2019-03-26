/*! vue-ydui v1.2.2 by YDCSS (c) 2018 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CitySelect=void 0;var o=i(81),s=n(o);e.CitySelect=s.default},1:function(t,e){t.exports=function(t,e,i,n){var o,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var c=r.computed||(r.computed={});Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}})}return{esModule:o,exports:s,options:r}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},3:function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=u[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(s(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(s(i.parts[o]));u[i.id]={id:i.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return h;n.parentNode.removeChild(n)}if(v){var s=m++;n=f||(f=o()),e=a.bind(null,n,s,!1),i=a.bind(null,n,s,!0)}else n=o(),e=r.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function r(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c="undefined"!=typeof document,l=i(4),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,m=0,p=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var o=l(t,e);return n(o),function(e){for(var i=[],s=0;s<o.length;s++){var a=o[s],r=u[a.id];r.refs--,i.push(r)}e?(o=l(t,e),n(o)):o=[];for(var s=0;s<i.length;s++){var r=i[s];if(0===r.refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete u[r.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var i=[],n={},o=0;o<e.length;o++){var s=e[o],a=s[0],r=s[1],c=s[2],l=s[3],u={id:t+":"+o,css:r,media:c,sourceMap:l};n[a]?n[a].parts.push(u):i.push(n[a]={id:a,parts:[u]})}return i}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(i){e||(e=!0,(i||document).addEventListener("touchmove",t))},unlock:function(i){e=!1,(i||document).removeEventListener("touchmove",t)}}}(),n=function(){return{lock:function(t){o&&l(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){o&&u(t||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),s=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,i=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||i.test(t)||n.test(t)},a=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var i=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===i||"auto"===i)return e;e=e.parentNode}return window},r=function(t,e){var i=t===window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,o=e.getBoundingClientRect().top-n,s=o+e.offsetHeight;return o>=0&&o<i||s>0&&s<=i},c=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){c(t,e)||(t.className=""===t.className?e:t.className+" "+e)},u=function(t,e){if(c(t,e)){for(var i=" "+t.className.replace(/[\t\r\n]/g,"")+" ";i.indexOf(" "+e+" ")>=0;)i=i.replace(" "+e+" "," ");t.className=i.replace(/^\s+|\s+$/g,"")}},d=function(t){function e(i,n,o){if(i===n)return void("function"==typeof s&&s());var a=i+o>n?n:i+o;i>n&&(a=i-o<n?n:i-o),t===window?window.scrollTo(a,a):t.scrollTop=a,window.requestAnimationFrame(function(){return e(a,n,o)})}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,s=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var a=Math.abs(i-n),r=Math.ceil(a/o*50);e(i,n,r)};e.pageScroll=i,e.preventScroll=n,e.isIOS=o,e.isColor=s,e.getScrollview=a,e.checkInview=r,e.addClass=l,e.removeClass=u,e.scrollTop=d},8:function(t,e,i){e=t.exports=i(2)(),e.push([t.id,".yd-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},9:function(t,e,i){i(11);var n=i(1)(i(12),i(10),null,null);t.exports=n.exports},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yd-mask",style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},11:function(t,e,i){var n=i(8);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(3)("c753dac2",n,!0)},12:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5);e.default={name:"yd-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.5},animated:{type:Boolean,default:!0}},watch:{value:function(t){var e=this;this.show=t,n.isIOS&&(t?(0,n.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,n.removeClass)(e.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var t={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(t.opacity=this.opacity,t["pointer-events"]="auto"),t}},mounted:function(){this.scrollView=(0,n.getScrollview)(this.$el)},beforeDestroy:function(){n.isIOS&&(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},54:function(t,e,i){e=t.exports=i(2)(),e.push([t.id,'.yd-cityselect{position:fixed;bottom:0;left:0;width:100%;height:75%;background-color:#fff;z-index:1502;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.yd-cityselect-active{-webkit-transform:translate(0);transform:translate(0)}.yd-cityselect-move-animate{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-cityselect-next{-webkit-transform:translate(-50%);transform:translate(-50%)}.yd-cityselect-prev{-webkit-transform:translate(0);transform:translate(0)}.yd-cityselect-header{position:absolute;top:0;left:0;width:100%;z-index:1}.yd-cityselect-header:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #bdbdbd;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cityselect-title{width:100%;font-size:.3rem;text-align:center;height:45px;line-height:45px;position:relative}.yd-cityselect-title:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cityselect-nav{width:100%;padding-left:10px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-cityselect-nav>a{font-size:13px;color:#222;display:block;height:40px;line-height:46px;padding:0 8px;position:relative;margin-right:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40%}.yd-cityselect-nav-active{color:#f23030!important}.yd-cityselect-nav-active:after{content:"";width:100%;height:2px;background-color:#f23030;position:absolute;bottom:1px;left:0;z-index:2}.yd-cityselect-content{height:100%;padding-top:85px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-cityselect-item{display:block;height:inherit;width:50%;-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:#fff}.yd-cityselect-item::-webkit-scrollbar{width:0}.yd-cityselect-item:nth-child(2n){background-color:#f5f5f5}.yd-cityselect-item-active{color:#f23030!important}.yd-cityselect-item-active:after{display:block;content:"\\E600";font-family:YDUI-INLAY}.yd-cityselect-item-box{width:100%;height:inherit;display:block;padding:0 20px}.yd-cityselect-item-box>a{color:#333;font-size:13px;height:40px;line-height:40px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;position:relative;z-index:1}.yd-cityselect-item-box>a:before{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-cityselect-item-box>a:active{background:none}.yd-cityselect-item-box>a span{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;text-overflow:ellipsis;line-height:16px;max-height:32.2px;font-size:13px}.yd-cityselect-loading{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:.26rem;color:#999}.yd-cityselect-loading svg{width:36px;height:36px}',""])},81:function(t,e,i){i(225);var n=i(1)(i(255),i(175),null,null);t.exports=n.exports},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("yd-mask",{ref:"mask",attrs:{opacity:t.maskerOpacity},nativeOn:{click:function(e){t.close(e)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),i("div",{staticClass:"yd-cityselect",class:t.show?"yd-cityselect-active":""},[i("div",{staticClass:"yd-cityselect-header"},[i("p",{staticClass:"yd-cityselect-title",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v(t._s(t.title))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"yd-cityselect-nav"},t._l(t.columnNum,function(e,n){return i("a",{directives:[{name:"show",rawName:"v-show",value:!!t.nav["txt"+e],expression:"!!nav['txt' + index]"}],key:n,class:e==t.navIndex?"yd-cityselect-nav-active":"",attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),t.navEvent(e)}}},[t._v(t._s(t.nav["txt"+e]))])}))]),t._v(" "),t.ready?t._e():i("div",{staticClass:"yd-cityselect-loading"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[i("path",{attrs:{stroke:"none",d:"M3 50A47 47 0 0 0 97 50A47 49 0 0 1 3 50",fill:"#bababa",transform:"rotate(317.143 50 51)"}},[i("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"0.6s",begin:"0s",repeatCount:"indefinite"}})],1)])]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"yd-cityselect-content",class:t.activeClasses},t._l(t.columnNum,function(e,n){return i("li",{key:n,ref:"itemBox"+e,refInFor:!0,staticClass:"yd-cityselect-item"},[t.columnsObj["columnItems"+e]&&t.columnsObj["columnItems"+e].length>0?[i("div",{staticClass:"yd-cityselect-item-box"},t._l(t.columnsObj["columnItems"+e],function(n,o){return i("a",{key:o,class:t.currentClass(n.v,n.n,e),attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),t.itemEvent(e,n.n,n.v,n.c)}}},[i("span",[t._v(t._s(n.n))])])}))]:[i("div",{staticClass:"yd-cityselect-item-box",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()}}})]],2)}))])],1)},staticRenderFns:[]}},225:function(t,e,i){var n=i(54);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(3)("2f0daec1",n,!0)},255:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(5),s=i(9),a=n(s);e.default={name:"yd-cityselect",components:{"yd-mask":a.default},data:function(){return{show:this.value,navIndex:1,nav:{txt1:this.chooseTitle,txt2:"",txt3:""},columnsObj:{},active:{},activeClasses:"",itemHeight:40,columnNum:1}},props:{ready:{type:Boolean,default:!0},provance:String,city:String,area:String,callback:Function,title:{type:String,default:"所在地区"},chooseTitle:{type:String,default:"请选择"},value:{type:Boolean,default:!1},items:{type:Array,required:!0},columns:{validator:function(t){return/^\d*$/.test(t)}},maskerOpacity:{validator:function(t){return/^([0]|[1-9]\d*)?(\.\d*)?$/.test(t)},default:.5}},watch:{value:function(t){o.isIOS&&(t?o.pageScroll.lock(this.$refs.mask.$el):o.pageScroll.unlock(this.$refs.mask.$el)),this.show=t},ready:function(t){t&&this.init()}},methods:{init:function(){var t=this;this.ready&&this.items&&this.items[0]&&this.isArray(this.items)&&(this.columns&&~~this.columns>1?this.columnNum=~~this.columns:this.getColumsNum(this.items[0]),this.columnsObj.columnItems1=this.items,this.provance&&this.$nextTick(function(){t.setDefalutValue(t.items,"provance",1)}),this.$on("ydui.cityselect.reset",function(){for(var e=1;e<=t.columnNum;e++)t.active["itemValue"+e]="",t.active["itemName"+e]="",e-1===0?(t.navIndex=e,t.nav["txt"+e]=t.chooseTitle,t.$refs["itemBox"+e][0].scrollTop=0,t.backoffView(!1)):(t.nav["txt"+e]="",t.columnsObj["columnItems"+e]=[]),e===t.columnNum&&t.returnValue()}))},navEvent:function(t){this.columnNum>2&&(t>=this.columnNum?this.forwardView(!0):this.backoffView(!0)),this.navIndex=t},itemEvent:function(t,e,i,n){if(this.active["itemValue"+t]=i,this.active["itemName"+t]=e,this.nav["txt"+t]=e,this.columnsObj["columnItems"+(t+1)]=n,t>1&&n&&n.length>0&&this.columnNum>2&&this.forwardView(!0),this.clearNavTxt(t),t===this.columnNum||n.length<=0){if(t!==this.columnNum)for(var o=this.columnNum;o>=0;o--)o>t&&(this.active["itemValue"+o]="",this.active["itemName"+o]="",this.nav["txt"+o]="");this.navIndex=t,this.returnValue()}else this.navIndex=t+1,this.nav["txt"+(t+1)]=this.chooseTitle},currentClass:function(t,e,i){return t&&t==this.active["itemValue"+i]||e&&e===this.active["itemName"+i]?"yd-cityselect-item-active":""},clearNavTxt:function(t){for(var e=0;e<this.columnNum;e++)e>t&&(this.nav["txt"+(e+1)]="")},getColumsNum:function(t){this.isArray(t.c)&&(this.columnNum++,this.getColumsNum(t.c[0]))},isArray:function(t){return t&&t.constructor===Array&&t.length>0},setDefalutValue:function(t,e,i){var n=this;t.every(function(t,o){if(t.v==n[e]||t.n===n[e]){var s=n.columnsObj["columnItems"+(i+1)]=t.c,a=n.$refs["itemBox"+i][0];return a.scrollTop=o*n.itemHeight-a.offsetHeight/3,n.active["itemValue"+i]=t.v,n.active["itemName"+i]=t.n,n.nav["txt"+i]=t.n,n.navIndex=i,++i,i>=n.columnNum&&n.columnNum>2&&n.forwardView(!1),n.isArray(s)&&n.setDefalutValue(s,["","provance","city","area"][i],i),!1}return!0})},returnValue:function(){this.callback&&this.callback(this.active),this.close()},close:function(){this.$emit("input",!1),this.show=!1},backoffView:function(t){this.activeClasses=(t?"yd-cityselect-move-animate":"")+" yd-cityselect-prev"},forwardView:function(t){this.activeClasses=(t?"yd-cityselect-move-animate":"")+" yd-cityselect-next"}},mounted:function(){this.init()},beforeDestroy:function(){this.close()}}}})});