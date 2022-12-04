import '../styles/dashboard.scss'
import {useEffect, useState} from 'react';

const Dashboard = () => {

    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            
            setTimer((prevTimer) => {
                
                if(prevTimer >= 15){
                    return "Block complete"
                }
                if(prevTimer === "Block complete"){
                    return 2;
                }
                return prevTimer + 1
            
            })
            
        }, 1000)        

        return () => clearInterval(interval);
    }, []) 

    //State of Borrow/Lend or Interest paid/Interest earned
    const [interest, setInterest] = useState(true)

    const toggleState = ()=>{
        setInterest(!interest);
    }


    return ( <div className= "dashboard">
        <h3>Dashboard</h3>
        <p className='address'><div className='circle'> </div>{window.ethereum.selectedAddress}</p>
        
        {/* Display card */}
        <div className="display">
        <div className="slider" onClick={toggleState}> <span className='sliderCircle'> &lt; </span></div>
        <div className="valueLoan value">{ interest ? <>Borrowed:  $12,345 <div className='rateLoan'>API: 8.2%</div></> : (<>Interest paid:  $123 <div className='rateLoan'>API: 8.2%</div></>)}</div>
        <div className="valueStake value">{interest ? <>Staked: $2,345 <div className='rateLoan'>API: 6.3%</div> </>: (<>Interest earned: $456 <div className='rateLoan'>API: 6.3%</div> </>)}</div>
        <div className="slider" onClick={toggleState}><span className='sliderCircle'> &gt; </span></div>
        </div>

        <div className='dashboardDesign'><div className='blockTime'><div className='blockTimeCircle'><span className="number">{timer}</span></div></div><p><h4>Ethreum block time</h4> Typically an ethereum transaction takes around 15 seconds to complete, that is blocktime for an ethereum block. Transaction time may vary between 15seconds to 10 minutes based on traffic and gas fee.</p></div>
    </div> );
}
 
export default Dashboard;