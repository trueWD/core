import axios from "axios";
import { appStore } from "@/stores/App.js";
import { useRouter } from "vue-router";
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


export default function Service() {
    const router = useRouter();
    const store = appStore();
    const axiosInstance = axios.create({
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        show_loading: true,
    })

    axiosInstance.interceptors.request.use( config => {

        if(config.show_loading){
            store.isLoading = true;
        }
        return config;
    },error => {
        store.isLoading = false;
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(response => {
        store.isLoading = false;
        return response;
    }, error=>{
        switch (error.response.status) {
            case 401:
                store.isLoading = false;
                store.user = null;
                router.push({name:'Login'});
                break;

        }
        store.isLoading = false;
        return Promise.reject(error);
    })

    return {
      axiosInstance
    }
}
