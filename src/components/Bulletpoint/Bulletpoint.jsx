import React from "react";
import styles from './Bulletpoint.module.css'
import check from '../../assets/check.svg'

const Bulletpoint = ({ text }) => {
    return(
        <div className={styles.bulletContainer}>
            <img className={styles.bulletCheck} src={check}></img>
            <p className={styles.bulletText}>{text}</p>
        </div>
    )
}

export default Bulletpoint