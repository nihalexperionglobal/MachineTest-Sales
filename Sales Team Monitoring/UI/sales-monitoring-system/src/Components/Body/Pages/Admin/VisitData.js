import {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

import Visits from "./VisitList";

import './VisitData.css';

function VisitList(){


    const [visits, setVisits] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get('http://localhost:5000/visitTables')
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers.
            setVisits(response.data);
        })

    }, [])

    return(
        <div className="visitListBox">
            <h1 className="visitListTitle">
                Visit Count
            </h1>
            <div className="visitListUL">
                {visits.map(visit =>
                    <div key={visit.id} className="visitListLI">
                        <Visits details = {visit} />
                    </div>
                    )}
            </div>

        </div>
    )
}

export default VisitList;