import styles from './Counter.module.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa6';

export default function Counter() {
	return (
		<div className={styles.counter}>
			<button>
				<FaLessThan />
			</button>
			<span>0</span>
			<button>
				<FaGreaterThan />
			</button>
		</div>
	);
}
