import { MyContext } from '@/context/Context';
import React from 'react'
import { CartItem } from './Cart';

export default function Header({ cartActive, setCartActive }: { cartActive: boolean, setCartActive: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <header className="sticky flex items-center justify-center w-full top-0 z-50 bg-card/95 backdrop-blur bg-gray-50 h-[100px] shadow-sm ">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center justify-between w-full gap-2">
                    {/* <Sparkles className="h-8 w-8 text-primary" /> */}
                    <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        Dulcería
                    </h1>
                    <h3>
                        <CartItem cartActive={cartActive} setCartActive={setCartActive} />
                    </h3>
                </div>
            </div>
        </header>
    )
}
