import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router'
import Calibrate from "./pages/CalibrationPage/Calibrate"
import HomePage from "./pages/HomePage/HomePage"
import TrackingPage from "./pages/TrackingPage/TrackingPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calibrate" element={<Calibrate />}></Route>
        <Route path="/tracking" element={<TrackingPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
