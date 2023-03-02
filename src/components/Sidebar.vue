<template>
    <nav id="sidebar" aria-label="Main Navigation">
            <!-- Side Header -->
            <div class="bg-header-dark">
                <div class="content-header bg-white-5">
                    <!-- Logo -->
                    <router-link class="fw-semibold text-white tracking-wide" :to="{ name: 'home'}">
                        <span class="smini-visible">
                            <span class="opacity-75">x</span>
                        </span>
                        <span class="smini-hidden">
                            CTRL<span class="opacity-75"> IGL-PTTI</span>
                        </span>
                    </router-link>
                    <!-- END Logo -->
                    <!-- Options -->
                    <div>
                        <!-- Close Sidebar, Visible only on mobile screens -->
                        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                        <button type="button" class="btn btn-sm btn-alt-secondary d-lg-none" data-toggle="layout" data-action="sidebar_close">
                            <i class="fa fa-times-circle"></i>
                        </button>
                        <!-- END Close Sidebar -->
                    </div>
                    <!-- END Options -->
                </div>
            </div>
            <!-- END Side Header -->
            <!-- Sidebar Scrolling -->
            <div class="js-sidebar-scroll">
                <!-- Side Navigation -->
                <div class="content-side">
                    <ul class="nav-main">
                        <li class="nav-main-item">
                            <router-link :to="{ name: 'home'}" :class="index">
                                <i class="nav-main-link-icon fa fa-tachometer-alt"></i>
                                <span class="nav-main-link-name">Inicio</span>
                                </router-link>
                        </li>
                        <li class="nav-main-item">
                            <router-link :to="{ name: 'alarmas'}" :class="alarmas">
                                <i class="nav-main-link-icon fa fa-exclamation-triangle"></i>
                                <span class="nav-main-link-name">Alarmas</span>
                                </router-link>
                        </li>
                        <li class="nav-main-heading">Configuraciones</li>
                        <li class="nav-main-item">
                            <router-link :to="{ name: 'wifi'}" :class="wifi">
                                <i class="nav-main-link-icon fa fa-wifi"></i>
                                <span class="nav-main-link-name">WIFI</span>
                                </router-link>
                        </li>
                        <li class="nav-main-item">
                            <router-link :to="{ name: 'cloud'}" :class="cloud">
                                <i class="nav-main-link-icon fa fa-cloud"></i>
                                <span class="nav-main-link-name">Cloud</span>
                                </router-link>
                        </li>
                        <li class="nav-main-item">
                            <router-link :to="{ name: 'settings'}" :class="settings">
                                <i class="nav-main-link-icon fa fa-cog fa-spin"></i>
                                <span class="nav-main-link-name">Configurar</span>
                                </router-link>
                        </li>
                        <li class="nav-main-heading">Acciones</li>
                        <li class="nav-main-item">
                            <a @click="showAlertConfirm('Reiniciar', '¿Está seguro de reiniciar el dispositivo?', 'question', 'restart')" class="nav-main-link" style="cursor:pointer;">
                                <i class="nav-main-link-icon fa fa-redo-alt fa-spin"></i>
                                <span class="nav-main-link-name">Reiniciar</span>
                            </a>
                        </li>
                        <li class="nav-main-item">
                            <a @click="showAlertConfirm('Sesion','¿Está seguro de cerrar la sesión?','question','logout')" class="nav-main-link" style="cursor:pointer;">
                                <i class="nav-main-link-icon fa fa-sign-out-alt"></i>
                                <span class="nav-main-link-name">Salir</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- END Side Navigation -->
            </div>
            <!-- END Sidebar Scrolling -->
        </nav>
</template>
<script>

import { computed } from 'vue'
import useApp from '@/composables/useApp'
export default {
    name: "Sidebar",
    setup(){
        const {swal, command, route, deleteSession} = useApp()

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
                    if (funct == "restart") {
                        command(funct)
                    }else {
                        deleteSession()
                    }
                }
            })
    }

        const index = computed(()=>{
            return route.path == '/'? 'nav-main-link active' : 'nav-main-link'
        })
        const alarmas = computed(()=>{
            return route.path == '/alarmas'? 'nav-main-link active' : 'nav-main-link'
        })
        const wifi = computed(()=>{
            return route.path == '/wifi'? 'nav-main-link active' : 'nav-main-link'
        })
        const cloud = computed(()=>{
            return route.path == '/cloud'? 'nav-main-link active' : 'nav-main-link'
        })
        const settings = computed(()=>{
            return route.path == '/settings'? 'nav-main-link active' : 'nav-main-link'
        })

        return {
            index,
            alarmas,
            wifi,
            cloud,
            settings,
            showAlertConfirm
        }

    }

}
</script>
<style>
</style>