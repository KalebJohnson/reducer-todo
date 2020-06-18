
import React from "react";
import { rubberBand } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import FadeIn from "react-fade-in";
import fadeIn from "react-animations/lib/fade-in";

const yeet = {
    root: {
      ":hover": {
        Color: "white",
        animation: '1 2s',
      animationName: Radium.keyframes(rubberBand, 'rubberBand')
      }
  }}

const Todo = props => {

    return (
        
        <FadeIn>
        <div style={{ textDecoration: `${props.item.completed ? "line-through red" : "none"}`, color: `${props.item.completed ? " red" : "green"}`, transition:`${props.item.completed ? " 2s" : "none"}`  }}>
            <p>{props.item.task}</p>
        </div>
        </FadeIn>

        
    );
};

export default Todo;