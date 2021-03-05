let express = require('express');
let router = express.Router();
let mongoose= require('mongoose')
// Junhong Ge 300965466 04 March 2021
// creat a refernce to the model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList)=> {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(BookList);

           res.render('book/list', {title: 'Books', BookList: bookList});
        }
    });
}

module.exports.dispalyAddPage = (req, res, next) => {
    res.render('book/add', {title: 'Add Book'})
}

module.exports.processbAddPage = (req, res, next) => { 
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });

}

/*
Add your code here to display EDIT
*/

module.exports.dispalyEditPage = (req, res, next) => { 
        let id = req.params.id;

        Book.findById(id, (err, bookToEdit) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                //show the edit view
                res.render('book/edit', {title: 'Edit Book', book: bookToEdit});

            }
        });
}
/*
Add your code here to process EDIT
*/

module.exports.processbEditPage = (req, res, next) => { 
    let id = req.params.id;
    
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    
    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }

    });

}

/*
Add your code here to perform DELETE operation
*/
module.exports.performDelet = (req, res, next) => {
    let id = req.params.id;

     Book.remove({_id: id}, (err) => {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             // refresh the book list
             res.redirect('/book-list');
         }
     });

}

