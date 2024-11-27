import React, {useState} from "react";

import { Step } from "../types/step"
import { FormStep } from "./FormStep";




export const Form  = ( {steps} : {steps : Step[] })=> {


    return (
        <>
        {
           steps.map((step : Step, index : number)  => {
             return (
                <FormStep key = {index} steps={steps} /> 
                
             )
           } )
        }
        </>
    )


}



/// Approach 1 

/// loop steps and load each step in the form and toggle visibility


/// Approach 2
/// step = 2 is captured from route and then loaded accordingly.. 
/// back and next buttons should update the route path 
///