import React from 'react'
import { Link } from 'react-router-dom';


const Boutton = ({children, click}) =>{
    const styleBtn = 'btn btn-primary'
    return(
        <>
            <button className={styleBtn} onClick={click}>{children}</button>
        </>
    )
}
export default Boutton;