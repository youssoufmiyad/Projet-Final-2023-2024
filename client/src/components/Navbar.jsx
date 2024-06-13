import React from "react";
import { deconnexion } from "../utils/session";
import {
	Box,
	Button,
	IconButton,
	FormControl,
	OutlinedInput,
	InputAdornment,
	Menu,
	MenuItem,
} from "@mui/material";
import { Home, Search, Notifications, Person, Add } from "@mui/icons-material";

const Navbar = () => {
	const user = {
		id: sessionStorage.getItem("id"),
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const Profile = () => {
		setAnchorEl(null);
		window.location.replace(`../users/${user.id}`)
	};

	const LogOut = () => {
		setAnchorEl(null);
		deconnexion();
	};

	// console.log(process.env.ROOT_URL);
	if (user.id) {
		return (
			<Box
				className="navbar"
				id="navbar"
				sx={{
					width: "99%",
					height: "100px",
					border: "3px #7C5CFF solid",
					display: "flex",
					alignItems: "center",
					marginLeft: "4px",
					justifyContent: "space-evenly",
				}}
			>
				<a href={"http://localhost:5173/"} style={{ padding: "6px" }}>
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

				<IconButton
					onClick={handleClick}
					sx={{ width: "64px", height: "64px" }}
				>
					<Person sx={{ width: "56px", height: "56px" }} />
				</IconButton>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
				>
					<MenuItem onClick={Profile}>Profile</MenuItem>
					<MenuItem onClick={LogOut} sx={{ color: "red" }}>
						Se déconnecter
					</MenuItem>
				</Menu>

				<br />

				<IconButton sx={{ width: "64px", height: "64px" }}>
					<Notifications sx={{ width: "56px", height: "56px" }} />
				</IconButton>

				<br />

				{sessionStorage.getItem("id") ? (
					<>
						<button
							type="button"
							onClick={deconnexion}
							style={{ margin: "6px" }}
						>
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
			</Box>
		);
	}
};
export default Navbar;
