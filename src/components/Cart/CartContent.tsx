import { useCart } from "../../hooks/useCart"
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function CartContent() {
  const { cart, totalPrice, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-1 mb-15">
      <div className="flex gap-5 items-center my-5">
        <button
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="ml-2" />
        </button>
        <h2 className="text-2xl font-medium">Cart</h2>
      </div>

      <div className="flex justify-between mx-1">
        <span>Subtotal</span>
        <span>₦ {totalPrice.toLocaleString("en-NG", { minimumFractionDigits: 2 })}</span>
      </div>

      <div className="bg-neutral-200 pt-1 pb-0.5 mb-9">
        {cart.map(item => (
          <Link
           key={item.productId}
           to={`/details/${item.productId}`}
           className="bg-white mb-1 mx-1 rounded-md flex items-center gap-3">
            <img src={item.thumbnail} alt={item.title} className="size-1/4 md:size-1/6" />

            <div className="py-2 w-full">
              <p className="text-sm">{item.title}</p>
              <p className="font-medium">
                ₦ {(item.price * 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
              </p>
              <span className="text-neutral-700 line-through text-sm">
                ₦{(Math.round((item.price * 0.12 + item.price * 100) * 100) / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
              </span>
              <span className="bg-[#f7d6e1] text-primary ml-2 p-1 rounded-sm text-xs">-12%</span>

              <div className="flex justify-between items-center">
                <p className="my-1 text-neutral-500 shrink-0">{item.stock} units left</p>
                <div className="w-full flex justify-end">
                </div>
                <div
                  className="rounded-full w-fit text-white flex mr-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <div className="bg-primary flex justify-center items-center size-7 rounded-sm text-xl"
                  onClick={() => removeFromCart(item.productId)}>-</div>
                  <div className="flex justify-center items-center mx-5 text-black">{item.quantity}</div>
                  <div className="bg-primary flex justify-center items-center size-7 rounded-sm text-xl"
                  onClick={() => addToCart(item.productId, item.title, item.price, item.stock, item.thumbnail, item.description)}>+</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
