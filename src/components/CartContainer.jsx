import styles from './CartContainer.module.css';
import cartImg from '../../data/assets/eume/eume1/img-0.jpg';
import { CartItem, CartCheckout } from '../components';

const cartItems = [
	{ id: 1, title: 'Leather Bag', cartImage: cartImg, quantity: 1, price: 3234 },
];

export default function CartContainer() {
	return (
		<section className={styles.cartContainer}>
			<div className={styles.cartItems}>
				{cartItems.map(item => (
					<CartItem item={item} key={item.id} className={styles.cartItem} />
				))}
			</div>
			<CartCheckout />
		</section>
	);
}
