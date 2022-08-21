import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <div className='w-full sm:w-3/4 border-2 border-black mt-56'>
        <article className=' border-2 border-black'>
          <h1 className='font-sans font-bold text-4xl md:text-6xl ms:text-8xl text-gray-800'>
            Payments <br />
            infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          {/* <img src={phoneImg} className='phone-img' alt='phone' /> */}
        </article>
      </div>
    </div>
  )
}

export default Hero
