import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCardMUI from './MovieCardMUI'
import { clearCart, removeItem } from '../../Utils/cartSlice'

const CartPage = () => {
// Taking details from store by subscribing...
    const cartItems=useSelector(store=>store.cart.items)

    const dispatch=useDispatch()
    //Descrining the functions of button
                                        //clearCart is discribed in cartSlice component.
    const ClearCartAll=()=>{dispatch(clearCart())}
    const removeLastItem=()=>{dispatch( removeItem())}

  return (
    <>
     {/*Creating buttons on cart page  */}
     <button onClick={()=>ClearCartAll()}>Clear Cart</button>
            <button style={{marginLeft:"20px"}} onClick={()=>removeLastItem()}>Remove Last Item</button>
            
    <div style={{marginTop:"60px", display:'flex',flexWrap:"wrap", gap:"10px"}}>
       {
        //Took elements using map and put it into a component(if we need we can create new component)   
            cartItems.map((element)=>(<MovieCardMUI{...element}/>))
        }
    </div>
    </>
  )
}

export default CartPage