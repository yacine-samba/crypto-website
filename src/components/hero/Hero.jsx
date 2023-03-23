import React from 'react'
import Button from '../button/Button';
import herobg from '../../assets/img/hero-bg.png';

export const Hero = () => {
    return (
        <div className='h-3/4 flex flex-col justify-center items-start relative'>
            <div className='w-[600px]'>
                <div className="info flex items-center bg-white10 rounded-[2rem] w-[385px] max-w-xl">
                    <p className='bg-white rounded-[2rem] font-medium m-1 px-4 py-1 text-primary'>75% SAVE</p>
                    <p>For the Black Friday weekend</p>
                </div>
                <h1 className='text-[4rem] font-bold leading-tight py-6'>
                    Fastest & secure platform to invest in crypto
                </h1>
                <p className='text-grey2 w-[400px] pb-8'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                <Button>Try for FREE</Button>
                <img className='absolute top-1/3 left-1/2 md:top-4 md:left-[60%] md:top-1/4 lg:left-[15%] xl:left-[20%] 2xl:left-[20%]' src={herobg} alt="Image d'illustration de crypto" />
            </div>
        </div>
    )
}

export default Hero;