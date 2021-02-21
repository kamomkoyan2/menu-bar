import react, { useLayoutEffect, useState } from "react";

const ListCocktails = ( props ) => {
   const [ isTruncated, setIsTruncated ] = useState(true);

   

   const { cocktails } = props;
   if (!cocktails || cocktails.length === 0) return <p className="no-cocktails">There arn't Cocktails </p>;
   

   const linkName=readMore?'View Less << ':'View More >>'
   //console.log(cocktails);
   return (
      <div>
         <h2 className='list-head'> Available Cocktail lists</h2>
         {cocktails.map((cocktail) => {
            const extraContent = 
               <div> 
                  <p className="extra-content"><h5 className="description-view">Description:</h5>{cocktail.description}</p>
                  <p className="extra-content"><h5 className="ingredients-view">Ingredients:</h5>{cocktail.ingredients}</p>
                </div>
            return (
               <div key={cocktail.cocktail_id} className='list'>
                  <div className="column">
                     <div className="card">
                        <span className='cocktail-title'>{cocktail.title}</span>
                        <div className="card-image"><img src={cocktail.image_path}></img></div>
                        <span className='cocktail-price'>{"$"+ cocktail.price}</span>
                        <div className="read"> 
                           <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                           {readMore && extraContent}
                     </div>
                     </div>

                  </div>
               </div>
            );
         })}
      </div>
   )
}

export default ListCocktails;