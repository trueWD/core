<script setup>
import {ref, onMounted, inject} from "vue";
import layout from "@/layouts/layout_auth.vue";

import {useLoginStore} from '@/stores/auth/login.js';

const useLogin = useLoginStore()


</script>

<template>
    <layout>


        <div class="content d-flex justify-content-center align-items-center">

            <!-- Registration form -->
            <form class="login-form" action="index.html">
                <div class="card mb-0">
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <div class="d-inline-flex align-items-center justify-content-center mb-4 mt-2">
                                <img :src="'/assets/images/logo_icon.svg'" class="h-48px" alt="">
                            </div>
                            <h5 class="mb-0">Create account</h5>
                            <span class="d-block text-muted">All fields are required</span>
                        </div>

                        <div class="text-center text-muted content-divider mb-3">
                            <span class="px-2">Your credentials</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Adınız Soyadınız</label>
                            <div class="form-control-feedback form-control-feedback-start">
                                <input type="text" class="form-control" placeholder="JohnDoe" v-model="useLogin.form.name" autocomplete="off">
                                <div class="form-control-feedback-icon">
                                    <i class="ph-user-circle text-muted"></i>
                                </div>
                            </div>
                            <div class="form-text text-danger"><i class="ph-x-circle me-1"></i> This username is already taken</div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Email Adresiniz</label>
                            <div class="form-control-feedback form-control-feedback-start">
                                <input type="email" class="form-control" placeholder="john@doe.com" autocomplete="off">
                                <div class="form-control-feedback-icon">
                                    <i class="ph-at text-muted"></i>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Şifreniz</label>
                            <div class="form-control-feedback form-control-feedback-start">
                                <input type="password" class="form-control" placeholder="•••••••••••" v-model="useLogin.form.password">
                                <div class="form-control-feedback-icon">
                                    <i class="ph-lock text-muted"></i>
                                </div>
                            </div>
                        </div>


                        <div class="mb-3">
                            <label class="form-label">Şifre Tekrarı</label>
                            <div class="form-control-feedback form-control-feedback-start">
                                <input type="password" class="form-control" placeholder="•••••••••••" v-model="useLogin.form.password_re">
                                <div class="form-control-feedback-icon">
                                    <i class="ph-lock text-muted"></i>
                                </div>
                            </div>
                        </div>




                        <div class="text-center text-muted content-divider mb-3">
                            <span class="px-2">Additions</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-check mb-2">
                                <input type="checkbox" name="remember" class="form-check-input" checked>
                                <span class="form-check-label">Send me <a href="#">&nbsp;test account settings</a></span>
                            </label>
                        </div>

                        <button type="button" class="btn btn-teal w-100" @click="useLogin.registerUser()">Register</button>
                    </div>
                </div>
            </form>
            <!-- /registration form -->

        </div>


    </layout>
</template>
