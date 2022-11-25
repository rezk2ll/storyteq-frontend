<script setup lang="ts">
import { ref, onMounted } from "vue";
import ResultList from "./ResultList.vue";

const props = defineProps<{
  modelValue: string | null;
  results: string[] | null;
  focused?: boolean;
}>();
defineEmits(["update:modelValue"]);

const searchInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  props.focused && searchInput.value?.focus();
});
</script>
<template>
  <div class="relative mb-2">
    <input
      ref="searchInput"
      type="text"
      id="search"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-cyan-500 transition-colors"
      placeholder="search"
    />
    <div v-if="modelValue && modelValue.length">
      <div
        class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 my-4"
        role="alert"
        v-if="modelValue.length < 3"
      >
        you should at least type 3 characters
      </div>
      <div v-else>
        <ResultList :items="results" />
      </div>
    </div>
  </div>
</template>
