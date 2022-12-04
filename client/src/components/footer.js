import '../styles/footer.scss'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="items">
            <h5>Total deposited Eth</h5>
            <p>1,234 ETH</p>
            </div>

            <div className="items">
            <h5>Total interest earned</h5>
            <p>$12,345</p>
            </div>

            <div className="items">
            <h5>Total USDT locked</h5>
            <p>$12,345,678</p>
            </div>
        </div>
     );
}
 
export default Footer;