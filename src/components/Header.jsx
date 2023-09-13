import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
import {
    HiHome , HiMagnifyingGlass , HiStar, HiPlayCircle, HiTv
} from 'react-icons/hi2';
import {HiPlus , HiDotsVertical} from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
    const[toggle,setToggle] =useState(false)
    const menu = [{
        name:"HOME",
        icon:HiHome
    },
    {
        name:"SEARCH",
        icon:HiMagnifyingGlass
    },{
        name:"WATCH LIST",
        icon:HiPlus
    },{
        name:"ORIGINALS",
        icon:HiStar
    },
    {
        name:"MOVIES",
        icon:HiPlayCircle
    },
    {
        name:"SERIES",
        icon:HiTv
    },
    
]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>    
                <img src={logo} alt="Disney logo" className='w-[60px] object-cover' />
                <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <div className='md:hidden flex gap-2'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon}/>
        ))}
        <div className='md:hidden' >
            <a onClick={()=>setToggle(!toggle)}><HeaderItem name={''} Icon={HiDotsVertical}/></a>
          {toggle? <div className='absolute mt-3 bg-[#121212] border-gray-700 px-5 py-4 border-[1px] p-1'>
          {menu.map((item,index)=>index>=3&&(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
          </div> :null}
        </div>
        </div>
        </div>
  <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyJU9BcACe5z8jRPbWOF1wc4INmjXwermcg" alt="profile" className='w-[40px] rounded-full' />
  </div>
    </div>
  )
}

export default Header