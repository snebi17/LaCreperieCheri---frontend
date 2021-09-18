<template>
	<v-container secondary fill-height fluid>
		<v-row>
			<v-col cols="12">
				<v-container>
					<v-row class="v-row__fixed">
						<v-col>
							<v-tabs
								background-color="transparent"
								color="primary"
								:centered="isMobile"
							>
								<v-tab @click="toggle(0)">
									{{ $t('sweet') }}
								</v-tab>
								<v-tab @click="toggle(1)">
									{{ $t('salty') }}
								</v-tab>
								<v-tab @click="toggle(2)">
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
								class="v-expansion-panels__fixed"
							>
								<v-expansion-panel
									v-for="groups in menu"
									:key="groups.id"
									dense
									depressed
								>
									<v-expansion-panel-header 
										color="secondary" 
										class="text-h6 primary--text"
									>
										{{ groups.type }}
									</v-expansion-panel-header>
									<v-expansion-panel-content 
										v-for="item in groups.products" 
										:key="item.id"
										color="primary" 
										>
										<v-row justify="center">
											<v-col cols="4" class="text-center">
												<p class="font-weight-medium">{{ item.name }}</p>
											</v-col>
											<v-col cols="4" class="text-center">
												<span class="font-weight-bold">{{ item.price.toFixed(2) + ' €'}}</span>
											</v-col>
										</v-row>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-col>
					</v-row>
					<!-- <v-row
						class="mt-16"
						v-for="groups in data"
						:key="groups.id"
					>
						<v-col 
							v-for="group in groups['items']"
							:key="group.id"
						>
							<v-list 
								v-for="(items, key) in group"
								:key="key.id"
							>
								{{ key }}
								<v-list-item
									v-for="item in items"
									:key="item.id"
								>
									<p>{{ item.name }} <span>{{ item.price }}</span></p>
								</v-list-item>
							</v-list>
						</v-col>
					</v-row> -->
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
	.v-row__fixed {
		position: fixed!important;
	}
	
</style>
