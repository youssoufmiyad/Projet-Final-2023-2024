import React, { useState } from "react";
import {
	Stack,
	Typography,
	Box,
	TextField,
	Menu,
	MenuItem,
	Button,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

import InfiniteScroll from "react-infinite-scroll-component";

const Scroller = ({ posts }) => {
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
				loader={<p>Loading...</p>}
				endMessage={<p>No more data to load.</p>}
			>
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Typography variant="sectionName">Posts</Typography>
					<br />
					<Button startIcon={<KeyboardArrowDown/>} variant="outlined" onClick={handleClick} >
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
						<MenuItem >Projet</MenuItem>
					</Menu>
				</Stack>

				<Box>
					<TextField
						multiline
						fullWidth
						placeholder="Nouveau post..."
						sx={{ marginTop: "64px" }}
					/>
				</Box>
				<br />
				{posts.map((post, id) => {
					return (
						<div key={`post ${id}`}>
							{post} <br />{" "}
						</div>
					);
				})}
			</InfiniteScroll>
		</Stack>
	);
};

export default Scroller;
