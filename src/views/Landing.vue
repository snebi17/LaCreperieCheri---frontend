<template>
    <v-container fluid fill-height class="v-container__custom">
        <p>{{ $t('message') }}</p>
        <v-row 
            align="center" 
            justify="center"
            class="v-row__opacity"
        >
            <v-col class="text-center" cols="4">
                <p class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 font-weight-bold secondary--text">La Crêperie Chéri</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Landing',
    data() {
        return {
            mobile: false
        }
    },
    computed: {
        isMobile: function () {
            return this.mobile <= 600;
        }
    },
    mounted() {
        this.mobile = screen.width;
    }
}
</script>

<style scoped>
    .v-container__desktop {
        background: url('../assets/laPistacchio2.jpg');
        background-size: contain;
    }
    /* .v-container__mobile {
        background: url('../assets/laPistacchio2-mobile.jpg');
        background-size: cover;
    } */
    .v-row__opacity {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
    }
</style>