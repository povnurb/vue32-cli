<template>
 <main id="main-container">
    <!-- Hero -->
    <Hero :title="title" :page="page" />
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
        <!-- Panel -->
        <div class="row">
            <div class="col-md-6 ">
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
                               {{ index_datos.device_serial || 'ESP3200000000000'}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 ">
                <div :class="mqtt_class_03">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div>
                            <i class="fa fa-2x fa-cloud text-success-light"></i>
                        </div>
                        <div class="ms-3 text-end">
                            <p class="text-white fs-3 fw-medium mb-0">
                                Cloud
                            </p>
                            <p class="text-white-75 mb-0">
                               ({{ index_datos.mqtt_server ||"cannot connect to server"}}) - <label for=""> {{mqtt_status}}</label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 ">
                <div :class="wifi_class_03">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div class="me-3">
                            <p class="text-white fs-3 fw-medium mb-0">
                                WiFi
                            </p>
                            <p class="text-white-75 mb-0">
                                ({{index_datos.wifi_ssid || "cannot connect to WiFi"}}) - <label for=""> {{wifi_status}}</label>
                            </p>
                        </div>
                        <div>
                            <i class="fa fa-2x fa-wifi text-success-light"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="block block-rounded block-link-shadow bg-warning">
                    <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                        <div class="me-3">
                            <p class="text-white fs-3 fw-medium mb-0">
                                WiFi RSSI
                            </p>
                            <p class="text-white-75 mb-0">
                                {{index_datos.wifi_rssi}} dBm
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
                                        {{ram_percent_free.toFixed(2)}} %
                                    </p>
                                    <p class="text-muted mb-0">
                                        RAM Disponible
                                    </p>
                                </div>
                            </div>
                            <div class="col-4 border-end">
                                <div class="py-3">
                                    <div class="item item-circle bg-body-light mx-auto">
                                        <i class="fa fa-2x fa-satellite-dish text-primary"></i>
                                    </div>
                                    <p class="fs-3 fw-medium mt-3 mb-0">
                                        {{index_datos.wifi_signal || 0}} %
                                    </p>
                                    <p class="text-muted mb-0">
                                        Señal WIFi
                                    </p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="py-3">
                                    <div class="item item-circle bg-body-light mx-auto">
                                        <i class="fa fa-2x fa-globe-americas text-primary"></i>
                                    </div>
                                    <p class="fs-3 fw-medium mt-3 mb-0">
                                        {{index_datos.mqtt_activity||"Unknown"}}
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
                                        <i class="fa fa-2x fa-hdd text-white"></i>
                                    </div>
                                    <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                        {{spiffs_percent_used.toFixed(2)}} %
                                    </p>
                                    <p class="text-white-75 mb-0">
                                        SPIFFS Usada
                                    </p>
                                </div>
                            </div>
                            <div class="col-4 border-end border-black-op">
                                <div class="py-3">
                                    <div class="item item-circle bg-black-25 mx-auto">
                                        <i class="fa fa-2x fa-sync fa-spin text-white"></i>
                                    </div>
                                    <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                        {{index_datos.device_restart||"Unknown"}}
                                    </p>
                                    <p class="text-white-75 mb-0">
                                        Reinicios
                                    </p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="py-3">
                                    <div class="item item-circle bg-black-25 mx-auto">
                                        <i class="fa fa-2x fa-clock text-white"></i>
                                    </div>
                                    <p class="text-white fs-4 fw-medium mt-3 mb-0">
                                        {{index_datos.device_time_active || "Unknown"}}
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
                        <div :class="mqtt_class_02" role="progressbar" style="width: 100%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <span :class="mqtt_class_01">{{mqtt_connection}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Servidor MQTT:</td>
                                        <td class="col-6">
                                           {{index_datos.mqtt_server || "cannot connect to server"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Usuario MQTT:</td>
                                        <td class="col-6">
                                            {{index_datos.mqtt_user || "user not exist"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Cliente ID MQTT:</td>
                                        <td class="col-6">
                                            {{index_datos.mqtt_cloud_id ||"Unknown"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Actividad:</td>
                                        <td class="col-6">
                                            <span class="badge bg-secondary">{{index_datos.mqtt_activity||"Unknown"}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Ruta del Topico:</td>
                                        <td class="col-6">
                                            v1/devices/{{index_datos.mqtt_user||"user not exist"}}/{{index_datos.device_serial||"ESP3200000000000"}}/#
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
                        <div :class="wifi_class_02" role="progressbar" style="width: 100%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <span :class="wifi_class_01">{{wifi_connection}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SSID WiFi:</td>
                                        <td class="col-6">
                                            {{index_datos.wifi_ssid||"cannot connect to WiFi"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">IP WiFi:</td>
                                        <td class="col-6">
                                            {{index_datos.wifi_ipv4 || "Unknown"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">MAC WiFi:</td>
                                        <td class="col-6">
                                            {{index_datos.wifi_mac || "Unknown"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">RSSI WiFi:</td>
                                        <td class="col-6">
                                            {{index_datos.wifi_rssi || 0}} dBm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Modo WiFi:</td>
                                        <td class="col-6">
                                            <span class="badge bg-primary">{{index_datos.wifi_mode||"Unknown"}}</span>
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
                                            {{index_datos.device_serial||"Unknown"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Versión del Firmware:</td>
                                        <td class="col-6">
                                            {{index_datos.device_fw_version ||"v0.0.00-Build-00000000"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SDK:</td>
                                        <td class="col-6">
                                            {{index_datos.device_sdk ||"v0.0.0-0-000000000"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Versión del Hardware:</td>
                                        <td class="col-6">
                                            {{index_datos.device_hw_version||"ADMINVUE32 v0 00000000"}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">CPU FREQ:</td>
                                        <td class="col-6">
                                            {{index_datos.device_cpu_clock || "Unknown"}} MHz
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">RAM SIZE:</td>
                                        <td class="col-6">
                                            {{index_datos.device_ram_size/1000 ||35.08}} KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">FLASH SIZE:</td>
                                        <td class="col-6">
                                            {{index_datos.device_flash_size || "Unknown"}} MB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SPIFFS SIZE:</td>
                                        <td class="col-6">
                                            {{index_datos.device_spiffs_total/1000 || "Unknown"}} KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">SPIFFS USED:</td>
                                        <td class="col-6">
                                            {{index_datos.device_spiffs_used/1000 || "Unknown"}} KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-3">Fabricante:</td>
                                        <td class="col-6">
                                            {{index_datos.device_manufacturer ||"Varios"}}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Inalámbirco -->
            {{ index_update }}
        </div>
        <!-- END ROW Hardware & Software -->
    </div>
    <!-- END Page Content -->
  </main> 
  
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/common/Hero.vue"
import useIndex from "@/composables/useIndex"

export default {
    components: {Hero},
    name: 'Index',
    setup(){
            const title= "Información del Dispositivo"
            const page = ""

            const {
                index_update,
                index_datos,
                wifi_status,
                mqtt_status,
                wifi_connection,
                mqtt_connection,
                wifi_class_01,
                mqtt_class_01,
                wifi_class_02,
                mqtt_class_02,
                wifi_class_03,
                mqtt_class_03,
                spiffs_percent_used,
                ram_percent_free
            } = useIndex()

        return{
            index_update,
            title,
            page,
            index_datos,
            wifi_status,
            mqtt_status,
            wifi_connection,
            mqtt_connection,
            wifi_class_01,
            mqtt_class_01,
            wifi_class_02,
            mqtt_class_02,
            wifi_class_03,
            mqtt_class_03,
            spiffs_percent_used,
            ram_percent_free
        }
    }
  
}
</script>
