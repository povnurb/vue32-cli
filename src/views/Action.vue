<template>
    <main id="main-container">
        <!-- Hero -->
        <Hero :title="title" :page="page" />
        <!-- END Hero -->
        <!-- Page Content -->
        <div class="content">
        <h2 class="content-heading">VUE32 Admin Tool</h2>
        <div class="row">
            <!-- Timer Block -->
            <div class="col-md-12">
            <div class="block block-rounded block-themed">
                <div class="block-header bg-xeco-light">
                <h3 class="block-title">{{ page }}</h3>
                </div>
                <div class="block-content">
                    <div class="row">
                        <Relay :control="control"/>
                    </div>
                </div>
            </div>
            </div>
            <!-- END Timer Block -->
        </div>
        </div>
        <!-- END Page Content -->
    </main>

</template>
<script setup>

    import Hero from "@/components/common/Hero.vue"

    import Relay from "@/components/action/Relays.vue"

    name: "Relays"

    const title = "Control de relays"
    const page = "Relays"

    const control = "Control tipo ON/OFF"

</script>