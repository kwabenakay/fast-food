import CloseIcon from '@mui/icons-material/Close';

export default function SelectedOrders(Prop:{name:string,num:number}) {

  return (
    <div className=' bg-[#E1A272]'>
      {Prop.name+' '+ Prop.num+' '}
      <span><CloseIcon htmlColor='#FE0404' /></span>
    </div>
  )
}
