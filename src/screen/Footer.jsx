import React from "react";
import reelSavvy from "../assets/logos/reelsavvy_logo.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.main_content}>
            <img src={reelSavvy} alt="Logo" />
            <div>
                <p>Terms and Privacy Notice</p>
                <p>Send us Feedback</p>
                <p>Help</p>
            </div>
        </div>
    );
};

export default Footer;
