<template>
    <!-- Main Container -->
    <main id="main-container">
            <!-- Hero -->
            <div class="bg-body-dark">
                <div class="content content-full">
                    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3"> Configuración del Cloud MQTT </h1>
                        <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-alt">
                                <li class="breadcrumb-item">
                                    <a href="/">Inicio</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page"> Cloud </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- END Hero -->
            <!-- Page Content -->
            <div class="content">
                <h2 class="content-heading">VUE32 Admin Tool</h2>
                <div class="row">
                    <!-- Conectividad Block -->
                    <div class="col-md-6">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-xeco-light">
                                <h3 class="block-title">Conectividad</h3>
                            </div>
                            <div class="block-content">
                                <form class="form form-vertical">
                                    <div class="row push">
                                        <div class="form-group col-md-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_cloud_enable">Habilitar el MQTT</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="mqtt_cloud_enable" type="checkbox" />
                                                    <label class="form-check-label">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_server">Servidor MQTT</label>
                                                <input type="text" id="mqtt_server" class="form-control" placeholder="mqttserver.com">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_port">Puerto MQTT</label>
                                                <input type="number" id="mqtt_port" class="form-control" placeholder="1883">
                                            </div>
                                        </div>
                                        <div class="form-group col-12 mb-2">
                                            <div class='form-check'>
                                                <div class="checkbox">
                                                    <label class="form-label" for="mqtt_retain">Mensajes retenidos</label>
                                                    <input type="checkbox" id="mqtt_retain" class='form-check-input'>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6 mb-2">
                                            <fieldset class="form-group">
                                                <label class="form-label" for="mqtt_qos">Calidad del Servicio (QoS)</label>
                                                <select class="form-select" id="mqtt_qos">
                                            <option value="0">QoS 0</option>
                                            <option value="1">QoS 1</option>
                                            <option value="2">QoS 2</option>
                                        </select>
                                            </fieldset>
                                        </div>
                                        <div class="form-group col-md-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_cloud_id">Cliente ID MQTT </label>
                                                <input type="text" class="form-control" placeholder="9B1C5210CE0C3D" id="mqtt_cloud_id">
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_user">Usuario</label>
                                                <input type="text" class="form-control" placeholder="MQTT_User" id="mqtt_user">
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12 mb-3">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_password">Contraseña</label>
                                                <input type="password" class="form-control" placeholder="*****" id="mqtt_password">
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <button type="submit" class="btn btn-alt-success me-1">
                                                <i class="fa fa-fw fa-save opacity-50 me-1"></i> Guardar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- END Conectividad Block -->
                    <!-- Datos Block -->
                    <div class="col-md-6">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-xeco-light">
                                <h3 class="block-title">Datos</h3>
                            </div>
                            <div class="block-content">
                                <div class="section-title mt-0 mb-4">Seleccione los parámetros de envío de la Data al servidor Cloud desde el Dispositivo.</div>
                                <form class="form form-vertical">
                                    <div class="row push">
                                        <div class="mb-2">
                                            <div class='form-check'>
                                                <div class="checkbox">
                                                    <label class="form-check-label" for="mqtt_time_send">Enviar datos del dispositivo</label>
                                                    <input type="checkbox" id="mqtt_time_send" class='form-check-input'>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="mqtt_time_interval">Intervalo en segundos (s)</label>
                                                <input type="number" id="mqtt_time_interval" class="form-control" placeholder="30">
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <div class='form-check'>
                                                <div class="checkbox">
                                                    <label class="form-check-label" for="mqtt_status_send">Enviar estados</label>
                                                    <input type="checkbox" id="mqtt_status_send" class='form-check-input'>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <button type="submit" class="btn btn-alt-success me-1">
                                                <i class="fa fa-fw fa-save opacity-50 me-1"></i> Guardar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- END Datos Block -->
                </div>
            </div>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->
</template>
<script>
export default {
    name: "Cloud"
}
</script>