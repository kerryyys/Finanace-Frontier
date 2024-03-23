import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// Right now this page is using App.css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ChallengePage from "./pages/ChallengePage";
import CommunityPage from "./pages/CommunityPage";
import NewsPage from "./pages/NewsPage";
import GoalPage from "./pages/GoalPage";
import AboutPage from "./pages/AboutPage";
import BeginnerLevelPage from "./pages/BeginnerLevelPage";

function App() {
  return (
    // If want add component just use <component function name></component function name>
    <Router>
      {/* Replace this nav with the NavBar component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/challenge/beginner" element={<BeginnerLevelPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
