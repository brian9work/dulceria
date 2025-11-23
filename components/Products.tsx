import { MyContext } from '@/context/Context';
import productsData, { Product } from '@/mock/products'
import Image from 'next/image';
import React, { JSX } from 'react'

export default function Products({ category }: { category: string }): JSX.Element {

   const filteredProducts = category === "todo"
      ? productsData
      : productsData.filter(product => product.category.toLowerCase() === category);

   return (
      <div className='flex flex-wrap justify-center mt-8 mb-8'>
         {filteredProducts.map((product) => (
            <ProductItem
               key={product.id}
               {...product}
            />
         ))}
      </div>
   )
}

function ProductItem(product: Product) {
   const { cartList, setCartList } = MyContext();
   return (
      <div className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white m-2 rounded-lg shadow-sm">
         <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-64 object-cover"
         />
         <p className='mt-5 uppercase p-2 rounded-xl bg-pink-100 w-fit text-sm font-bold'>{product.category}</p>
         <h3 className='uppercase rounded-xl text-xl font-bold'>{product.name}</h3>
         <h4 className='uppercase p-2 rounded-xl text-pink-500 w-fit text-3xl font-bold'>${product.price.toFixed(2)}</h4>
         <button className="bg-pink-500 text-white rounded-lg px-4 py-2 mt-2 hover:bg-pink-600 transition cursor-pointer"
            onClick={() => {
               const existingProductIndex = cartList.findIndex(item => item.id === product.id);
               let newCartList = [...cartList];
               if (existingProductIndex >= 0) {
                  newCartList[existingProductIndex].quantity += 1;
               } else {
                  newCartList.push({ ...product, quantity: 1 });
               }

               setCartList(newCartList);
            }}>
            Agregar al carrito
         </button>
      </div>
   )
}