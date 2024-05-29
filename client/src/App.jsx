import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Login";
import { themeOptions } from "./utils/theme";

function App() {
	const theme = createTheme(themeOptions);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
