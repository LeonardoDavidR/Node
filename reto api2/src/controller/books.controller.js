const {Book} = require("../models/arrBook")
// let book = null ;
let book = new Book(); 

function getStartOne(req , res){
    let book = {error: true, codigo: 200, message: 'Book start'}
    res.send(book)
}

function getBookOne(req, res){
    let respuesta;
    if(book != null){
        respuesta = book;
    }
    else
        respuesta = {error: true , codigo : 200, mensaje : "The book doesnt exist"};
        
    
    res.send(respuesta);
}

function postBookOne(req , res){
    let respuesta; 
    console.log(req.body)
    if(book === null)
    {
        book = { title: req.body.title,
            type: req.body.type,
            author: req.body.author,
            price: req.body.price,
            photo: req.body.photo,
            id_book: req.body.id_book };

            respuesta = {error : false, codigo: 200,
                        message: 'the book have been created', data : book}
    }
    else
        respuesta = {error : true, codigo : 200,
                    message : "the book already exist"}
    
    res.send(respuesta)
}

function putBookOne(req, res){
    let respuesta;
    if(book != null){
        book.title = req.body.title;
        book.author = req.body.author;
        book.price = req.body.price;
        book.type = req.body.type;
        book.id_book = req.body.id_book;
        book.photo = req.body.photo;

        respuesta = {error: true, codigo : 200,
                    message: "the book have been updated", data : book};
    }
    else{
        respuesta = {error : true, codigo: 200,
                    message : "the book already exist", data : book};
    }
    res.send(respuesta);
}

function getBookParamsOne(req, res){
    let id_book = req.params.id_book
    if(book != null && id_book === book.id_book){
        res.send({error : false, codigo: 200 , data : book})
    }
    else
    {
        res.send({error : true, codigo : 200, mensaje: "The book doesnt exist"})
    }
}

function deleteBookOne(req, res){
    let respuesta
    if(book != null){
        book = null;
        respuesta = {error : false, codigo: 200,
                    message : "Deleted book", data : book};
    }
    else{
        respuesta = { error : true, codigo : 200,
                    message : "the book doesnt exist", data : book};

    }
    res.send(respuesta);
}
module.exports = {getStartOne, getBookOne, postBookOne, putBookOne, getBookParamsOne, deleteBookOne};