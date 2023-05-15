import React from 'react'
import styles from './MessageSquare.module.css'

const MessageSquare = ({ icon, title, description, link, linkText }) => (
    <div className = {styles.square}>
        <img id = {styles.icon} src={icon}></img>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardText}>{`${description} `}
        <a className = {styles.cardLink} href={link}>{linkText}</a>
        </p>
    </div>
  )

export { MessageSquare }