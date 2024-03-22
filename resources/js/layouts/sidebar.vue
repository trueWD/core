<template>
    <!-- Main sidebar -->
    <div class="sidebar sidebar-dark sidebar-main sidebar-expand-lg">

        <!-- Sidebar content -->
        <div class="sidebar-content">

            <!-- Sidebar header -->
            <div class="sidebar-section">
                <div class="sidebar-section-body d-flex justify-content-center">
                    <h5 class="sidebar-resize-hide flex-grow-1 my-auto">Navigation</h5>

                    <div>
                        <button type="button" class="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                            <i class="ph-arrows-left-right"></i>
                        </button>

                        <button type="button" class="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-mobile-main-toggle d-lg-none">
                            <i class="ph-x"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- /sidebar header -->


            <!-- Main navigation -->
            <div class="sidebar-section">
                <ul class="nav nav-sidebar" data-nav-type="accordion">

                    <!-- Main -->
                    <li class="nav-item-header pt-0">
                        <div class="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">Main</div>
                        <i class="ph-dots-three sidebar-resize-show"></i>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="ph-house"></i>
                            <span>Dashboard</span>
                        </router-link>
                    </li>

                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-users"></i>
                            <span>Kullanıcı Yönetimi</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item">
                                <router-link to="/admin/roles" class="nav-link"> Roller Listesi</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/users" class="nav-link"> Kullanıcı Listesi</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-gear-six"></i>
                            <span>Sistem Ayarları</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item"><a href="index.html" class="nav-link">Genel Ayarlar</a></li>
                            <li class="nav-item"><a href="index.html" class="nav-link">Bakım Ayarları</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link">
                            <i class="ph-user"></i>
                            <span>Hesap Ayarlarım</span>
                        </a>
                        <ul class="nav-group-sub collapse">
                            <li class="nav-item">
                                <router-link to="/account/myacount" class="nav-link"> Hesap Ayarlarım</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="../../../../docs/other_changelog.html" class="nav-link">
                            <i class="ph-list-numbers"></i>
                            <span>Dokumantasyon</span>
                            <span class="badge bg-primary align-self-center rounded-pill ms-auto">4.0</span>
                        </a>
                    </li>




                </ul>
            </div>
            <!-- /main navigation -->

        </div>
        <!-- /sidebar content -->
    </div>
    <!-- /main sidebar -->
</template>
<script setup>
</script>
