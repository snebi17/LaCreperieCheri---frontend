<template>
    <v-container secondary fill-height fluid>
        <v-row>
            <v-col cols="12">
                <v-stepper 
                    v-model="currentStep"
                    class="v-stepper__color"
                    flat
                >
                    <v-stepper-items class="mt-16">
                        <v-stepper-content step="1">
                            <v-row justify="center">
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-btn
                                        color="primary"
                                        text
                                        height="6rem" 
                                        width="15rem"
                                        class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text v-btn__border"
                                        @click="setTaste('sweet')" 
                                    >
                                        {{ $t('sweet') }}
                                    </v-btn>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-btn
                                        color="primary"
                                        text
                                        height="6rem" 
                                        width="15rem"
                                        class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text v-btn__border"
                                        @click="setTaste('salty')" 
                                    >
                                        {{ $t('salty') }}
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <h1>Izberite osnovo Vaše palačinke</h1>
                            <v-row
                                v-for="(items, key) in taste"
                                :key="items.id"
                            >
                                <template v-for="item in items">
                                    <v-col
                                        :key="item.id"
                                        v-if="key.toLowerCase().includes('osnova')"
                                        cols="2"
                                    >
                                        <v-card>
                                            <v-img src="../assets/default.jpg"></v-img>
                                            <v-card-title>
                                                {{ item.name }}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{ `${item.price.toFixed(2)} €` }}
                                            </v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn 
                                                    @click="addItemToProduct(item)" 
                                                    class="rounded-pill"
                                                    color="primary"
                                                >
                                                    Dodaj
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-col>
                                </template>
                            </v-row>
                            <v-btn
                                class="mt-5 mb-1 rounded-pill"
                                color="primary"
                                @click="currentStep = 3"
                            >
                                Naprej
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <h1>Izberite željen namaz</h1>
                            <v-row
                                v-for="(items, key) in taste"
                                :key="items.id"
                            >
                                <template v-for="item in items">
                                    <v-col
                                        :key="item.id"
                                        v-if="key.toLowerCase().includes('namazi')"
                                        cols="2"
                                    >
                                        <v-card>
                                            <v-img src="../assets/default.jpg"></v-img>
                                            <v-card-title>
                                                {{ item.name }}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{ `${item.price.toFixed(2)} €` }}
                                            </v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn 
                                                    @click="addItemToProduct(item)" 
                                                    class="rounded-pill"
                                                    color="primary"
                                                >
                                                    Dodaj
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-col>
                                </template>
                            </v-row>
                            <v-btn
                                class="mt-5 mb-1 rounded-pill"
                                color="primary"
                                @click="currentStep = 4"
                            >
                                Naprej
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="4">
                            <h1>Izberite željeno polnilo</h1>
                            <v-row
                                v-for="(items, key) in taste"
                                :key="items.id"
                            >
                                <template v-for="item in items">
                                    <v-col
                                        :key="item.id"
                                        v-if="key.toLowerCase().includes('čokoladice') || key.toLowerCase().includes('keksi') || key.toLowerCase().includes('sadje') || key.toLowerCase().includes('oreščki') || key.toLowerCase().includes('meso') || key.toLowerCase().includes('siri')"
                                        cols="2"
                                    >
                                        <v-card>
                                            <v-img src="../assets/default.jpg"></v-img>
                                            <v-card-title>
                                                {{ item.name }}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{ `${item.price.toFixed(2)} €` }}
                                            </v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn 
                                                    @click="addItemToProduct(item)" 
                                                    class="rounded-pill"
                                                    color="primary"
                                                >
                                                    Dodaj
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-col>
                                </template>
                            </v-row>
                            <v-btn
                                class="mt-5 mb-1 rounded-pill"
                                color="primary"
                                @click="currentStep = 5"
                            >
                                Naprej
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="5">
                            <h1>Izberite željen preliv</h1>
                            <v-row
                                v-for="(items, key) in taste"
                                :key="items.id"
                            >
                                <template v-for="item in items">
                                    <v-col
                                        :key="item.id"
                                        v-if="key.toLowerCase().includes('prelivi')"
                                        cols="2"
                                    >
                                        <v-card>
                                            <v-img src="../assets/default.jpg"></v-img>
                                            <v-card-title>
                                                {{ item.name }}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{ `${item.price.toFixed(2)} €` }}
                                            </v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn 
                                                    @click="addItemToProduct(item)" 
                                                    class="rounded-pill"
                                                    color="primary"
                                                >
                                                    Dodaj
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-col>
                                </template>
                            </v-row>
                            <v-btn
                                class="mt-5 mb-1 rounded-pill"
                                color="primary"
                                @click="addProductToCart()"
                            >
                                Dodaj v košarico
                                <v-icon>mdi-cart</v-icon>
                            </v-btn>
                        </v-stepper-content>
                        </v-stepper-items>
                </v-stepper>
            </v-col>
            <v-col cols="12"
                v-for="product in products"
                :key="product.id"
            >
                <v-list 
                    v-for="ingredient in product"
                    :key="ingredient.id"
                >
                    <v-list-item>{{ ingredient }}</v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar"
            timeout="2000"
        >
            <p>Dodan izdelek <span class="font-weight-bold">{{ product.name }}</span></p>
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';

export default {
    name: "Order",
    data() {
        return {
            items: [],
            taste: [],
            premium: false,
            custom: false,
            currentStep: 1,
            snackbar: false,
            product: {}
        };
    },
    created() {
        this.getItems();
    },
    computed: {
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    },
    methods: {
        getItems () {
			axios.get('http://192.168.0.26:4000/api/items')
				.then(items => {
					this.items = items.data;
				})
				.catch(errors => this.errors = errors);
		},
        addItemToProduct (item) {
            let product = [];
            if (!localStorage.getItem('product')) {
                product.push({
                    type: item.type,
                    specs: {
                        name: item.name,
                        price: item.price
                    }
                });
                localStorage.setItem('product', JSON.stringify(product));
            } else {
                product = JSON.parse(localStorage.getItem('product'));
                product.push({
                    type: item.type,
                    specs: {
                        name: item.name,
                        price: item.price
                    }
                });
                localStorage.setItem('product', JSON.stringify(product));
            }
            this.product = item;
            this.snackbar = true;
        },
        addProductToCart () {
            let product = JSON.parse(localStorage.getItem('product'));
            this.$store.dispatch('cart/addProductToCart', product);
            console.log(this.$store.getters['cart/cartProducts']);
            localStorage.clear();
        },
        nextStep () {
            // localStorage.setItem('currentStep', localStorage.getItem('currentStep'))
            this.currentStep++;
        },
        setPremium () {
            this.premium = true;
            this.nextStep();
        },
        setCustom () {
            this.custom = true;
            this.nextStep();
        },
        setTaste (key) {
            this.taste = this.items[key];
            this.nextStep();
        }
  },
};
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .v-btn__border {
		border: 5px solid #fda47e;
	}
    .v-row__height {
        height: 5vh!important;
    }
    .v-col__height {
        height: 100%!important;
    }
    .v-stepper__color {
        background-color: #f2efdb!important;
    }
    .v-stepper-header__shadow {
        box-shadow: none!important;
    }
</style>
