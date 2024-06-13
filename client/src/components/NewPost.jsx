import React, { useState } from "react";
import {
	Stack,
	Typography,
	TextField,
	Button,
	IconButton,
} from "@mui/material";
import { publishPost } from "../utils/fetchData";
import { AttachFile } from "@mui/icons-material";

const NewPost = (setIsOpen) => {
	const [content, setContent] = useState("");

	const handleSubmit = () => {
		publishPost(sessionStorage.getItem("id"), content, null);
		setIsOpen(false)
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
			<Typography variant="h3" sx={{ padding: "0 16px 16px" }}>
				Nouveau post
			</Typography>
			<TextField
				multiline
				rows={25}
				onChange={(e) => {
					setContent(e.target.value);
				}}
			/>
				<div style={{display:"flex", justifyContent:"space-between"}}>
					<IconButton component="label" sx={{marginTop:"8px"}}>
						<AttachFile />
						<input type="file" hidden />
					</IconButton>
					<Button
						variant="contained"
						sx={{ width: "200px", height: "50px", borderRadius: "44px", marginRight:"16px", marginTop:"8px" }}
						onClick={handleSubmit}
					>
						Envoyer
					</Button>
				</div>
		</Stack>
	);
};

export default NewPost;
