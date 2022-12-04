import axios from 'axios';
import { useEffect, useState } from 'react';

const Convert = ({amount}) => {

    const [prices, setPrices] = useState(0)
    
    //API status
    const [api, setApi] = useState(false)


    useEffect(()=>{
        const price = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res)=>{
        setPrices(res.data[0].current_price)
        setApi(true)
    })
    }, [])
    
    const value = prices*amount;

    return ( 
        <>
        {api? `${value.toFixed(2)} USD` : <span>Converting...</span>}
        </>
     );
}
 
export default Convert;