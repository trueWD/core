<script>
// avatar imgs
import avatar1 from "../../../images/users/48/avatar-1.jpg";
import avatar2 from "../../../images/users/48/avatar-2.jpg";
import avatar3 from "../../../images/users/48/avatar-3.jpg";
import avatar4 from "../../../images/users/48/avatar-4.jpg";
import avatar5 from "../../../images/users/48/avatar-5.jpg";

export default {
    data() {
        return {
            avatar1,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            togglePassword: false
        }
    },
    beforeCreate() {
        document.documentElement.setAttribute('data-theme', 'default');
    },
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
                                <b-card no-body
                                    class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                    <b-card-body class="py-5 d-flex justify-content-between flex-column">
                                        <div class="text-center">
                                            <h3 class="text-white">Start your journey with us.</h3>
                                            <p class="text-white opacity-75 fs-base">It brings together your tasks,
                                                projects, timelines, files
                                                and more</p>
                                        </div>

                                        <div
                                            class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                            <div
                                                class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                <div
                                                    class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                    <div
                                                        class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                        Welcome to <span class="text-primary ms-1">Steex</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="auth-user-list list-unstyled">
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img :src="avatar1" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img :src="avatar2" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img :src="avatar3" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img :src="avatar4" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar-sm d-inline-block">
                                                        <div
                                                            class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                            <img :src="avatar5" alt="" class="img-fluid" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="text-center">
                                            <p class="text-white opacity-75 mb-0 mt-3">
                                                &copy; {{ new Date().getFullYear() }} Steex. Crafted with <i
                                                    class="mdi mdi-heart text-danger"></i>
                                                by Themesbrand
                                            </p>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col xxl="6" class="mx-auto">
                                <b-card no-body class="mb-0 border-0 shadow-none mb-0">
                                    <b-card-body class="p-sm-5 m-lg-4">
                                        <div class="text-center mt-5">
                                            <h5 class="fs-3xl">Welcome Back</h5>
                                            <p class="text-muted">Sign in to continue to Steex.</p>
                                        </div>
                                        <div class="p-2 mt-5">
                                            <form action="/">

                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Username <span
                                                            class="text-danger">*</span></label>
                                                    <div class="position-relative ">
                                                        <input type="text" class="form-control  password-input"
                                                            id="username" placeholder="Enter username" required>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <div class="float-end">
                                                        <router-link to="/auth/pass-reset" class="text-muted">Forgot
                                                            password?</router-link>
                                                    </div>
                                                    <label class="form-label" for="password-input">Password <span
                                                            class="text-danger">*</span></label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input :type="togglePassword ? 'text' : 'password'"
                                                            class="form-control pe-5 password-input "
                                                            placeholder="Enter password" id="password-input" required>
                                                        <b-button variant="link"
                                                            class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button" id="password-addon"
                                                            @click="togglePassword = !togglePassword"><i
                                                                class="ri-eye-fill align-middle"></i></b-button>
                                                    </div>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="auth-remember-check">
                                                    <label class="form-check-label" for="auth-remember-check">Remember
                                                        me</label>
                                                </div>

                                                <div class="mt-4">
                                                    <b-button variant="primary" class="w-100" type="submit">Sign
                                                        In</b-button>
                                                </div>

                                                <div class="mt-4 pt-2 text-center">
                                                    <div class="signin-other-title position-relative">
                                                        <h5 class="fs-sm mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div class="pt-2 hstack gap-2 justify-content-center">
                                                        <b-button type="button" variant="subtle-primary" class="btn-icon"><i
                                                                class="ri-facebook-fill fs-lg"></i></b-button>
                                                        <b-button type="button" variant="subtle-danger" class="btn-icon"><i
                                                                class="ri-google-fill fs-lg"></i></b-button>
                                                    <b-button type="button" variant="subtle-dark" class="btn-icon"><i
                                                            class="ri-github-fill fs-lg"></i></b-button>
                                                    <b-button type="button" variant="subtle-info" class="btn-icon"><i
                                                            class="ri-twitter-fill fs-lg"></i></b-button>
                                                </div>
                                            </div>
                                        </form>

                                        <div class="text-center mt-5">
                                            <p class="mb-0">Don't have an account ? <router-link to="/auth/signup"
                                                    class="fw-semibold text-secondary text-decoration-underline">
                                                    SignUp</router-link>
                                            </p>
                                        </div>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</section></template>
