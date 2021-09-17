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
                                <v-col cols="12" md="4" class="d-flex justify-center">
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
                                <v-col cols="12" md="4" class="d-flex justify-center">
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
                                        cols="12" md="2"
                                    >
                                        <v-card>
                                            <!-- <v-img src="../assets/default.jpg"></v-img> -->
                                            <v-card-title>
                                                {{ item.name }}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{ `${item.price.toFixed(2)} €` }}
                                            </v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn 
                                                    @click="addItemToProduct(item); nextStep();" 
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
                                        cols="12" md="2"
                                    >
                                        <v-card>
                                            <!-- <v-img src="../assets/default.jpg"></v-img> -->
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
                                @click="nextStep()"
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
                                        cols="12" md="2"
                                    >
                                        <v-card>
                                            <!-- <v-img src="../assets/default.jpg"></v-img> -->
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
                                @click="nextStep()"
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
                                        cols="12" md="2"
                                    >
                                        <v-card>
                                            <!-- <v-img src="../assets/default.jpg"></v-img> -->
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
            <v-col cols="12" v-if="products.length > 0">
                <v-container>
                    <p class="font-weight-bold text-h5">Nakupovalni voziček</p>
                    <v-row
                        v-for="product in products"
                        :key="product.id"
                    >
                        <v-col
                            v-for="p in product"
                            :key="p.id"
                        >
                            <v-list>
                                <v-list-item v-for="i in p.items" :key="i.id">
                                    {{ i.name }}   {{ i.price.toFixed(2) }} €
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <p class="font-weight-bold text-h5">Skupaj: {{ p.total.toFixed(2) }} €</p>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar"
            timeout="2000"
        >
            <p>Dodana sestavina <span class="font-weight-bold">{{ ingredient.name }}</span></p>
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
            numberValue: 0,
            currentStep: 1,
            snackbar: false,
            ingredient: {},
            id: 0
        };
    },
    created() {
        localStorage.removeItem('product');
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
			axios.get('http://localhost:4000/api/items')
				.then(items => {
					this.items = items.data;
				})
				.catch(errors => this.errors = errors);
		},
        addItemToProduct (item) {
            let product = {
                items: [],
                total: 0
            };
            if (!localStorage.getItem('product')) {
                product.items.push({
                    type: item.type,
                    name: item.name,
                    price: item.price
                });
                product.total += item.price;
                localStorage.setItem('product', JSON.stringify(product));
            } else {
                product = JSON.parse(localStorage.getItem('product'));
                product.items.push({
                    type: item.type,
                    name: item.name,
                    price: item.price
                });
                product.total += item.price;
                localStorage.setItem('product', JSON.stringify(product));
            }
            this.ingredient = item;
            this.snackbar = true;
        },
        addProductToCart () {
            let product = {
                id: this.id,
                items: JSON.parse(localStorage.getItem('product')).items,
                total: JSON.parse(localStorage.getItem('product')).total
            }
            this.$store.dispatch('cart/addProductToCart', product);
            localStorage.clear();
            this.id++;
        },
        makeOrder() {
            let data = this.products;
            axios.post('http://192.168.0.26:4000/api/orders', {
                data
            })
                .then(() => console.log('Order has been made'))
                .catch(err => console.log(err));
        },
        nextStep () {
            this.currentStep++;
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
