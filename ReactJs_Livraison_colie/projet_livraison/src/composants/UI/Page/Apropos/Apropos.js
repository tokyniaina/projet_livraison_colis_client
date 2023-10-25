import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import ImgFontApropos from "../../../../assets/img/fontApropos.jpg";


export default function Apropos() {
  return (
    <>
      <div>
        <div>
        <div
        className="bg-image mb-5"
        style={{
          backgroundImage: `url(${ImgFontApropos})`,
          backgroundSize: "cover",
          height:'30vh',

        }}
      ><h2 className='text-center text-white p-5'>A propos</h2></div>
          
        </div>
        <Card1/>
        <Card2/>
        <Card3/>
      </div>
    </>
  )
}
