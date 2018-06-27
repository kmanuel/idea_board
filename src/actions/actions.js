import { CREATE_IDEA, DELETE_IDEA, UPDATE_IDEA } from '../constants';

export const createIdea = (dispatch) => {
    dispatch({
        type: CREATE_IDEA
    });
};

export const updateIdea = (dispatch, id, idea) => {
    console.log('in update idea action with idea: ', idea);
    return {
        type: UPDATE_IDEA,
        payload: {
            id,
            idea
        }
    };
};

export const deleteIdea = (dispatch, id) => {
    dispatch({
        type: DELETE_IDEA,
        payload: id
    })
};

