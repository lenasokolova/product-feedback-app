import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <AppBody>
      {/* <h1>Let's build Prodcut Feedbck App</h1>s */}
      <Sidebar />
      <Feed />
      {/*Feed Header*/}
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
