function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let book1 = new Book("Harry Potter", "JK Rowling", 100);
let book2 = new Book("Random book1", "Random author1", 400);
let book3 = new Book("Random book2", "Random author2", 800);

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
}
function addBook (bookarray, bookInfo){
    bookarray.push(bookInfo)
    return bookarray
}
function searchBookAuthor(bookarray, title){
    let i = 0;
    while (true){
        if (bookarray[i]["title"] == title){
            return bookarray[i];
        } else{
            i++;
        }

    } 

}
function filterBook(bookarray){
    let filtered_book = bookarray.filter((book) => book.pages <= 100);
        return filtered_book;

}
function mapBook(bookarray) {
    let mappedBook = bookarray.map((book) => book.title);
    let mappedBook2 = bookarray.map((name) => name.author);

    return mappedBook, mappedBook2
}
book1.displayInfo();
let bookarray = [];
addBook(bookarray, book1)
book2.displayInfo();
addBook(bookarray, book2);
book3.displayInfo();
addBook(bookarray, book3);
console.log(bookarray);

let search = searchBookAuthor(bookarray, "Random book1");
console.log(search);

let filter = filterBook(bookarray);
console.log(filter);

function mapBook(bookarray) { 
    let mappedBook = bookarray.map((book) => book.title); 
    let mappedBook2 = bookarray.map((book) => book.author); 
    
    return [mappedBook, mappedBook2]; 
} 

let [mappedNames, mappedAuthors] = mapBook(bookarray); 
console.log(mappedNames); 
console.log(mappedAuthors); 



function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let account1 = new Account(15, 5000, "Ron")
let account2 = new Account(16, 1000, "Rick")


Account.prototype.deposit = function(deposit) {
    this.balance = this.balance + deposit;
    console.log("New Balance", this.balance);
}
Account.prototype.withdraw = function(withdraw) {
    if (withdraw > this.balance){
        console.log("Insufficient funds!")
    }else{
        this.balance = this.balance - withdraw;
        console.log("New Balance", this.balance);
    }
}
Account.prototype.interest = function() {
    let totalInterestSummary = this.balance * .05
    this.balance = this.balance + totalInterestSummary
    console.log("Balance summary after interest:", this.balance)
}

account1.deposit(5000);
account2.withdraw(500);

account1.interest();