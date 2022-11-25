import { createPinia, setActivePinia } from "pinia";
import { describe, expect, it } from "vitest";
import { useBookStore } from "../book";

describe("the book store", () => {
  setActivePinia(createPinia());

  it("should correctly query the store", () => {
    const bookStore = useBookStore();
    const books = bookStore.searchBooks("Don");

    expect(books).toEqual([
      {
        title: "Don Quixote",
        author: "Miguel De Cervantes",
      },
    ]);
  });

  it("should return an empty array if nothnig found", () => {
    const bookStore = useBookStore();
    const books = bookStore.searchBooks("something");

    expect(books).toEqual([]);
  });
});
