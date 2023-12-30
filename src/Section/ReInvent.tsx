import headerImg from "/src/assets/Hero_header.jpg"
import reInventLogo from '/src/assets/logo_reInvent2023.png'

function Hero() {
    return(
        <section className='h-[565px] '>
            <img src={headerImg} alt="background" className='w-full h-[565px] object-cover
                absolute' />
                <div className="absolute pl-[120px] flex flex-col gap-10 max-md:gap-5 max-lg:padding-x h-[565px] w-[70%] max-md:w-full pt-[150px] max-md:pt-[270px] ">            
                    <img src={reInventLogo} alt="re:invent" className='w-[200px]' />
                    <div>
                        <h1 className="text-white text-[60px] font-bold max-lg:text-[50px] max-md:text-[39px]">On-demand content</h1>
                        <h4 className="text-white text-[23.6px] font-medium max-lg:text-[20px] max-md:text-[18px]">Watch the keynotes, Innovation Talks, and breakout sessions on demand.</h4>
                    </div>
                    <button className="bg-white text-black rounded-full w-[135px] h-[52px] font-medium">Watch now</button>              
                </div>
            
        </section>
    );
}

export default Hero
