<template>
	<v-app>
		<v-app-bar app color="primary" dark elevation="4">
			<div class="d-flex align-center">
				<h2 class="mr-4">🐶</h2>
				<h3 text>Dogs Images</h3>
			</div>
			<v-spacer></v-spacer>
			<v-btn color="accent" @click="$router.push('/')" text
				><v-icon color="white">home</v-icon></v-btn
			>
			<router-link to="/about">
				<v-btn text><v-icon>info</v-icon></v-btn></router-link
			>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: 'App',

		data: () => ({}),
	};
</script>
