import React from 'react';
import styles from '../CSS/Footer.module.css';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

export const Footer = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <h1> <FaFacebook /> </h1>
                <h1><FaInstagramSquare /></h1>
                <h1><FaTwitterSquare /></h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div className={styles.links}>
                    <p onClick={() => navigate("")}>Job Opportunities</p>
                    <p onClick={() => navigate("about")}>About Us</p>
                    <p onClick={() => navigate("contact")}>Contact Us</p>
                    <p onClick={() => navigate("faq")}>FAQ</p>
                </div>
                <div style={{ margin: "auto" }} className={styles.newsteller}>
                    <>
                        <input type="text" className="" placeholder="Enter your Email.." />
                        <button>Subscribe</button>
                    </>
                </div>
            </div>
            <div style={{ padding: "0.5rem" }}>All rights reserved.</div>
        </div>
    )
}
