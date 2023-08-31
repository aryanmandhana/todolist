import React from "react";
import "./additem.css";


const AddItem = (props) => {
    let entry = "";
    const submitHandler = (event) => {
        event.preventDefault();
    
        const newitem = {
            itemid: Math.trunc(Math.random() * 100 + 1),
            itemname: entry,
        };
        props.onAddItem(newitem);
    };
    const entryHandler = (event) => 
    {
        entry = event.target.value;
    };
    return (
        <form className="form" onSubmit={submitHandler}>
            <input type="text" onChange={entryHandler} />
            <button type="submit">ADD</button>
        </form>
    );
};

export default AddItem;