import React from "react";
import Post from "../components/Post";
import Messaging from "../components/Messaging";
import Scroller from "../components/Scroller";
import NewPost from "../components/NewPost";
import { Stack } from "@mui/material";

const Timeline = () => {
	return (
		<Stack direction={"row"}>
			<Messaging />
			<Scroller posts={[<Post />, <Post />, <Post />]} />
			{/* <NewPost /> */}
		</Stack>
	);
};

export default Timeline;
