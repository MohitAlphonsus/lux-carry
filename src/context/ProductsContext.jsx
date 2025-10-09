import { createContext, useState, useEffect, useContext } from 'react';
const ProductsContext = createContext();

function ProductsProvider({ children }) {
	const [productsData, setProductsData] = useState([]);
	const [productDetails, setProductDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	async function fetchProductsData() {
		const response = await fetch('http://localhost:3000/products/');
		const data = await response.json();
		setProductsData(data);
	}

	async function fetchProductDetailsById(id) {
		try {
			setIsLoading(true);
			const response = await fetch(`http://localhost:3000/products/${id}`);
			const data = await response.json();
			setIsLoading(false);
			setProductDetails(data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(function () {
		fetchProductsData();
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				products: productsData,
				onFetchDetailsById: fetchProductDetailsById,
				product: productDetails,
				isLoading,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
}
function useProducts() {
	const context = useContext(ProductsContext);
	if (context === undefined) {
		throw new Error('ProductsContext is used outside of ProdcutsProvider');
	}
	return context;
}

export { ProductsProvider, useProducts };
