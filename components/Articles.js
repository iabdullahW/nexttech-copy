import React from 'react'
import ArticleCard from './ArticleCard';
import post4 from "./../public/assets/post_04.jpg"
import post5 from "./../public/assets/post_05.jpg"
import post6 from "./../public/assets/post_06.jpg"

const Articles = () => {

    const cards = [
        {
          image: post4,
          title: 'The Next Big Thing: Quantum Computing and Its',
          date: '06/07/2024',
        },
        {
          image: post5,
          title: 'Seamless Integration of Hybrid and Multi-Cloud Environments',
          date: '06/08/2024',
        },
        {
          image: post6,
          title: 'Harnessing the Power of AI and Machine Learning',
          date: '06/08/2024',
        },
      ];
    
  return (
    <>
        <div className='w-[100%] bg-white'>
            <div className='w-[80%] mx-auto'>
                <div className='upper'>
                    <div className='flex flex-col items-center gap-y-3'>
                        <h1 className='text-xl font-medium'>OUR ARTICLES</h1>
                        <h1 className='text-4xl font-bold'>Latest <span className='text-blue-700'>Articles</span></h1>
                    </div>
                </div>
                <div className='bottom'>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((article, index) => (
        <ArticleCard key={index} image={article.image} title={article.title} date={article.date} />
      ))}
    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Articles;