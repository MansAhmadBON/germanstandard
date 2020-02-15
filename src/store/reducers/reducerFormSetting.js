import {ADD_DATA_FOR_UNICUE_ITEMS} from '../../constants';

const initialState = {
    uniqueSingers: [],
    uniqueGanre: [],
    uniqueYears: [],
};

function reducerFormSetting(state = initialState, action) {
    if(action.type === ADD_DATA_FOR_UNICUE_ITEMS){
        const playlist = action.payload;

        if(playlist.length){
            const singers = [];
            const ganres = [];
            const years = [];

            for(let i = 0; i < playlist.length; i++){
                singers.push(playlist[i].singer);
                ganres.push(playlist[i].ganre);
                years.push(playlist[i].year);
            }

            const uniqueSingers = [...new Set(singers)];
            const uniqueGanres = [...new Set(ganres)];
            const uniqueYears = [...new Set(years)];

            return {
                ...state,
                uniqueSingers,
                uniqueGanre: uniqueGanres,
                uniqueYear :uniqueYears
            }
        }
        return state;
    }
    return state;
}

export default reducerFormSetting;