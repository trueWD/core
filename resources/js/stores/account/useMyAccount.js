import {defineStore} from 'pinia'
import {ref} from 'vue'
import { appStore } from '@/stores/App';

export const myAccount = defineStore('myAccount',()=>{
    

    const store = appStore();
    
    const form = ref({
        name: store.user.name,
        email: store.user.email,
    });
    const password_form = ref({})
    const errors = ref([])



    const updateProfile = async(id) =>{
        await axiosInstance.post('/account/myaccount/update/profile',form.value).then(res => {
          if(res.data.type === 'error'){
            toast.warning( res.data.text, {autoClose: 1000,});
            return false;
          }else{
            toast.success( res.data.text, {autoClose: 1000,});
          }
        }).catch(e => {
          toast.success( 'Server error 2002', {autoClose: 1000,});
      })
    }

    const updatePassword = async(id) =>{
        await axiosInstance.post('/account/myaccount/update/password', form.value).then(res => {
          if(res.data.type === 'error'){
            toast.warning( res.data.text, {autoClose: 1000,});
            return false;
          }else{

            toast.success( res.data.text, {autoClose: 1000,});
            setTimeout(function(){
              store.getUserInfo();
              router.push({ name: 'MyAcount' });
            }, 1000);

          }
        }).catch(e => {
          toast.success( 'Server error 2002', {autoClose: 1000,});
      })
    }




    const file =ref()

    const uploadAvatar = async () => {
      let images = new FormData();
          images.append('avatar', file.value.files[0])
          console.log(file.value.files[0])

      await axiosInstance.post('/account/myaccount/update/avatar', images,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
      .then(res => {
          if(res.data.type=='success'){
            toast.success( res.data.text, {autoClose: 1000,});
            store.getUserInfo();
          }else{
            toast.warning( res.data.text, {autoClose: 1000,});
            return false;
          }
      }).catch(e => {
        if(e.response.status === 422) {
            errors.value = e.response.data.errors
        }
      })
    }




    return {
        form,
        password_form,
        errors,
        updateProfile,
        updatePassword,
        file,
        uploadAvatar,
    }

});