<template>
    <!-- Main Container -->
    <main id="main-container">
            <!-- Hero -->
            <Hero :title="title" :page="page" />
            <!-- END Hero -->
            <!-- Page Content -->
            <div class="content">
                <h2 class="content-heading">VUE32 Admin Tool</h2>
                <div class="row">
                    <!-- Your Block -->
                    <div class="col-md-7">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-xeco-light">
                                <h3 class="block-title">Configuración del Dispositivo</h3>
                            </div>
                            <div class="block-content">
                                <div class="col-12">
                                    <!-- Vertical Block Tabs Default Style With Extra Info -->
                                    <div class="block block-rounded row g-0">
                                        <ul class="nav nav-tabs nav-tabs-block flex-md-column col-md-3" role="tablist">
                                            <li class="nav-item d-md-flex flex-md-column">
                                                <button class="nav-link text-md-start active" id="btabs-vertical-info-profile-tab" data-bs-toggle="tab" data-bs-target="#btabs-vertical-info-profile" role="tab" aria-controls="btabs-vertical-info-profile" aria-selected="true">
                                                <i class="fa fa-fw fa-user-circle opacity-50 me-1 d-none d-sm-inline-block"></i>
                                                <span>Usuario</span>
                                                <span class="d-none d-md-block fs-xs fw-medium opacity-75 mt-md-2">
                                                    Cambia el nombre de usuario y la contraseña.
                                                </span>
                                                </button>
                                            </li>
                                            <li class="nav-item d-md-flex flex-md-column">
                                                <button class="nav-link text-md-start" id="btabs-vertical-info-settings-tab" data-bs-toggle="tab" data-bs-target="#btabs-vertical-info-settings" role="tab" aria-controls="btabs-vertical-info-settings" aria-selected="false">
                                                <i class="fa fa-fw fa-cog fa-spin opacity-50 me-1 d-none d-sm-inline-block"></i>
                                                <span>Dispositivo</span>
                                                <span class="d-none d-md-block fs-xs fw-medium opacity-75 mt-md-2">
                                                    Actualice el identificador del dispositivo
                                                </span>
                                                </button>
                                            </li>
                                            <li class="nav-item d-md-flex flex-md-column">
                                                <button class="nav-link text-md-start" id="btabs-vertical-info-firmware-tab" data-bs-toggle="tab" data-bs-target="#btabs-vertical-info-firmware" role="tab" aria-controls="btabs-vertical-info-settings" aria-selected="false">
                                                <i class="fa fa-fw fa-wrench opacity-50 me-1 d-none d-sm-inline-block"></i>
                                                <span>Firmware</span>
                                                <span class="d-none d-md-block fs-xs fw-medium opacity-75 mt-md-2">
                                                    Actualice el Firmware del dispositivo
                                                </span>
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content col-md-9">
                                            <div class="block-content tab-pane active" id="btabs-vertical-info-profile" role="tabpanel" aria-labelledby="btabs-vertical-info-profile-tab">
                                                <h4 class="fw-semibold">Usuario y Contraseña</h4>
                                                <form class="form form-vertical" @submit.prevent="handleSubmit('user')" id="form">
                                                    <div class="row push">
                                                        <div class="form-group col-md-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_old_user">Usuario Anterior</label>
                                                                <input type="text" class="form-control" placeholder="Usuario Anterior" id="device_old_user" v-model.trim="user.device_old_user">
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_old_password">Contraseña Anterior</label>
                                                                <input type="password" class="form-control" placeholder="*****" id="device_old_password" v-model.trim="user.device_old_password">
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_new_user">Nuevo Usuario</label>
                                                                <input type="text" class="form-control" placeholder="Nuevo Usuario" id="device_new_user" v-model.trim="user.device_new_user">
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_new_password">Nueva Contraseña</label>
                                                                <input type="password" class="form-control" placeholder="******" id="device_new_password" v-model.trim="user.device_new_password">
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-12 mb-3">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_c_new_password">Confirmar nueva Contraseña</label>
                                                                <input type="password" class="form-control" placeholder="******" id="device_c_new_password" v-model.trim="user.device_c_new_password">
                                                            </div>
                                                        </div>
                                                        <div class="mb-2">
                                                            <button type="submit" class="btn btn-alt-success me-1 mb-1">
                                                                <i class="fa fa-fw fa-save opacity-50 me-1"></i> Guardar
                                                            </button>
                                                            <button type="button" class="btn btn-alt-info me-1 mb-1" @click="clear">
                                                                <i class="fa fa-fw fa-trash-alt opacity-50 me-1"></i> Limpiar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="block-content tab-pane" id="btabs-vertical-info-settings" role="tabpanel" aria-labelledby="btabs-vertical-info-settings-tab">
                                                <h4 class="fw-semibold">Dispositivo</h4>
                                                <form class="form form-vertical" @submit.prevent="handleSubmit('device')">
                                                    <div class="row push">
                                                        <div class="form-group col-md-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_serial">Número de Serie</label>
                                                                <input type="text" class="form-control" placeholder="9B1C5210CE0C3D" id="device_serial" v-model.trim="device.device_serial" readonly>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-12 mb-3">
                                                            <div class="form-group">
                                                                <label class="form-label" for="device_id">Identificación del Dispositivo</label>
                                                                <input type="text" class="form-control" placeholder="adminvue32" id="device_id" v-model.trim="device.device_id" >
                                                            </div>
                                                        </div>
                                                        <div class="mb-2">
                                                            <button type="submit" class="btn btn-alt-success me-1">
                                                                <i class="fa fa-fw fa-save opacity-50 me-1"></i> Guardar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p class='my-2'>El identificador del dispositivo se usa para el <span class="fst-normal">mDNS Url.</span>
                                                    <br><span class="fw-bold">Ejemplo:</span> <code>http://{{device.device_id}}.local</code></p>
                                            </div>
                                            <div class="block-content tab-pane" id="btabs-vertical-info-firmware" role="tabpanel" aria-labelledby="btabs-vertical-info-firmware-tab">
                                                <div class="content-heading">Firmware y FileSystem</div>
                                                <div class="row push">
                                                    <div class="col-12">
                                                        <p class="text-muted">Use este Botón para actualizar el Firmware o el FileSystem del Dispositivo.</p>
                                                        <div class="input-group mb-3">
                                                            <label class="input-group-text" for="inputFileFirmware"><i class="fa fa-upload"></i></label>
                                                            <input type="file" accept="application/octet-stream" class="form-control" id="inputFileFirmware">
                                                            <button @click="uploadFirmware" class="btn btn-primary" type="button" id="btnFileFirmware">Importar</button>
                                                        </div>
                                                        <p class="text-muted mt-3">Nota: Si el nombre de archivo incluye spiffs, actualiza la partición del FileSystem.</p>
                                                        <div v-if="loading">
                                                            <h2 class="content-heading mt-3">Cargando...</h2>
                                                            <div class="progress push mt-3">
                                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" :style="percent" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                                    <span class="fs-sm fw-semibold">{{progress.msg}}%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- END Vertical Block Tabs Default Style With Extra Info -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END Your Block -->
                    <!-- Your Block -->
                    <div class="col-md-5">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-xeco-light">
                                <h3 class="block-title">Archivo de configuraciones</h3>
                            </div>
                            <div class="block-content">
                                <div class="mb-2">
                                    <div class="content-heading">Configuraciones</div>
                                </div>
                                <section id="basic-input-groups">
                                    <div class="row">
                                        <div class="col-12">
                                            <h6>Descargar archivo de configuración (<code>settings.json</code>)</h6>
                                            <p class="text-muted">Use este <code>Botón</code> para exportar las configuraciones actuales.</p>
                                            <div class="buttons">
                                                <button @click="downloadSettings" class="btn icon btn-secondary"><i class="fa fa-file-download"> </i> Descargar</button>
                                            </div>
                                            <hr>
                                            <h6>Restablecer configuraciones predeterminada</h6>
                                            <p class="text-muted">Use el siguiente botón para restablecer a los parámetros de fábrica.</p>
                                            <div class="buttons">
                                                <button class="btn icon btn-warning"><i class="fa fa-redo fa-spin"></i> Restablecer</button>
                                            </div>
                                            <hr>
                                            <h6>Importar el archivo de configuración (<code>settings.json</code>)</h6>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputFileAdd"><i class="fa fa-file-upload"></i></label>
                                                <input type="file" accept="application/json" class="form-control" id="inputFileAdd">
                                                <button @click="uploadSettings" class="btn btn-primary" type="button" id="btnFileAdd">Subir</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <!-- END Your Block -->
                    
                </div>
                
            </div>
            <!-- END Page Content -->
            
        </main>
        <!-- END Main Container -->
</template>
<script>
import Hero from "@/components/common/Hero.vue"
import useSettings from "@/composables/useSettings"

export default {
    components: {Hero},
    name: "Settings", //nombre del componente
    props: {
        progress: {}
    },
    setup(props){
        const title = "Configuración General"
        const page = "Configurar"

        const {
            device, 
            user, 
            handleSubmit, 
            clear, 
            downloadSettings, 
            uploadSettings, 
            uploadFirmware, 
            loading, 
            progress,
            percent
        } = useSettings(props) //de donde vienen

        return{
            title,
            page,
            device,
            user,
            handleSubmit,
            clear,
            downloadSettings,
            uploadSettings,
            uploadFirmware,
            loading,
            progress,
            percent
        }
    }
}
</script>