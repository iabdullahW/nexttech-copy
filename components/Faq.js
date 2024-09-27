import React from 'react'
import Image from 'next/image'
import underline from "./../public/underHeading.svg"
import faqData from "./../utils/constants"
import Questions from './Questions'

const Faq = () => {

    const faqData = [
        {
          question: "Q. How to choose a software development company?",
          answer: "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades. Here is an extended list of services:",
          items: [
            "Web and mobile app development",
            "Software architecture",
            "IT consulting and audit",
            "Legacy system modernization",
            "Cloud computing",
            "QA and testing",
            "Business analysis",
            "IT staffing services",
          ]
        },
        {
          question: "Q. What is a custom software development company?",
          answer: "A custom software development company is a vendor that builds unique software from scratch.",
          items: []
        },
        {
          question: "Q. Why do businesses need custom software development?",
          answer: "Businesses need custom software development to meet their specific requirements and enhance efficiency.",
          items: []
        },
        {
          question: "Q. How much does custom software development cost?",
          answer: "The cost of custom software development varies depending on the complexity of the project, the technologies used, and the development team's location.",
          items: []
        }
      ];
      
  return (
    <>
    <div className='w-[100%] bg-white '>

    
        <div className='w-[80%] mx-auto  py-5'>
            <div className='flex flex-col items-center justify-center gap-y-5'>
            <div className='flex flex-col items-center '>
            <h1 className='font-bold text-md'>F.A.Q</h1>
            <Image src={underline} alt="" className='pr-10'/>
            </div>
             <div>
                <h1 className='text-3xl font-extrabold'>Need a <span className='text-blue-800'> Support?</span></h1>
             </div>
            </div>
            <div>
                <Questions data={faqData}/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Faq