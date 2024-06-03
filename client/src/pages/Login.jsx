import React, { useContext, useState } from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import hashPassword from "../utils/hashPassword";
import { connexion } from "../utils/session";
import {usersContext} from "../App.jsx"

const Login = () => {
	document.documentElement.style.backgroundColor = "#2B2254";

	const users = useContext(usersContext);

	console.log(users[0])

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let userExist = false;
		let actualUser;
		// Identification
		for (let i = 0; i < users.length; i++) {
			if (users[i].Email === email) {
				userExist = true;
				actualUser = users[i];
			}
		}
		if (userExist) {
			console.log("user exist");
		} else {
			console.log("user doesn't exist");
			return;
		}

		// Authentification
		if (hashPassword(password) === actualUser.Mot_de_passe) {
			connexion(actualUser);
		} else {
			console.log("incorrect password");
		}
	};

	return (
		<Stack sx={{ alignItems: "center" }}>
			<br />
			<Typography
				sx={{
					color: "#FFF",
					fontSize: "24px",
				}}
			>
				CONNEXION
			</Typography>

			<br />
			<a
				style={{
					position:"absolute",
					color: "grey",
					fontSize: "24px",
					right: "26%",
					top:"110px"
				}}
				href="../signup"
			>
				INSCRIPTION
			</a>
			<br />

			<Stack
				sx={{
					alignItems: "center",
					backgroundColor: "#FFF",
					width: "30%",
					height: "450px",
					borderRadius: "24px",
				}}
			>
				<br />
				<Stack
					className="form"
					onSubmit={() => {
						console.log("Submit !!");
					}}
					sx={{
						marginTop: "32px",
					}}
				>
					<TextField
						id="filled-basic"
						label="email"
						variant="filled"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						sx={{ width: "360px" }}
					/>
					<br />
					<br />
					<TextField
						id="filled-basic"
						label="mot de passe"
						type="password"
						variant="filled"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<br />
					<Button
						type="button"
						onClick={handleSubmit}
						variant="contained"
						sx={{ height: "88px", marginTop: "32px" }}
					>
						Se connecter
					</Button>
				</Stack>
				<br />
				<Stack
					sx={{
						position: "absolute",
						right: "26%",
						marginTop: "40px",
						width: "30%",
						height: "480px",
						backgroundColor: "grey",
						zIndex: "-1",
						borderRadius: "24px",
					}}
				/>
				Pas encore de compte ? <a href="../signup"> Inscrivez vous</a>
			</Stack>
		</Stack>
	);
};

export default Login;
