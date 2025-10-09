import { BrowserRouter, Routes, Route } from 'react-router';
import { Home, Nav, ProtectedRoute } from './components';
import { ProductStore, ProductDetails, Cart, Login, Checkout } from './pages';
import { ProductsProvider } from './context/ProductsContext';

export default function App() {
	return (
		<ProductsProvider>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/product-store"
						element={
							<ProtectedRoute>
								<ProductStore />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/product/:id"
						element={
							<ProtectedRoute>
								<ProductDetails />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/cart"
						element={
							<ProtectedRoute>
								<Cart />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/checkout"
						element={
							<ProtectedRoute>
								<Checkout />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ProductsProvider>
	);
}
