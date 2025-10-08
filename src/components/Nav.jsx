import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import styles from './Nav.module.css';
import { Logo } from '../components';

const navLinks = [
	{ id: 1, linkName: 'Home', path: '/' },
	{ id: 2, linkName: 'Store', path: '/product-store' },
	{ id: 3, linkName: 'Cart', path: '/cart' },
	{ id: 4, linkName: 'Login', path: '/login' },
];

export default function Nav() {
	const cartItems = useSelector(state => state.cartItems);
	const totalItemsInCart = cartItems.reduce(
		(accumlator, currentValue) => accumlator + currentValue.quantity,
		0,
	);

	return (
		<nav className={styles.nav}>
			<Logo />
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/product-store">Store</NavLink>
				</li>
				<li className={styles.cartLink}>
					<NavLink to="/cart">Cart</NavLink>
					<span>{totalItemsInCart}</span>
				</li>
			</ul>
		</nav>
	);
}
