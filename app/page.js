import { FaPlay } from 'react-icons/fa';
import Link from "next/link";
import AnimeCard from './components/AnimeCard';

export default function Home() {
  return (
    <>
    <div className='relative h-[60vw] md:h-[40vw] lg:h-[35vw] w-screen'>
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}>
        <source src="https://anitype.site/app2/media/download?fileName=anime/51179.webm" />
      </video>
      <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[--background] via-transparent' />
      <div className='absolute bottom-0 mb-10 md:mb-16 ml-6 md:ml-12'>
        <p className='mb-2 text-white text-[20px] w-[80%] md:text-2xl lg:text-3xl xl:text-4xl h-full md:w-[75%] font-semibold drop-shadow-xl overflow-hidden text-ellipsis line-clamp-3'>Реинкарнация безработного (Сезон 2)</p>
        <div className="mb-2 flex items-center gap-[6px]">
          <span className='text-[14px] md:text-[16px] font-light'>2023</span>
          <span className='px-2 text-[12px] md:text-[14px] bg-[--banner-background] rounded-md font-medium'>6,81</span>
          <span className='px-2 text-[12px] md:text-[14px] bg-[--banner-background] rounded-md font-medium'>ТВ, 24 мин</span>
        </div>
        <div className="flex items-center gap-[6px] mt-1 mb-2">
          <Link href='/' className='py-[1px] px-2 text-[11px] md:text-[12px] xl:text-[14px] rounded-md font-medium border-2'>Гарем</Link>
          <Link href='/' className='py-[1px] px-2 text-[11px] md:text-[12px] xl:text-[14px] rounded-md font-medium border-2'>Драма</Link>
          <Link href='/' className='py-[1px] px-2 text-[11px] md:text-[12px] xl:text-[14px] rounded-md font-medium border-2'>Фэнтези</Link>
          <Link href='/' className='py-[1px] px-2 text-[11px] md:text-[12px] xl:text-[14px] rounded-md font-medium border-2'>Этти</Link>
        </div>
        <p className='mb-2 text-white max-sm:hidden text-[16px] lg:text-[18px] xl:text-[19px] font-light w-[80%] md:w-[70%] lg:w-[50%] drop-shadow-xl overflow-hidden text-ellipsis line-clamp-2 lg:line-clamp-3'>34-летний безработный спасает группу подростков от смерти под колёсами грузовика, однако погибает сам. Он перерождается в волшебном мире под именем Рудеус Грейрат. Сохранив знания и опыт, он клянется вести полноценную жизнь и не повторять свои прошлые ошибки.</p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button className='bg-[--primary] text-white bg-opacity-30 rounded-[5px] sm:rounded-[6px] py-1.5 px-3 md:px-4 w-auto text-sm lg:text-lg font-medium flex flex-row items-center transition hover:bg-[--primary-variant] gap-2'><FaPlay size='14px'/>Смотреть</button>
        </div>
      </div>
    </div>
    <div className='pt-[24px] pl-[20px] pr-[20px] pb-0'>
      <div className='block [padding-block-start:32px]'>
        <span className='[padding-block-end:24px] font-medium'>Недавно измененные</span>
        <div className='[margin-inline:-20px] [overflow-x:overlay] [padding-block-end:16px] [margin-block-end:-16px]'>
          <div className='relative flex gap-[16px]'>
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}