
import './App.css'
import'./Components/Style.css';

// import Footer from './Components/Fotter'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
import { Profile } from './Components/Profile'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Section2 from './Components/Section2';
import Signup from './Components/Signup';
// import Cards from './Components/Cards';



function App() {

  return (
    <>
    {/* <Home/> */}

    <Router basename="/Dribble">
    {/* <Navbar/> */}
        {/* <Signup/> */}
      <Routes>
        <Route path='/Dribble' element={<Signup/>}/>

        <Route path='/home'  element={<Home />}/>
        <Route path='/profile' element={<Profile  />}/>
        <Route path='/section' element={<Section2/>}/>
       

      </Routes>
    {/* <Footer/> */}
    </Router>

    </>
  )
}

export default App
