import {ADD_SELECT_VALUE} from '../../constants';

function addSelectValue(value) {
    return {
        type: ADD_SELECT_VALUE,
        payload: value
    }
}

export default addSelectValue;