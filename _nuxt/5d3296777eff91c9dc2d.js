(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(e,t,r){"use strict";r(59),r(26),r(27),r(16),r(38);var n=r(24),o=(r(39),r(171)),c=r.n(o),l=r(60);function d(object,e){var t=Object.keys(object);return Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(object)),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t}var m={name:"SignupForm",props:{noorg:{default:!1,type:Boolean}},data:function(){return{email:"",password:"",name:"",org:!1}},methods:{signup:function(){var e=this,t=c.a.auth();t.createUserWithEmailAndPassword(this.email,this.password).then(function(r){var o=t.currentUser;l.b.collection("user").doc(o.uid).set({name:e.name,is_org:e.org}).then(function(t){e.$store.commit("user/loginUser",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},o,{is_org:e.org,name:e.name})),e.$router.push("/dashboard")}).catch(function(e){alert("Error updating profile. "+e.message)})},function(e){alert("Oops. "+e.message)})}}},v=r(9),component=Object(v.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[r("v-container",{staticClass:"pa-0"},[r("v-layout",[r("v-flex",[r("v-text-field",{attrs:{placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{type:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-text-field",{attrs:{placeholder:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),e.noorg?e._e():r("v-checkbox",{attrs:{label:"We are organisation"},model:{value:e.org,callback:function(t){e.org=t},expression:"org"}}),e._v(" "),r("v-btn",{attrs:{color:"primary",dark:"",large:"",type:"submit"}},[e._v("Sign Up")]),e._v(" "),r("v-divider")],1)],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},197:function(e,t,r){"use strict";r.r(t);var n=r(78),o=r(175),c={name:"SignupPage",components:{Logo:n.a,SignupForm:o.a}},l=r(9),component=Object(l.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticClass:"my-4"},[t("v-card-title",{staticClass:"headline text-xs-center",attrs:{"d-block":""}},[this._v("Signup")]),this._v(" "),t("v-card-text",[t("signup-form")],1),this._v(" "),t("v-card-actions")],1)},[],!1,null,null,null);t.default=component.exports}}]);