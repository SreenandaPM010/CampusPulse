import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>🎓 Campus Pulse</h2>
        <a href="#announcements">Announcements</a>
        <a href="#events">Events</a>
        <a href="#collaboration">Collaboration</a>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <header style={{ marginBottom: "20px" }}>
          <p>Connecting students with your campus community!</p>
        </header>

        {/* Announcements */}
        <section id="announcements">
          <h2>📢 Announcements</h2>
          <div className="card">New event: AI Workshop on 5th Sept</div>
          <div className="card">Semester exams schedule released</div>
          <div className="card">Library hours extended this week</div>
        </section>

        {/* Events */}
        <section id="events">
          <h2>🎉 Events</h2>
          <div className="card">Hackathon 2025 - Registration open</div>
          <div className="card">Sports day on 12th Sept</div>
        </section>

        {/* Collaboration */}
        <section id="collaboration">
          <h2>👥 Collaboration</h2>
          <div className="card">
            Join student groups, forums, and discussions here!
          </div>
        </section>

        {/* Footer */}
        <footer>
          &copy; 2025 Campus Pulse
        </footer>
      </div>
    </div>
  );
}

export default App;
