import {ADD_CURRENT_PAGE} from '../../constants';

function addCurrentPage(pageNum) {
    return {
        type: ADD_CURRENT_PAGE,
        payload: pageNum
    }
}

export default addCurrentPage;