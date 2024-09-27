import React from 'react'

const MobileApp = ({title,paragraph1,header1,header2,paragraph2,color}) => {
  return (
    <>
         <div className='w-[100%] bg-blue-400' style={{backgroundColor:color}}>
                <div className=' text-white flex w-[95%] mx-auto items-center justify-between p-20 max-sm:flex max-sm:flex-col max-sm:w-[100%] max-sm:gap-y-4 max-sm:p-5 max-[768px]:p-5'>
                    <div className='left w-[70%] max-sm:w-[100%] max-[768px]:w-[100%] max-[768px]:flex  max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center max-[768px]:gap-y-4'>
                        {/* <h1 className='text-3xl font-extrabold'>{title}</h1> */}
                        <h1
              className="text-4xl font-extrabold max-sm:text-2xl max-[768px]:flex max-[768px]:justify-center "
              dangerouslySetInnerHTML={{ __html: title }}
            />
                        {/* <p className='text-xl'>
                       {paragraph1}
                        </p> */}
                        <p className='text-xl' dangerouslySetInnerHTML={{__html:paragraph1}}/>
                    </div>
                    <div className='self-start right w-[25%] max-sm:w-[100%] max-[786px]:hidden'>
                        <div className='flex flex-col p-10 text-black bg-white border rounded-3xl gap-y-2 ' >
                            <h1 className='text-3xl font-extrabold'>{header1}</h1>
                            <h1 className='opacity-90'>{header2}</h1>
                            <p className='opacity-65'>
                            {paragraph2}
                            </p>
                        </div>                        
                    </div>
                </div>
        </div>
    </>
  )
}

export default MobileApp