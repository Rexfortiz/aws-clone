import SpeechCard from '../components/SpeechCard'
import {speechData} from '../constants/'

const Speech = () => {
  return (
    <section className='w-full md:pt-[135px] padding-x'>
        <p className='text-white text-[28px] lg:text-[48px] md:text-[36px] font-bold
            md:w-[650px] lg:w-[900px] xl:w-[620px] mb-10'>Speech</p>
        <div className='speechContainer'>           
          <ul id="cardsSpeech">
            {speechData.map((index) => (
              <SpeechCard key={index.title} {...index} />
            ))}
          </ul>
        </div>     
    </section>
  )
}

export default Speech