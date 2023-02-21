import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const CommentContainer = styled.div`
	display: flex;
	background-color: ${STYLES.bgWhite};
	padding: 25px;
	margin-bottom: 18px;
	border-radius: 10px;

	> img {
		height: 35px;
		width: 35px;
		object-fit: cover;
		border-radius: 50px;
		margin-right: 25px;
	}
`;

export const CommentBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const CommentInfo = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

export const CommentInfoLeft = styled.div`
	> h4 {
		font-size: 14px;
		font-weight: 700;
		margin-bottom: -5px;
	}

	> span {
		font-size: 12px;
	}
`;

export const CommentText = styled.p`
	font-size: 14px;
`;
