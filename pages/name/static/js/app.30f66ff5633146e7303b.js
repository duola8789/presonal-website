webpackJsonp([1],{AC0M:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o=s("zL8q"),c=s.n(o),l=(s("tvR6"),["府","宙","秉","舍","承","岸","玖","松","宗","昂","岱","附","庚","沅","昀","易","妮","其","姗","宛","汶","沂","宜"]),i=["偿","鸿","徽","键","鞠","骏","励","联","沣","与","蔓","谦","蔚","泽","斋"],r={name:"NameChoice",data:function(){return{first:"李",seconds:l,thirds:i,chosenSeconds:[],chosenThirds:[]}},mounted:function(){var e=window.localStorage.getItem("chosenSeconds"),t=window.localStorage.getItem("chosenThirds");e&&t&&(this.chosenSeconds=e.split("@"),this.chosenThirds=t.split("@"))},methods:{getAll:function(e,t){for(var s=[],n=0;n<e.length;n++)for(var o=0;o<t.length;o++)s.push("李"+e[n]+t[o]);return s},reset:function(){this.chosenSeconds=[],this.chosenThirds=[],window.localStorage.clear()}},computed:{tempResult:function(){if(this.chosenSeconds.length&&this.chosenThirds.length)return window.localStorage.setItem("chosenSeconds",this.chosenSeconds.join("@")),window.localStorage.setItem("chosenThirds",this.chosenThirds.join("@")),this.getAll(this.chosenSeconds,this.chosenThirds)}}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("div",{staticClass:"hello-inner"},[s("h1",{staticClass:"title"},[e._v(" 李漂亮选名大会 ")]),e._v(" "),s("el-button",{on:{click:e.reset}},[e._v("重置")]),e._v(" "),s("el-checkbox-group",{staticClass:"checkbox-container",model:{value:e.chosenSeconds,callback:function(t){e.chosenSeconds=t},expression:"chosenSeconds"}},e._l(e.seconds,function(e){return s("el-checkbox-button",{key:e,attrs:{label:e,border:""}})})),e._v(" "),s("el-checkbox-group",{staticClass:"checkbox-container",model:{value:e.chosenThirds,callback:function(t){e.chosenThirds=t},expression:"chosenThirds"}},e._l(e.thirds,function(e){return s("el-checkbox-button",{key:e,attrs:{label:e}})}))],1),e._v(" "),e.tempResult&&e.tempResult.length?s("div",{staticClass:"result-container"},[s("h2",{staticClass:"title"},[e._v("嗯，就从这里选吧（"+e._s(e.tempResult.length)+"个）")]),e._v(" "),e._l(e.tempResult,function(t){return s("el-tag",{key:t,staticClass:"result-item",attrs:{type:"success"}},[e._v(e._s(t))])})],2):e._e()])},staticRenderFns:[]};var a=s("VU/8")(r,h,!1,function(e){s("AC0M")},null,null).exports;n.default.use(c.a),new n.default({el:"#app",components:{App:a},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.30f66ff5633146e7303b.js.map