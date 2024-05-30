import React from "react";
import { Stack, Typography, Button } from "@mui/material";

const LandingPage = () => {
	document.documentElement.style.backgroundColor = "#7C5CFF";

	return (
		<Stack>
			<Typography
				style={{
					margin: "32px 0px 32px 40px",
					textDecorationLine: "underline",
					color: "#FFF",
					fontSize: "64px",
					fontWeight: "bold",
				}}
			>
				Rejoignez une communauté de talents <br /> du digital
			</Typography>
			<br />
			<Typography
				style={{
					margin: "0px 0px 32px 40px",
					textDecorationLine: "underline",
					color: "#000",
					fontSize: "38px",
					fontWeight: "bold",
				}}
			>
				Profitez de notre réseau pour faire connaissance avec <br /> des profils
				qui vous correspondent.
			</Typography>
			<br />
			<Button
				variant="outlined"
				sx={{
					margin: "72px 0px 0px 0px",
					width: "196px",
					height: "64px",
					color: "#FFF",
					backgroundColor: "#7A7CFF",
					borderRadius: 5,
					borderColor: "#000",
					alignSelf: "center",
				}}
				onClick={() => {
					window.location.assign("../login");
				}}
			>
				S'inscrire
			</Button>
			<br />
			<Typography
				sx={{ margin: "0px 0px 102px 0px", color: "#FFF", alignSelf: "center" }}
			>
				Deja inscrit ?{" "}
				<a
					href="../signup"
					style={{ color: "#FFF", textDecoration: "underline" }}
				>
					connectez vous
				</a>
			</Typography>
		</Stack>
	);
};

export default LandingPage;
