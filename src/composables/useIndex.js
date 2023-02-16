import { onMounted, computed, ref, watch } from 'vue'
import useApp from './useApp'

const useIndex = () => {

    const index_datos = ref({})

    const { ToastMsgError, host, index_update, mqtt_activity } = useApp()

    onMounted(() => {
        get_index_settings()
    })

    const get_index_settings = () => {
        const url = `http://${host}/api/index`;
        fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((datos) => {
                if (datos.code == 1) {
                    index_datos.value = datos.data
                }
            })
            .catch((error) => {
                ToastMsgError(`"Error al cargar los datos ${error}"`, "cloud", 5000)
            })
    }

    const wifi_status = computed(() => {
        return index_datos.value.wifi_online ? "Online" : "Offline"
    })
    const mqtt_status = computed(() => {
        return index_datos.value["mqtt_online"] ? "Online" : "Offline"
    })
    const wifi_connection = computed(() => {
        return index_datos.value["wifi_online"] ? "CONECTADO" : "DESCONECTADO"
    })
    const mqtt_connection = computed(() => {
        return index_datos.value["mqtt_online"] ? "CONECTADO" : "DESCONECTADO"
    })
    const wifi_class_01 = computed(() => {
        return index_datos.value["wifi_online"] ? "badge bg-success" : "badge bg-danger"
    })
    const mqtt_class_01 = computed(() => {
        return index_datos.value["mqtt_online"] ? "badge bg-success" : "badge bg-danger"
    })
    const wifi_class_02 = computed(() => {
        return index_datos.value["wifi_online"] ? "progress-bar bg-success" : "progress-bar bg-danger"
    })
    const mqtt_class_02 = computed(() => {
        return index_datos.value["mqtt_online"] ? "progress-bar bg-success" : "progress-bar bg-danger"
    })
    const wifi_class_03 = computed(() => {
        return index_datos.value["wifi_online"] ? "block block-rounded block-link-shadow bg-success" : "block block-rounded block-link-shadow bg-danger"
    })
    const mqtt_class_03 = computed(() => {
        return index_datos.value["mqtt_online"] ? "block block-rounded block-link-shadow bg-success" : "block block-rounded block-link-shadow bg-danger"
    })
    const spiffs_percent_used = computed(() => {
        return index_datos.value["device_spiffs_used"] * 100 / index_datos.value["device_spiffs_total"]
    })
    const ram_percent_free = computed(() => {
        return index_datos.value["device_ram_available"] * 100 / index_datos.value["device_ram_size"]
    })

    watch(() => index_update.value,
        ({ device_time_active, device_ram_available, mqtt_online, mqtt_server, wifi_online, wifi_rssi, wifi_signal }) => {
            index_datos.value["device_time_active"] = device_time_active
            index_datos.value["device_ram_available"] = device_ram_available
            index_datos.value["mqtt_online"] = mqtt_online
            index_datos.value["mqtt_server"] = mqtt_server
            index_datos.value["wifi_online"] = wifi_online
            index_datos.value["wifi_rssi"] = wifi_rssi
            index_datos.value["wifi_signal"] = wifi_signal
        })

    watch(() => mqtt_activity.value,
        ({ msg }) => {
            index_datos.value["mqtt_activity"] = msg
        })

    return {
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


export default useIndex