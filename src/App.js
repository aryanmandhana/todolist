import React, { useState } from "react";
import TodoList from "./components/todolist";
import AddItem from "./components/additem";

import "./App.css";

const App = () => {

    const [listitems, setListItems] = useState([

        { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Buy Food" },
        { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Watch Television" },
        { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Study" }
    ]);


    // const listitems = ;

    const addItemHandler = (newitem) => {

        setListItems((previousList) => {
            return previousList.concat(newitem);
        });
        // listitems.push(newitem);
        // console.log(listitems);
    };

    const name = "MERN";
    return (
        <div className="container">
            <h1>{name} To-Do List</h1>
            <AddItem onAddItem={addItemHandler} />
            <TodoList list={listitems} />
        </div>
    );
};

export default App;