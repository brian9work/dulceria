import React from 'react'

export default function Hero() {
    return (
        <section className="border-b border-border bg-orange-100 py-12 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                    ¡Los Dulces Más Deliciosos!
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                    Descubre nuestra increíble selección de dulces, chocolates y golosinas. Entrega rápida a domicilio.
                </p>
            </div>
        </section>

    )
}
