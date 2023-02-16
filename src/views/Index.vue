<template>
 <main id="main-container">
    <!-- Hero -->
    <div class="bg-body-dark">
        <div class="content content-full">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3"> Información del Dispositivo </h1>
                <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <router-link :to="{ name: 'home'}">Inicio</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page"> </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
        <!-- Panel -->
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <div class="block block-rounded block-link-shadow bg-primary">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div>
                            <i class="fa fa-2x fa-barcode text-primary-lighter"></i>
                        </div>
                        <div class="ms-3 text-end">
                            <p class="text-white fs-3 fw-medium mb-0">
                                Dispositivo
                            </p>
                            <p class="text-white-75 mb-0">
                                ESP3200000000000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="block block-rounded block-link-shadow bg-danger">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div>
                            <i class="fa fa-2x fa-cloud text-success-light"></i>
                        </div>
                        <div class="ms-3 text-end">
                            <p class="text-white fs-3 fw-medium mb-0">
                                Cloud
                            </p>
                            <p class="text-white-75 mb-0">
                                cannot connect to server - <label for=""> Offline</label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="block block-rounded block-link-shadow bg-success">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div class="me-3">
                            <p class="text-white fs-3 fw-medium mb-0">
                                WiFi
                            </p>
                            <p class="text-white-75 mb-0">
                                iothost - <label for=""> Online</label>
                            </p>
                        </div>
                        <div>
                            <i class="fa fa-2x fa-wifi text-success-light"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="block block-rounded block-link-shadow bg-warning">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div class="me-3">
                            <p class="text-white fs-3 fw-medium mb-0">
                                WiFi RSSI
                            </p>
                            <p class="text-white-75 mb-0">
                                -50 dBm
                            </p>
                        </div>
                        <div>
                            <i class="fa fa-2x fa-signal text-success-light"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="block block-rounded block-link-shadow">
                    <div class="block-content block-content-full">
                        <div class="row text-center">
                            <div class="col-4 border-end">
                                <div class="py-3">
                                    <div class="item item-circle bg-body-light mx-auto">
                                        <i class="fa fa-memory text-primary"></i>
                                    </div>
                                    <p class="fs-3 fw-medium mt-3 mb-0">
                                        60 %
                                    </p>
                                    <p class="text-muted mb-0">
                                        RAM Disponible
                                    </p>
                                </div>
                            </div>
                            <div class="col-4 border-end">
                                <div class="py-3">
                                    <div class="item item-circle bg-body-light mx-auto">
                                        <i class="fa fa-satellite-dish text-primary"></i>
                                    </div>
                                    <p class="fs-3 fw-medium mt-3 mb-0">
                                        100 %
                                    </p>
                                    <p class="text-muted mb-0">
                                        Señal WIFi
                                    </p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="py-3">
                                    <div class="item item-circle bg-body-light mx-auto">
                                        <i class="fa fa-globe-americas text-primary"></i>
                                    </div>
                                    <p class="fs-3 fw-medium mt-3 mb-0">
                                        Inactivo
                                    </p>
                                    <p class="text-muted mb-0">
                                        Cloud
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="block block-rounded bg-gd-sublime">
                    <div class="block-content block-content-full">
                        <div class="row text-center">
                            <div class="col-4 border-end border-black-op">
                                <div class="py-3">
                                    <div class="item item-circle bg-black-25 mx-auto">
                                        <i class="fa fa-hdd text-white"></i>
                                    </div>
                                    <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                        82 %
                                    </p>
                                    <p class="text-white-75 mb-0">
                                        SPIFFS Usada
                                    </p>
                                </div>
                            </div>
                            <div class="col-4 border-end border-black-op">
                                <div class="py-3">
                                    <div class="item item-circle bg-black-25 mx-auto">
                                        <i class="fa fa-sync fa-spin text-white"></i>
                                    </div>
                                    <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                        10
                                    </p>
                                    <p class="text-white-75 mb-0">
                                        Reinicios
                                    </p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="py-3">
                                    <div class="item item-circle bg-black-25 mx-auto">
                                        <i class="fa fa-clock text-white"></i>
                                    </div>
                                    <p class="text-white fs-4 fw-medium mt-3 mb-0">
                                        0:00:00:00
                                    </p>
                                    <p class="text-white-75 mb-0">
                                        Tiempo Activo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Panel -->
        <!-- ROW Inalámbrico & Cloud -->
        <div class="row mb-0">
            <!-- Cloud -->
            <div class="col-md-6 mb-3">
                <div class="block block-rounded block-link-shadow h-100 mb-0">
                    <div class="block-content p-0 progress" style="height: 2px;">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="block-content block-content-full">
                        <div>
                            <p class="fs-lg fw-semibold mb-0">
                                Cloud
                            </p>
                            <div class="table-responsive">
                                <table class="table table-striped table-borderless table-vcenter mb-0">
                                    <tr>
                                        <td class="col-3">Estado MQTT:</td>
                                        <td class="col-6">
                                            <span class="badge bg-danger">DESCONECTADO</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Servidor MQTT:</td>
                                        <td class="col-6">
                                            cannot connect to server
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Usuario MQTT:</td>
                                        <td class="col-6">
                                            user not exist
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Cliente ID MQTT:</td>
                                        <td class="col-6">
                                            ESP3200000000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Actividad:</td>
                                        <td class="col-6">
                                            <span class="badge bg-secondary">Unknown</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Ruta del Topico:</td>
                                        <td class="col-6">
                                            v1/devices/user not exist/ESP3200000000000/#
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Cloud -->
            <!-- Inalámbrico -->
            <div class="col-md-6 mb-3">
                <div class="block block-rounded block-link-shadow h-100 mb-0">
                    <div class="block-content p-0 progress" style="height: 2px;">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="block-content block-content-full">
                        <div>
                            <p class="fs-lg fw-semibold mb-2">
                                Inalámbrico
                            </p>
                            <div class="table-responsive">
                                <table class="table table-striped table-borderless table-vcenter mb-0">
                                    <tr>
                                        <td class="col-3">Estado WiFi:</td>
                                        <td class="col-6" style="margin-left: 20px;">
                                            <span class="badge bg-success">CONECTADO</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SSID WiFi:</td>
                                        <td class="col-6">
                                            iothost
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">IP WiFi:</td>
                                        <td class="col-6">
                                            000.000.000.000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">MAC WiFi:</td>
                                        <td class="col-6">
                                            00:00:00:00:00:00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">RSSI WiFi:</td>
                                        <td class="col-6">
                                            -50 dBm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Modo WiFi:</td>
                                        <td class="col-6">
                                            <span class="badge bg-primary">Cliente</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Inalámbirco -->
        </div>
        <!-- END ROW Inalámbrico & Cloud -->
        <!-- ROW Hardware & Software -->
        <div class="row mb-4">
            <!-- Hardware & Software -->
            <div class="col-md-12">
                <div class="block block-rounded block-link-shadow h-100 mb-0">
                    <div class="block-content p-0 progress" style="height: 2px;">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 100%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="block-content block-content-full">
                        <div>
                            <p class="fs-lg fw-semibold mb-2">
                                Hardware & Software
                            </p>
                            <div class="table-responsive">
                                <table class="table table-striped table-borderless table-vcenter mb-0">
                                    <tr>
                                        <td class="col-2">Número de Serie:</td>
                                        <td class="col-10">
                                            ESP3200000000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Versión del Firmware:</td>
                                        <td class="col-6">
                                            v0.0.00-Build-00000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SDK:</td>
                                        <td class="col-6">
                                            v0.0.0-0-000000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Versión del Hardware:</td>
                                        <td class="col-6">
                                            ADMINVUE32 v0 00000000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">CPU FREQ:</td>
                                        <td class="col-6">
                                            240 MHz
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">RAM SIZE:</td>
                                        <td class="col-6">
                                            35.08 KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">FLASH SIZE:</td>
                                        <td class="col-6">
                                            4.0 MB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SPIFFS SIZE:</td>
                                        <td class="col-6">
                                            15.31 KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SPIFFS USED:</td>
                                        <td class="col-6">
                                            1.23 KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Fabricante:</td>
                                        <td class="col-6">
                                            IOTHOST
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Inalámbirco -->
        </div>
        <!-- END ROW Hardware & Software -->
    </div>
    <!-- END Page Content -->
  </main> 
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Index'
  
}
</script>
