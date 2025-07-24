import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ResearchCenter from './components/ResearchCenter';
import ProjectManager from './components/ProjectManager';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/research" element={<ResearchCenter />} />
          <Route path="/projects" element={<ProjectManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;