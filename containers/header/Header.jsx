import Navbar from '../../components/navbar/Navbar';
import styles from './header.module.css'
import {FiArrowDown} from 'react-icons/fi'
import Intro, { Title } from '../../components/intro/Intro';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
    const [introOut, setIntroOut] = useState(false)
  const [offset, setOffset] = useState({
    top: null,
    left: null
})
    const ref = useRef()
    
    useEffect(()=> {
        const h1 = ref.current
        setOffset({
            top: h1.offsetTop,
            left: h1.offsetLeft
        })
    }, [])
    return (
        <div className={styles.header}>
      <Intro height={'360px'} text={'WE BUILD APPS YOUR USERS LOVE'}  offset={offset} setIntroOut={setIntroOut} introOut={introOut} />

            <div className={styles.headerCont}>
                <Navbar />
                <div className={styles.headerContent}>
                    <div className={styles.hContentLeft}>
                        <h1 className={styles.h1} ref={ref}>WE <span>BUILD</span> APPS YOUR USERS <span>LOVE</span></h1>
                        <div className={styles.downIcon}>
                            <FiArrowDown />
                        </div>
                    </div>
                    <div className={styles.hContentRight}>
                        <div className={styles.rightImage}>
                            <img src='./headerImg.jpg' />
                        </div>
                        <div className={styles.imageTitle}>
                            <div className={styles.hLine}></div>
                            <p>FOLIO/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;