import React from "react";
import HeaderPlayer from "../../components/HeaderPlayer/HeaderPlayer";
import HeaderPlaylist from "../../components/HeaderPlaylist/HeaderPlaylist";
import SliderWrapper from "../../components/SliderWrapper/SliderWrapper";
import Panel from "../../components/Panel/Panel";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import MusicVisualizer from "../../components/MusicVisualizer/MusicVisualizer";
import Footer from "../../components/Footer/Footer";

const PlayerView = ({
  sliderItems,
  isPlayPress,
  isPlaylistViewOpen,
  pressPlayFn,
  openMoreViewFn,
  openPlaylistViewFn,
  closePlaylistViewFn,
}) => (
  <>
    {isPlaylistViewOpen ? (
      <HeaderPlaylist closePlaylistViewFn={closePlaylistViewFn} />
    ) : (
      <HeaderPlayer openMoreViewFn={openMoreViewFn} />
    )}
    <SliderWrapper sliderItems={sliderItems} />
    <Panel pressPlayFn={pressPlayFn} isPlayPress={isPlayPress} />
    <ProgressBar />
    <MusicVisualizer isPlayPress={isPlayPress}/>
    <Footer openPlaylistViewFn={openPlaylistViewFn} />
  </>
);

export default PlayerView;
