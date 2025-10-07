import styles from './Products.module.css';
import { PageTitle } from '../components';

export default function Products() {
	return (
		<section className={styles.productSection}>
			<PageTitle
				title="Our Collection"
				subtitle="Curated with care. Designed with you in mind"
			/>
			<div className={styles.products}></div>
		</section>
	);
}
