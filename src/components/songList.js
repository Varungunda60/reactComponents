import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          <button
            style={{ float: "right" }}
            onClick={() => {
              this.props.selectSong(song);
            }}
          >
            select
          </button>
          <h1>{song.title}</h1>
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ margin: "0 auto", maxWidth: "500px" }}>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
