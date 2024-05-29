import React from "react";
import { deconnexion } from "../utils/session";
import { Stack, Typography } from "@mui/material";
import { Home, Movie } from "@mui/icons-material";

const Navbar = () => {
	const user = {
		_id: localStorage.getItem("id"),
		username: localStorage.getItem("username"),
		email: localStorage.getItem("email"),
		password: localStorage.getItem("password"),
	};
    console.log(process.env.ROOT_URL)
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
};
export default Navbar;