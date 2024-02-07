import { PlayIcon, Triangle } from "../../../../UI/Icons";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useState } from "react";

const HeroVedio = ({ setShowVideo }) => {
  const [hover, setHover] = useState(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
        className="col-12 col-md-5 col-lg-5 ms-auto"
        onMouseEnter={() => setHover(false)}
        onMouseLeave={() => setHover(true)}
      >
        <div className="hero_vedio position-relative">
          {/* <img src="./assets/profImag.svg"/> */}
          <ReactPlayer
            url="./assets/video.mp4"
            // url='https://getleda.wistia.com/medias/bjz07hdxqx'
            playing={hover}
            loop
            muted
            className="poster-video-player"
          />
          <div className="overlay"></div>
          <button
            className="play-icon center"
            onClick={() => setShowVideo(true)}
          >
            <Triangle />
          </button>
          <p className="p-play-video">Play Video</p>
        </div>
      </motion.div>
    </>
  );
};

export default HeroVedio;
