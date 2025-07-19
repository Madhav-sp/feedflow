import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>
          <h1>CompanyLogo</h1>
        </Link>
      </div>

      <div style={styles.navLinks}>
        {currentUser ? (
          <div style={styles.userProfile}>
            <img
              src={currentUser.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}
              alt="Profile"
              style={styles.profilePicture}
            />
            <span style={styles.userName}>{currentUser.username}</span>
          </div>
        ) : (
          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePicture: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: {
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '8px 16px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Header;
