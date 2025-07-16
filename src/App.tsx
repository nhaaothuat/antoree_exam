import { Route, Routes } from "react-router"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import History from "./components/History"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
