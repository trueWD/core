
<template>
    <Layout>


        <div class="row">
           
            <div class="btn-group">
                <button type="button" class="btn btn-primary rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="ph-gear me-2"></i>
                    Dropdown
                </button>
                <div class="dropdown-menu" style="">
                    <a href="#" class="dropdown-item">Action</a>
                    <a href="#" class="dropdown-item">Another action</a>
                    <a href="#" class="dropdown-item">One more action</a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">Separated line</a>
                </div>
            </div>


        </div>




        <div class="row">
            <h3> Hello dashboard 1</h3>


            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </Layout>
  </template>
  
  <script>
  import { ref } from "vue";
  import Layout from "@/layouts/layout.vue";

  
  export default {
    name: "Dashboards",
    components: {
        Layout,
    }, 
  };
  </script>
  