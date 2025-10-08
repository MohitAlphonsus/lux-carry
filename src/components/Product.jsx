import styles from './Product.module.css';
import { Button, Tags } from '../components';
import { FaStar } from 'react-icons/fa';

export default function Product({ product }) {
	return (
		<div className={styles.product}>
			<div
				className={styles.productImage}
				style={{ backgroundImage: `url(${product.images[0].imgSrc})` }}
			>
				&nbsp;
			</div>
			<div className={styles.productContent}>
				<h4 className={styles.truncateHeading}>
					{product.name.length > 25
						? `${product.name.slice(0, 25)}...`
						: product.name}
				</h4>

				<Tags
					productClosureType={product.ClosureType}
					productOuterMaterial={product.OuterMaterial}
					productStyle={product.Style}
				/>

				<div className={styles.productRating}>
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<span>{product.ratings}</span>
				</div>
				<span className={styles.productPrice}>{product.price}₹</span>
				<Button>Add To Cart</Button>
			</div>
		</div>
	);
}
