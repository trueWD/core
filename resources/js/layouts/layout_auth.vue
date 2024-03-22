
<template>



<!-- Page content -->
<div class="page-content bg-dark">

  <!-- Main content -->
  <div class="content-wrapper">

    <!-- Inner content -->
    <div class="content-inner">

        <slot></slot>

    </div>
    <!-- /inner content -->

  </div>
  <!-- /main content -->

</div>
<!-- /page content -->




</template>

<script>
import { ref, onMounted } from "vue";


export default {
  name: "AuthLayout",
  components: {
  },

  setup() {
  
    onMounted(async () => {
        await App.initCore();
        await App.initAfterLoad();
    })



  },
 
  
};
</script>
