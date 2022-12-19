import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome to Horizon ATM LLC</HeroH1>
            <HeroP>  We place ATMS's at various locations.
                We also procure Laptops, firefighter bags, gloves, papertowel, 
                toilet paper, copy paper and bullets.
            </HeroP>
            <HeroP>
                Dwyane Thompson
                 - President
            <HeroP/>
                2646 Nw 60th avenue
                Margate, Fl 33063
            <HeroP>
                954-348-4251
            </HeroP>
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection