import React, { useState } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { modifyUser } from "../utils/fetchData";

const ModifyUserForm = (user) => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = () => {
		modifyUser(
			firstname,
			lastname,
			email,
			password,
			sessionStorage.getItem("id"),
		);
	};
	return (
		<Stack
			sx={{
				width: "780px",
				height: "750px",
				zIndex: "1",
				position: "fixed",
				left: "50%",
				top: "50%",
				border: "3px rgba(0, 0, 0, 0.22) solid",
				transform: "translate(-50%, -50%)",
				backgroundColor: "#FFF",
			}}
		>
			<Typography>Modification du profil</Typography>

			<TextField
				defaultValue={user ? user.Prenom : ""}
				onChange={(e) => {
					setFirstname(e.target.value);
				}}
			>
				Prénom
			</TextField>
			<br />
			<TextField
				defaultValue={user ? user.Nom : ""}
				onChange={(e) => {
					setLastname(e.target.value);
				}}
			>
				Nom de famille
			</TextField>
			<br />
			<TextField
				defaultValue={user ? user.Email : ""}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			>
				mail
			</TextField>
			<br />
			<TextField
				onChange={(e) => {
					setOldPassword(e.target.value);
				}}
			>
				ancien mot de passe
			</TextField>
			<br />
			<TextField
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			>
				nouveau mot de passe
			</TextField>
			<br />
			<TextField
				onChange={(e) => {
					setConfirmPassword(e.target.value);
				}}
			>
				confirmer le nouveau mot de passe
			</TextField>
			<br />
			<Button onClick={handleSubmit}>Confirmer</Button>
		</Stack>
	);
};

export default ModifyUserForm;
