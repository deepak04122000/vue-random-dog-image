<template>
	<v-card class="mx-auto mt-5" max-width="400" elevation="6">
		<v-img class="white--text align-end" height="200px" :src="img"> </v-img>

		<v-card-subtitle class="pb-0">
			{{ img }}
		</v-card-subtitle>

		<v-divider></v-divider>

		<v-card-text>
			<v-select
				:items="breedList || []"
				label="Breed List"
				outlined
				v-model="selectedBreed"
			></v-select>
		</v-card-text>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn @click="fetchClick" color="primary" dark elevation="2">
				fetch
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'Card',
		data() {
			return {
				selectedBreed: '',
			};
		},
		props: {
			img: String,
			breedList: Array,
		},
		methods: {
			fetchClick() {
				this.$emit('fetchClick', this.selectedBreed);
			},
		},
	};
</script>
