import {defineStore} from 'pinia'
import {ref} from 'vue'
import { appStore } from '@/stores/App';
import router from '@/routes/index.js';

export const loginStore = defineStore('login',()=>{
    const form = ref({
        email: 'truewd@hotmail.com',
        password: '45783094',
    })
    const errors = ref({})
    const store = appStore()

    const getLogin = async () => {

        newAxios.post('/api/v1/login', form.value)
            .then((res) => {
                console.log(res.data);
                if (res.data.type === 'error') {
                    Swal.fire({
                        title: 'Hatalı Giriş',
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
                localStorage.setItem('token', res.data.token);

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




    const logout = async() =>{
        await newAxios.get('/api/v1/logout').then(res => {
          if(res.data.type === 'error'){
            Swal.fire({
                title: 'Error!',
                text: res.data.message,
                icon: res.data.type,
            })
            return false;
          }else{
            Swal.fire({
                title: 'Success!',
                text: res.data.message,
                icon: res.data.type,
            })
            store.user = null;
            setTimeout(function(){
                sessionStorage.clear();
                router.push({ name: 'Login' });
            }, 1000);
          }
        }).catch(e => {
          toast.success( 'Server error 2002', {autoClose: 1000,});
      })
    }





    const leaveUser = async(id) =>{
        await newAxios.post('/admin/users/leave_user',{id:id}).then(res => {
          if(res.data.type === 'error'){
            Swal.fire({
                title: 'Error!',
                text: res.data.message,
                icon: res.data.type,
            })
            return false;
          }else{
            Swal.fire({
                title: 'Success!',
                text: res.data.message,
                icon: res.data.type,
            })
            setTimeout(function(){
              store.user = res.data.user;
              router.push({ name: 'Users' });
            }, 1000);
          }
        }).catch(e => {
          toast.success( 'Server error 2002', {autoClose: 1000,});
      })
    }

    const loginAs = async(id) =>{
      await newAxios.post('/admin/users/login_as',{id:id}).then(res => {
          if(res.data.type === 'error'){
            Swal.fire({
              title: 'Hata!',
              text: res.data.message,
              icon: 'warning',
            })
            return false;
          }else{
            Swal.fire({
              title: 'Success!',
              text: res.data.message,
              icon: res.data.type,
            })
            setTimeout(function(){
              store.user = res.data.user;
              router.push({ name: 'Users' });
            }, 1000);
          }
        }).catch(e => {

      })
    }




    const getUserInfo = async ()=> {
      let response = await newAxios.get('/api/v1/user');
      if(response.status == 200 && response.data){
        store.user = response.data.data;
      }
    }

    return {
        form,
        getLogin,
        errors,
        getUserInfo,
        leaveUser,
        logout,
        loginAs,
    }

});
