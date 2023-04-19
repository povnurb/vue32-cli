<template>
<div class="col-md-6 col-xl-6">
    <p class="text-uppercase fs-sm fw-bold text-center mt-2 mb-4">
        {{control}}
    </p>
    <button type="button" class="btn btn-primary push" data-bs-toggle="modal" data-bs-target="#modal-block-popout"><i class="fa fa-wrench"></i></button>
    <a class="block block-rounded block-link-pop bg-xinspire-darker" href="javascript:void(0)">
        <div class="block-content block-content-full d-flex align-items-center justify-content-between">
            <div class="me-3">
            <p class="text-white text-uppercase fs-lg fw-semibold mb-0">
                {{ action.RELAY_NAME }}
            </p>
            <p class="text-white-75 mb-0">
                {{ action.RELAY_DESCRIPTION }}
            </p>
            </div>
            <div class="item">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" v-model="action.RELAY_STATUS" @click="relayOnOff">
                </div>
            </div>
            <div class="item">
                <i :class="icon_class"></i><!--"fa fa-3x fa-lightbulb text-warning"-->
            </div>
        </div>
    </a>
</div>
<!-- Pop Out Block Modal -->
<div class="modal fade" id="modal-block-popout" tabindex="-1" role="dialog" aria-labelledby="modal-block-popout" aria-hidden="true">
    <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
        <div class="modal-content">
        <div class="block block-rounded block-themed block-transparent mb-0">
            <div class="block-header bg-primary-dark">
            <h3 class="block-title">CONTROL ON/OFF: {{ action.RELAY_NAME }}</h3>
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
                            <label class="form-label" for="relay_name">Nombre</label>
                            <input type="text" id="relay_name" class="form-control" placeholder="RELAY" v-model.trim="action.RELAY_NAME">
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-2">
                        <div class="form-group">
                            <label class="form-label" for="relay_description">Descripción</label>
                            <input type="text" id="relay_description" class="form-control" placeholder="SALIDA" v-model.trim="action.RELAY_DESCRIPTION">
                        </div>
                    </div>
                    <div class="form-group col-md-6 mb-2">
                        <div class="form-group">
                            <label class="form-label" for="relay_logica">Lógica del PIN</label>
                            <div class="form-check form-switch">
                                <input class="form-check-input" id="relay_logica" type="checkbox" v-model="action.RELAY_LOGICA"/>
                                <label class="form-check-label"> {{relay_logica}}</label>
                            </div>
                            <small><mark>Normal    - On(1) -> cerrar, Off(0) -> abrir</mark></small><br>
                            <small><mark>Invertida - On(1) -> abrir,  Off(0) -> cerrar</mark></small>
                        </div>
                    </div> 
                    <div class="form-group col-md-6 mb-2">
                        <fieldset class="form-group">
                            <label class="form-label" for="relay_pin">ESP32 PIN</label>
                            <select class="form-select" id="relay_pin" v-model.number="action.RELAY_PIN">
                                <option value="15">GPIO 15 Activar Alarmas Remotas</option>
                                <option value="32">GPIO 32 Zumbador</option>
                                <option value="33">GPIO 33 Relay</option>
                            </select>
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
<!-- END Pop Out Block Modal -->

</template>

<script>

import useApp from "@/composables/useApp"
import { ref, computed, onMounted } from 'vue'

export default {
    name: "Relays",
    props:{
        control:{
            type: String,
            default: "VUE32 Admin Tool"
        }
    },
    setup(){

        // Variables 

        const {command, host, swal, reloadPage, ToastMsgError, ToastMsgSuccess} = useApp()

        const action = ref({
            RELAY_STATUS: false,
            RELAY_LOGICA: 0,
            RELAY_PIN: 15,  //relevador 33
            RELAY_NAME: "RELAY 01",
            RELAY_DESCRIPTION: "Control de Alarmas Remotas"
        })

        const relayOnOff = ()=>{
            // enviar dato de On Off por WS
            command(`{"protocol": "WS", "output": "${action.value.RELAY_NAME}", "value": ${!action.value.RELAY_STATUS} }`)
        }

        // Cuando se monte el componente
        onMounted(() => {
            get_action_settings()
        })
        // manejador del evento submit
        const handleSubmit =()=>{
            showAlertConfirm("Guardar Control ON/OFF", "¿Está seguro de guardar la Configuración actual?", "question")
        }
        // swal
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
                    post_action_settings()
                }
            })
        }
      
        // Método GET de los Datos
        const get_action_settings = async() =>{
            
            const url = `http://${host}/api/action`
            await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((datos) => {
                if (datos.code == 1) {
                    action.value = datos.data
                } else {
                    ToastMsgError(`"Error no son datos válidos"`, "check", 5000)
                }
            })
            .catch((error) => {
                ToastMsgError(`Error : ${error}`, "check", 5000)
            })
        }

        // Método POST envío de los Datos
        const  post_action_settings = () => {
            const url = `http://${host}/api/action`
            const myHeaders = new Headers()
            myHeaders.append(
            'Accept', 'application/json',
            'Content-Type', 'application/json'
            )
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(action.value)
            }
            fetch(url, requestOptions)
                .then((res) => res.json())
                .then((datos) => {
                    if (datos.save) {
                        ToastMsgSuccess(`"Configuración del control guardada correctamente"`, "check", 5000)
                        reloadPage("action", 7000)
                    }
                })
                .catch((error) => {
                    ToastMsgError(`Error : ${error}`, "check", 5000)
                })
        }


        // Computadas
        const icon_class = computed(() => {
            return action.value.RELAY_STATUS ? "fa fa-3x fa-check text-warning" : "fa fa-3x fa-check text-black"
        })
        const relay_logica = computed(() => {
            return action.value.RELAY_LOGICA ? "Invertida" : "Normal"
        })

        return {
            action,
            relayOnOff,
            icon_class,
            relay_logica,
            handleSubmit
        }

    }
}
</script>