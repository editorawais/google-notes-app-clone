import React  from 'react';
import './App.css';
import { useState } from 'react';


const Notes = (props) => {

    const [expand, setexpand] = useState(false);
    const [note, setnote] = useState({
        title: "",
        content: "",
    });
    const inputevent =(e) =>{
        const {value,name} = e.target;

        setnote((prev)=>{
            return{
                ...prev, [name] : value,
            };
        });
    };
    const clickme=() =>{
        setexpand(true);
    }; 
    const btonormal=() =>{
        setexpand(false);
    }; 
    const addEvent = (e) =>{
        e.preventDefault();
        props.passNote(note)
        setnote({
            title: "",
            content: "",
        });
    };

    return (
        <>
        <div className="wada_note" onDoubleClick={btonormal}>
            <form className="wada_form">
               {expand? <input className="in" type="text" name="title" value={note.title} onChange={inputevent} placeholder="Title" autoComplete="off" /> : null}
                <textarea className="in" rows="" column="" name="content" value={note.content} autoComplete="off" onChange={inputevent} onClick={clickme}  placeholder="Write a Note" />
                {expand ? <button className="plus" onClick={addEvent}> + </button> : null}
            </form>
        </div>
        
        </>
    )
}

export default Notes;
