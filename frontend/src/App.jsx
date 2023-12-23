import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      <Footer />

    </div>
  )
}

export default App
