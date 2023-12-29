import React from 'react'
interface SpeechCardProps{
  type: string;
  title: string;
  go: string;
  img: string;
  id: string;
}

const SpeechCard: React.FC<SpeechCardProps> = ({type, title, go, img, id}) => {

  return (
    <li className='cardSpeech' id={id}>
      <div className='cardSpeech-body'>               
        <img src={img} alt="speaker image" className='absolute object-cover' />
        
        <div className='absolute flex flex-col justify-between w-full h-full p-[72px] max-md:p-[40px]'>
          <div className='top-0 left-0 absolute inner-shadow-wrapper'></div>
          <p className="z-10 h-fit font-bold">{type}</p>
          <div className=" h-fit w-[90%] z-10">
            <h4 className="max-md:text-[20px] max-md:w-full w-[80%] font-bold text-[27px] pb-5">{title}</h4> 
            <span className="pl-2 flex gap-2 items-center h-6">
              <p className="expand hidden">{go}</p>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SpeechCard