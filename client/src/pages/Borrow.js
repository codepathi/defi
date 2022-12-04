import { useState, useContext } from "react";
import Dashboard from "../components/dashboard";
import { EthContext } from '../context/EthState';

const Borrow = () => {

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
            
            <h1>Borrow</h1>
            <p>Borrow USDT with ethereum as collateral.</p>
            <p>Current interest rate: 4.2%</p>
            <label htmlFor="username" className='label'>Amount to borrow</label>
            <input type="text"
             onChange = {(e)=> {
                setForm({...form, username: e.target.value})
             }}
             name = "username" placeholder="In USD"
             />

            <button onClick={handleSubmit}>Borrow</button>
            <button onClick={handleSubmit}>Repay</button>
        </form> 
        {/* styling in left.scss file */}
        </div>: (<><button className="metamaskConnect" onClick={(e)=>{contextValue.metamaskConnect(e)}}>Connect to metamask</button><p>You can view your dashboard when connected to metamask</p></>)}
        </div>

        <div className="right">
            {account? <Dashboard /> : (<></>)}
        
        </div>
        </div>
     );
}
 
export default Borrow;