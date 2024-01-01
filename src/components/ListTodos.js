import { AiOutlineClose } from "react-icons/ai";

 
const ListTodos = ({ todos,RemoveTodo }) =>{
    const something = (todo) => {
        RemoveTodo(todo.id);
    }  
    console.log('todo', todos);
    return <ol style={{ border:"2px solid yellow "}}>
     {todos && todos.map((todo) => {
        
        return (
           
        <div key ={todo.id} >
            <li style={{margin: '0 0 10px 98px'}}>
                <span>
                {todo.id} 
                </span>
                <span style={{margin: '0 0 0 10px'}}>
                {todo.title}
                </span>
                <span> 
                <AiOutlineClose onClick={()=> something(todo)} style={{ verticalAlign:'middle' ,cursor: 'pointer',margin: '0 0 0 10px',fontSize: '16px', background: 'red', color: 'white' }} />
                </span>
            </li>
        </div>
        )
     })}
    
    </ ol>
}
export default ListTodos;