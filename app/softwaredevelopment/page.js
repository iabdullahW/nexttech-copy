import Flutter from '@/components/itsolution/Flutter';
import React from 'react';
import ReactNative from '@/components/itsolution/ReactNative';
import HighlightFeatures from '@/components/itsolution/HighlightFeatures';
import MobileApp from '@/components/itsolution/MobileApp';
import Last from '@/components/itsolution/Last';
import flutterimg from "../../public/flutter.png"
import reactnativeimg from "./../../public/react-native.png"

const data = [
  {
    title: "SOFTWARE DEVELOPMENT <br/> SERVICES IN CANADA",
    paragraph1: `Nextech BS, a top software development firm, offers <br/> full-cycle development services that help enterprises to be <br/> agile, forward-thinking, and high-performing`,
    header1: "Be Our Client",
    header2: "Enjoy your website, filled with the things you care about.",
    paragraph2: "This form is currently undergoing maintenance. Please try again later."
  }
];

const flutter=[
  {
    title:"Custom Software Development",
    paragraph:"Nextech BS provides full-stack custom software development services for internet, desktop, and mobile platforms, ensuring scalability and responsiveness at every stage of the development cycle, from startup to established business.",
    img:flutterimg

  }

]
const reactnative=[
  {title:"Go Cross-Platform With React Native",
  paragraph:"Our react native cross-platform apps are meticulously customized to preserve quality and standards while meeting the needs of the customer. Through new concepts and skilled development, our expert team of react-native developers creates high-quality hybrid apps.",
    img:reactnativeimg
}
]

const flutter2=[
  {
    title:"Custom Software Development",
    paragraph:"Nextech BS provides full-stack custom software development services for internet, desktop, and mobile platforms, ensuring scalability and responsiveness at every stage of the development cycle, from startup to established business.",
    img:flutterimg

  }
]

const flutter3=[
  {
    title:"Custom Software Development",
    paragraph:"Nextech BS provides full-stack custom software development services for internet, desktop, and mobile platforms, ensuring scalability and responsiveness at every stage of the development cycle, from startup to established business.",
    img:flutterimg

  }
]



const Page = () => {
  return (
    <>
      <div className='flex flex-col w-full gap-y-20 max-sm:overflow-x-hidden'>
        {data.map((single, index) => (
          <MobileApp 
            key={index}
            title={single.title} 
            paragraph1={single.paragraph1} 
            header1={single.header1}
            header2={single.header2} 
            paragraph2={single.paragraph2}
            
          />
        ))}
        {
          flutter.map((single,index)=>(

        <Flutter key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }
        {
          reactnative.map((native,index)=>(

        <ReactNative key={index} title={native.title} paragraph={native.paragraph} img={native.img}/>
        ))
        }
        
          {
          flutter2.map((single,index)=>(

        <Flutter key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }
          {
          flutter3.map((single,index)=>(

        <Flutter key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }

       
        
        {/* <HighlightFeatures/> */}
        <Last/>
      </div>
    </>
  );
};

export default Page;
