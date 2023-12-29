import { newsBlog } from '../constants'
import NewsCard from '../components/NewsCard'

const NewsBlog = () => {
  return (
    <section className='w-full py-[140px] max-md:py-[50px] padding-x'>
            <div className='flex justify-between max-md:inline-block items-center xl:items-baseline h-[90px] mb-8'>
                <p className='text-white text-[28px] lg:text-[48px] md:text-[36px] font-bold
                md:w-[650px] lg:w-[900px] xl:w-[700px] mb-5'>AWS news blog</p>
                <a href="/"><p className='hover:font-bold underline underline-offset-4
            '>See more top announcements of re:Invent 2023</p></a>
            </div>
            <div className='inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-5 lg:gap-8 justify-between'>
                
                {newsBlog.map(news => (
                    <NewsCard key={news.text} {...news} />
                ))}                         
            </div>
    </section>
  )
}

export default NewsBlog