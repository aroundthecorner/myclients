import{e as a,b as s,d as l,n as e,o as i,a as o,p as t,T as n,q as c,v as u,u as r,x as g,y as p,j as d,w as _,F as v,i as f,z as h,A as m,l as w}from"./index.95106c2b.js";import{s as x}from"./Button.vue_vue&type=script&setup=true&lang.0325f5c7.js";import{s as k,_ as y}from"./User.33e2aec6.js";import{s as b}from"./Lock.64cbc44e.js";const L={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},j=l("g",null,[l("g",null,[l("path",{d:"M378.305,173.859c-5.857-5.856-15.355-5.856-21.212,0.001L224.634,306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l80.333,80.333c2.929,2.929,6.768,4.393,10.606,4.393c3.838,0,7.678-1.465,10.606-4.393l143.066-143.066C384.163,189.215,384.163,179.717,378.305,173.859z"})])],-1),B=l("g",null,null,-1),C=l("g",null,null,-1);const U={render:function(l,e){return a(),s("svg",L,[j,B,C])}},E=l("title",null,"Login - myclients",-1),P={class:"login-page"},z=l("div",{class:"page__logo-container"},[l("img",{class:"page__logo",src:y,alt:"Logo"})],-1),A={class:"auth-page__main"},F=l("div",{class:"login-page__illustration"},[l("img",{class:"login-page__illustration-img",src:"/img/login_illustration.png",alt:"Illustration"})],-1),I={class:"auth-page__login-form"},K=l("div",{class:"auth-page__title"},"Welcome Back",-1),V=l("div",{class:"auth-page__subtitle"}," Please login with your personal email and password ",-1),q={class:"auth-page__form-container"},M={class:"auth-page__form"},N={class:"auth-page__field auth-page__field--email"},T={class:"auth-page__field-icon"},W={class:"auth-page__field-container"},D=l("div",{class:"auth-page__field-label"}," Email ",-1),G={class:"login-page__login-check-container"},H={key:0,class:"login-page__login-check"},J={class:"auth-page__field"},O={class:"auth-page__field-icon"},Q={class:"auth-page__field-container"},R=l("div",{class:"auth-page__field-label"}," Password ",-1),S=l("div",{class:"login-page__login-check-container"},null,-1),X={class:"login-page__forgot-password"},Y=w(" Forgot Password? "),Z={class:"auth-page__buttons"},$=w(" Login Now "),aa=w(" Create Account "),sa=l("div",{class:"v-spacer-50"},null,-1);var la={expose:[],setup(w){const{login:y,email:L,password:j,isLoading:B,userLoggedIn:C,checkUserExists:la,userExists:ea}=e(),ia=f("progressBar");return i((()=>{ia.start()})),o((()=>{ia.finish()})),C()&&t.push({name:"dashboard"}),(e,i)=>{const o=h("router-link"),t=m("focus");return a(),s(v,null,[(a(),s(n,{to:"head"},[E])),l("div",P,[z,l("div",A,[F,l("div",I,[K,V,l("div",q,[l("div",M,[l("div",N,[l("div",T,[l(k)]),l("div",W,[D,c(l("input",{onKeyup:i[1]||(i[1]=g(((...a)=>r(y)(...a)),["enter"])),"onUpdate:modelValue":i[2]||(i[2]=a=>p(L)?L.value=a:null),onBlur:i[3]||(i[3]=(...a)=>r(la)(...a)),class:"auth-page__field-input",type:"text"},null,544),[[u,r(L)],[t]])]),l("div",G,[r(ea)?(a(),s("div",H,[l(U)])):d("",!0)])]),l("div",J,[l("div",O,[l(b)]),l("div",Q,[R,c(l("input",{onKeyup:i[4]||(i[4]=g(((...a)=>r(y)(...a)),["enter"])),"onUpdate:modelValue":i[5]||(i[5]=a=>p(j)?j.value=a:null),class:"auth-page__field-input",type:"password"},null,544),[[u,r(j)]])]),S])]),l("div",X,[l(o,{to:"/forgot-password",class:"auth-page__forgot-link"},{default:_((()=>[Y])),_:1})]),l("div",Z,[l(x,{onClick:r(y),class:"button--primary","is-loading":r(B),"loading-color":"#fff"},{default:_((()=>[$])),_:1},8,["onClick","is-loading"]),l(o,{to:"/register"},{default:_((()=>[l(x,null,{default:_((()=>[aa])),_:1})])),_:1})]),sa])])])])],64)}}};export default la;
