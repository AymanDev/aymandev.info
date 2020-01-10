import React from "react";
import { EasterEgg, EasterEggWrapper } from "../elements/EasterEgg";
import { HighlightedText } from "../elements/HighlightedText";
import Link from "../elements/Link";
import styled from "styled-components";
import { BIO_PAGE } from "../routes";

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
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  //width: 100%;
  //height: 100%;
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

  padding-top: 5px;
  padding-bottom: 5px;
  opacity: 0.5;
  background: black;
`;

const Copyright = styled.div`
  background: black;
  color: white;
  opacity: 0.6;

  font-size: 12px;
`;

const IndexPage = () => (
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
        <Link href={BIO_PAGE}>Click here for info about me</Link>
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

export default IndexPage;
