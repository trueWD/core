import {defineStore} from 'pinia'
import {ref} from 'vue'

export const createUserStore = defineStore('createUser',()=>{
    const form = ref({})
    const errors = ref({})
    /**
     * Create user function
     */
    const getStoreUser = async() =>{
        await newAxios.post('/admin/users', form.value).then(res => {
          if(res.data.type === 'error'){
            Swal.fire({
                title: 'Hata',
                text: res.data.message,
                icon: res.data.message,
            })
            return false;
          }else{
            Swal.fire({
                title: 'Giriş Başarılı',
                text: res.data.message,
                icon: res.data.message,
            })
            getUserInfo(res.data.id);
            errors.value = {};
          }
        }).catch(e => {
          if (e.response.status === 422) {
              errors.value = e.response.data.errors
          }
      })
    }



    return {
        form,
        errors,
        getStoreUser,
        
    }

});