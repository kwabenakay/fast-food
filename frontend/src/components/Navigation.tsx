import { useNavigate } from "react-router";

export default function Navigation() {
    const navigate= useNavigate()
  return (
    <div className=" flex gap-40 pt-5 pb-5">
      <img src="/foodlogo.svg" alt="logo" className=" " />
        <div className=" text-2xl font-bold flex gap-2 items-center">
            <button className=" hover:text-[#B29740]" onClick={()=>{ navigate('/order')}}>ORDER</button>
            <button className=" hover:text-[#B29740]" onClick={()=>{ navigate('/loading')}}>LOADING</button>
            <button className=" hover:text-[#B29740]" onClick={()=>{ navigate('/serving')}}>SERVING</button>
        </div>
    </div>
  );
}
