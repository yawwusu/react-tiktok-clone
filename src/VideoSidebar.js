import React from "react";
import "./VideoSidebar.css";
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = React.useState(false);
  const handleClick = function () {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  return (
    <div className="VideoSidebar">
      {liked ? (
        <div className="VideoSidebar-buttons" onClick={handleClick}>
          <Favorite fontSize="large" />
          <p>{liked ? { likes } + 1 : { likes }}</p>
        </div>
      ) : (
        <div className="VideoSidebar-buttons" onClick={handleClick}>
          <FavoriteBorder fontSize="large" />
          <p>{likes}</p>
        </div>
      )}
      <div className="VideoSidebar-buttons">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="VideoSidebar-buttons">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
