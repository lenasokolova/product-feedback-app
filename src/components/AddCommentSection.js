import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { addCommentToFeedback } from '../redux/actions';
import { isEmpty } from 'lodash';


const AddCommentSection = () => {

    const commentValues = {
        id: nanoid(),
        comment: ''
    };

    const [initialState, setState] = useState(commentValues);

    // const { feedbacks: data } = useSelector((state) => state.data)
    const { comments } = useSelector((state) => state.comments);

    const { comment } = initialState

    let dispatch = useDispatch()
    const currentId = useParams();
    const { id } = currentId;


    useEffect(() => {
        if (isEmpty(id)) {
            console.log("initialState", initialState);
            setState({ ...commentValues });
        } else {
            setState({ ...comments[id] });

        }
    }, [id, comments]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...initialState,
            [name]: value,
        });
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        console.log("initialState", initialState);
        dispatch(addCommentToFeedback(initialState));
    }

    return (
        <AddCommentContainer>
            <h3>Add Comment</h3>
            <form>
                <textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    onChange={handleInputChange}
                    placeholder='Type your comment here'
                />
            </form>
            <div>
                <span>250 Characters left</span>
                <button onClick={handleCommentSubmit}>Post comment</button>
            </div>
        </AddCommentContainer>
    )
}

export default AddCommentSection

const AddCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px;
    margin-bottom: 18px;
    border-radius: 10px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

    >h3 {
        font-size: 16px;
        margin-bottom: 16px;
    }

    >form > textarea {
        width: 100%;
        border: none;
        background-color: #f7f8fd;
        height: 70px;
        padding: 15px;
        margin-bottom: 10px;
    }

    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    >div >span {
        font-size: 12px;
        font-weight: 500;
        color: #a1a8c0;
    }

    >div >button {
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
    }
`;