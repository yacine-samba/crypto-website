import React from 'react'

export const Arrow = ({width, height}) => {
    return (
        <div className='w-8 h-8 bg-white rounded-[2rem] flex items-center justify-center text-accent ml-4'>
            <svg width={width} height={height} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 11C1.36839 11.0008 1.23793 10.9755 1.11609 10.9258C0.994256 10.876 0.88344 10.8027 0.79 10.71C0.696272 10.617 0.621877 10.5064 0.571109 10.3846C0.52034 10.2627 0.494202 10.132 0.494202 10C0.494202 9.86799 0.52034 9.73728 0.571109 9.61542C0.621877 9.49356 0.696272 9.38296 0.79 9.29L4.1 6L0.92 2.69C0.733749 2.50264 0.629208 2.24919 0.629208 1.985C0.629208 1.72081 0.733749 1.46736 0.92 1.28C1.01296 1.18627 1.12356 1.11188 1.24542 1.06111C1.36728 1.01034 1.49799 0.984202 1.63 0.984202C1.76201 0.984202 1.89272 1.01034 2.01458 1.06111C2.13644 1.11188 2.24704 1.18627 2.34 1.28L6.2 5.28C6.38323 5.46693 6.48586 5.71825 6.48586 5.98C6.48586 6.24175 6.38323 6.49307 6.2 6.68L2.2 10.68C2.11024 10.7769 2.00217 10.8551 1.88202 10.91C1.76187 10.965 1.63203 10.9955 1.5 11Z" fill="#3671E9" />
            </svg>
        </div>
    )
}

export default Arrow;