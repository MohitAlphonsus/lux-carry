import styles from './CartCheckout.module.css';
import { Button } from '../components';

export default function CartCheckout() {
	return (
		<div className={styles.cartCheckout}>
			<h5>Order Summary :</h5>
			<div className={styles.cartSummary}>
				<div className={styles.cartSummaryGroup}>
					<span>Subtotal</span>
					<span>2470₹</span>
				</div>
				<div className={styles.cartSummaryGroup}>
					<span>Discount(10%)</span>
					<span>-100₹</span>
				</div>
				<div className={styles.cartSummaryGroup}>
					<span>Delivery Charges</span>
					<span>100₹</span>
				</div>
				<div className={styles.cartSummaryGroup}>
					<span>Total </span>
					<span>5462₹</span>
				</div>
				<Button prority="SECONDARY">Checkout</Button>
			</div>
		</div>
	);
}
