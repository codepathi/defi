import { createContext, useState } from "react";

export const EthContext = createContext();


export const EthProvider = (props) => {
    
    //Send ethereum transactions
    const sendBalance = async (_to, _value) => {
        const weiValue = _value*10000000000000000;
        const params = [{
            from:'0xDc83312BAbAF0428D199167Fa133218E9968f603',
            to: _to,
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(weiValue).toString(16)
        }]
        const transactions = await window.ethereum.request({ method: 'eth_sendTransaction', params })
    }

    //Check metamask connection

    // Create metamask state
    const [account, setAccount] = useState(undefined);

    //Metamask connection function
    const metamaskConnect = async (e) => {
        e.preventDefault();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts)
    }

    return ( 
            <EthContext.Provider value={{sendBalance, metamaskConnect, account}}>
            { props.children }
            </EthContext.Provider>
     );
}
 