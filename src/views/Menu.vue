<template>
	<v-container primary fill-height fluid class="pt-16">
		<v-row justify="center">
			<v-col cols="12">
				<v-container>
					<v-row>
						<v-col>
							<v-tabs 
								background-color="transparent"
								color="secondary"
								:centered="isMobile"
							>
								<v-tab @click="toggle(0)">Sladko</v-tab>
								<v-tab @click="toggle(1)">Slano</v-tab>
								<v-tab @click="toggle(2)">Pijače</v-tab>
							</v-tabs>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-expansion-panels
								v-for="products in menu"
								:key="products.id"
								focusable
								tile
								flat
								class="v-expansion-panels__custom"
							>
								<v-expansion-panel
									v-for="(items, key) in products"
									:key="key.id"
									dense
									depressed
								>
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
								</v-expansion-panel>
							</v-expansion-panels>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
			<v-col cols="12" md="6" class="v-cards__custom">
				<v-container>
					<v-row justify="center">
						<v-col cols="12">
							<v-hover>
								<template 
									v-slot:default="{ hover }"
								>
									<v-card tile>
										<v-img src="../assets/laPistacchio2.jpg"></v-img>
										<v-overlay 
											v-if="hover" 
											absolute
											:opacity=".6"
										>
											<v-card-title class="text-h5 text-md-h3 font-weight-bold"
												>La Bomba
											</v-card-title>
											<v-card-subtitle class="text-subtitle-2"
												>Sestavine:
											</v-card-subtitle>
											<v-card-text class="text-body-2 text-md-body-1 m-0">
												<ul>
													<li>bela premium čokolada</li>
													<li>pistacija</li>
													<li>čokoladne kroglice</li>
													<li>plazma</li>
													<li>maline</li>
													<li>Kinder čokolada</li>
												</ul>
											</v-card-text>
										</v-overlay>
									</v-card>
								</template>
							</v-hover>
						</v-col>
						<v-col cols="12">
							<v-hover>
								<template 
									v-slot:default="{ hover }" 
								>
									<v-card tile>
										<v-img src="../assets/whiteJaffa3.jpg"></v-img>
										<v-overlay 
											v-if="hover" 
											absolute
											:opacity=".6"
										>
											<v-card-title class="text-h5 text-md-h3 font-weight-bold"
												>White Jaffa
											</v-card-title>
											<v-card-subtitle class="text-subtitle-2"
												>Sestavine:
											</v-card-subtitle>
											<v-card-text class="text-body-2 text-md-body-1 m-0">
												<ul>
													<li>ribana pomaranča</li>
													<li>bela čokolada (2x namaz)</li>
													<li>Milka čokoladke</li>
													<li>čokoladne mrvice</li>
												</ul>
											</v-card-text>
										</v-overlay>
									</v-card>
								</template>
							</v-hover>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="12">
							<v-hover>
								<template 
									v-slot:default="{ hover }" 
								>
									<v-card tile>
										<v-img src="../assets/american-pie.jpg"></v-img>
										<v-overlay 
											v-if="hover" 
											absolute
											:opacity=".6"
										>
											<v-card-title class="text-h5 text-md-h3 font-weight-bold"
												>American Pie
											</v-card-title>
											<v-card-subtitle class="text-subtitle-2"
												>Sestavine:
											</v-card-subtitle>
											<v-card-text class="text-body-2 text-md-body-1 m-0">
												<ul>
													<li>ribana jabolka</li>
													<li>cimet</li>
													<li>bela premium čokolada</li>
													<li>lešnik</li>
													<li>vanilijev puding</li>
													<li>čokoladne mrvice</li>
												</ul>
											</v-card-text>
										</v-overlay>
									</v-card>
								</template>
							</v-hover>
						</v-col>
						<v-col cols="12">
							<v-hover>
								<template 
									v-slot:default="{ hover }" 
								>
									<v-card tile>
										<v-img src="../assets/ruby1.jpg"></v-img>
										<v-overlay 
											v-if="hover" 
											absolute 
											:opacity=".6"
										>
											<v-card-title class="text-h5 text-md-h3 font-weight-bold"
												>Ruby
											</v-card-title>
											<v-card-subtitle class="text-subtitle-2"
												>Sestavine:
											</v-card-subtitle>
											<v-card-text class="text-body-2 text-md-body-1 m-0">
												<ul>
													<li>crunchy jagoda</li>
													<li>rubi namaz</li>
													<li>KitKat</li>
													<li>čokoladne praline</li>
													<li>dekoracija</li>
												</ul>
											</v-card-text>
										</v-overlay>
									</v-card>
								</template>
							</v-hover>
						</v-col>
					</v-row>
				</v-container>
			</v-col>-->
		</v-row> 
		<v-row>
			<v-container>
				<v-row justify="center">
					<v-col cols="12" xs="6" md="5" lg="4">
						<v-card
							flat
							tile
							color="success"
							class="py-8"
						>
							<v-card-title class="text-h5 text-md-h3 justify-center primary--text">Oddaj naročilo </v-card-title>
							<v-card-text class="text-center">
								<v-btn 
									depressed
									tile
									color="primary"
									class="success--text"
									:to="{ path: '/order' }"
								>tukaj</v-btn>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";

export default {
	name: "Menu",
	data() {
		return {
			items: [],
			menu: [],
			mobile: false
		};
	},
	methods: {
		getItems() {
			axios.get("http://192.168.0.28:4000/menu")
				.then(items => {
					this.items = items.data;
					this.menu = this.items[0];
				})
				.catch(errors => this.errors = errors);
		},
		toggle(index) {
			this.menu = [];
			this.menu = this.items[index];
		}
	},
	computed: {
		isMobile: function () {
			return this.mobile <= 600;
		}
	},
	created() {
		this.getItems();
	},
	mounted() {
		this.mobile = screen.width;
	}
};
</script>

<style scoped>
	p {
		padding: 0;
		margin: 0;
	}
	.v-expansion-panels__custom {
		/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
	}
</style>
