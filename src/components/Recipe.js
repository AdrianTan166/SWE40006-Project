import React from 'react';
import RecipeContainer from "./RecipeContainer";

function Recipe() {

    return (
      <div className="centre-div">
          <table className="recipe-table">
              <tr>
                  <th className="recipe-column">
                    <RecipeContainer
                        linkPath = "/Carbonara"
                        imgPath="https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/perfect_italiano_fettucine_carbonara.jpg"
                        name="Carbonara"
                        cookingTime="40 minutes"
                        difficulty="Easy"
                    />
                  </th>
                  <th className="recipe-column">
                      <RecipeContainer
                          linkPath = "/Ramen"
                          imgPath="https://cdn.concreteplayground.com/content/uploads/2022/05/ramen-unsplash-1920x1440.jpg"
                          name="Ramen"
                          cookingTime="40 minutes"
                          difficulty="Medium"
                      />
                  </th>
              </tr>
          </table>
      </div>
    )
}

export default Recipe
