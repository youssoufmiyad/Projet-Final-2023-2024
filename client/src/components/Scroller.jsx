import React, { useState, useEffect } from "react";
import {
	Stack,
	Typography,
	Box,
	TextField,
	Menu,
	MenuItem,
	Button,
	Modal,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "../utils/fetchData";
import NewPost from "./NewPost";
import Post from "./Post";

const Scroller = () => {
	const [newPostOpen, setNewPostOpen] = useState(false);
	const handleNewPostOpen = () => {
		setNewPostOpen(true);
	};
	const handleNewPostClose = () => {
		setNewPostOpen(false);
	};

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts(setPosts);
	}, [newPostOpen]);

	const searchMore = () => {
		getPosts(setPosts);
	};

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	

	return (
		<Stack
			className="scroller"
			sx={{ width: "40%", height: "50rem", overflowY: "auto", padding: "4px" }}
		>
			<InfiniteScroll
				dataLength={posts.length}
				next={searchMore}
				loader={<p>Loading...</p>}
				endMessage={<p>No more data to load.</p>}
			>
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Typography variant="sectionName">Posts</Typography>
					<br />
					<Button
						startIcon={<KeyboardArrowDown />}
						variant="outlined"
						onClick={handleClick}
					>
						Filtrer
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem>Personne</MenuItem>
						<MenuItem>Projet</MenuItem>
					</Menu>
				</Stack>

				<Box>
					<Stack
						sx={{
							border: "3px rgba(0, 0, 0, 0.22) solid",
							padding: "20px",
							cursor: "text",
						}}
						onClick={handleNewPostOpen}
					>
						Nouveau post...
					</Stack>
					<Modal open={newPostOpen} onClose={handleNewPostClose}>
						{NewPost(setNewPostOpen)}
					</Modal>
				</Box>
				<br />
				{posts.map((post, id) => {
					return (
						<div key={`post ${id}`}>
							<Post post={post} /> <br />{" "}
						</div>
					);
				})}
			</InfiniteScroll>
		</Stack>
	);
};

export default Scroller;
