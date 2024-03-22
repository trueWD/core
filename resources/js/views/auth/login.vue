<script setup>
import { ref, onMounted, inject } from "vue";
import layout from "@/layouts/layout_auth.vue";

import { useLoginStore } from '@/stores/auth/login.js';

const useLogin = useLoginStore()


</script>

<template>
    <layout>
        <!-- Content area -->
        <div class="content d-flex justify-content-center align-items-center">
            <!-- Login card -->
            <form class="login-form">
                <div class="card mb-0">
                    <div class="card-body">
                    <div class="text-center mb-3">
                        <div class="d-inline-flex align-items-center justify-content-center mb-4 mt-2">
                        <img :src="'/assets/images/logo_icon.svg'" class="h-48px" alt="">
                        </div>
                        <h5 class="mb-0">Kullanıcı Girişi</h5>
                        <span class="d-block text-muted">Hesabınıza Giriş Yapın</span>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email Adresiniz</label>
                        <div class="form-control-feedback form-control-feedback-start">
                            <input type="text" class="form-control" placeholder="john@doe.com" v-model="useLogin.form.email">
                            <div class="form-control-feedback-icon">
                                <i class="ph-user-circle text-muted"></i>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Şifreniz</label>
                            <div class="form-control-feedback form-control-feedback-start">
                            <input type="password" class="form-control" placeholder="*******" v-model="useLogin.form.password">
                            <div class="form-control-feedback-icon">
                                <i class="ph-lock text-muted"></i>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center mb-3">
                        <label class="form-check">
                        <input type="checkbox" name="remember" class="form-check-input" checked>
                        <span class="form-check-label">Beni Hatırla</span>
                        </label>

                        <a href="login_password_recover.html" class="ms-auto">Şifrenizi mi unuttunuz?</a>
                    </div>

                    <div class="mb-3">
                        <button type="button" class="btn btn-primary w-100" @click="useLogin.getLogin()">Giriş yap</button>
                    </div>

         <pre>
            {{ useLogin.form }}
            {{ useLogin.errors }}
         </pre>

                    <div class="text-center text-muted content-divider mb-3">
                        <span class="px-2">Hesabınız yok mu?</span>
                    </div>

                    <div class="mb-3">
                        <a href="#" class="btn btn-light w-100">Kayıt Olun</a>
                    </div>

                    <span class="form-text text-center text-muted">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
                    </div>
                </div>
            </form>
            <!-- /login card -->
        </div>
        <!-- /content area -->
    </layout>
  </template>
