
import categories from '@/mock/categories';
import React, { JSX } from 'react'

export default function Tab({ category, setCategory }: { category: string, setCategory: (category: string) => void }): JSX.Element {
   return (
      <div className='w-full bg-white'>
         <div className='w-11/12 mx-auto flex gap-3 py-5 flex-wrap'>
            {categories.map((cat) => (
               <Item
                  key={cat.id}
                  id={cat.id}
                  name={cat.name}
                  category={category}
                  fn={setCategory}
               />
            ))}
         </div>
      </div>
   )
}


interface ItemProps {
   id: number;
   name: string;
   fn: any
}

function Item({ id, name, category, fn }: ItemProps & { category: string }): JSX.Element {
   return (
      <div
         onClick={
            () => {
               fn(name.toLowerCase());
            }
         }
         className={`
            px-4 py-2 
            cursor-pointer 
            shadow-sm
            rounded-2xl
            text-sm 
            font-medium 
            uppercase
            ${category === name.toLowerCase() ? "bg-pink-100" : "bg-orange-50"}
            `}>
         {name}
      </div>
   )
}



