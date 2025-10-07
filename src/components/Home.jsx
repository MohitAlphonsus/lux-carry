import { useNavigate } from 'react-router';
import { Logo, Button } from '../components';
import styles from './Home.module.css';

import { heroImgs, heroFeatures } from '../constants/constant';

export default function Home() {
	const navigate = useNavigate();

	return (
		<section className={styles.hero}>
			<Logo />
			<div className={styles.heroTextBox}>
				<h1>Carry Elegance Everywhere</h1>
				<p>
					Discover premium bags crafted to perfection. Where style meets
					sophistication, every bag tells a story.
				</p>
				<Button priority="SECONDARY" onClick={() => navigate('/product-store')}>
					Find Your Perfect Bag
				</Button>
				<div className={styles.heroFeatures}>
					{heroFeatures.map(({ id, icon: Icon, feature }) => (
						<div className={styles.feature} key={id}>
							<Icon />
							<span>{feature}</span>
						</div>
					))}
				</div>
			</div>
			<div className={styles.heroImages}>
				{heroImgs.map(img => (
					<picture key={img.id}>
						<img src={img.imgSrc} alt="preview product image" />
					</picture>
				))}
			</div>
		</section>
	);
}
