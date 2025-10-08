import { BrowserRouter, Routes, Route } from 'react-router';
import { Home, Nav } from './components';
import { ProductStore, Cart } from './pages';
import { ProductsProvider } from './context/ProductsContext';

export default function App() {
	return (
		<ProductsProvider>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-store" element={<ProductStore />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</ProductsProvider>
	);
}
