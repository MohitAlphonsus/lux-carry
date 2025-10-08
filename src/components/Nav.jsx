import styles from './Nav.module.css';
import { Logo } from '../components';
import { NavLink } from 'react-router';

const navLinks = [
	{ id: 1, linkName: 'Home', path: '/' },
	{ id: 2, linkName: 'Store', path: '/product-store' },
	{ id: 3, linkName: 'Cart', path: '/cart' },
	{ id: 4, linkName: 'Login', path: '/login' },
];

export default function Nav() {
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
					<span>0</span>
				</li>
			</ul>
		</nav>
	);
}
