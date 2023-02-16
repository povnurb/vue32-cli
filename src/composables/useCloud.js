import { ref, onMounted, computed } from 'vue'
import useApp from './useApp'

const useCloud = () => {

    const {
        ToastMsgError,
        ToastMsgSuccess,
        swal,
        host
    } = useApp()

    const data = ref({
        data: {
            connection: {
                mqtt_cloud_enable: false,
                mqtt_user: "",
                mqtt_password: "",
                mqtt_server: "",
                mqtt_cloud_id: "",
                mqtt_port: 0,
                mqtt_retain: false,
                mqtt_qos: 0
            },
            datos: {
                mqtt_time_send: false,
                mqtt_time_interval: 0,
                mqtt_status_send: false
            }
        }
    })


    onMounted(() => {
        get_cloud_settings()
    })

    const handleSubmit = (form) => {
        if (form == 'connection') {
            showAlertConfirm("Guardar Cloud", "¿Está seguro de guardar los parámetros de la Conexión del Cloud?", "question", "connection")
        } else {
            showAlertConfirm("Guardar Cloud", "¿Está seguro de guardar los parámetros del envio de Datos al Cloud?", "question", "data")
        }
    }

    const showAlertConfirm = (title, text, icon, post_txt) => {
        swal({
            title: `${title}`,
            text: `${text}`,
            icon: `${icon}`,
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                post_cloud_settings(post_txt)
            }
        })
    }

    const get_cloud_settings = async() => {
        const url = `http://${host}/api/cloud`
        await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((datos) => {
                if (datos.code == 1) {
                    data.value.data = datos.data
                }
            })
            .catch((error) => {
                ToastMsgError(`"Error al cargar los datos ${error}"`, "cloud", 5000)
            })
    }

    const post_cloud_settings = async(cloud_url) => {
        const url = `http://${host}/api/cloud/${cloud_url}`
        await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.value)
            }).then(res => res.json())
            .then(datos => {
                if (datos.save) {
                    ToastMsgSuccess(`"Configuración ${cloud_url == "connection" ? "de la Conexión" : "de los Datos"} Cloud guardada correctamente"`, "cloud", 5000)
                    get_cloud_settings()
                }
            })
            .catch((error) => {
                ToastMsgError(`"Error al guardar los parámetros Cloud: ${error}"`, "cloud", 5000)
            })
    }

    const cloud_enable = computed(() => {
        return data.value.data.connection.mqtt_cloud_enable ? "Si" : "No"
    })

    return {
        data,
        cloud_enable,
        handleSubmit
    }

}

export default useCloud