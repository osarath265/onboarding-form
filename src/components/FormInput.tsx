import React, {useContext, useState} from "react";

import Input from "antd/es/input/Input";
import { MyContext } from "../App";


export const FormInput = ({name, placeholder} : any) => {

    const {state, updateState} : any = useContext(MyContext);
    
    const [input, setInput] = useState(state[name] || "");

    const onChange = (e : any) => {
        setInput(e.target.value);
        updateState({...state, [name] : e.target.value});

    }

    return (
        <Input onChange={onChange} value={input} placeholder={placeholder}></Input>
    )

}