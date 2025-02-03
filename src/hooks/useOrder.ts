import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

/// Generic state <> se utiliza para darle definir de forma mas especifica un valor
export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    ///Propias 
    const [tip, setTip] = useState(0)

    ////Funcion para agregar los elementos a la otra columna  
    const addItem = (item : MenuItem) => {

        const itemExist = order.find( orderItem => orderItem.id === item.id )
        if (itemExist){
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ?
            {...orderItem, quantity: orderItem.quantity + 1 } :
            orderItem 
            )
            setOrder(updatedOrder)
            
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    ////remover con la X
    const removeItem = (id : MenuItem['id']) => {
        setOrder(order.filter( item => item.id !== id))
    }

    ////elementos asosicados al boton
    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return { 
        order,
        tip,
        setTip,
        addItem, 
        removeItem,
        placeOrder
    
    }
}