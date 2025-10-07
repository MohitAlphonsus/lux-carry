import { createContext, useState, useEffect, useContext } from 'react';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
	const [productsData, setProductsData] = useState([]);

	async function fetchProductsData() {
		const response = await fetch('http://localhost:3000/products');
		const data = await response.json();
		setProductsData(data);
	}

	useEffect(function () {
		fetchProductsData();
	}, []);

	return (
		<ProductsContext.Provider value={{ products: productsData }}>
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
