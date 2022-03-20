import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React, { createContext } from "react";
import Hero from "./comps/Hero/Hero";
import Nav from "./comps/Nav/Nav";
import ProductPage from "./comps/ProductPage/ProductPage";
import Showcase from "./comps/Showcase/Showcase";
import { products } from "./products";

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
		<ProductsContext.Provider value={{ products }}>
			<div className='app'>
				<Nav />
				<div className='body'>
					<Hero />
					<Showcase title='Shop Fruits' />
					<ProductPage />
				</div>
			</div>
		</ProductsContext.Provider>

		// </ThemeProvider>
	);
};

export default App;
