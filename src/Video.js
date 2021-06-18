import React from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleVideoPress = function () {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="Video">
      <video
        className="Video-player"
        ref={videoRef}
        loop
        onClick={handleVideoPress}
        src="https://v77.tiktokcdn.com/082b02f7ed89503e38447e01d6f4df68/60ccb6b3/video/tos/useast2a/tos-useast2a-ve-0068c004/b462a93ba59446a0b3c1a00b4d5f9103/?a=1233&br=2070&bt=1035&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210618090702010190185130200111C8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2g7dG01ajtlNjMzNzczM0ApaTdmOzhlNTtpN2k8OTo0OGdgLnFsazQvNTFgLS1kMTZzczMzLmE0YTYuLzQ2LS1hXl86Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter
        channel="yaw"
        description="nyansani"
        song="DJ Acouzo - song"
      />
      <VideoSidebar likes={200} messages={432} shares={303} />
    </div>
  );
}

export default Video;
