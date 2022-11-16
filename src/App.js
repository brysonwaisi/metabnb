import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import PlacesToStay from "./components/pages/places/PlacesToStay"
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placestostay" element={<PlacesToStay />} />
      </Routes>
    </>
  )
}

export default App
