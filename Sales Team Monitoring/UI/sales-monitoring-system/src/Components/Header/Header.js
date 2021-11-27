import './Header.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header(props){

    let [role, setRole] = useState(false);
    let [sale, setSales] = useState(false);

    const roles = (role) =>{
        if(localStorage.getItem('role') === 'Admin')
    {
        setRole(true);
    }
    }
    const sales = (sale) =>{
        if(localStorage.getItem('sale') === 'Sales')
    {
        setSales(true);
    }
    }

    useEffect(()=>{
        roles(role);
        sales(sale);
    }, [])
    

    return(
        <header className="header">
            <div className="title">Sales Team Monitoring  System</div>
            <div className="navbar">
                <div className="contentbox">
                    <Link to="/">
                    Home
                    </Link>
                </div>
                
                {localStorage.getItem('mytoken') && role &&
                <div className="contentbox">
                <Link to="/staff-edit">
                    Customer Visit Data
                    </Link>
                </div>}

                {localStorage.getItem('mytoken') && sale &&
                <div className="contentbox">
                <Link to="/sales-coordinator/:id">
                    Coordinator Info
                    </Link>
                </div>}

                {!localStorage.getItem('mytoken') &&
                <div className="contentbox">
                    <Link to = "/login">
                    Login
                    </Link>
                </div>}
                {localStorage.getItem('mytoken') && <div  className="contentbox"><Link onClick={()=>window.location =

                '/login'} to="/login">Logout</Link></div>}
                {!localStorage.getItem('mytoken') &&   <div className="contentbox">
                <Link to = "/register">
                    Register
                </Link>
                </div>}
            </div>

        </header>
    )
}


export default Header;