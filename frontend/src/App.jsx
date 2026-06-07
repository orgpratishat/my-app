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
import SignUp from "./pages/SignUp";
import ResearchAI from "./pages/ResearchAI";

import IsAuthenticated from "./components/IsAuthenticated";
function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />

      
        <Route path="/ai" element={<ResearchAI />} />
        <Route path="/dashboard" element={
          <IsAuthenticated>
            <Dashboard />
          </IsAuthenticated>
        }
      />

<Route path="/studio" element={
          <IsAuthenticated>
            <ProjectManagementDashboard />
          </IsAuthenticated>
        }
      />
       
       <Route path="/proposal" element={
          <IsAuthenticated>
            <Proposal />
          </IsAuthenticated>
        }
      />

<Route path="/survey" element={
          <IsAuthenticated>
            <Survey />
          </IsAuthenticated>
        }
      />

<Route path="/research" element={
          <IsAuthenticated>
            <Research />
          </IsAuthenticated>
        }
      />

<Route path="/survey-builder" element={
          <IsAuthenticated>
            <QuestionnaireBuilder />
          </IsAuthenticated>
        }
      />
       

        <Route path="/profile" element={
         
            <ProfilePage />
          
        }
      />
      </Routes>
    </Router>
    </>
  )
}

export default App
