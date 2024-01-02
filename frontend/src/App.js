import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Books from './pages/Books.jsx'
import Add from './pages/Add.jsx'
import Update from './pages/Update.jsx'
import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/"element={<Home/>}/>
        <Route path="/books"element={<Books/>}/>
        <Route path="/add"element={<Add/>}/>
        <Route path="/update"element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
