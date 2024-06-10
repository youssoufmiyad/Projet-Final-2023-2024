import { Typography } from "@mui/material";

export const themeOptions = {
	overrides: {
		MuiButton: {
			root: {
				backgroundColor: "#FFF",
			},
		},
	},
	palette: {
		mode: "light",
		primary: {
			main: "#7c5cff",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			paper: "#f6f1ff",
			default: "#ffffff",
		},
		text: {
			primary: "#000",
			secondary: "rgba(113,102,102,0.65)",
			disabled: "#716666",
			hint: "#7a7cff",
		},
	},
	typography: {
		bold:{
			fontWeight:"650"
		},
		h4: {
			fontSize: "20px",
			fontWeight: "700px",
		},
		h6: {
			fontSize: "14px",
		},
		postText: {
			fontSize: "18px",
			whiteSpace: "break-spaces",
		},
		sectionName: {
			fontSize: "24px",
			fontWeight: "700",
			marginLeft: "24px",
			marginBottom: "8px",
			color: "#B8AEAE",
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					postText: null,
					sectionName: null,
					bold: null,
				},
			},
		},
	},
};
