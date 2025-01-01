import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Notfund =()=>{
    let history = useHistory()
    setTimeout(()=>{
        history.push('/')
        window.location.reload()
    },2000)
    return ( 
        <div className="notFund">
            <h1>page is not fund :404</h1>
        </div>
     );
    }
 
export default Notfund ;