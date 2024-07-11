import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import logoLoader from "../assets/logos/icon-face-smile.svg";
import logoHome from "../assets/logos/icon-home.svg";
import logoDiscovery from "../assets/logos/icon-video-camera.svg";
import logoCommunity from "../assets/logos/icon-group.svg";
import logoRecent from "../assets/logos/icon-folder.svg";
import logoCollection from "../assets/logos/icon-heart-clean.svg";
import logoSettings from "../assets/logos/icon-settings.svg";
import logoHelp from "../assets/logos/icon-power.svg";
import logoReelsavvy from "../assets/logos/reelsavvy_logo.png";
import SearchBox from "../components/SearchBox";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logoReelsavvy} alt="reelsavvy" />
            </div>
            <SearchBox />
            <p className={styles.pTag}>MAIN</p>
            <nav className="nav flex-column mx-5">
                <Link to="/" className={styles.navLink}>
                    <img src={logoHome} alt="home" /> Home
                </Link>
                <Link to="/" className={styles.navLink}>
                    <img src={logoDiscovery} alt="discovery" /> Discovery
                </Link>
                <Link to="/mood" className={styles.navLink}>
                    <img src={logoLoader} alt="loader" /> Mood Feature
                </Link>
                <Link to="/" className={styles.navLink}>
                    <img src={logoCommunity} alt="community" /> Community
                </Link>
            </nav>
            <p className={styles.pTag}>LIBRARY</p>
            <nav className="nav flex-column mx-5 mb-5">
                <Link to="/" className={styles.navLink}>
                    <img src={logoRecent} alt="recent   " /> Recent
                </Link>
                <Link to="/watchlist" className={styles.navLink}>
                    <img src={logoCollection} alt="watchlist" /> My Watchlist
                </Link>
            </nav>
            <nav className="nav flex-column mx-5">
                <Link to="/" className={styles.navLink}>
                    <img src={logoSettings} alt="settings" /> Settings
                </Link>
                <Link to="/" className={styles.navLink}>
                    <img src={logoHelp} alt="logout" /> Logout
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
