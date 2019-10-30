// 4. Read books
console.log('4. Read books');
interface Book {
    title: string;
    isRead: boolean;
};

const books: Book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

const isBookRead = (books: Book[], titleToSearch: string): boolean => 
    (books.some(book => book.title === titleToSearch && book.isRead));

console.log('ISBOOKREAD OUTPUT 1 ->',isBookRead(books, "Devastación")); // true
console.log('ISBOOKREAD OUTPUT 2 ->',isBookRead(books, "Canción de hielo y fuego")); // false
console.log('ISBOOKREAD OUTPUT 3 ->',isBookRead(books, "Los Pilares de la Tierra")); // false
    