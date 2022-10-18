import React from 'react';
import { Link } from "react-router-dom";

function RecipeContainer(props) {

    return (

      <div className="recipe-container">
          <Link to = {props.linkPath} >
            <img className="recipe-image" alt="" src={props.imgPath}/>
          </Link>
          <div className="spacer"/>
          <h1>{props.name}</h1>
          <div className="spacer"/>
          <div className="divider"/>
          <div className="spacer"/>
          <h3>Time: {props.cookingTime}</h3>
          <h3>Difficulty: {props.difficulty}</h3>
      </div>
    )
}

export default RecipeContainer
