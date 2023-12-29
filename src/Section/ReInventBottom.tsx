import heroFootImg from '../assets/HeroFoot.jpg'
import reInventImg from '../assets/logo_reInvent2023.png'

const ReInventBottom = () => {
  return (
    <section className='h-[565px]'>
        <div className='z-10 w-full shadow-inside h-[565px] absolute'></div>
        <img src={heroFootImg} alt="background" className='w-full h-[565px] object-cover
        absolute'/>
        <div className='absolute mt-52 pl-[120px] flex flex-col gap-10 max-lg:padding-x'>
            <img src={reInventImg} alt="" className='w-[200px]' />
            <h4 className='text-2xl'>Watch the keynotes and Innovation Talks in real time for free.</h4>
            <button className="bg-white text-black rounded-full w-[135px] h-[52px] font-medium">Watch now</button>
        </div>
    </section>
  )
}

export default ReInventBottom