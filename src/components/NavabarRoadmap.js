import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavabarRoadmap = () => {

    return (
        <div>
            <NavContainer>
                <NavHeader>
                    <NavLeftContainer>
                        <NavLeftTop>
                            <NavigateBeforeIcon />
                            <StyledLink to='/' >
                                <p>Go Back</p>
                            </StyledLink>
                        </NavLeftTop>
                        <NavLeftBottom>
                            <h3>Roadmap</h3>
                        </NavLeftBottom>
                    </NavLeftContainer>


                    <NavRight>
                        <StyledLink to='/add-feedback'>
                            <button>
                                <AddIcon />
                                <p>Add Feedback</p>
                            </button>
                        </StyledLink>
                    </NavRight>
                </NavHeader>
            </NavContainer>
        </div>
    )
}

export default NavabarRoadmap;


const NavContainer = styled.div`
    color: #fff;
    margin-bottom: 18px;
`;

const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #373e68;
    padding: 20px;
    border-radius: 5px;
`;

const NavLeftContainer = styled.div``;


const NavLeftTop = styled.div`
    display: flex;
    align-items: center;
    flex: 0.3;

    >.MuiSvgIcon-root {
        font-size: 20px;
        margin-right: 8px;
    }

    >Link {
        color: #fff;
    }

    >h3 {
        font-size: 14px;
    }
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const NavLeftBottom = styled.div``;


const NavRight = styled.div`
    display: flex;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        background-color: #ae1feb;
        border: none;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 25px;
        border-radius: 10px;
        cursor: pointer;
        

        :hover {
            background-color: #8c2bc4;

        }

        >.MuiSvgIcon-root {
            font-size: 16px;
            margin-right: 4px;
            margin-left: -10px;

    }
    }
`;
