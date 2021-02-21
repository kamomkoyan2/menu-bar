const pool = require("../config/db");

exports.create = async (req, res) => {
   try {
      let {title, description, image_path, price, ingredients} = req.body;
      image_path = req.file.originalname;
      const newCocktail = await pool.query(
         "INSERT INTO cocktail (title, description, image_path, price, ingredients) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [title, description, image_path, price, ingredients],
      );

      res.json(newCocktail.rows[0]);
   } catch(error) {
      console.error(error.message);
   }

}


exports.retriveAllCocktails = async (req, res) => {
   try {
      const allcocktails = await pool.query("SELECT * FROM cocktail");
      res.json(allcocktails.rows);
   } catch(error) {
      console.error(error.message);
   }
}

exports.updateCocktail = async (req,res) => {
   try {
      const { id } = req.params;
      const { description, price, ingredients  } = req.body;
      await pool.query("UPDATE cocktail SET description = $1, price = $2, ingredients = $3  WHERE cocktail_id = $4",
      [  description, price, ingredients, id ]);
      res.json( "cocktail was updated")
   } catch(error) {
      console.error(error.message);
   }
}


exports.deleteCocktail = async ( req,res ) => {
   try {
      const { id } = req.params;
      await pool.query("DELETE FROM cocktail WHERE cocktail_id = $1", [
         id
      ])
      res.json("cocktail was deleted!");
   } catch(error) {
      console.error(error.message);
   }
}




