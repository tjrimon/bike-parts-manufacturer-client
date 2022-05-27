import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Registration from "./components/Pages/Login/Registration";
import Purchase from "./components/Pages/Parts/Purchase";
import RequireAuth from "./components/Pages/Login/RequireAuth";
import NotFound from "./components/Shared/NotFound/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyOrder from "./components/Pages/Parts/MyOrder";
import Review from "./components/Pages/Home/Review/Review";
import MyReview from "./components/Pages/MyReview/MyReview";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route
          path="purchase/:itemsId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route
          path="registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="*"
          element={<NotFound></NotFound>}
        ></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
