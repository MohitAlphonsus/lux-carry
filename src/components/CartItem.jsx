import styles from './CartItem.module.css';
import { Counter } from '../components';
import { FaTrash } from 'react-icons/fa6';

export default function CartItem({ item }) {
	return (
		<div className={styles.cartItem}>
			<div
				className={styles.cartItemImg}
				style={{ backgroundImage: `url(${item.cartImage})` }}
			>
				&nbsp;
			</div>
			<h4>{item.title}</h4>
			<Counter />
			<p className={styles.cartItemPrice}>
				<span>{item.price}</span>
				<span>₹</span>
			</p>
			<button className={styles.cartItemRemoveBtn}>
				<FaTrash />
			</button>
		</div>
	);
}
