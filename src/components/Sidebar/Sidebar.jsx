import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useTheme from '../../hooks/useTheme';
import './Sidebar.css';

function Sidebar() {
  const { theme, toogleTheme } = useTheme();
  return (
    <div className="sidebar">
      <div className="header">
        <div className="logo">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://zemprofiles.vercel.app" className="titlelink">
          <div className="title">
            <p className="dev">Dev.</p>
            <p className="find">Find</p>
          </div>
        </a>
        <div className="theme">
          <button type="button" className="theme-button" onClick={toogleTheme}>
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="headline">Discover and Connect with Developers!</div>
      <div className="description">
        <a
          href=" https://github.com/Zemerik/ZemProfiles#how-to-add-your-profile?"
          target="_blank"
          rel="noreferrer"
        >
          <button className="link_button"> Add your profile </button>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
