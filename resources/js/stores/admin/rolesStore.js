import {defineStore} from 'pinia'
import {ref} from 'vue'
import {toast} from "vue3-toastify";

export const rolesStore = defineStore('roles',()=>{
    const role = ref([]);
    const roles = ref([]);
    const users = ref([]);
    const permissions = ref([]);


    const getRolesList = async() =>{
        let res = await newAxios.get('/api/v1/admin/roles/list');
        roles.value = res.data;
    }

    const getUserPermissions = async(id) =>{
        let res = await newAxios.post('/api/v1/admin/roles/show', {id: id});
        permissions.value = res.data.permissions;
        role.value = res.data.role;
        getRoleUserList(res.data.role.name);
    }

    const updatePermissionStatus = async(role_id,permission_id) =>{
        let res = await newAxios.post('/api/v1/admin/roles/updatePermissionsStatus', {role_id: role_id, permission_id: permission_id});
        Swal.fire({
            title: 'Success!',
            text: res.data.message,
            icon: res.data.type,
        })
    }

    const getRoleUserList = async(name) =>{
        let res = await newAxios.post('/api/v1/admin/roles/users', {name: name});
        users.value = res.data;
    }
    const getRemoveUser = async(user_id) =>{
        let res = await newAxios.post('/api/v1/admin/roles/add_or_remove', {user_id: user_id, role_name: role.value.name});

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
        getRolesList();
        getRoleUserList(role.value.name);

    }
    const getDeleteRole = async(id) =>{
        let res = await newAxios.post('/api/v1/admin/roles/destroy', {id: id});

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
            role.value = [];
        }
        getRolesList();
        getRoleUserList(role.value.name);

    }



    return {
        roles,
        role,
        users,
        permissions,
        getRolesList,
        getUserPermissions,
        updatePermissionStatus,
        getRoleUserList,
        getRemoveUser,
        getDeleteRole,
    }

});
