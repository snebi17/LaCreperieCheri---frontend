<template>
	<v-container fill-height fluid class="v-container__background">
		<v-row align="center"  v-if="!taste">
			<v-col cols="12" md="6" class="d-flex justify-center">
				<v-btn
					color="primary"
					text
					height="6rem"
					width="15rem"
					class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text"
					outlined
					@click="setTaste(0)"
				>
					{{ $t("sweet") }}
				</v-btn>
			</v-col>
			<v-col cols="12" md="6" class="d-flex justify-center">
				<v-btn
					color="primary"
					text
					height="6rem"
					width="15rem"
					class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text"
					outlined
					@click="setTaste(1)"
				>
					{{ $t("salty") }}
				</v-btn>
			</v-col>
		</v-row>
		<v-row align="start" v-if="taste" class="mt-16">
			<v-col cols="12" md="4">
				<v-card rounded="xl" flat color="transparent">
					<v-card-title>
                        {{ $t('order.base') }}
					</v-card-title>
					<v-card-text>
						<v-list 
                            color="transparent"
                            v-for="item in steps.base"
                            :key="item.id"
                        >
							<v-list-item
                                v-for="(product, key) in item.products"
                                :key="product.id"
                            >
                                <input type="radio"
                                    v-model="prod.base"
                                    :value="{ name: product.name, price: product.price }"
                                    :id="key"
                                    class="mr-2">
                                <label :for="key" class="d-flex">
                                    <p>{{ product.name }}</p>
                                    <p class="ml-2">{{ product.price.toFixed(2) + ' €' }}</p>
                                </label>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card rounded="xl" flat color="transparent" :disabled="Object.keys(prod.base).length == 0">
                    <v-card-title>
                        {{ $t('order.spreads') }}
                    </v-card-title>
					<v-card-text>
						<v-expansion-panels flat> 
							<v-expansion-panel
                                v-for="item in steps.spreads" 
                                :key="item.id"
                            >
                                <v-expansion-panel-header>
                                    {{ item.type }}
                                </v-expansion-panel-header>
								<v-expansion-panel-content
                                    v-for="(product, key) in item.products" 
                                    :key="product.id"
                                >
                                    <input type="checkbox"
                                        v-model="prod.spreads"
                                        :value="{ name: product.name, price: product.price }"
                                        :id="key">
                                    <label :for="key" class="d-flex">
                                        <p>{{ product.name }}</p>
                                        <p class="ml-2">{{ product.price.toFixed(2) + ' €' }}</p>
                                    </label>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card rounded="xl" flat color="transparent" :disabled="prod.spreads.length == 0">
					<v-card-title>
                        {{ $t('order.fillings') }}
                    </v-card-title>
					<v-card-text>
						<v-expansion-panels flat>
							<v-expansion-panel
                                v-for="item in steps.fillings" 
                                :key="item.id"
                            >
                                <v-expansion-panel-header>
                                    {{ item.type }}
                                </v-expansion-panel-header>
								<v-expansion-panel-content
                                    v-for="(product, key) in item.products" 
                                    :key="product.id"
                                >
                                    <input type="checkbox"
                                        v-model="prod.fillings"
                                        :value="{ name: product.name, price: product.price }"
                                        :id="key">
                                    <label :for="key" class="d-flex">
                                        <p>{{ product.name }}</p>
                                        <p class="ml-2">{{ product.price.toFixed(2) + ' €' }}</p>
                                    </label>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-row align="start" v-if="taste">
			<v-col cols="12" md="4">
                    <v-card rounded="xl" flat color="transparent" :disabled="prod.fillings.length == 0">
					<v-card-title>
                        {{ $t('order.toppings') }}
                    </v-card-title>
					<v-card-text>
						<v-expansion-panels flat> 
							<v-expansion-panel
                                v-for="item in steps.toppings" 
                                :key="item.id"
                            >
                                <v-expansion-panel-header>
                                    {{ item.type }}
                                </v-expansion-panel-header>
								<v-expansion-panel-content
                                    v-for="(product, key) in item.products" 
                                    :key="product.id"
                                >
                                    <input type="checkbox"
                                        v-model="prod.toppings"
                                        :value="{ name: product.name, price: product.price }"
                                        :id="key">
                                    <label :for="key" class="d-flex">
                                        <p>{{ product.name }}</p>
                                        <p class="ml-2">{{ product.price.toFixed(2) + ' €' }}</p>
                                    </label>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="5">
				<v-card rounded="xl" flat color="transparent" :disabled="prod.toppings.length == 0">
					<v-card-title>
                        {{ $t('order.drinks') }}
                    </v-card-title>
					<v-card-text>
						<v-expansion-panels flat>
							<v-expansion-panel
                                v-for="item in steps.drinks" 
                                :key="item.id"
                            >
                                <v-expansion-panel-header>
                                    {{ item.type }}
                                </v-expansion-panel-header>
								<v-expansion-panel-content
                                    v-for="(product, key) in item.products" 
                                    :key="product.id"
                                >
                                   <input type="checkbox"
                                        v-model="prod.drinks"
                                        :value="{ name: product.name, price: product.price }"
                                        :id="key">
                                    <label :for="key" class="d-flex label__overflow">
                                        <p>{{ product.name }}</p>
                                        <p class="ml-2">{{ product.price.toFixed(2) + ' €' }}</p>
                                    </label>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
            <v-col>
                <v-btn
                    class="rounded-pill" 
                    color="primary"
                    @click="addProductToCart()"
                >
                    Dodaj v košarico
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
            </v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";
import { mapGetters, mapState } from "vuex";

export default {
	name: "Order",
	data() {
		return {
			data: [],
			steps: {
				base: [],
				spreads: [],
				fillings: [],
				toppings: [],
				drinks: [],
			},
			prod: {
                base: {},
                spreads: [],
                fillings: [],
                toppings: [],
                drinks: [],
            },
            taste: false,
		};
	},
	created() {
		this.getItems();
	},
	computed: {
		...mapState({
			checkoutStatus: (state) => state.cart.checkoutStatus,
		}),
		...mapGetters("cart", {
			products: "cartProducts",
			total: "cartTotalPrice",
		}),
	},
	methods: {
		getItems() {
			axios
				.get(`http://localhost:4000/api/items?lang=${this.$i18n.locale}`)
				.then((res) => {
					this.data = res.data.data;
				})
				.catch((errors) => (this.errors = errors));
		},
		addProductToCart() {
			this.$store.dispatch("cart/addProductToCart", this.prod);
		},
		placeOrder() {
			let data = this.products;
			axios
				.post("http://localhost:4000/api/orders", {
					data,
				})
				.then(() => console.log("Order has been made"))
				.catch((err) => console.log(err));
		},
		setTaste(index) {
			let items = this.data[index];
			let drinks = this.data[2];
			if (!index) {
				this.steps.base.push(items[0]);
				this.steps.spreads.push(items[1]);
				this.steps.spreads.push(items[2]);
				this.steps.fillings.push(items[3]);
				this.steps.fillings.push(items[4]);
				this.steps.fillings.push(items[5]);
				this.steps.fillings.push(items[6]);
				this.steps.toppings.push(items[7]);
				this.steps.drinks.push(drinks[2]);
				this.steps.drinks.push(drinks[3]);
				this.steps.drinks.push(drinks[5]);
			} else {
				this.steps.base.push(items[0]);
				this.steps.spreads.push(items[1]);
				this.steps.fillings.push(items[2]);
				this.steps.fillings.push(items[3]);
				this.steps.toppings.push(items[4]);
				this.steps.drinks.push(drinks[2]);
				this.steps.drinks.push(drinks[3]);
				this.steps.drinks.push(drinks[5]);
			}
            this.taste = true;
		},
        read() {
            console.log(this.prod);
        }
	},
};
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .border {
        border: 1px solid black;
    }
    .v-container__background {
        background-image: url("../assets/background1.png") !important;
        background-repeat: repeat;
    }
    .v-row__height {
        height: 100%!important;
    }
    label {
        float: right;
    }
</style>
