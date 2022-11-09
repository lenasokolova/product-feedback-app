import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThreadsList from './components/ThreadsList';

function App() {
  return (
    <AppBody>
      {/* <h1>Let's build Prodcut Feedbck App</h1>s */}
      <Sidebar />
      <Main>
        <Navbar />
        <ThreadsList />

      </Main>
      {/*Feed Threads*/}
      {/*Thread List*/}







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
