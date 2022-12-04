import {useState, useContext } from "react";
import Dashboard from "../components/dashboard";
import { EthContext } from '../context/EthState';

const Lend = () => {

    //Form state
    const [form, setForm] = useState({
    username: "",
    amount: "",
    gas: "",
    memo: ""
    })

    //Submit function
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

        //Import context
        const contextValue = useContext(EthContext);
        //Import account from context
        const account = contextValue.account;

    return ( 
        <div className="container">
            <div className="left">
            {account ? 
            <div>
            <form>
            <h2>Lend</h2>
            <p>Lend some USDT to protocol and earn interest in it.</p>
            <p>Current interest rate: 2.2%</p>
            <input type="text"
             onChange = {(e)=> {
                setForm({...form, username: e.target.value})
             }}
             name = "username" placeholder='Enter amount to lend'
             />

            <button onClick={handleSubmit}>Lend</button>
            <button onClick={handleSubmit}>Withdraw</button>
        </form> 
        </div>: (<><button className="metamaskConnect" onClick={(e)=>{contextValue.metamaskConnect(e)}}>Connect to metamask</button><p>You can view your dashboard when connected to metamask</p></>)}
        </div>

        <div className="right">
            {account? <Dashboard /> : (<p></p>)}
        
        </div>
        </div>
     );
}
 
export default Lend;