(function(){var e={2014:function(){},2003:function(e,t,i){"use strict";i(6992),i(8674),i(9601),i(7727);var a=i(8935),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[i("router-link",{staticClass:"btn btn-outline-primary m-2",attrs:{to:"/"}},[e._v("Accueil")]),e._m(0),e._m(1)],1),i("router-view")],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"m-2",attrs:{href:"https://www.instagram.com/caerasenses",target:"_blank"}},[i("i",{staticClass:"fa-brands fa-instagram fa-2xl"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"m-2",attrs:{href:"https://www.facebook.com/caerasenses",target:"_blank"}},[i("i",{staticClass:"fa-brands fa-facebook fa-2xl"})])}],r=i(1001),o={},l=(0,r.Z)(o,s,n,!1,null,null,null),u=l.exports,c=i(2809),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("BannerComponent"),i("DescriptionComponent"),i("MapComponent")],1)},d=[],m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"masthead"},[i("div",{staticClass:"container"},[e._m(0),i("div",{staticClass:"masthead-subheading"},[e._v("Réserver votre soin")]),i("div",{staticClass:"row d-flex justify-content-center"},[i("div",{staticClass:"col-10 p-3 mb-2 bg-light text-dark rounded"},[i("router-link",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{to:"/prestation"}},[e._v(" Réserver ")])],1)])])])},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"masthead-heading"},[i("h1",[e._v("Caera Senses")])])}],h={name:"BannerComponent"},f=h,g=(0,r.Z)(f,m,v,!1,null,"edec03b0",null),b=g.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._m(0),i("div",{staticClass:"row"},[e._m(1),i("div",{staticClass:"col-lg-6"},[i("router-link",{staticClass:"btn btn-outline-primary m-1",attrs:{to:"/prestation"}},[e._v("Réserver une prestation")])],1)])])},P=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h2",[e._v("Studio toulousain Caera Senses")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-lg-6"},[i("p",[e._v("Plongez dans un univers de bien-être géré par Johana, le studio de beauté Caera Senses vous accueille dans une ambiance chaleureuse et conviviale. Ce lieu intimiste se conjugue avec bien-être, détente et soin du corps. ")]),i("p",[e._v("N'attendez plus et réservez en ligne vos soins.")])])}],C={},_=(0,r.Z)(C,y,P,!1,null,null,null),M=_.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h2",[e._v("Où sommes nous")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h3",[e._v("Adresse et contact")]),i("p",[e._v("Adresse: 158 rue Achille Viadieu 31400 Toulouse")]),i("p",[e._v("Téléphone: 0651 84 14 09")])])]),i("div",{staticClass:"text-center"},[i("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.718017559747!2d1.4445827999999998!3d43.591589500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc8038c594dd%3A0xca360e40eb9a6ad9!2s158%20Rue%20Achille%20Viadieu%2C%2031400%20Toulouse!5e0!3m2!1sfr!2sfr!4v1653695096706!5m2!1sfr!2sfr",width:"100%",height:"300",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])}],V=i(2014),x=i.n(V),D=x(),T=(0,r.Z)(D,w,S,!1,null,null,null),A=T.exports,k={name:"HomeView",components:{BannerComponent:b,DescriptionComponent:M,MapComponent:A}},E=k,j=(0,r.Z)(E,p,d,!1,null,null,null),F=j.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0==e.step?i("div",{staticClass:" container-fluid fixedArea d-flex justify-content-end bg-primary w-100"},[e.showAlertMsg?e._e():i("button",{staticClass:"btn btn-secondary btn-lg btn-block",on:{click:function(t){return e.nextStep(1)}}},[e._v("Accéder à mon panier")]),e.showAlertMsg?i("div",{staticClass:" alert alert-warning alert-dismissible d-flex justify-content-between ",on:{click:e.showAlertFunc}},[i("strong",[e._v("Votre panier est vide 🙂. ")]),e._v(" Sélectionnez des services et ensuite accédez à votre panier pour finaliser votre sélection. "),e._m(0)]):e._e()]):e._e(),i("div",{staticClass:"container"},[e._m(1),i("div",{staticClass:"row text-center"},[i("h1",[e._v("Caera senses")]),0==e.step?i("p",[e._v(' Choisissez vos prestations puis valider via l\'onglet "Accéder au panier"')]):e._e()])]),i("div",{staticClass:"container "},[0==e.step?i("div",{staticClass:"row pt-5"},[i("MenuComponent",{attrs:{boolAppearDivBtn:e.boolAppearDivBtn}})],1):1==e.step?i("div",{staticClass:"row pt-5"},[i("CalendarComponent")],1):i("div",{staticClass:"row pt-5"},[e._v(" oops ")])])])},I=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"btn btn-dark"},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"rounded",attrs:{src:i(6990),alt:"logo Caera senses"}})])])}],q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},e._l(e.dataTypes,(function(t){return i("div",{key:t,staticClass:"card mb-2"},[i("div",{staticClass:"card-header"},[i("h2",[e._v(e._s(t))])]),i("div",{staticClass:"card-body"},[i("SectionMenuComponent",{attrs:{valueType:t},on:{"add-or-delete-item":e.addOrDeleteItem}})],1)])})),0)},B=[],$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},e._l(e.dataSetMenuFiltered,(function(e){return i("div",{key:e.id+"Menu",staticClass:"row"},[i("CardTypeComponent",{attrs:{dataValue:e}})],1)})),0)},z=[],N=(i(7327),i(1539),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card mb-1 onCard",on:{click:function(t){return e.AddBasket(e.dataValue.id)}}},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-10 col-sm-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-sm-12"},[i("h3",[e._v(e._s(e.dataValue.subtype))])]),i("div",{staticClass:"col-lg-2 col-sm-12"},[i("p",[e._v(e._s(e.dataValue.price)+" €")])]),i("div",{staticClass:"col-lg-2 col-sm-12"},[i("p",[e._v(e._s(e.dataValue.timePrestation))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("p",[e._v(e._s(e.dataValue.description))])])])]),i("div",{staticClass:"col-lg-2 col-sm-12 d-flex justify-content-center"},[i("button",{directives:[{name:"show",rawName:"v-show",value:e.boolChoice,expression:"boolChoice"}],staticClass:"btn btn-primary btn-sm ",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),e.DeleteBasket(e.dataValue.id)}}},[e._v("Retiré du panier")])])])])])}),Z=[],R=i(4479),J=(i(2222),i(8862),{name:"CardTypeComponent",props:["dataValue"],data:function(){return{boolChoice:!1}},methods:{AddBasket:function(e){if(this.boolChoice=!0,localStorage.storeCaeraSenses){var t=JSON.parse(localStorage.storeCaeraSenses);e+1 in t&&String(e+1)in t||(t=[].concat((0,R.Z)(t),[e])),localStorage.setItem("storeCaeraSenses",JSON.stringify(t))}else localStorage.setItem("storeCaeraSenses",JSON.stringify([e]))},DeleteBasket:function(e){if(this.boolChoice=!1,localStorage.storeCaeraSenses){var t=JSON.parse(localStorage.storeCaeraSenses);t=t.filter((function(t){return String(t)!=String(e)})),localStorage.setItem("storeCaeraSenses",JSON.stringify(t))}}}}),L=J,U=(0,r.Z)(L,N,Z,!1,null,"1e026d6c",null),H=U.exports,Y={components:{CardTypeComponent:H},props:["valueType"],data:function(){return{listItem:[],dataSetMenu:[{id:0,type:"Massages",subtype:"Head Spa 30 min",price:30,description:"Massage relaxant de la tête, du visage, de la nuque, des épaules et du buste",timePrestation:"30 min",timePause:15,timePrestationValue:30},{id:1,type:"Massages",subtype:"Massage à la bougie 45 minutes",price:45,description:"Massage relaxant et enveloppant de tout le corps",timePrestation:"45 min",timePause:15,timePrestationValue:45},{id:2,type:"Massages",subtype:"Massage sur-mesure 1 heure",price:60,description:"Massage du monde. Le choix du massage se fait sur place en fonction de vos besoins et de vos attentes après un rapide entretien pour une meilleure personnalisation.",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:3,type:"Massages",subtype:"Massage signature 1 heure 30",price:90,description:"Massage créé et personnalisable sur le moment",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90},{id:4,type:"Massages",subtype:"Massaga pierres chaudes  1 heure",price:75,description:"Des pierres de basalte chauffées pour relaxation musculaire par la chaleur",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:5,type:"Massages",subtype:"Massage femme enceinte  45 min",price:45,description:"Massage californien pour la détente et personnalisable pour les jambes lourdes. Il se fait en 3ème mois aboutit et le 8ème de grossesse",timePrestation:"45 min",timePause:15,timePrestationValue:45},{id:6,type:"Rituels",subtype:"Rituel 1h",price:60,description:"30 min gommage + 30 min massage Head Spa ou massage du dos",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:7,type:"Rituels",subtype:"Rituel 1 h30",price:100,description:"30 min gommage + 1h massage sur-mesure",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90},{id:8,type:"Soin vajacial",subtype:"Soin vajacial   1 heure",price:45,description:"Soin pour embellir le pubis après l'épilation du maillot intégrale qui s'accompagne d'un nettoyage de peau, extraction des comédons et poils incarnés, un masque et une crème",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:9,type:"Soin vajacial",subtype:"Maillots intégral + soin vajacial 1 h30",price:55,description:"Soin pour embellir le pubis après l'épilation du maillot intégrale qui s'accompagne d'un nettoyage de peau, extraction des comédons et poils incarnés, un masque et une crème",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:10,type:"Epilations",subtype:"Maillot intégral (MI)",price:25,description:"",timePrestation:"40 min",timePause:15,timePrestationValue:40},{id:11,type:"Epilations",subtype:"Maillot semi-intégral (MSI)",price:22,description:"",timePrestation:"30 min",timePause:15,timePrestationValue:30},{id:12,type:"Epilations",subtype:"Maillot Brésilien (MB)",price:16,description:"",timePrestation:"25 min",timePause:15,timePrestationValue:25},{id:13,type:"Epilations",subtype:"Maillot simple (MSI)",price:12,description:"",timePrestation:"15 min",timePause:15,timePrestationValue:15},{id:14,type:"Epilations",subtype:"Demi-jambe (DJ)",price:15,description:"",timePrestation:"30 min",timePause:15,timePrestationValue:30},{id:15,type:"Epilations",subtype:"Jambe entière (J)",price:22,description:"",timePrestation:"45 min",timePause:15,timePrestationValue:45},{id:16,type:"Epilations",subtype:"Aisselle (A)",price:11,description:"",timePrestation:"15 min",timePause:15,timePrestationValue:15},{id:17,type:"Epilations",subtype:"Sourcils (S)",price:10,description:"",timePrestation:"15 min",timePause:15,timePrestationValue:15},{id:18,type:"Epilations",subtype:"Lèvre (L)",price:6,description:"",timePrestation:"10 min",timePause:15,timePrestationValue:10},{id:19,type:"Epilations",subtype:"Menton (M)",price:5,description:"",timePrestation:"10 min",timePause:15,timePrestationValue:10},{id:20,type:"Forfait épilations",subtype:"Maillot intégral + jambes entières + aisselles",price:53,description:"",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90},{id:21,type:"Forfait épilations",subtype:"Maillot intégral + demi-jambes + aisselles",price:46,description:"",timePrestation:"1 heure 15",timePause:15,timePrestationValue:75},{id:22,type:"Forfait épilations",subtype:"Maillot semi-intégral + demi jambes + aisselles",price:43,description:"",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:23,type:"Forfait épilations",subtype:"Sourcil + lèvre + menton",price:16,description:"",timePrestation:"35 min",timePause:15,timePrestationValue:35},{id:24,type:"Forfait épilations",subtype:"Maillot intégral + jambes entières + aisselles + sourcil + lèvre",price:69,description:"",timePrestation:"1 heure 45",timePause:15,timePrestationValue:105},{id:25,type:"Soins des pieds",subtype:"PédiSpa",price:45,description:"Mise en beauté des pieds avec un bain des pieds, gommage, mise en forme de l'ongle, couper les cuticules et un massages des pieds.",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:26,type:"Soins des pieds",subtype:"PédiSpa peeling",price:65,description:"Un PédiSpa complète + un masque anti-callosité avant le massage",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90}]}},computed:{dataSetMenuFiltered:function(){var e=this;return this.dataSetMenu.filter((function(t){return t.type===e.valueType}))}}},G=Y,X=(0,r.Z)(G,$,z,!1,null,"690006f7",null),K=X.exports,Q={name:"MenuComponent",props:["boolAppearDivBtn"],components:{SectionMenuComponent:K},methods:{addOrDeleteItem:function(e){this.listOfItem.push(e),this.$props.boolAppearDivBtn=!0}},data:function(){return{listOfItem:[],dataTypes:["Massages","Rituels","Soin vajacial","Epilations","Forfait épilations","Soins des pieds"]}}},W=Q,ee=(0,r.Z)(W,q,B,!1,null,null,null),te=ee.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},e._l(e.listCommand,(function(t){return a("div",{key:t.id+"ok",staticClass:"card m-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10 col-sm-12"},[a("p",[e._v(e._s(t.type)+"|"+e._s(t.subtype)+"|"+e._s(t.price)+" €")])]),a("div",{staticClass:"col-lg-2 col-sm-12"},[a("button",{staticClass:"btn btn-danger",on:{click:function(i){return e.RemoveItem(t.id)}}},[e._v("Supprimer toute la liste")])])])])])])})),0)]),a("div",{staticClass:"row m-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("p",[e._v("Total: "),a("strong",[e._v(e._s(e.priceCommand)+" €")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("p",[e._v("Choisissez une date")]),a("date-picker",{staticClass:"inline-block h-full",attrs:{"disabled-dates":{weekdays:[1]}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.inputValue,s=t.togglePopover;return[a("div",{staticClass:"flex items-center"},[a("button",{staticClass:"p-2 btn btn-primary",on:{click:function(e){return s()}}},[e._v(" date ")]),a("input",{staticClass:"bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500 ",attrs:{readonly:""},domProps:{value:i}})])]}}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)]),a("div",{staticClass:"card mb-5 mt-3 bg-gradient-primary text-white"},[a("div",{staticClass:"card-body bg-gradient-primary text-white "},[a("div",{staticClass:"row height-select bg-primary"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?i:i[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("A partir de quelle heure souhaiteriez vous votre rendez vous? Nous vous proposerons par la suite plusieurs créneaux")]),e._l(10,(function(t){return a("option",{key:t+"hh"},[e._v(e._s(9+t)+"h")])}))],2)]),e.selected?a("div",{staticClass:"row"},[a("p",[e._v("Veuillez choisir une heure précise pour commencer votre séance, le temps que vous passerez à l'institut sera de "+e._s(e.lapsTimeCommand/60)+"h"+e._s(e.lapsTimeCommand%60)+"min ")]),e._l(e.selectedTimes,(function(t){return a("div",{key:t.index,staticClass:"col-lg-2 col-sm-2 m-1 d-flex justify-content-center"},[a("button",{staticClass:"btn btn-outline-success btn-sm",on:{click:function(i){return e.pickTheDate(t)}}},[e._v(e._s(t.date.getHours())+"h"+e._s(t.date.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})))])])}))],2):e._e()])])]),a("b-modal",{attrs:{"hide-footer":""},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[e.showValidateADate?e.showValidateADate&!e.showValidateTheForm?a("div",{staticClass:"container"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Mon nom")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name","aria-describedby":"nom",placeholder:"Entrer votre nom",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstName"}},[e._v("Mon prénom")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],staticClass:"form-control",attrs:{type:"text",id:"firstName","aria-describedby":"prénom",placeholder:"Entrer votre prénom",required:""},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[e._v("Téléphone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone","aria-describedby":"prénom",placeholder:"Entrer votre prénom",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Mon email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"email",placeholder:"Entrer votre email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"mention"}},[e._v("Recommandation")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{id:"mention",placeholder:"(Optionnelle) Avez vous des recommandation? Mentionnez les ici",rows:"6"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary m-3",on:{click:e.submitForm}},[e._v("Confirmer mon rendez-vous et Envoyer")])])]):e.showValidateADate&e.showValidateTheForm?a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("img",{staticClass:"img-thumbnail",attrs:{src:i(6990)}})]),0==e.showValidateFinalMessage?a("div",{staticClass:"col-8"},[a("div",{staticClass:"spinner-grow text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Loading...")])])]):e._e(),1==e.showValidateFinalMessage?a("div",{staticClass:"col-8"},[a("p",{staticClass:"h3"},[e._v("Formulaire validé 🥰 A bientôt")])]):2==e.showValidateFinalMessage?a("div",{staticClass:"col-8"},[a("p",[e._v(" 😓 Oops nous rencontrons des difficultés à finaliser l'enregistrement, nous nous excusons de cela.")]),a("p",{staticClass:"h3"},[e._v(" Pourriez vous nous contacter au 0651 84 14 09")])]):e._e()])]):e._e():a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"rounded",attrs:{src:i(6990),alt:"logo Caera senses"}})])]),a("div",{staticClass:"row"},[a("p",[e._v("Vous y êtes presque!")]),a("p",[e._v("Vous souhaitez être reçu le "+e._s(e.dayAndhour))]),a("p",[e._v('Si cela vous va, cliquez sur "valider le créneau" ou sinon cliquez sur annuler ')]),a("p",[a("strong",[e._v("Note: ")]),e._v(" Pour le paiement, nous vous contacterons sous peu. Il poura se faire via Lydia, Paypal ou espèce ")])]),a("button",{staticClass:"btn btn-success btn-lg",on:{click:function(t){e.showValidateADate=!e.showValidateADate}}},[e._v("Valider ce créneau")])])])],1)},ae=[],se=(i(4916),i(3123),i(6699),i(2023),i(8309),i(1249),i(4747),i(8579)),ne=i.n(se),re={components:{DatePicker:ne()},data:function(){return{listCommand:[],priceCommand:0,lapsTimeCommand:0,date:new Date,selected:"",showValidateADate:!1,showValidateTheForm:!1,showValidateFinalMessage:0,modalShow:!1,dayAndhour:"",name:"",firstname:"",phone:"",email:"",message:"",dateMili:0,allDatesMiliToFetch:[],forbiddenDates:[]}},computed:{selectedTimes:function(){var e=this,t=[];if("19h"==this.selected)for(var i=0;i<6;i++){var a=new Date(this.date.getUTCFullYear(),this.date.getMonth()+1,this.date.getDate(),this.selected.split("h")[0],5*i);t=[].concat((0,R.Z)(t),[{index:i,date:a,dateMili:a.getTime()}])}else if("18h"==this.selected){for(var s=0;s<12;s++){var n=new Date(this.date.getUTCFullYear(),this.date.getMonth()+1,this.date.getDate(),this.selected.split("h")[0],5*s);t=[].concat((0,R.Z)(t),[{index:s,date:n,dateMili:n.getTime()}])}for(var r=0;r<6;r++){var o=new Date(this.date.getUTCFullYear(),this.date.getMonth()+1,this.date.getDate(),parseInt(this.selected.split("h")[0])+1,5*r);t=[].concat((0,R.Z)(t),[{index:r+12,date:o,dateMili:o.getTime()}])}}else{for(var l=0;l<12;l++){var u=new Date(this.date.getUTCFullYear(),this.date.getMonth()+1,this.date.getDate(),this.selected.split("h")[0],5*l);t=[].concat((0,R.Z)(t),[{index:l,date:u,dateMili:u.getTime()}])}for(var c=0;c<12;c++){var p=new Date(this.date.getUTCFullYear(),this.date.getMonth()+1,this.date.getDate(),parseInt(this.selected.split("h")[0])+1,5*c);t=[].concat((0,R.Z)(t),[{index:c+12,date:p,dateMili:p.getTime()}])}}var d=t.filter((function(t){return!e.forbiddenDates.includes(t["dateMili"])}));return d}},methods:{pickTheDate:function(e){this.modalShow=!this.modalShow,this.dayAndhour="".concat(this.date.getDate(),"/").concat(this.date.getMonth()+1,"/").concat(this.date.getUTCFullYear()," à ").concat(e.date.getHours(),"h").concat(e.date.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}));for(var t=0;t<this.lapsTimeCommand;t+=5)this.allDatesMiliToFetch.push(e.dateMili+6e4*t);this.dateMili=e.dateMili},submitForm:function(){var e=this;this.showValidateADate=!1,this.showValidateTheForm=!0;var t="https://caera-senses.herokuapp.com/api/appointment/createAppointment";fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.name,firstname:this.firstname,email:this.email,phone:this.phone,message:this.message,dateMili:this.dateMili,priceCommand:this.priceCommand,lapsTimeCommand:this.lapsTimeCommand,allDatesMiliToFetch:this.allDatesMiliToFetch,command:this.listCommand.map((function(e){return e.subtype}))})}).then((function(e){return e.json()})).then((function(t){e.tableauMessages=t,e.showValidateFinalMessage=1})).catch((function(){e.showValidateFinalMessage=2}))},RemoveItem:function(){localStorage.clear(),window.location.reload()}},created:function(){var e=this,t="https://caera-senses.herokuapp.com/api/appointment/getAllAppointment";fetch(t).then((function(e){return e.json()})).then((function(t){for(var i=t.length,a=0;a<i;a++)e.forbiddenDates=e.forbiddenDates.concat(t[a]["allDatesMiliToFetch"])}));var i=[{id:0,type:"Massages",subtype:"Head Spa 30 min",price:30,description:"Massage relaxant de la tête, du visage, de la nuque, des épaules et du buste",timePrestation:"30 min",timePause:15,timePrestationValue:30},{id:1,type:"Massages",subtype:"Massage à la bougie 45 minutes",price:45,description:"Massage relaxant et enveloppant de tout le corps",timePrestation:"45 min",timePause:15,timePrestationValue:45},{id:2,type:"Massages",subtype:"Massage sur-mesure 1 heure",price:60,description:"Massage du monde. Le choix du massage se fait sur place en fonction de vos besoins et de vos attentes après un rapide entretien pour une meilleure personnalisation.",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:3,type:"Massages",subtype:"Massage signature 1 heure 30",price:90,description:"Massage créé et personnalisable sur le moment",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90},{id:4,type:"Massages",subtype:"Massaga pierres chaudes  1 heure",price:75,description:"Des pierres de basalte chauffées pour relaxation musculaire par la chaleur",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:5,type:"Massages",subtype:"Massage femme enceinte  45 min",price:45,description:"Massage californien pour la détente et personnalisable pour les jambes lourdes. Il se fait en 3ème mois aboutit et le 8ème de grossesse",timePrestation:"45 min",timePause:15,timePrestationValue:45},{id:6,type:"Rituels",subtype:"Rituel 1h",price:60,description:"30 min gommage + 30 min massage Head Spa ou massage du dos",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:7,type:"Rituels",subtype:"Rituel 1 h30",price:100,description:"30 min gommage + 1h massage sur-mesure",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90},{id:8,type:"Soin vajacial",subtype:"Soin vajacial   1 heure",price:45,description:"Soin pour embellir le pubis après l'épilation du maillot intégrale qui s'accompagne d'un nettoyage de peau, extraction des comédons et poils incarnés, un masque et une crème",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:9,type:"Soin vajacial",subtype:"Maillots intégral + soin vajacial 1 h30",price:55,description:"Soin pour embellir le pubis après l'épilation du maillot intégrale qui s'accompagne d'un nettoyage de peau, extraction des comédons et poils incarnés, un masque et une crème",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:10,type:"Epilations",subtype:"Maillot intégral (MI)",price:25,description:"",timePrestation:"40 min",timePause:15,timePrestationValue:40},{id:11,type:"Epilations",subtype:"Maillot semi-intégral (MSI)",price:22,description:"",timePrestation:"30 min",timePause:15,timePrestationValue:30},{id:12,type:"Epilations",subtype:"Maillot Brésilien (MB)",price:16,description:"",timePrestation:"25 min",timePause:15,timePrestationValue:25},{id:13,type:"Epilations",subtype:"Maillot simple (MSI)",price:12,description:"",timePrestation:"15 min",timePause:15,timePrestationValue:15},{id:14,type:"Epilations",subtype:"Demi-jambe (DJ)",price:15,description:"",timePrestation:"30 min",timePause:15,timePrestationValue:30},{id:15,type:"Epilations",subtype:"Jambe entière (J)",price:22,description:"",timePrestation:"45 min",timePause:15,timePrestationValue:45},{id:16,type:"Epilations",subtype:"Aisselle (A)",price:11,description:"",timePrestation:"15 min",timePause:15,timePrestationValue:15},{id:17,type:"Epilations",subtype:"Sourcils (S)",price:10,description:"",timePrestation:"15 min",timePause:15,timePrestationValue:15},{id:18,type:"Epilations",subtype:"Lèvre (L)",price:6,description:"",timePrestation:"10 min",timePause:15,timePrestationValue:10},{id:19,type:"Epilations",subtype:"Menton (M)",price:5,description:"",timePrestation:"10 min",timePause:15,timePrestationValue:10},{id:20,type:"Forfait épilations",subtype:"Maillot intégral + jambes entières + aisselles",price:53,description:"",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90},{id:21,type:"Forfait épilations",subtype:"Maillot intégral + demi-jambes + aisselles",price:46,description:"",timePrestation:"1 heure 15",timePause:15,timePrestationValue:75},{id:22,type:"Forfait épilations",subtype:"Maillot semi-intégral + demi jambes + aisselles",price:43,description:"",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:23,type:"Forfait épilations",subtype:"Sourcil + lèvre + menton",price:16,description:"",timePrestation:"35 min",timePause:15,timePrestationValue:35},{id:24,type:"Forfait épilations",subtype:"Maillot intégral + jambes entières + aisselles + sourcil + lèvre",price:69,description:"",timePrestation:"1 heure 45",timePause:15,timePrestationValue:105},{id:25,type:"Soins des pieds",subtype:"PédiSpa",price:45,description:"Mise en beauté des pieds avec un bain des pieds, gommage, mise en forme de l'ongle, couper les cuticules et un massages des pieds.",timePrestation:"1 heure",timePause:15,timePrestationValue:60},{id:26,type:"Soins des pieds",subtype:"PédiSpa peeling",price:65,description:"Un PédiSpa complète + un masque anti-callosité avant le massage",timePrestation:"1 heure 30",timePause:15,timePrestationValue:90}];if(localStorage.storeCaeraSenses){var a=JSON.parse(localStorage.storeCaeraSenses);this.listCommand=i.filter((function(e){return a.includes(String(e.id))||a.includes(e.id)}));var s=0,n=0;this.listCommand.forEach((function(e){s+=e.price,n+=e.timePrestationValue})),this.priceCommand=s,this.lapsTimeCommand=n}}},oe=re,le=(0,r.Z)(oe,ie,ae,!1,null,"2517afc4",null),ue=le.exports,ce={name:"PrestationView",components:{MenuComponent:te,CalendarComponent:ue},computed:{boolAppearDivBtnFunc:function(){return this.boolAppearDivBtn}},data:function(){return{showBtnBasket:!0,step:0,boolAppearDivBtn:!1,showAlertMsg:!1}},methods:{nextStep:function(e){localStorage.storeCaeraSenses?this.step=e:this.showAlertMsg=!0},showAlertFunc:function(){this.showAlertMsg=!1}}},pe=ce,de=(0,r.Z)(pe,O,I,!1,null,"a5e9f35c",null),me=de.exports;a["default"].use(c.Z);var ve=[{path:"/",name:"home",component:F},{path:"/prestation",name:"prestation",component:me}],he=new c.Z({routes:ve}),fe=he,ge=i(8262),be=i(3266);a["default"].config.productionTip=!1,a["default"].use(ge.XG7),a["default"].use(be.A7),new a["default"]({router:fe,render:function(e){return e(u)}}).$mount("#app")},6990:function(e,t,i){"use strict";e.exports=i.p+"img/logo500.b50f88fb.png"}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,n){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],n=e[c][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(o=!1,n<r&&(r=n));if(o){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){i.p=""}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,n,r=a[0],o=a[1],l=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(l)var c=l(i)}for(t&&t(a);u<r.length;u++)n=r[u],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},a=self["webpackChunkvue_project_johana"]=self["webpackChunkvue_project_johana"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(2003)}));a=i.O(a)})();
//# sourceMappingURL=app-legacy.eec7e5d8.js.map