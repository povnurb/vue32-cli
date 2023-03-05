<template>
    <header id="page-header">
            <!-- Header Content -->
            <div class="content-header">
                <!-- Left Section -->
                <div>
                    <!-- Toggle Sidebar -->
                    <!-- Layout API, functionality initialized in Template._uiApiLayout()-->
                    <button type="button" class="btn btn-alt-secondary me-1" data-toggle="layout" data-action="sidebar_toggle">
                        <i class="fa fa-fw fa-bars"></i>
                    </button>
                    <!-- END Toggle Sidebar -->
                </div>
                <!-- END Left Section -->
                <!--Time Nuevo-->
                <div class="text-center">
                    <div class="fw-semibold"><i class="fa fa-clock me-1"></i>{{time_update}}</div>
                    <div class="text-gray-lighter"><small>Fecha y Hora del Sistema</small></div>
                </div>

                <!-- Right Section -->
                <div>
                    <!-- User Dropdown -->
                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn btn-alt-secondary" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-fw fa-user d-sm-none"></i>
                            <span class="d-none d-sm-inline-block">Usuario</span>
                            <i class="fa fa-fw fa-angle-down opacity-50 ms-1 d-none d-sm-inline-block"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="page-header-user-dropdown">
                            <div class=" bg-primary-dark rounded-top fw-semibold text-white text-center p-3">Opciones</div>
                            <div class="p-2">
                                <router-link class="dropdown-item" :to="{ name: 'settings' }">
                                    <i class="fa fa-users-cog me-1"></i> Configurar
                                </router-link>
                                <div role="separator" class="dropdown-divider"></div>
                                <a @click="showAlertConfirm('Sesion','¿Está seguro de cerrar la sesión?','question','logout')" class="dropdown-item" style="cursor:pointer;">
                                    <i class="fa fa-sign-out-alt me-1"></i> Salir
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- END User Dropdown -->
                </div>
                <!-- END Right Section -->
            </div>
            <!-- END Header Content -->
        </header>
</template>
<script>
import useApp from '@/composables/useApp';

export default {
    name: "Header",
    setup(){
        const{swal, deleteSession, time_update}=useApp()

        const showAlertConfirm = (title, text, icon, funct) => {
            swal({
                title: title,
                text: text,
                icon: icon,
                showCancelButton: true,
                confirmButtonColor: '#41bb82',
                cancelButtonColor: '#ff3030',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    if (funct == "logout") {
                        deleteSession()
                    }
                }
            })
        }
        return{
            showAlertConfirm,
            time_update
        }
    }
}
</script>
