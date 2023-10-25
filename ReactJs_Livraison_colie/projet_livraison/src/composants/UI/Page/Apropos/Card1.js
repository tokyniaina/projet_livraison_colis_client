import React from 'react'
import ImgLivreur from '../../../../assets/img/livreur.jpg'

export default function Card1() {
  return (
    <>
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <img src={ImgLivreur} className='rounded' alt='...'/>
                </div>
                <div className='col p-3 border'>
                    <h3 className='pb-2'> Logo en quelques mots</h3>
                    <p> C'est un platforme qui facilite vos livraison, payment de fraie, livreur </p>
                    <p> C'est un platforme qui facilite vos livraison, payment de fraie, livreur </p>
                    <p> C'est un platforme qui facilite vos livraison, payment de fraie, livreur </p>
                    <p> C'est un platforme qui facilite vos livraison, payment de fraie, livreur </p>
                </div>
            </div>
        </div>
    </>
  )
}
