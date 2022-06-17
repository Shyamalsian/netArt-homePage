import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 
import { faChrome } from '@fortawesome/free-brands-svg-icons' 
import '../App.css'

function Footer() {
  return (
    <div className='footer flex sm:flex-row justify-around sm:h-10 bg-red-700 ml-0 mr-0 text-xs flex-col sm:text-xl lg:text-3xl h-20'>
        <div>
            <FontAwesomeIcon icon={faPhoneSquare} />
            <span className='text-xs'>Toll free 1800 200 1234</span>
        </div>
        <div>
            <FontAwesomeIcon icon={faFacebook} />
            <span className='text-xs'><a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a> </span>
        </div>
        <div>
            <FontAwesomeIcon icon={faChrome} />
            <span className='text-xs'><a href="www.crigroups.com">www.crigroups.com</a></span>
        </div>
    </div>
  )
}

export default Footer