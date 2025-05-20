import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import  Home  from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Game from './components/Game'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/game' element={<Game />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
