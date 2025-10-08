import { Banner, CartContainer, PageTitle } from '../components';
import cartBannerImg from '../assets/imgs/cart-banner.jpg';
import styles from './Cart.module.css';

const cartLeadingTitle = 'Your Shopping Cart';
const cartLeadingText =
	'You’re just a step away from completing your purchase.';

export default function Cart() {
	return (
		<div className="container">
			<Banner
				imgSrc={cartBannerImg}
				heading={cartLeadingTitle}
				text={cartLeadingText}
			/>
			<div className={styles.cartSection}>
				<PageTitle
					title="Review Your Items"
					subtitle="Almost There – Let’s Get Your Order Ready"
				/>
				<CartContainer />
			</div>
		</div>
	);
}
