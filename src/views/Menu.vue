<template>
	<v-container secondary fill-height fluid class="d-flex align-start pt-16">
		<v-row>
			<v-col cols="12">
				<v-container>
					<v-row>
						<v-col>
							<v-tabs
								background-color="transparent"
								color="primary"
								:centered="isMobile"
							>
								<v-tab 
									@click="toggle(0)"
									class="primary--text"
								>
									{{ $t('sweet') }}
								</v-tab>
								<v-tab
									@click="toggle(1)"
									class="primary--text"
								>
									{{ $t('salty') }}
								</v-tab>
								<v-tab 
									@click="toggle(2)"
									class="primary--text"
								>
									{{ $t('drinks') }}
								</v-tab>
							</v-tabs>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<v-expansion-panels	
								focusable
								tile
								flat
							>
								<v-expansion-panel
									v-for="groups in menu"
									:key="groups.id"
									dense
									depressed
								>
									<v-expansion-panel-header 
										color="secondary"
										class="success--text"
									>
										{{ groups.type }}
									</v-expansion-panel-header>
									<v-expansion-panel-content 
										color="success"
									>
										<v-list
											v-for="item in groups.products" 
											:key="item.id"
											color="transparent"
										>
											<v-list-item>
												<v-row justify="space-between" class="secondary--text">
													<p>{{ item.name }}</p>
													<p>{{ item.price.toFixed(2) + ' €' }}</p>
												</v-row>
											</v-list-item>
										</v-list>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
			<!-- <v-col cols="12" md="6" class="v-cards__custom">
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
	</v-container>
</template>

<script>
import axios from "axios";

export default {
	name: "Menu",
	data() {
		return {
			data: [],
			menu: [],
			mobile: false
		};
	},
	methods: {
		getItems() {
			axios.get(`http://localhost:4000/api/items?lang=${this.$i18n.locale}`)
				.then(res => {
					this.data = res.data.items;
					this.menu = this.data[0].items;
				})
				.catch(errors => this.errors = errors);
		},
		toggle(index) {
			this.menu = [];
			this.menu = this.data[index].items;
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
	p, span {
		padding: 0;
		margin: 0;
	}
</style>
