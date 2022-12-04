import {useState, useContext} from 'react'
import Convert from './convert'
import '../styles/form.scss'
import Error from './error'
import {ethers} from 'ethers'
import { EthContext } from '../context/EthState';
import CheckBox from './checkbox'
import eth from '../assets/eth.png'

const Transfer = () => {

    //Form state
    const [form, setForm] = useState({
        username: "",
        amount: "",
        gas: "",
        memo: ""
    })

    //Error state
    const[error, setError] = useState(undefined);

    //Submit function
    const handleSubmit = (e)=>{
        e.preventDefault();

        //Check if any field is empty

        if(!form.username && !form.amount){
            setError(`Ethereum address and amount can't be empty`)
        }
        else if(!ethers.utils.isAddress(form.username)){
            setError('Address type not valid')
        }
        else{
            setError(undefined)
        }

        

        // Use EthState context to pass value
        contextValue.sendBalance(form.username, form.amount)
    }

    //Set USD state
    const [usd, setUsd] = useState(0);

    
    //Import context
    const contextValue = useContext(EthContext);
    //Import account from context
    const account = contextValue.account;
    
    return ( <>
        <form>
            <h2> <img className='icons' src={eth} /> Transfer Ethereum</h2>

            {error ? <Error error={error}/> : (<></>)}

            <div>
            <label className='label' htmlFor="username">Ethereum Address</label><br />
            <input type="text"
             onChange = {(e)=> {
                setForm({...form, username: e.target.value})
             }}
             name = "username"
             />
             </div>

            <div>
            <label className='label' htmlFor="amount">Amount (In ETH)</label><br />
            <div  className='amount'>
            <input type="number"
             onChange = {(e)=> {
                setForm({...form, amount: e.target.value})
                setUsd(e.target.value)
             }}
             name = "amount"
             />
             {/* Calling convert component and passing USD as props  */}
             <span> <Convert amount={usd} /></span>
             </div>
             </div>
             
            <div>
            <label className='label' htmlFor="gas">Select Gas</label><br />
            <CheckBox/>
            <label className='label' htmlFor="gas">High gas fee = Faster transaction</label><br />
             </div>
            

            {account? <button onClick={handleSubmit}>Send</button>:(<button onClick={(e)=>{contextValue.metamaskConnect(e)}}>Connect wallet to transfer</button>)}
        </form>
    </> );
}
 
export default Transfer;