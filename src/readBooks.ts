// 4. Read books
interface Book {
    title: string;
    isRead: boolean;
};

const books: Array<Book> = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

const isBookRead = (books: Array<Book>, titleToSearch: string): boolean => 
    (books.some(book => book.title === titleToSearch && book.isRead));

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
    