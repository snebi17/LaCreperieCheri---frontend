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
			color="primary"
			fixed
			app
			class="mb-16"
		>
			<v-app-bar-nav-icon 
				x-large
				@click="drawer = true"
				icon
				color="secondary"
			></v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<v-btn
				class="rounded-pill mr-1"
				outlined
				color="secondary"
				text
				:to="{ name: 'Order', params: { lang:  $i18n.locale  } }"
			>
				{{ $t('nav.order') }}
			</v-btn>
			<v-btn 
				x-large
				color="secondary"
				icon
				@click="open('https://www.facebook.com/LaCreperieCheriPalacinke/')"
			>
				<i class="fa fa-facebook fa-lg"></i>
			</v-btn>
			<v-btn 
				x-large
				color="secondary"
				icon
				@click="open('https://www.instagram.com/lacreperie_cheri/')"
			>
				<i class="fa fa-instagram fa-lg"></i>
			</v-btn>
			<v-btn 
				x-large 
				color="secondary"
				icon
				@click="open('https://www.tripadvisor.com/Restaurant_Review-g274873-d23450735-Reviews-La_Creperie_Cheri-Ljubljana_Upper_Carniola_Region.html')"
			>
				<i class="fa fa-tripadvisor fa-lg"></i>
			</v-btn>
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
		<v-btn 
			v-if="$route.path !== `/${$i18n.locale}/`"
			fab
			absolute 
			right
			bottom
			class="mb-11"
			color="primary"
			:to="{ name: 'Landing' }"
		>
			<v-icon>mdi-home</v-icon>
		</v-btn>
		<v-speed-dial
			v-else
			v-model="fab"
			absolute
			right
			bottom
			transition="slide-y-reverse-transition"
			direction="top"
		>
			<template v-slot:activator>
				<v-btn
					v-model="fab"
					color="primary"
					dark
					fab
				>
					<v-icon v-if="fab">
						mdi-close
					</v-icon>
					<v-icon v-else>
						mdi-web
					</v-icon>
				</v-btn>
			</template>
			<v-btn
				icon
				@click="setLocale('si')"
			>
				<v-avatar>
					<v-img :src="`${publicPath}flag_si.png`"></v-img>
				</v-avatar>
			</v-btn>
			<v-btn
				icon
				class="mb-4"
				@click="setLocale('en')"
			>
				<v-avatar>
					<v-img :src="`${publicPath}flag_en.png`"></v-img>
				</v-avatar>
			</v-btn>
		</v-speed-dial>
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
			fab: false
		}
	},
	created() {
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
		border: 2px solid #f2efdb;
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
	.position {
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
