'use client';
import Image from 'next/image';

type Props = {};

function NotFound({}: Props) {
  return (
    <section className='container flex h-screen w-full flex-col items-center justify-center'>
      <div className='relative h-[250px] w-[250px]'>
        <Image
          src='/404.svg'
          alt='best massage in london'
          priority
          className='pointer-events-none overflow-hidden object-contain'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <h1 className='font-secondary text-xl font-bold text-red-600 md:text-3xl'>
        404 Not Found
      </h1>
      <h2 className='text-nutral-900 font-secondary mt-2 text-lg font-bold md:text-2xl'>
        Whoops! That page doesn’t exist.
      </h2>
    </section>
  );
}

export default NotFound;
