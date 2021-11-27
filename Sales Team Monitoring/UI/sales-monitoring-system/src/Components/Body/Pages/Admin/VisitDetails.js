import {useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


function VisitDetails(){
   
    const [visits, setVisits] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/visitTables/${id}`)
              .then(response => {
                  console.log('Promise was fullfilled');
                  console.log(response);
                  setVisits(response.data)
              })
    }, [])


    return(
        <div className="visitListBox">
        <div className="visitListUL">
            <div className="visitListLI">
        <h1>Visit Details</h1>
        <h2>Customer Name: {visits.cust_name}</h2>
        <h2>Contact Person: {visits.contact_person}</h2>
        <h2>Contact No: {visits.contact_no}</h2>
        <h2>Interested Product: {visits.interest_product}</h2>
        <h2>Visit Subject: {visits.visit_subject}</h2>
        <br/>
        <Link to={'/admin'}>Go Back</Link><br/>
        </div>
        </div></div>
    )
}

export default VisitDetails;