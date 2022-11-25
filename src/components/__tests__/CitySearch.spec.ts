import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import CitySearch from "../CitySearch.vue";

describe("the CitySearch SFC", () => {
  const wrapper = mount(CitySearch, {
    attachTo: document.body,
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    },
  });

  it("renders properly", () => {
    expect(wrapper.text()).toContain("City Search");
  });

  it("shows a warning when typing less than 3 characters", async () => {
    await wrapper.get('[id="search"]').setValue("ab");

    expect(wrapper.text()).toContain("you should at least type 3 characters");
  });

  it("shows the result of the query when found", async () => {
    await wrapper.get('[id="search"]').setValue("san");

    expect(wrapper.text()).toContain("san jose");
  });

  it("indicate that no results are found when nothing matches the query", async () => {
    await wrapper.get('[id="search"]').setValue("something that doesn't exist");

    expect(wrapper.text()).toContain("no results found");
  });
});
