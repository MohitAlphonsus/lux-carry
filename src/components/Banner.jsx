import styles from './Banner.module.css';

export default function Banner({ imgSrc, heading, text }) {
	return (
		<header
			className={styles.header}
			style={{ backgroundImage: `url(${imgSrc})` }}
		>
			<div className={styles.headerText}>
				<h2>{heading}</h2>
				<p>{text}</p>
			</div>
		</header>
	);
}
