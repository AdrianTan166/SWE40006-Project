import React from 'react';


function CookingContainerRamen(props) {

    return (

      <div className="ramen-cooking-container">

          <img className="cooking-image" alt="" src={props.imgPath}></img>
          <div className="cc-spacer"/>
          <h1>{props.name}</h1>
          <div className="cc-spacer"/>
          <div className="cc-divider"/>
          <div className="cc-spacer"/>
          <h3>Ingredients: </h3>
          <li>{props.ingredient1}</li>
          <li>{props.ingredient2}</li>
          <li>{props.ingredient3}</li>
          <li>{props.ingredient4}</li>
          <li>{props.ingredient5}</li>
          <li>{props.ingredient6}</li>
          <li>{props.ingredient7}</li>
          <li>{props.ingredient8}</li>
          <li>{props.ingredient9}</li>
          <li>{props.ingredient10}</li>
          <li>{props.ingredient11}</li>
          <li>{props.ingredient12}</li>

          <br/>
          <h3>Methods: </h3>
          <ol>
          <li>{props.method1}</li>
          <li>{props.method2}</li>
          <li>{props.method3}</li>
          <li>{props.method4}</li>
          <li>{props.method5}</li>
          </ol>
      </div>
    )
}

export default CookingContainerRamen