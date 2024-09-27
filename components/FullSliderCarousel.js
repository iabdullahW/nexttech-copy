import React from 'react'
import { scroller } from '@/utils/constants'
import FullSlider from './FullSlider'
const FullSliderCarousel = () => {
  return (
    <>
        {scroller.map((scroll)=>{
            return <FullSlider subTitle={scroll.subTitle} mainTitle={scroll.mainTitle} paragraphs={scroll.paragraphs} industry={scroll.industry} country={scroll.country}  image1={scroll.image1} image2={scroll.image2}  mainImage={scroll.mainImage} />
        })}
    </>
  )
}

export default FullSliderCarousel


