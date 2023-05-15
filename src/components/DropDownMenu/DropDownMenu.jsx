import React, { useState } from "react";
import styles from './DropDownMenu.module.css'
import twitterImg from '../../assets/twitter.svg'
import reddigImg from '../../assets/reddit.svg'
import blogImg from '../../assets/blog.svg'
import newsImg from '../../assets/newsletter.svg'

const DropDownMenu = ({ show }) => {
    return(
        <div className={styles.menuContainer} style={{opacity: `${show ? 1 : 0}`}}>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='twitter-img' src={twitterImg}></img>
                <p className={styles.menuText}>Twitter</p>
            </div>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='reddit-img' src={reddigImg}></img>
                <p className={styles.menuText}>Reddit</p>
            </div>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='blog-img' src={blogImg}></img>
                <p className={styles.menuText}>Blog</p>
            </div>
            <div className={styles.menuItem}>
                <img className = {styles.menuImg} alt='news-img' src={newsImg}></img>
                <p className={styles.menuText}>Newsletter</p>
            </div>
        </div>
    )
}

export default DropDownMenu