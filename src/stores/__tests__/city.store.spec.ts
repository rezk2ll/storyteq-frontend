import { createPinia, setActivePinia } from "pinia";
import { describe, expect, it } from "vitest";
import { useCityStore } from "../city";

describe("the city store", () => {
  setActivePinia(createPinia());

  it("should correctly query the store", () => {
    const cityStore = useCityStore();
    const cities = cityStore.searchCity("san");

    expect(cities).toEqual([
      "san jose",
      "santiago",
      "san francisco",
      "santa rosa",
      "san juan",
    ]);
  });

  it("should return an empty array if nothnig found", () => {
    const cityStore = useCityStore();
    const cities = cityStore.searchCity("something");

    expect(cities).toEqual([]);
  });
});
