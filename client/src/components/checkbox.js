import '../styles/checkbox.scss'

const CheckBox = () => {

    return ( <div className="containerCheckbox">

        <div className="options">
        <input className='checkBox' type="radio" value="high" name="checkbox" defaultChecked/>
        <label htmlFor="high">High</label>
        </div>
        
        <div className="options">
        <input className='checkBox' type="radio" value="medium" name="checkbox" />
        <label htmlFor="high">Medium</label>
        </div>
        
        <div className="options">
        <input className='checkBox' type="radio" value="low" name="checkbox" />
        <label htmlFor="high">Low</label>
        </div>

    </div> );
}
 
export default CheckBox;