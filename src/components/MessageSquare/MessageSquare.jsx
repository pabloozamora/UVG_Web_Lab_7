import React from 'react'
import PropTypes from 'prop-types'
import styles from './MessageSquare.module.css'

const MessageSquare = ({ icon, title, description, link, linkText }) => (
    <div className = {styles.square}>
        <img alt = "messagePic" id = {styles.icon} src={icon} />
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardText}>{`${description} `}
        <a className = {styles.cardLink} href={link}>{linkText}</a>
        </p>
    </div>
  )

MessageSquare.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

export default MessageSquare