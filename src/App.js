import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import './fonts/ArbFONTS-Tajawal-Regular-1.ttf'
import MyNavbar from './Navbar';
import Home from './Components/home/Home';
import Create from './Components/create/Create';
import BlogDetailes from './Components/bloglist/BlogDetailes';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/create"  element={<Create/>} />
        <Route path="/BlogDetailes/:id"  element={<BlogDetailes/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
