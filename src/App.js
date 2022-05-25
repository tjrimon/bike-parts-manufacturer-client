import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Registration from "./components/Pages/Login/Registration";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
