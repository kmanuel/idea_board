import {
    CREATE_IDEA,
    DELETE_IDEA,
    UPDATE_IDEA,
    IDEAS_LOCAL_STORAGE} from '../constants';
import uniqid from 'uniqid';

const initialState = JSON.parse(localStorage.getItem(IDEAS_LOCAL_STORAGE)) || [];

const save = (state) => {
    localStorage.setItem(IDEAS_LOCAL_STORAGE, JSON.stringify(state));
};

function createIdea(state) {
    let newNote = {
        id: uniqid(),
        title: 'someTitle',
        body: 'someBody',
        created: new Date()
    };
    const newState = [newNote, ...state];
    save(newState);
    return newState;
}
function deleteIdea(action, state) {
    let idToRemove = action.payload;
    const newState = state.filter(note => note.id !== idToRemove);
    save(newState);
    return newState;
}

function udpateIdea(action, state) {
    const {id, idea} = action.payload;
    console.log('looking to update idea with id: ', id);
    const newState = state.map(stateIdea => {
        console.log('mapping stateIdea: ', stateIdea);
      if (stateIdea.id === id) {
          return idea;
      } else {
          return stateIdea;
      }
    });
    save(newState);
    return newState;
}

export const ideaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_IDEA:
            return createIdea(state);
        case DELETE_IDEA:
            return deleteIdea(action, state);
        case UPDATE_IDEA:
            return udpateIdea(action, state);
        default:
            return state;
    }
};