import React from 'react';

 
function RecipeContainer(props) {

    return (
        
      <div className="recipe-container">
          <img className="recipe-image" alt="" src={props.imgPath}/>
          <div className="spacer"/>
          <h1>{props.name}</h1>
          <div className="spacer"/>
          <div className="divider"/>
          <div className="spacer"/>
          <h2>Time: {props.cookingTime}</h2>
          <h2>Difficulty: {props.difficulty}</h2>
      </div>
    )
}

export default RecipeContainer
