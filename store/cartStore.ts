import { create } from "zustand";

export type CartStoreType = {
  items: {
    product: TProduct;
    quantity: number;
  }[];
  addProduct: (product: TProduct) => void;
};

export const useCart = create<CartStoreType>((set) => ({
  items: [],
  addProduct: (product: TProduct) =>
    set((state: { items: any }) => ({
      items: [
        ...state.items,
        {
          product,
          quantity: 1,
        },
      ],
    })),
}));
