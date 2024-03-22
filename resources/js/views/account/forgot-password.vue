<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import avatar1 from "../../../images/users/avatar-1.jpg";
import avatar2 from "../../../images/users/avatar-2.jpg";
import avatar3 from "../../../images/users/avatar-3.jpg";
import avatar4 from "../../../images/users/avatar-4.jpg";
import avatar5 from "../../../images/users/avatar-5.jpg";

import emailImg from "../../../images/auth/email.png";
/**
 * Forgot Password component
 */
export default {
    data() {
        return {
            avatar1,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            emailImg,
            email: "",
            error: "",
            status: "",
            processing: false,
        };
    },
    methods: {
        async forget() {
            this.processing = true
            await axios.post('/api/forget-password', {
                    email: this.email
                }).then(({data}) => {
                    if (data.success == true && data.message == 'success') {
                        toast.success('Password reset link send in your email.');
                    } else {
                        if (data.data == 400) {
                            toast.error(data.message, {
                                autoClose: 3000,
                            });
                        }
                    }
                }).catch(({response: {data}}) => {
                    toast.error(data, {
                        autoClose: 3000,
                    });
                }).finally(() => {
                    this.processing = false
                })
        },
    }

};
</script>

<template>
<section class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
    <b-container>
        <b-row class="justify-content-center">
            <b-col lg="11">
                <b-card no-body class="mb-0">
                    <b-row class="g-0 align-items-center">
                        <b-col xxl="5">
                            <b-card no-body class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                <b-card-body class="py-5 d-flex justify-content-between flex-column h-100">
                                    <div class="text-center">
                                        <h3 class="text-white">Start your journey with us.</h3>
                                        <p class="text-white opacity-75 fs-base">It brings together your tasks,
                                            projects, timelines, files
                                            and more</p>
                                    </div>

                                    <div class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                        <div class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                            <div class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                <div class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                    Welcome to <span class="text-primary ms-1">Steex</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="auth-user-list list-unstyled">
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <b-img :src="avatar1" alt="" fluid></b-img>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <b-img :src="avatar2" alt="" fluid></b-img>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <b-img :src="avatar3" alt="" fluid></b-img>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <b-img :src="avatar4" alt="" fluid></b-img>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <b-img :src="avatar5" alt="" fluid></b-img>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="text-center">
                                        <p class="text-white opacity-75 mb-0 mt-3">
                                            &copy;
                                            {{ new Date().getFullYear() }} Steex. Crafted with <i class="mdi mdi-heart text-danger"></i> by
                                            Themesbrand
                                        </p>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="6" class="mx-auto">
                            <b-card no-body class="mb-0 border-0 shadow-none mb-0">
                                <b-card-body class="p-sm-5 m-lg-4">
                                    <div class="text-center mt-2">
                                        <h5 class="fs-3xl">Forgot Password?</h5>
                                        <p class="text-muted mb-4">Reset password with Steex</p>
                                        <div class="pb-4">
                                            <b-img :src="emailImg" alt="" class="avatar-md"></b-img>
                                        </div>
                                    </div>

                                    <div class="alert border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                        Enter your email and instructions will be sent to you!
                                    </div>
                                    <div class="p-2">
                                        <b-form action="javascript:void(0)">
                                            <div class="mb-4">
                                                <label class="form-label">Email <span class="text-danger">*</span></label>
                                                <b-form-input id="input-1" name="email" v-model="email" type="text" placeholder="Enter email"></b-form-input>
                                            </div>

                                            <div class="text-center mt-4">

                                                <b-button type="submit" :disabled="processing" @click="forget()" variant="primary" class="W-100">
                                                    {{ processing ? "Please wait..." : "Forget Password" }}
                                                </b-button>
                                            </div>
                                        </b-form>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <p class="mb-0">Wait, I remember my password... <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"> Click here
                                            </router-link>
                                        </p>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</section>
</template>
