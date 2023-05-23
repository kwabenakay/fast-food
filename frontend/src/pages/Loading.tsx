import { useSelector } from "react-redux";
import Ticket from "../components/Ticket";

export default function Loading() {
  const tickets = useSelector((state: any) => state.data.loading);
  return (
    <div className=" bg-[#FBF3EF] pb-5">
      <div className=" pt-5 pb-5">
        <img src="/foodlogo.svg" alt="logo" />
      </div>
      <div className=" grid grid-cols-2 gap-60 px-40">
        <div>
          <h1 className=" text-3xl font-bold mb-5">ORDERS</h1>
          <Ticket tickets={tickets} />
        </div>
        <div className=" flex flex-col justify-between w-fit">
          <div className=" bg-white flex flex-col justify-between shadow-lg w-96 min-h-[400px] p-6">
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-3xl text-center">ticket id</h1>
              <h2 className=" text-xl">Customer name</h2>
              <div className=" flex flex-col gap-2 pl-4">
                <h3>2Chips </h3>
                <h3>2Chips </h3>
                <h3>2Chips </h3>
                <h3>2Chips </h3>
              </div>
            </div>
            <div className=" text-right"></div>
          </div>
          <button className=" bg-[#B29740] w-28 h-14 rounded-lg font-bold text-xl self-end hover:bg-[#FDD65C]">
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}
