// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
    // Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log("Task 1 :");
let book = {
    title : "AML",
    author : "Sangita R.",
    year : 2021
}

console.log(book);

    // Task 2: Access and log the title and author properties of the book object.
console.log("Task 2 :");
let bookDetail = `Title ${book.title} Author ${book.author}`
console.log(bookDetail);

// Activity 2: Object Methods
    // Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log("Task 3 :");
let books = {
    title : "AML",
    author : "Sangita R.",
    year : 2021,

    bookDetails : function(){
        return `Title is ${this.title} author is ${this.author}`
    }
}

let bookInfo = books.bookDetails()
console.log(bookInfo);

    // Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log("Task 4 :");
books = {
    title : "aml",
    author : "Sangita R.",
    year : 2021,

    bookDetails : function(years){
        this.year = years
        return `Title is ${this.title} author is ${this.author} amd year is ${years}`
    }

}

bookInfo = books.bookDetails(2024)
console.log(bookInfo);
console.log(books);

// Activity 3: Nested Objects
    // Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log("Task 5 :");
let library = {
    name : "LJMCA",
    book :["aml","ml","java", "py", "js"]
}
console.log(library);


    // Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log("Task 6 :");
let libraryDetails = `Library Name : ${library.name}, Books Avilable : ${library.book}`
console.log(libraryDetails);


// Activity 4: The this Keyword
    // Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
    console.log("Task 7 :");
    book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    getTitleAndYear: function() { //this is a method
      return `${this.title} (${this.year})`;
    }
  };
  
  // Call the method and log the result
  console.log(book.getTitleAndYear());

//Activity 5: Object Iteration
    //Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

console.log("Task 8 :");
  
  // Iterate over the properties of the book object
  for (let property in book) {
    console.log(`${property}: ${book[property]}`);
  }
  

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Task 9 :");
  console.log("Keys:", Object.keys(book));
  
  console.log("Values:", Object.values(book));
  