import { Link } from "react-router-dom"
import ReactCountryFlag from "react-country-flag"
import { useState, useEffect } from "react"
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function NavBar() {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleLoginClick = () => {
      setShowLoginForm(true);
      setShowRegisterForm(false);
    };
  
    const handleRegisterClick = () => {
      setShowRegisterForm(true);
      setShowLoginForm(false);
    };
  
    const handleCloseForm = () => {
      setShowLoginForm(false);
      setShowRegisterForm(false);
    };

    // Effect to handle body overflow when forms are shown or hidden
    useEffect(() => {
    if (showLoginForm || showRegisterForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow when the component is unmounted or the forms are closed
    return () => {
      document.body.style.overflow = 'auto';
    };
    }, [showLoginForm, showRegisterForm]);

    return (
      <div className="nav-bar">
        <div className="nav-bar-links">
          <Link to="/">HEM</Link>
          <Link to="/about">OM STUBINEN</Link>
          <Link to="previouslyShown">VISNINGAR ÖVER ÅREN</Link>
        </div>

        <div className="nav-bar-right">
          <div className="nav-bar-buttons">
            <button onClick={handleLoginClick}>LOGGA IN</button>
            <button onClick={handleRegisterClick}>REGISTRERA</button>
          </div>

          <div className="nav-bar-flags">
            <ReactCountryFlag countryCode="GB" style={{width: '3em', height: '3em'}} svg />
            <ReactCountryFlag countryCode="SE" style={{width: '3em', height: '3em'}} svg />
          </div>
        </div>

        {showLoginForm && (
          <LoginForm onClose={handleCloseForm}/>
        )}

        {showRegisterForm && (
          <RegisterForm onClose={handleCloseForm}/>
        )}
      </div>
    )
  }
  
  export default NavBar