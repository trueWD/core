

<script setup>
import { ref, onMounted } from "vue";
import Layout from "@/layouts/layout.vue";
import { usersStore } from '@/stores/admin/usersStore.js';
import { loginStore } from '@/stores/auth/login.js';
import { appStore } from '@/stores/App.js';
import CreateUser from '@/modules/admin/create_user.vue';
const useUsersStore = usersStore()
const login = loginStore()
const user = appStore()

onMounted(() => {
  useUsersStore.getUsersList()
})

</script>
<template>

  <CreateUser />

  <Layout>
    <!-- Style combinations -->
    <div class="card">
      <div class="card-header">
        <h6 class="mb-0">KULLANICI LİSTESİ</h6>
      </div>

      <div class="card-body">


          <button type="button"  class="btn btn-success btn-sm mb-2" v-if="$can(['create user'])" data-bs-toggle="modal" data-bs-target="#modal_large" @click="useUsersStore.form = {}"> <i class="ph-plus "></i> Create User</button>

        <div class="table-responsive">
            <table class="table datatable-basic table-bordered table-striped table-hover table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Register Date</th>
                  <th>Status</th>
                  <th>Login</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in useUsersStore.users" :key="index">
                  <td>

                    <div class="d-inline-flex">
                      <div class="dropdown">
                        <a href="#" class="text-body" data-bs-toggle="dropdown">
                          <i class="ph-list"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-start">
                          <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal_large" @click="useUsersStore.getUserInfo(item.id)">
                            <i class="ph-pencil-simple-line me-2"></i>
                            Düzenle
                          </a>

                          <a href="#" class="dropdown-item text-warning">
                            <i class="ph-trash me-2"></i>
                            Sil
                          </a>
                        </div>
                      </div>
                    </div>

                  </td>
                  <td>{{ item.id }}</td>
                  <td>
                    <img v-if="item.profile_photo_url" :src="item.profile_photo_url" class="rounded-circle" width="40" height="40" alt="">
                    <img v-else  :src="'/global_assets/images/no_avatar.png'" class="rounded-circle" width="40" height="40" alt="">
                  </td>
                  <td>
                    {{ item.name }}

                    <span class="badge bg-danger" v-if="item.id === user.user.id && user.user.impersonated_by === null"> You</span>
                    <span class="badge bg-danger" v-if="item.id === user.user.impersonated_by"> Siz</span>
                    <span class="badge bg-success" v-if="item.id === user.user.id">Connected</span>

                  </td>
                  <td>{{ item.email }}</td>
                  <td class="text-nowrap">
                    <span v-for="row in item?.roles" class="badge bg-primary bg-opacity-20 text-primary  me-1">{{ row.name}}</span>
                  </td>
                  <td>{{ item.created_at }}</td>

                  <td><span class="badge bg-success bg-opacity-10 text-success">Active</span></td>
                  <td>
                    <button type="button" class="btn btn-warning btn-sm" @click="login.leaveUser(item.id)" v-if="item.id === user.user.id && user.user.impersonated_by !=null">
                          <i class="bi bi-login"></i>Logout
                        </button>
                        <button type="button" class="btn btn-primary btn-sm" @click="login.loginAs(item.id)"  v-if="item.id !== user.user.id && item.id !== user.user.impersonated_by">
                          <i class="bi bi-login"></i>Login As
                        </button>
                        <button type="button" class="btn btn-warning btn-sm" @click="login.leaveUser(item.id)" v-if="item.id === user.user.impersonated_by">
                          <i class="bi bi-login"></i>Bagck
                        </button>
                  </td>

                </tr>
              </tbody>
            </table>
        </div>
      </div>

    </div>
    <!-- /style combinations -->




  </Layout>
</template>

