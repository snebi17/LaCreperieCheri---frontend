<template>
    <v-container fluid fill-height class="v-container__custom">
<<<<<<< HEAD
        <v-row align="center v-row__opacity">                
            <v-col class="text-center">
                <p class="text-h5 text-md-h3 font-weight-bold secondary--text">La Crêperie Chéri</p>
=======
        <v-row 
            align="center" 
            justify="center"
            class="layer"
        >                
            <v-col class="text-center" cols="4">
                <p class="text-h5 text-md-h2 secondary--text">La Crêperie Chéri</p>
>>>>>>> 270cdad55c6dbfff66c1e08819e4a90a5e0cbad5
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Landing',
    mounted: {
        isMobile() {
            return screen.width <= 480;
        }
    }
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
    .layer {
        width: 100%;
        height: 100%;
        color: rgba(0, 0, 0, .5);
    }
</style>