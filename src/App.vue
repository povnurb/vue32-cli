<template>
  
  <div id="page-container" class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed page-header-dark">
    <!--Sidebar-->
    <Sidebar/>
    <!--End Sidebar-->
    <!--Header-->
    <Header/>
    <!--End Header-->
    <!--Main Container-->
    <router-view/>
    <!--End Main Container-->
    <!--Footer-->
    <Footer/>
    <!--End Footer-->
  </div>
</template>

<script>
  import { loadScript } from 'vue-plugin-load-script'
  import { onMounted, provide } from 'vue'

  import Sidebar from "./components/Sidebar.vue"
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"

  import useApp from './composables/useApp'

export default {

  components: {
    Sidebar,
    Header,
    Footer
  },
  setup(){
    onMounted(()=>{
      loadScript("../../js/dashmix.app.min.js")
    })

    

    const {
      /*ToastMsg,
      ToastMsgError,
      ToasMsgWarning,
      ToasMsgInfo,
      ToasMsgSucces*/
    } = useApp()

    return{
      /*ToastMsg,
      ToastMsgError,
      ToasMsgWarning,
      ToasMsgInfo,
      ToasMsgSucces*/
    }
  }
}
</script>