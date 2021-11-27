
import { useParams } from "react-router-dom"
import SalesCoordinatorInfo from "./SalesCoordinatorInfo";


function SalesCoordinator(){

    const { id } = useParams()

    return(
        <>
        <SalesCoordinatorInfo id={id} />
        </>
    )
}


export default SalesCoordinator;