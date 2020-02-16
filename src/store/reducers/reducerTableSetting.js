import {ADD_TOTAL_COUNT, SET_PAGE_SIZE, ADD_CURRENT_PAGE} from '../../constants';

const initialState = {
    pageSize: 3,
    totalCountItems: 0,
    currentPage: 1
};

function reducerTableSetting(state = initialState, action) {
    switch(action.type){
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload,
                currentPage: 1
            };
        case ADD_TOTAL_COUNT:
            return {
                ...state,
                totalCountItems: action.payload
            };
        case ADD_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default: return state;
    }
}

export default reducerTableSetting;