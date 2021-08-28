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
					Menu
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/gallery' }"
					class="success--text"
				>
					Galerija
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/about' }"
					class="success--text"
				>
					O nas
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/contact' }"
					class="success--text"
				>
					Delovni čas in kontakt
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar 
			flat 
			color="transparent"
			fixed
			app
		>
			<v-app-bar-nav-icon 
				x-large 
				@click="drawer = true"
				icon
				color="secondary"
			></v-app-bar-nav-icon>
			<v-spacer></v-spacer>
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
			class="mt-n14 mt-md-n16"
			app
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
