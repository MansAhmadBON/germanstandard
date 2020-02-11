import {SET_PAGE_SIZE} from '../../constants';

function setPageSize(pages) {
    return {
        type: SET_PAGE_SIZE,
        payload: pages
    }
}

export default setPageSize;