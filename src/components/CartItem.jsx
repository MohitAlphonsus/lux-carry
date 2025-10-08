import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css';
import { Counter } from '../components';
import { FaTrash } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';

export default function CartItem({ item }) {
	const dispatch = useDispatch();

	function handleRemoveCartItem() {
		dispatch(removeItem(item.id));
		toast.info('Item removed from cart', {
			position: 'top-right',
			autoClose: 2000,
			closeOnClick: false,
			hideProgressBar: false,
			progress: undefined,
			theme: 'light',
		});
	}

	return (
		<div className={styles.cartItem}>
			<div
				className={styles.cartItemImg}
				style={{ backgroundImage: `url(${item?.images[0].imgSrc})` }}
			>
				&nbsp;
			</div>
			<h4>{item?.title}</h4>
			<Counter
				quantity={item?.quantity}
				onIncrement={() => dispatch(incrementQuantity(item.id))}
				onDecrement={() => dispatch(decrementQuantity(item.id))}
			/>
			<p className={styles.cartItemPrice}>
				<span>{(item?.price * item.quantity).toFixed()}</span>
				<span>₹</span>
			</p>
			<button
				className={styles.cartItemRemoveBtn}
				onClick={handleRemoveCartItem}
			>
				<FaTrash />
			</button>
			<ToastContainer />
		</div>
	);
}
