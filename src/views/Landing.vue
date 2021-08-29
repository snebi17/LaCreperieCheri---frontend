<template>
    <v-container fluid fill-height class="v-container__custom">
        <v-row 
            align="center" 
            justify="center"
            class="v-row__opacity"
        >                
            <v-col class="text-center" cols="4">
                <p class="text-h5 text-md-h2 font-weight-bold secondary--text">La Crêperie Chéri</p>
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
        background: url('../assets/laPistacchio2.jpg');
        background-size: cover;
    }
    .v-row__opacity {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
    }
</style>