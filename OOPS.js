//Creating constructor
// function Book(title, author, published){
//     this.title = title
//     this. author = author
//     this.published = published
//     this.getSummary = function(){
//         return `${this.title} was written by ${this.author} in 
//                 ${this.published}`
//     }
// }
// //Instantiate an Object
// const book1 = new Book('Rich Dad Poor Dad','Robert Kiyosaki', 1996)
// console.log(book1)
// console.log(book1.getSummary())

//Creating conctructor and a prototype
// function Book(title, author, published){
//     this.title = title
//     this. author = author
//     this.published = published
// }

// //Prototype
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in 
//             ${this.published}`
// }

// //Revise or Change year of a book
// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }
// //Instantiate an Object
// const book1 = new Book('Rich Dad Poor Dad','Robert Kiyosaki', 1996)
// console.log(book1)
// book1.revise('2018')
// console.log(book1)

// //Inheritance of Constructor
// //Magazine constructor

// function Megazine(title, author, year, month){
//     Book.call(this,title, author, year);
//     this.month = month;
// }
// //Inherit Prototype
// Megazine.prototype = Object.create(Book.prototype);
// const mag1 = new Megazine('Mag One', 'Anshuman', '2020','May')
// console.log(mag1)
// console.log(mag1.getSummary())

//Classes
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in 
                 ${this.year}`;
    }
}

const classBook = new Book('Class Book','Anshuman',2013)
console.log(classBook);
console.log(classBook.getSummary())

//subclass
class Megazine extends Book{
    constructor(title, author, year, month){
        super(title,author,year);
        this.month = month;
    }
}
const mag1 = new Megazine('Mag One', 'Anshuman', 2018, 'Jan');
console.log(mag1);
console.log(mag1.getSummary());