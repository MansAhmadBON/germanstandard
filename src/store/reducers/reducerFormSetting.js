import {ADD_DATA_FOR_UNICUE_ITEMS} from '../../constants';

const initialState = {
    uniqueSingers: [],
    uniqueGanre: [],
    uniqueYears: [],
};

function reducerFormSetting(state = initialState, action) {
    if(action.type === ADD_DATA_FOR_UNICUE_ITEMS){
        const playlist = action.payload;

        return state;
    }
    return state;
}

export default reducerFormSetting;