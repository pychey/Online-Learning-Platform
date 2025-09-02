import React from 'react'
import Cart from './Cartheader'
import CartPage from './Cartpage'
import CheckoutPage from './CheckoutDetail'

const page = () => {
  return (
   <>
   <Cart/>
   {/* <CartPage/> */}
   <CheckoutPage/>
   </>
  )
}

export default page