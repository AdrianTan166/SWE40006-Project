import React from 'react';
import CookingContainerRamen from './CookingContainerRamen'


function Ramen() {
        return (
                  <div className="ramen-cc-centre-div">
                      <table className="recipe-table">
                          <tr>
                              <th className="recipe-column">

                                <CookingContainerRamen

                                    imgPath="https://cdn.concreteplayground.com/content/uploads/2022/05/ramen-unsplash-1920x1440.jpg"
                                    name="Ramen"
                                    ingredient1 = "1 tsp sesame oil"
                                    ingredient2 = "1 tsp olive oil"
                                    ingredient3 = "2 cloves garlic, minced"
                                    ingredient4 = "2 tsp freshly grated ginger"
                                    ingredient5 = "1/2 cup shiitake mushrooms, sliced"
                                    ingredient6 = "4 cups Chicken or vegetable broth"
                                    ingredient7 = "1 tbsp rice vinegar"
                                    ingredient8 = "3 tbsp low-sodium soy sauce"
                                    ingredient9 = "500g Ramen"
                                    ingredient10 = "1 soft boiled egg"
                                    ingredient11 = "Sliced scallions"
                                    ingredient12 = "Sesame seeds"
                                    method1 = "Heat a medium sized saucepan and add sesame oil, olive oil, garlic and ginger. Fry until fragrant."
                                    method2 = "Add mushrooms until soften."
                                    method3 = "Once mushrooms soften, add broth, rice vinegar and soy sauce. Simmer for 5 minutes."
                                    method4 = "Cook ramen noodles in a separate saucepan, drained and put ramen noodle into a bowl."
                                    method5 = "When ramen soup is ready, add to the boil and garnish with soft boiled egg and scallions."
                                />

                              </th>
                          </tr>
                      </table>
                  </div>
                )

}

export default Ramen