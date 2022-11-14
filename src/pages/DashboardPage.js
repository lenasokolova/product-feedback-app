import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ThreadsList from '../components/ThreadsList';

const DashboardPage = () => {
    return (
        <DashboardPageContainer>
            <Sidebar />
            <Main>
                <Navbar />
                <ThreadsList />
            </Main>
        </DashboardPageContainer>
    )
}

export default DashboardPage


const DashboardPageContainer = styled.div`
        display: flex;
        height: 100vh;
        place-content: center;
        `;

const Main = styled.div`
        flex: 0.7;
        `;
