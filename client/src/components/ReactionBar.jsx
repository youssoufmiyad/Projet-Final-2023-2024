import React from "react";
import { Stack, Button } from "@mui/material";
import Heart from "../assets/heart.png";
import Thumb from "../assets/thumb.png";
import HandHeart from "../assets/hand-heart.png";
import Clap from "../assets/clap.png";
import Smile from "../assets/smile.png";

const ReactionBar = () => {
	return (
		<Stack
			sx={{
				flexDirection: "row",
				justifyContent: "space-evenly",
				borderTop: "3px rgba(0, 0, 0, 0.22) solid",
                paddingTop:"16px",
                paddingBottom:"16px",
                height:"32px"
			}}
		>
			<Button >
				<img src={Heart} alt="" style={{maxHeight:"150%"}}  />
			</Button>
			<Button>
				<img src={Thumb} alt="" style={{maxHeight:"150%"}} />
			</Button>
			<Button>
				<img src={HandHeart} alt="" style={{maxHeight:"150%"}} />
			</Button>
			<Button>
				<img src={Clap} alt="" style={{maxHeight:"150%"}} />
			</Button>
			<Button>
				<img src={Smile} alt="" style={{maxHeight:"150%"}} />
			</Button>
		</Stack>
	);
};

export default ReactionBar;
