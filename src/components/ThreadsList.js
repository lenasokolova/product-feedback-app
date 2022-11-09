import React from 'react';
import styled from 'styled-components';
import Thread from './Thread';

const ThreadsList = () => {
    return (
        <ThreadListContainer>
            <Thread />
            <Thread />
            <Thread />
            <Thread />
            <Thread />

        </ThreadListContainer>
    )
}

export default ThreadsList


const ThreadListContainer = styled.div`
    height: 100vh;
`;
