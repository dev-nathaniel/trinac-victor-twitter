import Link from "next/link";
import Button from "../button/Button";
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navCont}>
                <Link href='/'>
                <div>
                    <img style={{width: '30px'}} src="/logo.svg" />
                </div>
                </Link>
                <div>
                    <a href='/#about'>About</a>
                </div>
                <div>
                    <a href='#work'>Works<sup>5</sup></a>
                </div>
                <Button text='GET IN TOUCH' />
            </div>
        </div>
    );
}

export default Navbar;