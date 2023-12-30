import innovationImg from '/src/assets/InnovationTalk.jpg'

const InnovationTalks = () => {
  return (
    <section className='w-full pt-[150px] max-md:py-[50px] padding-x'>
        <div className='w-full grid grid-cols-10 max-md:flex max-md:flex-col-reverse'>
            <div className='flex flex-col col-span-5 justify-center w-full'>
                <div className=''>
                    <p className='text-white text-[28px] lg:text-[48px] md:text-[36px] font-bold
                        w-full mb-6'>Innovation Talks</p>
                    <p>Hear directly from AWS leaders as they share the latest advances in AWS technologies, set the future product direction, and motivate you through compelling success stories. Livestream is also available for Innovation Talks.</p>
                    <p className='underline font-bold mt-10 h-[40px]'>Explore all sessions</p>
                </div>            
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-4'>
                <img src={innovationImg} alt="Speaker image=" className='pt-2' />
            </div>

        </div>
    </section>
  )
}

export default InnovationTalks