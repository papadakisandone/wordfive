import React from 'react';
import flogo from "../assets/ap_footer_logo.png";
import {BsLinkedin, BsGithub} from "react-icons/bs";
import styles from  "./footer.module.css";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <img className={styles.footer__logo} src={flogo}/>
            <div className={styles.footer__socials}>
                <a href="https://github.com/papadakisandone" target="_blank"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/antonios-papadakis-633b34215/" target="_blank"><BsLinkedin/></a>
            </div>
            <div className={styles.footer__copyright}>
                <small>&copy; Papadakis Antonios. All rights reserved {year}.</small>
            </div>
        </footer>
    );
};
export default Footer;