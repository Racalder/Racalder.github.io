(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d14d8d"],{"1dde":function(t,e,n){var i=n("d039"),o=n("b622"),s=n("2d00"),r=o("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").filter,s=n("1dde"),r=n("ae40"),c=s("filter"),d=r("filter");i({target:"Array",proto:!0,forced:!c||!d},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var i=n("861d"),o=n("e8b5"),s=n("b622"),r=s("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[r],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},ae40:function(t,e,n){var i=n("83ab"),o=n("d039"),s=n("5135"),r=Object.defineProperty,c={},d=function(t){throw t};t.exports=function(t,e){if(s(c,t))return c[t];e||(e={});var n=[][t],a=!!s(e,"ACCESSORS")&&e.ACCESSORS,l=s(e,0)?e[0]:d,u=s(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(a&&!i)return!0;var t={length:-1};a?r(t,1,{enumerable:!0,get:d}):t[1]=1,n.call(t,l,u)}))}},b64b:function(t,e,n){var i=n("23e7"),o=n("7b0b"),s=n("df75"),r=n("d039"),c=r((function(){s(1)}));i({target:"Object",stat:!0,forced:c},{keys:function(t){return s(o(t))}})},b727:function(t,e,n){var i=n("0366"),o=n("44ad"),s=n("7b0b"),r=n("50c4"),c=n("65f0"),d=[].push,a=function(t){var e=1==t,n=2==t,a=3==t,l=4==t,u=6==t,m=5==t||u;return function(f,b,h,v){for(var y,x,p=s(f),I=o(p),S=i(b,h,3),C=r(I.length),T=0,k=v||c,w=e?k(f,C):n?k(f,0):void 0;C>T;T++)if((m||T in I)&&(y=I[T],x=S(y,T,p),t))if(e)w[T]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return T;case 2:d.call(w,y)}else if(l)return!1;return u?-1:a||l?l:w}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home-statement",{attrs:{statementInfo:t.activeHomeInfo}})},o=[],s=(n("4de4"),n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 mx-3 border border-dark w-75"},[n("div",{attrs:{id:"home-title-text"}},[t._v(t._s(t.statementInfo.t))]),n("div",{attrs:{id:"home-desc-text"}},[t._v(t._s(t.statementInfo.d))]),n("div",{staticClass:"d-flex justify-content-center"},[n("div",{class:t.selectedIndicator[0],on:{click:t.selectStatement0}}),n("div",{class:t.selectedIndicator[1],on:{click:t.selectStatement1}}),n("div",{class:t.selectedIndicator[2],on:{click:t.selectStatement2}}),n("div",{class:t.selectedIndicator[3],on:{click:t.selectStatement3}})]),n("div",{staticClass:"btn"},[t._v(" SEE work")])])}),r=[],c={data:function(){return{selectedStatement:0,indicator0:["btn btn-secondary mx-3","btn btn-outline-secondary mx-3","btn btn-outline-secondary mx-3","btn btn-outline-secondary mx-3"],indicator1:["btn btn-outline-secondary mx-3","btn btn-secondary mx-3","btn btn-outline-secondary mx-3","btn btn-outline-secondary mx-3"],indicator2:["btn btn-outline-secondary mx-3","btn btn-outline-secondary mx-3","btn btn-secondary mx-3","btn btn-outline-secondary mx-3"],indicator3:["btn btn-outline-secondary mx-3","btn btn-outline-secondary mx-3","btn btn-outline-secondary mx-3","btn btn-secondary mx-3"],selectedIndicator:[]}},props:["statementInfo"],methods:{selectStatement0:function(){this.selectedIndicator=this.indicator0},selectStatement1:function(){this.selectedIndicator=this.indicator1},selectStatement2:function(){this.selectedIndicator=this.indicator2},selectStatement3:function(){this.selectedIndicator=this.indicator3}},created:function(){this.selectedIndicator=this.indicator0}},d=c,a=n("2877"),l=Object(a["a"])(d,s,r,!1,null,null,null),u=l.exports,m={data:function(){return{homeInfo:[{t:"Ramiro Calderon 1",d:"This is some descritonThis is some descritonThis is some descritonThis is some descriton",i:!0,iClass:"btn btn-secondary",ind:0},{t:"Ramiro Calderon 2",d:"This is some descritonThis is some descritonThis is some descritonThis is some descriton",i:!1,iClass:"btn btn-outline-secondary",ind:1},{t:"Ramiro Caldeon 3",d:"This is some descritonThis is some descritonThis is some descritonThis is some descriton",i:!1,iClass:"btn btn-outline-secondary",ind:2},{t:"Ramiro Caldeon 4",d:"This is some descritonThis is some descritonThis is some descritonThis is some descriton",i:!1,iClass:"btn btn-outline-secondary",ind:3}],homeSelected:0}},methods:{homeSelect:function(t){this.homeInfo[this.homeSelected].i=!1,this.homeInfo[this.homeSelected].iClass="btn btn-outline-secondary",this.homeInfo[t].i=!0,this.homeInfo[t].iClass="btn btn-secondary",this.homeSelected=t}},computed:{activeHomeInfo:function(){return this.homeInfo[Object.keys(this.homeInfo.filter((function(t){return t.i})))[0]]}},components:{"home-statement":u}},f=m,b=Object(a["a"])(f,i,o,!1,null,null,null);e["default"]=b.exports},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-37d14d8d.4e0c9fa7.js.map