import {createStore} from "redux";
import {reducerAddPlayList} from './reducers';

const store = createStore(reducerAddPlayList);

store.subscribe(() => console.log('Store subscribe:', store.getState()));

export default store;