import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import logoLoader from "../assets/logos/icon-loader.svg";
import logoHome from "../assets/logos/icon-home.svg";
import logoDiscovery from "../assets/logos/icon-frame.svg";
import logoCommunity from "../assets/logos/icon-group.svg";
import logoRecent from "../assets/logos/icon-clock.svg";
import logoCollection from "../assets/logos/icon-star.svg";
import logoSettings from "../assets/logos/icon-settings.svg";
import logoHelp from "../assets/logos/icon-question.svg";
import SearchBox from "../components/SearchBox";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2 className={styles.logo}>MyApp</h2>
            <SearchBox />
            <p className={styles.pTag}>MAIN</p>
            <nav className="nav flex-column mx-5">
                <Link to="/" className={styles.navLink}>
                    <img src={logoHome} alt="home" /> Home
                </Link>
                <Link to="/" className={styles.navLink}>
                    <img src={logoDiscovery} alt="discovery" /> Discovery
                </Link>
                <Link to="/genre" className={styles.navLink}>
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
                <Link to="/" className={styles.navLink}>
                    <img src={logoCollection} alt="collection" /> Collection
                </Link>
            </nav>
            <nav className="nav flex-column mx-5">
                <Link to="/" className={styles.navLink}>
                    <img src={logoSettings} alt="settings" /> Settings
                </Link>
                <Link to="/" className={styles.navLink}>
                    <img src={logoHelp} alt="help" /> Help
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
