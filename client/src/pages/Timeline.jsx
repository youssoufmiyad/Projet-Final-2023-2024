import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import Messaging from "../components/Messaging";
import Scroller from "../components/Scroller";
import NewPost from "../components/NewPost";
import { Stack } from "@mui/material";
import { getPosts } from "../utils/fetchData";

const Timeline = () => {

	return (
		<Stack direction={"row"}>
			<Messaging />
			<Scroller />
		</Stack>
	);
};

export default Timeline;
