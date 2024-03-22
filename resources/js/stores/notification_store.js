import { defineStore } from "pinia";
import { ref, watch,computed } from "vue";
import Service from '@/Utils/Service.js';
import { differenceWith } from "lodash";

export const useNotificationStore = defineStore('notificationStore', () => {
  if ('Notification' in window){
    Notification.requestPermission();
  }else{
    console.log('Notification is not supported');
  } 



  const notifications = ref([]);
  const { newAxios } = Service()
  const interval = ref();
  const getAllNotifications = async () => {
    newAxios.defaults.show_loading = false;
    const response =  await newAxios.get(`/notifications`);
    notifications.value = response.data.data;
  }
  const deleteNotification = async (notificationId) => {
    alert('Are you sure you want to delete this notification?');
    newAxios.defaults.show_loading = true;
    return await newAxios.delete(`/notifications/${notificationId}`);
  }
  const deleteAllNotification = async () => {
    newAxios.defaults.show_loading = true;
    return await newAxios.get(`/notifications/delete_all`);
  }

  const markAsRead = async (id) => {
    newAxios.defaults.show_loading = true;
    return await newAxios.get(`/notifications/read/${id}`);
  }
  const markAsAllRead = async () => {
    newAxios.defaults.show_loading = true;
    return await newAxios.get(`/notifications/read_all`);
  }

  const intervalNotification = async () => {
    interval.value = setInterval(() => {
        getAllNotifications();
    },5000)
  }

  const notificationMakerAndPush = (payload) => {
    let iconPath = '';
    switch (payload.type) {
      case 'success':
        iconPath = '/assets/images/svgs/check.svg'
        break;
      case 'danger':
        iconPath = '/assets/images/svgs/times.svg'
        break;
      case 'warning':
        iconPath = '/assets/images/svgs/warning.svg'
        break;
      default:
        iconPath = '/assets/images/svgs/info.svg'
    }
    new Notification(payload.title, {
      body: payload.message,
      icon: iconPath,
      tag: payload.id
    })
  }


  const countNotificationsByStatus = () => {
    return computed(() => notifications.value.filter(notif => notif.read_at === null).length);
  };



  watch(notifications, (newVal, oldVal) => {
    const diffNotifications = differenceWith(newVal, oldVal, (obj1, obj2) => obj1.id === obj2.id);
    if (diffNotifications.length > 0) {
      diffNotifications.forEach(notification => {
        notificationMakerAndPush(notification);
      });
    }
  });

  return {
    notifications,
    getAllNotifications,
    deleteNotification,
    intervalNotification,
    interval,
    markAsRead,
    countNotificationsByStatus,
    deleteAllNotification,
    markAsAllRead
  }
});