import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import ChatInterface from "./components/ChatInterface";
function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chatinterface" element={<ChatInterface />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
