"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
}

type CartItem = Product & { quantity: number }

const products: Product[] = [
  {
    id: 1,
    name: "Gomitas de Ositos",
    price: 2.99,
    category: "Gomitas",
    image: "/colorful-gummy-bears.jpg",
  },
  {
    id: 2,
    name: "Chocolate con Leche",
    price: 3.99,
    category: "Chocolates",
    image: "/milk-chocolate-bar.png",
  },
  {
    id: 3,
    name: "Caramelos Duros",
    price: 1.99,
    category: "Caramelos",
    image: "/hard-candy-assorted.jpg",
  },
  {
    id: 4,
    name: "Paletas de Colores",
    price: 1.49,
    category: "Paletas",
    image: "/rainbow-lollipops.jpg",
  },
  {
    id: 5,
    name: "Gomitas Ácidas",
    price: 3.49,
    category: "Gomitas",
    image: "/sour-gummy-worms.jpg",
  },
  {
    id: 6,
    name: "Chocolate Blanco",
    price: 4.49,
    category: "Chocolates",
    image: "/white-chocolate-bar.png",
  },
  {
    id: 7,
    name: "Malvaviscos",
    price: 2.49,
    category: "Suaves",
    image: "/marshmallows-colorful.jpg",
  },
  {
    id: 8,
    name: "Chicles de Menta",
    price: 1.79,
    category: "Chicles",
    image: "/mint-chewing-gum.jpg",
  },
  {
    id: 9,
    name: "Chocolate Negro",
    price: 4.99,
    category: "Chocolates",
    image: "/dark-chocolate-bar.png",
  },
]

export function CandyShop() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    })
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Dulcería Encantada
            </h1>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative bg-transparent">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">{totalItems}</Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Tu Carrito</SheetTitle>
                <SheetDescription>
                  {totalItems === 0
                    ? "Tu carrito está vacío"
                    : `${totalItems} producto${totalItems > 1 ? "s" : ""} en tu carrito`}
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-1 flex-col gap-4 overflow-auto py-4">
                {cart.map((item) => (
                  <Card key={item.id} className="flex gap-4 p-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right font-semibold text-card-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </Card>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-border pt-4">
                  <div className="mb-4 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" placeholder="Dirección de entrega" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="Tu número de teléfono" />
                    </div>
                    <Button className="w-full" size="lg">
                      Realizar Pedido
                    </Button>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            ¡Los Dulces Más Deliciosos!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Descubre nuestra increíble selección de dulces, chocolates y golosinas. Entrega rápida a domicilio.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h3 className="text-balance font-semibold text-card-foreground">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <Button onClick={() => addToCart(product)} size="sm">
                    <Plus className="mr-1 h-4 w-4" />
                    Agregar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Dulcería Encantada. Endulzando tu vida, un dulce a la vez.</p>
        </div>
      </footer>
    </div>
  )
}
