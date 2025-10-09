import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import { NavLink, Link, useNavigate } from 'react-router';

import styles from './Nav.module.css';
import { Logo } from '../components';

export default function Nav() {
	const cartItems = useSelector(state => state.cart.cartItems);
	const { isAuthenticated, user } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleLogout() {
		dispatch(logout());
		navigate('/', { replace: true });
	}

	const totalItemsInCart = cartItems?.reduce(
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
					{totalItemsInCart ? (
						<span>{totalItemsInCart ? totalItemsInCart : 0}</span>
					) : null}
				</li>
				<li>
					{!isAuthenticated ? (
						<Link to="/login">
							<button className={styles.navBtn}>Login</button>
						</Link>
					) : (
						<NavLink onClick={handleLogout}>
							Logout ({user.name.split(' ')[0]})
						</NavLink>
					)}
				</li>
			</ul>
		</nav>
	);
}
