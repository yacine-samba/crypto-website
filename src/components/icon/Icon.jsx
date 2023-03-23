import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Icon = ({ icon, number, title }) => {
    return (
        <div className='flex flex-row items-center'>
            <div className='m-6 w-20 h-20 bg-white10 text-accent flex items-center justify-center rounded-full text-3xl'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <h2 className='text-4xl font-bold'>{number}</h2>
                <p className='text-grey1'>{title}</p>
            </div>
        </div>
    )
}

export default Icon