<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			app
			color="secondary"
		>
			<v-list>
				<v-list-item 
					link
					:to="{ path: '/menu' }"
					class="success--text"
				>
					{{ $t('nav.menu') }}
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/gallery' }"
					class="success--text"
				>
					{{ $t('nav.gallery') }}
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/about' }"
					class="success--text"
				>
					{{ $t('nav.about') }}
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/contact' }"
					class="success--text"
				>
					{{ $t('nav.schedule_contact') }}
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar 
			flat 
			color="transparent"
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
			<v-menu offset-y>
				<template v-slot:activator="{ attrs, on }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						icon
						x-large	
					>
						{{ $i18n.locale.toUpperCase() }}
						<v-icon></v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
						v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang"
					>
						<v-list-item-title>{{ lang }}</v-list-item-title>
						<v-icon-lang :iconLang="lang"></v-icon-lang>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn 
				x-large 
				icon
				@click="open('https://www.facebook.com/LaCreperieCheriPalacinke/')"
				color="secondary"
			>
				<i class="fa fa-facebook fa-lg"></i>
			</v-btn>
			<v-btn 
				x-large
				icon
				@click="open('https://www.instagram.com/lacreperie_cheri/')"
				color="secondary"
			>
				<i class="fa fa-instagram fa-lg"></i>
			</v-btn>
			<v-btn 
				x-large 
				icon
				@click="open('https://www.tripadvisor.com/Restaurant_Review-g274873-d23450735-Reviews-La_Creperie_Cheri-Ljubljana_Upper_Carniola_Region.html')"
				color="secondary"
			>
				<i class="fa fa-tripadvisor fa-lg"></i>
			</v-btn>
		</v-app-bar>
		<v-main 
			app
			class="mt-n14 mt-md-n16"
		>
			<v-layout fill-height>
				<router-view></router-view>
			</v-layout>
		</v-main>
	</v-app>
</template>

<script>

export default {
	name: "App",
	data() {
		return {
			drawer: false
		}
	},
	methods: {
		open(url) {
			window.open(url);
		}
	}
};
</script>

<style>
	p {
		padding: 0;
		margin: 0;
	}
</style>
