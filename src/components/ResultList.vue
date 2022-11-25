<script setup lang="ts">
const props = defineProps<{
  items: string[] | null;
}>();
</script>

<template>
  <div class="p-5" v-if="items && items.length">
    <div class="flex flex-wrap justify-center">
      <div
        class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-lg text-gray-70 border border-gray-300"
        v-for="item in props.items"
        :key="item"
      >
        <div class="text-xs font-normal leading-none max-w-full flex-initial">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 my-3"
    role="alert"
  >
    <span class="font-medium">bummer!</span> no results found.
  </div>
</template>
