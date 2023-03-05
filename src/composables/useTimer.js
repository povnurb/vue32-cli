import {ref, onMounted, computed} from 'vue'
import useApp from './useApp'

const userTimer = ()=>{
    const {
        ToastMsgError,
        ToastMsgSuccess,
        swal,
        host
    }=useApp()

    const time = ref({
        time_ajuste:true,
        time_date: "",
        time_z_horaria: "",
        time_server: "",
    })
    //Cuando se monte el componente
    onMounted(()=>{
        get_time()
    })
    // Funciones

    //Evento submit
    const handleSubmit = () =>{
        showAlertConfirm("Guardar fecha y hora", "¿Está seguro de guardar la nueva fecha y hora?", "question")
    }


    //Alert
    const showAlertConfirm = (title, text, icon) => {
        swal({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#41bb82',
            cancelButtonColor: '#ff3030',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                post_time()
            }
        })
    }

    //sacar la información del tiempo
    const get_time = async() =>{
        const url = `http://${host}/api/time`
        await fetch (url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        .then((res)=>res.json())
        .then((datos)=>{
            if (datos.code == 1){
                time.value = datos.data
                time.value.time_z_horaria = datos.data.time_z_horaria/3600
            }else{
                ToastMsgError(`"Error no son datos válidos"`, "clock", 5000)
            }
        })
        .catch((error)=>{
            ToastMsgError(`Error : ${error}`, "clock", 5000)
        })
    }

    //Guardar datos
    const post_time = () => {
        const url = `http://${host}/api/time`;
        const myHeaders = new Headers()
        myHeaders.append(
            'Accept', 'application/json',
            'Content-Type', 'application/json'
        )
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(time.value)
        }
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(datos => {
                //console.log(datos)
                if (datos.save) {
                    ToastMsgSuccess(`"Configuración del tiempo guardada correctamente"`, "clock", 5000)
                    get_time()
                } 
            })
            .catch((error) => {
                ToastMsgError(`"Error: ${error}"`, "clock", 5000)
            })
    }


    // Computadas
    const time_ajuste = computed(()=>{
        return time.value.time_ajuste ? "Manualmente":"Optener automáticamente desde Internet"
    })
    return{
        time,
        time_ajuste,
        handleSubmit
    }
}

export default userTimer