import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		// <Router>
		//
		// 	<Routes>
		// 		<Route path="/" element={} />
		// 	</Routes>
		// </Router>
		<>
			<Navbar />
			<LandingPage />
			<h1>launch</h1>
		</>
	);
}

export default App;
