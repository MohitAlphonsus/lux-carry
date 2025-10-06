// hero images
import img1 from '../../public/imgs/hbp-1.jpg';
import img2 from '../../public/imgs/hbp-2.jpg';
import img3 from '../../public/imgs/hbp-3.jpg';
import img4 from '../../public/imgs/hbp-4.jpg';
import img5 from '../../public/imgs/hbp-5.jpg';
import img6 from '../../public/imgs/hbp-6.jpg';

// hero icons
import { FaShippingFast, FaLock, FaAngleDoubleLeft } from 'react-icons/fa';
/* --------------------------------------- */
const heroImgs = [
	{ id: 1, imgSrc: img1 },
	{ id: 2, imgSrc: img2 },
	{ id: 3, imgSrc: img3 },
	{ id: 4, imgSrc: img4 },
	{ id: 5, imgSrc: img5 },
	{ id: 6, imgSrc: img6 },
];

const heroFeatures = [
	{ id: 1, icon: FaShippingFast, feature: 'Free Shipping' },
	{ id: 2, icon: FaLock, feature: 'Secure Payments' },
	{ id: 3, icon: FaAngleDoubleLeft, feature: 'Easy Returns' },
];

export { heroImgs, heroFeatures };
