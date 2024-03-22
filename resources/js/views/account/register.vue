<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import avatar1 from "../../../images/users/avatar-1.jpg";
import avatar2 from "../../../images/users/avatar-2.jpg";
import avatar3 from "../../../images/users/avatar-3.jpg";
import avatar4 from "../../../images/users/avatar-4.jpg";
import avatar5 from "../../../images/users/avatar-5.jpg";

/**
 * Register component
 */
export default {
    data() {
        return {
            auth: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            avatar1,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            processing: false,
        };
    },
    mounted() {
        Array.from(document.querySelectorAll("form .auth-pass-inputgroup")).forEach(function (item) {
            Array.from(item.querySelectorAll(".password-addon")).forEach(function (subitem) {
                subitem.addEventListener("click", function (event) {
                    var passwordInput = item.querySelector(".password-input");
                    if (passwordInput.type === "password") {
                        passwordInput.type = "text";
                    } else {
                        passwordInput.type = "password";
                    }
                });
            });
        });

        //Password validation
        var myInput = document.getElementById("password-input");
        var letter = document.getElementById("pass-lower");
        var capital = document.getElementById("pass-upper");
        var number = document.getElementById("pass-number");
        var length = document.getElementById("pass-length");

        // When the user clicks on the password field, show the message box
        myInput.onfocus = function () {
            document.getElementById("password-contain").style.display = "block";
        };

        // When the user clicks outside of the password field, hide the password-contain box
        myInput.onblur = function () {
            document.getElementById("password-contain").style.display = "none";
        };

        // When the user starts to type something inside the password field
        myInput.onkeyup = function () {
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }

            // Validate length
            if (myInput.value.length >= 8) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        };
    },
    methods: {
        async register() {
            this.processing = true
            await axios.post('/api/register', this.auth).then(({data}) => {
                if (data.success == true && data.message == 'success') {
                    const logged_user = {
                        login: true,
                        user_id: data.data.id,
                        name: data.data.name,
                        email: data.data.email,
                    }
                    sessionStorage.setItem('user', JSON.stringify(logged_user));
                    this.$router.push('/');
                    toast.success('User Registered Successfully.', {
                        autoClose: 3000,
                    });
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
                                        <h5 class="fs-3xl">Create your free account</h5>
                                        <p class="text-muted">Get your free Steex account now</p>
                                    </div>
                                    <div class="p-2 mt-3">
                                        <b-form class="needs-validation" action="javascript:void(0)" novalidate>
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Name <span class="text-danger">*</span></label>
                                                <b-form-input id="name" v-model="auth.name" name="name" type="text" placeholder="Enter name"></b-form-input>
                                            </div>

                                            <div class="mb-3">
                                                <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
                                                <b-form-input id="email" name="email" v-model="auth.email" type="email" placeholder="Enter email"></b-form-input>
                                            </div>

                                            <div class="mb-3">
                                                <label class="form-label" for="password-input">Password <span class="text-danger">*</span></label>
                                                <div class="position-relative auth-pass-inputgroup">
                                                    <b-form-input id="password-input" class="password-input" v-model="auth.password" name="password" type="password" placeholder="Enter password" onpaste="return false" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></b-form-input>

                                                    <b-button variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></b-button>
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label class="form-label" for="confirm-password">Confirm Password <span class="text-danger">*</span></label>
                                                <div class="position-relative auth-pass-inputgroup">
                                                    <b-form-input id="confirm-password" class="password-input" v-model="auth.password_confirmation" name="confirm-password" type="password" placeholder="Enter confirm password" onpaste="return false" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></b-form-input>

                                                    <b-button variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></b-button>
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <p class="mb-0 fs-xs text-muted fst-italic">By registering you agree to the Steex <router-link to="/pages/term-conditions" class="text-primary text-decoration-underline fst-normal fw-medium">Terms of
                                                        Use</router-link>
                                                </p>
                                            </div>

                                            <div id="password-contain" class="p-3 bg-light mb-2 rounded">
                                                <h5 class="fs-sm">Password must contain:</h5>
                                                <p id="pass-length" class="invalid fs-xs mb-2">Minimum <b>8 characters</b></p>
                                                <p id="pass-lower" class="invalid fs-xs mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                <p id="pass-upper" class="invalid fs-xs mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                <p id="pass-number" class="invalid fs-xs mb-0">A least <b>number</b> (0-9)</p>
                                            </div>

                                            <div class="mt-4">
                                                <b-button type="submit" :disabled="processing" @click="register" variant="primary" class="w-100">
                                                    {{ processing ? "Please wait" : "Sign Up" }}
                                                </b-button>
                                            </div>

                                            <div class="mt-4 text-center">
                                                <div class="signin-other-title position-relative">
                                                    <h5 class="fs-sm mb-4 title text-muted">Create account with</h5>
                                                </div>

                                                <div>
                                                    <b-button type="button" variant="subtle-primary" class="btn-icon"><i class="ri-facebook-fill fs-lg"></i></b-button>
                                                    <b-button type="button" variant="subtle-danger" class="btn-icon ms-1"><i class="ri-google-fill fs-lg"></i></b-button>
                                                    <b-button type="button" variant="subtle-dark" class="btn-icon ms-1"><i class="ri-github-fill fs-lg"></i></b-button>
                                                    <b-button type="button" variant="subtle-info" class="btn-icon ms-1"><i class="ri-twitter-fill fs-lg"></i></b-button>
                                                </div>
                                            </div>
                                        </b-form>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <p class="mb-0">Already have an account ?
                                            <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"> Sign In
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

<style lang="scss" module></style>
