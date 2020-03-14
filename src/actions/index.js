


export const selectSong = (songName) => {
    // console.log("in action", songName);
    return {
        type: "SELECTED_SONG",
        payload: songName
    };
};
 