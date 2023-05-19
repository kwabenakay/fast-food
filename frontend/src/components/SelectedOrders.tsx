import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function SelectedOrders(Prop:{selected:{name:string,num:number}[]}) {
  const [orders, setOrders] = useState(Prop.selected)
  return (
    <div className=' bg-black bg-opacity-10 h-56 rounded-lg overflow-y-auto grid grid-cols-2 gap-2 p-4 border border-black'>
      {orders.map((order,ind)=>(
      <div key={'order'+ind} className=' bg-[#E1A272] h-12 p-1 flex justify-between rounded-sm text-3xl'>
      {order.name+' '+ order.num}
      <span><CloseIcon htmlColor='#FE0404' fontSize='large' /></span>
    </div>
    ))}
    </div>
  )
}
