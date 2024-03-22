<script setup>
import {ref, onMounted} from "vue";
import Layout from "@/layouts/layout.vue";
import {rolesStore} from '@/stores/admin/rolesStore.js';
import {useLoginStore} from '@/stores/auth/login.js';
import {appStore} from '@/stores/App.js';
import CreateRole from '@/views/admin/create_role.vue';

const useRolesStore = rolesStore()
const login = useLoginStore()
const user = appStore()

onMounted(() => {
    useRolesStore.getRolesList()
})

</script>
<template>
    <Layout>
        <CreateRole/>

        <div class="row">
            <div class="col-md-4">

                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">Rol Listesi</h6>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-success btn-sm mb-2" v-if="$can(['create user'])"
                                data-bs-toggle="modal" data-bs-target="#modal_large" @click="useUsersStore.form = {}"><i
                            class="ph-plus "></i> Yeni Rol Oluştur
                        </button>


                        <div class="list-group">
                            <button class="list-group-item list-group-item-action d-flex"
                                    v-for="item in useRolesStore.roles"
                                    @click="useRolesStore.getUserPermissions(item.id)">
                                <p>{{ item.name }}</p>
                                <div class="fs-sm lh-1 opacity-50 m-1">
                                    Senior developer
                                </div>
                                <span class="badge border border-teal text-teal rounded-pill ms-auto">{{
                                        item.users?.length
                                    }}</span>
                            </button>
                        </div>


                    </div>

                </div>

            </div>
            <div class="col-md-8">

                <div class="card">
                    <div class="card-header" v-if="useRolesStore.permissions.length > 0">

                        <div class="row justify-content-between">
                            <div class="col-4">
                                <h6 class="mb-0">Rol : <span class="text-primary"><b>{{ useRolesStore.role.name }}</b></span></h6>
                            </div>
                            <div class="col-4 text-end">
                                <button v-if="$can(['delete role']) && useRolesStore.role.id" type="button" class="btn btn-danger btn-sm" @click="useRolesStore.getDeleteRole(useRolesStore.role.id)"><i class="ph-trash"></i> Rol Sil</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" v-if="useRolesStore.permissions.length > 0">

                        <ul class="nav nav-tabs nav-tabs-highlight" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="progile-tab" data-bs-toggle="tab"
                                        data-bs-target="#progile-tab-pane" type="button" role="tab"
                                        aria-controls="progile-tab-pane" aria-selected="true">
                                    <i class="ph-shield-warning me-2"></i>İzin Listesi
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="role-tab" data-bs-toggle="tab"
                                        data-bs-target="#role-tab-pane" type="button" role="tab"
                                        aria-controls="role-tab-pane" aria-selected="false">
                                    <i class="ph-users me-2"></i>Role Ait Kullanıcılar
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="progile-tab-pane" role="tabpanel"
                                 aria-labelledby="progile-tab" tabindex="0">

                                <div class="table-responsive mt-4">
                                    <table
                                        class="table datatable-basic table-bordered table-striped table-hover table-sm">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Permission</th>
                                            <th>Description</th>
                                            <th>Admin</th>
                                        </tr>
                                        </thead>
                                        <tbody v-for="(item, index) in useRolesStore.permissions" :key="index">
                                        <tr class="table-warning">
                                            <td colspan="3"><b>{{ item.description }}</b></td>
                                            <td>
                                                <div class="form-check form-switch text-center">
                                                    <input class="form-check-input"
                                                           @change="useRolesStore.updatePermissionStatus(useRolesStore.role.id, item.id)"
                                                           type="checkbox" role="switch" id="SwitchCheck2"
                                                           :checked="item.selected === true">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-for="row in item.children">
                                            <td>{{ row.id }}</td>
                                            <td>{{ row.name }}</td>
                                            <td>{{ row.description }}</td>
                                            <td>
                                                <div class="form-check form-switch text-center">
                                                    <input class="form-check-input"
                                                           @change="useRolesStore.updatePermissionStatus(useRolesStore.role.id, row.id)"
                                                           type="checkbox" role="switch" id="SwitchCheck2"
                                                           :checked="row.selected === true">
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                            <div class="tab-pane fade" id="role-tab-pane" role="tabpanel" aria-labelledby="role-tab"
                                 tabindex="0">

                                <div class="table-responsive mt-4">
                                    <table
                                        class="table datatable-basic table-bordered table-striped table-hover table-sm">


                                        <thead class="table-light">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Register Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in useRolesStore.users">
                                            <td>#{{ item.id }}</td>
                                            <td>
                                                <div class="d-flex gap-2 align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <img v-if="item.profile_photo_url" :src="item.profile_photo_url"
                                                             alt="" class="avatar-xs rounded-circle"/>
                                                        <img v-else :src="'/img/no_avatar.png'" alt=""
                                                             class="avatar-xs rounded-circle"/>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        {{ item.name }}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ item.email }}</td>
                                            <td>{{ item.created_at }}</td>
                                            <td class="text-success">
                                                <i class="ri-checkbox-circle-line fs-xl align-middle"></i>
                                                Active
                                            </td>
                                            <td>
                                                <button type="button"
                                                        @click="useRolesStore.getRemoveUser(item.id)"
                                                        class="btn btn-danger btn-sm">
                                                    <i class="ph-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div class="card-body" v-else>
                        <div class="alert alert-warning border-0 alert-dismissible fade show">
                            <span class="fw-semibold">Rol seçiniz.</span> Lütfen bir rol seçiniz.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </Layout>
</template>

