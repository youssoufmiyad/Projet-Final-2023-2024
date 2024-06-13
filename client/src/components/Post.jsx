import React, { useState, useEffect } from "react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import { Person } from "@mui/icons-material";
import ReactionBar from "./ReactionBar";
import { getUser } from "../utils/fetchData";
const Post = ({ post }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		getUser(setUser, post.Id_Utilisateur);
		
	}, [post.Id_Utilisateur]);

	useEffect(() => {
		console.log(user)
	}, [user]);

	const dateParts = post.Date_publication.split(":");
	dateParts[0]=dateParts[0].replace("-", "/");
	// const publicationDate = new Date(
	// 	dateParts[0],
	// 	dateParts[1] - 1,
	// 	dateParts[2].substr(0, 2),
	// );
	return (
		<Stack
			sx={{
				border: "3px rgba(0, 0, 0, 0.22) solid",
			}}
		>
			<Box
				sx={{ marginTop: "32px", padding: "12px", whiteSpace: "break-spaces" }}
			>
				<Stack direction={"row"}>
					<Person sx={{ width: "108px", height: "108px" }} />
					<div>
						<Typography variant="h4">{user ? user.Nom : "noname"}</Typography>
						<Typography variant="h6">x relations en commun</Typography>
						<Typography variant="h6">{dateParts[0]} à 20:00</Typography>
					</div>
				</Stack>
				<Typography variant="textPost">
					{post.Contenue}
					{post.Contenue.length > 500 ? (
						<div>
							<Typography color={"primary"}>voir plus</Typography>
						</div>
					) : (
						false
					)}

					<div>
						<img
							style={{ maxWidth: "100%" }}
							src="https://hips.hearstapps.com/hmg-prod/images/walking-on-the-danxia-landform-royalty-free-image-1623252956.jpg?resize=1200:*"
							alt=""
						/>
					</div>
				</Typography>
			</Box>
			<ReactionBar />
		</Stack>
	);
};

export default Post;
