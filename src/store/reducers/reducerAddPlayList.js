import {ADD_PLAYLIST} from '../../constants';

const initialState = [];

function reducerAddPlayList(state = initialState, action) {
    if(action.type === ADD_PLAYLIST){
        return action.payload;
    } else {
        return state;
    }
}

export default reducerAddPlayList;