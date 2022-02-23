import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "samajavaragamana",
      duration: "2min 20sec",
    },
    {
      title: "o my god daddy",
      duration: "3min 20sec",
    },
    {
      title: "ramulo ramula",
      duration: "2min 45sec",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
