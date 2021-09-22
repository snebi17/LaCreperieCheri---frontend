<template>
    <v-container fluid class="v-container__background mt-16">
        <v-row>
            <v-col cols="12">
                <v-card
                    v-for="product in products"
                    :key="product.id"
                >
                    <v-card-text>
                        <v-row>
                            <v-col>
                                {{ product }}
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-title>
                        {{ total }}
                    </v-card-title>                    
                </v-card>
            </v-col>
            <v-col>
                <v-btn
                    rounded
                    depressed
                    :to="{ name: 'Order', params: { lang: $i18n.locale  } }"
                >
                    Sestavi novo palačinko
                </v-btn>
                <v-btn
                    rounded
                    depressed
                    @click="placeOrder()"
                >
                    Naroči
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    name: 'Cart',
    computed: {
        ...mapGetters("cart", {
			products: "cartProducts",
			total: "cartTotalPrice",
		})
    },
    methods: {
        placeOrder() {
            axios.post('orders', this.products)
                .then((res) => setTimeout(() => {
                    this.orderDetails = res.data.orderDetails;
                }), 2000)
        }
    }
}
</script>

<style scoped>

</style>