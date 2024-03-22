import {defineStore} from 'pinia'
export const appStore = defineStore('main',{
    state: () => ({
      isLoading: false,
      user : null,
    }),


});