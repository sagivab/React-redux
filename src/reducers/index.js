import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Smells Like Teen Spirit', duration: '2:14' },
        { title: 'My Heart Will Go On', duration: '1:16' },
        { title: 'Bitter Sweet Symphony', duration: '4:17' },
        { title: 'U Can’t Touch This', duration: '5:18' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SELECTED_SONG") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});