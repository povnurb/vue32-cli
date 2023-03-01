<template>
<!-- Hero -->
    <div class="bg-body-dark">
        <div class="content content-full">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                <h1 class="flex-grow-1 fs-3 fw-semibold my-2 my-sm-3"> {{ title }} </h1>
                <nav class="flex-shrink-0 my-2 my-sm-0 ms-sm-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-alt">
                        <li class="breadcrumb-item">
                            <router-link :to="{name: 'home'}">Inicio</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page"> {{ page }} </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
<!-- END Hero -->
</template>
<script>
export default {
    name: "Hero",
    props:{
        title:{
            type: String,
            default: "VUE32 Admin Tool"
        },
        page:{
            type: String,
            default: "ESP32"
        }
    }
}
</script>