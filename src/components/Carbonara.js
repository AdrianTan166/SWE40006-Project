import React from 'react';
import CookingContainer from './CookingContainer'


function Carbonara() {

    return (
          <div className="cc-centre-div">
              <table className="recipe-table">
                  <tr>
                      <th className="recipe-column">

                        <CookingContainer

                            imgPath="https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/perfect_italiano_fettucine_carbonara.jpg"
                            name="Carbonara"
                            ingredient1 = "500g fettuccine"
                            ingredient2 = "1 large onion"
                            ingredient3 = "300ml thickened cream"
                            ingredient4 = "50g grated parmesan"
                            ingredient5 = "150g sliced button mushrooms"
                            ingredient6 = "1 tbsp olive oil"
                            ingredient7 = "150g shredded bacon"
                            method1 = "Cook pasta for 15 minutes in a large saucepan of salted boiling water."
                            method2 = "Heat a large frypan over high heat. Add oil, onion, bacon and mushrooms. Cook until bacon is golden brown"
                            method3 = "Add cream then bring to boil. Simmer until thickened and add parmesan and pasta. Season with salt and pepper to taste"
                        />

                      </th>
                  </tr>
              </table>
          </div>
        )
}

export default Carbonara