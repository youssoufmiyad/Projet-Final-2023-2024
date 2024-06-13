import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { themeOptions } from "./utils/theme";
import { createContext } from "react";
import { getUsers } from "./utils/fetchData";
import Timeline from "./pages/Timeline";
import NewProject from "./pages/NewProject";
import NewHiringOffer from "./pages/NewHiringOffer";
import Profile from "./pages/UserProfile";

export const usersContext = createContext();

function App() {
	const theme = createTheme(themeOptions);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers(setUsers);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<usersContext.Provider value={users}>
				<Router>
					<Navbar />
					<br />
					<Routes>
						<Route path="/" element={sessionStorage.getItem("id") === null ? <LandingPage /> : <Timeline/>} />

						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/new-project" element={<NewProject />} />
						<Route path="/new-hiring-offer" element={<NewHiringOffer />} />
						<Route path="/users/:id" element={<Profile />} />
					</Routes>
				</Router>
			</usersContext.Provider>
		</ThemeProvider>
	);
}

export default App;
