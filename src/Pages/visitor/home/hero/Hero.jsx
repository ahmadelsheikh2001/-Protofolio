import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import HeroText from "./HeroText";
import HeroVedio from "./HeroVedio";
import ReactPlayer from "react-player";
import Overlay from '../../../../UI/poppup/Overlay';

import './hero.css';

const Hero = ({ comp, job }) => {

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <HeroText comp={comp} job={job} />
            <HeroVedio setShowVideo={setShowVideo} />
          </Row>
        </Container>
      </section>
      <Overlay state={showVideo} setState={setShowVideo} />
      {showVideo && 
      <>
        <button className="close-video-btn" onClick={() => setShowVideo(false)}>
          <span></span>
          <span></span>
        </button>
        <div className="video-container">
          <ReactPlayer 
            controls
            // url='https://getleda.wistia.com/medias/bjz07hdxqx'
            url='./assets/video.mp4'
            playing
            loop
            className='player-video'
            />
        </div> 
      </>
      }
    </>
  );
};

export default Hero;