import React from "react";
import styled, { keyframes } from "styled-components";
import { HighlightedText } from "../elements/HighlightedText";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
  filter: blur(10px);
  background: black;
`;
const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  position: absolute;
  bottom: 0;
  color: white;

  padding: 5px;
  opacity: 0.5;
  background: black;
`;

const Copyright = styled.div`
  background: black;
  color: white;
  opacity: 0.6;

  font-size: 12px;
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const EasterEggWrapper = styled.div`
  position: absolute;

  left: 0;
  top: 20px;
  width: 50px;
  height: 50px;
`;

const EasterEggAppearAnimation = keyframes`
  from{
    opacity: 0;
    transform: rotateZ(0deg) translateX(-50px);
  }
  to{
    opacity: 1;
    transform: rotateZ(45deg) translateX(-20px);
  }
`;
const EasterEgg = styled.img`
  opacity: 0;

  ${EasterEggWrapper}:hover & {
    animation: ${EasterEggAppearAnimation} 2s ease forwards;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Video autoPlay muted loop id="myVideo">
        <source
          src="https://coubsecure-s.akamaihd.net/get/b155/p/coub/simple/cw_video_for_sharing/9f12a690c67/ff50568bbcc1f686cc3d6/1572855477_looped_1572855471.mp4"
          type="video/mp4"
        />
      </Video>
      <VideoWrapper>
        <EasterEggWrapper>
          <a href="https://gudakko.tumblr.com/post/176307089035/transparent-mashuonabox-from-the-comic-treat-her">
            <EasterEgg src="https://66.media.tumblr.com/3ecc5dafd885e8321571dad4a87e47d5/tumblr_pchihnWNNa1xv4d87o1_250.png" />
          </a>
        </EasterEggWrapper>

        <HighlightedText size={24}>Hello it's me! AymanDev!</HighlightedText>
        <HighlightedText size={20} delay={1.5}>
          I'm Web and Game Developer!
        </HighlightedText>
        <HighlightedText size={18} delay={3}>
          <Link href="#">Click here for info about me</Link>
        </HighlightedText>

        <Footer>
          <Link href="https://coub.com/view/23xw34">Coub on background</Link>
          <Copyright>
            Created by AymanDev with React and Styled Components
          </Copyright>
        </Footer>
      </VideoWrapper>
    </Wrapper>
  );
};

export default App;
