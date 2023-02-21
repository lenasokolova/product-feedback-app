import styled from "styled-components";

export const AuthDiv = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const FormContainerDiv = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	> .MuiSvgIcon-root {
		font-size: 70px;
		color: #4661e6;
		margin-bottom: 20px;
	}
	> h1 {
		margin-bottom: 25px;
	}
`;

export const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
`;

export const SubmitBtn = styled.button`
	height: 50px;
	background-color: #4661e6;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-weight: 600;
	font-size: 14px;
	margin-top: 15px;
	margin-bottom: 15px;

	:hover {
		background-color: #0822a3;
	}
`;
