import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// https://github.com/Maronato/vue-toastification
// npm install --save vue-toastification@next
// https://vue-toastification.maronato.dev/
// video 109
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

// VueSweetalert2
// npm install --save vue-sweetalert2
// Doc https://sweetalert2.github.io/
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const options = {
    confirmButtonColor: '#41bb82',
    cancelButtonColor: '#ff3030',
}

createApp(App)
    .use(router)
    .use(Toast,{
        transition: "Vue-Toastification__bounce",
        position: "top-right",
        timeout: 4000,
        maxToasts: 10,
        newestOnTop: true,
        pauseOnHover: true
    })
    .use(VueSweetalert2)
    .mount('#app')
