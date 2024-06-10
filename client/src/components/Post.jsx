import React from "react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import { Person } from "@mui/icons-material";
import ReactionBar from "./ReactionBar";
const Post = () => {
	return (
		<Stack
			sx={{
				border: "3px rgba(0, 0, 0, 0.22) solid",
				width: "30%",
			}}
		>
			<Box
				sx={{ marginTop: "32px", padding: "12px", whiteSpace: "break-spaces" }}
			>
				<Stack direction={"row"}>
					<Person sx={{ width: "108px", height: "108px" }} />
					<div>
						<Typography variant="h4">NOM</Typography>
						<Typography variant="h6">x relations en commun</Typography>
						<Typography variant="h6">10/06/2024 à 20:00</Typography>
					</div>
				</Stack>
				<Typography variant="textPost">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dolor
					vestibulum orci egestas finibus id eget lectus. In ut magna fringilla,
					consequat dui a, tristique augue. Praesent non tortor vitae erat
					<br />
					<br />
					pretium bibendum nec vel augue. Phasellus gravida mollis consequat.
					Curabitur ut est euismod, placerat elit nec, vulputate ex. Nunc
					egestas ultrices ante, venenatis euismod urna. Nulla enim metus,
					rhoncus et scelerisque vitae, elementum...{" "}
					<div>
						<Typography color={"primary"}>voir plus</Typography>
					</div>
					<div >
						<img style={{maxWidth:"100%",}}
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
