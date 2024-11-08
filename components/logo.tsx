import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href='/'>
        <div className='hover:opacity-75 transition
        items-center gap-x-2 hidden md:flex'>
            <Image
            src='/logo.svg'
            alt='Logo'
            width={30}
            height={30}
            />
            <p className='text-lg text-neutrl-700'>
                Kanban
            </p>
        </div>
    </Link>
  )
}
