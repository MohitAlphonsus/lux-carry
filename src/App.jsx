import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components';
import { ProductStore } from './pages';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product-store" element={<ProductStore />} />
			</Routes>
		</BrowserRouter>
	);
}
