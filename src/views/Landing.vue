<template>
    <v-container fluid fill-height class="v-container__custom">
        <v-row align="center">                
            <v-col class="text-center">
                <p class="text-h5 text-md-h2 font-weight-bold secondary--text">La Crêperie Chéri<sup>®</sup></p>
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
        background: url('../assets/background.jpg')!important;
        background-size: cover!important;
    }
</style>