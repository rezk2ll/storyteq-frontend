<script setup lang="ts">
import AutoComplete from "./AutoComplete.vue";
import { useCityStore } from "@/stores/city";
import { ref, watch } from "vue";

const searchString = ref<string | null>(null);
const cityStore = useCityStore();
const searchResult = ref<string[] | null>(null);

watch(searchString, (value) => {
  if (!value || value.length < 3) {
    searchResult.value = [];
    return;
  }

  searchResult.value = cityStore.searchCity(value);
});
</script>

<template>
  <div
    class="w-full mx-auto rounded-lg bg-white shadow-xl p-5 text-gray-800 h-48"
    style="max-width: 800px"
  >
    <h1 class="text-2xl font-semibold pb-2">City Search</h1>
    <AutoComplete
      v-model="searchString"
      :results="searchResult"
      :focused="true"
    />
  </div>
</template>
