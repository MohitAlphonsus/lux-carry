import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components';
import { ProductStore } from './pages';
import { ProductsProvider } from './context/ProductsContext';

export default function App() {
	return (
		<ProductsProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-store" element={<ProductStore />} />
				</Routes>
			</BrowserRouter>
		</ProductsProvider>
	);
}
