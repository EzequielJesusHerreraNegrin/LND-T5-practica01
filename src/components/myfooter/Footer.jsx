import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'

const Footer = () => {
    const fecha = new Date();
    const añoEsperado = fecha.getFullYear() - 1;
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerIcon}></div>
            <p className={styles.footerMessage}>&copy; {añoEsperado} All right reserved</p>
        </div>
    )
}

Footer.propTypes = {
    message: PropTypes.string
}

export default Footer