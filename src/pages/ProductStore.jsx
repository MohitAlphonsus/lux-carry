import styles from './ProductStore.module.css';
import headerBannerImg from '../assets/imgs/product-banner.jpg';
import { Products, Banner } from '../components';

const headerLeadingTitle = 'Find Your Perfect Carry';
const headerLeadingText =
	'From everyday essentials to statement pieces, explore bags designed for every style, every journey.';

export default function ProductStore() {
	return (
		<div className="container">
			<Banner
				imgSrc={headerBannerImg}
				heading={headerLeadingTitle}
				text={headerLeadingText}
			/>
			<Products />
		</div>
	);
}
