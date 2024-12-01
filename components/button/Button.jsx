import styles from './button.module.css'

const Button = (props) => {
    return (
        <div style={{color: props.color, borderColor: props.color, ...props.style}} className={styles.button}>
            <a>
                <p>{props.text}</p>
            </a>
        </div>
    );
}

export default Button;