<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col cols="12" md="8">
                            <v-img :src="imgSrc"></v-img>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-card-title>
                                {{ $t(`premium[${index}].title`) }}
                            </v-card-title>
                            <v-card-text>
                                {{ $t(`premium[${index}].text`) }}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Premium',
    data() {
        return {
            imgSrc: String
        }
    }, 
    props: {
        src: String
    },
    created() {
        this.imgSrc = this.$props.src;
    },
    methods: {

    }
}
</script>

<style scoped>

</style>