import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../CSS/Navbar.module.css"
import logo from "../logo.jpg"
import { Context } from './Context'
export const Navbar = () => {
    const navigate = useNavigate();

    const { select, setSelect } = React.useContext(Context);

    return (
        <div>
            <div className={styles.nav_container}>
                <div>
                    <img className={styles.logo} src={logo} />
                </div>
                <div className={styles.right_section}>
                    <div className={styles.options}>
                        <select className={styles.drop} onChange={(event) => setSelect(event.currentTarget.value)}>
                            <option value="default">Clothes</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="unisex">Unisex</option>
                        </select>
                        <p className={styles.p} onClick={() => navigate("/")}>Home</p>
                        <p className={styles.p} onClick={() => navigate("about")}> About Us</p>
                        <p className={styles.p} onClick={() => navigate("contact")}>Contact</p>
                        <p className={styles.p} onClick={() => navigate("faq")}>FAQ</p>
                        <img className={styles.cart} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G-jQDSFzzMgadOrhWFc8Pv1yRUqdiIQJuNXOUqeWeA_3SSWgeDtp6laKqQKEfBsFWcI&usqp=CAU" />
                    </div>
                </div>
            </div>
        </div >
    )
}
