import React from "react";
import Post from "../components/Post";
import Messaging from "../components/Messaging";
import Scroller from "../components/Scroller";
import { Stack } from "@mui/material";

const Timeline = () => {
	return (
		<Stack direction={"row"}>
			<Messaging />
      <Scroller posts={[<Post />,<Post />,<Post />]}/>
		</Stack>
	);
};

export default Timeline;
