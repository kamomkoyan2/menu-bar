const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload-image');

const cocktails = require("../controllers/cocktails.controller");


//Routes//

 //** Create a cocktail */
router.post('/api/cocktails', upload.single("cocktailImage"), cocktails.create);

//** get cocktails */
router.get("/api/cocktails", cocktails.retriveAllCocktails);


//** Update Cocktails */
router.put("/api/cocktail/:id", cocktails.updateCocktail);

//** Delete Cocktail */
router.delete("/api/cocktail/:id", cocktails.deleteCocktail);





module.exports = router;

