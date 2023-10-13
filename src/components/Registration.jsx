import React from 'react'

const Registration = () => {
  return (
    <div id='register' className='h-[100%] py-10 bg-white'>
      <h1 className='text-black text-3xl text-center md:text-5xl ubtunu font-[700] mb-10 '>Register</h1>
      <div className='flex justify-center'>
        <iframe
          src="https://lu.ma/embed-checkout/evt-KJFWP5kLbK1uCG5"
          width="600"
          height="800"
          frameborder="0"
          className="luma max-w-screen"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  )
}

export default Registration