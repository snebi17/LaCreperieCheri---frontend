<template>
	<v-container success fluid class="d-flex">
		<v-row align="center" justify="center" >
			<v-col cols="4">
				<v-row>
					<p class="text-h5 text-md-h3 font-weight-bold secondary--text"><i class="fa fa-instagram mr-3"></i>Instagram</p>
				</v-row>
				<v-row>
					<p class="text-body-2 text-md-body-1 secondary--text">Sledite nam na @lacreperie_cheri</p>
				</v-row>
				<v-row>
					<p class="text-body-2 text-md-body-1 secondary--text">Označite nas s <span class="primary--text">#lacreperiecheri_palacinke</span></p>
				</v-row>
			</v-col>
			<v-col cols="4" class="d-flex justify-end">
				<iframe></iframe>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="4">
				<p class="text-h5 text-md-h3 font-weight-bold secondary--text">Vaše mnenje nam ogromno pomeni</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "Gallery",
};
</script>

<style>
	p {
		padding: 0;
		margin: 0;
	}
</style>
