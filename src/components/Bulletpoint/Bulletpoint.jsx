import React from "react"
import PropTypes from 'prop-types'
import styles from './Bulletpoint.module.css'
import check from '../../assets/check.svg'

const Bulletpoint = ({ text }) => (
        <div className={styles.bulletContainer}>
            <img alt= "check" className={styles.bulletCheck} src={check} />
            <p className={styles.bulletText}>{text}</p>
        </div>
    )

Bulletpoint.propTypes = {text: PropTypes.string.isRequired}

export default Bulletpoint