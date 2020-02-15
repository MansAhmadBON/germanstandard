import {ADD_SELECT_YEAR_VALUE} from '../../constants';

function addSelectValueYEAR(value) {
    return {
        type: ADD_SELECT_YEAR_VALUE,
        payload: value
    }
}

export default addSelectValueYEAR;