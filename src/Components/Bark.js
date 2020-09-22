import React, { useState } from "react"

export const Bark = (props) => {
    const [bigContent,setBigContent] = useState(true) 

    const focusContent = event =>{
        event.preventDefault();
        const {target} = event
        setBigContent(!bigContent)
        if(bigContent) target.className = "big-content"
        else if(!bigContent) target.className = "regular-content"
      
    }

   

    return (
        <div id={props.id} className="bark">
            <button className="delete" onClick={props.deleteHandler}>X</button>
            <h4>{props.name}</h4>
            <textarea readOnly={1} className="regular-content" onClick={focusContent} defaultValue={props.content}></textarea>
 <div className = "comments"></div>
        </div>
    )

}

