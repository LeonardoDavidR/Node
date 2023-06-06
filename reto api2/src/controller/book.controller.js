const { Book } = require("../models/arrBook");
// let book = null ;
let myArrBook = [];

function getStart(req, res) {
    let book = { error: true, codigo: 200, message: 'Book start' }
    res.send(book)
}

function getBook(req, res) {
    let respuesta;
    if (myArrBook.length > 0) {
        respuesta = myArrBook;
    }
    else {
        respuesta = { error: true, codigo: 200, message: "The book doesnt exist" };

    }
    res.send(respuesta);
}

function postBook(req, res) {
    let respuesta;
    let books = new Book(req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book)
    console.log(req.body)
    myArrBook.push(books);
    respuesta = {
        error: true, codigo: 200,
        message: 'the book have been created', data: books
    }


    res.send(respuesta)
}

function putBook(req, res) {

    let id_book = req.body.id_book;
    let book = myArrBook.find(book => book.id_book == id_book);

    let respuesta;
    if (book) {
        book.title = req.body.title;
        book.author = req.body.author;
        book.price = req.body.price;
        book.type = req.body.type;
        book.id_book = req.body.id_book;
        book.photo = req.body.photo;

        respuesta = {
            error: true, codigo: 200,
            message: "the book have been updated", data: book
        };
    }
    else {
        respuesta = {
            error: true, codigo: 200,
            message: "the book already exist", data: book
        };
    }
    res.send(respuesta);


}

function getBookParams(req, res) {


    let id_libro = req.params.id_book
    let book1 = myArrBook.find(book => book.id_book == id_libro)
    if (book1 != null)
        respuesta = book1
    else
        respuesta = {
            error: true, codigo: 200,
            message: "the book doesnt exist"
        }
    res.send(respuesta);

}

function deleteBook(req, res) {
    let respuesta;
    let id_libro = req.body.id_book;
    let filtrado = myArrBook.filter(book1 => book1.id_book !== id_libro);
    if (myArrBook = filtrado) {
        
        respuesta = {
            error: false, codigo: 200,
            message: "Deleted book", data: myArrBook
        };
    }
    else {
        respuesta = {
            error: true, codigo: 200,
            message: "the book doesnt exist"
        };

    }
    res.send(respuesta);
}

module.exports = { getStart, getBook, getBookParams, postBook, putBook, deleteBook }