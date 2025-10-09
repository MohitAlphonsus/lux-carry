import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { Button } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export default function Login() {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const { isAuthenticated, error } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmitForm(e) {
		e.preventDefault();
		dispatch(login(formData));

		if (error) {
			toast.info(error, {
				position: 'bottom-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				progress: undefined,
				theme: 'light',
			});
		}
		setFormData({ email: '', password: '' });
	}

	useEffect(
		function () {
			if (isAuthenticated) {
				navigate('/product-store', { replace: true });
			}
		},
		[isAuthenticated, navigate],
	);

	return (
		<div className="container">
			<section className={styles.login}>
				<div className={styles.loginContainer}>
					<h2>Welcome to the Circle of Elegance</h2>
					<p>
						Log in to access your account and continue your journey with our
						signature collections
					</p>
					<form onSubmit={handleSubmitForm}>
						<input
							type="email"
							placeholder="Enter your email"
							value={formData.email}
							onChange={e =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
						<input
							type="password"
							placeholder="Enter your password"
							value={formData.password}
							onChange={e =>
								setFormData({ ...formData, password: e.target.value })
							}
						/>
						<Button>Login</Button>
					</form>
				</div>
				<ToastContainer />
				<div className={styles.loginCredToUse}>
					<p>Email : ananya.iyer95@ai.com </p>
					<p>Password : 123456</p>
				</div>
			</section>
		</div>
	);
}
