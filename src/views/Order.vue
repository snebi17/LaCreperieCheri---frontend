<template>
	<v-container fill-height fluid class="v-container__background">
		<!-- <v-row align="center" justify="center" v-if="!taste">
			<v-col cols="12" md="4" class="d-flex justify-center">
				<v-card rounded="xl">
					<v-img src="../assets/default.jpg"></v-img>
					<v-card-actions>
						<v-btn
							rounded
							color="primary"
							text
							outlined
							@click="setTaste(0)"
						>
							{{ $t("sweet") }}
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col cols="12" md="4" class="d-flex justify-center">
				<v-card rounded="xl">
					<v-img src="../assets/default.jpg"></v-img>
					<v-card-actions>
						<v-btn
							rounded
							color="primary"
							text
							outlined
							@click="setTaste(1)"
						>
							{{ $t("salty") }}
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row> -->
		<v-row align="center" justify="center" v-if="!taste">
			<v-col cols="12" md="4" class="d-flex justify-center">
				<v-card rounded="xl">
					<v-img src="../assets/default.jpg"></v-img>
					<v-card-actions>
						<v-btn rounded color="primary" text outlined @click="setTaste(0)">
							{{ $t("sweet") }}
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col cols="12" md="4" class="d-flex justify-center">
				<v-card rounded="xl">
					<v-img src="../assets/default.jpg"></v-img>
					<v-card-actions>
						<v-btn rounded color="primary" text outlined @click="setTaste(1)">
							{{ $t("salty") }}
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-row v-else>
			<v-col cols="6">
				<v-slide-group show-arrows>
					<v-slide-item
						v-for="group in groups"
						:key="group.id"
						v-slot="{ active }"
					>
						<v-btn
							class="mx-2"
							:input-value="active"
							active-class="primary secondary--text"
							depressed
							rounded
							@click="setGroup(group)"
							>{{ group }}</v-btn
						>
					</v-slide-item>
				</v-slide-group>
			</v-col>
			<v-col cols="12">
				<v-container>
					<v-row align="stretch" no-gutters>
						<v-col v-for="item in group" :key="item.id" cols="2">
							<v-item-group
								v-model="product.items"
								multiple
							>
								<v-item
									:value="item"
									v-slot="{ active, toggle }"
									active-class=""
								>
									<v-card
										tile
										flat
										:class="active ? 'remove' : ''"
										:height="getHeight"
										class="d-flex flex-column justify-center align-center"
										@click="toggle"
									>
										<v-icon 
											v-if="active"
											top
											right
										>
											mdi-delete
										</v-icon>
										<v-card-title class="justify-center text-body-2">
											{{ item.name }}
										</v-card-title>
										<v-card-subtitle class="text-center">
											{{ item.price.toFixed(2).replace(".", ",") + " €" }}
										</v-card-subtitle>
									</v-card>
								</v-item>
							</v-item-group>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
		<!-- <v-row align="start" v-else class="mt-16">
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
								class="v-expansion-panel__transparent"
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
								class="v-expansion-panel__transparent"
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
		</v-row> -->
		<!-- <v-row>
			<v-col cols="12">
				<v-btn @click="setTaste(0)">Sladko</v-btn>
				<v-btn @click="setTaste(1)">Slano</v-btn>
			</v-col>
			<v-col>
				<v-stepper 
					v-model="step"
				>
					<v-stepper-step 
						:complete="step > 1"
						step="1"
					>
						Izberite osnovo
						<small>Izberite le eno od osnov</small>
					</v-stepper-step>
					<v-stepper-content step="1">
						<v-row
							v-for="item in steps.base"
							:key="item.id"
						>
							<v-col>
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
										@click="step = 2"
									>
										{{ product.name }}
									</v-chip>
								</v-chip-group>
							</v-col>
						</v-row>
					</v-stepper-content>
					<v-stepper-step 
						:complete="step > 2"
						step="2"
					>
						Izberite namaz
						<small>Izberete lahko enega ali več namazov</small>
					</v-stepper-step>
					<v-stepper-content step="2">
						<v-row
                            v-for="item in steps.spreads" 
                            :key="item.id"
						>
                            <v-col>
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
							</v-col>
						</v-row>
					</v-stepper-content>
					<v-stepper-step 
						:complete="step > 3"
						step="3"
					>
						Izberite polnilo
						<small>Izberete lahko enega ali več polnil</small>
					</v-stepper-step>
					<v-stepper-content step="3">

					</v-stepper-content>
					<v-stepper-step 
						:complete="step > 4"
						step="4"
					>
						Izberite preliv
						<small>Izberete lahko enega ali več prelivov</small>
					</v-stepper-step>
					<v-stepper-content step="4">

					</v-stepper-content>
					<v-stepper-step 
						:complete="step > 5"
						step="5"
					>
						Izberite pijačo
						<small>Izberete lahko eno ali več pijač</small>
					</v-stepper-step>
					<v-stepper-content step="5">

					</v-stepper-content>
				</v-stepper>
			</v-col>
		</v-row> -->
		<v-row>
			<v-col v-for="item in product.items" :key="item.id">
				{{ item }}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
	name: "Order",
	data() {
		return {
			data: [],
			items: [],
			groups: [],
			group: [],
			// steps: {
			// 	base: [],
			// 	spreads: [],
			// 	fillings: [],
			// 	toppings: [],
			// drinks: [],
			// },
			product: {
				items: [],
				total: 0.0,
			},
			taste: false,
			step: 1,
		};
	},
	created() {
		this.getItems();
	},
	computed: {
		...mapGetters("cart", {
			products: "cartProducts",
			total: "cartTotalPrice",
		}),
		getHeight() {
			return this.$vuetify.breakpoint.xs ? 50 : 140;
		},
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
		addItemToProduct(item) {
			this.product.items.push(item);
			this.product.total += item.price;
		},
		addProductToCart() {
			Object.values(this.product).forEach((value) => {
				if (value == typeof Array) console.log("array");
			});
			this.$store.dispatch("cart/addToCart", this.product);
		},
		placeOrder() {
			axios
				.post("orders", this.products)
				.then(() => console.log("Order has been made"))
				.catch((err) => console.log(err));
		},
		setTaste(index) {
			// let drinks = this.data[2];
			// if (!index) {
			// this.steps.base.push(items[0]);
			// this.steps.spreads.push(items[1]);
			// this.steps.spreads.push(items[2]);
			// this.steps.fillings.push(items[3]);
			// this.steps.fillings.push(items[4]);
			// this.steps.fillings.push(items[5]);
			// this.steps.fillings.push(items[6]);
			// this.steps.toppings.push(items[7]);
			// this.steps.drinks.push(drinks[2]);
			// this.steps.drinks.push(drinks[3]);
			// this.steps.drinks.push(drinks[5]);
			// } else {
			// this.steps.base.push(items[0]);
			// this.steps.spreads.push(items[1]);
			// this.steps.fillings.push(items[2]);
			// this.steps.fillings.push(items[3]);
			// this.steps.toppings.push(items[4]);
			// this.steps.drinks.push(drinks[2]);
			// this.steps.drinks.push(drinks[3]);
			// this.steps.drinks.push(drinks[5]);
			// }
			this.items = this.data[index];
			this.items.forEach((item) => {
				this.groups.push(item.type);
			});
			this.group = this.items[0].products;
			this.taste = true;
		},
		setGroup(group) {
			this.items.forEach((item) => {
				if (item.type == group) {
					this.group = item.products;
				}
			});
			console.log(this.group);
		},
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
	.v-expansion-panel__transparent {
		/* background-color: #f2efdb!important; */
		background-color: transparent !important;
	}
</style>
