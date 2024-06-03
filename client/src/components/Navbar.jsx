import React from "react";
import { deconnexion } from "../utils/session";
import {
	Box,
	Button,
	IconButton,
	FormControl,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";
import { Home, Search, Notifications, Person, Add } from "@mui/icons-material";

const Navbar = () => {
	const user = {
		_id: sessionStorage.getItem("id"),
		username: sessionStorage.getItem("username"),
		email: sessionStorage.getItem("email"),
		password: sessionStorage.getItem("password"),
	};
	console.log(process.env.ROOT_URL);
	if (user._id) {
		return (
			<Box
				className="navbar"
				id="navbar"
				direction="row"
				sx={{
					width: "60%",
					height: "100px",
					border: "3px #7C5CFF solid",
					display: "flex",
					alignItems: "center",
				}}
			>
				<a href={"http://localhost:5173/"} style={{ margin: "6px" }}>
					<Home />
				</a>

				<br />

				<FormControl sx={{ m: 1, width: "40%" }} variant="outlined">
					<OutlinedInput
						endAdornment={
							<InputAdornment position="end">
								<Search />
							</InputAdornment>
						}
						sx={{ borderRadius: "120px" }}
					/>
				</FormControl>

				<br />

				<IconButton sx={{width:"64px", height:"64px"}}>
					<Person sx={{width:"56px", height:"56px"}}/>
				</IconButton>

				<br />

				<IconButton sx={{width:"64px", height:"64px"}}>
					<Notifications sx={{width:"56px", height:"56px"}}/>
				</IconButton>

				<br />

				<Button variant="contained" startIcon={<Add/>}>
					Nouveau projet
				</Button>

				{sessionStorage.getItem("id") ? (
					<div style={{ margin: "6px" }}>
						<button type="button" onClick={deconnexion}>
							disconnect
						</button>
					</div>
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
			</Box>
		);
	}
};
export default Navbar;
