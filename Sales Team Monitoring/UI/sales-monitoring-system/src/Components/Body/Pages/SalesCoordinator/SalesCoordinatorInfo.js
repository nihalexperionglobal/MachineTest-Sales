import { useState, useEffect } from "react";
import axios from "axios";
import SalesCoordinator from "./SalesCoordinator";



function SalesCoordinatorInfo(props){

    const [inputs, setInputs] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:3010/users/${props.id}`)
            .then(response => {
                console.log(response)
                setInputs(response.data)
            })
    }, []);

    return(
        <>
        <h1>Coordinator Info</h1>
        <h2>First Name: {inputs.firstname}</h2>
        <h2>Last Name: {inputs.lastname}</h2>
        <h2>Mobile No: {inputs.phone}</h2>
        <h2>Email Id: {inputs.email}</h2>
        </>
    )

}

export default SalesCoordinatorInfo;