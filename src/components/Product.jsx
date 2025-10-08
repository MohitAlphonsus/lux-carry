import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';
import styles from './Product.module.css';
import { Button, Tags } from '../components';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

export default function Product({ product }) {
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cartItems);

	function handleAddToCart() {
		const doesItemExist = cartItems.find(item => item.id === product.id);
		dispatch(addToCart(product));

		if (doesItemExist) {
			toast.info('Item quantity updated!', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				progress: undefined,
				theme: 'light',
			});
		} else {
			toast.success('Cart item added', {
				position: 'top-right',
				autoClose: 2000,
				closeOnClick: false,
				hideProgressBar: false,
				progress: undefined,
				theme: 'light',
			});
		}
	}

	return (
		<div className={styles.product}>
			<Link to={`/product/${product.id}`}>
				<div
					className={styles.productImage}
					style={{ backgroundImage: `url(${product.images[0].imgSrc})` }}
				>
					&nbsp;
				</div>
			</Link>
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
				<Button onClick={handleAddToCart}>Add To Cart</Button>
			</div>
			<ToastContainer />
		</div>
	);
}
