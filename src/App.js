import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React, { createContext } from "react";
import Hero from "./comps/Hero/Hero";
import Nav from "./comps/Nav/Nav";
import ProductPage from "./comps/ProductPage/ProductPage";
import Showcase from "./comps/Showcase/Showcase";
import { products } from "./products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./comps/Category/Category";

export const ProductsContext = createContext();

const App = () => {
	// const theme = createTheme({
	// 	light: {
	// 		100: "#F2F8F6",
	// 		200: "#011638",
	// 		300: "#087F8C"
	// 	}
	// });

	return (
		// <ThemeProvider theme={theme}>
		<Router>
			<ProductsContext.Provider value={{ products }}>
				<div className='app'>
					<Nav />
					<div className='body'>
						<Routes>
							<Route path='/' element={<Hero />} />
							<Route path='/eshop' element={<Hero />} />
							<Route path='/showcase' element={<Showcase title='Shop Fruits' />} />
							<Route path='/:category' element={<Category />} />
							<Route path='/:category/:type' element={<ProductPage />} />
						</Routes>
					</div>
				</div>
			</ProductsContext.Provider>
		</Router>

		// </ThemeProvider>
	);
};

export default App;
