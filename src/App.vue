<script setup lang="ts">
import CitySearch from "./components/CitySearch.vue";
import BookSearch from "./components/BookSearch.vue";
</script>

<template>
  <div
    class="min-w-screen min-h-screen flex flex-col space-y-3 items-center justify-center px-5 py-5 bg-gradient-to-bl from-sky-100 via-purple-300 to-cyan-700"
  >
    <CitySearch />
    <BookSearch />
  </div>
</template>
