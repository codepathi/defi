import '../styles/error.scss'

const Error = ({error}) => {
    return ( 
        // Check if error has value 
        <div className="errorContainer">
            <span className="errorText">{error}</span>
        </div>
     );
}
 
export default Error;