import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/indes"

type OrdenTotalsProps = {
  order: OrderItem[],
  tip : number
  placeOrder : () => void
}



export default function OrderTotals( {order, tip, placeOrder} : OrdenTotalsProps) {

  const subtotalAmount = useCallback(() => order.reduce(
    (total, item) => total + (item.quantity * item.price), 0), [order])
  
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
  const totalAmount = useCallback(() => subtotalAmount() + tipAmount(),[tip, order] )



  return (
    <>
      <div className="spacey-3">
        <h2 className="font-black text-2xl">Totals y Propina:</h2>
        <p> 
          Subtotal a pagar: {''}
          <span className="font-bold"> {formatCurrency (subtotalAmount())} </span>
        </p>

        <p> 
          Propinas: {''}
          <span className="font-bold"> {formatCurrency (tipAmount())} </span>
        </p>

        <p> 
          Total a Pagar: {''}
          <span className="font-bold"> {formatCurrency (totalAmount())} </span>
        </p>


      </div>

      <button className="w-full bg-black p-3 text-white uppercase font-bold mt-10 rounded-full
      disabled:opacity-10"
        disabled={totalAmount() === 0}
        onClick={placeOrder}>
        Guardar Order
      </button>
    </>
  )
}

