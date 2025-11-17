import { MyContext } from '@/context/Context';
import React from 'react'
export type Cart = {
   id: number
   name: string
   price: number
   category: string
   image: string
   quantity: number;
}
export type CartList = Cart[];

export default function Cart({ cartActive, setCartActive }: { cartActive: boolean, setCartActive: React.Dispatch<React.SetStateAction<boolean>> }) {
   const { cartList, setCartList } = MyContext();

   return (
      <div
         className={`fixed right-0 w-[300px] min-h-full 
            ${cartActive ? 'block' : 'hidden'} bg-white border-l border-gray-300 p-4 shadow-lg
         `}>
         {cartList.map(item => (
            <div key={item.id}>
               <h2 className='font-semibold'>{item.name}</h2>
               <h3 className='text-pink-400 font-bold'>${item.price}</h3>
               <div className='flex justify-end items-center mt-2 select-none'>
                  <span className='bg-pink-300 w-7 text-center rounded-md cursor-pointer'
                     onClick={()=>{
                        if(item.quantity > 1){
                           const updatedCart = cartList.map(cartItem => {
                              if(cartItem.id === item.id){
                                 return {...cartItem, quantity: cartItem.quantity - 1}
                              }
                              return cartItem;
                           });
                           setCartList(updatedCart);
                        } else {
                           const updatedCart = cartList.filter(cartItem => cartItem.id !== item.id);
                           setCartList(updatedCart);
                        }
                     }}
                  >-</span>
                  <p className='px-5'>{item.quantity}</p>
                  <span className='bg-pink-300 w-7 text-center rounded-md cursor-pointer'
                     onClick={()=>{
                        const updatedCart = cartList.map(cartItem => {
                           if(cartItem.id === item.id){
                              return {...cartItem, quantity: cartItem.quantity + 1}
                           }
                           return cartItem;
                        });
                        setCartList(updatedCart);
                     }}
                  >+</span>
               </div>
            </div>
         ))}
      </div>
   )
}


export function CartItem({ cartActive, setCartActive }: { cartActive: boolean, setCartActive: React.Dispatch<React.SetStateAction<boolean>> }) {
   const { cartList } = MyContext();

   return (
      <div
         className="cursor-pointer rounded-md bg-orange-200 px-3 py-1 text-sm font-medium text-foreground hover:bg-orange-300"
         onClick={() => setCartActive(!cartActive)}
      >
         Carrito {cartList.length} items
      </div>
   )
}
