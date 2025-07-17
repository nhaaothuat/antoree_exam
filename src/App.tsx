import { Route, Routes } from "react-router"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import History from "./components/History"
import FilterProduct from "./components/FilterProduct"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>} />
        <Route path="/search" element={<FilterProduct/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
