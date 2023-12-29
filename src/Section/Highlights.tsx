
import { Swiper, SwiperSlide } from "swiper/react"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import { highlightCard } from "../constants"

function Highlights(){
     
    return(
        <section className="w-full overflow-hidden md:mb-36 max-md:pb-[20px]">
            <p className="text-white text-[28px] lg:text-[48px] md:text-[36px] font-bold
            md:w-[650px] lg:w-[900px] xl:w-[620px] mt-[70px] padding-x">Highlights</p>
            <div className="flex flex-col items-center justify-center">
                <div className="flex max-lg:w-[135%] w-[100%] justify-center
                items-center my-[20px]">
                    <Swiper 
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1.49}
                        breakpoints={{
                            // when window width is >= 640px
                            420: {
                              spaceBetween:30,
                            },
                            640: {
                                spaceBetween:50,
                            },
                            1024: {
                              spaceBetween:100
                            },

                          }}
                        initialSlide={0}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 43,
                                modifier: 2.5,
                                slideShadows: false,
                            }
                        }
                        
                        pagination={{
                            el:'#page',
                            clickable:true,
                            type: 'fraction', 
                            renderFraction: (currentClass, totalClass) => {
                                return '<span class="' + currentClass + '"></span>'+
                                    "&nbsp;/&nbsp;" +
                                    '<span class="' + totalClass + '"></span>';
                            }
                        }}
                        navigation={{
                            nextEl:'.nextBtn',
                            prevEl:'.prevBtn',
                            
                        }}
                        modules={[EffectCoverflow,Pagination,Navigation]}
                        className="w-full max-lg:h-[590px] h-[670px] pt-4"
                    >
                        {highlightCard.map((data) => (
                            <SwiperSlide key={data.title} className="card-high">
                                <img src={data.img} alt={`card ${data}`} className="absolute rounded-3xl w-[1243px] max-lg:h-[558px] h-[640px] object-cover card-shadow"/>
                                <div className="absolute  h-full w-full max-lg:p-10 p-16">
                                    <div className="flex justify-between flex-col  h-full">
                                        <p className=" h-fit font-bold">{data.type}</p>
                                        <div className=" h-fit w-[90%]">
                                            <h4 className="max-md:text-[20px] max-md:w-full w-[80%] font-bold text-[27px] pb-5">{data.title}</h4> 
                                            <span className="w-[300px] flex h-fit items-center gap-3">
                                                <p className="expand hidden">{data.expand}</p>
                                                <i className="fa-solid fa-arrow-right pt-[1px] mt-1 h-5"></i>
                                            </span>
                                        </div>
                                    </div>                                                             
                                </div>                                
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="nextBtn w-[15%] cursor-pointer h-[585px] 
                z-10 absolute right-0 mb-[82px] max-lg:w-[5%]"></div>
                <div className="prevBtn w-[15%] cursor-pointer h-[585px] 
                z-10 absolute left-0 mb-[82px] max-lg:w-[5%]"></div>
                <div className="flex px-6 mt-8 justify-between items-center rounded-full bg-gray-200 text-black w-[140px] h-[50px] ">
                    <span className="cursor-pointer prevBtn m-[-19px] w-16 h-10 justify-center items-center rounded-full flex">
                        <i className="fa-solid fa-chevron-left"></i>
                    </span>
                    <div className="flex items-center justify-center px-5 text-sm" id="page"></div>
                    <span className="cursor-pointer nextBtn w-16 h-10 m-[-19px] flex justify-center items-center rounded-full">
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            </div>
            
        </section>
    );
}

export default Highlights