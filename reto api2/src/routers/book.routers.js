const {Router} = require("express")
const router = Router();
const bookCtrl = require("../controller/book.controller");
const booksCTRL = require ("../controller/books.controller");

router.get("/", bookCtrl.getStart);

router.get("/book", bookCtrl.getBook);

router.get("/book/:id_book", bookCtrl.getBookParams);

router.post("/book", bookCtrl.postBook);

router.put("/book", bookCtrl.putBook);

router.delete("/book", bookCtrl.deleteBook);


////////////////////////////////////////////

router.get("/", booksCTRL.getStartOne);

router.get("/books", booksCTRL.getBookOne);

router.get("/books/:id_book", booksCTRL.getBookParamsOne);

router.post("/books", booksCTRL.postBookOne);

router.put("/books", booksCTRL.putBookOne);

router.delete("/books", booksCTRL.deleteBookOne);


module.exports = router;