import React from 'react'
import GetStarted from './GetStarted'
import HeroSection from './HeroSection'
import KeyPoint from './KeyPoint'
import SolutionSection from './SolutionSection'
import ScaleDapp from './ScaleDapp'
import KnowMore from './KnowMore'
import ScaleEthereum from './ScaleEthereum'
import Headers from '../../common/Header'
import AboutUs from './AboutUs'
import Dapp from './Dapp'
import SupportCommunity from './SupportCommunity'
import Partner from './Partner'


export default function Main() {
    return (
        <>

            
            <Headers />
            <HeroSection />
            <AboutUs />
            <KeyPoint />
            <Dapp />
            <SupportCommunity />
            {/* <Partner/> */}
            {/* <GetStarted /> */}

            {/* <SolutionSection /> */}
            {/* <ScaleDapp /> */}
            {/* <KnowMore /> */}
            {/* <ScaleEthereum /> */}
        </>
    )
}
