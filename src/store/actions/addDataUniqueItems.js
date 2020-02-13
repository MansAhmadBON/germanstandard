import {ADD_DATA_FOR_UNICUE_ITEMS} from '../../constants';

function addDataUniqueItems(data) {
    return {
        type: ADD_DATA_FOR_UNICUE_ITEMS,
        payload: data
    }
}

export default addDataUniqueItems;