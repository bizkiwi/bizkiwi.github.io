/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{387:function(Da,wa,w){w.r(wa);var qa=w(1);Da=w(49);var ka=w(352),ja=w(215),ha=w(20),ea=window;w=function(){function z(r){var x=this;this.d9=function(f){return f&&("image"===f.type.split("/")[0].toLowerCase()||f.name&&!!f.name.match(/.(jpg|jpeg|png|gif)$/i))};this.file=r;this.q9=new Promise(function(f){return Object(qa.b)(x,void 0,void 0,function(){var a;return Object(qa.d)(this,function(b){switch(b.label){case 0:return this.d9(this.file)?
[4,Object(ja.b)(r)]:[3,2];case 1:a=b.da(),this.file=ha.o?new Blob([a],{type:r.type}):new File([a],null===r||void 0===r?void 0:r.name,{type:r.type}),b.label=2;case 2:return f(!0),[2]}})})})}z.prototype.getFileData=function(r){var x=this,f=new FileReader;f.onload=function(a){x.trigger(z.Events.DOCUMENT_LOADING_PROGRESS,[a.loaded,a.loaded]);r(new Uint8Array(a.target.result))};f.onprogress=function(a){a.lengthComputable&&x.trigger(z.Events.DOCUMENT_LOADING_PROGRESS,[a.loaded,0<a.total?a.total:0])};f.readAsArrayBuffer(this.file)};
z.prototype.getFile=function(){return Object(qa.b)(this,void 0,Promise,function(){return Object(qa.d)(this,function(r){switch(r.label){case 0:return[4,this.q9];case 1:return r.da(),ea.utils.isJSWorker?[2,this.file.path]:[2,this.file]}})})};z.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress"};return z}();Object(Da.a)(w);Object(ka.a)(w);Object(ka.b)(w);wa["default"]=w}}]);}).call(this || window)
