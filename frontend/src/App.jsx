import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";

import Dashboard from "./components/Dashboard";
import ProjectManagementDashboard from "./pages/ProjectManagementDashboard";
import Proposal from './pages/Proposal'
import Survey from "./pages/Survey";
import Research from "./pages/Research";
import QuestionnaireBuilder from "./pages/QuestionnaireBuilder";
import ProfilePage from "./pages/ProfilePage";
function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studio" element={<ProjectManagementDashboard />} />

        <Route path="/proposal" element={<Proposal />} />
        <Route path="/survey" element={<Survey />} />

        <Route path="/research" element={<Research />} />
        <Route path="/survey-builder" element={<QuestionnaireBuilder/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
