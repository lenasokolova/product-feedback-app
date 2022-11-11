import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThreadsList from './components/ThreadsList';
import ThreadPage from './components/ThreadPage';
import CreateNewFeedback from './components/CreateNewFeedback';

function App() {
  return (
    <AppBody>
      {/* <Sidebar />
      <Main>
        <Navbar />
        <ThreadsList />
      </Main> */}

      {/* <ThreadPage /> */}
      <CreateNewFeedback />
    </AppBody>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  place-content: center;
`;


const Main = styled.div`
  flex: 0.7;
`;
