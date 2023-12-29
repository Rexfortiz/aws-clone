import { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';


const Announce = () => {

    const [service] = useState(3)
    const [feature] = useState(230)

    //learn scroll trigger
    return (
        <section className='w-full pt-[135px] padding-x'>
            <p className='text-white text-[28px] lg:text-[48px] md:text-[36px] font-bold
            md:w-[650px] lg:w-[900px] xl:w-[620px]'>Products announced</p>
            <div className='flex w-full max-md:inline-block items-center justify-between  py-14 max-lg:py-10'>
                
                <div className='flex flex-col justify-center '>
                    <span className='text-[205px] max-xl:text-[160px] max-lg:text-[150px] max-md:text-[120px]
                    leading-tight font-bold bg-gradient-to-br from-[#631ea3] via-[#cf358f]
                    to-[#c52688] bg-clip-text text-transparent'               
                    ><CountUp end={service} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp></span>
                    <p className='text-2xl font-medium max-lg:text-xl max-md:text-base'>New services</p>
                </div>
                <hr className='mt-11 hidden max-lg:block mb-3' />
                <div className='flex flex-col justify-center mb-[52px]  mr-80 max-xl:mr-60 max-lg:mr-32'>
                    <span className='pb-2 text-[59px] max-xl:text-[50px] max-lg:text-[48px] max-md:text-[35px] leading-tight font-bold
                    bg-gradient-to-br from-[#712488] to-[#791768]
                    bg-clip-text text-transparent'
                    ><CountUp end={feature} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp></span>
                    <p className='text-2xl font-medium max-lg:text-xl max-md:text-base'>New features</p>
                </div>
            </div>
        </section>
    )
}

export default Announce