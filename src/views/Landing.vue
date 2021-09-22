<template>
    <v-container fluid fill-height class="v-container__background">
        <v-row 
            align="center" 
            justify="center"
            class="v-row__opacity"
        >
            <v-col class="text-center" cols="12">
                <p class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-bold primary--text">La Crêperie Chéri</p>
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

<style>
</style>