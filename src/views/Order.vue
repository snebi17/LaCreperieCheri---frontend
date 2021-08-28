<template>
    <v-container primary fluid class="pt-16">
        <v-row>
            <v-col>
                <v-stepper
                    v-model="e6"
                    vertical
                    flat
                >
                    <v-stepper-step
                        :complete="e6 > 1"
                        step="1"
                    >
                        Izberi vrsto palačinke
                    </v-stepper-step>
                    <v-stepper-content step="1">
                       <v-row class="pa-5 border">
                            <v-col cols="1">
                                <v-card
                                    depressed
                                    tile
                                    @click="getItems(0)"
                                >
                                    <v-card-title>Sladko</v-card-title>
                                </v-card>
                            </v-col>
                            <v-col cols="1">
                                <v-card
                                    depressed
                                    tile
                                    @click="getItems(1)"
                                >
                                    <v-card-title>Slano</v-card-title>
                                </v-card>
                            </v-col>
                       </v-row>
                        <v-btn 
                            @click="e6 = 2"
                            tile
                        >Naprej</v-btn>
                    </v-stepper-content>
                    <v-stepper-step
                        :complete="e6 > 2"
                        step="2"
                    >
                        Izberi osnovo
                    </v-stepper-step>
                    <v-stepper-content step="2">
                        <v-row>
                            <v-col>
                                <v-expansion-panels
                                    v-for="products in items"
                                    :key="products.id"
                                    tile
                                    elevation="5"
                                    focusable
                                    class="v-expansion-panels__custom"
                                >
                                    <v-expansion-panel
                                        v-for="(items, key) in products"
                                        :key="key.id"
                                        dense
                                        depressed
                                    >
                                        <template v-if="key === 'Palačinke fi 50'">
                                            <v-expansion-panel-header color="secondary">
                                                {{ key }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content
                                                v-for="item in items"
                                                :key="item.id"
                                                color="primary"
                                            >
                                                <p class="text-body-2 pt-5">
                                                    {{ item.name }}<span class="ml-2 font-weight-bold">{{ `${item.price.toFixed(2)} €`}}</span>
                                                </p>
                                            </v-expansion-panel-content>
                                        </template>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>
                        </v-row>
                        <v-btn 
                            @click="e6 = 3"
                            tile
                        >Naprej</v-btn>
                    </v-stepper-content>
                    <v-stepper-step
                        :complete="e6 > 3"
                        step="3"
                    >
                        Izberi namaz
                    </v-stepper-step>
                    <v-stepper-content step="3">
                        <v-btn 
                            @click="e6 = 4"
                            tile
                        >Naprej</v-btn>
                    </v-stepper-content>
                    <v-stepper-step
                        :complete="e6 > 4"
                        step="4"
                    >
                        Izberi nadev
                    </v-stepper-step>
                    <v-stepper-content step="4">
                        <v-btn 
                            @click="e6 = 5"
                            tile
                        >Naprej</v-btn>
                    </v-stepper-content>
                    <v-stepper-step
                        :complete="e6 > 5"
                        step="5"
                    >   
                        Izberi preliv
                    </v-stepper-step>
                    <v-stepper-content step="5">
                        <v-btn 
                            @click="e6 = 6"
                            tile
                        >Naprej</v-btn>
                    </v-stepper-content>
                    <v-stepper-step
                        :complete="e6 > 6"
                        step="6"
                    >   
                        Izberi pijačo
                    </v-stepper-step>
                    <v-stepper-content step="6">
                        <v-btn 
                            @click="addToCart()"
                            tile
                        >Dodaj v košarico</v-btn>
                        <v-btn 
                            @click="placeOrder()"
                            tile
                        >Oddaj naročilo</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </v-col>
        </v-row>
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
            e6: 1
        };
    },
    created() {
        this.items = this.$props.menu;
    },
    methods: {
        placeOrder() {
        axios
            .post("orders", this.cart)
            .then(success => (this.successAlert = success))
            .catch(error => (this.errorAlert = error));
        },
        isInCart(itemId) {
            if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", JSON.stringify([]));
            }
            const cartItem = this.cart.find(({ id }) => id === itemId);
            return Boolean(cartItem);
        },
        addToCart(itemId) {
            const item = this.items.find(({ id }) => id === itemId);
            if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", JSON.stringify([]));
            }
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            cartItems.push(item);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem("cart"));
            this.$root.$bvToast.toast("Burek", {
                noAutoHide: true,
            });
            console.log(itemId);
        },
        removeFromCart(itemId) {
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            const index = cartItems.findIndex(({ id }) => id === itemId);
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem("cart"));
        },
        getItems(index) {
            axios.get("http://192.168.0.26:4000/menu")
				.then(items => {
					this.items = items.data[index];
                    console.log(this.items);
				})
				.catch(errors => this.errors = errors);
        }
  },
};
</script>

<style>

</style>
