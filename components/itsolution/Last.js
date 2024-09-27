import React from 'react'

const Last = () => {
  return (
    <>
        <div className='w-[100%] bg-[#3b3b3b] text-white py-10 max-sm:p-5'>
            <div className='w-[90%] mx-auto flex gap-x-5 items-center max-sm:flex max-sm:flex-col
            max-sm:w-[100%] max-sm:items-center max-sm:justify-center max-sm:gap-y-4'>
            <div className='left w-[70%]  flex flex-col gap-y-3 max-sm:w-[100%]'>
                <h1 className='text-3xl italic font-bold'>Let’s bring your idea to life</h1>
                <p className='opacity-70'>Are you ready to start your project with Nextech Business Solution? Work with our team of software designers and developers to achive your business goals</p>
            </div>
            <div className='right w-[25%] max-sm:w-[100%] max-sm:flex max-sm:justify-center max-sm:ml-4'>
                <button className='py-4 text-2xl text-white bg-red-700 px-7 rounded-3xl ' >GET A FREE QUOTE</button>
            </div>
            </div>
            
        </div>
    </>
  )
}

export default Last