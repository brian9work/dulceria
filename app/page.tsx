"use client";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Tab from "@/components/Tab";
import { Provider } from "@/context/Context";
import React from "react";

export default function Home() {
  const [category, setCategory] = React.useState<string>("todo");
  const [cartActive, setCartActive] = React.useState<boolean>(false);
  return (
    <Provider>
      <div className="min-h-screen bg-zinc-50 font-sans ">
        <Header cartActive={cartActive} setCartActive={setCartActive} />
        <Cart cartActive={cartActive} setCartActive={setCartActive} />
        <Hero />
        <Tab category={category} setCategory={setCategory} />
        <Products category={category} />
        <Footer />
      </div>
    </Provider>
  );
}
