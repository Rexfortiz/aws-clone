import React from 'react'

interface NewsCardProp{
    type: string;
    text: string;
    go: string
}

const NewsCard: React.FC<NewsCardProp> = ({type,text,go}) => {
  return (
    <a href="/">
        <div className={`relative flex-1 flex-col w-full max-md:h-full
        h-[300px] bg-[#141f2e] block p-8 rounded-3xl feature-card2 news-card`}>
            <div className={`px-2 w-max mb-2 rounded-[3.5px] 
            bg-gradient-to-r from-[#5d35b9] via-[#4d59c7] to-[#5092a3]`}>
                {type}  
            </div>
            <h4 className='font-medium text-2xl max-xl:text-xl'>{text}</h4>      
            <span className="pt-24 max-md:pt-3 md:absolute bottom-8 flex gap-2 items-center">
                <p className="expand hidden">{go}</p>
                <i className="fa-solid fa-arrow-right mt-1"></i>
            </span>
        </div>
    </a>
  )
}

export default NewsCard

// <i className="fa-solid fa-arrow-right pt-24 max-md:pt-3 md:absolute bottom-5 arrow-feature"></i>