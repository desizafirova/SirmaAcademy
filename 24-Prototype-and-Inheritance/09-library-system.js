class libraryItem {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Book extends libraryItem {
  constructor(title, author) {
    super(title, author);
  }

  calcRating(rating) {
    if (rating >= 4.5 && rating <= 5) {
      return 'Great 🤩';
    } else if (rating >= 4 && rating < 4.5) {
      return ' Very Good 😊';
    } else if (rating >= 3.5 && rating < 4) {
      return 'Good 😅';
    } else if (rating >= 3 && rating < 3.5) {
      return 'Average 🙄';
    } else if (rating < 3) {
      return 'This book does not have a good rating';
    } else if (rating < 5) {
      return 'Invalid input';
    }
  }
}

class Magazine extends libraryItem {
  constructor(title, author) {
    super(title, author);
  }

  printCategory(category) {
    return category;
  }
}

const book1 = new Book('A man called Ove', 'Fredrik Backman');
console.log(book1, book1.calcRating(4.4));
const book2 = new Book('Mamnik', 'Vasil Popov');
console.log(book2, book2.calcRating(4.7));

const magazine1 = new Magazine('Bravo', 'Alex Germandt');
console.log(magazine1, magazine1.printCategory('Teenage category'));
