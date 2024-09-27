import React from 'react'
import Image from 'next/image'
import Box from '@/components/blogcomponent/Box'
import blog1 from "./images/blog1.jpg"
import blog2 from "./images/blog2.jpg"
import blog3 from "./images/blog3.jpg"
import blog4 from "./images/blog4.jpg"
import blog5 from "./images/blog5.jpg"
import blog6 from "./images/blog6.jpg"
import blog7 from "./images/blog7.jpg"
import blog8 from "./images/blog8.jpg"
import blog9 from "./images/blog9.jpg"
import blog10 from "./images/blog10.jpg"
import blog11 from "./images/blog11.jpg"
import blog12 from "./images/blog12.jpg"
import blog13 from "./images/blog13.jpg"
import blog14 from "./images/blog14.jpg"
import blog15 from "./images/blog15.jpg"


const page = () => {
    const data=[
        {img:blog1,title:"How do spam filters work?",paragraph:"How do spam filters work? Spam filters are an increasingly present part of the email delivery"},
        {img:blog2,title:"What is malware? How to protect yourself against them",paragraph:"What is malware? How to protect yourself against them Today everybody uses internet-connected devices in all "},
        {img:blog3,title:"The guide to event marketing: strategies, ideas, and examples",paragraph:"The guide to event marketing: strategies, ideas, and examples Making an event marketing plan for every"},
        {img:blog4,title:"Most Common WordPress Issues",paragraph:"It could be irritating whenever an issue does arise, especially if you have no idea "},
        {img:blog5,title:"Patch management: Best practices and why it’s important",paragraph:"Patch management: Best practices and why it’s important Patch management is the subset of systems administration"},
        {img:blog6,title:"WordPress development: the complete guide to getting started",paragraph:"Building a website is an integral part of founding infrastructure on the Internet for your"},
        {img:blog7,title:"Social Media Marketing Importance and strategies",paragraph:"Social Media Marketing Importance and strategies Social media is a powerful means for productions of al"},
        {img:blog8,title:"What does a software developer do? A deep dive into the career",paragraph:"There are uncountable techniques to dive into software development. Some individuals discover their passion for"},
        {img:blog9,title:"How to Set Up & Implement Database for Web Design & Development",paragraph:"An intelligent database design starts with a description of the data you need to do"},
        {img:blog10,title:"How to build a successful app with react native?",paragraph:"How to build a successful app with react native? The universe has been taken over by"},
        {img:blog11,title:"What is network infrastructure?",paragraph:"What is network infrastructure? In this digital age, an organization’s agility and productivity depend on more "},
        {img:blog12,title:"A complete step-by-step guide to SEO",paragraph:"A complete step-by-step guide to SEO You undoubtedly have heard about SEO optimization’s significance when advertising"},
        {img:blog13,title:"What is mobile app development process?",paragraph:"What is mobile app development process? An app for everything these days, from small company applications"},
        {img:blog14,title:"Data center infrastructure management solutions",paragraph:"Data center infrastructure management solutions Historically, books and files have been a common form of retaining"},
        {img:blog15,title:"What must IT infrastructure include?",paragraph:"IT Infrastructure | What Must IT Include? Your IT infrastructure is the design of all the"},
    ]
  return (
    <>
   <div className='w-[100%] bg-white'>
    <div className='w-[95%] mx-auto flex  justify-between flex-wrap'>

        {data.map((value,index)=>(
            <Box key={index} img={value.img} title={value.title} paragraph={value.paragraph}/>
        ))}
      
    </div>
   </div>
    </>
  )
}

export default page