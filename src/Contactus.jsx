import { useLocation, useParams } from "react-router-dom"

function Contactus(){
    let {id, name} = useParams();
    // let routeparams = useParams();
    // console.log(routeparams);
    // console.log(routeparams.id);
    // console.log(routeparams.name);
    return(
        <>
        <h1>This is Contact Us page</h1>
        <p>User id:{id}</p>
        <p>User name:{name}</p>
        </>
    )
}
export default Contactus