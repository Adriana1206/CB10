import styles from './Header.module.css';

function Header() {
    return (
        <>
            <div className={styles.header}>
                <a href="#default" className={styles.logo}>Logo</a>
                <div className={styles.headerRight}>
                    <a className={styles.active} href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </>
    );
}

export default Header;
