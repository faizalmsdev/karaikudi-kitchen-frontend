import React from 'react'

const Button = () => {
    const handleOrderNow = ()=>{
        console.log('order now clicked')
    }
    return (
        <button type='button' className='bg-primary w-22 p-1 rounded-md text-sm text-background px-4 py-2 hover:bg-secondary hover:text-text font-semibold' onClick={handleOrderNow}>
            Order Now
        </button>
    )
}

export default Button
