(this.webpackJsonpwatchstatistics=this.webpackJsonpwatchstatistics||[]).push([[0],{142:function(e){e.exports=JSON.parse('{"AF":"Africa","As":"Asia","ME":"Middle-East","CA":"Central-America","SA":"South-America","NA":"North-America","CEEU":"Central and Eastern Europe","WEU":"Western-Europe","OC":"Oceania"}')},143:function(e){e.exports=JSON.parse('{"M":"I\'m a man","AL":"I\'m a Women"}')},144:function(e){e.exports=JSON.parse('{"S":"Small","M":"Medium","Large":"Large"}')},279:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(10),n=a.n(c),i=a(130),s=a(12),j=a(145),o=a(326),b=a(23),d=a(61),l=a.n(d),m=a(89),O=a(17),u=a(90),x=a.n(u),h=a(2);function p(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)([]),i=Object(O.a)(n,2),s=i[0],j=i[1];Object(r.useEffect)((function(){Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/submitform");case 2:t=e.sent,j(t.data.submitform);case 4:case"end":return e.stop()}}),e)})))()}),[]);var o=function(){var e=Object(m.a)(l.a.mark((function e(t){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(r=new FormData).append("firstName",a),e.next=5,x.a.post("/submitForm",r);case 5:c=e.sent,j([c.data].concat(Object(b.a)(s)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:" App3000"}),Object(h.jsxs)("form",{onSubmit:o,children:[Object(h.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text"}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("main",{children:s.map((function(e){return Object(h.jsx)("figure",{children:Object(h.jsx)("figcaption",{children:e.firstName})},e.id)}))})]})}var f=a(316),g=a(281),v=a(313),w={padding:"50px 20px",width:600,margin:"20px auto"},S=Object(v.a)((function(e){return{formWrapper:{marginTop:e.spacing(8),marginBottom:e.spacing(8)}}})),W=function(){var e=S();return Object(h.jsx)(f.a,{maxWidth:"md",children:Object(h.jsxs)("div",{className:e.formWrapper,children:[Object(h.jsx)(p,{}),Object(h.jsx)(g.a,{elevation:3,style:w,children:Object(h.jsx)("form",{children:"Hello World"})})]})})},y={padding:"50px 20px",width:600,margin:"20px auto"},N=Object(v.a)((function(e){return{formWrapper:{marginTop:e.spacing(8),marginBottom:e.spacing(8)}}})),q=function(){var e=N();return Object(h.jsx)(f.a,{maxWidth:"md",children:Object(h.jsxs)("div",{className:e.formWrapper,children:[Object(h.jsx)(p,{}),Object(h.jsx)(g.a,{elevation:3,style:y,children:Object(h.jsx)("form",{children:"Hello World"})})]})})},F=a(318),A=Object(v.a)((function(e){return{formWrapper:{marginTop:e.spacing(10),marginBottom:e.spacing(8)}}})),C=function(){var e=A();return Object(h.jsx)(F.a,{item:!0,xs:12,children:Object(h.jsx)(f.a,{maxWidth:"md",children:Object(h.jsx)("div",{className:e.formWrapper,children:Object(h.jsx)(F.a,{container:!0,spacing:2,children:Object(h.jsx)(F.a,{item:!0,xs:12})})})})})},k=a(9),E=a(19),R=a(20),T=a(282),P=a(29),I=a(327),M=function(e){var t=e.name,a=Object(P.a)(e,["name"]),r=Object(E.c)(t),c=Object(O.a)(r,2),n=c[0],i=c[1],s=Object(k.a)(Object(k.a)(Object(k.a)({},n),a),{},{fullWidth:!0,variant:"outlined"});return i&&i.touched&&i.error&&(s.error=!0,s.helperText=i.error),Object(h.jsx)(I.a,Object(k.a)({},s))},B=a(329),z=function(e){var t=e.name,a=e.options,r=Object(P.a)(e,["name","options"]),c=Object(E.d)().setFieldValue,n=Object(E.c)(t),i=Object(O.a)(n,2),s=i[0],j=i[1],o=Object(k.a)(Object(k.a)(Object(k.a)({},s),r),{},{select:!0,variant:"outlined",fullWidth:!0,onChange:function(e){var a=e.target.value;c(t,a)}});return j&&j.touched&&j.error&&(o.error=!0,o.helperText=j.error),Object(h.jsx)(I.a,Object(k.a)(Object(k.a)({},o),{},{children:Object.keys(a).map((function(e,t){return Object(h.jsx)(B.a,{value:e,children:a[e]},t)}))}))},J=function(e){var t=e.name,a=Object(P.a)(e,["name"]),r=Object(E.c)(t),c=Object(O.a)(r,2),n=c[0],i=c[1],s=Object(k.a)(Object(k.a)(Object(k.a)({},n),a),{},{type:"date",variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0}});return i&&i.touched&&i.error&&(s.error=!0,s.helperText=i.error),Object(h.jsx)(I.a,Object(k.a)({},s))},L=a(319),H=a(320),U=a(321),V=a(322),D=a(328),Y=function(e){var t=e.name,a=e.label,r=e.legend,c=(Object(P.a)(e,["name","label","legend"]),Object(E.d)().setFieldValue),n=Object(E.c)(t),i=Object(O.a)(n,2),s=i[0],j=i[1],o=Object(k.a)(Object(k.a)({},s),{},{onChange:function(e){var a=e.target.checked;c(t,a)}}),b={};return j&&j.touched&&j.error&&(b.error=!0),Object(h.jsxs)(L.a,Object(k.a)(Object(k.a)({},b),{},{children:[Object(h.jsx)(H.a,{component:"legend",children:r}),Object(h.jsx)(U.a,{children:Object(h.jsx)(V.a,{control:Object(h.jsx)(D.a,Object(k.a)({},o)),label:a})})]}))},G=a(323),K=function(e){var t=e.children,a=(Object(P.a)(e,["children"]),Object(E.d)().submitForm),r={style:{backgroundColor:"#326B99",color:"#FFFFFF"},variant:"contained",onClick:function(){a()}};return Object(h.jsx)(G.a,Object(k.a)(Object(k.a)({},r),{},{children:t}))},Q=a(142),X=a(143),Z=a(144),$=Object(v.a)((function(e){return{formWrapper:{marginTop:e.spacing(10),marginBottom:e.spacing(8)}}})),_={firstName:"",lastName:"",email:"",userName:"",password:"",confirmPassword:"",birthday:"",gender:"",region:"",wristSize:"",message:"",termsOfService:!1},ee=R.c().shape({firstName:R.e().required("Required"),lastName:R.e().required("Required"),email:R.e().email("Invalid email.").required("Required"),userName:R.e().required("Required"),password:R.e().required("Required"),confirmPassword:R.e().oneOf([R.d("password"),""],"Passwords must Match").required("Required"),birthday:R.b().required("Required"),gender:R.e().required("Required"),region:R.e().required("Required"),wristSize:R.e().required("Required"),message:R.e(),termsOfService:R.a().oneOf([!0],"The terms and conditions must be accepted.").required("The terms and conditions must be accepted.")}),te=function(){var e=$();return Object(h.jsx)(F.a,{item:!0,xs:12,children:Object(h.jsx)(f.a,{maxWidth:"md",children:Object(h.jsx)("div",{className:e.formWrapper,children:Object(h.jsx)(E.b,{initialValues:Object(k.a)({},_),validationSchema:ee,onSubmit:function(e){console.log(e)},children:Object(h.jsx)(E.a,{children:Object(h.jsxs)(F.a,{container:!0,spacing:2,children:[Object(h.jsx)(F.a,{item:!0,xs:12,children:Object(h.jsx)(T.a,{children:"Personal details"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(M,{name:"firstName",label:"First Name"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(M,{name:"lastName",label:"Last Name"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(M,{name:"email",label:"Email"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(M,{name:"userName",label:"Username"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(M,{type:"password",name:"password",label:"Password"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(M,{type:"password",name:"confirmPassword",label:"ConfirmPassword"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(J,{name:"birthday",label:"When were you born?"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(z,{name:"gender",label:"Are You a man or a woman?",options:X})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(z,{name:"region",label:"What is your region?",options:Q})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(z,{name:"wristSize",label:"What is your wrist size?",options:Z})}),Object(h.jsx)(F.a,{item:!0,xs:12,children:Object(h.jsx)(M,{name:"message",label:"Message",multiline:!0,rows:4})}),Object(h.jsx)(F.a,{item:!0,xs:12,children:Object(h.jsx)(Y,{name:"termsOfService",legend:"Terms Of Service",label:"I agree"})}),Object(h.jsx)(F.a,{item:!0,xs:6,children:Object(h.jsx)(K,{children:"Submit Form"})})]})})})})})})},ae=a(40),re=a(325),ce=a(324);var ne=function(){return Object(h.jsx)(f.a,{maxWidth:"md",children:Object(h.jsx)(ce.a,{color:"secondary",elevation:0,style:{background:"transparent"},children:Object(h.jsxs)(re.a,{children:[Object(h.jsx)(G.a,{component:ae.b,to:"/",children:"Home"}),Object(h.jsx)(G.a,{children:"Index"}),Object(h.jsx)(G.a,{component:ae.b,to:"/about",children:"About"}),Object(h.jsx)(G.a,{component:ae.b,to:"/contacts",children:"Contacts"}),Object(h.jsx)(G.a,{component:ae.b,to:"/signup",children:"Signup"})]})})})},ie=Object(j.a)({typography:{h2:{fontSize:18}},palette:{background:{default:"#FCFAF9"},primary:{main:"#FCFAF9"},secondary:{main:"#373332"}}});var se=function(){return Object(h.jsxs)(o.a,{theme:ie,children:[Object(h.jsx)(F.a,{children:Object(h.jsx)(F.a,{item:!0,xs:12,children:Object(h.jsx)(ne,{})})}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",exact:!0,component:C}),Object(h.jsx)(s.a,{path:"/about",exact:!0,component:W}),Object(h.jsx)(s.a,{path:"/contacts",exact:!0,component:q}),Object(h.jsx)(s.a,{path:"/signup",exact:!0,component:te})]})]})};n.a.render(Object(h.jsxs)(ae.a,{children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)("meta",{charSet:"utf-8"}),Object(h.jsx)("title",{children:"WatchStatistics"})]}),Object(h.jsx)(se,{})]}),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.82f3ed2f.chunk.js.map