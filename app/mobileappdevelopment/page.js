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
    title: "MOBILE APP <br/> DEVELOPMENT SERVICES <br/> IN CANADA",
    paragraph1: `It is difficult to discover people who do not use mobile phones in this day <br/> and age  of current technology.  However, finding a mobile application genius <br/> who can be  totally trusted with  designing cutting-edge, efficient, and <br/> cost-effective mobile apps is more difficult. You no longer  need to hunt for one because you are here with Nextech  BS.`,
    header1: "Be Our Client",
    header2: "Enjoy your website, filled with the things you care about.",
    paragraph2: "This form is currently undergoing maintenance. Please try again later.",
    color:"#020842"
  }
];

const flutter=[
  {
    title:"Go Hybrid With Flutter",
    paragraph:"What could be better than a cross-platform application that requires little development time and costs nothing? Our hybrid applications, built using Flutter technology, function flawlessly on iOS and Android. Nextech BS skilled Flutter developers will design, create, and deploy strong, highly efficient, cost-effective, secure, and value-driven apps.",
    img:flutterimg

  }

]
const reactnative=[
  {title:"Go Cross-Platform With React Native",
  paragraph:"Our react native cross-platform apps are meticulously customized to preserve quality and standards while meeting the needs of the customer. Through new concepts and skilled development, our expert team of react-native developers creates high-quality hybrid apps.",
    img:reactnativeimg
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
            color={single.color}
            
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
        <HighlightFeatures/>
        <Last/>
      </div>
    </>
  );
};

export default Page;
