// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react'
import AddTodo from './MyComponents/AddTodo';

function App() {

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title,desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  
  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "go to the Office",
      desc : "You need to go to the Office"
    },
    {
      sno : 2,
      title : "go to the College",
      desc : "You need to go to the College"
    },
    {
      sno : 3,
      title : "go to the School",
      desc : "You need to go to the School"
    },
  ])
  return (
    <div>
      <Header title="My Todos List"  searchBar={false}/>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </div>
  );
}

export default App;
