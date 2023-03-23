import React, { useEffect, useState } from 'react'

export const Button = ({children}) => {

    const [background, setBackground] = useState('bg-accent')

    useEffect(() => {
        if (children === 'Login'){
            setBackground('bg-transparent');
    
        }
        else{
            setBackground('bg-accent');
        }
    }, [children]);

  return (
    <div>
        <button  className={`px-8 py-4 rounded-[2rem] ${background} text-white font-medium`}>
            {children}
        </button>
    </div>
  )
}

export default Button;