import Flutter from '@/components/itsolution/Flutter';
import React from 'react';
import ReactNative from '@/components/itsolution/ReactNative';
import HighlightFeatures from '@/components/itsolution/HighlightFeatures';
import MobileApp from '@/components/itsolution/MobileApp';
import Last from '@/components/itsolution/Last';
import flutterimg from "../../public/flutter.png"
import reactnativeimg from "./../../public/react-native.png"
import FlutterReverse from "./../../components/itsolution/FlutterReverse"

const data = [
  {
    title: "SOCIAL MEDIA MARKETING <br/> SERVICES IN CANADA",
    paragraph1: `Nextech BS has a creative and imaginative workforce that <br/> creates everything professionally and reliably. Many major <br/> and small companies benefit from our knowledge and <br/> unique marketing approach through Social Media <br/> marketing. Come join Nextech BS and see your Business <br/> grow from a story to a magnificence.`,
    header1: "Be Our Client",
    header2: "Enjoy your website, filled with the things you care about.",
    paragraph2: "This form is currently undergoing maintenance. Please try again later."
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
            color={"rgb(19, 87, 72)"}
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
          flutter.map((single,index)=>(

        <Flutter key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }
        <hr />
        {
          flutter.map((single,index)=>(

        <FlutterReverse key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }
        <hr />
        {
          flutter.map((single,index)=>(

        <Flutter key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }
        <hr />
        {
          flutter.map((single,index)=>(

        <FlutterReverse key={index} 
          title={single.title}
          paragraph={single.paragraph}
          img={single.img}
        />
          ))
        }
        <hr />
        {
          flutter.map((single,index)=>(

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
