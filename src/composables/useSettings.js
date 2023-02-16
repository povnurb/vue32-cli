import { ref, onMounted, computed } from 'vue'
import useApp from './useApp'


const useSettings = () => {

    const {
        ToastMsgError,
        ToastMsgInfo,
        ToastMsgWarning,
        ToastMsgSuccess,
        swal,
        host,
        progress,
        reloadPage,
        command
    } = useApp()

    const device = ref({
        device_serial: "",
        device_id: "",
    })
    const user = ref({
        device_old_user: "",
        device_old_password: "",
        device_new_user: "",
        device_new_password: "",
        device_c_new_password: ""
    })

    const loading = ref(false)

    onMounted(() => {
        get_device_settings()
    })

    const handleSubmit = (form) => {
        if (form == "device") {
            showAlertConfirm("Guardar Device ID", "¿Está seguro de guardar el nuevo Device ID?", "question", "deviceID")
        } else {
            showAlertConfirm("Guardar Usuario", "¿Está seguro de guardar las configuraciones del Usuario?", "question", "user")
        }
    }

    const showAlertConfirm = (title, text, icon, funct) => {
        swal({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                if (funct == "deviceID") {
                    post_device_settings()
                } else if (funct == "user") {
                    post_user_settings()
                } else {
                    command(funct)
                }
            }
        })
    }

    const get_device_settings = async() => {
        const url = `http://${host}/api/settings/id`
        await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((datos) => {
                if (datos.code == 1) {
                    device.value = datos.data
                }
            })
            .catch((error) => {
                ToastMsgError(`Error : ${error}`, "wifi", 5000)
            })
    }

    const post_device_settings = async() => {
        const url = `http://${host}/api/settings/id`;
        await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(device.value)
            }).then(res => res.json())
            .then(datos => {
                console.log(datos)
                if (datos.save) {
                    ToastMsgSuccess(`"Configuración del Device_ID guardada correctamente"`, "cog", 5000)
                    get_device_settings()
                } else {
                    ToastMsgError(`${datos.msg}`, "cog", 5000)
                }
            })
            .catch((error) => {
                ToastMsgError(`"Error al guardar los parámetros Device_ID: ${error}"`, "cog", 5000)
            })
    }

    const post_user_settings = async() => {
        const url = `http://${host}/api/settings/user`;
        await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user.value)
            }).then(res => res.json())
            .then(datos => {
                console.log(datos)
                if (datos.save) {
                    ToastMsgSuccess(`${datos.msg}`, "user-circle", 5000)
                } else {
                    ToastMsgError(`${datos.msg}`, "user-circle", 5000)
                }
            })
            .catch((error) => {
                ToastMsgError(`"Error al guardar los parámetros del Usuario: ${error}"`, "user-circle", 5000)
            })
    }

    const clear = () => {
        document.getElementById("form").reset()
        ToastMsgInfo(`Formulario "Reseteado"`, "exclamation-circle", 5000)
    }

    const downloadSettings = () => {
        const url = `http://${host}/api/settings/download`
        download(url, "settings.json")
    }

    const download = (url, filename) => {
        fetch(url).then((t) => {
            return t.blob().then((b) => {
                var a = document.createElement("a")
                a.href = URL.createObjectURL(b)
                a.setAttribute("download", filename)
                a.click()
            })
        })
    }

    const uploadSettings = () => {
        const input = document.getElementById("inputFileAdd")
        const file = input.files[0]

        if (file != undefined) {
            if (file["name"] != "settings.json") {
                ToastMsgWarning(`"Solo se permite el archivo de configuración ( settings.json )"`, "file", 5000);
                return
            } else if (Number(file["size"]) > 5120) {
                ToastMsgWarning(`"El tamaño máximo permitido es de ( 5.0 KB )"`, "file", 5000);
                return
            }
        } else {
            ToastMsgError(`"Tiene que seleccionar antes un archivo"`, "file", 5000)
            return
        }

        const url = `http://${host}/api/settings/upload`

        const myHeaders = new Headers()
        myHeaders.append(
            "Accept", "application/json",
            "Content-Type", "application/json"
        )

        let formdata = new FormData()
        formdata.append("", file, file.name)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata
        }

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(datos => {
                if (datos.save) {
                    ToastMsgSuccess(`"Archivo (settings.json) almacenado correctamente"`, "file", 5000)
                } else {
                    ToastMsgError(`${datos.msg}`, "file", 5000)
                }
            })
            .catch(error => ToastMsgError(`"Error al guardar el archivo (settings.json): ${error}"`, "file", 5000))
    }

    const uploadFirmware = () => {
        const input = document.getElementById("inputFileFirmware")
        const file = input.files[0]

        if (file != undefined) {
            if (Number(file["size"]) > 1966080) {
                ToastMsgWarning(`"El tamaño máximo del archivo tiene que ser de ( 1.9 MB )"`, "file", 5000)
                return
            }
        } else {
            ToastMsgError(`"Tiene que seleccionar antes un archivo"`, "file", 5000)
            return
        }

        const url = `http://${host}/api/settings/firmware`

        const myHeaders = new Headers()
        myHeaders.append(
            "Accept", "application/json",
            "Content-Type", "application/octet-stream"
        )

        let formdata = new FormData()
        formdata.append("", file, file.name)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata
        }

        loading.value = true

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(datos => {
                if (datos.save) {
                    loading.value = false
                    ToastMsgInfo(`"${datos.type} actualizado correctamente"`, "file", 5000)
                    reloadPage("settings", 10000)
                } else {
                    loading.value = false
                    ToastMsgError(`${datos.msg}`, "file", 5000)
                }
            })
            .catch(error => {
                loading.value = false
                ToastMsgError(`"Error al actualizar : ${error}"`, "file", 5000)
            })
    }

    const percent = computed(() => {
        return `width: ${progress.value.msg}%;`
    })

    return {
        device,
        user,
        handleSubmit,
        clear,
        downloadSettings,
        uploadSettings,
        uploadFirmware,
        loading,
        progress,
        percent,
        showAlertConfirm
    }

}

export default useSettings