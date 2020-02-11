import {ADD_TOTAL_COUNT} from '../../constants';

function addTotalCountItems(totalCount) {
    return {
        type: ADD_TOTAL_COUNT,
        payload: totalCount
    }
}

export default addTotalCountItems;