import React from 'react'
import styled from 'styled-components';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const NavbarFeedback = () => {
    return (
        <ThreadNav>
            <ThreadNavLeft>
                <NavigateBeforeIcon />
                <p>Go Back</p>
            </ThreadNavLeft>
            <ThreadNavRight>
                <button>Edit Feedback</button>
            </ThreadNavRight>
        </ThreadNav>
    )
}

export default NavbarFeedback


const ThreadNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
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