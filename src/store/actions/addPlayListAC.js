import {ADD_PLAYLIST} from '../../constants';

function addPlayList(playlist) {
    return {
        type: ADD_PLAYLIST,
        payload: playlist
    }
}

export default addPlayList;