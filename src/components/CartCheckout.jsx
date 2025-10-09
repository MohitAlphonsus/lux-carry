import styles from './CartCheckout.module.css';
import { subTotal } from '../store/cartSlice';
import { Button } from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function CartCheckout() {
	const total = useSelector(subTotal);
	const discountPercentage = 10;
	const deliveryCharges = 100;
	const discountAmount = (total * discountPercentage) / 100;
	const TotalAmountWithDiscount = total - discountAmount + deliveryCharges;
	const navigate = useNavigate();

	function handleCheckOut() {
		navigate('/checkout', {
			state: { TotalAmountWithDiscount },
		});
	}

	return (
		<div className={styles.cartCheckout}>
			<h5>Order Summary :</h5>
			<div className={styles.cartSummary}>
				<div className={styles.cartSummaryGroup}>
					<span>Subtotal</span>
					<span>{total}₹</span>
				</div>
				<div className={styles.cartSummaryGroup}>
					<span>Discount(10%)</span>
					<span>-{discountAmount}₹</span>
				</div>
				<div className={styles.cartSummaryGroup}>
					<span>Delivery Charges</span>
					<span>{deliveryCharges}₹</span>
				</div>
				<div className={styles.cartSummaryGroup}>
					<span>Total </span>
					<span>{TotalAmountWithDiscount}₹</span>
				</div>

				<Button prority="SECONDARY" onClick={handleCheckOut}>
					Checkout
				</Button>
			</div>
		</div>
	);
}
