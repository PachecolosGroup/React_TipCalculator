import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/indes"

type OrdenTotalsProps = {
  order: OrderItem[]
}



export default function OrderTotals( {order} : OrdenTotalsProps) {

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])


  return (
    <>
      <div className="spacey-3">
        <h2 className="font-black text-2xl">Totals y Propina:</h2>
        <p> 
          Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency (subtotalAmount)}</span>
        </p>

        <p> 
          Propinas: {''}
          <span className="font-bold">$0</span>
        </p>

        <p> 
          Total a Pagar: {''}
          <span className="font-bold">$0</span>
        </p>


      </div>

      <button></button>
    </>
  )
}

