import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="flex flex-row justify-center min-h-screen font-sans bg-gray-100">
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="flex flex-row justify-center min-h-screen font-sans bg-gray-100">
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
