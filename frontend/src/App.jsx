import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Activity, 
  TerminalSquare, 
  Box, 
  Workflow,
  LayoutDashboard,
  Settings,
  HardDrive
} from 'lucide-react';
import './index.css';

function App() {
  const [health, setHealth] = useState({ status: 'loading...', services: {} });

  useEffect(() => {
    // Fetch health from FastAPI backend
    fetch('http://localhost:8000/api/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => {
        console.error("Failed to fetch backend health", err);
        setHealth({ status: 'offline', services: {} });
      });
  }, []);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <Database size={28} color="#60a5fa" />
          <span>Lakehouse OS</span>
        </div>
        
        <nav className="nav-links">
          <a href="#" className="nav-link active">
            <LayoutDashboard size={20} />
            Dashboard
          </a>
          <a href="#" className="nav-link">
            <Activity size={20} />
            Compute Jobs
          </a>
          <a href="#" className="nav-link">
            <HardDrive size={20} />
            Storage
          </a>
          <a href="#" className="nav-link">
            <Settings size={20} />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Control Plane Overview</h1>
          <div className="user-profile">
            {/* Placeholder for user profile / logout */}
          </div>
        </header>

        {/* Top Stats */}
        <div className="dashboard-grid">
          <div className="glass-panel stat-card">
            <div className="stat-header">
              <span>Platform Status</span>
              <Activity size={18} color="var(--accent-color)" />
            </div>
            <div className="stat-value" style={{ textTransform: 'capitalize', color: health.status === 'offline' ? 'var(--danger-color)' : 'inherit' }}>
              {health.status}
            </div>
            <div className="stat-footer">
              <div className="status-indicator" style={{ backgroundColor: health.status === 'offline' ? 'var(--danger-color)' : 'var(--success-color)', boxShadow: health.status === 'offline' ? '0 0 10px var(--danger-color)' : '0 0 10px var(--success-color)' }}></div>
              <span>Backend API is {health.status}</span>
            </div>
          </div>
          
          <div className="glass-panel stat-card">
            <div className="stat-header">
              <span>Active Clusters</span>
              <Box size={18} color="var(--accent-color)" />
            </div>
            <div className="stat-value">1</div>
            <div className="stat-footer">
              <span style={{ color: 'var(--success-color)' }}>Spark Standalone Running</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="services-section">
          <h2>Lakehouse Services</h2>
          <div className="services-grid">
            
            <a href="http://localhost:9001" target="_blank" rel="noreferrer" className="glass-panel service-card">
              <div className="service-icon">
                <HardDrive size={32} />
              </div>
              <div className="service-info">
                <h3>MinIO Storage</h3>
                <p>S3-Compatible Object Store</p>
              </div>
            </a>

            <a href="http://localhost:19120/api/v2" target="_blank" rel="noreferrer" className="glass-panel service-card">
              <div className="service-icon">
                <Database size={32} />
              </div>
              <div className="service-info">
                <h3>Project Nessie</h3>
                <p>Iceberg Data Catalog</p>
              </div>
            </a>

            <a href="http://localhost:8080" target="_blank" rel="noreferrer" className="glass-panel service-card">
              <div className="service-icon">
                <Activity size={32} />
              </div>
              <div className="service-info">
                <h3>Apache Spark</h3>
                <p>Compute Master UI</p>
              </div>
            </a>

            <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="glass-panel service-card">
              <div className="service-icon">
                <Workflow size={32} />
              </div>
              <div className="service-info">
                <h3>Dagster</h3>
                <p>Job Orchestration</p>
              </div>
            </a>

            <a href="http://localhost:8888" target="_blank" rel="noreferrer" className="glass-panel service-card">
              <div className="service-icon">
                <TerminalSquare size={32} />
              </div>
              <div className="service-info">
                <h3>JupyterLab</h3>
                <p>Interactive Workspace</p>
              </div>
            </a>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
