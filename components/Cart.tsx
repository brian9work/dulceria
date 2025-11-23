import { MyContext } from '@/context/Context';
import Form from './Form';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'

export type Cart = {
   id: number
   name: string
   price: number
   category: string
   image: StaticImageData
   quantity: number;
}
export type CartList = Cart[];

export default function Cart(
   { cartActive, setCartActive }:
      { cartActive: boolean, setCartActive: React.Dispatch<React.SetStateAction<boolean>> }
) {
   const { cartList, setCartList } = MyContext();
   const [formData, setFormData] = useState({
      name: '',
      lastName: '',
      phone: '',

      street: '',
      numerHome: '',
      cologne: '',
   });

   return (
      <div
         className={`fixed right-0 w-[300px] h-full max-h-[calc(100vh-100px)] overflow-y-auto
            ${cartActive ? 'block' : 'hidden'} bg-white border-l border-gray-300 p-4 pb-0 shadow-lg
         `}>
         {cartList.map(item => (
            <div key={item.id} className='relative bg-white hover:bg-pink-50/70 p-2'>
               <div className='flex items-center'>
                  <Image
                     src={item.image}
                     alt={item.name}
                     width={100}
                     height={100}
                     className="w-20 h-20 object-cover"
                  />
                  <div className='ml-4 w-full'>
                     <div className='flex justify-end items-center'>
                        <button className="bg-red-500 text-white rounded-lg px-3 py-1 mt-2 hover:bg-red-600 transition cursor-pointer text-sm "
                           onClick={() => {
                              const updatedCart = cartList.filter(cartItem => cartItem.id !== item.id);
                              setCartList(updatedCart);
                           }}
                        >Eliminar</button>
                     </div>
                     <h2 className='font-semibold'>{item.name}</h2>
                     <h3 className='text-pink-400 font-bold'>${item.price.toFixed(2)}</h3>
                  </div>
               </div>

               <div className='flex justify-end items-center mt-2 select-none'>
                  <span className='bg-pink-300 w-7 text-center rounded-md cursor-pointer'
                     onClick={() => {
                        if (item.quantity > 1) {
                           const updatedCart = cartList.map(cartItem => {
                              if (cartItem.id === item.id) {
                                 return { ...cartItem, quantity: cartItem.quantity - 1 }
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
                     onClick={() => {
                        const updatedCart = cartList.map(cartItem => {
                           if (cartItem.id === item.id) {
                              return { ...cartItem, quantity: cartItem.quantity + 1 }
                           }
                           return cartItem;
                        });
                        setCartList(updatedCart);
                     }}
                  >+</span>
               </div>

            </div>
         ))}

         <div>
            <Form formData={formData} setFormData={setFormData} />
         </div>

         <div className='w-full h-20 sticky bottom-0 bg-white flex justify-between items-center'>
            <div className='flex justify-between items-center'>
               <p className='text-pink-500 font-bold'>Total: ${cartList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
            </div>
            <div className='flex justify-end items-center'>
               <button
                  className="bg-pink-500 text-white rounded-lg px-4 py-2 mt-2 hover:bg-pink-600 disabled:bg-pink-100 disabled:text-pink-500 transition cursor-pointer disabled:cursor-not-allowed"
                  disabled={
                     formData.name === '' || formData.lastName === '' || formData.phone === '' || formData.street === '' || formData.numerHome === '' || formData.cologne === '' ||
                     cartList.length === 0
                  }
                  onClick={() => LinkToWhatsapp({ cartList, formData })}
               >
                  Ordenar
               </button>
            </div>
         </div>
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

const Order = () => {
   const { cartList, setCartList } = MyContext();
   const [formData, setFormData] = useState({
      name: '',
      lastName: '',
      phone: '',
      street: '',
      numerHome: '',
      cologne: '',
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
      setCartList([]);
      setFormData({
         name: '',
         lastName: '',
         phone: '',
         street: '',
         numerHome: '',
         cologne: '',
      });
   }
}

const LinkToWhatsapp = ({ cartList, formData }: { cartList: CartList } & { formData: { name: string; lastName: string; phone: string; street: string; numerHome: string; cologne: string; } }) => {
   const url = `https://wa.me/521${"7299411014"}?text=
      Hola, me gustaria ordenar los siguientes productos: 
      ${cartList.map(item => "" + item.quantity + "pz de *" + item.name + "* ").join(', ')}.
      Nombre: *${formData.name} ${formData.lastName}* Telefono: *${formData.phone}* Direccion: *${formData.street} ${formData.numerHome} ${formData.cologne}*.
      Total: *$${cartList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}*`;
   window.open(url, '_blank');
}