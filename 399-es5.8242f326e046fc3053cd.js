!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[399],{79399:function(n,o,r){"use strict";r.r(o),r.d(o,{SettingsModule:function(){return y}});var a=r(3679),i=r(54436),c=r(33935),l=r(76627),s=r(51095),d=r(4929),m=r(26922),g=r(68965),f=r(99763),h=r(37716),p=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-components"]],decls:1,vars:0,template:function(t,e){1&t&&h["\u0275\u0275element"](0,"router-outlet")},directives:[f.lC],encapsulation:2}),t}(),b=r(44957),u=r(3564),_=r(95847),M=r(38583);function C(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"nb-option",21),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;h["\u0275\u0275property"]("value",n),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](n)}}var O,P,x=[{path:"",component:p,children:[{path:"",component:(O=function(){function n(t,o,r,a){e(this,n),this.userService=t,this.sessionService=o,this.cotacoesService=r,this.toastrService=a,this.form={school:"",default_percent_manager:50,coin:"brl"},this.options=["aed","ars","aud","bch","bdt","bhd","bits","bmd","bnb","brl","btc","cad","chf","clp","cny","czk","dkk","dot","eos","eth","eur","gbp","hkd","huf","idr","ils","inr","jpy","krw","kwd","link","lkr","ltc","mmk","mxn","myr","ngn","nok","nzd","php","pkr","pln","rub","sar","sats","sek","sgd","thb","try","twd","uah","usd","vef","vnd","xag","xau","xdr","xlm","xrp","yfi","zar"],this.init(),this.onLogin()}var o,r,a;return o=n,(r=[{key:"init",value:function(){this.user=this.sessionService.get("user"),this.userDB=this.sessionService.get("userDB",this.userDB),this.userDB&&(this.form={school:this.userDB.school,default_percent_manager:this.userDB.default_percent_manager,coin:this.userDB.coin})}},{key:"defaultState",value:function(){this.user=null,this.form={school:"",default_percent_manager:50,coin:"brl"}}},{key:"updateSettings",value:function(){var t=this;this.userDB?this.userService.updateSettings(this.form,function(){t.userDB.school=t.form.school,t.userDB.coin=t.form.coin,t.userDB.default_percent_manager=t.form.default_percent_manager;var e={status:"success",destroyByClick:!0,duration:5e3,hasIcon:!0,position:m.fe3.TOP_RIGHT,preventDuplicates:!0};t.cotacoesService.triggerUpdateCotacoes(),t.toastrService.show("Settings updated with success \n".concat(t.userDB.schoo),"Alert",e)}):this.toastrService.show("Please singin to enable update settings","Alert",{status:"danger",destroyByClick:!0,duration:5e3,hasIcon:!0,position:m.fe3.TOP_RIGHT,preventDuplicates:!0})}},{key:"onLogin",value:function(){var t=this;this.userService.onLogin().subscribe(function(e){"login"==e?t.init():"logout"==e&&t.defaultState()})}}])&&t(o.prototype,r),a&&t(o,a),n}(),O.\u0275fac=function(t){return new(t||O)(h["\u0275\u0275directiveInject"](b.f),h["\u0275\u0275directiveInject"](u.m),h["\u0275\u0275directiveInject"](_.Q),h["\u0275\u0275directiveInject"](m.quB))},O.\u0275cmp=h["\u0275\u0275defineComponent"]({type:O,selectors:[["ngx-settings"]],decls:32,vars:5,consts:[[1,"lists","row"],[1,"col-md-12","col-lg-12"],[1,"ngx-status-card"],[1,"col-md-12"],["nbButton","",1,"btn-acoes",3,"click"],["size","large",1,"list-card"],[1,"row"],[1,"col-sm-5","col-md-3","col-xxxl-4"],[1,"row",2,"padding","30px","max-width","calc(100% - 15px)"],[1,"col-sm-11","col-md-8","col-lg-6"],[1,"form-group"],["for","inputFirstName",1,"label"],["type","text","nbInput","","fullWidth","","id","inputRonin","placeholder","School name",3,"ngModel","ngModelChange"],[1,"col-sm-1","col-md-4","col-lg-6"],[1,"col-sm-6","col-md-5","col-lg-3"],["for","inputLastName",1,"label",2,"width","100%"],["thumbLabel","","tickInterval","1","step","1","min","0","max","100","aria-label","units",2,"width","100%",3,"value","input"],[1,"col-sm-6","col-md-3","col-lg-3"],[1,"label",2,"width","100%"],[2,"width","100%","text-transform","uppercase",3,"selected","selectedChange"],["style","text-transform: uppercase;",3,"value",4,"ngFor","ngForOf"],[2,"text-transform","uppercase",3,"value"]],template:function(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"div",0),h["\u0275\u0275elementStart"](1,"div",1),h["\u0275\u0275elementStart"](2,"nb-card",2),h["\u0275\u0275elementStart"](3,"div",3),h["\u0275\u0275elementStart"](4,"button",4),h["\u0275\u0275listener"]("click",function(){return e.updateSettings()}),h["\u0275\u0275text"](5,"Update Settings"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"div",1),h["\u0275\u0275elementStart"](7,"nb-card",5),h["\u0275\u0275elementStart"](8,"nb-card-header"),h["\u0275\u0275elementStart"](9,"div",6),h["\u0275\u0275elementStart"](10,"div",7),h["\u0275\u0275text"](11," Settings "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](12,"nb-card-body"),h["\u0275\u0275elementStart"](13,"div",8),h["\u0275\u0275elementStart"](14,"div",9),h["\u0275\u0275elementStart"](15,"div",10),h["\u0275\u0275elementStart"](16,"label",11),h["\u0275\u0275text"](17,"School name"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](18,"input",12),h["\u0275\u0275listener"]("ngModelChange",function(t){return e.form.school=t}),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](19,"div",13),h["\u0275\u0275elementStart"](20,"div",14),h["\u0275\u0275elementStart"](21,"div",10),h["\u0275\u0275elementStart"](22,"div",10),h["\u0275\u0275elementStart"](23,"label",15),h["\u0275\u0275text"](24),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](25,"mat-slider",16),h["\u0275\u0275listener"]("input",function(t){return e.form.default_percent_manager=t.value}),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](26,"div",17),h["\u0275\u0275elementStart"](27,"div",10),h["\u0275\u0275elementStart"](28,"label",18),h["\u0275\u0275text"](29,"Coin"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](30,"nb-select",19),h["\u0275\u0275listener"]("selectedChange",function(t){return e.form.coin=t}),h["\u0275\u0275template"](31,C,2,2,"nb-option",20),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&t&&(h["\u0275\u0275advance"](18),h["\u0275\u0275property"]("ngModel",e.form.school),h["\u0275\u0275advance"](6),h["\u0275\u0275textInterpolate1"]("% Manager (",e.form.default_percent_manager,"%)"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("value",e.form.default_percent_manager),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("selected",e.form.coin||"BRL"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",e.options))},directives:[m.Asz,m.DPz,m.ndF,m.yKW,m.h8i,a.Fj,a.JJ,a.On,i.pH,m.rs,M.sg,m.q51],styles:['@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(material-icons.5a724ea88d2bef0354e4.woff2) format("woff2"),url(material-icons.53e02ee0f1376e321592.woff) format("woff")}.material-icons[_ngcontent-%COMP%]{font-family:Material Icons;font-feature-settings:"liga"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-outlined.3f63ea8ffa118382067a.woff2) format("woff2"),url(material-icons-outlined.8e6315a55c2c9047cf70.woff) format("woff")}.material-icons[_ngcontent-%COMP%], .material-icons-outlined[_ngcontent-%COMP%]{font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}.material-icons-outlined[_ngcontent-%COMP%]{font-family:Material Icons Outlined;font-feature-settings:"liga"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-round.3264fe46731807e4bd1a.woff2) format("woff2"),url(material-icons-round.5db3ab7e0a3ff24a7525.woff) format("woff")}.material-icons-round[_ngcontent-%COMP%]{font-family:Material Icons Round;font-feature-settings:"liga"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-sharp.33d2f765c090081027e5.woff2) format("woff2"),url(material-icons-sharp.0678917707f45f3b3668.woff) format("woff")}.material-icons-round[_ngcontent-%COMP%], .material-icons-sharp[_ngcontent-%COMP%]{font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}.material-icons-sharp[_ngcontent-%COMP%]{font-family:Material Icons Sharp;font-feature-settings:"liga"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-two-tone.84874e1d29ecbed39b13.woff2) format("woff2"),url(material-icons-two-tone.039b01f05f2025f8ad4d.woff) format("woff")}.material-icons-two-tone[_ngcontent-%COMP%]{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}  .nb-theme-dark .cdk-overlay-container{z-index:999999999!important}  .nb-theme-dark nb-sidebar .main-container{border-right:1px solid #3a3f50!important}  .nb-theme-dark .layout-container{padding-top:60px!important}  .nb-theme-dark nb-layout.window-mode .layout nb-layout-header nav{padding-top:0!important;padding-bottom:0!important;height:60px!important}  .nb-theme-dark .main-container{top:60px!important}  .nb-theme-dark nb-card-header{border-bottom:1px solid #3a3f50!important}  .value{color:#a1a6b6}.nb-theme-default   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex:1;justify-content:space-between;border-left:none;border-right:none;padding:1.5rem 20px 1rem}.nb-theme-default   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-default   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:transparent;color:#fff;border:none;width:60px;margin-left:11px}.nb-theme-default   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:24px!important}.nb-theme-default   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#222b45}.nb-theme-default   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]{max-height:70px;position:relative;top:-10px;margin-left:15px}.nb-theme-default   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]{max-height:70px;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:135px;transform:scale(1);overflow:hidden;margin-top:-22px}.nb-theme-default   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .title-img[_ngcontent-%COMP%]{font-size:.75rem;text-align:center;border-radius:5px}.nb-theme-default   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.nb-theme-default   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:#a1a6b6}.nb-theme-default   [_nghost-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400}.nb-theme-default   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]   div.slp[_ngcontent-%COMP%]{min-width:160px}.nb-theme-dark   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex:1;justify-content:space-between;border-left:none;border-right:none;padding:1.5rem 20px 1rem}.nb-theme-dark   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-dark   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:transparent;color:#fff;border:none;width:60px;margin-left:11px}.nb-theme-dark   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:24px!important}.nb-theme-dark   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#222b45}.nb-theme-dark   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]{max-height:70px;position:relative;top:-10px;margin-left:15px}.nb-theme-dark   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]{max-height:70px;overflow:hidden}.nb-theme-dark   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:135px;transform:scale(1);overflow:hidden;margin-top:-22px}.nb-theme-dark   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .title-img[_ngcontent-%COMP%]{font-size:.75rem;text-align:center;border-radius:5px}.nb-theme-dark   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.nb-theme-dark   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:#a1a6b6}.nb-theme-dark   [_nghost-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400}.nb-theme-dark   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]   div.slp[_ngcontent-%COMP%]{min-width:160px}.nb-theme-cosmic   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex:1;justify-content:space-between;border-left:none;border-right:none;padding:1.5rem 20px 1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-cosmic   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:transparent;color:#fff;border:none;width:60px;margin-left:11px}.nb-theme-cosmic   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:24px!important}.nb-theme-cosmic   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]{max-height:70px;position:relative;top:-10px;margin-left:15px}.nb-theme-cosmic   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]{max-height:70px;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:135px;transform:scale(1);overflow:hidden;margin-top:-22px}.nb-theme-cosmic   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .title-img[_ngcontent-%COMP%]{font-size:.75rem;text-align:center;border-radius:5px}.nb-theme-cosmic   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:#a1a6b6}.nb-theme-cosmic   [_nghost-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400}.nb-theme-cosmic   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]   div.slp[_ngcontent-%COMP%]{min-width:160px}.nb-theme-corporate   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex:1;justify-content:space-between;border-left:none;border-right:none;padding:1.5rem 20px 1rem}.nb-theme-corporate   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-corporate   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:transparent;color:#fff;border:none;width:60px;margin-left:11px}.nb-theme-corporate   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:24px!important}.nb-theme-corporate   [_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#222b45}.nb-theme-corporate   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]{max-height:70px;position:relative;top:-10px;margin-left:15px}.nb-theme-corporate   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]{max-height:70px;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:135px;transform:scale(1);overflow:hidden;margin-top:-22px}.nb-theme-corporate   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   .title-img[_ngcontent-%COMP%]{font-size:.75rem;text-align:center;border-radius:5px}.nb-theme-corporate   [_nghost-%COMP%]   .axie-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:#a1a6b6}.nb-theme-corporate   [_nghost-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400}.nb-theme-corporate   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]   div.slp[_ngcontent-%COMP%]{min-width:160px}  .btn-acoes{float:right;margin-right:5px!important;margin-left:5px!important}']}),O)}]}],w=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({imports:[[f.Bz.forChild(x)],f.Bz]}),t}(),v=r(79251),y=((P=function t(){e(this,t)}).\u0275fac=function(t){return new(t||P)},P.\u0275mod=h["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=h["\u0275\u0275defineInjector"]({providers:[],imports:[[d.N6,s.ot,l.Ps,i.KP,a.u5,m.nKr,a.UX,g.O,m.EoG,v.ChartModule,m._WB,m.obu,m.zyh,m.T2N,m.COg,m.oGl,m.AE1,w,m.IIj,c.Tx]]}),P)}}])}();