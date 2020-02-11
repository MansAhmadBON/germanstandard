import reducerAddPlayList from "./reducerAddPlayList";
import reducerTableSetting from "./reducerTableSetting";

import {combineReducers} from "redux";

export default combineReducers({
    playList: reducerAddPlayList,
    tableSetting: reducerTableSetting
})