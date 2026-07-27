import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { getProductById } from "../data/products.js";

const BagContext = createContext(null);

export function BagProvider({ children }) {
  // bagItems: { [productId]: quantity }
  const [bagItems, setBagItems] = useState({});
  const [wishlist, setWishlist] = useState(() => new Set());
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2200);
  };

  const addToBag = (productId, quantity = 1) => {
    setBagItems((previous) => ({
      ...previous,
      [productId]: (previous[productId] || 0) + quantity,
    }));

    const product = getProductById(productId);
    showToast(`${product ? product.name : "Item"} added to bag`);
  };

  const removeFromBag = (productId) => {
    setBagItems((previous) => {
      const next = { ...previous };
      delete next[productId];
      return next;
    });
  };

  const updateQuantity = (productId, quantity) => {
    setBagItems((previous) => {
      if (quantity <= 0) {
        const next = { ...previous };
        delete next[productId];
        return next;
      }

      return { ...previous, [productId]: quantity };
    });
  };

  const toggleWishlist = (productId) => {
    setWishlist((previous) => {
      const next = new Set(previous);

      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
        showToast("Added to favorites");
      }

      return next;
    });
  };

  const bagEntries = useMemo(
    () =>
      Object.entries(bagItems)
        .map(([id, quantity]) => {
          const product = getProductById(id);
          return product ? { product, quantity } : null;
        })
        .filter(Boolean),
    [bagItems]
  );

  const bagCount = useMemo(
    () =>
      Object.values(bagItems).reduce(
        (sum, quantity) => sum + quantity,
        0
      ),
    [bagItems]
  );

  const bagTotal = useMemo(
    () =>
      bagEntries.reduce((sum, { product, quantity }) => {
        const price = product.sale
          ? product.salePrice
          : product.price;
        return sum + price * quantity;
      }, 0),
    [bagEntries]
  );

  const value = {
    bagEntries,
    bagCount,
    bagTotal,
    addToBag,
    removeFromBag,
    updateQuantity,
    wishlist,
    toggleWishlist,
    isWishlisted: (id) => wishlist.has(id),
    toast,
  };

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);

  if (!context) {
    throw new Error("useBag must be used within a BagProvider");
  }

  return context;
}
