import React from 'react'
import BestSellingSection from '../../Components/SiteComponents/BestSellingSection';
import Carouselll from '../../Components/SiteComponents/Carouselll';
import HomeSection2 from '../../Components/SiteComponents/HomeSection2';
import OffersSection from '../../Components/SiteComponents/OffersSection';
import StyleSection from '../../Components/SiteComponents/StyleSection';

function Home() {
  return (
    <div>
        <Carouselll  />
        <HomeSection2 />
        <BestSellingSection />
        <OffersSection />
        <StyleSection />
    </div>
  )
}

export default Home;
