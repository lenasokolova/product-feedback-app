import React from 'react'
import styled from 'styled-components'

const Comment = () => {
    return (
        <CommentContainer>
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="user avatar" />
            <CommentBody>
                <CommentInfo>
                    <CommentInfoLeft>
                        <h4>Elijah Moss</h4>
                        <span>@hexagon.bestagon</span>
                    </CommentInfoLeft>
                    <CommentInfoRight>
                        <span>Reply</span>
                    </CommentInfoRight>
                </CommentInfo>
                <CommentText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CommentText>
            </CommentBody>
        </CommentContainer>
    )
}

export default Comment;

const CommentContainer = styled.div`
    display: flex;
    
    >img {
        height: 35px;
        width: 35px;
        object-fit: cover;
        border-radius: 50px;
        margin-right: 25px;
    }
`;

const CommentBody = styled.div`
    display: flex;
    flex-direction: column;
`;


const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const CommentInfoLeft = styled.div`
    >h4 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: -5px;
    }

    >span {
        font-size: 12px;
    }

`;
const CommentInfoRight = styled.div`
    >span {
        font-size: 12px;
        font-weight: 900;
        color: #4661e6;
    }
`;

const CommentText = styled.div`
    >p {
        font-size: 12px;
    }
`;






