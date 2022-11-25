import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { describe, vi, it, expect } from "vitest";
import ResultListVue from "../ResultList.vue";

describe("the ResultList SFC", () => {
  const wrapper = mount(ResultListVue, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    },
    props: {
      items: ["some property"],
    },
  });

  it("renders correctly", () => {
    expect(wrapper.text()).toContain("some property");
  });

  it("shows no results when non provided", async () => {
    await wrapper.setProps({ items: null });

    expect(wrapper.text()).toContain("no results found");
  });
});
