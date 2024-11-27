import React, {useContext, useState} from "react";
import {  Step } from "../types/step";
import { MyContext } from "../App";
import { useNavigate, useParams } from "react-router";




export const FormStep = ({steps} : {steps : Step[]}) => {

    const {state , updateState} : any = useContext(MyContext);

    const {step} = useParams();

    const navigate = useNavigate(); // Hook to programmatically navigate


    const {heading, question, content} = steps[Number(step)];

    const processHeading = () => {
        const regex = /\{([^{}]*)\}/g;
        if(!heading.includes("{"))
        return;
        const words = heading.split(" ");
        for(let i = 0; i < words.length; i++){
            if(words[i].includes("{")){
                const target = regex.exec(words[i]);
                if(target){
                    words[i] = state[target[1]] || "Buddy";
                }
            }
        }

        

        return words.join(" ");
    }
    
    const handleBack = () => {
        if(Number(step) > 0 ){
          navigate(`/home/${Number(step) - 1}`);
        }
    }

    const handleNext = () => {
        console.log("reached.. ", step);
        if(Number(step) < steps.length -1){
            navigate(`/home/${Number(step) + 1}`);
        }
        else {
            navigate("/home/summary");
        }
    }

    return (
        <>
          <h3>{processHeading()}</h3>
          <p>{question}</p>
          {content}
          <div className="buttons" style={{marginTop : "1rem", display : "flex", justifyContent : "space-between"}}>
          <button onClick={handleBack} hidden={Number(step) == 0}>Back</button>
          <p>{`${Number(step) + 1} / ${steps.length}`}</p>
          <button onClick={handleNext}>{ Number(step) === steps.length - 1 ? "Finish" : "Next"}</button>
          </div>
          
        </>
    )
}


