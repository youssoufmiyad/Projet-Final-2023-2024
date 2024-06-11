import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { Person, Add } from "@mui/icons-material";

const Messaging = () => {
	return (
		<Stack
			sx={{
				border: "3px #7C5CFF solid",
				width: "20%",
				maxHeight: "442px",
				marginRight: "5%",
				marginLeft: "4px",
			}}
		>
			<Typography variant="sectionName" sx={{marginLeft:"24px"}}>Messagerie</Typography>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography>Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography variant="bold">Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography>Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography variant="bold">Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography>Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography variant="bold">Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Stack
				direction={"row"}
				alignItems={"center"}
				borderTop={"1px #000 solid"}
				borderBottom={"1px #000 solid"}
			>
				<Person sx={{ width: "34px", height: "34px" }} />
				<div>
					<Typography fontWeight={"550"}>nom</Typography>
					<Typography>Dernier message envoyé non lue</Typography>
				</div>
			</Stack>
			<Button variant="contained" startIcon={<Add />} sx={{ width: "80%", marginLeft:"10%", marginTop:"6px" }}>
				Nouveau projet
			</Button>
		</Stack>
	);
};

export default Messaging;
