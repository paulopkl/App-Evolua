(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/yGZ":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class o{}var i=e("pMnS"),t=e("MKJQ"),a=e("sZkV"),s=e("s7LF"),r=e("mrSG"),g=e("lGQG"),b=e("Zr1d");class d{constructor(l,n,e,u){this.keyboard=l,this.loadingCtrl=n,this.toastCtrl=e,this.authService=u,this.wavesPosition=0,this.wavesDiference=100,this.userLogin={},this.userRegister={}}ngOnInit(){}segmentChanged(l){"login"===l.detail.value?(this.slides.slidePrev(),this.wavesPosition+=this.wavesDiference):(this.slides.slideNext(),this.wavesPosition-=this.wavesDiference)}login(){return r.__awaiter(this,void 0,void 0,(function*(){yield this.presentLoading();try{yield this.authService.login(this.userLogin)}catch(l){let n;switch(l.code){case"auth/argument-error":n='"Campo de E-mail ou Senha Vazio(s)", Digite um E-mail ou Senha v\xe1lidos ;)';break;case"auth/invalid-email":n='"Campo de E-mail invalido", Digite um E-mail corretamente ;)';break;case"auth/user-not-found":n='"Erro", Este Email n\xe3o est\xe1 cadastrado!';break;case"auth/wrong-password":n='"Senha Inv\xe1lida", Esta Senha n\xe3o Corresponde ao E-mail cadastrado!';break;default:n='"Erro Inesperado", Favor contatar ao suporte e dar seu FeedBack'}this.presentToast(n)}finally{this.loading.dismiss()}}))}register(){return r.__awaiter(this,void 0,void 0,(function*(){yield this.presentLoading();try{yield this.authService.register(this.userRegister)}catch(l){let n;switch(l.code){case"auth/weak-password":n='"Senha Fraca", A senha deve conter no m\xednimo 6 caract\xe9res';break;case"auth/argument-error":n='"Campo de E-mail ou Senha Vazio(s)", Digite um E-mail ou Senha v\xe1lidos ;)';break;case"auth/invalid-email":n='"Campo de E-mail invalido", Digite um E-mail corretamente ;)';break;case"auth/email-already-in-use":n="Este E-mail j\xe1 est\xe1 cadastrado em uma conta, utilize outro E-mail ou fa\xe7a Login";default:n='"Erro Inesperado", Favor contatar ao suporte e dar seu FeedBack'}this.presentToast(n)}finally{this.loading.dismiss(),console.log(this.nome)}}))}presentLoading(){return r.__awaiter(this,void 0,void 0,(function*(){return this.loading=yield this.loadingCtrl.create({message:"Por Favor aguarde..."}),this.loading.present()}))}presentToast(l){return r.__awaiter(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:l,duration:4e3,color:"danger",translucent:!0})).present()}))}}var c=u.ob({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;width:75%;margin:0 auto;z-index:2}.container.top[_ngcontent-%COMP%]{top:1%}.container.button[_ngcontent-%COMP%]{bottom:30%}.container.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.logo[_ngcontent-%COMP%]{width:25rem;height:6rem;margin-left:1rem}.ionToolbar[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-slides[_ngcontent-%COMP%]{height:100%}ion-slides[_ngcontent-%COMP%]   .slide-inner[_ngcontent-%COMP%]{width:75%;color:#fff;background-color:#0071bc;border-radius:10px}ion-slides[_ngcontent-%COMP%]   .slide-inner[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:rgba(255, 255, 255, 0.3);--border-radius:10px}ion-slides[_ngcontent-%COMP%]   .slide-inner[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--color:white;text-align:center;font-size:1.2rem}.backpaper[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;height:100%;width:100%;background-image:url(PapelParede.e44ed8bd33629d603d10.jpg);background-position:center;background-repeat:no-repeat;opacity:.2}.ss[_ngcontent-%COMP%]{font-weight:700;border-radius:10% 0 0 10%}.zi[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary)}"]],data:{}});function p(l){return u.Kb(0,[u.Gb(402653184,1,{slides:0}),(l()(),u.qb(1,0,null,null,97,"ion-content",[["class","swiper-no-swiping"]],null,null,null,t.O,t.l)),u.pb(2,49152,null,0,a.s,[u.h,u.k,u.x],null,null),(l()(),u.qb(3,0,null,0,15,"div",[["class","container top"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.qb(4,0,null,null,0,"img",[["class","logo"],["src","../../../assets/imgs/LogoPrincipal.png"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,13,"ion-segment",[["class","zi"],["value","login"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Bb(l,8)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==u.Bb(l,8)._handleChangeEvent(e.target)&&o),"ionChange"===n&&(o=!1!==i.segmentChanged(e)&&o),o}),t.Z,t.v)),u.Fb(5120,null,s.c,(function(l){return[l]}),[a.Hb]),u.pb(7,49152,null,0,a.gb,[u.h,u.k,u.x],{value:[0,"value"]},null),u.pb(8,16384,null,0,a.Hb,[u.k],null,null),(l()(),u.qb(9,0,null,0,4,"ion-segment-button",[["value","login"]],null,null,null,t.Y,t.w)),u.pb(10,49152,null,0,a.hb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.qb(11,0,null,0,2,"ion-label",[["class","ss"],["color","light"]],null,null,null,t.V,t.s)),u.pb(12,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Ib(-1,0,["Login"])),(l()(),u.qb(14,0,null,0,4,"ion-segment-button",[["value","register"]],null,null,null,t.Y,t.w)),u.pb(15,49152,null,0,a.hb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.qb(16,0,null,0,2,"ion-label",[["class","ss"],["color","light"]],null,null,null,t.V,t.s)),u.pb(17,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Ib(-1,0,["Cadastro"])),(l()(),u.qb(19,0,null,0,77,"ion-slides",[],null,null,null,t.cb,t.z)),u.pb(20,49152,[[1,4]],0,a.mb,[u.h,u.k,u.x],null,null),(l()(),u.qb(21,0,null,0,31,"ion-slide",[],null,null,null,t.bb,t.y)),u.pb(22,49152,null,0,a.lb,[u.h,u.k,u.x],null,null),(l()(),u.qb(23,0,null,0,29,"div",[["class","slide-inner ion-padding"]],null,null,null,null,null)),(l()(),u.qb(24,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Login:"])),(l()(),u.qb(26,0,null,null,11,"ion-item",[["class","ion-margin-top"],["lines","none"]],null,null,null,t.U,t.r)),u.pb(27,49152,null,0,a.F,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(28,0,null,0,2,"ion-label",[["color","light"],["position","floating"]],null,null,null,t.V,t.s)),u.pb(29,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),u.Ib(-1,0,["E-mail"])),(l()(),u.qb(31,0,null,0,6,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Bb(l,32)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==u.Bb(l,32)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(i.userLogin.email=e)&&o),o}),t.T,t.q)),u.pb(32,16384,null,0,a.Ib,[u.k],null,null),u.Fb(1024,null,s.c,(function(l){return[l]}),[a.Ib]),u.pb(34,671744,null,0,s.f,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Fb(2048,null,s.d,null,[s.f]),u.pb(36,16384,null,0,s.e,[[4,s.d]],null,null),u.pb(37,49152,null,0,a.E,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.qb(38,0,null,null,11,"ion-item",[["class","ion-margin-top"],["lines","none"]],null,null,null,t.U,t.r)),u.pb(39,49152,null,0,a.F,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(40,0,null,0,2,"ion-label",[["color","light"],["position","floating"]],null,null,null,t.V,t.s)),u.pb(41,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),u.Ib(-1,0,["Senha"])),(l()(),u.qb(43,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Bb(l,44)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==u.Bb(l,44)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(i.userLogin.password=e)&&o),o}),t.T,t.q)),u.pb(44,16384,null,0,a.Ib,[u.k],null,null),u.Fb(1024,null,s.c,(function(l){return[l]}),[a.Ib]),u.pb(46,671744,null,0,s.f,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Fb(2048,null,s.d,null,[s.f]),u.pb(48,16384,null,0,s.e,[[4,s.d]],null,null),u.pb(49,49152,null,0,a.E,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.qb(50,0,null,null,2,"ion-button",[["class","ion-margin-top"],["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.login()&&u),u}),t.G,t.d)),u.pb(51,49152,null,0,a.i,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Ib(-1,0,["Entrar"])),(l()(),u.qb(53,0,null,0,43,"ion-slide",[],null,null,null,t.bb,t.y)),u.pb(54,49152,null,0,a.lb,[u.h,u.k,u.x],null,null),(l()(),u.qb(55,0,null,0,41,"div",[["class","slide-inner ion-padding"]],null,null,null,null,null)),(l()(),u.qb(56,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Cadastro:"])),(l()(),u.qb(58,0,null,null,11,"ion-item",[["class","ion-margin-top"],["lines","none"]],null,null,null,t.U,t.r)),u.pb(59,49152,null,0,a.F,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(60,0,null,0,2,"ion-label",[["color","light"],["position","floating"]],null,null,null,t.V,t.s)),u.pb(61,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),u.Ib(-1,0,["Nome"])),(l()(),u.qb(63,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Bb(l,64)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==u.Bb(l,64)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(i.nome=e)&&o),o}),t.T,t.q)),u.pb(64,16384,null,0,a.Ib,[u.k],null,null),u.Fb(1024,null,s.c,(function(l){return[l]}),[a.Ib]),u.pb(66,671744,null,0,s.f,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Fb(2048,null,s.d,null,[s.f]),u.pb(68,16384,null,0,s.e,[[4,s.d]],null,null),u.pb(69,49152,null,0,a.E,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.qb(70,0,null,null,11,"ion-item",[["class","ion-margin-top"],["lines","none"]],null,null,null,t.U,t.r)),u.pb(71,49152,null,0,a.F,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(72,0,null,0,2,"ion-label",[["color","light"],["position","floating"]],null,null,null,t.V,t.s)),u.pb(73,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),u.Ib(-1,0,["E-mail"])),(l()(),u.qb(75,0,null,0,6,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Bb(l,76)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==u.Bb(l,76)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(i.userRegister.email=e)&&o),o}),t.T,t.q)),u.pb(76,16384,null,0,a.Ib,[u.k],null,null),u.Fb(1024,null,s.c,(function(l){return[l]}),[a.Ib]),u.pb(78,671744,null,0,s.f,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Fb(2048,null,s.d,null,[s.f]),u.pb(80,16384,null,0,s.e,[[4,s.d]],null,null),u.pb(81,49152,null,0,a.E,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.qb(82,0,null,null,11,"ion-item",[["class","ion-margin-top"],["lines","none"]],null,null,null,t.U,t.r)),u.pb(83,49152,null,0,a.F,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(84,0,null,0,2,"ion-label",[["color","light"],["position","floating"]],null,null,null,t.V,t.s)),u.pb(85,49152,null,0,a.L,[u.h,u.k,u.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),u.Ib(-1,0,["Senha"])),(l()(),u.qb(87,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Bb(l,88)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==u.Bb(l,88)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(i.userRegister.password=e)&&o),o}),t.T,t.q)),u.pb(88,16384,null,0,a.Ib,[u.k],null,null),u.Fb(1024,null,s.c,(function(l){return[l]}),[a.Ib]),u.pb(90,671744,null,0,s.f,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Fb(2048,null,s.d,null,[s.f]),u.pb(92,16384,null,0,s.e,[[4,s.d]],null,null),u.pb(93,49152,null,0,a.E,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.qb(94,0,null,null,2,"ion-button",[["class","ion-margin-top"],["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.register()&&u),u}),t.G,t.d)),u.pb(95,49152,null,0,a.i,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Ib(-1,0,["Cadastrar"])),(l()(),u.qb(97,0,null,0,1,"div",[["class","backpaper"]],null,null,null,null,null)),(l()(),u.qb(98,0,null,null,0,"div",[["class","container button ion-text-center"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.qb(99,0,null,null,6,"ion-footer",[["class","ion-text-center"]],[[8,"hidden",0]],null,null,t.P,t.m)),u.pb(100,49152,null,0,a.x,[u.h,u.k,u.x],null,null),(l()(),u.qb(101,0,null,0,4,"ion-toolbar",[["class","ionToolbar"],["color","secondary"]],null,null,null,t.fb,t.C)),u.pb(102,49152,null,0,a.xb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.qb(103,0,null,0,2,"ion-text",[["color","light"]],null,null,null,t.db,t.A)),u.pb(104,49152,null,0,a.sb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Ib(-1,0,[" Escola evolua: R. Osasco, 226 - Jardim Paulista, Sumar\xe9 - SP, 13171-090. Tell: (19) 3873-9976 "]))],(function(l,n){var e=n.component;l(n,7,0,"login"),l(n,10,0,"login"),l(n,12,0,"light"),l(n,15,0,"register"),l(n,17,0,"light"),l(n,27,0,"none"),l(n,29,0,"light","floating"),l(n,34,0,e.userLogin.email),l(n,37,0,"email"),l(n,39,0,"none"),l(n,41,0,"light","floating"),l(n,46,0,e.userLogin.password),l(n,49,0,"password"),l(n,51,0,"secondary","block"),l(n,59,0,"none"),l(n,61,0,"light","floating"),l(n,66,0,e.nome),l(n,69,0,"text"),l(n,71,0,"none"),l(n,73,0,"light","floating"),l(n,78,0,e.userRegister.email),l(n,81,0,"email"),l(n,83,0,"none"),l(n,85,0,"light","floating"),l(n,90,0,e.userRegister.password),l(n,93,0,"password"),l(n,95,0,"secondary","block"),l(n,102,0,"secondary"),l(n,104,0,"light")}),(function(l,n){var e=n.component;l(n,3,0,e.keyboard.isVisible),l(n,31,0,u.Bb(n,36).ngClassUntouched,u.Bb(n,36).ngClassTouched,u.Bb(n,36).ngClassPristine,u.Bb(n,36).ngClassDirty,u.Bb(n,36).ngClassValid,u.Bb(n,36).ngClassInvalid,u.Bb(n,36).ngClassPending),l(n,43,0,u.Bb(n,48).ngClassUntouched,u.Bb(n,48).ngClassTouched,u.Bb(n,48).ngClassPristine,u.Bb(n,48).ngClassDirty,u.Bb(n,48).ngClassValid,u.Bb(n,48).ngClassInvalid,u.Bb(n,48).ngClassPending),l(n,63,0,u.Bb(n,68).ngClassUntouched,u.Bb(n,68).ngClassTouched,u.Bb(n,68).ngClassPristine,u.Bb(n,68).ngClassDirty,u.Bb(n,68).ngClassValid,u.Bb(n,68).ngClassInvalid,u.Bb(n,68).ngClassPending),l(n,75,0,u.Bb(n,80).ngClassUntouched,u.Bb(n,80).ngClassTouched,u.Bb(n,80).ngClassPristine,u.Bb(n,80).ngClassDirty,u.Bb(n,80).ngClassValid,u.Bb(n,80).ngClassInvalid,u.Bb(n,80).ngClassPending),l(n,87,0,u.Bb(n,92).ngClassUntouched,u.Bb(n,92).ngClassTouched,u.Bb(n,92).ngClassPristine,u.Bb(n,92).ngClassDirty,u.Bb(n,92).ngClassValid,u.Bb(n,92).ngClassInvalid,u.Bb(n,92).ngClassPending),l(n,98,0,e.keyboard.isVisible),l(n,99,0,e.keyboard.isVisible)}))}var h=u.mb("app-login",d,(function(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,1,"app-login",[],null,null,null,p,c)),u.pb(1,114688,null,0,d,[b.a,a.Bb,a.Jb,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{nome:"nome"},{},[]),m=e("SVse"),C=e("iInd");class v{}e.d(n,"LoginPageModuleNgFactory",(function(){return f}));var f=u.nb(o,[],(function(l){return u.yb([u.zb(512,u.j,u.Y,[[8,[i.a,h]],[3,u.j],u.v]),u.zb(4608,m.m,m.l,[u.s,[2,m.s]]),u.zb(4608,s.i,s.i,[]),u.zb(4608,a.a,a.a,[u.x,u.g]),u.zb(4608,a.Cb,a.Cb,[a.a,u.j,u.p]),u.zb(4608,a.Fb,a.Fb,[a.a,u.j,u.p]),u.zb(4608,s.a,s.a,[]),u.zb(1073742336,m.b,m.b,[]),u.zb(1073742336,s.h,s.h,[]),u.zb(1073742336,s.b,s.b,[]),u.zb(1073742336,a.zb,a.zb,[]),u.zb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),u.zb(1073742336,v,v,[]),u.zb(1073742336,s.g,s.g,[]),u.zb(1073742336,o,o,[]),u.zb(1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);