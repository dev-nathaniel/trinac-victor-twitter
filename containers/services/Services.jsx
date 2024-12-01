import styles from './services.module.css'

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.servicesCont}>
                <div className={styles.firstSection}>
                    <div className={styles.firstTitle}>
                        <p>OUR SERVICES</p>
                    </div>
                    <div className={styles.firstContent}>
                        <p>We provide a wide range of services
                            for our clients and partners including
                            <span> product design</span>, <span>web development</span>,
                            <span> mobile development</span>, <span>cloud engineering</span> and <span>DevOps</span>.
                        </p>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <div className={styles.secondTitle}>
                        <p>HOW WE WORK</p>
                    </div>
                    <div className={styles.secondContent}>
                        <div className={styles.process}>
                            <div className={styles.processName}>
                                <p>Discovery and planning</p>
                                <p>01</p>
                            </div>
                            <div className={styles.processUnderline}></div>
                        </div>
                        <div className={styles.process}>
                            <div className={styles.processName}>
                                <p>Initial Call</p>
                                <p>02</p>
                            </div>
                            <div className={styles.processUnderline}></div>
                        </div>
                        <div className={styles.process}>
                            <div className={styles.processName}>
                                <p>Design</p>
                                <p>03</p>
                            </div>
                            <div className={styles.processUnderline}></div>
                        </div>
                        <div className={styles.process}>
                            <div className={styles.processName}>
                                <p>Development</p>
                                <p>04</p>
                            </div>
                            <div className={styles.processUnderline}></div>
                        </div>
                        <div className={styles.process}>
                            <div className={styles.processName}>
                                <p>QA Testing</p>
                                <p>05</p>
                            </div>
                            <div className={styles.processUnderline}></div>
                        </div>
                        <div className={styles.process}>
                            <div className={styles.processName}>
                                <p>Deployment</p>
                                <p>06</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.thirdSection}>
                        <div className={styles.thirdContent}>
                            <p>We work with a wide range of tools and technologies to create high quality work.</p>
                        </div>
                        <div className={styles.techCont}>
                            <div className={styles.tech}>
                                <p>WEB</p>
                                <p>Vuejs</p>
                                <p>Reactjs</p>
                                <p>Css/Sass</p>
                                <p>Nuxtjs</p>
                                <p>Nextjs</p>
                            </div>
                            <div className={styles.tech}>
                                <p>BACKEND/DATABASES</p>
                                <p>NodeJs</p>
                                <p>Express</p>
                                <p>GO</p>
                                <p>MongoDB</p>
                                <p>MySQL</p>
                            </div>
                            <div className={styles.tech}>
                                <p>MOBILE</p>
                                <p>React-native</p>
                                <p>Flutter</p>
                                <p>Java</p>
                                <p>Kotlin</p>
                                <p>Swift</p>
                            </div>
                            <div className={styles.tech}>
                                <p>CLOUD/DEVOPS</p>
                                <p>Docker</p>
                                <p>Kubernetes</p>
                                <p>Terraform</p>
                                <p>Ansible</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Services;