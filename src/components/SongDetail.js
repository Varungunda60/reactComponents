import React from "react";
import { connect } from "react-redux";
function SongDetail(props) {
  return (
    <div>
      <h1>{props.selectedSong?.title} </h1>
      <h2>{props.selectedSong?.duration}</h2>
    </div>
  );
}

const mapStateToProps = ({ selectedSong }) => {
  console.log(selectedSong);

  return { selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
