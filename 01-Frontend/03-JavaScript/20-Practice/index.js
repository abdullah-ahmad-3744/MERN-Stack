// console.log('Practicing Higher Order Functions');


const books = [
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018
  },
  {
    title: "The Pragmatic Programmer",
    authorName: "Andrew Hunt and David Thomas",
    releaseYear: 1999
  },
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008
  },
  {
    title: "Deep Work",
    authorName: "Cal Newport",
    releaseYear: 2016
  },
  {
    title: "The Psychology of Money",
    authorName: "Morgan Housel",
    releaseYear: 2020
  },
  {
    title: "Think and Grow Rich",
    authorName: "Napoleon Hill",
    releaseYear: 1937
  },
  {
    title: "The 7 Habits of Highly Effective People",
    authorName: "Stephen R. Covey",
    releaseYear: 1989
  },
  {
    title: "Rich Dad Poor Dad",
    authorName: "Robert T. Kiyosaki",
    releaseYear: 1997
  },
  {
    title: "The Alchemist",
    authorName: "Paulo Coelho",
    releaseYear: 1988
  },
  {
    title: "The Lean Startup",
    authorName: "Eric Ries",
    releaseYear: 2011
  }
];
function sortByYear(book1,book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  } else if (book1.releaseYear > book2.releaseYear){
    return 1;
  } else if (book1.releaseYear === book2.releaseYear){
    return 0;
  }
}
const filteredBooks = [];
books.forEach( (book) => {
  if(book.releaseYear <= 1950) {
    filteredBooks.push(book)
  }
})
console.log(filteredBooks.sort(sortByYear));
