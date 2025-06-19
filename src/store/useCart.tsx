import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, initProducts } from "./products";


export type CartItem = Product & { quantity: number };

type State = {
  products: Product[];
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
};

export const useCart = create<State>()(
  persist(
    (set, get) => ({
      products: initProducts,
      cartItems: [],
      totalPrice: 0,

      addToCart: (productId: string) => {
        const product = get().products.find((item) => item.id === productId);
        if (!product) return;

        const existingItem = get().cartItems.find((item) => item.id === productId);

        if (existingItem) {
          const updatedItems = get().cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );

          set({
            cartItems: updatedItems,
            totalPrice: get().totalPrice + product.price,
          });
        } else {
          set({
            cartItems: [...get().cartItems, { ...product, quantity: 1 }],
            totalPrice: get().totalPrice + product.price,
          });
        }
      },

      removeFromCart: (productId: string) => {
        const existingItem = get().cartItems.find((item) => item.id === productId);
        if (!existingItem) return;

        if (existingItem.quantity > 1) {
          const updatedItems = get().cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          set({
            cartItems: updatedItems,
            totalPrice: get().totalPrice - existingItem.price,
          });
        } else {
          const filteredItems = get().cartItems.filter((item) => item.id !== productId);
          set({
           cartItems: filteredItems,
          totalPrice:
          filteredItems.length === 0 ? 0 : get().totalPrice - existingItem.price,
          });
        }
      },

      clearCart: () => {
        set({ cartItems: [], totalPrice: 0 });
      },

      getItemCount: () =>
        get().cartItems.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "cart-storage", 
    }
  )
);
