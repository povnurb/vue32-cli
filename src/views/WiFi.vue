<template>
    <!-- Main Container -->
    <main id="main-container">
        <!-- Hero -->
        <Hero :title="title" :page="page" />
        <!-- End Hero -->
        <!-- Page Content -->
        <div class="content">
            <h2 class="content-heading">VUE32 Admin Tool</h2>
            <div class="row">
                <!-- END Block Connectivity -->
                <div class="col-md-4">
                    <div class="block block-rounded block-themed">
                        <div class="block-header bg-xeco-light">
                            <h3 class="block-title">Conectividad</h3>
                        </div>
                        <div class="block-content">
                            <form class="form form-vertical" @submit.prevent="handleSubmit">
                                <div class="row push">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="wifi_ssid">SSID</label>
                                            <input type="text" id="wifi_ssid" class="form-control" placeholder="iotmaster" v-model.trim="wifi.wifi_ssid" />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label class="form-label" for="wifi_password">Contraseña</label>
                                            <input type="password" id="wifi_password" class="form-control" placeholder="*****" v-model.trim="wifi.wifi_password" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 push mb-2">
                                        <div id="accordion" role="tablist" aria-multiselectable="true">
                                            <div class="block block-rounded mb-1">
                                                <div class="" role="tab" id="accordion_h1">
                                                    <a class="fw-semibold" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#ipStaticDHCP" aria-expanded="true" aria-controls="ipStaticDHCP">
                                                        <i class="fa fa-fw fa-cog fa-spin opacity-50 me-1 d-none d-sm-inline-block"></i> Opciones Avanzadas
                                                    </a>
                                                </div>
                                                <div id="ipStaticDHCP" class="collapse" role="tabpanel" aria-labelledby="accordion_h1" data-bs-parent="#accordion">
                                                    <div class="block-content">
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="wifi_ip_static">DHCP</label>
                                                                <div class="form-check form-switch">
                                                                    <input class="form-check-input" id="wifi_ip_static" type="checkbox" v-model="wifi.wifi_ip_static" />
                                                                    <label class="form-check-label">{{wifi_ip_static}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="dir_wifi_ipv4">Dirección IPv4</label>
                                                                <input type="text" id="dir_wifi_ipv4" class="form-control" placeholder="192.168.1.100" v-model.trim="wifi.wifi_ipv4" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="m_wifi_subnet">Máscara de subred</label>
                                                                <input type="text" id="m_wifi_subnet" class="form-control" placeholder="255.255.255.0" v-model.trim="wifi.wifi_subnet" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group has-icon-left">
                                                                <label class="form-label" for="p_wifi_gateway">Puerta de enlace</label>
                                                                <input type="text" id="p_wifi_gateway" class="form-control" placeholder="192.168.1.1" v-model.trim="wifi.wifi_gateway" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="wifi_dns_primary">DNS Primario</label>
                                                                <input type="text" id="wifi_dns_primary" class="form-control" placeholder="8.8.8.8" v-model.trim="wifi.wifi_dns_primary" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="wifi_dns_secondary">DNS Secundario</label>
                                                                <input type="text" id="wifi_dns_secondary" class="form-control" placeholder="1.1.1.1" v-model.trim="wifi.wifi_dns_secondary" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="ap_mode">Modo-AP</label>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" id="ap_mode" type="checkbox" v-model="wifi.ap_mode" />
                                                <label class="form-check-label">{{ap_mode}}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="ap_ssid">SSID AP</label>
                                            <input type="text" id="ap_ssid" class="form-control" placeholder="ESP329B1C52100C3D" v-model.trim="wifi.ap_ssid"/>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="ap_password">Contraseña AP</label>
                                            <input type="password" id="ap_password" class="form-control" placeholder="*****" v-model.trim="wifi.ap_password" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 push mb-2">
                                        <div id="accordion" role="tablist" aria-multiselectable="true">
                                            <div class="block block-rounded mb-1">
                                                <div class="" role="tab" id="accordion_h1">
                                                    <a class="fw-semibold" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#apMode" aria-expanded="true" aria-controls="apMode">
                                                        <i class=" fa fa-fw fa-cog fa-spin opacity-50 me-1 d-none d-sm-inline-block"></i> Opciones Avanzadas
                                                    </a>
                                                </div>
                                                <div id="apMode" class="collapse" role="tabpanel" aria-labelledby="accordion_h1" data-bs-parent="#accordion">
                                                    <div class="block-content">
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="ap_visibility">Visibilidad</label>
                                                                <div class="form-check form-switch">
                                                                    <input class="form-check-input" id="ap_visibility" type="checkbox" v-model="wifi.ap_visibility" />
                                                                    <label class="form-check-label">{{ap_visibility}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="ap_chanel">Canal AP</label>
                                                                <input type="number" id="ap_chanel" class="form-control" placeholder="Canal: 1 - 13" min="1" max="13" v-model.number="wifi.ap_chanel" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-2">
                                                            <div class="form-group">
                                                                <label class="form-label" for="con_ap">Conexiones</label>
                                                                <input type="number" id="con_ap" class="form-control" placeholder="Min: 0 - Máx: 8" min="0" max="8" v-model.number="wifi.ap_connect" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                <!-- END Block Connectivity -->
                <!-- Block Network -->
                <div class="col-md-8">
                    <div class="block block-rounded block-transparent">
                        <div class="block-content block-content-full bg-success-light ribbon ribbon-modern ribbon-success">
                            <div class="ribbon-box text-uppercase">{{ count }} Redes</div>
                            <div class="text-center mt-5 text-lg fs-4">
                                <div v-if="find == 0">
                                    <i class="fa fa-wifi text-success" style="font-size: 100px"></i>
                                    <div class="text-center py-5">
                                        <h4 class="fw-bold text-success text-uppercase mb-0">{{scanning}}</h4>
                                    </div>
                                    <button class="btn btn-alt-success me-1 mb-3" type="button" disabled v-if="scan">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Escaneando...
                                    </button>
                                    <button @click="get_wifi_scan" type="button" class="btn btn-alt-success me-1 mb-3" v-else>
                                        <i class="fa fa-fw fa-search opacity-50 me-1"></i> Escanear
                                    </button>
                                </div>
                                <div v-else>
                                    <div class="table-responsive">
                                        <table class="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" style="width: 20%;">SSID | Canal</th>
                                                    <th class="text-center" style="width: 10%;">Señal <br> (dBm)</th>
                                                    <!--<th class="text-center d-none d-sm-table-cell" style="width: 20%;">BSSID</th>-->
                                                    <th class="text-center d-none d-sm-table-cell" style="width: 20%;">Seguridad</th>
                                                    <th class="text-center" style="width: 20%;">Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="{n, ssid, channel, rssi, bssid, secure} in networks.data" :key="n">
                                                    <td class="text-left">{{ ssid }} | {{ channel }}</td>
                                                    <td class="text-left"> <em class="text-muted">{{ rssi }}</em></td>
                                                    <!--<td class="d-none d-sm-table-cell"> {{ bssid }}</td>-->
                                                    <td class="d-none d-sm-table-cell"><i :class="seguridad(secure)"></i>{{ secure }}</td>
                                                    <td class="text-center">
                                                        <button type="button" @click="selectWiFi(ssid)" class="btn btn-success">
                                                            <i class="fa fa-fw fa-check"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <button @click="get_wifi_scan" type="button" class="btn btn-alt-success me-1 mb-3" v-if="!scan">
                                        <i class="fa fa-fw fa-search opacity-50 me-1"></i> Volver a escanear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Block Network -->
        </div>
        <!-- END Page Content -->
    </main>
    <!-- END Main Container -->
    <!--{{ wifi }}-->
</template>
<script>
import Hero from "@/components/common/Hero.vue";
import useWifi from "@/composables/useWifi";
export default {
    name: "WiFi",
    components: { Hero },
    setup(props, {emit}){
        const title = "Configuración de la red inalámbrica"
        const page = "WiFi"

        const {
            wifi,
            count,
            scan,
            find,
            networks,
            wifi_ip_static,
            ap_mode,
            ap_visibility,
            scanning,
            get_wifi_scan,
            handleSubmit,
            seguridad,
            selectWiFi

        } = useWifi(props, {emit})

        return{
            title,
            count,
            page,
            wifi,
            scan,
            find,
            networks,
            wifi_ip_static,
            ap_mode,
            ap_visibility,
            scanning,
            get_wifi_scan,
            handleSubmit,
            seguridad,
            selectWiFi
            
        }
    }
}
</script>
