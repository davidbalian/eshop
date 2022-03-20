import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React from "react";
import Hero from "./comps/Hero/Hero";
import Nav from "./comps/Nav/Nav";
import Showcase from "./comps/Showcase/Showcase";

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
		<div className='app'>
			<Nav />
			<div className='body'>
				<Hero />
				<Showcase title='Shop Fruits' />
			</div>
		</div>
		// </ThemeProvider>
	);
};

export default App;
