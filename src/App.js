import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThreadsList from './components/ThreadsList';
import ThreadPage from './components/ThreadPage';

function App() {
  return (
    <AppBody>
      {/* <Sidebar />
      <Main>
        <Navbar />
        <ThreadsList />
      </Main> */}

      <ThreadPage />
    </AppBody>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;


const Main = styled.div`
  flex: 0.7;
`;
