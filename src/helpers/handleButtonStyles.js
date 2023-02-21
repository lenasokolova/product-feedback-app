export const handleBackground = (background) => {
	switch (background) {
		case "delete":
			return "background-color: #000;";
		case "cancel":
			return "background-color: #8ba9c7;";
		default:
			return "background-color: #4661e6;";
	}
};

export const handleHover = (hover) => {
	switch (hover) {
		case "delete":
			return "background-color: #494c52;";
		case "cancel":
			return "background-color: #718eab;";
		default:
			return "background-color: #3b55d4;";
	}
};
