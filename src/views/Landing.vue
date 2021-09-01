<template>
    <v-container fluid fill-height class="v-container__custom">
        <p>{{ $t('message') }}</p>
        <v-row 
            align="center" 
            justify="center"
            class="v-row__opacity"
        >                
            <v-col class="text-center">
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

<style>
    .v-container__custom {
        background: url('../assets/laPistacchio2.jpg');
        background-size: cover;
    }
    /* .v-container__mobile {
        background: url('../assets/laPistacchio2-mobile.jpg');
        background-size: cover;
    } */
    .v-row__opacity {
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>