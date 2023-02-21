import React from "react";
import styled from "styled-components";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Navbar from "./../../components/Navbar/Navbar";
import FeedbackList from "./../../components/Feedback/FeedbackList";

const DashboardPage = () => {
	return (
		<DashboardPageContainer>
			<Sidebar />
			<section>
				<Navbar />
				<FeedbackList />
			</section>
		</DashboardPageContainer>
	);
};

export default DashboardPage;

const DashboardPageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px auto;
`;
