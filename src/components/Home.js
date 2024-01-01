import AddToDo from './AddToDo';
import Header from './Header';
import React, { useEffect, useState } from 'react';
import ListTodos from './ListTodos';



const Home = () => {
    const [todos, setTodo] = useState( () =>{ 
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
      });
      const AddTodo = (value) =>{
        if(!value){
            alert('Please enter a value');
            return;
        }
        setTodo([...todos,
             {id: Math.floor(Math.random() * 100) + 1 ,
             title: value}])
      }
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
      const RemoveTodo = (id) =>{
        setTodo(todos.filter((todo) => todo.id !== id));
      }
    return (
        <div className="container">
            <Header />
            <AddToDo AddTodo= {AddTodo} />
            <ListTodos todos={todos} RemoveTodo = {RemoveTodo} />
        </div>
    )
}

export default Home;