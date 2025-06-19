// src/components/Cart/CartModal.tsx
import React from "react";
import { useCart } from "../../store/useCart";
import "./modal.styles.css"; // Opcional: tu estilo o Tailwind

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.img} alt={item.name} width={50} />
                  {item.name} x{item.quantity} – ${item.price * item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${totalPrice}</p>
            <button onClick={clearCart}>Clear Cart</button>
          </>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
