import React from "react";
import { deconnexion } from "../utils/session";
import { Stack, Typography } from "@mui/material";
import { Home, Movie } from "@mui/icons-material";

const Navbar = () => {
	const user = {
		_id: sessionStorage.getItem("id"),
		username: sessionStorage.getItem("username"),
		email: sessionStorage.getItem("email"),
		password: sessionStorage.getItem("password"),
	};
    console.log(process.env.ROOT_URL)
	if (user._id) {
		return (
		<Stack
			className="navbar"
			id="navbar"
			direction="row"
			sx={{
				borderBottom: "2px #425471 solid",
				alignItems: "center",
				padding: "0px",
			}}
		>
			<a href={"http://localhost:5173/"} style={{ margin: "6px" }}>
				<Home/>
			</a>
			<br />

			{sessionStorage.getItem("id") ? (
				<>
					<button type="button" onClick={deconnexion} style={{ margin: "6px" }}>
						disconnect
					</button>
				</>
			) : (
				<button
					type="button"
					onClick={() => {
						window.location.replace(`${process.env.ROOT_URL}/login`);
					}}
					style={{ margin: "6px" }}
				>
					login
				</button>
			)}
			<br />
		</Stack>
	);
	}
	
};
export default Navbar;