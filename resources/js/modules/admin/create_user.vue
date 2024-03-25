<script setup>
import {usersStore} from '@/stores/admin/usersStore.js';

const useUsersStore = usersStore()

</script>
<template>
    <!-- Large modal -->
    <div id="modal_large" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" v-if="useUsersStore.form.id">Kullanıcı Düzenle <span
                        class="text-primary">{{ useUsersStore.form.name }}</span></h5>
                    <h5 class="modal-title" v-else>Kullanıcı Ekle</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">

                    <ul class="nav nav-tabs nav-tabs-highlight" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="progile-tab" data-bs-toggle="tab"
                                    data-bs-target="#progile-tab-pane" type="button" role="tab"
                                    aria-controls="progile-tab-pane" aria-selected="true">
                                <i class="ph-user-circle me-2"></i> Kullanıcı Bilgileri
                            </button>
                        </li>
                        <li class="nav-item" role="presentation" v-if="useUsersStore.form.id">
                            <button class="nav-link" id="role-tab" data-bs-toggle="tab" data-bs-target="#role-tab-pane"
                                    type="button" role="tab" aria-controls="role-tab-pane" aria-selected="false">
                                <i class="ph-shield-warning me-2"></i>Kullanıcı Yetkileri
                            </button>
                        </li>
                        <li class="nav-item" role="presentation" v-if="useUsersStore.form.id">
                            <button class="nav-link" id="activity-tab" data-bs-toggle="tab"
                                    data-bs-target="#activity-tab-pane" type="button" role="tab"
                                    aria-controls="activity-tab-pane" aria-selected="false">
                                <i class="ph-arrows-clockwise me-2"></i>Kullanıcı Aktiviteleri
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="progile-tab-pane" role="tabpanel"
                             aria-labelledby="progile-tab" tabindex="0">


                            <div class="sidebar-section-body text-center m-4">
                                <div class="card-img-actions d-inline-block mb-3">
                                    <img class="img-fluid rounded-circle" :src="'/global_assets/images/no_avatar.png'"
                                         width="150" height="150" alt="">
                                    <div class="card-img-actions-overlay card-img rounded-circle">
                                        <a href="#" class="btn btn-outline-white btn-icon rounded-pill">
                                            <i class="ph-pencil"></i>
                                        </a>
                                    </div>
                                </div>

                                <h6 class="mb-0">{{ useUsersStore.form.name }}</h6>
                                <span class="text-muted">{{ useUsersStore.form.email }}</span>
                            </div>


                            <div class="row mb-3">
                                <label class="col-lg-3 col-form-label text-lg-end">Name:</label>
                                <div class="col-lg-9">
                                    <input type="text" class="form-control" placeholder="Name"
                                           v-model="useUsersStore.form.name"
                                           :class="{ 'is-invalid' : useUsersStore.errors && useUsersStore.errors.name}">
                                    <label id="basic-error" class="validation-invalid-label"
                                           v-if="useUsersStore.errors && useUsersStore.errors.name">{{
                                            useUsersStore.errors.name[0]
                                        }}</label>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-lg-3 col-form-label text-lg-end">Email:</label>
                                <div class="col-lg-9">
                                    <input type="email" class="form-control" placeholder="Email"
                                           v-model="useUsersStore.form.email"
                                           :class="{ 'is-invalid' : useUsersStore.errors && useUsersStore.errors.email}">
                                    <label id="basic-error" class="validation-invalid-label"
                                           v-if="useUsersStore.errors && useUsersStore.errors.email">{{
                                            useUsersStore.errors.email[0]
                                        }}</label>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-lg-3 col-form-label text-lg-end">Password:</label>
                                <div class="col-lg-9">
                                    <input type="password" class="form-control" placeholder="Password"
                                           v-model="useUsersStore.form.password"
                                           :class="{ 'is-invalid' : useUsersStore.errors && useUsersStore.errors.password}">
                                    <label id="basic-error" class="validation-invalid-label"
                                           v-if="useUsersStore.errors && useUsersStore.errors.password">{{
                                            useUsersStore.errors.password[0]
                                        }}</label>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-lg-3 col-form-label text-lg-end">Re Password:</label>
                                <div class="col-lg-9">
                                    <input type="password" class="form-control" placeholder="Re Password"
                                           v-model="useUsersStore.form.password_confirmation"
                                           :class="{ 'is-invalid' : useUsersStore.errors && useUsersStore.errors.password_confirmation}">
                                    <label id="basic-error" class="validation-invalid-label"
                                           v-if="useUsersStore.errors && useUsersStore.errors.password_confirmation">{{
                                            useUsersStore.errors.password_confirmation[0]
                                        }}</label>
                                </div>
                            </div>


                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" class="btn btn-warning" @click="useUsersStore.getUpdateUser()"
                                        v-if="useUsersStore.form.id">Güncelle
                                </button>
                                <button type="button" class="btn btn-primary" @click="useUsersStore.getStoreUser()"
                                        v-else>Save changes
                                </button>
                            </div>


                        </div>
                        <div class="tab-pane fade" id="role-tab-pane" role="tabpanel" aria-labelledby="role-tab"
                             tabindex="0">


                            <div class="table-responsive mt-2 mb-2">
                                <table class="table datatable-basic table-bordered table-striped table-hover table-sm">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Role</th>
                                        <th>Description</th>
                                        <th>name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in useUsersStore.user_roles" :key="index">
                                        <td>{{ item.id }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.description }}</td>
                                        <td class="align-items-center">
                                            <div class="form-check form-switch text-center">
                                                <input type="checkbox"
                                                       @change="useUsersStore.getAddOrRemove(useUsersStore.form.id, item.name)"
                                                       :checked="item.selected === true"
                                                       class="form-check-input"
                                                       id="sc_ls_c"
                                                       checked=""
                                                >
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <div class="tab-pane fade" id="activity-tab-pane" role="tabpanel" aria-labelledby="activity-tab"
                             tabindex="0">
                            Tab 3 content
                        </div>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /large modal -->
</template>

