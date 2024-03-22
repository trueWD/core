<template>
    <Loader />
    <router-view />
</template>
<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    created() {
        setTimeout(() => (this.loading = false), 600);    
    }
};
</script>