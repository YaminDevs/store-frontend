import { useState } from "react"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
    </>
  )
}

export default App
