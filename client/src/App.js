import Navbar from "./components/navbar";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/footer";
import './styles/main.scss'
import Borrow from "./pages/Borrow";
import Lend from "./pages/Lend";
import CheckBox from "./components/checkbox";

function App() {
  return (
    
    <div className="App">
      
  
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/borrow' element={<Borrow />} />
        <Route path='/lend' element={<Lend />} />
        <Route path='/about' element={<CheckBox />} />   
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
