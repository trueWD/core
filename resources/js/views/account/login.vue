<template>
	<section
		class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
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
											<p class="text-white opacity-75 fs-base">It brings together your tasks,projects, timelines, files and more</p>
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
												<li v-for="(avatar, index) in avatars" :key="index">
													<div class="avatar-sm d-inline-block">
														<div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
															<b-img :src="avatar" alt="" fluid></b-img>
														</div>
													</div>
												</li>
											</ul>
										</div>

										<div class="text-center">
											<p class="text-white opacity-75 mb-0 mt-3"> &copy; {{ new Date().getFullYear() }} Steex. Crafted with <i class="mdi mdi-heart text-danger"></i>
												by Themesbrand
											</p>
										</div>
									</b-card-body>
								</b-card>
							</b-col>
							<b-col xxl="6" class="mx-auto">
								<b-card no-body class="mb-0 border-0 shadow-none">
									<b-card-body class="p-sm-5 m-lg-4">
										<div class="text-center mt-5">
											<h5 class="fs-3xl">Tekrar Hoşgeldiniz!</h5>
											<p class="text-muted">Lütfen bilgilerinizle sisteme login olunuz.</p>
										</div>
                                        <form>
                                            <div class="p-2 mt-3">
                                                    <div class="mb-3">
                                                        <label for="username" class="form-label">Email <span class="text-danger">*</span></label>
                                                        <div class="position-relative ">
                                                            <b-form-input id="input-1" name="email" v-model="auth.email" type="text" placeholder="Email Adresniz"></b-form-input>
                                                        </div>
                                                    </div>
    
                                                    <div class="mb-3">
                                                        <div class="float-end">
                                                            <router-link to="/forget-password" class="text-muted">Şifrenizimi unuttunuz?</router-link>
                                                        </div>
                                                        <label class="form-label" for="password-input">Şifreniz <span class="text-danger">*</span></label>
                                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                                            <b-form-input id="input-2" v-model="auth.password" name="password" type="password" placeholder="Şifreniz" class="password-input"></b-form-input>
                                                            <b-button variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" @click="showPass" id="password-addon"><i class="ri-eye-fill align-middle"></i></b-button>
                                                        </div>
                                                    </div>
    
                                                    <b-form-checkbox id="customControlInline" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                                                        Beni Hatırla
                                                    </b-form-checkbox>
    
                                                    <div class="mt-4">
                                                        <button class="btn btn-primary w-100" type="button" @click="login()">
                                                            Giriş Yap
                                                        </button>
                                                    </div>
    
    
                                                <div class="text-center mt-5">
                                                    <p class="mb-0">Don't have an account ? <router-link to="/auth/register" class="fw-semibold text-secondary text-decoration-underline">Sign Up</router-link>
                                                    </p>
                                                </div>
                                            </div>

                                        </form>
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

<script>
	import { ref } from 'vue';
	import axios from 'axios';
    import router from '../../routes/index.js';
	import {
		toast
	} from 'vue3-toastify';
	import 'vue3-toastify/dist/index.css';
	import { appStore } from '@/stores/App';
	import Service from '@/Utils/Service.js';

	import avatar1 from "../../../images/users/avatar-1.jpg";
	import avatar2 from "../../../images/users/avatar-2.jpg";
	import avatar3 from "../../../images/users/avatar-3.jpg";
	import avatar4 from "../../../images/users/avatar-4.jpg";
	import avatar5 from "../../../images/users/avatar-5.jpg";


	export default {
		setup() {
			const auth = ref({
				email: "",
				password: "",
			});
            const store = appStore();
			const { newAxios } = Service()
			const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];


			const showPass = () => {
				var passwordInput = document.querySelector(".password-input");
				if (passwordInput.type === "password") {
					passwordInput.type = "text";
				} else {
					passwordInput.type = "password";
				}
			};

			const login = async () => {

                newAxios.post('/api/login', auth.value)
                    .then((res) => {

                        console.log(res.data);
                        
                        if (res.data.type === 'error') {
                            toast.error(res.data.text, {
                                autoClose: 1000,
                            });
                            return false;
                        }

                        toast.success('Kullanıcı Girişi Başarılı', {
                            autoClose: 1000,
                        });
                        store.user = res.data.data;
                        
                        setTimeout(() => {
                           router.push({ name: 'Dashboard' });
                        }, 1000);
                    })
                    .catch(function (error){
                    
                    });
			}


			return {
				auth,
				avatars,
				showPass,
				login,
			};
		},
	};
</script>