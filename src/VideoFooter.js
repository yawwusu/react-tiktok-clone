import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter-text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="VideoFooter-ticker">
          <MusicNote className="VideoFooter-icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="VideoFooter-disk"
        src="https://cdn.imgbin.com/23/23/13/imgbin-lp-record-phonograph-record-album-stock-photography-retro-music-LMhNFa290MdAvbE36wP3qDmzs.jpg"
        alt="CD"
      />
    </div>
  );
}

export default VideoFooter;
