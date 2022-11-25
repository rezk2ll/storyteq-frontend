import { defineStore } from "pinia";
import { computed, readonly, ref } from "vue";

export const useCityStore = defineStore("city", () => {
  const cities = ref([
    "san jose",
    "santiago",
    "san francisco",
    "santa rosa",
    "san juan",
    "sabadell",
    "salamanca",
    "salt lake city",
    "salinas",
    "salem",
    "sausalito",
    "taipei",
    "tel aviv",
    "tempe",
    "termez",
    "temuco",
    "tiajuna",
    "tieling",
    "thousand oaks",
    "thunder bay",
    "tokyo",
    "tulsa",
  ]);

  const searchCity = computed(
    () =>
      (searchString: string): string[] =>
        cities.value.filter((city) =>
          city.toLowerCase().startsWith(searchString.toLowerCase())
        )
  );

  return { cities: readonly(cities), searchCity };
});
