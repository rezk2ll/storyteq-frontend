<script setup lang="ts">
import CitySearch from "./components/CitySearch.vue";
import BookSearch from "./components/BookSearch.vue";
</script>

<template>
  <div
    class="min-w-screen min-h-screen bg-gray-800 flex flex-col space-y-2 items-center justify-center px-5 py-5"
  >
    <CitySearch />
    <BookSearch />
  </div>
</template>
