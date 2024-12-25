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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes JS functionality like the navbar toggle

const Sidebar = () => {
	return (
		<div>
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
					{/* <Link className={styles.navLink}>
                    <img src={logoDiscovery} alt="discovery" /> Discovery
                </Link> */}
					<Link to="/mood" className={styles.navLink}>
						<img src={logoLoader} alt="loader" /> Mood Feature
					</Link>
					{/* <Link className={styles.navLink}>
                    <img src={logoCommunity} alt="community" /> Community
                </Link> */}
				</nav>
				<p className={styles.pTag}>LIBRARY</p>
				<nav className="nav flex-column mx-5 mb-5">
					{/* <Link className={styles.navLink}>
                    <img src={logoRecent} alt="recent   " /> Recent
                </Link> */}
					<Link to="/watchlist" className={styles.navLink}>
						<img src={logoCollection} alt="watchlist" /> My Watchlist
					</Link>
				</nav>
				{/* <nav className="nav flex-column mx-5">
                <Link className={styles.navLink}>
                    <img src={logoSettings} alt="settings" /> Settings
                </Link>
                <Link className={styles.navLink}>
                    <img src={logoHelp} alt="logout" /> Logout
                </Link>
            </nav> */}
			</div>

			<div className={styles.sidebar_small}>
				<nav class="navbar navbar-expand-lg bg-body-dark-bg">
					<div class="container-fluid">
						<div className={styles.logo}>
							<img src={logoReelsavvy} alt="reelsavvy" />
						</div>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item">
									<Link to="/" className={styles.navLink}>
										<img src={logoHome} alt="home" /> Home
									</Link>
								</li>
								<li class="nav-item">
									<Link to="/mood" className={styles.navLink}>
										<img src={logoLoader} alt="loader" /> Mood Feature
									</Link>
								</li>
								<li class="nav-item">
									<Link to="/watchlist" className={styles.navLink}>
										<img src={logoCollection} alt="watchlist" /> My Watchlist
									</Link>
								</li>
								<SearchBox />
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
