import React from "react";
import Post from "../components/Post";
import Messaging from "../components/Messaging";
import { Stack } from "@mui/material";

const Timeline = () => {
	return (
		<Stack direction={"row"}>
			<Messaging />
			<Post />
		</Stack>
	);
};

export default Timeline;
