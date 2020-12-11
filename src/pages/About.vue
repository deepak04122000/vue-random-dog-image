<template>
  <div class="ml-4">
    <ul>
      <li v-for="breedName in $store.getters.getDogBreedList" :key="breedName">
        {{ breedName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.$store.getters.getDogBreedList) {
      this.$store.dispatch("dogsFetchAction");
    }
  }
};
</script>

<style></style>
