import{_ as V,S as z,r as C,o as c,c as h,f as e,n as E,v as I,u as T,t as u,m as U,j as Y,b as i,l as g,w as t,d as s,h as a,g as D,F as P}from"../js/app2.js";import{L as F,P as H}from"./page-header-e847031b.js";import{i as y}from"./index-766558cd.js";const G={name:"createRole",setup(m,_){const{newAxios:p}=z(),o=C({}),v=C({});return{errors:v,form:o,getStoreRole:async()=>{await p.post("/admin/roles",o.value).then(r=>{if(r.data.type=="error")return y.warning(r.data.text,{autoClose:1e3}),!1;_.emit("getRolesList"),y.success(r.data.text,{autoClose:1e3}),document.getElementById("close").click()}).catch(r=>{r.response.status===422&&(v.value=r.response.data.errors)})}}}},K={class:"modal fade",id:"CreateRoleModal",tabindex:"-1","aria-labelledby":"CreateRoleModalLabel","aria-hidden":"true"},$={class:"modal-dialog"},q={class:"modal-content"},J=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"CreateRoleModalLabel"},"Yeni Rol Oluşturma"),e("button",{type:"button",id:"close",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},W={class:"mb-3"},X=e("label",{for:"exampleInputEmail1",class:"form-label"},"Rol Adı ",-1),Z={key:0,class:"form-text text-danger"},ee={class:"mb-3"},te=e("label",{for:"exampleInputEmail1",class:"form-label"},"Rol Adı ",-1),se={class:"modal-footer"},oe=e("button",{type:"button",class:"btn btn-link","data-bs-dismiss":"modal"},"Close",-1);function le(m,_,p,o,v,w){return c(),h("div",K,[e("div",$,[e("div",q,[J,e("div",Q,[e("div",W,[X,E(e("input",{"onUpdate:modelValue":_[0]||(_[0]=r=>o.form.name=r),type:"text",class:T(["form-control",{"is-invalid":o.errors&&o.errors.name}])},null,2),[[I,o.form.name]]),o.errors&&o.errors.name?(c(),h("div",Z,u(o.errors.name[0]),1)):U("",!0)]),e("div",ee,[te,E(e("textarea",{"onUpdate:modelValue":_[1]||(_[1]=r=>o.form.description=r),class:"form-control",rows:"3"},null,512),[[I,o.form.description]])])]),e("div",se,[oe,e("button",{type:"button",onClick:_[2]||(_[2]=r=>o.getStoreRole()),class:"btn btn-success"},"Kaydet")])])])])}const ae=V(G,[["render",le]]),ne={name:"UseDropzoneDemo",components:{Layout:F,PageHeader:H,CreateRole:ae},setup(){const{newAxios:m}=z(),_="ROL YÖNETİMİ",p=C([]),o=C([]),v=C([]),w=C([]),r=[{text:"ANASAYFA",href:"/"},{text:"ROL YÖNETİMİ",active:!0}];Y(()=>{x()});const x=async()=>{let d=await m.get("/admin/roles/list");o.value=d.data},L=async d=>{let l=await m.post("/admin/roles/show",{id:d});w.value=l.data.permissions,p.value=l.data.role,k(l.data.role.name)},A=async(d,l)=>{let S=await m.post("/admin/roles/updatePermissionsStatus",{role_id:d,permission_id:l});y.success(S.data.text,{autoClose:1e3})},k=async d=>{let l=await m.post("/admin/roles/users",{name:d});v.value=l.data};return{title:_,items:r,role:p,roles:o,users:v,getRolesList:x,getUserPermissions:L,permissions:w,updatePermissionStatus:A,getRoleUserList:k,getRemoveUser:async d=>{let l=await m.post("/admin/roles/add_or_remove",{user_id:d,role_name:p.value.name});if(l.data.type=="error")return y.error(l.data.text,{autoClose:1e3}),!1;y.success(l.data.text,{autoClose:1e3}),x(),k(p.value.name)},getDeleteRole:async d=>{let l=await m.post("/admin/roles/destroy",{id:d});if(l.data.type=="error")return y.error(l.data.text,{autoClose:1e3}),!1;y.success(l.data.text,{autoClose:1e3}),p.value=[],x(),k(p.value.name)}}}},ce={class:"row"},re={class:"col-md-4"},ie={class:"card"},de=e("div",{class:"card-header"},[e("h6",{class:"card-title mb-0"},"Roller Listesi")],-1),_e={class:"card-body"},ue=e("i",{class:"bi bi-file-earmark-plus"},null,-1),me={class:"flex-shrink-0 ms-2"},be={class:"fs-md mb-0"},fe={class:"text-muted"},pe={class:"badge bg-success"},he={class:"col-md-8"},ve={class:"card"},ge={class:"card-header d-flex justify-content-between"},ye={key:0,class:"card-title mb-0"},xe={class:"text-primary"},ke={class:"card-body"},Re={class:"form-check form-switch"},Ce=["onChange","checked"],we={class:"form-check form-switch"},Le=["onChange","checked"],Se={class:"d-flex gap-2 align-items-center"},De={class:"flex-shrink-0"},Pe=["src"],Ue={class:"flex-grow-1"},Ae=e("i",{class:"ri-checkbox-circle-line fs-xl align-middle"},null,-1),Me=e("i",{class:"bi bi-trash"},null,-1),Ne={key:1,class:"alert alert-warning",role:"alert"};function Ee(m,_,p,o,v,w){const r=i("PageHeader"),x=i("CreateRole"),L=i("b-button"),A=i("b-list-group-item"),k=i("b-list-group"),b=i("b-th"),R=i("b-tr"),d=i("b-thead"),l=i("b-td"),S=i("b-tbody"),M=i("b-table-simple"),N=i("b-tab"),B=i("b-link"),j=i("b-tabs"),O=i("Layout");return c(),g(O,null,{default:t(()=>[s(r,{title:o.title,items:o.items},null,8,["title","items"]),s(x,{onGetRolesList:o.getRolesList},null,8,["onGetRolesList"]),e("div",ce,[e("div",re,[e("div",ie,[de,e("div",_e,[m.$can(["create role"])?(c(),g(L,{key:0,type:"button",class:"btn-success mb-2",variant:"success","data-bs-toggle":"modal","data-bs-target":"#CreateRoleModal"},{default:t(()=>[ue,a(" Rol Oluştur")]),_:1})):U("",!0),s(k,null,{default:t(()=>[(c(!0),h(P,null,D(o.roles,n=>(c(),g(A,{button:"",tag:"li",onClick:f=>o.getUserPermissions(n.id),class:"list-group-item d-flex justify-content-between align-items-center"},{default:t(()=>{var f;return[e("div",me,[e("h6",be,u(n.name),1),e("small",fe,u(n.description),1)]),e("span",pe,u((f=n.users)==null?void 0:f.length),1)]}),_:2},1032,["onClick"]))),256))]),_:1})])])]),e("div",he,[e("div",ve,[e("div",ge,[o.role.id?(c(),h("h6",ye,[a("Rol : "),e("span",xe,[e("b",null,u(o.role.name)+" rolüne ait izinler",1)])])):U("",!0),m.$can(["delete role"])&&o.role.id?(c(),h("button",{key:1,type:"button",class:"btn btn-danger btn-sm",onClick:_[0]||(_[0]=n=>o.getDeleteRole(o.role.id))},"Rol Sil")):U("",!0)]),e("div",ke,[o.role.id?(c(),g(j,{key:0,"nav-class":"nav-border-top nav-border-top-primary mb-3","content-class":"text-muted"},{default:t(()=>[s(N,{title:"İzinler"},{default:t(()=>[s(M,{responsive:"",class:"align-middle table-nowrap mb-4"},{default:t(()=>[s(d,{class:"table-light"},{default:t(()=>[s(R,null,{default:t(()=>[s(b,{scope:"col"},{default:t(()=>[a("ID")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Permission")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Description")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("admin")]),_:1})]),_:1})]),_:1}),(c(!0),h(P,null,D(o.permissions,n=>(c(),g(S,null,{default:t(()=>[s(R,{class:"table-warning"},{default:t(()=>[s(l,{colspan:"3"},{default:t(()=>[e("b",null,u(n.description),1)]),_:2},1024),s(l,{class:"text-right"},{default:t(()=>[e("div",Re,[e("input",{class:"form-check-input",onChange:f=>o.updatePermissionStatus(o.role.id,n.id),type:"checkbox",role:"switch",id:"SwitchCheck2",checked:n.selected===!0},null,40,Ce)])]),_:2},1024)]),_:2},1024),(c(!0),h(P,null,D(n.children,f=>(c(),g(R,null,{default:t(()=>[s(l,null,{default:t(()=>[a(u(f.id),1)]),_:2},1024),s(l,null,{default:t(()=>[a(u(f.name),1)]),_:2},1024),s(l,null,{default:t(()=>[a(u(f.description),1)]),_:2},1024),s(l,null,{default:t(()=>[e("div",we,[e("input",{class:"form-check-input",onChange:Ie=>o.updatePermissionStatus(o.role.id,f.id),type:"checkbox",role:"switch",id:"SwitchCheck2",checked:f.selected===!0},null,40,Le)])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024))),256))]),_:1})]),_:1}),s(N,{title:"Kullanıcı Listesi"},{default:t(()=>[s(M,{responsive:"",class:"align-middle table-nowrap mb-0"},{default:t(()=>[s(d,{class:"table-light"},{default:t(()=>[s(R,null,{default:t(()=>[s(b,{scope:"col"},{default:t(()=>[a("ID")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Name")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Email")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Register Date")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Status")]),_:1}),s(b,{scope:"col"},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),s(S,null,{default:t(()=>[(c(!0),h(P,null,D(o.users,n=>(c(),g(R,null,{default:t(()=>[s(l,null,{default:t(()=>[s(B,{href:"#",class:"fw-medium"},{default:t(()=>[a("#"+u(n.id),1)]),_:2},1024)]),_:2},1024),s(l,null,{default:t(()=>[e("div",Se,[e("div",De,[e("img",{src:"/build/images/avatar-3.jpg",alt:"",class:"avatar-xs rounded-circle"},null,8,Pe)]),e("div",Ue,u(n.name),1)])]),_:2},1024),s(l,null,{default:t(()=>[a(u(n.email),1)]),_:2},1024),s(l,null,{default:t(()=>[a(u(n.created_at),1)]),_:2},1024),s(l,{class:"text-success"},{default:t(()=>[Ae,a(" Active ")]),_:1}),s(l,null,{default:t(()=>[s(L,{type:"button",onClick:f=>o.getRemoveUser(n.id),class:"btn btn-danger btn-sm",variant:"danger"},{default:t(()=>[Me]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})):(c(),h("div",Ne," Lütfen bir rol seçiniz. "))])])])])]),_:1})}const je=V(ne,[["render",Ee]]);export{je as default};