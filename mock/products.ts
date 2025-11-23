import images from "@/assets"
import { StaticImageData } from "next/image"

export type Product = {
  id: number
  name: string
  price: number
  category: string
  image: StaticImageData
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Gomitas de Ositos",
    price: 2.99,
    category: "Gomitas",
    image: images.store.gomitas_osos,
  },
  {
    id: 2,
    name: "Chocolate con Leche",
    price: 3.99,
    category: "Chocolates",
    image: images.store.chocolate_leche,
  },
  {
    id: 3,
    name: "Caramelos Duros",
    price: 1.99,
    category: "Caramelos",
    image: images.store.caramelos,
  },
  {
    id: 4,
    name: "Paletas de Colores",
    price: 1.49,
    category: "Paletas",
    image: images.store.paleta,
  },
  {
    id: 5,
    name: "Gomitas Ácidas",
    price: 3.49,
    category: "Gomitas",
    image: images.store.gomitas_asidas,
  },
  {
    id: 6,
    name: "Chocolate Blanco",
    price: 4.49,
    category: "Chocolates",
    image: images.store.chocolate_blanco,
  },
  {
    id: 7,
    name: "Malvaviscos",
    price: 2.49,
    category: "Suaves",
    image: images.store.malvavisco,
  },
  {
    id: 8,
    name: "Chicles de Menta",
    price: 1.79,
    category: "Chicles",
    image: images.store.chicles_menta,
  },
  {
    id: 9,
    name: "Chocolate Negro",
    price: 4.99,
    category: "Chocolates",
    image: images.store.chocolate_negro,
  },
]

export default productsData