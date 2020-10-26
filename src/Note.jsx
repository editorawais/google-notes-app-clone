import React from 'react';
import './App.css';



const Note = (props) => {

    const deleteI = () =>{
        props.deleteItem(props.id);
    }

    return (
        <>
        <div className="chota_note">
            <form className="f1">
                <h1 className="f2">{props.title}</h1>
                <p className="f2">{props.content}</p>
                <button className="del" onClick={deleteI}>X</button>
            </form>

            
        </div>
        </>
    )
};

export default Note;
