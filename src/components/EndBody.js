import React from 'react'

function EndBody() {
    const arr = ["CHEMICALS & PROCESS","POWER","WATER & WASTE WATER","OIL & GAS","PHARMA","SUGARS & DISTILLERIES","PAPER & PULP","MARINE & DEFENCE","METAL & MINING","FOOD & BEVERAGE","PETROCHEMICAL & REFINERIES","SOLAR","BUILDING","HVAC","FIRE FIGHTING","AGRICULTURE & RESIDENTIAL"]

    

  return (
    <div>
        <p className='text-xs font-bold mb-3'>C.R.I FLUID SYSTEM PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <div className='w-11/12 leading-4 mb-8  m-auto'>

        
           {
            arr.map((data)=>(
                <span className='text-xs border border-r-red-600 border-t-0 border-b-0 border-l-0 pl-1 pr-1'>{data}</span>
            ))
           }
        </div>
    </div>
  )
}

export default EndBody