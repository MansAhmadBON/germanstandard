import {ADD_SELECT_GANRE_VALUE} from '../../constants';

function addSelectValueGanre(value) {
    return {
        type: ADD_SELECT_GANRE_VALUE,
        payload: value
    }
}

export default addSelectValueGanre;