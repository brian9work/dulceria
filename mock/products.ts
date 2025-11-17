export type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Gomitas de Ositos",
    price: 2.99,
    category: "Gomitas",
    image: "/colorful-gummy-bears-candy.jpg",
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
    image: "/assorted-hard-candy.jpg",
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
    image: "/colorful-marshmallows.jpg",
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

export default productsData