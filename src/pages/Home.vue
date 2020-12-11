<template>
  <div>
    <card
      :img="$store.getters.getDogImage"
      :breedList="$store.getters.getDogBreedList"
      @fetchClick="fetchNewImg"
    ></card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  },
  methods: {
    fetchNewImg(breed) {
      this.$store.dispatch("dogsImageFetchAction", breed);
    }
  },
  created() {
    if (!this.$store.getters.getDogBreedList) {
      this.$store.dispatch("dogsFetchAction");
    }
  }
};
</script>
