import styles from './ProductStore.module.css';
import headerBannerImg from '../assets/imgs/product-banner.jpg';
import { Products } from '../components';

export default function ProductStore() {
	return (
		<>
			<header
				className={styles.header}
				style={{ backgroundImage: `url(${headerBannerImg})` }}
			>
				<div className={styles.headerText}>
					<h2>Find Your Perfect Carry</h2>
					<p>
						From everyday essentials to statement pieces, explore bags designed
						for every style, every journey.
					</p>
				</div>
			</header>
			<Products />
		</>
	);
}
