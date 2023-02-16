<template>
    <main id="main-container">
            <!-- Hero -->
            <div class="bg-body-dark">
                <div class="content content-full">
                    <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3"> Página no encontrada </h1>
                        <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-alt">
                                <li class="breadcrumb-item">
                                    <a href="/">Inicio</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page"> Error 404 </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- END Hero -->
            <!-- Page Content -->
            <div class="content">
                <div class="row">
                    <!-- Conectividad Block -->
                    <div class="col-md-12">
                        <div class="block block-transparent">
                            <div class="block-content"> 
                            <!-- Content -->
                                <div class="align-items-center text-center mt-5">
                                    <div class="w-100">
                                        <p class="text-danger fs-4 fw-bold text-uppercase mb-2">
                                            Error 404
                                        </p>
                                        <h1 class="fw-bold mb-2">
                                            Página no encontrada
                                        </h1>
                                        <p class="fs-4 fw-medium text-muted mb-5">
                                            Lo sentimos, pero no se encontró la página que está buscando.
                                        </p>
                                        <router-link class="btn btn-lg btn-alt-danger" :to="{ name: 'home' }">
                                            <i class="fa fa-arrow-left opacity-50 me-1"></i> Retornar al Inicio
                                        </router-link>
                                    </div>
                                </div>
                            <!-- END Content -->    
                            </div>
                        </div>
                    </div>        
                    <!-- END Conectividad Block -->
                </div>
            </div>
            <!-- END Page Content -->
        </main>
</template>
<script>
export default {
    name: "Error404"
}
</script>