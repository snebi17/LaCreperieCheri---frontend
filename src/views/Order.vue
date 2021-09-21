<template>
	<v-container fill-height fluid class="v-container__background">
		<v-row align="center" justify="center" v-if="!taste">
			<v-col cols="12" md="4" class="d-flex justify-center">
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
			<v-col cols="12" md="4" class="d-flex justify-center">
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
					<v-card-text 
						v-for="item in steps.base"
                        :key="item.id"
					>
                        <v-chip-group
							column
							v-model="product.base"
						>
							<v-chip
								v-for="product in item.products"
								:key="product.id"
								filter
								outlined
								:value="product"
							>
								{{ product.name }}
							</v-chip>
						</v-chip-group>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card rounded="xl" flat color="transparent">
                    <v-card-title>
                        {{ $t('order.spreads') }}
                    </v-card-title>
					<v-card-text>
						<v-expansion-panels flat> 
							<v-expansion-panel
                                v-for="item in steps.spreads" 
                                :key="item.id"
								class="v-expansion-panel__transparent"
                            >
                                <v-expansion-panel-header>
                                    {{ item.type }}
                                </v-expansion-panel-header>
								<v-expansion-panel-content>
                                    <v-chip-group
										column
										multiple
										v-model="product.spreads"
									>
										<v-chip
											v-for="product in item.products" 
											:key="product.id"
											filter
											outlined
											:value="product"
										>
											{{ product.name }}
										</v-chip>
									</v-chip-group>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card rounded="xl" flat color="transparent">
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
								<v-expansion-panel-content>
                                    <v-chip-group
										column
										multiple
										v-model="product.fillings"
									>
										<v-chip
											v-for="product in item.products" 
											:key="product.id"
											filter
											outlined
											:value="product"
										>
											{{ product.name }}
										</v-chip>
									</v-chip-group>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-row align="start" v-if="taste">
			<v-col cols="12" md="4">
                    <v-card rounded="xl" flat color="transparent">
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
								<v-expansion-panel-content>
                                    <v-chip-group
										column
										multiple
										v-model="product.toppings"
									>
										<v-chip
											v-for="product in item.products" 
											:key="product.id"
											filter
											outlined
											:value="product"
										>
											{{ product.name }}
										</v-chip>
									</v-chip-group>
                                </v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="5">
				<v-card rounded="xl" flat color="transparent">
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
								<v-expansion-panel-content>
									<v-chip-group
										column
										multiple
										v-model="product.drinks"
									>
										<v-chip
											v-for="product in item.products" 
											:key="product.id"
											filter
											outlined
											:value="product"
										>
											{{ product.name }}
										</v-chip>
									</v-chip-group>
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
			product: {
				base: [],
				spreads: [],
				fillings: [],
				toppings: [],
				drinks: []
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
				.get(`items?lang=${this.$i18n.locale}`)
				.then((res) => {
					this.data = res.data.data;
				})
				.catch((errors) => (this.errors = errors));
		},
		addProductToCart() {
			console.log(this.product);
			// this.$store.dispatch("cart/addProductToCart", this.product);
		},
		placeOrder() {
			let data = this.products;
			axios
				.post("orders", {
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
	.v-expansion-panel__transparent {
		background-color: #f2efdb!important;
	}
    label {
        float: right;
    }
</style>
