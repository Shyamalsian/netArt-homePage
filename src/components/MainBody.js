import React from 'react'
import award from './Images/1.png'
import pic from './Images/2.png'

function MainBody() {
  return (
    <div className='flex sm:flex-row sm:p-3 sm:mr-6 flex-col sm:mt-0'>
        
            <img className='sm:w-2/3 w-1/6 m-auto mb-0 lg:w-1/4 md:2/4' src={award} alt="" />
        
        <div className='p-10 pt-0 pb-0 sm:pl-0'>
            <p className='text-base font-bold pl-0'>C.R.I PUMPS WIN THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time</p>
            <div className='text-xs sm:ml-24 sm:text-left '>
                <ul className='list-disc text-left'>
                    <li>
                        C.R.I's energy efficirent products are well recognised by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                    </li>
                    <li>
                        C.R.I is the highest contributer in the country for the project of EESL(Enerfy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                    </li>
                </ul>
                <img className='mt-2 ' src={pic} alt="" />
            </div>
            <p className='text-xs text-left ml-24'>Government of India has awarded the <b >"National Energy Conservation Award 2018"</b>, Mr.G Selvaraj, Joint Managing Director of C.R.I Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State </p>
        </div>
    </div>
  )
}

export default MainBody