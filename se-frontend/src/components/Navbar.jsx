import { useNavigate } from "react-router-dom";

import "../Navbar.css";
function Navbar() {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Logic for handling the click event and navigating to Dashboard.jsx
    navigate("/Dashboard"); // Navigate to the root path (Dashboard)
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="main-logo-container">
          <img
            onClick={handleDashboardClick}
            src="/main-logo.png"
            alt=""
            className="main-logo"
          />
        </div>
        <div className="nav-right-container">
          <div className="main-page-container">
            <a
              onClick={handleDashboardClick}
              href="#"
              className="main-page-link"
            >
              Main Page
            </a>
          </div>
          <div className="about-container">
            <a href="#" className="about-link">
              About
            </a>
          </div>

          <div className="settings-container">
            <a href="#" className="settings-link">
              Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
