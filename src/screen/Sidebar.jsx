import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import logoLoader from "../assets/logos/icon-loader.svg";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2 className={styles.logo}>MyApp</h2>
            <p className={styles.pTag}>MAIN</p>
            <nav className="nav flex-column mx-5">
                <Link to="/" className={styles.navLink}>
                    <i class="bi bi-house-door"></i> Home
                </Link>
                <Link to="/" className={styles.navLink}>
                    <i class="bi bi-film"></i> Discovery
                </Link>
                <Link to="/" className={styles.navLink}>
                    <img src={logoLoader} alt="loader" /> Mood Feature
                </Link>
                <Link to="/" className={styles.navLink}>
                    Community
                </Link>
            </nav>
            <p className={styles.pTag}>LIBRARY</p>
            <nav className="nav flex-column mx-5 mb-5">
                <Link to="/" className={styles.navLink}>
                    Recent
                </Link>
                <Link to="/" className={styles.navLink}>
                    My Collection
                </Link>
            </nav>
            <nav className="nav flex-column mx-5">
                <Link to="/" className={styles.navLink}>
                    Settings
                </Link>
                <Link to="/" className={styles.navLink}>
                    Help
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
