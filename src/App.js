import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React from "react";
import Nav from "./comps/Nav/Nav";

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
		<div>
			<Nav />
		</div>
		// </ThemeProvider>
	);
};

export default App;
