import React from 'react'

interface FeatureCardProps{
    category: string,
    categoryColor: string,
    name: string,
    description: string,
    url: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({category,categoryColor,name,description,url}) => {
  return (
    <a href={url}>
        <div className={`relative flex-1 flex-col w-full max-md:h-full
        h-[300px] bg-[#141f2e] block p-6 rounded-3xl
        ${categoryColor == 'red-ish' ? 'feature-card1' : 'feature-card2'}`}>
            <div className={`px-2 w-max mb-2 rounded-[3.5px] 
            ${categoryColor == 'red-ish' ? 
            'bg-gradient-to-r from-[#3d1111] via-[#7a3434] to-[#772c2c]' 
            : 'bg-gradient-to-r from-[#5092a3] via-[#4d59c7] to-[#5d35b9]'}`}>
                {category}  
            </div>
            <h4 className='font-medium text-2xl'>{name}</h4>
            <p className='text-sm'>{description}</p>     
            <i className="fa-solid fa-arrow-right pt-24 max-md:pt-3 md:absolute bottom-5 arrow-feature"></i>   
            
        </div>
    </a>
  )
}

export default FeatureCard