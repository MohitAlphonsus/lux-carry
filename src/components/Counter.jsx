import styles from './Counter.module.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa6';

export default function Counter({ quantity, onIncrement, onDecrement }) {
	return (
		<div className={styles.counter}>
			<button onClick={onDecrement}>
				<FaLessThan />
			</button>
			<span>{quantity}</span>
			<button onClick={onIncrement}>
				<FaGreaterThan />
			</button>
		</div>
	);
}
