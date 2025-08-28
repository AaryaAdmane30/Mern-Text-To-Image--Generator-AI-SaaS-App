import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 flex-wrap'>
      <img src={assets.logo} alt='Site Logo' width={150} />

      <p className='border-gray-400 border-l pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @admaneaarya | All Rights Reserved
      </p>

      <div className='flex items-center gap-2'>
        <img src={assets.facebook_icon} alt='Facebook' width={35} />
        <img src={assets.instagram_icon} alt='Instagram' width={35} />
        <img src={assets.twitter_icon} alt='Twitter' width={35} />
      </div>
    </div>
  )
}

export default Footer
