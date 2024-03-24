import {defineStore} from 'pinia'
import {ref} from 'vue'
import { appStore } from '@/stores/App';
import router from '@/routes/index.js';

export const registerStore = defineStore('register',()=>{
    const form = ref({
        email: 'truewd@hotmail.com',
        password: '45783094',
        password_confirmation: '45783094',
    })
    const errors = ref({})
    const store = appStore()



    const registerUser = async () => {

        newAxios.post('/api/v1/register', form.value)
            .then((res) => {
                console.log(res.data);
                if (res.data.type === 'error') {
                    Swal.fire({
                        title: 'Giriş Başarılı',
                        text: res.data.message,
                        icon: res.data.type,
                    })
                    return false;
                }
                Swal.fire({
                    title: 'Error!',
                    text: res.data.message,
                    icon: res.data.type,
                })

                store.user = res.data.data;

                setTimeout(() => {
                    router.push({ name: 'Dashboard' });
                }, 1000);
            })
            .catch(e => {
                // if (e.response.status === 422) {
                //    // errors.value = e.response.data.errors
                // }
            })
    }













    return {
        form,
        errors,
        registerUser,
    }

});
