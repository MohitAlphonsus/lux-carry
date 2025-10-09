import { useSelector } from 'react-redux';
import { subTotal } from '../store/cartSlice';
import { useLocation } from 'react-router';
import styles from './Checkout.module.css';

export default function Checkout() {
	const { user } = useSelector(state => state.user);
	const items = useSelector(state => state.cart.cartItems);
	const { state } = useLocation();
	const totalItemsValue = state.TotalAmountWithDiscount;
	const totalQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);

	return (
		<section className={styles.checkout}>
			<div className={styles.checkoutMessage}>
				<p className={styles.msg}>
					Hello
					<strong> {user.name} </strong>, Your package of quantity{' '}
					<strong>{totalQuantity}</strong>, and total amount of{' '}
					<strong>{totalItemsValue}₹</strong> will be delivered to following
					address.
				</p>
				<p className={styles.address}>{user.address}</p>
			</div>
		</section>
	);
}
