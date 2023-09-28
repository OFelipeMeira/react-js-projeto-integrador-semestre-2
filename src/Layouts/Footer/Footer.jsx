import './FooterStyle.css'
import LogoWhite from './../../Assets/Images/LogoWhite.png'
import LogoBlue from '../../Assets/Images/LogoBlue.png'

import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from "../../Util/Context";


const Footer = (props) => {

    const {tag, type= "complete"} = props
    const column1 = ""

    const theContext = useContext(GlobalContext);
    const { theme } = theContext.contextState;

    return (
        <div className={`Footer ${tag} ${type}`}>
            <img className={`Footer__logo filter-${theme}`}src={LogoWhite} alt="Logo" />

            {
                type==="complete"?
                <>
                    <ul className='Footer__list'>
                        <h3 className='Footer__title'>{column1}</h3>
                        <li className='Footer__list_item'><a className="Footer__link"href="">Home</a></li>
                        <li className='Footer__list_item'><a className="Footer__link"href="">About Ezbank</a></li>
                        <li className='Footer__list_item'><a className="Footer__link"href="">Cards</a></li>
                        <li className='Footer__list_item'><a className="Footer__link"href="">Investments</a></li>
                    </ul>
                </>
                :
                <></>
            }
            {
                type==="slim"?
                <>
                    <h3></h3>
                </>
                :
                <></>
            }
            

        </div>
    )
}

export default Footer