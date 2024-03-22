
<template>

  <Header></Header>

  <!-- Page content -->
  <div class="page-content">
    <Sidebar></Sidebar>
      <!-- Main content -->
      <div class="content-wrapper">
        <!-- Inner content -->
        <div class="content-inner">
          <!-- Page header -->
          <PageHeader></PageHeader>
          <!-- /page header -->
          <!-- Content area -->
          <div class="content">
              <slot></slot>
          </div>
          <!-- /content area -->
          <!-- Footer -->
          <Footer></Footer>
          <!-- /footer -->
        </div>
        <!-- /inner content -->
    </div>
    <!-- /main content -->
  </div>

</template>

<script setup>
import Header from "@/layouts/header.vue";
import PageHeader from "@/layouts/page_header.vue";
import Sidebar from "@/layouts/sidebar.vue";
import Footer from "@/layouts/footer.vue";
import { onMounted } from "vue";
   
onMounted(async () => {
     await App.initCore();
     await App.initAfterLoad();
})


</script>
