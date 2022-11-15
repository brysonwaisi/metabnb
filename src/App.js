import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Places from "./components/pages/places/Places"
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </>
  )
}

export default App
