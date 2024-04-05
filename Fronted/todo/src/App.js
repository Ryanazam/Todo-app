
import {Routes,Route} from "react-router-dom";
import AddTodo from "../src/page/AddTodo.jsx"
import ShowTodo from "../src/page/ShowTodo.jsx";
import Navbar from "./page/Navbar.jsx";
import Home from "./page/Home.jsx";


function App() {

  return (
    <div>

<Navbar></Navbar>
    <Routes>

    <Route path="/" element={<Home></Home>}></Route>
      <Route path="/addtodo" element={<AddTodo></AddTodo>}></Route>
      <Route path="/showtodo" element={<ShowTodo></ShowTodo>}></Route>

    </Routes>


     
    
     
    </div>
  );
}

export default App;
