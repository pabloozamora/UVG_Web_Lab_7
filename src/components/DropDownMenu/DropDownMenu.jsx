import React from "react"
import PropTypes from "prop-types"
import styles from './DropDownMenu.module.css'
import twitterImg from '../../assets/twitter.svg'
import reddigImg from '../../assets/reddit.svg'
import blogImg from '../../assets/blog.svg'
import newsImg from '../../assets/newsletter.svg'

const DropDownMenu = ({ show }) => (
        <div className={styles.menuContainer} style={{opacity: `${show ? 1 : 0}`}}>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='twitter-img' src={twitterImg} />
                <p className={styles.menuText}>Twitter</p>
            </div>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='reddit-img' src={reddigImg} />
                <p className={styles.menuText}>Reddit</p>
            </div>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='blog-img' src={blogImg} />
                <p className={styles.menuText}>Blog</p>
            </div>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='news-img' src={newsImg} />
                <p className={styles.menuText}>Newsletter</p>
            </div>
        </div>
    )

DropDownMenu.propTypes = { show: PropTypes.bool.isRequired }

export default DropDownMenu