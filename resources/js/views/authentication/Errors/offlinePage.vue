<script>
// avatar imgs
import avatar1 from "../../../../images/users/48/avatar-1.jpg";
import avatar2 from "../../../../images/users/48/avatar-2.jpg";
import avatar3 from "../../../../images/users/48/avatar-3.jpg";
import avatar4 from "../../../../images/users/48/avatar-4.jpg";
import avatar5 from "../../../../images/users/48/avatar-5.jpg";
import offline from "../../../../images/auth/offline-page.gif";

export default {
    data() {
        return {
            avatar1,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            offline
        }
    },
    beforeCreate() {
        document.documentElement.setAttribute('data-theme', 'default');
    },
    methods: {
        reload() {
            window.location.reload();
        }
    }
}
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
                                    <b-card-body class="py-5 d-flex justify-content-between flex-column h-100">
                                        <div class="text-center">
                                            <h3 class="text-white">Start your journey with us.</h3>
                                            <p class="text-white opacity-75 fs-base">It brings together your tasks,
                                                projects, timelines, files and more</p>
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
                                                &copy;
                                                {{ new Date().getFullYear() }} Steex. Crafted with <i
                                                    class="mdi mdi-heart text-danger"></i> by Themesbrand
                                            </p>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col xxl="6" class="mx-auto">
                                <b-card no-body class="mb-0 border-0 shadow-none mb-0">
                                    <b-card-body class="p-sm-5 m-lg-4">
                                        <div class="mt-2 text-center">
                                            <div class="error-img text-center px-5">
                                                <img :src="offline" class="img-fluid" alt="" />
                                            </div>
                                            <h3 class="mt-2 fw-semibold">We're Currently Offline</h3>
                                            <p class="text-muted mb-4">We can't show you this images because you aren't
                                                connected to the internet. When you’re back online refresh the page or hit
                                                the button below</p>
                                                <b-button variant="primary" @click="reload"><i class="ri-refresh-line align-bottom"></i> Refresh</b-button>
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
