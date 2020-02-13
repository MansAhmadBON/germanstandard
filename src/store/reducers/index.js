import reducerAddPlayList from "./reducerAddPlayList";
import reducerTableSetting from "./reducerTableSetting";
import reducerFormSetting from "./reducerFormSetting";
import {combineReducers} from "redux";


export default combineReducers({
    playList: reducerAddPlayList,
    tableSetting: reducerTableSetting,
    formSetting: reducerFormSetting
})