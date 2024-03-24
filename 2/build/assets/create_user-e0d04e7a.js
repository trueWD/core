import{_ as L,S as N,r as S,b as i,o as l,c as d,f as s,h as _,t as c,d as n,w as r,m as f,n as k,v as w,u as C,l as A,F as D,g as I}from"../js/app2.js";import{i as y}from"./index-766558cd.js";const K={name:"createUser",setup(B,t){const{newAxios:b}=N(),e=S({}),v=S({}),R=async()=>{await b.post("/admin/users",e.value).then(o=>{if(o.data.type=="error")return y.warning(o.data.text,{autoClose:1e3}),!1;t.emit("getUsersList"),y.success(o.data.text,{autoClose:1e3}),h(o.data.id),v.value={}}).catch(o=>{o.response.status===422&&(v.value=o.response.data.errors)})},U=async()=>{await b.post("/admin/users/update",e.value).then(o=>{if(o.data.type=="error")return y.warning(o.data.text,{autoClose:1e3}),!1;t.emit("getUsersList"),y.success(o.data.text,{autoClose:1e3}),document.getElementById("close").click(),v.value={}}).catch(o=>{o.response.status===422&&(v.value=o.response.data.errors)})},h=async o=>{e.value={};let u=await b.get("/admin/users/"+o);e.value=u.data,p()},m=S([]),p=async o=>{m.value=[];let u=await b.post("/admin/users/user_roles",{id:e.value.id});m.value=u.data.roels_list};return{errors:v,form:e,getStoreUser:R,getAndSetRecord:o=>{if(!o)return!1;console.log(o)},getUserInfo:h,getUpdateUser:U,user_roles:m,getUserRoles:p,getAddOrRemove:async(o,u)=>{let x=await b.post("/admin/roles/add_or_remove",{user_id:o,role_name:u});if(x.data.type=="error")return y.error(x.data.text,{autoClose:1e3}),!1;y.success(x.data.text,{autoClose:1e3}),p(),t.emit("getUsersList")}}}},M={class:"modal fade",id:"CreateUserModal",tabindex:"-1","aria-labelledby":"CreateUserModalLabel","aria-hidden":"true"},O={class:"modal-dialog modal-lg"},T={class:"modal-content"},E={class:"modal-header"},z={key:0,class:"modal-title fs-5"},F={class:"text-danger"},G={key:1,class:"modal-title fs-5"},Y=s("button",{type:"button",id:"close",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},H={key:0,class:"text-center"},P=["src"],W={class:"row"},q={class:"col-md-6"},J={class:"mb-3"},Q=s("label",{for:"name",class:"form-label"},"Adı Soyadı ",-1),X={key:0,class:"form-text text-danger"},Z={class:"row"},$={class:"col-md-6"},ee={class:"mb-3"},se=s("label",{for:"name",class:"form-label"},"Adı Soyadı ",-1),oe={key:0,class:"form-text text-danger"},te={class:"col-md-6"},ae={class:"mb-3"},re=s("label",{for:"email",class:"form-label"},"Email ",-1),le={key:0,class:"form-text text-danger"},ne={class:"row"},de={class:"col-md-6"},ie={class:"mb-3"},ce=s("label",{for:"name",class:"form-label"},"Şifre ",-1),me={key:0,class:"form-text text-danger"},_e={class:"col-md-6"},fe={class:"mb-3"},ue=s("label",{for:"email",class:"form-label"},"Şifre Tekrarı ",-1),be={key:0,class:"form-text text-danger"},ve={class:"form-check form-switch"},he=["onChange","checked"],pe=s("div",{class:"modal-footer"},[s("button",{type:"button",class:"btn btn-link","data-bs-dismiss":"modal"},"Close")],-1);function ye(B,t,b,e,v,R){const U=i("Selectus"),h=i("b-tab"),m=i("b-th"),p=i("b-tr"),V=i("b-thead"),g=i("b-td"),o=i("b-tbody"),u=i("b-table-simple"),x=i("b-tabs");return l(),d("div",M,[s("div",O,[s("div",T,[s("div",E,[e.form.id?(l(),d("h1",z,[_("Kullanıcı Düzenle : "),s("span",F,c(e.form.name),1)])):(l(),d("h1",G,"Yeni Kullanıcı Oluştur")),Y]),s("div",j,[n(x,{"nav-class":"nav-border-top nav-border-top-primary mb-3","content-class":"text-muted"},{default:r(()=>[n(h,{title:"Profil Bilgileri"},{default:r(()=>[e.form.id?(l(),d("div",H,[s("img",{src:"/build/images/avatar-3.jpg",class:"avatar-xl rounded-4",alt:"rounded-4"},null,8,P)])):f("",!0),s("div",W,[s("div",q,[s("div",J,[Q,n(U,{"end-point":"/search/selectus",columns:["name"],placeholder:"Lütfen Seçiniz",onGetRecord:t[0]||(t[0]=a=>e.getAndSetRecord(a,"roles")),params:{TB_NAME:"User",COLUMNS:["name","email","id"],WITH:["roles"]}}),e.errors&&e.errors.name?(l(),d("div",X,c(e.errors.name[0]),1)):f("",!0)])])]),s("div",Z,[s("div",$,[s("div",ee,[se,k(s("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.form.name=a),type:"text",class:C(["form-control",{"is-invalid":e.errors&&e.errors.name}])},null,2),[[w,e.form.name]]),e.errors&&e.errors.name?(l(),d("div",oe,c(e.errors.name[0]),1)):f("",!0)])]),s("div",te,[s("div",ae,[re,k(s("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>e.form.email=a),type:"text",class:C(["form-control",{"is-invalid":e.errors&&e.errors.email}])},null,2),[[w,e.form.email]]),e.errors&&e.errors.email?(l(),d("div",le,c(e.errors.email[0]),1)):f("",!0)])])]),s("div",ne,[s("div",de,[s("div",ie,[ce,k(s("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.password=a),type:"password",class:C(["form-control",{"is-invalid":e.errors&&e.errors.password}])},null,2),[[w,e.form.password]]),e.errors&&e.errors.password?(l(),d("div",me,c(e.errors.password[0]),1)):f("",!0)])]),s("div",_e,[s("div",fe,[ue,k(s("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.password_confirmation=a),type:"password",class:C(["form-control",{"is-invalid":e.errors&&e.errors.password_confirmation}])},null,2),[[w,e.form.password_confirmation]]),e.errors&&e.errors.password_confirmation?(l(),d("div",be,c(e.errors.password_confirmation[0]),1)):f("",!0)])])]),e.form.id?(l(),d("button",{key:1,type:"button",onClick:t[5]||(t[5]=a=>e.getUpdateUser()),class:"btn btn-primary"},"Güncelle")):(l(),d("button",{key:2,type:"button",onClick:t[6]||(t[6]=a=>e.getStoreUser()),class:"btn btn-success"},"Kaydet"))]),_:1}),e.form.id?(l(),A(h,{key:0,title:"Kullanıcı Yetkileri"},{default:r(()=>[n(u,{responsive:"",class:"align-middle table-nowrap mb-4"},{default:r(()=>[n(V,{class:"table-light"},{default:r(()=>[n(p,null,{default:r(()=>[n(m,{scope:"col"},{default:r(()=>[_("ID")]),_:1}),n(m,{scope:"col"},{default:r(()=>[_("Role")]),_:1}),n(m,{scope:"col"},{default:r(()=>[_("Description")]),_:1}),n(m,{scope:"col"},{default:r(()=>[_("admin")]),_:1})]),_:1})]),_:1}),n(o,null,{default:r(()=>[(l(!0),d(D,null,I(e.user_roles,a=>(l(),A(p,null,{default:r(()=>[n(g,null,{default:r(()=>[_(c(a.id),1)]),_:2},1024),n(g,null,{default:r(()=>[_(c(a.name),1)]),_:2},1024),n(g,null,{default:r(()=>[_(c(a.description),1)]),_:2},1024),n(g,null,{default:r(()=>[s("div",ve,[s("input",{class:"form-check-input",onChange:ge=>e.getAddOrRemove(e.form.id,a.name),type:"checkbox",role:"switch",id:"SwitchCheck2",checked:a.selected===!0},null,40,he)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})):f("",!0),e.form.id?(l(),A(h,{key:1,title:"Kullanıcı Aktivitesi"})):f("",!0)]),_:1})]),pe])])])}const we=L(K,[["render",ye]]);export{we as C};
