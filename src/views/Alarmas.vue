<template>
    <main id="main-container">
        <!-- Hero -->
        <Hero :title="title" :page="page" />
        <!-- END Hero -->
        <!-- Page Content -->
    <!--Alarmas Inicio maquetado-->
            <!--verde btn-success-->
            <!--rojo btn-danger-->
            <div class="content col-md-12 col-xl-12">
                <a :class="alarm_class1" id="ALARMA1" data-bs-toggle="modal" data-bs-target="#alarma1">
                    <i class="" id="cat"></i><div class="col-lg-4">{{ indicAlarm.ALARM_NAME1 }}</div><div class="col-lg-4" id="cat_on" ></div><div class="col-lg-4" id="cat_off"></div>
                </a>
                <a :class="alarm_class2" id="ALARMA2" data-bs-toggle="modal" data-bs-target="#alarma2">
                    <i class="" id="cpa"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME2 }}</div><div class="col-lg-4" id="cpa_on"></div><div class="col-lg-4" id="cpa_off"></div>
                </a>
                <a :class="alarm_class3" id="ALARMA3" data-bs-toggle="modal" data-bs-target="#alarma3">
                    <i class="" id="cfc"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME3 }}</div><div class="col-lg-4" id="cfc_on"></div><div class="col-lg-4" id="cfc_off"></div>
                </a>
                <a :class="alarm_class4" id="ALARMA4" data-bs-toggle="modal" data-bs-target="#alarma4">
                    <i class="" id="csm"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME4 }}</div><div class="col-lg-4" id="csm_on"></div><div class="col-lg-4" id="csm_off"></div>
                </a>
                <a :class="alarm_class5" id="ALARMA5" data-bs-toggle="modal" data-bs-target="#alarma5">
                    <i class="" id="cfrc"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME5 }}</div><div class="col-lg-4" id="cfrc_on"></div><div class="col-lg-4" id="cfrc_off"></div>
                </a>
                <a :class="alarm_class6" id="ALARMA6" data-bs-toggle="modal" data-bs-target="#alarma6">
                    <i class="" id="cgeo"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME6 }}</div><div class="col-lg-4" id="cgeo_on"></div><div class="col-lg-4" id="cgeo_off"></div>
                </a>
                <a :class="alarm_class7" id="ALARMA7" data-bs-toggle="modal" data-bs-target="#alarma7">
                    <i class="" id="cgeb"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME7 }}</div><div class="col-lg-4" id="cgeb_on"></div><div class="col-lg-4" id="cgeb_off"></div>
                </a>
                <a :class="alarm_class8" id="ALARMA8" data-bs-toggle="modal" data-bs-target="#alarma8">
                    <i class="" id="cfr"></i> <div class="col-lg-4">{{ indicAlarm.ALARM_NAME8 }}</div><div class="col-lg-4" id="cfr_on"></div><div class="col-lg-4" id="cfr_off"></div>
                </a>
                <!-- Pop Out Block Modal -->
                <div class="modal fade" id="alarma1" tabindex="-1" role="dialog" aria-labelledby="alarma1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 1</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">
                            <form class="form form-vertical">
                                <div class="row push">
                                    <div class="col-md-6 col-12 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="relay_name">Nombre</label>
                                            <input type="text" id="relay_name" class="form-control" placeholder="RELAY">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group col-md-6 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="relay_logica">Lógica del PIN D5</label>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" id="relay_logica" type="checkbox"/>
                                                <label class="form-check-label"> Normal</label>
                                            </div>
                                            <small><mark>Normal    - On(1) -> cerrar, Off(0) -> abrir</mark></small><br>
                                            <small><mark>Invertida - On(1) -> abrir,  Off(0) -> cerrar</mark></small>
                                        </div>
                                    </div> 
                                    <div class="form-group col-md-6 mb-2">
                                        <fieldset class="form-group">
                                            <label class="form-label" for="relay_pin">Activar Alarma</label>
                                            <div class="item">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>                   
                                    <div class="mb-2 mt-2">
                                        <button type="submit" class="btn btn-alt-success me-1">
                                            <i class="fa fa-fw fa-save opacity-50 me-1"></i> Guardar
                                        </button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {{ indicAlarm }}
    </main>
</template>

<script>

import Hero from "@/components/common/Hero.vue"
    import useApp from "@/composables/useApp"
    import { ref, computed, onMounted } from 'vue'
    export default{
        
        name: "Alarmas",
        components: { Hero },
        setup() {
            
            const page = "Alarmas"
            const title = "Visualización de Alarmas"

            // Variables 

            const {command, host, swal, reloadPage, ToastMsgError, ToastMsgSuccess} = useApp()

            const indicAlarm = ref({
                //alarma1
                ALARM_STATUS1: false,
                ALARM_LOGICA1: 0,
                ALARM_PIN1: 5, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME1: "ALARMA 1",
    
                //alarma2
                ALARM_STATUS2: false,
                ALARM_LOGICA2: 0,
                ALARM_PIN2: 14, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME2: "ALARMA 2",
    
                //alarma3
                ALARM_STATUS3: false,
                ALARM_LOGICA3: 0,
                ALARM_PIN3: 16, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME3: "ALARMA 3",
    
                //alarma4
                ALARM_STATUS4: false,
                ALARM_LOGICA4: 0,
                ALARM_PIN4: 17, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME4: "ALARMA 4",
    
                //alarma5
                ALARM_STATUS5: false,
                ALARM_LOGICA5: 0,
                ALARM_PIN5: 18, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME5: "ALARMA 5",
    
                //alarma6
                ALARM_STATUS6: false,
                ALARM_LOGICA6: 0,
                ALARM_PIN6: 25, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME6: "ALARMA 6",
    
                //alarma7
                ALARM_STATUS7: false,
                ALARM_LOGICA7: 0,
                ALARM_PIN7: 26, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME7: "ALARMA 7",
    
                //alarma8
                ALARM_STATUS8: false,
                ALARM_LOGICA8: 0,
                ALARM_PIN8: 27, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME8: "ALARMA 8",
                })
            // colores: bg-gd-sun, bg-gd-sea, bg-gd-aqua, bg-gd-fruit, bg-xeco-light, bg-xeco-dark, btn-success, bg-black
            //pone en rojo si se alarma
            // Computadas
            const alarm_class1 = computed(() => {
            return indicAlarm.value.ALARM_STATUS1 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class2 = computed(() => {
            return indicAlarm.value.ALARM_STATUS2 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class3 = computed(() => {
            return indicAlarm.value.ALARM_STATUS3 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class4 = computed(() => {
            return indicAlarm.value.ALARM_STATUS4 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class5 = computed(() => {
            return indicAlarm.value.ALARM_STATUS5 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class6 = computed(() => {
            return indicAlarm.value.ALARM_STATUS6 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class7 = computed(() => {
            return indicAlarm.value.ALARM_STATUS7 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            const alarm_class8 = computed(() => {
            return indicAlarm.value.ALARM_STATUS8 ? "btn block-header btn-danger mt-1" : "btn block-header bg-xeco-light mt-1"
            })
            return {
                indicAlarm,
                page,
                title,
                alarm_class1,
                alarm_class2,
                alarm_class3,
                alarm_class4,
                alarm_class5,
                alarm_class6,
                alarm_class7,
                alarm_class8  
            }
            
            
        }
    }
    
    
    
</script>