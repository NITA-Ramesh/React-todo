import { AiOutlineClose } from "react-icons/ai";
import './MyTable.css';

 
const ListTodos = ({ todos,RemoveTodo }) =>{
    const something = (todo) => {
        RemoveTodo(todo.id);
    }  
    console.log('todo', todos);
    return (
    <table className="my-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>button</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
                <AiOutlineClose onClick={()=> something(todo)} style={{ verticalAlign:'middle' ,cursor: 'pointer',margin: '0 0 0 10px',fontSize: '16px', background: 'red', color: 'white' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}
export default ListTodos;