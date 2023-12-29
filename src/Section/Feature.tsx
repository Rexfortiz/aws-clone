import {  useState } from 'react'
import { features, filterBtn } from '../constants'
import FeatureCard from '../components/FeatureCard'

import FilterButton from '../components/FilterButton';

const Feature = () => {

    type Category = "Machine Learning" | "Analytics" | "End User Computing" | "Storage" | "Application Integration" | "Business Applications" | "Database" | "Security, Identity, & Compliance" | "Compute";

    type FilterProps = "show-less" | "show-all" | Category;   

    const [show, setShow] = useState<FilterProps>("show-all")

    

    const popUpFilterHandler = (status: boolean, event?: any) => {
        const filterPopup: any = document.getElementById("filter-pop");
        event.preventDefault()
    
        if (status == true) {
            filterPopup.style.display ='block';
            document.body.style.overflow = "hidden"
        }
        else{
            filterPopup.style.display = 'none';
            document.body.style.overflow = "auto"
        }
    };   

    const [tempFilter, setTempFilter ] = useState<FilterProps>("Analytics")

    const handleFilterSubmit = (event: any) =>{
        event.preventDefault()
        setShow(tempFilter)
        popUpFilterHandler(false, event);
    }

    return (
        <section className='w-full py-[150px] max-md:py-[50px] padding-x'>
            <div className='flex justify-between max-md:inline-block items-center xl:items-baseline h-[90px]'>
                <p className='text-white text-[28px] lg:text-[48px] md:text-[36px] font-bold
                md:w-[650px] lg:w-[900px] xl:w-[700px]'>Featured announcements</p>
                <a href="/"><p className='hover:font-bold underline underline-offset-4 mt-0
            '>See all Top Announcements of re:Invent 2023</p></a>
            </div>
            <div>
                <div className='flex items-center gap-10 my-8'>
                    <button onClick={(event) => popUpFilterHandler(true, event)} className='border-2 rounded-full w-48 h-[52px]  filter-btn'>
                        <i className="fa-solid fa-grip-lines"></i> Filter by category
                    </button>
                    <p className={`cursor-pointer ${show == 'show-all' && 'hidden'} ${show == 'show-less' ? 'hidden' : "block"}`} onClick={() => setShow("show-all")}><i className="fa-solid fa-xmark"></i>  Remove Filter</p>
                </div>
                <div id='filter-pop' className='z-10 ml-[-330px] w-[200px] h-screen
                fixed top-50 pt-32 pl-[330px]'>
                    
                    <form action="" className=''>
                        <div id="filter-popup" className="flex  flex-col fixed justify-between z-20 top-[150px] w-[620px] h-[700px]
                            bg-[#1c2735] px-10 py-8 rounded-3xl max-md:w-[90%] max-sm:w-[88%]"> 
                            <p>Filter by:</p>
                            <div className=''>
                                {filterBtn.map((button) => (
                                    <FilterButton key={button.id} {...button} setTempFilter={setTempFilter} />
                                    
                                ))}        
                            </div>                            
                            <div className='w-full justify-between'>
                                <button onClick={(event) => popUpFilterHandler(false, event)} id="closeFilter" className="w-[20%] text-left underline">Close</button>
                                <input type="submit" onClick={(event) => handleFilterSubmit(event) } value={"Apply Filter"} className='w-[80%] border-2 py-3 rounded-full'/>
                            </div>
                        </div>                      
                    </form>
                    <div onClick={(event) => popUpFilterHandler(false, event)} className='z-10 bg-white/10 backdrop-blur-sm w-[190%] ml-[-330px] h-screen top-0 fixed'></div>
                </div>
                
            </div>
            <div className='inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 md:gap-5 lg:gap-8 justify-between'>
                
                {features.map(feature => (
                    <FeatureCard key={feature.name} {...feature} />
                )).filter((feature, index) => {
                    if(show == "show-all"){
                        return index < 8 
                    }
                    else if(show == "show-less"){
                        return index >= 0
                    }
                    else{
                        return feature.props.category == show
                    }
                })}
                
                <div className='w-full h-[300px] flex justify-center items-center'>
                    <button onClick={() => show =="show-all" ? setShow('show-less') : setShow("show-all")}
                    className='flex text-[16px] font-medium show-btn hover:bg-gradient-to-r from-[#468eaa] via-[#5166ac] to-[#5b539e] to-80% h-fit py-3 px-5 rounded-full'
                    >
                        <span className='ml-2 w-[90px] text-show'>{show == "show-all" ? "Show all" : "Show less"}</span> <span className='icon-arrow'><i className={`pl-1 ${show == "show-all" ? 'fa-solid fa-chevron-down' :'fa-solid fa-chevron-up'}`}></i></span>
                    </button>                    
                </div>
            </div>
        </section>
    )
} 

export default Feature