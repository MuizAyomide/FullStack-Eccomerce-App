import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Searchbar = () => {

const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)

  return showSearch ?  (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w1/2">
        
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
            <img src={assets.search_icon} alt="" className='w-4' />
    </div>
    <img className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" />
        </div>
  ) : null
}

export default Searchbar
