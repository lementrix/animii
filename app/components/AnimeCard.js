import Image from "next/image";

const AnimeCard = () => {
    return (
        <div className='relative min-w-[200px]'>
            <figure className='w-[200px] bg-no-repeat overflow-hidden bg-[--banner-background] rounded-lg'>
                <Image className='object-cover rounded-lg' src='/anime-banner.jpg' width={200} height={300}/>
            </figure>
            <h4 className='w-[200px] whitespace-nowrap text-ellipsis overflow-hidden text-[1.3rem] font-bold mt-[6px] mb-[4px]'>На самом деле, я самый сильный?</h4>
            <div className='flex flex-wrap items-center gap-[12px] justify-between'>
                <div className='flex items-center gap-[4px]'>
                    <Image src='/star.png' width={24} height={24} alt='Rating Icon'/>
                    <span className='text-lg'>8,2</span>
                </div>
                <span className='px-1.5 text-[12px] md:text-[14px] bg-[--banner-background] rounded-md font-medium text-'>2023</span>
            </div>
        </div>
    );
};

export default AnimeCard;