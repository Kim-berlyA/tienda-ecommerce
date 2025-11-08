import { useContext } from "react"
import CartContent from "../components/CartContent"
import CheckoutButton from "../components/CheckoutButton"

export default function Cart() {

  return (
    <div>
      <CartContent />
      <CheckoutButton />
    </div>
  )
}
