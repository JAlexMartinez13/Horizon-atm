import React, { useState } from 'react'
import Image from '../../images/image.jpg'
// import Video from '../../videos/video.mp4'
// import Image from '../../images/image.jpg'
import { Button } from '../ButtonElements'
import { HeroContainer,
     HeroBg,
      VideoBg,
       HeroContent,
        HeroH1,
         HeroP,
          HeroBtnWrapper,
           ArrowForward,
            ArrowRight, 
            ImageBg} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }   
  return (
    <HeroContainer>
        <HeroBg>
            {/* <ImageBg src={Image}/> */}
            
        <ImageBg  src={Image} type='image/png'/>
        </HeroBg>
        {/* <HeroContent> */}
            <HeroH1></HeroH1>
 
        
            
            <HeroBtnWrapper>
                <Button to='about' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
            
                >
                    About Us {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        {/* </HeroContent> */}
    </HeroContainer>
  )
}

export default HeroSection