<template>

    <!-- Modal -->
    <div class="modal fade" id="CreateRoleModal" tabindex="-1" aria-labelledby="CreateRoleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="CreateRoleModalLabel">Yeni Rol Oluşturma</h1>
                    <button type="button" id="close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Basic Input -->

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Rol Adı </label>
                        <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid' : errors && errors.name}">
                        <div v-if="errors && errors.name" class="form-text text-danger">{{ errors.name[0] }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Rol Adı </label>
                        <textarea v-model="form.description" class="form-control" rows="3"></textarea>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="getStoreRole()" class="btn btn-success">Kaydet</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {ref} from "vue";
import Service from '@/Utils/Service.js';
import {toast} from 'vue3-toastify';

export default {
    name: "createRole",

    setup(props, context) {
        const {newAxios} = Service()
        const form = ref({});
        const errors = ref({});

        const getStoreRole = async () => {
            await newAxios.post('/admin/roles', form.value).then(res => {
                if (res.data.type === 'error') {
                    toast.warning(res.data.text, {autoClose: 1000,});
                    return false;
                } else {
                    context.emit("getRolesList");
                    toast.success(res.data.text, {autoClose: 1000,});
                    document.getElementById('close').click();
                }
            }).catch(e => {
                if (e.response.status === 422) {
                    errors.value = e.response.data.errors
                }
            })
        }


        return {
            errors,
            form,
            getStoreRole,
        };
    },
};
</script>


