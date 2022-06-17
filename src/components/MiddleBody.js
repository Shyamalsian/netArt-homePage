import React from 'react'
import machine from './Images/3.png'
function MiddleBody() {
    return (
        <div className='flex flex-col'>
            <div className='mt-3 text-xs '>
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACRESS THR COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</p>
            </div>
            <div >

                <img className='w-4/6 mx-auto mt-2' src={machine} alt="" />
            </div>

            <div className='text-xs mt-1'>
                <p>Valves - Pumps - Pipes - IoT Drivers & Controllers - Wire & Cables - Solar Systems - Motors</p>
            </div>
            
        </div>


    )
}

export default MiddleBody