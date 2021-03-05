let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Book = require('../models/book');
let bookController = require('../controllers/book');



/* GET Route for the book List page - Read Operation */
router.get('/', bookController.displayBookList);

// 

/* GET Route for displaying the Add page - CREATE Operation */ 
router.get('/add', bookController.dispalyAddPage);

/* POST Route for processing the Add page - CREATE Operation */ 
    router.post('/add', bookController.processbAddPage); 


/* GET Route for displaying the Edit page - UPDATE Operation */ 
    router.get('/edit/:id', bookController.dispalyEditPage); 

       
/* 
* add your code to 
* POST Route for processing the Edit page - UPDATE Operation 
*/

/* POST Route for processing the Edit page - UPDATE Operation */ 
    router.post('/edit/:id', bookController.processbEditPage); 


    /* add your code to 
*  GET to perform  Deletion - DELETE Operation 
*/

/* GET to perform Deletion - DELETE Operation */ 
    router.get('/delete/:id', bookController.performDelet);  




    
module.exports = router;




