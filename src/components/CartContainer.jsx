import styles from './CartContainer.module.css';
import { CartItem, CartCheckout } from '../components';
import { useSelector } from 'react-redux';

export default function CartContainer() {
	const cartItems = useSelector(state => state.cart.cartItems);
	console.log(cartItems);

	return (
		<>
			{cartItems.length === 0 ? (
				<p className={styles.message}>Cart is Empty</p>
			) : (
				<section className={styles.cartContainer}>
					<div className={styles.cartItems}>
						{cartItems?.map(item => (
							<CartItem item={item} key={item.id} className={styles.cartItem} />
						))}
					</div>
					<CartCheckout />
				</section>
			)}
		</>
	);
}
