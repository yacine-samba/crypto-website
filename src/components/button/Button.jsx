import React, { useEffect, useState } from 'react'
import Arrow from '../arrow/Arrow';

export const Button = ({ children }) => {

    const [background, setBackground] = useState('bg-accent');
    const [arrow, setArrow] = useState('hidden');

    useEffect(() => {
        if (children === 'Try for FREE' || children === 'Start mining') {
            setArrow('inline text-lg');
        }
        else {
            setArrow('hidden');
        }
    }, [children]);

    useEffect(() => {
        if (children === 'Login') {
            setBackground('bg-transparent');

        }
        else {
            setBackground('bg-accent');
        }
    }, [children]);

    return (
        <div>
            <button className={`px-8 py-4 rounded-[2rem] ${background} text-white font-medium flex flex-row items-center`}>
                {children}
                <span className={`p-0 m-0 ${arrow}`}>
                    <Arrow width='6' height='10' />
                </span>
            </button>
        </div>
    )
}

export default Button;