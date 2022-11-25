<script setup lang="ts">
import AutoComplete from "./AutoComplete.vue";
import { useBookStore, type Book } from "@/stores/book";
import { computed, ref, watch } from "vue";

const searchString = ref<string | null>(null);
const searchResult = ref<Book[] | null>(null);
const bookStore = useBookStore();

watch(searchString, (value) => {
  if (!value || value.length < 3) {
    searchResult.value = [];
    return;
  }

  searchResult.value = bookStore.searchBooks(value);
});

const results = computed(
  () =>
    searchResult.value?.map((book) => `${book.title}: ${book.author}`) || null
);
</script>
<template>
  <div
    class="w-full mx-auto rounded-lg bg-white shadow-xl p-5 text-gray-800 h-48"
    style="max-width: 800px"
  >
    <h1 class="text-2xl font-semibold pb-2">Book Search</h1>
    <AutoComplete v-model="searchString" :results="results" />
  </div>
</template>
