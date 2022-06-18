import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FaInfo } from 'react-icons/fa';
import style from './styles/infoIcon.module.css'

function InfoIcon(){
    return(
        <a>
            <svg height= "48" width= "84.22" className={style.svg} data-tip='Expand text area from the bottom right corner.' data-for='svgTooltip'>
                <g>
                    <circle cx= "42.11" cy= "24" r= "24" className={style.circle} />            
                    <FaInfo x="31" y="12" fontSize="24" className={style.icon}/>
                </g>
            </svg>
            <ReactTooltip id='svgTooltip' />
        </a>
    );
}

export { InfoIcon };