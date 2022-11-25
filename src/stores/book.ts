import { defineStore } from "pinia";
import { computed, readonly, ref } from "vue";

export interface Book {
  title: string;
  author: string;
}

export const useBookStore = defineStore("book", () => {
  const books = ref<Book[]>([
    {
      title: "Don Quixote",
      author: "Miguel De Cervantes",
    },
    {
      title: "Pilgrim's Progress",
      author: "John Bunyan",
    },
    {
      title: "Robinson Crusoe",
      author: "Daniel Defoe",
    },
    {
      title: "Gulliver's Travels",
      author: "Jonathan Swift",
    },
    {
      title: "Tom Jones",
      author: "Henry Fielding",
    },
    {
      title: "Clarissa",
      author: "Samuel Richardson",
    },
    {
      title: "Tristram Shandy",
      author: "Laurence Sterne",
    },
  ]);

  const searchBooks = computed(
    () =>
      (searchString: string): Book[] =>
        books.value.filter((book) =>
          book.title.toLowerCase().startsWith(searchString.toLowerCase())
        )
  );

  return {
    books: readonly(books),
    searchBooks,
  };
});
