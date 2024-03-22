<template>

<div class="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
    <b-button type="button" variant="ghost-dark" class="btn-icon btn-topbar rounded-circle" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
        <i class="bi bi-bell fs-2xl"></i>
        <span class="position-absolute topbar-badge fs-3xs translate-middle badge rounded-pill bg-danger">
            <span class="notification-badge">{{ notifications.countNotificationsByStatus() }}</span>
            <span class="visually-hidden">Okunmamış bildirim</span>
        </span>
    </b-button>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
        <div class="dropdown-head rounded-top">
        <div class="p-3 border-bottom border-bottom-dashed">
            <b-row class="align-items-center">
            <b-col>
                <h6 class="mb-0 fs-lg fw-semibold"> Bildirimler <span class="badge bg-danger-subtle text-danger fs-sm notification-badge">{{ notifications.notifications.length }}</span></h6>
                <p class="fs-md text-muted mt-1 mb-0">okunmamış <span class="fw-semibold notification-unread">{{ notifications.countNotificationsByStatus() }}</span> bildiriminiz var</p>
            </b-col>

            <b-col cols="auto" class="dropdown">
                <b-link href="#" data-bs-toggle="dropdown" class="link-secondary fs-md"><i
                    class="bi bi-three-dots-vertical"></i></b-link>
                <ul class="dropdown-menu">
                <li @click="notifications.deleteAllNotification(); notifications.getAllNotifications()"><button class="dropdown-item">Tümünü Sil</button></li>
                <li @click="notifications.markAsAllRead(); notifications.getAllNotifications()"><button class="dropdown-item">Tümünü Görüldü Yap </button></li>
                </ul>
            </b-col>
            </b-row>
        </div>
        </div>
        <div class="py-2 ps-2" id="notificationItemsTabContent">
            <simplebar style="max-height: 300px;" class="pe-2">
                <span v-for="item in notifications.notifications">

                    <div class="text-reset notification-item d-block dropdown-item position-relative  justify-content-evenly " v-bind:class="{'unread-message':item.read_at === null }">
                        <div class="d-flex">
                            <div class="position-relative me-3 flex-shrink-0">
                                <img :src="avatar2" class="rounded-circle avatar-xs" alt="user-pic" />
                                <span class="active-badge position-absolute start-100 translate-middle p-1 bg-success rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>

                            <div class="flex-grow-1" @click="item.read_at === null && readNotification(item.id)">
                                <router-link :to="item.url" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-md fw-semibold">{{ item.title }}</h6>
                                </router-link>
                                <div class="fs-sm text-muted">
                                    <p class="mb-1"> {{ item.message }}</p>
                                </div>
                                <p class="mb-0 fs-11 fw-medium text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> {{ item.created_at_ago}}</span>
                                </p>
                            </div>


                            <div class="px-1">
                                <button type="button" class="btn btn-sm btn-icon btn-icon-only btn-outline-secondary" @click="deleteItem(item.id)">
                                    <i class="bi bi-x"></i>
                                </button>                            
                            </div>
                        </div>
                    </div>

                </span>
            </simplebar>
        </div>
    </div>
</div>
</template>

<script>

import { onMounted,onUnmounted, computed } from "vue";
import { useNotificationStore } from "@/Stores/notification_store";

import simplebar  from "simplebar-vue";
export default {
   name: "notifications",
    components: {
         simplebar
    },

   
   
   setup() {
    
       const notifications = useNotificationStore()

       const avatar2 = '/build/images/avatar-2.jpg';
       const avatar8 = '/build/images/avatar-8.jpg';

        
        onMounted(async() => {
            await notifications.getAllNotifications();
            clearInterval(notifications.interval);
            await notifications.intervalNotification();
        });
        onUnmounted(() => {
            clearInterval(notifications.interval);
        })
        
        const readNotification =async (id) => {
            await notifications.markAsRead(id);
            await notifications.getAllNotifications();

        }
        const deleteItem =async (id) => {
            await notifications.deleteNotification(id);
            await notifications.getAllNotifications();

        }
    
        

  


       
       return {
            avatar2,
            avatar8,
            notifications,
            readNotification,
            deleteItem 
       }
   }
}

</script>