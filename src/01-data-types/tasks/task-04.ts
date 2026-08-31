/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */



type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};


const book1: Book = {
  isbn: "978-602-8519-93-9",
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  totalPages: 529,
  category: "Fiction",
  isAvailable: true,
};

const book2: Book = {
  isbn: "978-013-2350-88-4",
  title: "Clean Code",
  author: "Robert C. Martin",
  totalPages: 464,
  category: "Programming",
  isAvailable: false,
};

const book3: Book = {
  isbn: "978-059-6517-74-8",
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  totalPages: 172,
  category: "Technology",
  isAvailable: true,
};


console.log("--- Katalog Buku 1 ---");
console.log(book1);

console.log("--- Katalog Buku 2 ---");
console.log(book2);

console.log("--- Katalog Buku 3 ---");
console.log(book3);