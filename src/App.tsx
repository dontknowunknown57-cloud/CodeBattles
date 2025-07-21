import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Challenges from './pages/Challenges';
import Challenge from './pages/Challenge';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="relative">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/challenge/:id" element={<Challenge />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;