import { Input } from "antd";
import { useContext, useState } from "react";
import { MyContext } from "../App";



export const FormChipInput = ({name, placeholder} : any) => {
    const [input, setInput] = useState("");

    const [tags, setTags]  = useState<any>([]);

    const {state, updateState} : any = useContext(MyContext);

    const handleChange = () => {
        console.log("reaching here...");
        setTags((prevTags : any) => [...prevTags, input]);
        setInput("");
        updateState({...state, [name] : [...tags, input]});

    }

    return (
        <>
          <div className="input-box" style={{display:"flex" }}>
          <Input placeholder={placeholder} value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={handleChange}>Add</button>
          </div>
          
          <div className="tags" style={{display : "flex", gap : "10px"}}>
          {
            tags.map((tag : any) => {
                return (
                    <div key={tag} >{tag}</div>
                )
            })
          }
          </div>
          
        </>
    )
}