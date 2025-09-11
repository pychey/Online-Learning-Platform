import React from 'react'
import CartPage from './_component/Cartpage'
import Cartheader from './_component/Cartheader'

const Cart = () => {
  return (
    <div className='mt-20'>
      <Cartheader/>
      <CartPage/>
    </div>
  )
} 

export default Cart