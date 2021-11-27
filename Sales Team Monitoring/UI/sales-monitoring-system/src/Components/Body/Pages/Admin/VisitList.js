import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";


import './VisitData.css';



function Visits(props){
    console.log(props);
    const navigate = useNavigate();
    const deleteVisit = (id) =>{

        return axios.delete(`http://localhost:5000/visitTables/${id}`)
                    .then(response => console.log("Delete Successful"))
                    .catch(error => console.log("Error using delete operation"));
    }
    
    
    return(
        <>
        <h4>Visit id: {props.details.id}</h4>
        <h4>Customer Name: {props.details.cust_name}</h4>
        <h4>Contact Person: {props.details.contact_person}</h4>
        <Link to={`/visit-details/${props.details.id}`}>View Details</Link><br/><br/><br/>
        <button className="btnList btnA" onClick={() => deleteVisit(props.details.id)}>Delete Visit</button>
        {/* <button className="btnList btnB" type="button" onClick={()=>navigate(`/staffedit/${props.details.id}`)}>Edit User</button> */}
        </>
    )
}
export default Visits;