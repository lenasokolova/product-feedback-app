import React from "react";
import hero from "./hero.png";
import {
	WelcomeImageDiv,
	WelcomeImg,
	WelcomeInfoDiv,
} from "./WelcomeImage.styles";

const WelcomeImage = () => {
	return (
		<WelcomeImageDiv>
			<WelcomeInfoDiv>
				<h1 style={{ marginBottom: "15px" }}>
					Have a tangible impact on the product!
				</h1>
				<p>Help to improve the product with your feedbacks</p>
			</WelcomeInfoDiv>
			<WelcomeImg src={hero} />
		</WelcomeImageDiv>
	);
};

export default WelcomeImage;
