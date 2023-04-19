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
                            <h3 class="block-title">Fecha y Hora</h3>
                        </div>
                        <div class="block-content">
                            <form class="form form-vertical" @submit.prevent="handleSubmit()">
                                <div class="row push">
                                    <div class="form-group col-md-12 mb-2 mt-2">
                                        <div class="form-group">
                                            <label class="form-label" for="time_ajuste">Ajustar Fecha y Hora:</label>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" id="time_ajuste" type="checkbox" v-model="time.time_ajuste" disabled>
                                                <label class="form-check-label" for="time_ajuste">{{time_ajuste}}</label><code> (Automatico: solo con acceso a internet)</code>
                                            </div>
                                        </div>
                                    </div>             
                                    <div class="mb-2" v-if="time.time_ajuste">                                           
                                        <div class="form-group col-md-6 mb-2">   
                                            <div class="form-group">                    
                                                <label class="form-label ml-5" for="time_date">Fecha y Hora (DD/MM/AAAA HH-MM): </label> 
                                                <input type="datetime-local" class="form-control" id="time_date" v-model="time.time_date">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2" v-else>
                                        <div class="form-group col-md-8 mb-3">   
                                            <div class="form-group">                    
                                                <label class="form-label ml-5" for="time_z_horaria">Zona Horaria:</label> 
                                                <select class="form-select" id="time_z_horaria" name="time_z_horaria" v-model.number="time.time_z_horaria">
                                                    <option value="-12">(GMT-12:00) Enewetak, Kwajalein</option>
                                                    <option value="-11">(GMT-11:00) Islas Midway, Samoa</option>
                                                    <option value="-10">(GMT-10:00) Hawái</option>    
                                                    <option value="-9">(GMT-09:00) Alaska</option>        
                                                    <option value="-8">(GMT-08:00) Hora del Pacífico</option>            
                                                    <option value="-7">(GMT-07:00) Hora de las Montañas Rocosas (EE.UU. Y Canadá)</option>                
                                                    <option value="-6">(GMT-06:00) Hora Central (México, EE.UU. y Canadá)</option>                    
                                                    <option value="-5">(GMT-05:00) Hora del Este (EE.UU. y Canadá)</option>
                                                    <option value="-4.5">(GMT-04:30) Caracas</option>                            
                                                    <option value="-4">(GMT-04:00) Hora del Atlántico (Canadá)</option>                                
                                                    <option value="-3.5">(GMT-03:30) Terranova</option>                                    
                                                    <option value="-3">(GMT-03:00) Brasilia, Buenos Aires</option>                                        
                                                    <option value="-2">(GMT-02:00) Atlántico Central</option>                                            
                                                    <option value="-1">(GMT-01:00) Azores, Islas de Cabo Verde</option>                                                
                                                    <option value="0">(GMT) Hora Media de Greenwich: Dublín, Londres</option>                                                    
                                                    <option value="1">(GMT+01:00) Berlín, Estocolmo, Roma, Berna, Bruselas</option>                                                        
                                                    <option value="2">(GMT+02:00) Atenas, Helsinki, Europa del Este, Israel</option>                                                            
                                                    <option value="3">(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad, Moscú</option>                                                                
                                                    <option value="3.5">(GMT+03:30) Teherán</option>                                                                    
                                                    <option value="4">(GMT+04:00) Abu Dabi, Mascate, Kazán, Volgogrado</option>                                                                        
                                                    <option value="4.5">(GMT+04:30) Kabul</option>                                                                      
                                                    <option value="5">(GMT+05:00) Islamabad, Karachi, Ekaterimburgo</option>                                                                         
                                                    <option value="5.5">(GMT+05:30) Madrás, Calcuta, Mumbai, Nueva Delhi </option>                                                                                 
                                                    <option value="5.75">(GMT+05:45) Katmandú</option>                                                                                       
                                                    <option value="6">(GMT+06:00) Alma-Ata, Dhaka</option>                                                                                            
                                                    <option value="6.5">(GMT+06:30) Rangún</option>                                                                                                
                                                    <option value="7">(GMT+07:00) Bangkok, Yakarta, Hanói</option>                                                                                                    
                                                    <option value="8">(GMT+08:00) Pekín, Hong Kong, Perth, Singapur</option>                                                                                                        
                                                    <option value="9">(GMT+09:00) Tokio, Osaka, Sapporo, Seúl, Yakutsk</option>                                                                                                            
                                                    <option value="9.5">(GMT+09:30) Adelaida</option>                                                                                                             
                                                    <option value="10">(GMT+10:00) Brisbane, Guam, Canberra, Melbourne, Sídney</option>
                                                    <option value="11">(GMT+11:00) Magadan, Islas Salomón, Nueva Caledonia </option>
                                                    <option value="12">(GMT+12:00) Fuji, Kamchatka, Auckland</option>                                                                                                            
                                                    <option value="13">(GMT+13:00) Nukualofa</option>
                                                </select>  
                                            </div>
                                            <div class="form-group col-md-12 mt-2">   
                                                <div class="form-group">                    
                                                    <label class="form-label ml-5" for="time_server">Servidor NTP:</label> 
                                                    <input type="text" class="form-control" id="time_server" placeholder="time.nist.gov" v-model="time.time_server">
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                
                                    <div class="mb-2 mt-1">
                                        <button type="submit" class="btn btn-alt-success me-1">
                                            <i class="fa fa-fw fa-save opacity-50 me-1"></i> Guardar
                                        </button><code>Nota: Actualizar página para ver cambios en la fecha y hora.</code>
                                    </div>
                                </div>
                            </form>
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
    import useTimer from "@/composables/useTimer"

    name: "Time"

    const title = "Configuración de la Fecha y Hora"
    const page = "Fecha y Hora"

    const {
        time,
        time_ajuste,
        handleSubmit
        } = useTimer()
</script>