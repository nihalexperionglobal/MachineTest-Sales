import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import LoginForm from "../Body/Pages/Login/LoginForm";
import RegistrationForm from "../Body/Pages/Registration/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Body/Home/Home";



import Admin from "../Body/Pages/Admin/Admin";
import SalesCoordinator from "../Body/Pages/SalesCoordinator/SalesCoordinator";
import VisitDetails from "../Body/Pages/Admin/VisitDetails";


function Routers(){

    return(
        <Router>
            <Header />
            
           


            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/visit-details/:id" element={<VisitDetails />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/sales-coordinator/:id" element={<SalesCoordinator />} />
            </Routes>

            <Footer />
        </Router>


    )
}


export default Routers;


