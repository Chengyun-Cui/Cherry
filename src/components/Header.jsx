import { useState,useRef,useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header({ profile, setCurrentPage }) {  
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const profileRef = useRef();
    const menuRef = useRef();
    const { username } = profile;
    
    useEffect(
    () => {
        function close(e) {
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest(".menu-button")) {
            setIsMenuOpen(false);
        }
            
            if (isProfileOpen && profileRef.current && !profileRef.current.contains(e.target)) {
            setIsProfileOpen(false);
        }
        };
        window.addEventListener('mousedown', close);
        return () => window.removeEventListener('mousedown', close);
    }, [isProfileOpen, isMenuOpen]);
    
    function changePage(e) {
        e.preventDefault();
        window.history.pushState(null, '', e.currentTarget.pathname);
        setCurrentPage(e.currentTarget.pathname);
        setIsMenuOpen(false);
        setIsProfileOpen(false);
    }
    
    return (
    <header className="header">
        <div className="brand-row">
            <a href="/" onClick={changePage}>
            <img src={logo} alt="Logo, two cherries" className="logo" width="50" height="50"/ >
            </a>
            <h1>I love Cherry 🍒</h1>
            <div ref={profileRef} className = "header-profile">
                <img src={profile.pic} alt="Profile" className="profile-pic" aria-expanded={isProfileOpen} onClick={() => setIsProfileOpen(prev => !prev)}/>
                {isProfileOpen && (
                    <div className="dropdown-profile">
                        <div>
                            <span className='profile-name' >{username}</span>
                        </div>
                        <a href="/settings" onClick={(e) => {
                            changePage(e);
                            setIsProfileOpen(false);
                        }} 
                        className="profile-link">
                            Profile Settings
                        </a>
                    </div>
                )}
            </div>
        </div>
        
        <button className="menu-button" aria-label="Open Menu" aria-expanded={isMenuOpen} onClick={(e) => {e.stopPropagation(); setIsMenuOpen(prev => !prev);}}></button>

        <nav className={`menu ${isMenuOpen ? 'show' : ''}`} id="menu-flyout" ref={menuRef}>      
            <ul className="dropdown-menu" id="dropdown-menu">
                <li><a href="/" onClick={changePage}>Home</a></li>
                <li><a href="/varieties" onClick={changePage}>Varieties</a></li>
                <li><a href="/register" onClick={changePage}>Register</a></li>
                <li><a href="/settings" onClick={changePage}>Settings</a></li>
            </ul>
        </nav>

        
    </header>
    
    );
}
export default Header;