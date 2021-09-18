<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			app
			color="primary"
			class="rounded-tr-xl d-flex flex-column align-stretch"
		>
			<v-list>
				<v-list-item 
					:to="{ name: 'Menu', params: { lang:  $i18n.locale  } }"
					class="success--text text-uppercase font-weight-bold"
				>
					{{ $t('nav.menu') }}
				</v-list-item>
				<v-list-item
					:to="{ name: 'Gallery', params: { lang:  $i18n.locale  } }"
					class="success--text text-uppercase font-weight-bold"
				>
					{{ $t('nav.gallery') }}
				</v-list-item>
				<v-list-item
					:to="{ name: 'About', params: { lang:  $i18n.locale  } }"
					class="success--text text-uppercase font-weight-bold"
				>
					{{ $t('nav.about') }}
				</v-list-item>
				<v-list-item 
					:to="{ name: 'Contact', params: { lang:  $i18n.locale  } }"
					class="success--text text-uppercase font-weight-bold"
				>
					{{ $t('nav.schedule_contact') }}
				</v-list-item>
			</v-list>
			<v-row justify="center" class="v-row__position">
				<v-col cols="10">
					<v-img src="./assets/logo.png"></v-img>
				</v-col>
			</v-row>
		</v-navigation-drawer>
		<v-app-bar 
			flat
			:color="background"
			fixed
			app
			class="mb-16"
		>
			<v-app-bar-nav-icon 
				x-large
				@click="drawer = true"
				icon
				:color="color"
			></v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<!-- <v-menu offset-y rounded="b-xl">
				<template v-slot:activator="{ attrs, on }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						text
						class="rounded-pill"
					>
						{{ $i18n.locale }}
						<v-avatar class="ml-2" size="30">
							<v-img :src="`${publicPath}flag_${$i18n.locale}.png`"></v-img>
						</v-avatar>
					</v-btn>
				</template>
				<v-list>
					<v-list-item>
						<v-btn
							text
							@click="setLocale('si')"
							class="rounded-pill"
						>
							{{ $t('slovene') }}
							<v-avatar class="ml-2" size="30">
								<v-img  :src="`${publicPath}flag_si.png`"></v-img>
							</v-avatar>
						</v-btn>
					</v-list-item>
					<v-list-item>
						<v-btn
							text
							@click="setLocale('en')"
							class="rounded-pill"
						>
							{{ $t('english') }}
							<v-avatar class="ml-2" size="30">
								<v-img :src="`${publicPath}flag_en.png`"></v-img>
							</v-avatar>
						</v-btn>
					</v-list-item>
				</v-list>
			</v-menu> -->
			<v-btn
				class="rounded-pill mr-1 v-btn__border"
				:color="color"
				text
				:to="{ name: 'Order', params: { lang:  $i18n.locale  } }"
			>
				{{ $t('nav.order') }}
			</v-btn>
			<v-btn 
				x-large 
				:color="color"
				icon
				@click="open('https://www.facebook.com/LaCreperieCheriPalacinke/')"
			>
				<i class="fa fa-facebook fa-lg"></i>
			</v-btn>
			<v-btn 
				x-large
				:color="color"
				icon
				@click="open('https://www.instagram.com/lacreperie_cheri/')"
			>
				<i class="fa fa-instagram fa-lg"></i>
			</v-btn>
			<v-btn 
				x-large 
				:color="color"
				icon
				@click="open('https://www.tripadvisor.com/Restaurant_Review-g274873-d23450735-Reviews-La_Creperie_Cheri-Ljubljana_Upper_Carniola_Region.html')"
			>
				<i class="fa fa-tripadvisor fa-lg"></i>
			</v-btn>
			<!-- <v-btn
				text
				class="rounded-pill"
			>
				<v-icon>mdi-cart</v-icon>
				<v-spacer></v-spacer>
				1,00€
			</v-btn> -->
		</v-app-bar>
		<v-main 
			app
			class="mt-n14 mt-md-n16"
		>
			<v-layout fill-height>
				<router-view>
				</router-view>
			</v-layout>
		</v-main>
	</v-app>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			path: '',
			drawer: false,
			publicPath: process.env.BASE_URL,
			background: '',
			color: ''
		}
	},
	created() {
		this.background = this.$route.fullPath === '/' ? 'transparent' : 'primary';
		this.color = this.$route.fullPath === '/' ? 'primary' : 'secondary';
	},
	methods: {
		open(url) {
			window.open(url);
		},
		setLocale(locale) {
			this.$i18n.locale = locale;
			this.$router.push({
				params: { lang: locale }
			});
			this.$router.go();
		}
	}
};
</script>

<style>
	p {
		padding: 0;
		margin: 0;
	}
	.v-img__size {
		width: 5px;
		height: 20px;
	}
	.v-btn__border {
		border: 2px solid #fda47e;
	}
	.v-row__position {
		position: absolute!important;
		bottom: 1rem;
	}
	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.75s ease-out;
	}
	.slide-enter-to {
		position: absolute;
		right: 0;
	}
	.slide-enter-from {
		position: absolute;
		right: -100%;
	}
	.slide-leave-to {
		position: absolute;
		left: -100%;
	}
	.slide-leave-from {
		position: absolute;
		left: 0;
	}
</style>
