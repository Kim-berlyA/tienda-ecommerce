import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function CheckoutButton() {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="sticky bottom-20 flex justify-center">
      <button
      onClick={() => navigate('/checkout')}
       className={`bg-primary py-3 px-5 text-white text-lg rounded-full ${cart.length === 0 ? 'hidden' : ''}`}>
        Checkout ₦{totalPrice.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
      </button>
    </div>
  )
}
