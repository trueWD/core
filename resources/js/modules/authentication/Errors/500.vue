<script>
// avatar imgs
import avatar1 from "../../../../images/users/48/avatar-1.jpg";
import avatar2 from "../../../../images/users/48/avatar-2.jpg";
import avatar3 from "../../../../images/users/48/avatar-3.jpg";
import avatar4 from "../../../../images/users/48/avatar-4.jpg";
import avatar5 from "../../../../images/users/48/avatar-5.jpg";
import auth500 from "../../../../images/auth/500.png";

export default {
    data() {
        return {
            avatar1,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            auth500
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
                            <b-card no-body class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                <b-card-body class="py-5 d-flex justify-content-between flex-column h-100">
                                    <div class="text-center">
                                        <h3 class="text-white">Start your journey with us.</h3>
                                        <p class="text-white opacity-75 fs-base">It brings together your tasks, projects, timelines, files
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
                                                        <img :src="avatar1" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar2" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar3" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar4" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar5" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="text-center">
                                        <p class="text-white opacity-75 mb-0 mt-3">
                                            &copy;
                                            {{ new Date().getFullYear() }}Steex. Crafted with <i class="mdi mdi-heart text-danger"></i> by
                                            Themesbrand
                                        </p>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="6" class="mx-auto">
                            <b-card no-body class="mb-0 border-0 shadow-none mb-0">
                                <b-card-body class="p-sm-5 m-lg-4">
                                    <div class="error-img text-center px-5">
                                        <img :src="auth500" class="img-fluid" alt="" />
                                    </div>
                                    <div class="mt-4 text-center pt-4">
                                        <div class="position-relative">
                                            <h4 class="fs-2xl error-subtitle text-uppercase mb-0">Internal Server Error</h4>
                                            <p class="fs-base text-muted mt-3">It will be as simple as Occidental in fact,
                                                it will Occidental to an English person</p>
                                            <div class="mt-4">
                                                <router-link to="/" class="btn btn-primary"><i class="mdi mdi-home me-1"></i>Back to
                                                    home</router-link>
                                            </div>
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
</section>
</template>
