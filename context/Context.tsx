import { CartList } from '@/components/Cart';
import { createContext, useContext, useState } from 'react';

type ContextType = {
  cartList: CartList;
  setCartList: React.Dispatch<React.SetStateAction<CartList>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const MyContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error('MyContext debe usarse dentro de un Provider');
  return context;
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [cartList, setCartList] = useState<CartList>([]);
  return (
    <Context.Provider value={{
      cartList,
      setCartList
    }}>
      {children}
    </Context.Provider>
  );
};
