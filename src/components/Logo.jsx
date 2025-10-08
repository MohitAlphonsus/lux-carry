import { FaBagShopping } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function Logo() {
	return (
		<Link className="logo" to="/">
			<FaBagShopping />
			<span>Lux</span>
			<span>Carry</span>
		</Link>
	);
}
