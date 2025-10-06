import styles from './Button.module.css';

export default function Button({ children, priority }) {
	const classes =
		priority === 'SECONDARY' ? styles.btnSecondary : styles.btnPrimary;
	return <button className={`${styles.btn} ${classes}`}>{children}</button>;
}
