import styles from './Products.module.css';
import { PageTitle, Product } from '../components';
import { useProducts } from '../context/ProductsContext';

export default function Products() {
	const { products } = useProducts();
	return (
		<section className={styles.productSection}>
			<PageTitle
				title="Our Collection"
				subtitle="Curated with care. Designed with you in mind"
			/>
			<div className={styles.products}>
				{products.map(product => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}
