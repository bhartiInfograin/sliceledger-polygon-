import React from 'react'
import HeroSection from '../HeroSection';
import Header from '../../common/DocHeader'
import LeftImageSection from './LeftImageSection';
import RightImageSection from './RightImageSection'
import SliceExtension from '../../assets/images/SliceExtension.png';
import BhartToken from '../../assets/images/BhartToken.png';
import sliceCrepto from '../../assets/images/sliceCrepto.png';
import Bouquet2 from '../../assets/images/Bouquet_2.png';
import BhartNFT from '../../assets/images/BhartNFT.png';



export default function main() {


  return (
    <div>
      <Header/>
      <HeroSection heading='Protocol & Product'/>
      <div className='mb-5'>
      <LeftImageSection 
      headpart1={"Bharat NFT"}  
      headpart2={"Marketplace"} 
      sectioimg={BhartNFT} 
      content={`Bharat NFT is a P2P buying & auction platform for creating and selling NFTs on the ethereum network; Our goal is to create the most user-friendly & interoperable NFT marketplace for ethereum.`}
      // content2={'Create a single or multiple collectible — the latter for a collection of, say, photographs or collecting cards you’ve created. Select “Choose File” to upload a PNG, GIF, MP3 or another file type. The max size is 30MB. Enter in the price you’d like, or leave “put on sale.” If this thing ever sells. Seems reasonable.Enter in a name for your NFT and a description. Set your royalties. You’ll continue to get paid when it resells on the Bharat NFT market. This is based on the current sale price.'}
      />

      <RightImageSection
       headpart1={"Bharat"} 
        headpart2={"Token"} 
        sectioimg={BhartToken}
        content={"Bharat Nft is a utility, ERC-20 Ethereum based built fungible coin created especially for the Bharat Nft ecosystem. Coins built on the Ethereum chain allow a standard and uniform set of rules that determine how they function and behave on the blockchain. Thus, this is critical for enhanced stability and cohesiveness in the network."}
        />

      <LeftImageSection  
      headpart1={"Slice"}  
      headpart2={"Crypto Wallet"} 
      sectioimg={sliceCrepto}
      content={"Sliceledger Wallet is a free, client-side interface helping you interact with Sliceledger Chain. Our easy-to-use, open-source platform allows you to generate wallets and so much more. You can create a new wallet, import an existing wallet, vote for Master nodes, and transfer/receive SLICE Token."}
      />

      <RightImageSection  
      headpart1={"Slice"}  
      headpart2={"Wallet Extension"} 
      sectioimg={SliceExtension} 
      content={"Sliceledger Wallet Extension is a free, client-side interface helping you interact with Sliceledger Chain. Our easy-to-use, open-source platform allows you to generate wallets and so much more.You can create a new wallet, import an existing wallet, vote for Master nodes, and transfer/receive SLICE Token"}
      />

      <LeftImageSection  
      headpart1={"Bouquet"}  
      headpart2={"NFT Collection"} 
      sectioimg={Bouquet2}
      content={`Bouquet collection is a collection of 10,000 exclusive NFT collectibles that will live on the Ethereum Blockchain. The traits are programmatically assigned but manually drawn giving each artwork a distinct identity and lending added value to the Bouquet Collection community.`}
 
      />
      </div>
     
    </div>
  )
}
