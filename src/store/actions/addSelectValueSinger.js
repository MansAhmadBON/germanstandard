import {ADD_SELECT_SINGER_VALUE} from '../../constants';

function addSelectValueSinger(value) {
    return {
        type: ADD_SELECT_SINGER_VALUE,
        payload: value
    }
}

export default addSelectValueSinger;