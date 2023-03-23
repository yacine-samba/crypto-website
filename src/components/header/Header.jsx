import React from 'react'
import logo from '../../assets/img/logo.png'
import Button from '../button/Button';

export const Header = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div className="headerLogo flex flex-row items-center">
            <img src={logo} alt="Logo crappo" />
            <p className='font-medium text-lg mx-4'>CRAPPO</p>
        </div>
        <div className="headerNavbar flex flex-row items-center">
            <ul className='list-none'>
                <li className='hover:text-accent inline mx-8 '><a href="#id">Products</a></li>
                <li className='hover:text-accent inline mx-8 '><a href="#id">Features</a></li>
                <li className='hover:text-accent inline mx-8 '><a href="#id">About</a></li>
                <li className='hover:text-accent inline mx-8 '><a href="#id">Contact</a></li>
            </ul>
                <Button>Login</Button>
                <div className='h-6 w-0.5 bg-grey3 mx-6'></div>
                <Button>Register</Button>
        </div>
    </div>
  )
}

export default Header;