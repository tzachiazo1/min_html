function getFullName(data) {
  const { title: bookTitle, author: bookAuthor } = data;

  return `${bookTitle}, by ${bookAuthor}`;
}

const dataObj = {
  title: 'The Hobbit',
  author: 'J. R. R. Tolkien'
};

console.log(getFullName(dataObj));
// The Hobbit, by J. R. R. Tolkien
