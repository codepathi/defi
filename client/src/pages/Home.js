import Transfer from "../components/transfer"
import Left from "../components/left"
import '../styles/main.scss'
const Home = () => {
    return ( 
        <div className="container">
        <div className="left"><Left /></div>
        <div className="right"><Transfer /></div>
        </div>
     );
}
 
export default Home;