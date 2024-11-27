import React, {useContext, useState} from "react";
import { MyContext } from "../App";


export const FormCheckInput = ({name, placeholder, categories} : any) => {

    const {state, updateState} : any = useContext(MyContext);

    console.log("state", state);

    const [input, setInput] = useState<any>(state[name] || {});

    const handleSelection = (e : any) => {
        console.log("setting state", state);
        setInput({...input, [e.target.name] : true});
        updateState({...state, [name] : {...input, [e.target.name] : true}});
    }

    return (
        <div style={{display : "flex" , gap : "5px"}}>
          {
            categories.map((category : any) => {
                return (
                    <div key={category}>
                        <input type="checkbox" id={category} name={category} checked = {input[category]} onChange={handleSelection}/>
                        <label htmlFor={category}>{category}</label>
                    </div>
                )
            })
          }
        </div>
    )
}