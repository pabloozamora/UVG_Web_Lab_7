import React, { useState } from "react";
import styles from './Header.module.css'
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const Header = () => {
    const [ displayMenu, setDisplayMenu ] = useState(false)

    return(
        <div className={styles.headerMainContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.iconsContainer}>
                    <div className={styles.socials} onClick={() => setDisplayMenu(!displayMenu)}>
                        <p className={styles.megaphone}>H</p>
                        <p className={styles.arrow}>v</p>
                    </div>
                    <div className={styles.menuContainer}>
                        <p className={styles.hamburgerMenu}>⇶</p>
                    </div>
                </div>
            </div>
            <DropDownMenu show={displayMenu}/>
        </div>
    )
}

export default Header;