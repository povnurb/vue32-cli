<template>
    <main id="main-container">
    <!--Alarmas Inicio maquetado-->
    <div class="bg-body-dark">
            <div class="content content-full">
                <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                    <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3"> Alarmas </h1>
                    <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-alt">
                            <li class="breadcrumb-item">
                                <a href="/">Inicio</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page"> Alarmas </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
            <!--verde btn-success-->
            <!--rojo btn-danger-->
            <a class="btn block-header bg-danger mt-1" id="A_TEMP">
                <!--<i class="" id="cat"></i> <div class="col-lg-4">#alarma0#</div><div class="col-lg-4" id="cat_on" ></div><div class="col-lg-4" id="cat_off"></div>-->
                <!--personalizado--><i class="" id="cat"></i><div class="col-lg-4">FALLA RECTIFICADOR PLANTA BAJA MEI</div><div class="col-lg-4" id="cat_on" ></div><div class="col-lg-4" id="cat_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="PUERTA">
                <!--<i class="" id="cpa"></i> <div class="col-lg-4">#alarma1#</div><div class="col-lg-4" id="cpa_on"></div><div class="col-lg-4" id="cpa_off"></div>-->
                <!--personalizado--><i class="" id="cpa"></i> <div class="col-lg-4">DESCARGA DE BATERIAS SALA OPERTELES</div><div class="col-lg-4" id="cpa_on"></div><div class="col-lg-4" id="cpa_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="F_COMPRE">
                <!--<i class="" id="cfc"></i> <div class="col-lg-4">#alarma2#</div><div class="col-lg-4" id="cfc_on"></div><div class="col-lg-4" id="cfc_off"></div>-->
                <!--personalizado--><i class="" id="cfc"></i> <div class="col-lg-4">B. VOLTAJE DE BATERIAS SALA OPERTELES</div><div class="col-lg-4" id="cfc_on"></div><div class="col-lg-4" id="cfc_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="SENSOR_MOV">
                <!--<i class="" id="csm"></i> <div class="col-lg-4">#alarma3#</div><div class="col-lg-4" id="csm_on"></div><div class="col-lg-4" id="csm_off"></div>-->
                <!--personalizado--><i class="" id="csm"></i> <div class="col-lg-4">GRUPO ELECTROGENO BLOQUEADO</div><div class="col-lg-4" id="csm_on"></div><div class="col-lg-4" id="csm_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="F_RED">
                <!--<i class="" id="cfrc"></i> <div class="col-lg-4">#alarma4#</div><div class="col-lg-4" id="cfrc_on"></div><div class="col-lg-4" id="cfrc_off"></div>-->
                <!--personalizado--><i class="" id="cfrc"></i> <div class="col-lg-4">ALTA TEMPERATURA EN SALA PTTI</div><div class="col-lg-4" id="cfrc_on"></div><div class="col-lg-4" id="cfrc_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="G_E_OPER">
                <!--<i class="" id="cgeo"></i> <div class="col-lg-4">#alarma5#</div><div class="col-lg-4" id="cgeo_on"></div><div class="col-lg-4" id="cgeo_off"></div>-->
                <!--personalizado--><i class="" id="cgeo"></i> <div class="col-lg-4">FALLA DE COMPRESOR DE CLIMAS</div><div class="col-lg-4" id="cgeo_on"></div><div class="col-lg-4" id="cgeo_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="G_E_BLO">
                <!--<i class="" id="cgeb"></i> <div class="col-lg-4">#alarma6#</div><div class="col-lg-4" id="cgeb_on"></div><div class="col-lg-4" id="cgeb_off"></div>-->
                <!--personalizado--><i class="" id="cgeb"></i> <div class="col-lg-4">GRUPO ELECTROGENO EN OPERACION</div><div class="col-lg-4" id="cgeb_on"></div><div class="col-lg-4" id="cgeb_off"></div>
            </a>
            <a class="btn block-header bg-success mt-1" id="F_REC">
                <!--<i class="" id="cfr"></i> <div class="col-lg-4">#alarma7#</div><div class="col-lg-4" id="cfr_on"></div><div class="col-lg-4" id="cfr_off"></div>-->
                <!--personalizado--><i class="" id="cfr"></i> <div class="col-lg-4">FALLA DE RED CFE</div><div class="col-lg-4" id="cfr_on"></div><div class="col-lg-4" id="cfr_off"></div>
            </a>
    </main>
</template>
<script>
export default {
    name: "Alarmas"
}
</script>