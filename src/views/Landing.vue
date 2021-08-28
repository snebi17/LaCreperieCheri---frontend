<template>
    <v-container fluid fill-height class="v-container__custom">
        <v-row 
            align="center" 
            justify="center"
            class="layer"
        >                
            <v-col class="text-center" cols="4">
                <p class="text-h5 text-md-h2 secondary--text">La Crêperie Chéri</p>
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
    }
    .layer {
        width: 100%;
        height: 100%;
        color: rgba(0, 0, 0, .5);
    }
</style>