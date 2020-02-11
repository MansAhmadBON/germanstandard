import {ADD_PLAYLIST} from '../../constants';

function addPlayListAC(playlist) {
    return {
        type: ADD_PLAYLIST,
        payload: playlist
    }
}

export default addPlayListAC;