import { inject, provide, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'

const progress = ref({ "type": "update", "msg": "0" })

const index_update = ref({})
const mqtt_activity = ref({})
// Time y se puede usar en cualquier parte del proyecto
const time_update = ref()

const useApp = () => {
    const getHost = ()=>{
        if (window.location.hostname == "localhost") {
            return "192.168.1.164" //modo desarrollo
        } else {
            return window.location.hostname //modo producion
        }
    }

    const host = getHost()   // '192.168.1.164'
    //const host = '192.168.1.164'   // '192.168.1.164'
    provide("host", host)

    const toast = useToast();

    const swal = inject('$swal')

    const route = useRoute()

    const ToastMsg = (msg, icon, time) => {
        toast(msg, {
            timeout: time,
            icon: `fas fa-${icon}`,
        })
    }
    const ToastMsgError = (msg, icon, time) => {
        toast.error(msg, {
            timeout: time,
            icon: `fas fa-${icon}`,
        })
    }
    const ToastMsgWarning = (msg, icon, time) => {
        toast.warning(msg, {
            timeout: time,
            icon: `fas fa-${icon}`,
        })
    }
    const ToastMsgInfo = (msg, icon, time) => {
        toast.info(msg, {
            timeout: time,
            icon: `fas fa-${icon}`,
        })
    }
    const ToastMsgSuccess = (msg, icon, time) => {
        toast.success(msg, {
            timeout: time,
            icon: `fas fa-${icon}`,
        })
    }
    
    const wsURL = `ws://${host}/ws`
    const reConnect = ref(false)
    const tt = ref(0)
    const ws = ref(new WebSocket(wsURL, ['arduino']))

    const createWebSockets = () => {
        try {
            ws.value = new WebSocket(wsURL, ['arduino'])
            initWS()
        } catch (e) {
            reconnect()
        }
    }

    const initWS = () => {
        ws.value.onclose = () => {
            console.log('WS-Close')
            reconnect()
        }
        ws.value.onerror = (e) => {
            console.log('WS-Error', e)
            reconnect()
        }
        ws.value.onopen = () => {
            console.log('WS-Open')
        }
        ws.value.onmessage = (m) => {
            const pathname = route.path
            let resp = JSON.parse(m.data)
            //console.log(resp)
            if (Object.keys(resp).length > 0 && resp.type == "update" && pathname == "/settings") {
                progress.value = resp
                
            }else if (Object.keys(resp).length > 0 && resp.type == "info") {
                console.log(resp)
                ToastMsgSuccess(resp.msg, resp.icon, 5000)

                const mostrarMensaje = true
                const mensaje = "Botones del Mouse deshabilitados mientras se reinicia el dispositivo"

                const noClick = () => {
                    if (mostrarMensaje) {
                        alert(mensaje)
                    }
                }

                const timerInterval = ref(0)

                swal({
                    title: 'Reiniciando',
                    html: 'Reinicio en <b>10</b> segundos.',
                    timer: 10000,
                    timerProgressBar: true,
                    didOpen: ()=>{
                        document.onmousedown = noClick
                        document.oncontextmenu = new Function("return false")
                        swal.showLoading()
                        const b = swal.getHtmlContainer().querySelector('b')
                        timerInterval.value = setInterval(() => {
                            b.textContent = Math.ceil(swal.getTimerLeft() / 1000);
                        }, 1000)
                    },
                    willClose: ()=>{
                        clearInterval(timerInterval.value)
                    }
                }).then((result)=>{
                    if (result.dismiss === swal.DismissReason.timer) {
                        document.onmousedown = new Function("return true")
                        document.oncontextmenu = new Function("return true")
                        reloadPage("", 1000)
                    }
                })
            }else if (Object.keys(resp).length > 0 && resp.type == "data" && pathname == "/") {
                index_update.value = resp
            }else if (Object.keys(resp).length > 0 && resp.type == "mqtt" && pathname == "/") {
                mqtt_activity.value = resp
            }else if (Object.keys(resp).length > 0 && resp.type == "time") {
                time_update.value = resp.msg
            }
            // aqui faltaría una para alarmas
            /*
            
            const resp = JSON.parse(m.data)
            if (Object.keys(resp).length > 0 && resp.type == "update" && pathname == "/settings") {
                progress.value = resp
            } else if (Object.keys(resp).length > 0 && resp.type == "info") {
                
                const mostrarMensaje = true
                const mensaje = "Botones del Mouse deshabilitados :-)"
                const noClick = () => {
                    if (mostrarMensaje) {
                        alert(mensaje)
                    }
                }
                const timerInterval = ref(0)
                swal({
                    title: 'Reiniciando',
                    html: 'Reinicio en <b>10</b> segundos.',
                    timer: 10000,
                    timerProgressBar: true,
                    didOpen: () => {
                        document.onmousedown = noClick
                        document.oncontextmenu = new Function("return false")
                        swal.showLoading()
                        const b = swal.getHtmlContainer().querySelector('b')
                        timerInterval.value = setInterval(() => {
                            b.textContent = Math.ceil(swal.getTimerLeft() / 1000);
                        }, 1000)
                    },
                    willClose: () => {
                        clearInterval(timerInterval.value)
                    }
                }).then((result) => {
                    if (result.dismiss === swal.DismissReason.timer) {
                        document.onmousedown = new Function("return true")
                        document.oncontextmenu = new Function("return true")
                        reloadPage("", 1000)
                    }
                })
            } else if (Object.keys(resp).length > 0 && resp.type == "data" && pathname == "/") {
                index_update.value = resp
            } else if (Object.keys(resp).length > 0 && resp.type == "mqtt" && pathname == "/") {
                mqtt_activity.value = resp
            }*/
        }
    }
    
    const reconnect = () => {
        if (reConnect.value) {
            return
        }
        reConnect.value = true
        tt.value && window.clearTimeout(tt.value)
        tt.value = window.setTimeout(() => {
            createWebSockets()
            reConnect.value = false
        }, 4000)
    }
    
    const reloadPage = (url, time) => {
        const timeOut = setTimeout(() => {
            window.location = `/${url}`
            clearTimeout(timeOut)
        }, time)
    }
    
    const command = (cmd) => {
        ws.value.send(cmd)
    }
    const deleteSession = () => {
        const url = `http://${host}/api/settings/logout`;
        fetch(url, { method: 'DELETE' }).then(function(res) {
            if (res.ok) {} else {
                window.location = "/";
            }
        }).catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
    }

    return {
        ToastMsg,
        ToastMsgError,
        ToastMsgWarning,
        ToastMsgInfo,
        ToastMsgSuccess,
        host,
        swal,
        progress,
        reloadPage,
        command,
        route,
        index_update,
        mqtt_activity,
        time_update,
        deleteSession,
        createWebSockets
    }

}

export default useApp