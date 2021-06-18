import React from "react";
import "./App.css";
import { db } from "./firebase";
import Video from "./Video";

function App() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db
      .collection("videos")
      .onSnapshot((snapshot) =>
        setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <div className="App-videos">
        {videos.map((video) => (
          <Video
            key={video.id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
