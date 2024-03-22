import {defineStore} from 'pinia'
import {ref} from 'vue'
import { appStore } from '@/stores/App';
import {toast} from "vue3-toastify";

export const usersStore = defineStore('users',()=>{
    const users = ref([])
    const form = ref({});
    const errors = ref({});

    const getUsersList = async() =>{
        let res = await newAxios.get('/admin/users/list');
        users.value = res.data;
    }

    const getUserInfo = async(id) =>{
        form.value = {};
        let res = await newAxios.get('/admin/users/'+ id)
        form.value = res.data;
        getUserRoles();
    }

    const user_roles = ref([]);
    const getUserRoles = async(id) =>{
        user_roles.value = [];
        let res = await newAxios.post('/admin/users/user_roles',{id:form.value.id})
        user_roles.value = res.data.roels_list;
    }

    const getStoreUser = async() =>{
        await newAxios.post('/admin/users', form.value).then(res => {
            if(res.data.type === 'error'){
                toast.warning('Kullanıcı hatalıı', {
                    autoClose: 1000,
                });
                return false;
            }else{
                getUsersList();
                Swal.fire({
                    title: 'Success!',
                    text: res.data.message,
                    icon: res.data.type,
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

    const getUpdateUser = async() =>{
        await newAxios.post('/admin/users/update', form.value).then(res => {
            if(res.data.type === 'error'){
                Swal.fire({
                    title: 'Error!',
                    text: res.data.message,
                    icon: res.data.type,
                })
                return false;
            }else{
                getUsersList();
                Swal.fire({
                    title: 'Success!',
                    text: res.data.message,
                    icon: res.data.type,
                })
                errors.value = {};
            }
        }).catch(e => {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        })
    }




    const getAddOrRemove = async(user_id, role_name) =>{
        let res = await newAxios.post('/admin/roles/add_or_remove', {user_id: user_id, role_name:role_name });

        if(res.data.type == 'error'){
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
        }
        getUserRoles();
        getUsersList();


    }




    return {
        form,
        errors,
        user_roles,
        users,
        getUsersList,
        getUserInfo,
        getUserRoles,
        getStoreUser,
        getUpdateUser,
        getAddOrRemove,
    }

});
