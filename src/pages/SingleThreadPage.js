import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import styled from 'styled-components';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { SidebarOption } from '../components/Sidebar';
import AddCommentSection from '../components/AddCommentSection';
import Comment from '../components/Comment';


const SingleThreadPage = () => {

    const { feedbacks: data } = useSelector((state) => state.data)
    const [initialState, setState] = useState(data);
    const { title, category, detail, commentsCount, upVotesCount } = initialState;

    let dispatch = useDispatch();
    const currentId = useParams();
    const navigate = useNavigate();

    const { id } = currentId;

    useEffect(() => {
        setState({ ...data[id] });
    }, [id, data]);


    return (
        <SingleThreadPageContainer>
            <SingleThreadPageContainerWhole>
                <ThreadNav>
                    <ThreadNavLeft onClick={() => navigate('/')}>
                        <NavigateBeforeIcon />
                        <p>Go Back</p>
                    </ThreadNavLeft>
                    <ThreadNavRight>
                        <button onClick={() => navigate(`/update/${id}`)}>Edit Feedback</button>
                    </ThreadNavRight>
                </ThreadNav >
                <ThreadContainer>
                    <ThreadLeft>
                        <ThreadVotes>
                            <ExpandLessIcon />
                            <h4>{upVotesCount}</h4>
                        </ThreadVotes>
                        <ThreadContent>
                            <ThreadInfo>
                                <h3>{title}</h3>
                                <p>{detail}</p>
                            </ThreadInfo>
                            <ThreadCategory>
                                <SidebarOption>{category}</SidebarOption>
                            </ThreadCategory>
                        </ThreadContent>
                    </ThreadLeft>

                    <ThreadRight>
                        <ThreadComments>
                            <ChatBubbleIcon />
                            <h3>{commentsCount}</h3>
                        </ThreadComments>
                    </ThreadRight>


                </ThreadContainer>
                <Comment />
                <AddCommentSection />
            </SingleThreadPageContainerWhole>
        </ SingleThreadPageContainer>
    )

}

export default SingleThreadPage;


const SingleThreadPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SingleThreadPageContainerWhole = styled.div`
    max-width: 800px;
`;

const ThreadNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    >Link {
        
    }
`;

const ThreadNavLeft = styled.div`

    display: flex;
    align-items: center;
    cursor: pointer;

    >.MuiSvgIcon-root {
        font-size: 20px;
        color: #4661e6;
    }

    >p {
        font-size: 12px;
        font-weight: 800;
        color: #72799d;
    }

`;

const ThreadNavRight = styled.div`
    display: flex;

    >button {
        display: flex;
        align-items: center;
        background-color: #4661e6;
        border: none;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 25px;
        border-radius: 10px;
        cursor: pointer;

        :hover {
            background-color: #3b55d4;

        }
    }
`;



const ThreadContainer = styled.div`
    display: flex;
    background-color: #fff;
    padding: 25px;
    margin-bottom: 18px;
    border-radius: 10px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);


`;

const ThreadLeft = styled.div`
    display: flex;
    align-items: flex-start;
`;

const ThreadVotes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f4ff;
    padding: 6px 8px;
    border-radius: 10px;
    margin-right: 35px;
    cursor: pointer;

    >.MuiSvgIcon-root {
        font-size: 20px;
        color: #4661e6;
    }

    >h4 {
        font-size: 13px;
        font-weight: 900;
        margin-bottom: 2px;
    }
`;

const ThreadContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const ThreadInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;


    >h3 {
        font-weight: 900;
        font-size: 17px;
        margin-bottom: 6px;
    }

    >p {
        font-weight: 500;
        font-size: 12px;
        color: #464d7b;
    }

`;

const ThreadCategory = styled.div`
    display: flex;
`;

const ThreadRight = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

`;

const ThreadComments = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    >.MuiSvgIcon-root {
        font-size: 20px;
        color: #ced3f0;
        margin-right: 8px;
    }

    >h3 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 3px;
    }
`;
