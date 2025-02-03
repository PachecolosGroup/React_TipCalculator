import type { MenuItem } from "../types"


//type del item
type MenuItemProps = {
    item: MenuItem,
    addItem: (item : MenuItem) => void
}

export default function MenuItem( { item, addItem } : MenuItemProps  ) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-5 rounded-xl"
    onClick={ () => addItem(item) }
    >

    <p>{item.name}</p>
    <p className="font-bold">${item.price}</p>

    </button>
   
  )
}
