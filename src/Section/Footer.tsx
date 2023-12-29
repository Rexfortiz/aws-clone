
const Footer = () => {
  return (
    <section>
        <div className='bg-[#242f3e] w-full h-fit'>
            <div className='w-full py-4 padding-x grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-1 footer-div max-sm:gap-4'>
                <button className='bg-[#ff9900] text-[14.5px] w-full py-3 px-3 h-fit rounded-full font-bold text-black max-sm:block hidden'>Create an AWS Account</button>
                <div className='w-full'>
                    <h4 className="text-xl font-medium pb-2">Learn About AWS</h4>
                    <ul>
                        <li><a href="#">What Is AWS?</a></li>
                        <li><a href="#">What Is Cloud Computing?</a></li>
                        <li><a href="#">AWS Inclusion, Diversity & Equity</a></li>
                        <li><a href="#">What Is DevOps?</a></li>
                        <li><a href="#">What Is a Container?</a></li>
                        <li><a href="#">What Is a Data Lake?</a></li>
                        <li><a href="#">What is Generative AI?</a></li>
                        <li><a href="#">AWS Cloud Security</a></li>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Press Releases</a></li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h4 className="text-xl font-medium pb-2">Resources for AWS</h4>
                    <ul className=''>
                        <li><a href="#">Getting Started</a></li>
                        <li><a href="#">Training and Certification</a></li>
                        <li><a href="#">AWS Solutions Library</a></li>
                        <li><a href="#">Architecture Center</a></li>
                        <li><a href="#">Product and Technical FAQs</a></li>
                        <li><a href="#">Analyst Reports</a></li>
                        <li><a href="#">AWS Partners</a></li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h4 className="text-xl font-medium pb-2">Developers on AWS</h4>
                    <ul>
                        <li><a href="#">Developer Center</a></li>
                        <li><a href="#">SDKs & Tools</a></li>
                        <li><a href="#">.NET on AWS</a></li>
                        <li><a href="#">Python on AWS</a></li>
                        <li><a href="#">Java on AWS</a></li>
                        <li><a href="#">PHP on AWS</a></li>
                        <li><a href="#">JavaScript on AWS</a></li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h4 className="text-xl font-medium pb-2">Help</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Get Expert Help</a></li>
                        <li><a href="#">File a Support Ticket</a></li>
                        <li><a href="#">AWS re:Post</a></li>
                        <li><a href="#">Knowledge Center</a></li>
                        <li><a href="#">AWS Support Overview</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">AWS Careers</a></li>
                    </ul>
                </div>
                <div className='w-full flex flex-col gap-4 pt-2 px-2 max-sm:px-0'>
                    <button className='bg-[#ff9900] text-[14.5px] w-full py-2 px-3 h-fit rounded-full font-bold text-black max-sm:hidden'>Create an AWS Account</button>
                    <div className='grid grid-cols-4 text-2xl gap-2'>
                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                        <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/"><i className="fa-brands fa-twitch"></i></a>
                        <a href="/"><i className="fa-brands fa-youtube"></i></a>
                        <a href="/"><i className="fa-solid fa-podcast"></i></a>
                        <a href="/"><i className="fa-regular fa-envelope"></i></a>
                    </div>
                    <p className='italic text-[14.5px]'>Amazon is an Equal Opportunity Employer: Minority / Women / Disability / Veteran / Gender Identity / Sexual Orientation / Age.</p>
                </div>
                <div className='col-span-5 max-lg:col-span-3 max-sm:col-span-1 text-sm pt-6'><span className='font-bold text-md'>Language</span> عربي | Bahasa Indonesia | Deutsch | English | Español | Français | Italiano | Português | Tiếng Việt | Türkçe | Ρусский | ไทย | 日本語 | 한국어 | 中文 | (简体) | 中文 | (繁體)</div>
            </div>
        </div>
        <div className='bg-[#eaeded] w-full h-[52px] py-4 padding-x max-lg:h-fit'>
            <p className='text-black'>Privacy | Site Terms | Cookie Preferences | © 2023, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer