<template>
    <v-container primary fluid class="pt-16">
            <v-container secondary>
                <v-row>
                    <v-col class="text-center">
                        <v-lazy>
                            <p class="text-h5 text-sm-h4 text-md-h3 success--text"><span class="font-weight-bold">Sestavi </span><span class="font-weight-italic">svojo palačinko</span></p>
                        </v-lazy>
                    </v-col>
                </v-row>
            </v-container>
            <!-- <v-row justify="center">
                <v-col cols="6">
        <v-row>
            <v-col class="text-center">
                <p class="text-h5 text-md-h3 font-weight-bold success--text">Sestavi svojo palačinko</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step
                            :complete="e1 > 1"
                            step="1"
                        >
                            Okus
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 2"
                            step="2"
                        >
                            Osnova
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 3"
                            step="3"
                        >
                            Namaz
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 4"
                            step="4"
                        >
                            Nadev
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 5"
                            step="5"
                        >
                            Preliv
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            step="6"
                        >
                            Pijača
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-row justify="center" class="pa-16">
                                <v-col cols="12" md="3">
                                    <v-card
                                        @click="taste = 'sweet'; e1 = 2"
                                        class="text-center pa-16 text-h5 text-md-h4"
                                    >
                                        Sladko
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-card
                                        @click="taste = 'salty'; e1 = 2"
                                        class="text-center pa-16 text-h5 text-md-h4"
                                    >
                                        Slano
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-btn @click="e1 = 3">
                                Naprej
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-btn @click="e1 = 4">
                                Naprej
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-btn @click="e1 = 5">
                                Naprej
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="5">
                            <v-btn @click="e1 = 1">
                                Naprej
                            </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
            <v-row>
                <v-col class="text-center">
                    <p class="text-h5 text-md-h3 font-weight-bold success--text">Sestavi svojo palačinko</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step 
                                :complete="e1 > 1"
                                step="1"
                            >Okus</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step
                                :complete="e1 > 2"
                                step="2"
                            >Osnova</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step
                                :complete="e1 > 3"
                                step="3"
                            >Namaz</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step
                                :complete="e1 > 4"
                                step="4"
                            >Nadev</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step
                                :complete="e1 > 5"
                                step="5"
                            >Preliv</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step
                                :complete="e1 > 6"
                                step="6"
                            >Pijača</v-stepper-step>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-row justify="center" class="pa-16">
                                    <v-col cols="12" md="5">
                                        <v-card
                                            @click="taste = 'sweet'; e1 = 2"
                                            class="text-center pa-16 text-h5 text-md-h4"
                                        >
                                            Sladko
                                        </v-card>
                                    </v-col>
                                     <v-col cols="12" md="5">
                                        <v-card
                                            @click="taste = 'salty'; e1 = 2"
                                            class="text-center pa-16 text-h5 text-md-h4"
                                        >
                                            Slano
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                
                                <v-btn 
                                    @click="e1++"
                                    tile
                                    flat
                                >Naprej</v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <v-btn 
                                    @click="e1++"
                                    tile
                                    flat
                                >Naprej</v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="4">
                                <v-btn 
                                    @click="e1++"
                                    tile
                                    flat
                                >Naprej</v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="5">
                                <v-btn 
                                    @click="e1 = 1"
                                    tile
                                    flat
                                >Naprej</v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-col>
            </v-row> -->
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "Order",
    data() {
        return {
            items: [],
            cart: [],
            successAlert: null,
            errorAlert: null,
            e1: 1,
            taste: ''
        };
    },
    methods: {
        placeOrder() {
            axios
                .post('orders', this.cart)
                .then(success => (this.successAlert = success))
                .catch(error => (this.errorAlert = error));
        },
        isInCart(itemId) {
            if (!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
            const cartItem = this.cart.find(({ id }) => id === itemId);
            return Boolean(cartItem);
        },
        addToCart(itemId) {
            const item = this.items.find(({ id }) => id === itemId);
            if (!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
            const cartItems = JSON.parse(localStorage.getItem('cart'));
            cartItems.push(item);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem('cart'));
            this.$root.$bvToast.toast('Burek', {
                noAutoHide: true,   
            });
            console.log(itemId);
        },
        removeFromCart(itemId) {
            const cartItems = JSON.parse(localStorage.getItem('cart'));
            const index = cartItems.findIndex(({ id }) => id === itemId);
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem('cart'));
        },
        getItems(index) {
            axios.get('http://192.168.0.26:4000/menu')
				.then(items => {
					this.items = items.data[index];
				})
				.catch(errors => this.errors = errors);
        }
  },
};
</script>

<style scoped>
    p {
        padding: 0;
        margin: 0;
    }
</style>
