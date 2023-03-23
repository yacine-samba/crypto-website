import React from 'react'
import Icon from '../icon/Icon';
import { faBarChart, faEarth, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import illustration from '../../assets/img/illustration.png';

export const About = () => {
    return (
        <div>
            <div className='flex w-full justify-between'>
                <Icon icon={faBarChart} number='$30B' title='Digital Currency Exchanged' />
                <Icon icon={faUser} number='10M+' title='Trusted Wallets Investor' />
                <Icon icon={faEarth} number='195' title='Countries Supported' />
            </div>

            <div className='flex flex-col sm:flex-row my-16'>
                <img className='w-2/4' src={illustration} alt="Illustration à propos" />
                <div className='max-w-md'>
                    <h2 className='font-bold text-4xl leading-snug'>Why you should choose CRAPPO</h2>
                    <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                    <Button>Learn more</Button>
                </div>
            </div>

        </div>
    )
}

export default About;