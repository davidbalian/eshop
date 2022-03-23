import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React, { createContext, useState } from "react";
import Hero from "./comps/Hero/Hero";
import Nav from "./comps/Nav/Nav";
import ProductPage from "./comps/ProductPage/ProductPage";
import { products } from "./products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./comps/Category/Category";
import Cart from "./comps/Cart/Cart";

export const ProductsContext = createContext();
export const CartContext = createContext();

const App = () => {
	// const theme = createTheme({
	// 	light: {
	// 		100: "#F2F8F6",
	// 		200: "#011638",
	// 		300: "#087F8C"
	// 	}
	// });

	const [cartItems, setCartItems] = useState([]);

	return (
		// <ThemeProvider theme={theme}>
		<Router>
			<CartContext.Provider value={{ cartItems, setCartItems }}>
				<ProductsContext.Provider value={{ products }}>
					<div className='app'>
						<Nav />
						<div className='body'>
							<Routes>
								<Route path='/eshop' element={<Hero />} />
								<Route path='/eshop/:category' element={<Category />} />
								<Route path='/eshop/:category/:type' element={<ProductPage />} />
								<Route path='/eshop/cart' element={<Cart />} />
							</Routes>
						</div>
					</div>
				</ProductsContext.Provider>
			</CartContext.Provider>
		</Router>

		// </ThemeProvider>
	);
};

export default App;
