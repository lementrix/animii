import Image from "next/image";
import Link from "next/link";
import { FiMenu } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="relative py-2 px-4 flex justify-between items-center gap-[8px]">
      {/* <div className="px-4 md:px-5 py-3 flex flex-row items-center transition duration-500">
        <Link href='/'>
          <Image src="/logo.svg" width={100} height={50} alt="Logotype"/>
        </Link>
        <div className="flex flex-row ml-auto gap-5 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <Image src="/search.png" width={25} height={25} alt="Search" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <Image src="/menu.png" width={25} height={25} alt="Menu" />
          </div>
          <div className="relative">
            
          </div>
        </div>
      </div> */}
      <div className='flex items-center'>
        <Link href='/'>
          <Image src="/logo.svg" width={100} height={50} alt="Logotype"/>
        </Link>
      </div>
      <div className='flex items-center gap-x-3'>
        <BiSearch size='25px'/>
        <Image className="rounded-full cursor-pointer" width={33} height={33} src="/user-avatar.gif" alt="" />
      </div> 
    </header>
  )
}

export {Header};