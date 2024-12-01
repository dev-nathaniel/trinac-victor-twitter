import styles from './about.module.css'

const About = () => {
    return (
        <div id='about' className={styles.about}>
            <div className={styles.aboutCont}>
                <div className={styles.aboutLeft}>
                    <p>WHO ARE WE?</p>
                </div>
                <div className={styles.aboutRight}>
                    <p>We are trinac, and we are a software 
                        development agency focused on 
                        creating web and mobile applications. 
                        Based in Anambra, Nigeria, but we 
                        work with clients from all over the 
                        world. We are ready to take your idea
                        from concept to execution.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;