import styles from './PageTitle.module.css';

export default function PageTitle({ title, subtitle }) {
	return (
		<div className={styles.pageTitle}>
			<span>{subtitle}</span>
			<h3>{title}</h3>
		</div>
	);
}
