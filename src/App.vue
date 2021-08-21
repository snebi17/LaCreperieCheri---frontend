<template>
	<v-app>
		<v-app-bar 
			flat 
			color="transparent"
			app
			fixed
		>
			<v-btn 
				x-large 
				color="secondary"
				icon
				@click="open('https://www.facebook.com/LaCreperieCheriPalacinke/')"
			>
				<v-icon>mdi-facebook</v-icon>
			</v-btn>
			<v-btn 
				x-large 
				color="secondary"
				icon
				@click="open('https://www.instagram.com/lacreperie_cheri/')"
			>
				<v-icon>mdi-instagram</v-icon>
			</v-btn>
			<v-btn 
				x-large 
				color="secondary"
				icon
				@click="open('https://www.tripadvisor.com/Restaurant_Review-g274873-d23450735-Reviews-La_Creperie_Cheri-Ljubljana_Upper_Carniola_Region.html')"
			>
				<v-icon>mdi-</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
			<v-app-bar-nav-icon 
				x-large 
				color="secondary"
				@click="drawer = true"
			></v-app-bar-nav-icon>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
			right
			app
		>
			<v-list dense>
				<v-list-item 
					link
					:to="{ path: '/menu' }"
				>
					Menu
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/gallery' }"
				>
					Gallery
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/about' }"
				>
					O nas
				</v-list-item>
				<v-list-item 
					link
					:to="{ path: '/contact' }"
				>
					Delovni čas in kontakt
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-content class="mt-n16">
			<v-layout fill-height>
				<router-view></router-view>
			</v-layout>
		</v-content>
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

<style scoped>
</style>
