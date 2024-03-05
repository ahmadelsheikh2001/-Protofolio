import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchAbout } from "../../../../redux/slices/about.slice";
import { Container, Row } from "react-bootstrap";
import HeroText from "./HeroText";
import HeroVedio from "./HeroVedio";
import ReactPlayer from "react-player";
import Overlay from '../../../../UI/poppup/Overlay';

import './hero.css';

const Hero = ({ comp, job }) => {

  const [showVideo, setShowVideo] = useState(false);
  const about = useSelector((state) => state.about.data)
  const [data, setData] = useState()
  const { t, i18n } = useTranslation();
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchAbout())
  }, [])
  useEffect(() => {
    if (about.length) {
      setData(about[0])
    }
  }, [about])

  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <HeroText comp={comp} job={job} />
            <HeroVedio setShowVideo={setShowVideo} video={data?.video}/>
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
            url={data?.video}
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