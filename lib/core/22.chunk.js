/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[22],{401:function(Da,wa,w){w.r(wa);var qa=w(1),ka=w(12),ja=w(2);Da=w(49);var ha=w(29),ea=w(10);w=function(){function z(){this.init()}z.prototype.init=function(){this.u1=!1;this.Se=this.ek=this.connection=null;this.tq={};this.ia=this.UC=null};z.prototype.Yfa=function(r){for(var x=this,f=0;f<r.length;++f){var a=r[f];switch(a.at){case "create":this.tq[a.author]||(this.tq[a.author]=a.aName);this.y8(a);break;case "modify":this.ia.Ek(a.xfdf).then(function(b){x.ia.ub(b[0])});
break;case "delete":this.ia.Ek("<delete><id>"+a.aId+"</id></delete>")}}};z.prototype.y8=function(r){var x=this;this.ia.Ek(r.xfdf).then(function(f){f=f[0];f.authorId=r.author;x.ia.ub(f);x.ia.trigger(ka.a.UPDATE_ANNOTATION_PERMISSION,[f])})};z.prototype.Y7=function(r,x,f){this.ek&&this.ek(r,x,f)};z.prototype.preloadAnnotations=function(r){this.addEventListener("webViewerServerAnnotationsEnabled",this.Y7.bind(this,r,"add",{imported:!1}),{once:!0})};z.prototype.initiateCollaboration=function(r,x,f){var a=
this;if(r){a.Se=x;a.ia=f.pa();f.addEventListener(ka.c.DOCUMENT_UNLOADED,function(){a.disableCollaboration()});a.vga(r);var b=new XMLHttpRequest;b.addEventListener("load",function(){if(200===b.status&&0<b.responseText.length)try{var e=JSON.parse(b.responseText);a.connection=exports.bb.Vga(Object(ha.j)(a.Se,"blackbox/"),"annot");a.UC=e.id;a.tq[e.id]=e.user_name;a.ia.CJ(e.id);a.connection.eK(function(h){h.t&&h.t.startsWith("a_")&&h.data&&a.Yfa(h.data)},function(){a.connection.send({t:"a_retrieve",dId:r});
a.trigger(z.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[a.tq[e.id],a.UC])},function(){a.disableCollaboration()})}catch(h){Object(ja.f)(h.message)}});b.open("GET",Object(ha.j)(this.Se,"demo/SessionInfo.jsp"));b.withCredentials=!0;b.send();a.u1=!0;a.ia.HU(function(e){return a.tq[e.Author]||e.Author})}else Object(ja.f)("Document ID required for collaboration")};z.prototype.disableCollaboration=function(){this.ek&&(this.ia.removeEventListener(ea.a.Events.ANNOTATION_CHANGED,this.ek),this.ek=null);this.connection&&
this.connection.RF();this.ia&&this.ia.CJ("Guest");this.init();this.trigger(z.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)};z.prototype.vga=function(r){var x=this;this.ek&&this.ia.removeEventListener(ea.a.Events.ANNOTATION_CHANGED,this.ek);this.ek=function(f,a,b){return Object(qa.b)(this,void 0,void 0,function(){var e,h,n,aa,y,ba,da,fa,ia;return Object(qa.d)(this,function(ca){switch(ca.label){case 0:if(b.imported)return[2];e={t:"a_"+a,dId:r,annots:[]};return[4,x.ia.WF()];case 1:h=ca.da();"delete"!==
a&&(n=(new DOMParser).parseFromString(h,"text/xml"),aa=new XMLSerializer);for(y=0;y<f.length;y++)ba=f[y],fa=da=void 0,"add"===a?(da=n.querySelector('[name="'+ba.Id+'"]'),fa=aa.serializeToString(da),ia=null,ba.InReplyTo&&(ia=x.ia.Cf(ba.InReplyTo).authorId||"default"),e.annots.push({at:"create",aId:ba.Id,author:x.UC,aName:x.tq[x.UC],parent:ia,xfdf:"<add>"+fa+"</add>"})):"modify"===a?(da=n.querySelector('[name="'+ba.Id+'"]'),fa=aa.serializeToString(da),e.annots.push({at:"modify",aId:ba.Id,xfdf:"<modify>"+
fa+"</modify>"})):"delete"===a&&e.annots.push({at:"delete",aId:ba.Id});0<e.annots.length&&x.connection.send(e);return[2]}})})}.bind(x);this.ia.addEventListener(ea.a.Events.ANNOTATION_CHANGED,this.ek)};z.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"};return z}();Object(Da.a)(w);wa["default"]=w}}]);}).call(this || window)