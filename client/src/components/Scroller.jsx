import React from "react";
import { Stack, Typography, Box, TextField } from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";

const Scroller = ({ posts }) => {
	return (
		<Stack className="scroller" sx={{width:"40%", height:"51.4rem", overflowY:"auto", padding:"4px"}}>
			<InfiniteScroll
				dataLength={posts.length}
				loader={<p>Loading...</p>}
				endMessage={<p>No more data to load.</p>}
			>
				<Typography variant="sectionName">Posts</Typography>
                <Box>
                    <TextField multiline fullWidth placeholder="Nouveau post..." />
                </Box>
                <br />
                {posts.map((post)=>{return post})}
			</InfiniteScroll>
		</Stack>
	);
};

export default Scroller;
