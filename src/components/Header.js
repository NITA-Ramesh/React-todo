
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import ChatDialog from './ChatDialog';



const Header = () => {
  return (
    <>
    <header className="flex-container">
        <h1 className="flex-item">Task Tracker</h1>
        <h1 className="flex-item">NO</h1>
        <h1 className="flex-item">YES</h1>
    </header>
    <header className="grid-container">
    <h1 className="grid-item">Task Tracker</h1>
    <h1 className="grid-item">NO</h1>
    <h1 className="grid-item">YES</h1>
    </header>
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
    <IoMenu style={{ fontSize: '50px', color: 'red' }} />
    <AiOutlineClose style={{ fontSize: '50px', background: 'red', color: 'white' }} />
    <ChatDialog />
</>

  )
}

export default Header