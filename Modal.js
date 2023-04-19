import React from "react" ;
import "./Modal.css"; 

const Modal = (props)=>{
    return (
        <div className="background">
            <div className="overlay">{props.children}</div>
        </div>
    )

};

export default Modal ;