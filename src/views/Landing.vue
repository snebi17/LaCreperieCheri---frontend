<template>
    <v-container fluid fill-height class="v-container__custom">
        <v-row align="center v-row__opacity">                
            <v-col class="text-center">
                <p class="text-h5 text-md-h3 font-weight-bold secondary--text">La Crêperie Chéri</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Landing'   
}
</script>

<style scoped>
    .v-container__custom {
        background: url('../assets/laPistacchio2.jpg')!important;
        background-size: cover!important;
        background-color: rgba(0, 0, 0, 1);
    }
    .v-row__opacity {
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>