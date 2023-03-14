<template>
    <main id="main-container">
        <!-- Hero -->
        <Hero :title="title" :page="page" />
        <!-- END Hero -->
        <!-- Page Content -->
    <!--Alarmas Inicio maquetado-->
            <!--verde btn-success-->
            <!--rojo btn-danger-->
            <!--colores: bg-gd-sun, bg-gd-sea, bg-gd-aqua, bg-gd-fruit, bg-xeco-light, bg-xeco-dark, btn-success, bg-black-->
            <div class="content col-md-12 col-xl-12">
                <a class="bg-gd-aqua btn block-header mt-1">
                    <i class="" >#</i>
                    <div class="col-lg-4">ALARMA</div>
                    <div class="col-lg-4" >PRESENTE</div>
                    <div class="col-lg-4" >CLAREADA</div>
                </a>
                <a :class="alarm_class1" id="ALARMA1" data-bs-toggle="modal" data-bs-target="#alarma1">
                    <i class="" id="cat">{{ indicAlarm.ALARM_CONT1 }}</i>
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME1 }}</div>
                    <div class="col-lg-4" id="cat_on" >{{ indicAlarm.ALARM_TIMEON1 }}</div>
                    <div class="col-lg-4" id="cat_off">{{ indicAlarm.ALARM_TIMEOFF1 }}</div>
                </a>
                <a :class="alarm_class2" id="ALARMA2" data-bs-toggle="modal" data-bs-target="#alarma2">
                    <i class="" id="cpa">{{ indicAlarm.ALARM_CONT2 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME2 }}</div>
                    <div class="col-lg-4" id="cpa_on">{{ indicAlarm.ALARM_TIMEON2 }}</div>
                    <div class="col-lg-4" id="cpa_off">{{ indicAlarm.ALARM_TIMEOFF2 }}</div>
                </a>
                <a :class="alarm_class3" id="ALARMA3" data-bs-toggle="modal" data-bs-target="#alarma3">
                    <i class="" id="cfc">{{ indicAlarm.ALARM_CONT3 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME3 }}</div>
                    <div class="col-lg-4" id="cfc_on">{{ indicAlarm.ALARM_TIMEON3 }}</div>
                    <div class="col-lg-4" id="cfc_off">{{ indicAlarm.ALARM_TIMEOFF3 }}</div>
                </a>
                <a :class="alarm_class4" id="ALARMA4" data-bs-toggle="modal" data-bs-target="#alarma4">
                    <i class="" id="csm">{{ indicAlarm.ALARM_CONT4 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME4 }}</div>
                    <div class="col-lg-4" id="csm_on">{{ indicAlarm.ALARM_TIMEON4 }}</div>
                    <div class="col-lg-4" id="csm_off">{{ indicAlarm.ALARM_TIMEOFF4 }}</div>
                </a>
                <a :class="alarm_class5" id="ALARMA5" data-bs-toggle="modal" data-bs-target="#alarma5">
                    <i class="" id="cfrc">{{ indicAlarm.ALARM_CONT5 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME5 }}</div>
                    <div class="col-lg-4" id="cfrc_on">{{ indicAlarm.ALARM_TIMEON5 }}</div>
                    <div class="col-lg-4" id="cfrc_off">{{ indicAlarm.ALARM_TIMEOFF5 }}</div>
                </a>
                <a :class="alarm_class6" id="ALARMA6" data-bs-toggle="modal" data-bs-target="#alarma6">
                    <i class="" id="cgeo">{{ indicAlarm.ALARM_CONT6 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME6 }}</div>
                    <div class="col-lg-4" id="cgeo_on">{{ indicAlarm.ALARM_TIMEON6 }}</div>
                    <div class="col-lg-4" id="cgeo_off">{{ indicAlarm.ALARM_TIMEOFF6 }}</div>
                </a>
                <a :class="alarm_class7" id="ALARMA7" data-bs-toggle="modal" data-bs-target="#alarma7">
                    <i class="" id="cgeb">{{ indicAlarm.ALARM_CONT7 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME7 }}</div>
                    <div class="col-lg-4" id="cgeb_on">{{ indicAlarm.ALARM_TIMEON7 }}</div>
                    <div class="col-lg-4" id="cgeb_off">{{ indicAlarm.ALARM_TIMEOFF7 }}</div>
                </a>
                <a :class="alarm_class8" id="ALARMA8" data-bs-toggle="modal" data-bs-target="#alarma8">
                    <i class="" id="cfr">{{ indicAlarm.ALARM_CONT8 }}</i> 
                    <div class="col-lg-4">{{ indicAlarm.ALARM_NAME8 }}</div>
                    <div class="col-lg-4" id="cfr_on">{{ indicAlarm.ALARM_TIMEON8 }}</div>
                    <div class="col-lg-4" id="cfr_off">{{ indicAlarm.ALARM_TIMEOFF8 }}</div>
                </a>

                <!-- Pop Out Block Modal -->
                <!--alarma1-->
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
                            <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                <div class="row push">
                                    <div class="col-md-6 col-12 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="ALARM_NAME1">Nombre</label>
                                            <input type="text" id="ALARM_NAME1" class="form-control" v-model.trim="indicAlarm.ALARM_NAME1">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 mb-2">
                                        <div class="form-group">
                                            <label class="form-label" for="ALARM_LOGICA1">Lógica del PIN D5</label>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" id="ALARM_LOGICA1" type="checkbox" v-model="indicAlarm.ALARM_LOGICA1" @click="logica1"/>
                                                <label class="form-check-label">{{ alarm_text1 }}</label>
                                            </div>
                                        </div>
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
                <!--alarma2-->
                <div class="modal fade" id="alarma2" tabindex="-1" role="dialog" aria-labelledby="alarma2" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 2</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">          
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME2">Nombre</label>
                                                <input type="text" id="ALARM_NAME2" class="form-control" v-model.trim="indicAlarm.ALARM_NAME2">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA2">Lógica del PIN D14</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA2" type="checkbox" v-model="indicAlarm.ALARM_LOGICA2" @click="logica2"/>
                                                    <label class="form-check-label">{{ alarm_text2 }}</label>
                                                </div>
                                            </div>
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
                <!--alarma3-->
                <div class="modal fade" id="alarma3" tabindex="-1" role="dialog" aria-labelledby="alarma3" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 3</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME3">Nombre</label>
                                                <input type="text" id="ALARM_NAME3" class="form-control" v-model.trim="indicAlarm.ALARM_NAME3">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA3">Lógica del PIN D16</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA3" type="checkbox" v-model="indicAlarm.ALARM_LOGICA3" @click="logica3"/>
                                                    <label class="form-check-label">{{ alarm_text3 }}</label>
                                                </div>
                                            </div>
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
                <!--alarma4-->
                <div class="modal fade" id="alarma4" tabindex="-1" role="dialog" aria-labelledby="alarma4" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 4</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME4">Nombre</label>
                                                <input type="text" id="ALARM_NAME4" class="form-control" v-model.trim="indicAlarm.ALARM_NAME4">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA4">Lógica del PIN D17</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA4" type="checkbox" v-model="indicAlarm.ALARM_LOGICA4" @click="logica4"/>
                                                    <label class="form-check-label">{{ alarm_text4 }}</label>
                                                </div>
                                            </div>
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
                <!--alarma5-->
                <div class="modal fade" id="alarma5" tabindex="-1" role="dialog" aria-labelledby="alarma5" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 5</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">                              
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME5">Nombre</label>
                                                <input type="text" id="ALARM_NAME5" class="form-control" v-model.trim="indicAlarm.ALARM_NAME5">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA5">Lógica del PIN D18</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA5" type="checkbox" v-model="indicAlarm.ALARM_LOGICA5" @click="logica5"/>
                                                    <label class="form-check-label">{{ alarm_text5 }}</label>
                                                </div>
                                            </div>
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
                <!--alarma6-->
                <div class="modal fade" id="alarma6" tabindex="-1" role="dialog" aria-labelledby="alarma6" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 6</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME6">Nombre</label>
                                                <input type="text" id="ALARM_NAME6" class="form-control" v-model.trim="indicAlarm.ALARM_NAME6">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA6">Lógica del PIN D25</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA6" type="checkbox" v-model="indicAlarm.ALARM_LOGICA6" @click="logica6"/>
                                                    <label class="form-check-label">{{ alarm_text6 }}</label>
                                                </div>
                                            </div>
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
                <!--alarma7-->
                <div class="modal fade" id="alarma7" tabindex="-1" role="dialog" aria-labelledby="alarma7" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 7</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME7">Nombre</label>
                                                <input type="text" id="ALARM_NAME7" class="form-control" v-model.trim="indicAlarm.ALARM_NAME7">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA7">Lógica del PIN D26</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA7" type="checkbox" v-model="indicAlarm.ALARM_LOGICA7" @click="logica7"/>
                                                    <label class="form-check-label">{{ alarm_text7 }}</label>
                                                </div>
                                            </div>
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
                <!--alarma8-->
                <div class="modal fade" id="alarma8" tabindex="-1" role="dialog" aria-labelledby="alarma8" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
                        <div class="modal-content">
                        <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Alarma 8</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa fa-fw fa-times"></i>
                                </button>
                            </div>
                            </div>
                            <div class="block-content">                           
                                <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                    <div class="row push">
                                        <div class="col-md-6 col-12 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_NAME8">Nombre</label>
                                                <input type="text" id="ALARM_NAME8" class="form-control" v-model.trim="indicAlarm.ALARM_NAME8">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-6 mb-2">
                                            <div class="form-group">
                                                <label class="form-label" for="ALARM_LOGICA8">Lógica del PIN D27</label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" id="ALARM_LOGICA8" type="checkbox" v-model="indicAlarm.ALARM_LOGICA8" @click="logica8"/>
                                                    <label class="form-check-label">{{ alarm_text8 }}</label>
                                                </div>
                                            </div>
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
            {{ indicAlarm }}/
            /{{indicAlarmws}}/
            
    </main>
</template>

<script>

import Hero from "@/components/common/Hero.vue"
    import useApp from "@/composables/useApp"
    import { ref, computed, onMounted, watch} from 'vue'
    export default{
        
        name: "Alarmas",
        components: { Hero },

        setup() {
            const page = "Alarmas"
            const title = "Visualización de Alarmas"

            // Variables 

            const {command, host, swal, reloadPage, ToastMsgError, ToastMsgSuccess, indicAlarmws} = useApp()

            const indicAlarm = ref({
                //alarma1
                ALARM_STATUS1: false,
                ALARM_LOGICA1: false,
                ALARM_PIN1: 5, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME1: "ALARMA 1",
                ALARM_TIMEON1: "",
                ALARM_TIMEOFF1: "",
                ALARM_CONT1: 0,
    
                //alarma2
                ALARM_STATUS2: false,
                ALARM_LOGICA2: false,
                ALARM_PIN2: 14, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME2: "ALARMA 2",
                ALARM_TIMEON2: "",
                ALARM_TIMEOFF2: "",
                ALARM_CONT2: 0,
    
                //alarma3
                ALARM_STATUS3: false,
                ALARM_LOGICA3: false,
                ALARM_PIN3: 16, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME3: "ALARMA 3",
                ALARM_TIMEON3: "",
                ALARM_TIMEOFF3: "",
                ALARM_CONT3: 0,
    
                //alarma4
                ALARM_STATUS4: false,
                ALARM_LOGICA4: false,
                ALARM_PIN4: 17, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME4: "ALARMA 4",
                ALARM_TIMEON4: "",
                ALARM_TIMEOFF4: "",
                ALARM_CONT4: 0,
    
                //alarma5
                ALARM_STATUS5: false,
                ALARM_LOGICA5: false,
                ALARM_PIN5: 18, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME5: "ALARMA 5",
                ALARM_TIMEON5: "",
                ALARM_TIMEOFF5: "",
                ALARM_CONT5: 0,
    
                //alarma6
                ALARM_STATUS6: false,
                ALARM_LOGICA6: false,
                ALARM_PIN6: 25, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME6: "ALARMA 6",
                ALARM_TIMEON6: "",
                ALARM_TIMEOFF6: "",
                ALARM_CONT6: 0,
    
                //alarma7
                ALARM_STATUS7: false,
                ALARM_LOGICA7: false,
                ALARM_PIN7: 26, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME7: "ALARMA 7",
                ALARM_TIMEON7: "",
                ALARM_TIMEOFF7: "",
                ALARM_CONT7: 0,
    
                //alarma8
                ALARM_STATUS8: false,
                ALARM_LOGICA8: false,
                ALARM_PIN8: 27, //14,16,17,18,25,26,27, buz32, botonintalarma34,35reset
                ALARM_NAME8: "ALARMA 8",
                ALARM_TIMEON8: "",
                ALARM_TIMEOFF8: "",
                ALARM_CONT8: 0,
                })
            const logica1 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA1","value":${!indicAlarm.value.ALARM_LOGICA1}}`)
            }
            const logica2 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA2","value":${!indicAlarm.value.ALARM_LOGICA2}}`)
            }
            const logica3 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA3","value":${!indicAlarm.value.ALARM_LOGICA3}}`)
            }
            const logica4 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA4","value":${!indicAlarm.value.ALARM_LOGICA4}}`)
            }
            const logica5 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA5","value":${!indicAlarm.value.ALARM_LOGICA5}}`)
            }
            const logica6 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA6","value":${!indicAlarm.value.ALARM_LOGICA6}}`)
            }
            const logica7 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA7","value":${!indicAlarm.value.ALARM_LOGICA7}}`)
            }
            const logica8 = () =>{
                //enviar datos de la logica por Ws
                command(`{"protocol":"WS", "output":"ALARM_LOGICA8","value":${!indicAlarm.value.ALARM_LOGICA8}}`)
            }
            // Cuando se monte el componente
            onMounted(() =>{
                get_alarm_settings()
            })
            //manejador del evento Submit
            const handleSubmit = () =>{
                showAlertConfirm("Guardar Control ON/OFF", "¿Está seguro de guardar la Configuración?", "question")
            }
            //swal

            const showAlertConfirm = (title, text, icon) => {
            swal({
                title: `${title}`,
                text: `${text}`,
                icon: `${icon}`,
                showCancelButton: true,
                confirmButtonColor: '#41bb82',
                cancelButtonColor: '#ff3030',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    post_alarm_settings()
                }
            })
        }


            //Método get de los datos
            const get_alarm_settings = async() =>{
                const url = `http://${host}/api/alarmas`
                await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((datos) => {
                if (datos.code == 1) {
                    indicAlarm.value = datos.data
                } else {
                    ToastMsgError(`"Error no son datos válidos"`, "check", 5000)
                }
            })
            .catch((error) => {
                ToastMsgError(`Error : ${error}`, "check", 5000)
            })
            }
            //Método POST envio de los datos
            const  post_alarm_settings = () => {
            const url = `http://${host}/api/alarmas`
            const myHeaders = new Headers()
            myHeaders.append(
            'Accept', 'application/json',
            'Content-Type', 'application/json'
            )
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(indicAlarm.value)
            }
            fetch(url, requestOptions)
                .then((res) => res.json())
                .then((datos) => {
                    if (datos.save) {
                        ToastMsgSuccess(`"Configuración de alarma guardada correctamente"`, "check", 5000)
                        reloadPage("alarmas", 5000)
                    }
                })
                .catch((error) => {
                    ToastMsgError(`Error : ${error}`, "check", 5000)
                })
            }

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

            const alarm_text1 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA1 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text2 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA2 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text3 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA3 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text4 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA4 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text5 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA5 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text6 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA6 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text7 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA7 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            const alarm_text8 = computed(() =>{
            return indicAlarm.value.ALARM_LOGICA8 ? "Invertida (Tierra)":"Normal (Voltaje)"
            })
            
            watch(() => indicAlarmws.value,
            ({ ALARM_STATUS1 }) => {
                indicAlarm.value["ALARM_STATUS1"] = ALARM_STATUS1 
            })
            
    
            return {
                handleSubmit,
                indicAlarmws,
                indicAlarm,
                page,
                title,
                alarm_class1,
                alarm_text1,
                logica1,
                alarm_class2,
                alarm_text2,
                logica2,
                alarm_class3,
                alarm_text3,
                logica3,
                alarm_class4,
                alarm_text4,
                logica4,
                alarm_class5,
                alarm_text5,
                logica5,
                alarm_class6,
                alarm_text6,
                logica6,
                alarm_class7,
                alarm_text7,
                logica7,
                alarm_class8,
                alarm_text8,
                logica8
            }
            
            
        }
    }
    
    
    
</script>