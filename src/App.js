import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Notes from './Notes';
import Note from './Note';

function App() {
  const [additem, setadditem] = useState([])

  const addEvents = (note) => {
    setadditem((prev)=>{
      return [...prev, note]
    });
  };
    const onDelete= (id) =>{
      setadditem((old) =>
        old.filter((curData,index)=>{
          return index !==id;
        })
      ); 
  };
  return (
    <>
    <Header />
    <Notes passNote = {addEvents}/>
    <div className="grid">
    {additem.map((val,index)=>{
      return (<Note 
      key= {index}
      id= {index}
      title={val.title}
      content = {val.content}
      deleteItem ={onDelete}
      />);
    })}
    </div>

    
    </>
  );
};

export default App;
