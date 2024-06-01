import React, { useState, useEffect } from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import hashPassword from "../utils/hashPassword";
import { emailREGEX, passwordREGEX, nameREGEX } from "../utils/regex";

const Signup = () => {
	document.documentElement.style.backgroundColor = "#2B2254";
  
	const [firstName, setFirstName] = useState("");
	const [firstNameError, setFirstNameError] = useState("");

	const [lastName, setLastName] = useState("");
	const [lastNameError, setLastNameError] = useState("");

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");

	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [confirmPassword, setConfirmPassword] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	useEffect(() => {
		if (!nameREGEX.test(firstName) & (firstName.length > 1)) {
			setFirstNameError(
				"Prénom invalide, le prénom ne doit pas contenir de chiffres",
			);
		} else {
			setFirstNameError("");
		}
	}, [firstName]);

	useEffect(() => {
		if (!nameREGEX.test(lastName) & (lastName.length > 1)) {
			setLastNameError(
				"Nom de famille invalide, le nom ne doit pas contenir de chiffres",
			);
		} else {
			setLastNameError("");
		}
	}, [lastName]);

	useEffect(() => {
		if (!emailREGEX.test(email) & (email.length > 1)) {
			setEmailError("Adresse mail invalide");
		} else {
			setEmailError("");
		}
	}, [email]);

	useEffect(() => {
		if (!passwordREGEX.test(password) & (password.length > 1)) {
			setPasswordError(
				"Le mot de passe doit contenir 8 caractères dont 1 majuscule, 1 minuscule, 1 nombre, et 1 caractère spécial",
			);
		} else {
			setPasswordError("");
		}
	}, [password]);

	useEffect(() => {
		if ((confirmPassword !== password) & (confirmPassword.length > 1)) {
			setConfirmPasswordError("Les mots de passes sont différents");
		} else {
			setConfirmPasswordError("");
		}
	}, [confirmPassword, password]);

	const createUser = async () => {
		const hashPWD = hashPassword(password);
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				firstname: firstName,
				lastname: lastName,
				email: email,
				password: hashPWD,
			}),
		};
		const response = await fetch("http://localhost:8080/users", requestOptions);
		window.location.replace("../");
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
				INSCRIPTION
			</Typography>

			<br />
			<a
				style={{
					position: "absolute",
					color: "grey",
					fontSize: "24px",
					right: "26%",
					top: "24px",
				}}
				href="../login"
			>
				CONNEXION
			</a>
			<br />

			<Stack
				sx={{
					alignItems: "center",
					backgroundColor: "#FFF",
					width: "30%",
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
						error={
							(lastNameError === "") | (lastNameError.length < 1) ? false : true
						}
						helperText={lastNameError}
						id="filled-basic"
						label="nom de famille"
						variant="filled"
						onChange={(e) => {
							setLastName(e.target.value);
						}}
						sx={{ width: "360px" }}
					/>
					<br />

					<TextField
						error={
							(firstNameError === "") | (firstNameError.length < 1)
								? false
								: true
						}
						helperText={firstNameError}
						id="filled-basic"
						label="prénom"
						variant="filled"
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
						sx={{ width: "360px" }}
					/>
					<br />
					<TextField
						error={(emailError === "") | (emailError.length < 1) ? false : true}
						id="filled-basic"
						label="email"
						variant="filled"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						helperText={emailError}
						sx={{ width: "360px" }}
					/>
					<br />
					<TextField
						error={
							(passwordError === "") | (passwordError.length < 1) ? false : true
						}
						id="filled-basic"
						label="mot de passe"
						type="password"
						variant="filled"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						helperText={passwordError}
						sx={{ width: "360px" }}
					/>
					<br />
					<TextField
						error={
							(confirmPasswordError === "") | (confirmPasswordError.length < 1)
								? false
								: true
						}
						id="filled-basic"
						label="confirmer le mot de passe"
						type="password"
						variant="filled"
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}
						helperText={confirmPasswordError}
						sx={{ width: "360px" }}
					/>
					<br />
					<Button
						type="button"
						onClick={createUser}
						variant="contained"
						sx={{ height: "88px", marginTop: "32px" }}
					>
						S'inscrire
					</Button>
				</Stack>
				<br />
				<div style={{textAlign:"center", paddingBottom:"16px"}}>
					Pas encore de compte ? <br /><a href="../signup"> Inscrivez vous</a>
				</div>

				<Stack
					sx={{
						position: "absolute",
						right: "26%",
						top: "160px",
						width: "30%",
						height: "480px",
						backgroundColor: "grey",
						zIndex: "-1",
						borderRadius: "24px",
					}}
				/>
			</Stack>
			<br />
		</Stack>
	);
};

export default Signup;
