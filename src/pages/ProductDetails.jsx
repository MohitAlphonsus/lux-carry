import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToCart,
	incrementQuantity,
	decrementQuantity,
} from '../store/cartSlice';
import { useParams } from 'react-router';
import { useProducts } from '../context/ProductsContext';
import styles from './ProductDetails.module.css';
import { Button, Counter, Tags } from '../components';
import { FaCheckCircle } from 'react-icons/fa';

export default function ProductDetails() {
	const [mainShowImg, setMainShowImg] = useState('');
	const { id } = useParams();
	const { product, isLoading, onFetchDetailsById } = useProducts();
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cartItems);

	const cartItem = cartItems.find(item => item.id === product.id);

	function handleImageSwitch(srcImg) {
		setMainShowImg(srcImg);
	}

	function handleAddToCart() {
		dispatch(addToCart(product));
	}

	useEffect(function () {
		onFetchDetailsById(id);
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!product) return <p>Data not found</p>;

	return (
		<div className="container">
			<section className={styles.productDetails}>
				<div className={styles.productImages}>
					<div className={styles.stackOfProductImages}>
						{product?.images?.map(img => (
							<div
								className={styles.stackImage}
								style={{
									backgroundImage: `url(${img.imgSrc})`,
								}}
								key={img.id}
								onClick={() => handleImageSwitch(img.imgSrc)}
							>
								&nbsp;
							</div>
						))}
					</div>
					<div
						className={styles.productImage}
						style={{
							backgroundImage: `url(${
								mainShowImg === '' ? product?.images?.[0]?.imgSrc : mainShowImg
							})`,
						}}
					>
						&nbsp;
					</div>
				</div>
				<div className={styles.productInformation}>
					<h2>{product?.name}</h2>
					<div>{product?.ratings}</div>
					<Tags
						productClosureType={product?.ClosureType}
						productOuterMaterial={product?.OuterMaterial}
						productStyle={product?.Style}
					/>

					<div className={styles.aboutDim}>
						<p>
							<span>Weight </span>
							<span> {product?.Weight}g</span>
						</p>
						<p>
							<span>Dimensions </span>
							<span> {product?.dimensions}</span>
						</p>
					</div>

					<ul className={styles.aboutList}>
						{product?.about?.map(abt => (
							<li key={abt}>
								<FaCheckCircle />
								<span>{abt}</span>
							</li>
						))}
					</ul>
					<div className={styles.footer}>
						<p className={styles.price}>
							<span>{product.price}</span>
							<span>₹</span>
						</p>
						{cartItem && (
							<Counter
								quantity={cartItem.quantity}
								onDecrement={() => dispatch(decrementQuantity(product.id))}
								onIncrement={() => dispatch(incrementQuantity(product.id))}
							/>
						)}
						<Button onClick={handleAddToCart}>Add To Cart</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
