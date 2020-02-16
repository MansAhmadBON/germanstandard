import {
    ADD_PLAYLIST,
    ADD_SELECT_GANRE_VALUE,
    ADD_SELECT_SINGER_VALUE,
    ADD_SELECT_YEAR_VALUE,
    SORT_BY_SINGER,
    SORT_BY_SONG,
    SORT_BY_GANRE,
    SORT_BY_YEAR
} from '../../constants';

const initialState = {
    playlist: [],
    playlistShow: [],
    selectsValue: {
        singer: '',
        ganre: '',
        year: ''
    }
};

function filterPlaylist(playlist, selectsValue) {
    const selectSinger = selectsValue.singer !== 'All' && selectsValue.singer;
    const selectGanre = selectsValue.ganre !== 'All' && selectsValue.ganre;
    const selectYear = selectsValue.year !== 'All' && selectsValue.year;

    const selects = [selectSinger, selectGanre, selectYear].filter(item => item.length > 0);
    const filterList = playlist.filter(item => {

        if (selects.length === 3) {
            return item.singer === selectSinger && item.ganre === selectGanre && item.year === selectYear
        }

        if (selects.length === 2) {
            if (selectSinger && selectGanre) return item.singer === selectSinger && item.ganre === selectGanre;
            if (selectSinger && selectYear) return item.singer === selectSinger && item.year === selectYear;
            if (selectGanre && selectYear) return item.ganre === selectGanre && item.year === selectYear;
        }

        if (selects.length === 1) {
            if (selectSinger) return item.singer === selectSinger;
            if (selectGanre) return item.ganre === selectGanre;
            if (selectYear) return item.year === selectYear;
        }
        return item
    });
    return (filterList.length !== 0) ? filterList : [];
}

function reducerAddPlayList(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYLIST:
            return {
                ...state,
                playlist: action.payload,
                playlistShow: action.payload
            };
        case ADD_SELECT_SINGER_VALUE:
            let currentSelectsValueS = {
                ...state.selectsValue,
                singer: action.payload,
            };
            const filterListSinger = filterPlaylist(state.playlist, currentSelectsValueS);
            return {
                ...state,
                selectsValue: currentSelectsValueS,
                playlistShow: filterListSinger
            };
        case ADD_SELECT_GANRE_VALUE:
            let currentSelectsValueG = {
                ...state.selectsValue,
                ganre: action.payload,
            };
            const filterListGanre = filterPlaylist(state.playlist, currentSelectsValueG);
            return {
                ...state,
                selectsValue: currentSelectsValueG,
                playlistShow: filterListGanre
            };
        case ADD_SELECT_YEAR_VALUE:
            let currentSelectsValueY = {
                ...state.selectsValue,
                year: action.payload,
            };
            const filterListYear = filterPlaylist(state.playlist, currentSelectsValueY);
            return {
                ...state,
                selectsValue: currentSelectsValueY,
                playlistShow: filterListYear
            };
        case SORT_BY_SINGER:
            const sortPlaylistBySinger = state.playlistShow.sort((a, b) => a.singer < b.singer ? -1 : 1);
            return {
                ...state,
                playlistShow: [...sortPlaylistBySinger]
            };
        case SORT_BY_SONG:
            const sortPlaylistBySong = state.playlistShow.sort((a, b) => a.song < b.song ? -1 : 1);
            return {
                ...state,
                playlistShow: [...sortPlaylistBySong]
            };
        case SORT_BY_GANRE:
            const sortPlaylistByGanre = state.playlistShow.sort((a, b) => a.ganre < b.ganre ? -1 : 1);
            return {
                ...state,
                playlistShow: [...sortPlaylistByGanre]
            };
        case SORT_BY_YEAR:
            const sortPlaylistByYear = state.playlistShow.sort((a, b) => Number(a.year) > Number(b.year) ? -1 : 1);
            return {
                ...state,
                playlistShow: [...sortPlaylistByYear]
            };
        default: return state;
    }
}

export default reducerAddPlayList;