import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { it, expect, describe, vi } from "vitest";
import BookSearch from "../BookSearch.vue";

describe("the BookSearch SFC", () => {
  const wrapper = mount(BookSearch, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    },
  });

  it("renders properly", () => {
    expect(wrapper.text()).toContain("Book Search");
  });

  it("shows a warning when typing less than 3 characters", async () => {
    await wrapper.get('[id="search"]').setValue("ab");

    expect(wrapper.text()).toContain("you should at least type 3 characters");
  });

  it("shows the result of the query when found", async () => {
    await wrapper.get('[id="search"]').setValue("pil");

    expect(wrapper.text()).toContain("Pilgrim's Progress: John Bunyan");
  });

  it("indicate that no results are found when nothing matches the query", async () => {
    await wrapper.get('[id="search"]').setValue("something that doesn't exist");

    expect(wrapper.text()).toContain("no results found");
  });
});
