import Button from '../../components/button/Button';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footCont}>
                <div className={styles.footTop}>
                <h1>LET'S HELP YOU BUILD YOUR NEXT IDEA.</h1>
                <h3>hello@trinac.com</h3>
                </div>
                <div className={styles.bottomFoot}>
                    <div>
                        <Button color='#2228a5' text='TELEGRAM' />
                        <Button color='#2228a5' text='WHATSAPP' />
                        <Button color='#2228a5' text='FIVERR' />
                        <Button color='#2228a5' text='UPWORK' />
                    </div>
                    <div>
                    <Button color='#2228a5' text='INSTAGRAM' />
                    <Button color='#2228a5' text='TWITTER' />
                    <Button color='#2228a5' text='LINKEDIN' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;