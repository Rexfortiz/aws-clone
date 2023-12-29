import { useState } from "react";

function Header(){

    const [isScroll, setIsScroll] = useState(false)

    return(
        <section className="header z-[100] py-4 px-10 max-md:py-2 max-md:px-1">
            <div className="nav-header max-md:px-0">
                <div className="top-container max-md:hidden">
                    <div className='nav-logo'>
                        <img className="aws-logo" src="./src/assets/pngwing.com.png"  alt="AWS logo" />
                    </div>
                    <nav className="nav-secondary-group mb-2">
                        <div>
                            <a href="">Contact Us</a>
                            <a href="">Support <i className="fa-solid fa-caret-down"></i></a>
                            <a href="">English <i className="fa-solid fa-caret-down"></i></a>
                            <a href="">My Account <i className="fa-solid fa-caret-down"></i></a>
                            <a href="">Sign In</a>
                            <a href="" ><button id="create-account" className="h-[35px] w-[192px] text-[14.2px]">Create an AWS Account</button></a>
                        </div>
                    </nav>
                </div>       
                <div className="primary-container max-md:hidden h-6">
                    <div className="primary-left">
                        <span onClick={() => setIsScroll(!isScroll)} 
                            className={`hidden z-10 w-6 cursor-pointer
                            ${isScroll==true ?'max-xl:block' : 'max-xl:hidden'}`}>
                            <i className="text-[20px] fa-sharp fa-solid fa-angle-left arrow-header-left"></i>
                        </span>        
                    </div>
                    <div className={`nav-primary-group`}>
                        <nav className={`nav-primary-link ${ isScroll ? 'align-right' : 'align-left'} xl:translate-x-0`}>
                            <ul>
                                <li>
                                    <span>
                                        <a href="">re:Invent</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Products</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Solutions</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Pricing</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Documentation</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Learn</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Partner Network</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">AWS Marketplace</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Customer Enablement</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Events</a>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <a href="">Explore More</a>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="primary-left z-10">
                        <span onClick={() => setIsScroll(!isScroll)} className={`hidden 
                        ${isScroll==false ?'max-xl:block' : 'max-xl:hidden'} arrow-header-right cursor-pointer `}>
                            <i className="text-[20px] fa-sharp fa-solid fa-angle-right"></i>
                        </span> 
                        <i className="text-[14px] fa-solid fa-magnifying-glass mb-1"></i>
                    </div>
                </div>
                <div className="hidden max-md:block">                
                    <div className="top-container flex pl-[23px] pr-7 pt-1">
                        <img className="w-12" src="./src/assets/pngwing.com.png"  alt="AWS logo" />
                        <div className="flex gap-4 justify-center items-center text-2xl">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 h-12 mt-3">
                        <button className="rounded-full bg-[#ff9900] border-black border-1 text-black font-[500] text-sm">Get Started for Free</button>
                        <button className="rounded-full bg-white border-blue-500 border-2 text-blue-500 font-[500] text-sm">Contact Us</button>
                    </div>
                </div>               
            </div>
      </section>
    );
}

export default Header