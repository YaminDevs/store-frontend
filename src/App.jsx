import { useState } from "react"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/checkout" element={<div>Checkout</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
    </Router>
  )
}

export default App
