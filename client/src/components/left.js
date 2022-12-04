import '../styles/left.scss'
import borrow from '../assets/borrow.png'
import stake from '../assets/stake.png'

const Left = () => {
    return ( 
    <div className="left">
        <div className="borrow">
    <h3> <img className='icons' src={borrow} /> Borrow</h3>
    <p>Deposit Ethereum as collateral and borrow USDT. Borrow rate is <span>8%</span>. Rates are dynamic and subject to change according to amount of ethereum staked in the pool. <span>Assest will be liquidated if interest not paid on time or value of collateral drops below borrow rate.</span></p>
    <button>Borrow</button>
    </div>

    <div className="stake">
    <h3> <img className='icons' src={stake} /> Stake</h3>
    <p>Stake USDT and earn interest. Stake rate is <span>7.5%</span>. Rates are dynamic and subject to change according to amount of ethereum staked in the pool.. Interest is paid automatically every week in ethereum account.</p>
    <button>Stake</button>
    </div>
    
    </div> );
}
 
export default Left;