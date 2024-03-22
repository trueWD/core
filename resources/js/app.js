import './bootstrap';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Loader from '@/components/Loader.vue';
import Selectus from "@/components/Selectus/index.vue"
import permission from '@/plugins/permission';

import SweetAlertPlugin from '@/plugins/sweetalert_plugin.js';
import newAxios from '@/plugins/axios_plugins.js';



import App from '@/App.vue'
import routes from '@/routes/index'

createApp(App)
.component('Selectus', Selectus)
.component('Loader', Loader)
.use(permission)
.use(VueSweetalert2)
.use(SweetAlertPlugin)
.use(createPinia())
.use(routes)
.use(newAxios)
.mount("#app")