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
  {
    id: 10,
    name: "Gomitas Enchiladas",
    price: 3.29,
    category: "Gomitas",
    image: images.store.gomitas_enchiladas,
  },
  {
    id: 11,
    name: "Paleta de Tamarindo",
    price: 1.99,
    category: "Paletas",
    image: images.store.paleta_tamarindo,
  },
  {
    id: 12,
    name: "Chocolate con Almendras",
    price: 5.49,
    category: "Chocolates",
    image: images.store.chocolate_almendras,
  },
  {
    id: 13,
    name: "Chicles de Fresa",
    price: 1.69,
    category: "Chicles",
    image: images.store.chicles_fresa,
  },
  {
    id: 14,
    name: "Gomitas de Fruta",
    price: 2.89,
    category: "Gomitas",
    image: images.store.gomitas_fruta,
  },
  {
    id: 15,
    name: "Malvaviscos Rellenos",
    price: 3.19,
    category: "Suaves",
    image: images.store.malvavisco_relleno,
  },
  {
    id: 16,
    name: "Caramelos de Miel",
    price: 2.59,
    category: "Caramelos",
    image: images.store.caramelos_miel,
  },
  {
    id: 17,
    name: "Chocolate con Nueces",
    price: 5.99,
    category: "Chocolates",
    image: images.store.chocolate_nueces,
  },
  {
    id: 18,
    name: "Paleta Arcoíris",
    price: 1.79,
    category: "Paletas",
    image: images.store.paleta_arcoiris,
  },
  {
    id: 19,
    name: "Chicles Surtidos",
    price: 2.29,
    category: "Chicles",
    image: images.store.chicles_surtidos,
  },
  {
    id: 20,
    name: "Gomitas de Mango",
    price: 3.39,
    category: "Gomitas",
    image: images.store.gomitas_mango,
  },
];


export default productsData