import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavContainer>
            <NavHeader>
                <NavLeft>
                    <LightbulbIcon />
                    <h3>6 Suggestions</h3>
                </NavLeft>
                <NavCenter>
                    <span>Sort by :</span>
                    <p>Most Upvotes</p>
                    <ExpandMoreIcon />
                </NavCenter>

                <NavRight>
                    <Link to='/add-feedback'>
                        <button>
                            <AddIcon />
                            <p>Add Feedback</p>
                        </button>
                    </Link>
                </NavRight>
            </NavHeader>
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.div`
    color: #fff;
    margin-bottom: 18px;
`;

const NavHeader = styled.div`
    display: flex;
    /* justify-content: space-between; */
    background-color: #373e68;
    padding: 15px;
    border-radius: 5px;
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.3;

    >.MuiSvgIcon-root {
        font-size: 20px;
        margin-right: 8px;
    }

    >h3 {
        font-size: 14px;
    }
`;

const NavCenter = styled.div`
    display: flex;
    align-items: center;
    flex: 0.4;
    font-size: 12px;
    cursor: pointer;

    >span {
        font-weight: 100;
        margin-right: 5px;
    }

    >p {
        font-weight: 800;
        margin-right: 5px;
    }

    >.MuiSvgIcon-root {
        font-size: 18px;
    }
`;

const NavRight = styled.div`
    display: flex;
    flex: 0.3;
    justify-content: flex-end;

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

