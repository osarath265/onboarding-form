import React, {useState, useContext} from 'react'
import { MyContext } from '../App';


export const Summary = () => {

    const {state, updateState} : any = useContext(MyContext);

    console.log("final state", state);
    return (
        <div style={{display : "flex", flexDirection : "column"}}>
        <div>Hey {state?.name}</div>
        <div> Your expertise is </div>
        <div> 
            {
                Object.entries(state.expertise).map((expertise: any, value : any ) => {
                    return (
                        value ? <div>{expertise}</div> : null
                    )
                })
            }
        </div>
        <div> Your collaborators are </div>
        <div className='tags' style={{display: "flex", gap : "10px"}}>
            {
                state?.collaborators?.map((collaborator : any) => {
                    return (
                        <div>{collaborator}</div>
                    )
                })
            }
        </div>
        </div>
    )
}