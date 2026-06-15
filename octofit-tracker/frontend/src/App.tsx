import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">OctoFit Tracker</h1>
      <p className="lead">Modern multi-tier fitness tracking with React, Express, TypeScript, and MongoDB.</p>
      <Link className="btn btn-primary" to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h1>Dashboard</h1>
      <p>Track workouts, activity logs, teams, and leaderboard data.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
