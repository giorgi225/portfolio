import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black'>
        <div className="container-main">
            <div className='w-full py-6 text-foreground flex items-center justify-center'>
                <span className='flex text-center text-sm font-medium text-background'>© {new Date().getFullYear()} Gigi Shalamberidze. All Rights Reserved.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer