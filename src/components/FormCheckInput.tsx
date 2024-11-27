import React, {useContext, useState} from "react";
import { MyContext } from "../App";


export const FormCheckInput = ({name, placeholder, categories} : any) => {

    const {state, updateState} : any = useContext(MyContext);

    console.log("state", state);

    const [input, setInput] = useState<any>(state[name] || {});

    const handleSelection = (e : any) => {
        console.log("setting state", state);
        setInput((prev : any) => ({...prev, [e.target.name] : !input[e.target.name]}));
        updateState({...state, [name] : {...input, [e.target.name] : !input[e.target.name]}});
    }

    return (
        <div style={{display : "flex" , gap : "5px"}}>
          {
            categories.map((category : any) => {
                return (
                    <div key={category}>
                        <input type="checkbox" id={category} name={category} checked = {input[category]} onChange={handleSelection} value={input[category]}/>
                        <label htmlFor={category}>{category}</label>
                    </div>
                )
            })
          }
        </div>
    )
}