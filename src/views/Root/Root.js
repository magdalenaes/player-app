import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover1 from "../../assets/images/cover-1.png";
import cover2 from "../../assets/images/cover-2.png";
import cover3 from "../../assets/images/cover-3.png";

import MoreView from "../MoreView/MoreView";
import PlayerView from "../PlayerView/PlayerView";
import PlaylistView from "../PlaylistView/PlaylistView";

const initialStateSlider = [
  {
    image: cover1,
    title: "Stronger",
    author: "Kanye West",
    duration: 240,
  },
  {
    image: cover2,
    title: "Self Conscious",
    author: "Kanye West",
    duration: 240,
  },
  {
    image: cover3,
    title: "Eyes of a Panther",
    author: "Steel Panther",
    duration: 300,
  },
];

class Root extends React.Component {
  state = {
    sliderItems: [...initialStateSlider],
    playlistItems: [],
    isPlaylistViewOpen: false,
    isMoreViewOpen: false,
    isPlayPress: false,
  };

  pressPlay = () => {
    this.setState({
      isPlayPress: true,
    });
  };

  openMoreView = () => {
    this.setState({
      isMoreViewOpen: true,
    });
  };

  closeMoreView = () => {
    this.setState({
      isMoreViewOpen: false,
    });
  };

  openPlaylistView = () => {
    this.setState({
      isPlaylistViewOpen: true,
    });
  };

  closePlaylistView = () => {
    this.setState({
      isPlaylistViewOpen: false,
    });
  };

  render() {
    const { sliderItems, isPlayPress, isMoreViewOpen, isPlaylistViewOpen } =
      this.state;

    return (
      <BrowserRouter>
        <>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PlayerView
                  sliderItems={sliderItems}
                  pressPlayFn={this.pressPlay}
                  isPlayPress={isPlayPress}
                  isPlaylistViewOpen={isPlaylistViewOpen}
                  openMoreViewFn={this.openMoreView}
                  openPlaylistViewFn={this.openPlaylistView}
                  closePlaylistViewFn={this.closePlaylistView}
                />
              }
            />
          </Routes>
          {isMoreViewOpen && <MoreView closeMoreViewFn={this.closeMoreView} />}
          {isPlaylistViewOpen && <PlaylistView />}
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
