import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<Router>
      <Navbar/>
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</Router>
	);
}

export default App;
