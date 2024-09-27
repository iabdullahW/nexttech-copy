import { GiProcessor } from "react-icons/gi";
import { FaCircleStop } from "react-icons/fa6";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaTabletScreenButton } from "react-icons/fa6";
import { TbDeviceMobileCancel } from "react-icons/tb";
import { VscDebug } from "react-icons/vsc";
import { HiCpuChip } from "react-icons/hi2";
import icon1 from "./../public/assets/icon1.svg"
import icon2 from "./../public/assets/icon2.svg"
import mainimage1 from "./../public/assets/case_image_1.webp"
import mainimage2 from "./../public/assets/case_image_2.webp"
import mainimage3 from "./../public/assets/case_image_3.webp"

export const carouselData = [
    {
      id: 1,
     
      img: require("/public/assets/clientlogo1.webp"),
  
    },
    {
      id: 2,
     
      img: require("/public/assets/client_logo_2.webp"),
    
    },
    {
      id: 3,

      img: require("/public/assets/client_logo_3.webp"),
  
    },
    {
      id: 4,

      img: require("/public/assets/client_logo_4.webp"),

    },
    {
      id: 5,

      img: require("/public/assets/client_logo_5.webp"),
     
    },
    {
      id: 6,
    
      img: require("/public/assets/client_logo_6.webp"),

    },
    {
      id: 7,
    
      img: require("/public/assets/client_logo_7.webp"),
  
    },
    {
      id: 8,
 
      img: require("/public/assets/client_logo_8.webp"),

    },
    {
      id: 9,
     
      img: require("/public/assets/client_logo_9.webp"),
    
    },
  ];

  

  export const services=[
    // {
    //   icon:<GiProcessor />,
    //   icon:<FaCircleStop />,
    //   title:"Custom Software Development",
    //   title:"Custom Software Development",
    //   title:"Custom Software Development",
    //  more:[
    //   {icon: <FaCircleStop />, points:[ "Software architecture design","CyberSafe Audit & IT Consulting","Data migration services","Legacy app modernization"] },
    //   {icon: <FaCircleStop />, points:[ "TechGuard Audit","System integration services","AssuranceEdge & IT Consulting","IT Sentry Audit & IT Consulting"] },
    //   {icon: <FaCircleStop />, points:[ "Web app development services","Web portal development services","Website development services","Offshore web development"] },
    //  ]

    // }

    {
      title:"Custom Software Development ",
      icon:<GiProcessor />,
      para1:"Software architecture design",
      para2:"Software architecture design",
      para3:"Software architecture design",
      para4:"Software architecture design",
    },
    {
      title:"Audit & IT Consulting Services ",
      icon:<FaTableCellsLarge />,
      para1:"Software architecture design",
      para2:"Software architecture design",
      para3:"Software architecture design",
      para4:"Software architecture design",
    },
    {
      title:"Web Application Design and Development ",
      icon:<FaTabletScreenButton />,
      para1:"Software architecture design",
      para2:"Software architecture design",
      para3:"Software architecture design",
      para4:"Software architecture design",
    },
    {
      title:"Mobile App Design and Development",
      icon:<TbDeviceMobileCancel />,
      para1:"Software architecture design",
      para2:"Software architecture design",
      para3:"Software architecture design",
      para4:"Software architecture design",
    },
    {
      title:"Best UI/UX Design Services",
      icon:<VscDebug />,
      para1:"Software architecture design",
      para2:"Software architecture design",
      para3:"Software architecture design",
      para4:"Software architecture design",
    },
    {
      title:"Maintenance and Customer Support ",
      icon:<HiCpuChip />,
      para1:"Software architecture design",
      para2:"Software architecture design",
      para3:"Software architecture design",
      para4:"Software architecture design",
    }
  ]

export const scroller =[
  {
    subTitle:"Computer Software",
    mainTitle:"Astarte Medical",
    paragraphs:"Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.",
    industry:"Computer Software",
    country:"Germany,Issum",
    image1:icon1,
    image2:icon2,
    mainImage:mainimage1
  },
  {
    subTitle:"Healthcare",
    mainTitle:"CAE Blue Phantom",
    paragraphs:"CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides.",
    industry:"Wellness & Fitness",
    country:"Germany,Issum",
    image1:icon1,
    image2:icon2,
    mainImage:mainimage2
  },
  {
    subTitle:"Real Estate",
    mainTitle:"Liberkeys",
    paragraphs:"Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines.",
    industry:" Real estate",
    country:"France, Paris",
    image1:icon1,
    image2:icon2,
    mainImage:mainimage3
  },
]

