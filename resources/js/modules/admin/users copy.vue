<template>
  <Layout>
    <CreateUser @getUsersList="getUsersList"  ref="createUser" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h6 class="card-title mb-0">Kullanıcı Listesi</h6>
          </div>
          <div class="card-body">
            <button v-if="$can(['create user'])" type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#CreateUserModal">Create User</button>

            <table-simple responsive class="align-middle table-nowrap mb-0" v-if="$can(['user management'])">
              <thead class="table-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Roles</th>
                    <th scope="col">Register Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Login</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in userList">
                      <td><a @click="$refs.createUser.getUserInfo(item.id)"  data-bs-toggle="modal" data-bs-target="#CreateUserModal" class="fw-medium">#{{ item.id }}</a></td>
                      <td>
                          <div class="d-flex gap-2 align-items-center">
                              <div class="flex-shrink-0">
                                  <img v-if="item.profile_photo_url" :src="item.profile_photo_url" alt="" class="avatar-xs rounded-circle" />
                                  <img v-else  :src="'/img/no_avatar.png'" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">
                                  {{ item.name}}
                                  <badge class="bg-danger me-1" v-if="item.id === store.user.id && store.user.impersonated_by === null"> You</badge>
                                  <badge class="bg-danger me-1" v-if="item.id === store.user.impersonated_by"> Siz</badge>
                                  <badge class="bg-success me-1" v-if="item.id === store.user.id">Connected</badge>
                              </div>
                          </div>
                      </td>
                      <td>{{ item.email}}</td>
                      <td>

                        <span v-for="row in item?.roles">

                          <a href="#">


                            <badge variant="success-subtle" class="text-danger badge-border m-1" v-if="row.name == 'root'">{{ row.name}}</badge>
                            <badge variant="danger-subtle" class="text-success badge-border m-1" v-else>{{ row.name}}</badge>

                          </a>

                        </span>

                      </td>
                      <td>{{ item.created_at}}</td>
                      <td class="text-success">
                        <i class="ri-checkbox-circle-line fs-xl align-middle"></i>
                        Active
                      </td>
                      <td>




                        <button type="button" class="btn btn-danger btn-sm" @click="leaveUser(item.id)" v-if="item.id === store.user.id && store.user.impersonated_by !=null">
                          <i class="bi bi-login"></i>Logout
                        </button>
                        <button type="button" class="btn btn-primary btn-sm" @click="loginAs(item.id)"  v-if="item.id !== store.user.id && item.id !== store.user.impersonated_by">
                          <i class="bi bi-login"></i>Login As
                        </button>
                        <button type="button" class="btn btn-warning btn-sm" @click="leaveUser(item.id)" v-if="item.id === store.user.impersonated_by">
                          <i class="bi bi-login"></i>Back to my account
                        </button>


                      </td>
                  </tr>
              </tbody>
            </table-simple>



          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/layout.vue";
import { onMounted, ref } from "vue";
import Service from '@/Utils/Service.js';
import CreateUser from '@/modules/admin/create_user.vue';
import { toast } from 'vue3-toastify';
import { appStore } from "@/stores/App";

import router from '@/routes/index.js';


export default {
  name: "usersList",
  components: {
    Layout,
    CreateUser,
  },
  setup() {
    const {newAxios} =  Service()
    const title = ref("Kullanıcı Yönetimi");
    const items = ref([
      {
        text: "ANASAYFA",
        href: "/",
      },
      {
        text: "KULLANICI YÖNETİMİ",
        active: true,
      },
    ]);
    const store = appStore();

    const userList = ref([]);

    onMounted(() => {
      getUsersList();
    });



    const getUsersList = async() =>{
        let response = await newAxios.get('/admin/users/list');
        userList.value = response.data;
    }

    const loginAs = async(id) =>{
        await newAxios.post('/admin/users/login_as',{id:id}).then(res => {
          if(res.data.type === 'error'){
            toast.warning( res.data.text, {autoClose: 1000,});
            return false;
          }else{
            toast.success( res.data.text, {autoClose: 1000,});

            setTimeout(function(){
              store.user = res.data.user;
              router.push({ name: 'Users' });
            }, 1000);
          }
        }).catch(e => {
          toast.success( 'Server error 2002', {autoClose: 1000,});
      })
    }

    const leaveUser = async(id) =>{
        await newAxios.post('/admin/users/leave_user',{id:id}).then(res => {
          if(res.data.type === 'error'){
            toast.warning( res.data.text, {autoClose: 1000,});
            return false;
          }else{
            toast.success( res.data.text, {autoClose: 1000,});

            setTimeout(function(){
              store.user = res.data.user;
              router.push({ name: 'Users' });
            }, 1000);
          }
        }).catch(e => {
          toast.success( 'Server error 2002', {autoClose: 1000,});
      })
    }





    return {
      title,
      items,
      getUsersList,
      userList,
      loginAs,
      store,
      leaveUser,
    };
  },
};
</script>


